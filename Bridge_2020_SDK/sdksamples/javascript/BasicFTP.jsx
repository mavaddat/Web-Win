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
  @fileoverview Shows how to upload and download files to and from an FTP server.
  @class Shows how to upload and download files to and from an FTP server.
 
  <h4>Usage</h4>
  <b>You must</b> edit the FTP settings within this code; the code as shipped does not provide any default
  values for these settings and if you do not edit the FTP settings in the code (see "FTP server configuration" below),
  then the code will not run correctly. For the sample to execute correctly, you need access to an FTP server.
  
  <ol>
   <li> Customize the FTP settings in the code to match your FTP server configuration.
   <li> Run the snippet in the ExtendScript Toolkit, with Adobe Bridge CC 2018 as the target (see Readme.txt)
   <li> In Adobe Bridge, navigate to a folder that has some files to upload
   <li> Right-click the thumbnail for a file you wish to upload and choose "SDK Basic FTP: Upload file(s)"
   <li> Right-click the thumbnail for the file you uploaded and choose "SDK Basic FTP: Download files" 
        to download the same file.
   </ol>
 
  <h4>Description</h4>

  <p>This code shows how to connect to an FTP server using the FTP object, then use the object
  to upload files to the FTP server from Bridge, and download files from the server to Bridge.
  This sample uses a synchronous connection, which blocks the main thread, so it is best to
  choose small files to transfer. For a demonstration of an asynchronous connection, see
  AsynchronousFTP.jsx

  <p>You must customize the specific values for the FTP server, passwords, directories and files 
  to match your FTP settings and file system. You must upload at least one file before attempting
  to download a file.<br />
  
  @see AsynchronousFTP

  @constructor Constructor.
 */
function BasicFTP()
{

	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge main engine.\nBridge must be running and config settings must be correct.";
	$.level = 1; // Debugging level
	
	///////////////////////////////////////////////////////////////////
	// FTP server configuration.
	// You must change these settings to match your FTP configuration.
	///////////////////////////////////////////////////////////////////
	
	/**
	 The FTP server address to which you want to upload, 
	  which you must change to an FTP server to which you have access. This is set to be empty
	  for the sample and you have to populate this with your own FTP server details for this
	  sample to be functional.
	 @type String
	*/
	this.ftpAddress = "";
	
	/**
	 The ftp username used to connect to the FTP server.  This must be populated for the sample
      to function correctly
	 @type String
	*/
	this.ftpUsername = "";
	
	/**
	 The ftp password.  his must be populated for the sample
      to function correctly
	 @type String
	*/
	this.ftpPassword = "";
	
	/**
	 The directory where uploaded files are stored on the FTP server.
	 @type String
	*/ 
	this.ftpDir = "";
	
}

/**
  Functional part of this snippet, creates the FTP object, and connects to the FTP server.
  
 <p> Adds "upload" and "download" items to the context menu for the Bridge Content pane. 
 <ul>
   <li> Choosing the "upload" item uploads the files for the currently selected Thumbnail or Thumbnails,
        to a folder that it creates on the server named "uploadedFromBridge". Uploaded files are 
        given the prefix 'uploaded_'. Selected folder thumbnails are ignored.
   <li> Choosing the "download" item downloads the files in the remote "uploadedFromBridge" folder, 
        to the local folder that is currently selected in Bridge.
 </ul>

  @return True if the snippet ran as expected, false if the connection to the server fails,
  	or if an upload or download operation fails.
  @type Boolean
*/
BasicFTP.prototype.run = function() 
{

	var retval = true;
	
	if(!this.canRun())
	{
		return false;
	}
		
	$.writeln("BasicFTP: Loading webaccess library...");

	// Load the Web-access library
	if( webaccesslib == undefined ) {
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

	// When the context menu is selected
	function uploadFiles()
	{

		// Create ftp object and assign username/password
		var url = "ftp://" + that.ftpAddress;
		var ftpCon = new FtpConnection(url);
		
		ftpCon.username = that.ftpUsername;
		ftpCon.password = that.ftpPassword;
		
		//////////////////////
		// PUT some files
		
		$.writeln("BasicFTP: Connecting to " + url);	
		// connect to the server
		ftpCon.open(url);
		if(ftpCon.isOpen)
		{
			$.writeln("Connected");
			var sels = app.document.selections;
			
			// Move to the directory  (if needed)
			//ftpCon.cd = "bridge" 

			// Create the destination directory on the server
			//ftpCon.mkdir(that.ftpDir);
			
			// Move to the new directory
			ftpCon.cd = that.ftpDir;
			
			$.writeln("BasicFTP: Uploading files...");
			for(var i = 0;i < sels.length;i++)
			{
				if(sels[i].spec instanceof File)
				{
					$.writeln("BasicFTP: Uploading file client_" + sels[i].name);
					ftpCon.put(sels[i].spec, ("uploaded_" + sels[i].name));
				}
			}	
		}
		else
		{
			$.writeln("BasicFTP: Put files failed: Connection not open");
			retval = false;
		}
			
		// close the connection
		ftpCon.close();
		$.writeln("BasicFTP: Connection closed");

	} // end uploadFiles()

	// Download files from FTP server
	function downloadFiles()
	{
		// Create ftp object and assign username/password
		var url = "ftp://" + that.ftpAddress;
		var ftpCon = new FtpConnection(url);
		
		ftpCon.username = that.ftpUsername;
		ftpCon.password = that.ftpPassword;
		
		//////////////////////
		// GET some files
		
		$.writeln("BasicFTP: Connecting to " + url);	
		// connect to the server
		ftpCon.open(url);
		if(ftpCon.isOpen)
		{
		
			// Move to the this directory  if needed
			// NOTE - you may not need to move to this directory
			//ftpCon.cd = "bridge" 

			// Move to the new directory
			ftpCon.cd = that.ftpDir;

			// Get a directory listing
			ftpCon.ls();
		
			// Get a list of files from the server
			// Read the files poperty immediately after the ls() call
			var theFiles = ftpCon.files;

			var parent = app.document.thumbnail.spec.fsName;
			for(var i = 0;i < theFiles.length;i++)
			{

				// Check that it is a file we are going to download
				if(!ftpCon.isDir(theFiles[i]))
				{
					var path = parent + "/" + theFiles[i].replace("uploaded_", "downloaded_");
					var localFile = new File(path);
					$.writeln("BasicFTP: Downloading " + theFiles[i] + " to " + localFile.name);
					ftpCon.get(theFiles[i], localFile);
				}				
			}

		}
		else
		{
			$.writeln("BasicFTP: Get files failed: Connection not open");
			retval = false;
		}
			
		// close the connection
		ftpCon.close();
		$.writeln("BasicFTP: Connection closed");

	} // end downloadFiles


	var ftpUMenu = new MenuElement("command", "SDK Basic FTP: Upload file(s)", "at the end of Thumbnail", "BasicFTP_uploadloadMenu");
	var ftpDMenu = new MenuElement("command", "SDK Basic FTP: Download files", "at the end of Thumbnail", "BasicFTP_downloadMenu");

	ftpDMenu.onSelect = function()
	{
		downloadFiles();
	}

	ftpUMenu.onSelect = function()
	{
		uploadFiles();
	}

	// How to display the context menu, depending on what is selected
	ftpUMenu.onDisplay = function(m)
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
BasicFTP.prototype.canRun = function()
{

	var ret = false;
	if(BridgeTalk.appName == "bridge") 
	{ 

		if(this.ftpAddress == "" || this.ftpUsername == "" 
			|| this.ftpPassword == "" || this.ftpDir == "")
		{
			$.writeln("BasicFTP: ERROR - Cannot run AsynchronousFTP");
			$.writeln("BasicFTP: Check configuration settings");
		}
		else
		{
			ret = true;
		}
			
		return ret;
	}
	
	$.writeln("BasicFTP: ERROR - Cannot run AsynchronousFTP");
	$.writeln("BasicFTP: " + this.requiredContext);
	return ret;
}

/**
  "main program": construct an anonymous instance and run it
*/
if(typeof(BasicFTP_unitTest) == "undefined") {
	new BasicFTP().run();
}
