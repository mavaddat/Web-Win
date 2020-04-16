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
  
  @fileoverview Sample using the Socket object to send email with attachments as a background (scheduled) task.
  @class Sample using the Socket object to send email with attachments as a background (scheduled) task.
 
  <h4>Usage</h4>
   <b>You must</b> edit the mailserver settings within this code; the code as shipped does not provide any default
  values for these settings and if you do not edit these settings in the code (see "NOTE" below),
  then the code will not run correctly. 

  <ol>
   <li> Customize the email settings in the code to match your mail system and user accounts; look for NOTE below.
   <li> Execute the snippet in the ExtendScript Toolkit, with Bridge as the target (see Readme.txt)
   <li>You should find this creates a context-sensitive menu item on selected file thumbnails.
   <li> In the Content pane of Bridge, select one or more thumbnails for the files to send.
   <li> Right click in Windows or Ctrl-click in Mac OS to invoke the context menu
   <li> Choose the menu item "SDK BackgroundEmailer: Send by Email"
   <li> Inspect the JavaScript console for confirmation of the email being sent.
   <li> Check your email client for the arrival of an email with attached files
   </ol>

  <h4>Description</h4>

<p>This example uses the Socket object to send an email with multiple attachments, uing a scheduled task
to perform encoding and send the data in the background.
  It sends just one email message at a time. Attachments are sent as binary data. 
  
<p>This example schedules a task to encode the  data into Base64 encoding and
  write to the SMTP server as a background task, which does not block the 
  Bridge main thread. The Bridge browser functions normally  while the email 
  and files are being sent. Static properties provide operation status updates within 
  the scheduleTask() call. 
  
<p>When the send() method is called, the mail headers are written to the socket and a task named sendData() is scheduled to 
  run and to repeat every 10 milliseconds. Whilst the task is in operation, a file to be attached is read as a binary 
  string, encoded and written to the socket in chunks at a time.  When the last chunk of the last file has been transmitted, 
  the task is cancelled and the socket is closed.
 
<p>You should be aware that this sample is a demonstration of technique; it may not run as expected with 
  	all mail servers, and it is not intended as a robust mail client.
  
<p>For a blocking example, which might be suitable when sending smaller files as attachments, see BasicEmailer.jsx.<br />
  
  @see BasicEmailer
 
  @constructor
  Constructor.
 */
function BackgroundEmailer() 
{
	$.level = 1;
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tEnsure Bridge is running and that it is your target and that you have supplied your own mail server details\n";


//---------- These are all static properties below -------------------------------------------------------------------
 
   /** 
	 The host address for the mail server, for example mail.adomainname.com - 
	 NOTE: You must customize this with your own mailserver. 
	 @type String
	*/
	BackgroundEmailer.mailServerName = "";

	/** 
	 The username, not necessarily the senders email, to authorize with, for example 
	 testemail@adomainname.com - NOTE: You must customize this with your own 
	 username for your (POP3) mail server.
	 @type String
	*/
	BackgroundEmailer.username = "";

	/** 
	 The password for the username - NOTE: You must customize this with your own 
	 password for your (POP3) mail server.
	 @type Socket
	*/
	BackgroundEmailer.password = "";

	/** 
	 The subject of the email.
	 @type String
	*/
	BackgroundEmailer.subject = "SDK BackgroundEmailer Subject";

	/**  
	 The senders email address, for example testemail@adomainname.com - 
	 NOTE: You must customize this with your own emal address.
	 @type String
	*/
	BackgroundEmailer.sender = "";

	/** 
	The address the email will be sent to, the receiver of the email - 
	 NOTE: You must customize this with your own target recipient.
	 @type String
	*/
	BackgroundEmailer.recipient = "";

    /** 
	 The port number for the POP server, for example port 110 - 
	 NOTE: You may want to customize this for your system.
	 @type int
	*/
	BackgroundEmailer.POP = 110;

	/**  
	 The port number for the SMTP server, for example port 25 - 
	 NOTE: You may want to customize this for your system.
	 @type int
	*/
	BackgroundEmailer.SMTP = 25;

	/**
	 The ID of the scheduled task that will encode and transmit data, 
	 needed to cancel the task after it has finished. 
	 @type Number
	*/
	BackgroundEmailer.encodeTaskID = 0;

	/**
	 The binary contents of a file to be attached to the email.
	 @type String
	*/
	BackgroundEmailer.contents = "";

	/**
	 Flag that indicates when an attachment has been transmitted.
	 @type Boolean
	*/
	BackgroundEmailer.finishedAttachment = false;

    /** 
	  Flag that indicates when we are at the start of the process of
        attaching a new file.
        @type Boolean
    */
    BackgroundEmailer.startAttach  = true;
 
	/**
	 The 64 characters used to encode the files to Base64.
	 @type String
	*/
	BackgroundEmailer.b64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

	/**
	 The selected thumbnails for the files to be attached.
	 @type Array of Thumbnail
	*/
	BackgroundEmailer.Thumbnails = new Array();
	
	/**
	 The Socket object that this object uses to write to the wire.
	  @type Socket
	*/
	BackgroundEmailer.socket = new Socket();
	
	/**
        Use binary encoding for file-write operations.
	  @type String
	*/
	BackgroundEmailer.socket.encoding = "binary";

	/**
      Flag that indicates whether or not an email operation is underway
	  @type String
	*/
	BackgroundEmailer.isRunning = false;
	
	/**
	 The boundary marker for attachments.
	  @type String
	*/
	BackgroundEmailer.boundary = "****=_NextPartMyBody_0000 " + new Date().getSeconds();

}

/**
  Constructs a simple message for the body of the email showing which files are attached
*/
BackgroundEmailer.buildMessageBody = function()
{
	var localMessage = "BackgroundEmailer sent the following attachments:\r\n";
	for(var i = 0; i < BackgroundEmailer.Thumbnails.length; i++)
	{
		localMessage += "\r\n\tName: " +  BackgroundEmailer.Thumbnails[i].name;
	}	
	BackgroundEmailer.message  = localMessage;
}

/**
 Attempts to open a socket and connect to a given host and port.
 @param host The server host name string.
 @param port The port number, an integer.
 @return True if the socket opened successfully, false otherwise
 @type Boolean
*/
BackgroundEmailer.connect = function(host, port)
{
	var result = true;
	// If we can, open the port
	if(!BackgroundEmailer.socket.open(host + ":" + port))
	{
		$.writeln("BackgroundEmailer.connect(): Error: Could not open socket");
		result = false;	
	}
	
	return result;
}

/**
  Authorizes a username against POP3.
*/
BackgroundEmailer.authorise = function()
{
	// use pop3 to authorize with
	var startDate = new Date();
	$.writeln("IN BackgroundEmailer.authorise() = " + startDate);
	try 
	{
		$.writeln("BackgroundEmailer.authorise(): Authorizing..." + BackgroundEmailer.socket.read());
		
		// issue POP3 commands
		BackgroundEmailer.doCommand("USER " + BackgroundEmailer.username, "pop")
		BackgroundEmailer.doCommand("PASS " + BackgroundEmailer.password, "pop");
		BackgroundEmailer.doCommand ("QUIT", "pop");
	}
	catch(error) 
	{ 
		$.writeln("BackgroundEmailer.authorise() Error:" + error);
		result = false;
	}
	var endDate = new Date();
	$.writeln("OUT BackgroundEmailer.authorise() = " + endDate);
	
}

/**
 Executes an SMTP or a POP command.  Separates writing data to the socket and sending commands.
 @param cmd The command to be written to the socket
 @param type One of 'pop' or 'smtp'
 @return True if the command was executed correctly
 @type Boolean
*/
BackgroundEmailer.doCommand = function(cmd, type)
{

	var retval = true;
	var reply = "";
	var replyCode = "";
	
	BackgroundEmailer.socket.write(cmd + "\r\n");
	
	$.sleep(300);   
	
	if(type == "pop")
	{
		// do POP commands
		reply = BackgroundEmailer.socket.read();
		replyCode = reply.substring(0, 1);
		if(replyCode == "-")
		{
			retval = false;
			$.writeln("BackgroundEmailer.doCommand(): Error with POP command:");
			$.writeln("\t" + reply);
			BackgroundEmailer.close();
		}
	}
	else if(type == "smtp")
	{
		// do SMTP commands
		if(!BackgroundEmailer.socket.read())
		{
			retval = false;
			$.writeln("BackgroundEmailer.doCommand(): Error sending mail:");
			$.writeln("\t" + reply);
			BackgroundEmailer.close();
		}
	}
	else
	{
		$.writeln("BackgroundEmailer.doCommand(): Unknown command type. Closing the socket.");
		BackgroundEmailer.close();
	}

	if(!retval)
	{
		app.cancelTask(BackgroundEmailer.encodeTaskID);
		BackgroundEmailer.isRunning = false;
		
		throw "Command error for: " + type + " - " + cmd;
	}
	return retval;
}

/**
 Close the socket that was used to transmit data
*/
BackgroundEmailer.close = function()
{ 
	try
	{
		BackgroundEmailer.socket.close();
	}
	catch(error)
	{ 
	    $.writeln("BackgroundEmailer.close(): Error closing socket: " + error); 
	}
}


/**
 Sends the email and attachments by connecting to the server and authorizing via POP.
 Restablishes the connection and sends the necessary commands to the SMTP server.  

 <p>Writes the mail headers to the socket, then schedules a task that will cause
 the data to be written in chunks to the socket. If there are any attachments 
 to be sent, the task encodes them into Base64 and writes them to the socket.
*/
BackgroundEmailer.send = function()
{
	var startDate = new Date();
	$.writeln("IN BackgroundEmailer.send() = " + startDate);

	// Check something is selected
	if(BackgroundEmailer.Thumbnails.length != 0)
	{

		BackgroundEmailer.isRunning = true;
		
		if(!BackgroundEmailer.connect(BackgroundEmailer.mailServerName , BackgroundEmailer.POP))
		{
			BackgroundEmailer.isRunning = false;
			var endPremDate = new Date();
	        $.writeln("OUT (Premature exit:  failed to connect) BackgroundEmailer.send() = " + endPremDate); 
			return;
		}

		BackgroundEmailer.authorise();
		BackgroundEmailer.close();
		if(BackgroundEmailer.connect(BackgroundEmailer.mailServerName , BackgroundEmailer.SMTP))
		{
			// Display who we are connected to
			var welcome = BackgroundEmailer.socket.read();
			$.writeln("BackgroundEmailer.send(): Sending message via: " + welcome.substring(4));
				
			// issue EHLO and other commands
			BackgroundEmailer.doCommand ("EHLO " + BackgroundEmailer.sender, "smtp");
			BackgroundEmailer.doCommand ("MAIL FROM: " + BackgroundEmailer.sender, "smtp");
			BackgroundEmailer.doCommand ("RCPT TO: " + BackgroundEmailer.recipient, "smtp");
			BackgroundEmailer.doCommand ("DATA", "smtp");

			// Send the optional headers
			BackgroundEmailer.socket.write ('From: "BackgroundEmailer" <' + BackgroundEmailer.sender + '>\r\n');
			BackgroundEmailer.socket.write ("To: " + BackgroundEmailer.recipient + "\r\n");
			BackgroundEmailer.socket.write ("Subject: " + BackgroundEmailer.subject + "\r\n");
			BackgroundEmailer.socket.write ("Date: " + new Date().toString() +  "\r\n");

			// Set the content type and the boundary
			BackgroundEmailer.socket.write("MIME-Version: 1.0\r\n");
			BackgroundEmailer.socket.write("Content-Type: multipart/mixed;\r\n");
			BackgroundEmailer.socket.write('\tboundary="' + BackgroundEmailer.boundary + '"\r\n');
			BackgroundEmailer.socket.write("X-Mailer: Bridge Email Sample\r\n");
			BackgroundEmailer.socket.write("\r\n");
			BackgroundEmailer.socket.write("This is a multi-part mesage in MIME format.\r\n");
			BackgroundEmailer.socket.write("\r\n");
			BackgroundEmailer.socket.write("--" + BackgroundEmailer.boundary + "\r\n");
			
			// Send the message that is part of our email
			BackgroundEmailer.socket.write("Content-Type: text/plain;\r\n");
			BackgroundEmailer.socket.write("Content-Transfer-Encoding: 7bit\r\n");
			BackgroundEmailer.socket.write("\r\n");
			BackgroundEmailer.socket.write(BackgroundEmailer.message + "\r\n");
			BackgroundEmailer.socket.write("\r\n");
			BackgroundEmailer.socket.write("--" + BackgroundEmailer.boundary + "\r\n");

			BackgroundEmailer.startAttach = true;
			// Schedule a task that will encode all attachments and write the data.
			// This allows the Bridge UI to remain responsive
			BackgroundEmailer.encodeTaskID = app.scheduleTask('BackgroundEmailer.sendData()', 10, true);
		}
	}
	
	var endDate = new Date();
	$.writeln("OUT BackgroundEmailer.send() = " + endDate);


}
/**
 This is the task to send the attachment data, 
 which is scheduled to run by the BackgroundEmailer.send() method.
 @return True if the scheduling is to continue
 @type Boolean
*/ 
BackgroundEmailer.sendData = function()
{

	app.document.status = "BackgroundEmailer.sendData is sending files...";

	// Do we need to read the attachment data and write the headers
	if(BackgroundEmailer.startAttach)
	{

		// Get the next file to attach
		BackgroundEmailer.thumb = BackgroundEmailer.Thumbnails.pop();

		var theFile = BackgroundEmailer.thumb.spec;
				
		// set the encoding to ensure we get characters we can convert correctly.
		theFile.encoding = "binary";

		// Open the file, read it and save the contents, close the file
		theFile.open('r');
		BackgroundEmailer.contents = theFile.read();
		theFile.close();

		// Write some headers
		BackgroundEmailer.socket.write("Content-type: " + BackgroundEmailer.thumb.mimeType + ";\r\n");
		BackgroundEmailer.socket.write('\tname="' + BackgroundEmailer.thumb.name + '"\r\n');
		BackgroundEmailer.socket.write("Content-Transfer-Encoding: base64\r\n");
		BackgroundEmailer.socket.write("Content-Disposition: attachment;\r\n");
		BackgroundEmailer.socket.write('\tfilename="' + BackgroundEmailer.thumb.name + '"\r\n');
		BackgroundEmailer.socket.write("\r\n");

		// Sending of the attachment has started to so we don't want to read the file
		// or write the headers again
		BackgroundEmailer.startAttach = false;

	}

	// Encode the binary data, in chunks at a time
	BackgroundEmailer.encodeString(BackgroundEmailer.nextChunk());

	// If an attachment is finished
	if(BackgroundEmailer.finishedAttachment)
	{
		// Do we have more to send
		if(BackgroundEmailer.Thumbnails.length != 0)
		{
			// Get ready to send another attachment
			BackgroundEmailer.startAttach = true;
			BackgroundEmailer.finishedAttachment = false
			// Write the boundary marker for the end of the attachment we just finished
			BackgroundEmailer.socket.write("--" + BackgroundEmailer.boundary + "\r\n");
			return true;
		}
		else
		{
			// Schedule a task to finish off the email
			app.scheduleTask('BackgroundEmailer.finishEmail()', 10, false);
			// Cancel the task that is encoding/sending the data
			app.cancelTask(BackgroundEmailer.encodeTaskID);
			$.writeln("BackgroundEmailer.sendData(): just scheduled finishEmail");
			return;  
		}

	}
	return true;
}


/**
  Get the next chunk of data from the binary contents of the 
  current file that is to be attached to the email

  @return The encoded string containing the data.
  @type String
*/
BackgroundEmailer.nextChunk = function()
{

	var retval = "";
	var dataLength = BackgroundEmailer.contents.length;

	//Get the first 5760 chars
	retval = BackgroundEmailer.contents.substring(0, 5760);

	if(dataLength < 5760)
	{
		// This will be the last chunk of data for the current  attachment 
		// so flag it as finished
		BackgroundEmailer.finishedAttachment = true;
	}
	else
	{
		// The binary contents minus the first 5760 characters
		BackgroundEmailer.contents = BackgroundEmailer.contents.substring(5760);
	}

	return retval;

}

/**
 Accepts a string representing a binary file and encodes the string to base64.
 "Base64 Content-Transfer-Encoding" as per RFC 1521 (http://www.ietf.org/rfc/rfc1521.txt)
 @param binaryString The string to encode
 @type String
 @return The base64-encoded string.
*/
BackgroundEmailer.encodeString = function(binaryString)
{

	var encoded = "";
	var c1, c2, c3;
	var b1, b2, b3, b4;
	var i = 0;
	
	while(i < binaryString.length)
	{
		// get 3 chars starting at the begining of the binary string
		c1 = binaryString.charCodeAt(i++);
		c2 = binaryString.charCodeAt(i++);
		c3 = binaryString.charCodeAt(i++);

		//  Create 4 sets of 6 bits from the 3 ascii bytes
		b1 = c1 >> 2;
		b2 = ((c1 & 3) << 4) | (c2 >> 4);
		b3 = ((c2 & 15) << 2) | (c3 >> 6);
		b4 = c3 & 63;

		// Check that chrs 2 and 3 are correct, if not replace with special padding char
		if (isNaN(c2))
		{
			b3 = b4 = 64;
		} 
		else if (isNaN(c3))
		{
			b4 = 64;
		}

		// added encoded chars to the return string
		encoded = encoded + BackgroundEmailer.b64Chars.charAt(b1) + BackgroundEmailer.b64Chars.charAt(b2) + 
			BackgroundEmailer.b64Chars.charAt(b3) + BackgroundEmailer.b64Chars.charAt(b4);
	}

	// write the data to the socket in 75 chars lines
	while(encoded.length > 0)
	{
		// 72 goes in 5760 very nicely
		BackgroundEmailer.socket.write(encoded.substring(0,72) + "\r\n");
		// remove the first 72 chars
		encoded = encoded.substring(72);
	}

}

/**
  Ends the transmission; writes the last part of the boundary, sends the
  necessary SMTP commands and closes the socket.
*/
BackgroundEmailer.finishEmail = function()
{
	var startDate = new Date();
	$.writeln("IN BackgroundEmailer.finishEmail() = " + startDate);
	// write empty line and boundary
	BackgroundEmailer.socket.write("\r\n");
	BackgroundEmailer.socket.write("--" + BackgroundEmailer.boundary + "--\r\n");

	// end the message
	retval = BackgroundEmailer.doCommand(".", "smtp");
		
	// quit and close
	BackgroundEmailer.doCommand("QUIT", "smtp");
	BackgroundEmailer.close();
	BackgroundEmailer.isRunning = false;

	app.document.status = "BackgroundEmail has finished emailing files.";
	var endDate = new Date();
	$.writeln("OUT BackgroundEmailer.finishEmail() = " + endDate);
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
**/
BackgroundEmailer.prototype.run = function() 
{
	if(!this.canRun()) 
	{
		return false;
	}
	
	try
	{
		// Instantiate this run method only once and catch error on trying to repeat
		// when trying to create a menu item that already exists via MenuElement.create
		var emailMenuItem = new MenuElement("command", "SDK BackgroundEmailer: Send by Email", 
	                                        "at the end of Thumbnail", "BackgroundEmailMenu");
		$.writeln("BackgroundEmailer.run(): created menu item, select file(s) and see its context-sensitive menu item");
		
		// ---------------- Handler to define behavior of menu item when it is executed ------------------------
		emailMenuItem.onSelect = function(m)
		{
			// Check the status of the background operation
			if(BackgroundEmailer.isRunning)
			{
				$.writeln("BackgroundEmailer.run() : onSelect(): Error! Email already in progress");
			}
			else
			{
				// Obtain selected files to send
				var cachedSelections = app.document.selections;
				BackgroundEmailer.Thumbnails = new Array();
				for(var i = 0; i < cachedSelections.length; i++)
				{
					var nextThumbnail  = cachedSelections[i];
					if(!nextThumbnail.container)
					{
						$.writeln("BackgroundEmailer.run() : onSelect(): Adding " + nextThumbnail.uri);
						BackgroundEmailer.Thumbnails.push(nextThumbnail);
						
					}
				}
				
				// Check to see if we have any files from the selection (it might've been enabled on a 
				// folder 
				if(BackgroundEmailer.Thumbnails.length > 0) 
				{
					// Create a message body and prepare to send
					BackgroundEmailer.buildMessageBody();
					BackgroundEmailer.send();
				} 
				else 
				{
					$.writeln("BackgroundEmailer.run() : onSelect(): Error! Need some selected file(s) to send");
				}
			}		
		}

		// ---------------- Handler for menu item state being checked, should be very lightweight function ------------------------
		emailMenuItem.onDisplay = function(m)
		{
			var selLength = app.document.selectionLength;
    		if(selLength > 0)
			{
				this.enabled = true;
			}
			else
			{
				this.enabled = false;
			}
		}

	}
	// If we hit this handler, usually it's because you have tried multiple instantiations.
	catch(error) 
	{ 
		$.writeln("BackgroundEmailer.run() Error:" + error);
		$.writeln("\tNote that you only need run this snippet once, then use its menu item");
		$.writeln("\tto send files");
		return false;
	}

	return true;
}



/**
 Determines whether snippet can be run given current context.  The snippet 
 fails if these preconditions are not met:
 <ul>
 <li> Bridge must be running
 </ul>
 	@return True if this snippet can run, false otherwise
 	@type Boolean
*/
BackgroundEmailer.prototype.canRun = function() 
{
	
	var retval = false;
	if(BridgeTalk.appName == "bridge") 
	{
		// Check none of our config params are empty
		retval = ! ( (BackgroundEmailer.username == "")  ||  (BackgroundEmailer.password == "") 
						|| (BackgroundEmailer.sender == "") || (BackgroundEmailer.recipient == "") || (BackgroundEmailer.subject == "") 
						||(BackgroundEmailer.SMTP == 0) || (BackgroundEmailer.POP == 0) 
						|| (BackgroundEmailer.mailServerName == "") );

		if(!retval)
		{
			$.writeln("ERROR::  - Cannot run BackgroundEmailer");
			$.writeln("\tCheck mail server configuration settings.");
			$.writeln("\tYou must customize these with your own mail server settings.");
	}

		return true;
	}
	$.writeln("ERROR:: Cannot run BackgroundEmailer");
	$.writeln(this.requiredContext);
	return false;
}

/**
  "main program": construct an anonymous instance and run it
*/
if(typeof(BackgroundEmailer_unitTest) == "undefined") {
	new BackgroundEmailer().run();
}


