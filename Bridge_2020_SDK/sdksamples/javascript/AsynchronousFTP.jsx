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
  @fileoverview Sample that shows hows to upload files asynchronously from Adobe Bridge to an FTP server; to run this, you must modify the code and supply FTP settings to access your own FTP server.
  @class Sample that shows hows to upload files asynchronously from Adobe Bridge to an FTP server; to run this, you must modify the code and supply FTP settings to access your own FTP server.
 
  <h4>Usage</h4>
  <b>You must</b> edit the FTP settings within this code; the code as shipped does not provide any default
  values for these settings and if you do not edit the FTP settings in the code (see "FTP server configuration" below),
  then the code will not run correctly. For the sample to execute correctly, you need access to an FTP server.
  
  <ol>
  <li> Ensure the FTP settings match your FTP server configuration
  <li> Ensure local and remote files and paths are correct
  <li> Make sure Adobe Bridge is running
  <li> In ExtendScript Toolkit set Target > Adobe Bridge CC 2018
  <li> Run this snippet. At this point, a context-sensitive menu item and handlers have been created, and
	if you select one or more files, you can see a new menu item added by this sample.
  <li> Ensure the file to upload is large enough to take some time before the upload is complete
  <li> In Bridge, select the thumbnail for the file to upload, Right click > "SDK Asynch FTP: Upload". You can select multiple files if you wish
	but folders are ignored.
  </ol>
 
  <h4>Description</h4>
  
<p> This sample shows how to create an asynchronous FTP connection.  A file is uploaded
  to the FTP server, whilst still leaving control with the scripting environment of Bridge; this means that
  Bridge is still responsive to the end-user when the file is being uploaded to the FTP server.  A callback 
  function is used to determine when the upload operation is complete.<br />
  
  @see BasicFTP
 
  @constructor  Constructor.
 */
function AsynchronousFTP()
{

	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Adobe Bridge.\nBridge must be running and config settings must be correctly populated.";
	$.level = 1; // Debugging level
	
	///////////////////////////////////////////////////////////////////
	// FTP server configuration.
	// These settings will need to be changed to match your FTP systems
	///////////////////////////////////////////////////////////////////

	/**
	 The FTP server address to which you want to upload, 
	  which you must change to an FTP server to which you have access - this must be populated for the sample
      to function correctly.
	 @type String
	*/
	this.ftpAddress = "";
	
	/**
	 The ftp username used to connect to the FTP server - this must be populated for the sample
      to function correctly.
	 @type String
	*/
	this.ftpUsername = "";
	
	/**
	 The ftp password - this must be populated for the sample
      to function correctly.
	 @type String
	*/
	this.ftpPassword = "";
	
	/**
	 The directory where uploaded files will be stored.
	 @type String
	*/ 
	this.ftpDir = "";
}

/**
 Functional part of this snippet.  Create the FTP object and upload a large file.  The upload
 is started asynchronously allowing the script to contiue to run.  A message is displayed in the
 console showing the upload process is still ongoing but the script is not blocked.  A callback 
 function is used to determine when the upload process is complete.
 @return True if the snippet ran as expected, false otherwise.  If any of the FTP 
 settings are incorrect or Bridge is not running, returns false.
 @type Boolean
*/
AsynchronousFTP.prototype.run = function() 
{

	var retval = true;
	
	if(!this.canRun())
	{
		return false;
	}	
	
	$.writeln("AsyncFTP: Loading webaccess library...");

	// Load the webaccess library
	if( webaccesslib == undefined )
	{
		if( Folder.fs == "Windows" ) {
			var pathToLib = Folder.startup.fsName + "/webaccesslib.dll";
		} else {
			var pathToLib = Folder.startup.fsName + "/webaccesslib.bundle";
			// verify that the path is valid
		}
		var libfile = new File( pathToLib );
		var webaccesslib = new ExternalObject("lib:" + pathToLib );
	}
	
	// So we can keep track of this object
	var that = this;

	function uploadFiles()
	{
		// Create ftp object and assign username/password
		var url = "ftp://" + that.ftpAddress;
	
		var ftpServer = new FtpConnection(url);
		
		// We don't want a blocking connection
		ftpServer.sync = false;

		ftpServer.username = that.ftpUsername;
		ftpServer.password = that.ftpPassword;
		
		$.writeln("AsyncFTP: Connecting to " + url);	
		
		// connect to the server
		ftpServer.open(url);
		if(ftpServer.isOpen)
		{
			// The selected thumbnails in Bridge
			var sels = app.document.selections;
		
			var stillWorking = false;
			// Do not call close() on the ftp connection object from within the callback functIon
			ftpServer.onCallback = function(reason,p_log,total)
			{	
				if( reason == FtpConnection.reasonStart ) {
					$.writeln("AsyncFTP: Upload started");
				}
				
				if( reason == FtpConnection.reasonComplete ) {
					$.writeln("AsyncFTP: Upload finished");
					stillWorking = true;
				}
				
				if(reason == FtpConnection.reasonFailed ) {
					$.writeln("AsyncFTP: Upload failed");
					stillWorking = true;
				}
			}
			
			// Move to a directory (if needed)
			//ftpServer.cd = "bridge"
			
			$.writeln("AsyncFTP: Creating destination directory on the server...");
			
			// Create the destination directory on the server
			//ftpServer.mkdir(that.ftpDir);
		
			// Move to the new directory
			ftpServer.cd = that.ftpDir;

			ftpServer.put(sels[0].spec, sels[0].name);
		
			// Do some work while the file is being uploaded			
			while(stillWorking != true)
			{
				$.sleep(500);
				ftpServer.pump();
				$.writeln("AsyncFTP: This script can continue to perform other tasks during the asynchronous upload operation");
			}
						
		}
		else
		{
			$.writeln("AsyncFTP: Put file failed: Connection not open");
			retval = false;
		}
		
		// close the connection
		ftpServer.close();
		$.writeln("AsyncFTP: Connection closed");

	} // end uploadFiles

	var ftpMenu = new MenuElement("command", "SDK Asynch FTP: Upload", "at the end of Thumbnail", "AsynchFTPMenu");

	ftpMenu.onSelect = function()
	{
		uploadFiles();
	}

	// How to display the context menu, depending on what is selected
	ftpMenu.onDisplay = function(m)
	{
		var selLength = app.document.selectionLength;
		// 
		var selSnapshot = app.document.selections;
		var hasFiles = false;
		for(var i=0; i < selLength; i++)
		{
			var th = selSnapshot[i];
			if(!th.container) {
				hasFiles = true;
				break;
			}
		}
		this.enabled = hasFiles;
	}
	$.writeln("AsyncFTP: Context-sensitive menu item and handlers added.");
	$.writeln("Select one or more files in the Bridge content pane and");
	$.writeln("execute the menu item to Upload using this sample");
	return retval;
}

/**
 Determines whether snippet can be run given current context.  The snippet will
 fail if these preconditions are not met:
 <ul>
 <li> Bridge must be running
 <li> Config settings must be changed to match your systems
 </ul>
 @return True is this snippet can run, false otherwise
 @type Boolean
*/
AsynchronousFTP.prototype.canRun = function()
{

	var ret = false;
	if(BridgeTalk.appName == "bridge") 
	{ 

		if(this.ftpAddress == "" || this.ftpUsername == "" 
			|| this.ftpPassword == "" || this.ftpDir == "")
		{
			$.writeln("AsyncFTP:  ERROR - Cannot run AsynchronousFTP");
			$.writeln("AsyncFTP:  Check configuration settings");
		}
		else
		{
			ret = true;
		}
			
		return ret;
	}
	
	$.writeln("AsyncFTP: ERROR - Cannot run AsynchronousFTP");
	$.writeln("AsyncFTP: " + this.requiredContext);
	return ret;
}

/**
 "main program": construct an anonymous instance and run it
*/
if(typeof(AsynchronousFTP_unitTest) == "undefined") {
	new AsynchronousFTP().run();
}
