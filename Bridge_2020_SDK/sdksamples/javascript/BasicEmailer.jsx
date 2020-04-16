////////////////////////////////////////////////////////////////////////////
// ADOBE SYSTEMS INCORPORATED
// Copyright 2008-2017 Adobe Systems Incorporated
// All Rights Reserved
//
// NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
// terms of the Adobe license agreement accompanying it.  If you have received this file from a
// source other than Adobe, then your use, modification, or distribution of it requires the prior
// written permission of Adobe.
/////////////////////////////////////////////////////////////////////////////

/** 
  
  @fileoverview Shows how to use the Socket object to send emails with attachments from Bridge.
  @class Shows how to use the Socket object to send emails with attachments from Bridge.
 
  <h4>Usage</h4>
     <b>You must</b> edit the mailserver settings within this code; the code as shipped does not provide any default
  values for these settings and if you do not edit these settings in the code (see "NOTE" below),
  then the code will not run correctly. 
  
   <ol>
   <li> Customize the email settings in the code to match your mail system and user accounts; look for NOTE below.
   <li> Run the snippet in the ExtendScript Toolkit, with Adobe Bridge CC 2018 as the target (see Readme.txt).
   <li>You should find this creates a context-sensitive menu item on file thumbnails.
   <li> In Bridge, select one or more thumbnails for the files to send. Ideally, choose small files.
   <li> Right click in Windows or Ctrl-click in Mac OS to invoke the context menu.
   <li> Select the menu item "SDK BasicEmailer: Send by Email"
   <li> Inspect the JavaScript console for confirmation of the email being sent.
   <li> Check your email client for the arrival of an email with attached files.
   </ol>

  <h4>Description</h4>

<p>This example uses the Socket object to send an email with multiple attachments,
  by writing to an SMTP server. Attachments are sent as binary data, encoded 
  into Base64 encoding. 
  
<p>This sample sends a single email message at a time, and blocks the main thread in Bridge
  until the message has been sent. You should select small files (under 100Kb) to send. 
  For a non-blocking example, suitable for sending larger files, see BackgroundEmailer.jsx

<p>Note that this sample is a demonstration of a technique; it may not run as expected with 
  	all mail servers, and is not intended to be a robust mail client.<br />

 @see BackgroundEmailer
 
  @constructor Constructor.
 */
function BasicEmailer()
{

	/**
	 The context in which this sample can run.
	 @type String
	*/
	this.requiredContext = "\tEnsure that Bridge is running and set as the target and that you have supplied your own mail server details.\n";

	/** 
	  The host address for the mail server, for example mail.adomainname.com - 
	  NOTE: You must customize this with your own host address value.
	 @type String
	*/
	this.mailServerName = "";

	/** 
	 The username, not necessarily the email address,  to authorize with, for example 
	 testemail@adomainname.com - NOTE: You must customize this with your own username value.
	 @type String
	*/
	this.username = "";

	/** 
	 The password for the username - NOTE: You must customize this with your own password value.
	 @type Socket
	*/
	this.password = "";

	/** 
      The senders email address, for example testemail@adomainname.com 
	  - NOTE: You must customize this with your own email address.
	 @type String
	*/
	this.sender = "";

	/** 
       The address the email will be sent to, the receiver of the email - 
	   NOTE: You must customize this with your own recipient address.
	 @type String
	*/
	this.recipient = "";

	/** 
	 The subject of the email
	 @type String
	*/
	this.subject = "Email from Bridge via BasicEmailer.jsx";
	
	/** 
       The port number for the SMTP server, for example port 25 - 
	   NOTE: You may need to customize this with your own port number.
	 @type int
	*/
	this.SMTP =  25;
	
	/** 
       The port number for the POP server, for example port 110 - 
	   NOTE: You may need to customize this with your own port number.
	 @type int
	*/
	this.POP = 110;

	/**
	 The socket object which this object uses to write to the wire
	 @type Socket
	*/
	this.socket = new Socket();
	
	/**
	 The body text of the message
	 @type String
	*/
	this.message = "Hello World";
	
	/**
	The boundary for attachments
	@type String
	*/
	this.boundary = "****=_NextPartMyBody_0000 " + new Date().getSeconds();

	// set the encoding for the socket
	this.socket.encoding = "binary";
	
}

/**
  Constructs a simple message for the body of the email showing which files are attached.

*/
BasicEmailer.prototype.buildMessage = function()
{
	var sl = app.document.selections;
	var message = "BasicEmailer sent the following attachments:\r\n";
	for(var i = 0;i < sl.length;i++)
	{
		if(!sl[i].container)
		{
			message += "\r\n\tName: " +  sl[i].name;
		}
	}
		
	this.message = message;
}

/**
 Attempts to open a socket and connect to a host and port.
 @param host The host name string of the server to connect to
 @param port The port number to connect on, an integer
 @return True if the socket opened successfully, false otherwise
 @type Boolean
*/
BasicEmailer.prototype.connect = function(host, port)
{
	var result = true;
	
	// open the port
	if(!this.socket.open(host + ":" + port))
	{
		$.writeln("BasicEmailer: Error - Could not open socket");
		result = false;	
	}
	
	return result;
}

/**
 Authorizes a username against POP3
*/
BasicEmailer.prototype.authorise = function()
{
	var startDate = new Date();
	$.writeln("IN BasicEmailer.authorise() = " + startDate);

	// use pop3 to authorize with
	try 
	{
		$.writeln("BasicEmailer: Authorizing..." + this.socket.read());
		
		// issue POP3 commands
		this.doCommand("USER " + this.username, "pop")
		this.doCommand("PASS " + this.password, "pop");
		this.doCommand ("QUIT", "pop");
	}
	catch(error) 
	{ 
		$.writeln("BasicEmailer: Error - " + error);
		result = false;
	}
	
	var endDate = new Date();
	$.writeln("OUT BasicEmailer.authorise() = " + endDate);

}

/**
  Carries out either an SMTP or a POP command.  Separates writing data 
  to the socket and sending commands.
  @param cmd The command to be written to the socket
  @param type One of 'pop' or 'smtp' 
  @return True if the command was executed correctly
  @type Boolean
 */
BasicEmailer.prototype.doCommand = function(cmd, type)
{

	var cmndOK = true;
	var reply = "";
	var replyCode = "";
	
	this.socket.write(cmd + "\r\n");

	$.sleep(300);    
	
	if(type == "pop")
	{
		// do POP commands
		reply = this.socket.read();
		replyCode = reply.substring(0, 1);

		if(replyCode == "-")
		{
			cmndOK = false;
			$.writeln("BasicEmailer: Error with POP command:");
			$.writeln("\t" + reply);
			this.close();
		}
	}
	else if(type == "smtp")
	{
		// do SMTP commands
		if(!this.socket.read())
		{
			cmndOK = false;
			$.writeln("BasicEmailer: Error sending mail:");
			$.writeln("\t" + reply);
			this.close();
		}
	}
	else
	{
		$.writeln("BasicEmailer: Unknown command type. Closing the socket.");
		this.close();
	}

	if(!cmndOK) throw "Command error for: " + type + " - " + cmd;
	return cmndOK;

}

/**
 Closes the socket that was used to transmit data
*/
BasicEmailer.prototype.close = function()
{ 
	try
	{
		return this.socket.close();
	}
	catch(error){ $.writeln("BasicEmailer: Error closing socket: " + error); }
}


/**
* Sends the email and attachments by connecting to the server and authorizing via POP.
* Reestablishes the connection and sends the necessary commands to the SMTP server.
* If there are attachments to be sent, encodes them into Base64 and writes them to the socket.
* If any folders are selected in Bridge, they are ignored.
*
* @return True if the mail was sent succesfully.
* @type Boolean
*/
BasicEmailer.prototype.send = function()
{
	var startDate = new Date();
	$.writeln("IN BasicEmailer.send() = " + startDate);

	var retval = false;

	$.writeln("BasicEmailer.send(): Connecting ...");

	// Connect to the server
	if(!this.connect(this.mailServerName, this.POP))
	{
		var endDate = new Date();
	    $.writeln("OUT BasicEmailer.send() (failed to connect) = " + endDate);
		return retval;
	}
	// Authorize
	this.authorise();
	// Close the socket
	this.close();

	// Reconnect and send the mail
	if(this.connect(this.mailServerName, this.SMTP))
	{
		try
		{
			// Discard the greeting
			var welcome = this.socket.read();
			$.writeln("BasicEmailer.send(): Sending message via: " + welcome.substring(4));
				
			// Issue EHLO and other commands
			this.doCommand ("EHLO " + this.sender, "smtp");
			this.doCommand ("MAIL FROM: " + this.sender, "smtp");
			this.doCommand ("RCPT TO: " + this.recipient, "smtp");
			this.doCommand ("DATA", "smtp");

			// Send the optional headers
			this.socket.write ('From: "BasicEmailer" <' + this.sender + '>\r\n');
			this.socket.write ("To: " + this.recipient + "\r\n");
			this.socket.write ("Subject: " + this.subject + "\r\n");
			this.socket.write ("Date: " + new Date().toString() +  "\r\n");

			// Set the content type and the boundary
			this.socket.write("MIME-Version: 1.0\r\n");
			this.socket.write("Content-Type: multipart/mixed;\r\n");
			this.socket.write('\tboundary="' + this.boundary + '"\r\n');
			this.socket.write("X-Mailer: Bridge Email Sample\r\n");
			this.socket.write("\r\n");
			this.socket.write("This is a multi-part mesage in MIME format.\r\n");
			this.socket.write("\r\n");
			this.socket.write("--" + this.boundary + "\r\n");
			
			// Send the message
			this.socket.write("Content-Type: text/plain;\r\n");
			this.socket.write("Content-Transfer-Encoding: 7bit\r\n");
			this.socket.write("\r\n");
			this.socket.write(this.message + "\r\n");
			this.socket.write("\r\n");
			this.socket.write("--" + this.boundary + "\r\n");

			// Check if there are any files to be added
			this.addAttachment();
			
			// End the message
			retval = this.doCommand(".", "smtp");
			
			// Quit and send
			this.doCommand("QUIT", "smtp");
				
			this.close();

	        var endDate = new Date();
	        $.writeln("OUT BasicEmailer.send() = " + endDate);
			return retval;
		
		}
		catch (e)
		{
			$.writeln("BasicEmailer: ERROR: " + e);
			this.close();
		}
	}
	var endDate = new Date();
	$.writeln("OUT BasicEmailer.send() = " + endDate);

	return retval;
}

/**
  Adds attachments to the email being sent
*/
BasicEmailer.prototype.addAttachment = function()
{
	var startDate = new Date();
	$.writeln("IN BasicEmailer.addAttachment() = " + startDate);

	var sels = app.document.selections;

	// Get the file selected in Bridge
	if(sels.length != 0)
	{

		// Loop through all selected thumbnails and email the images as attachments
		for(var j = 0;j < sels.length;j++)
		{
			var thumb = sels[j];
		
			// Ignore folders
			if(thumb.container) continue;

			var theFile = thumb.spec;
			
			// Set the encoding to ensure we get characters we can convert correctly.
			theFile.encoding = "binary";

			// Open, read, and close the file
			theFile.open("r");
			var contents = theFile.read();
			theFile.close();
		
			// Set the correct headers for the file type
			this.socket.write("Content-type: " + thumb.mimeType + ";\r\n");
			this.socket.write('\tname="' + thumb.name + '"\r\n');
			this.socket.write("Content-Transfer-Encoding: base64\r\n");
			this.socket.write("Content-Disposition: attachment;\r\n");
			this.socket.write('\tfilename="' + thumb.name + '"\r\n');
			this.socket.write("\r\n");

			// Encode the data
			var encodedData = this.encodeAttachment(contents);

			// Split the encoded data in 76 char lines
			var dataLine = "";
			var counter = 0;
			for(var i = 0;i < encodedData.length;i++)
			{
				dataLine += encodedData[i];
				counter++;

				// if we hit the limit then write the line and reset everything
				if(counter > 75)
				{
					this.socket.write(dataLine + "\r\n");
					dataLine = "";
					counter = 0;
				}
			}

			// Don't forget the last few chars
			this.socket.write(dataLine + "\r\n");

			this.socket.write("\r\n");

			this.socket.write("--" + this.boundary + "\r\n");

			}// end for

		this.socket.write("--" + this.boundary + "--\r\n");

	}

	var endDate = new Date();
	$.writeln("OUT BasicEmailer.addAttachment() = " + endDate);
}

/**
 Accepts a string representing a binary file and encodes it as base64,
 to allow attachments to be sent via email

 @param binaryString The string to encode
 @type String
 @return The base64-encoded string
*/
BasicEmailer.prototype.encodeAttachment = function(binaryString)
{

	// Accepted b64 chars
	var keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

	var encoded = "";
	var c1, c2, c3;
	var e1, e2, e3, e4;
	var i = 0;
	
	while(i < binaryString.length)
	{
		// Get 3 chars starting at the begining of the binary string
		c1 = binaryString.charCodeAt(i++);
		c2 = binaryString.charCodeAt(i++);
		c3 = binaryString.charCodeAt(i++);

		//  Create 4 sets of 6 bits from the 3 ascii bytes
		e1 = c1 >> 2;
		e2 = ((c1 & 3) << 4) | (c2 >> 4);
		e3 = ((c2 & 15) << 2) | (c3 >> 6);
		e4 = c3 & 63;

		// Check that chrs 2 and 3 are correct, if not replace with special padding char
		if (isNaN(c2))
		{
			e3 = e4 = 64;
		} 
		else if (isNaN(c3))
		{
			e4 = 64;
		}

		// Add encoded chars to the return string
		encoded = encoded + keyStr.charAt(e1) + keyStr.charAt(e2) + 
			keyStr.charAt(e3) + keyStr.charAt(e4);
	}

	return encoded;

}


/**
 Functional part of this snippet.

 Runs this sample, calling the helper functions defined below.
 Creates the Socket object and applies mail settings, such as hostname, 
 password, and so on. You must customize the code so that the mail 
 settings correspond to your mail system and user accounts; otherwise, 
 the sample fails and no emails are sent.

 @return True if the sample ran as expected, false otherwise
 @type Boolean
*/
BasicEmailer.prototype.run = function() {
	
	if(!this.canRun()) 
	{
		return false;
	}
	try 
	{
 
	    var emailCommand = new MenuElement("command", "SDK BasicEmailer: Send by Email", "at the end of Thumbnail", "BasicEmailMenu");
   	    // Execute the code in this block only once; if the menu item already existed,
   	    // an exception is thrown above
		$.writeln("BasicEmailer.run(): created menu item, select file(s) and see its context-sensitive menu item");

	    // Take a note of this object
	    var that = this;

	    // ------------------ Handler to define behavior of menu item when it is executed  ------------------ 
	    emailCommand.onSelect = function(m)
	    {
		    // Set the body of the email
		    that.buildMessage();

		    // Attempt to send the email
		    if(that.send())
		    {
			    $.writeln("BasicEmailer: Email sent successfully");
		    }
		    else
		    {
			    $.writeln("BasicEmailer: Email message not sent!");
		    }
	    }

	    // ------------------ Handler for menu item state being checked, should be very lightweight function ------------------ 
	    emailCommand.onDisplay = function(m)
	    {
		    var s = app.document.selections;
		    if(s.length > 0)
		    {
			    this.enabled = true;
		    }
		    else
		    {
			    this.enabled = false;
		    }
	    }
    		
	    $.writeln("BasicEmailer loaded.");
	}
	// If we hit this handler, usually it's because you have tried multiple instantiations.
	catch(error) 
	{ 
		$.writeln("BasicEmailer.run() Error:" + error);
		$.writeln("\tNote that you only need run this snippet once, then use its menu item");
		$.writeln("\tto send files");
		return false;
	}
	return true;
}

/**
 Determines whether snippet can be run in the current context.  The snippet 
 fails if these preconditions are not met:
 <ul>
 <li> Bridge must be running
 </ul>
 	@return True if this snippet can run, false otherwise
 	@type Boolean
*/
BasicEmailer.prototype.canRun = function() 
{
	var retval = false;
	
	if(BridgeTalk.appName == "bridge") 
	{ 

        retval = ! ( (this.username == "")  ||  (this.password == "") 
						|| (this.sender == "") || (this.recipient == "") || (this.subject == "") 
						||(this.SMTP == 0) || (this.POP == 0) 
						|| (this.mailServerName == "") );
						
		if(!retval)
		{
			$.writeln("BasicEmailer: ERROR - Cannot run BasicEmailer");
			$.writeln("BasicEmailer: Check your mail server configuration settings.");
		}

		return retval;
	}

	$.writeln("BasicEmailer: ERROR  - Cannot run BasicEmailer");
	$.writeln("BasicEmailer: " + this.requiredContext);
	return retval;
}

/**
  "main program": construct an anonymous instance and run it
*/
if(typeof(BasicEmailer_unitTest) == "undefined") {
	new BasicEmailer().run();
}
