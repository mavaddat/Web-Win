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
  @fileoverview Shows how to send one or more files from Adobe Bridge CC 2018 to Adobe Photoshop CC 2018 to be saved in PNG format.
  @class Shows how to send files from Adobe Bridge CC 2018 to Adobe Photoshop CC 2018 to be saved in PNG format.
 
  <h4>Usage</h4>
  <ol>
  <li> Make sure you have Adobe Bridge CC 2018 and Adobe Photoshop CC 2018 running
  <li> In ExtendScript Toolkit set Target > Bridge CC 2018
  <li> In Bridge, select at least one thumbnail representing an image file of a type that you would be able to open with Adobe Photoshop CC 2018.
  <li> Run this snippet
  <li>You should see PNG image files created from the thumbnails you selected, in the same folder. The PNG image filename
  should begin snp... and match the first part of the image filename originally selected; for example, if you chose image- so if you chose myImage.psd, the
  output file would be snpmyImage.png.
  </ol>
 
   <h4> Description</h4>
  Uses interapplication messaging to send files from Bridge to Photoshop to be saved in PNG format.
  Based on the thumbnail selection in Bridge, creates an array of one or more files,  
  and passes the serialized array to Photoshop in a BridgeTalk message.  When Photoshop receives 
  the message, it reconstructs the array and begins processing the files. 
<p> One or more files can be selected to be saved into PNG format.
  The script does not run if folders are selected. 
  If you try to process two files with the same filename (not counting the extension, 
  such as pic1.gif and pic1.psd), both files are saved as snppic1.png, so that the first
  to be saved is overwritten by the second.<br />

  @constructor Constructor
 */
function SnpSaveAsPNG()
{
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge main engine.\nAdobe Bridge CC 2018 and Adobe Photoshop CC 2018 must be running.\n" 
		+ "At least one thumbnail selected that is not a folder.";
	$.level = 2; // Debugging level
}

/**
 Functional part of this snippet.  Creates the BridgeTalk message to send to Photoshop.
 @return True if the snippet ran as expected, false otherwise. Returns false if no files are
 selected in Bridge or Photoshop is not running.
 @type Boolean
*/
SnpSaveAsPNG.prototype.run = function()
{
	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}
	// Get the selected thumbnails
	var t = app.document.selections;

	// Create an array of files
	var files = new Array();
	for(var i = 0;i < t.length;i++)
	{
		if(t[i].spec instanceof File)
		{
			files.push(t[i].spec);
		}
	}
	// Create the message
	if(files.length > 0)
	{
		var scr = "$.writeln('SnpSaveAsPNG:: in Photoshop: received file(s)...');"; 
		// Serialize the array into a string
		scr += "var thumbs = eval(" + files.toSource() + ");"  // must serialize / deserialize objects to be sent  
		scr += "for(var i = 0; i < thumbs.length;i++){ ";
		scr += "photoshop.open(new File(thumbs[i]));";
		scr += "thePNGFile = new File(thumbs[i].path + '/' + 'snp' + thumbs[i].name);";
		scr += "options = new PNGSaveOptions();";
		scr += "activeDocument.saveAs (thePNGFile ,options , true, Extension.LOWERCASE);";
		scr += "activeDocument.close(SaveOptions.DONOTSAVECHANGES);";
		scr += "$.writeln('SnpSaveAsPNG:: in Photoshop: ' + '  image ' + thumbs[i].fsName + ' saved as a PNG.');";
		scr += "}";

		// Create and initialize the message object
		var bt = new BridgeTalk();
		bt.target = "photoshop";
		bt.body = scr;
		// Define message callbacks
		bt.onError = function(eObj){ retval = false; $.writeln(eObj.body); }

		bt.onResult = function(obj) 
		{ 
			$.writeln("SnpSaveAsPNG:: in Bridge: Done (onResult message received).");
		}
		// Send the message
		bt.send();
	}
	else
	{
		retval = false;
	}

	return retval;
}

/**
 Determines whether snippet can be run given current context.  The snippet will
 fail if these preconditions are not met: 
 <ul>
 <li> Must run in Bridge
 <li> Photoshop must be running
 <li> At least one file must be selected in Bridge
 </ul>

 @return True if this snippet can run, false otherwise
 @type Boolean
*/
SnpSaveAsPNG.prototype.canRun = function()
{	
	
	// Needs to be running in Bridge, Photoshop must be running and at least
	// one selection. 
	if((BridgeTalk.appName == "bridge") && (BridgeTalk.isRunning("photoshop"))
		&& (app.document.selections.length > 0)) 
	{
		return true;
	}
	// Fail if these preconditions are not met. Needs to be Bridge
	// and there has to be a selection of files only.
	$.writeln("ERROR:: Cannot run SnpSaveAsPNG");
	$.writeln(this.requiredContext);
	return false;
}

/**
 "main program": construct an anonymous instance and run it
*/
new SnpSaveAsPNG().run();
