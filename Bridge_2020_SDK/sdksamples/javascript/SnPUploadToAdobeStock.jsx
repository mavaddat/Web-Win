////////////////////////////////////////////////////////////////////////////
// ADOBE SYSTEMS INCORPORATED
// Copyright 2017 Adobe Systems Incorporated
// All Rights Reserved
//
// NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
// terms of the Adobe license agreement accompanying it.  If you have received this file from a
// source other than Adobe, then your use, modification, or distribution of it requires the prior
// written permission of Adobe.
/////////////////////////////////////////////////////////////////////////////

/** 
  @fileoverview Shows how to upload multiple files to Adobe Stock.
  @class Shows how to upload multiple files to Adobe Stock.
 
   <h4>Usage</h4>
   
   <ol>
   <li>Open the snippet in the ExtendScript Toolkit (see Readme.txt), setting Bridge CC 2018 as the target application.
   <li> In Bridge, select at least one thumbnail representing an image file, and run the snippet.
   <li>Once you have executed the snippet, you should see the upload getting started for the files you selected. 
   </ol>

  @constructor Constructor  
 */
function UploadToAdobeStock()
{
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge.\nBridge must be running and \n" 
		+ "at least one thumbnail selected";
	$.level = 1; // Debugging level
}

/**
 Functional part of this snippet.  
 
 Gets a File object for each selected thumbnail, and uses it to
 upload images on Adobe Stock.
	 @return True if the snippet ran as expected, false if no files are selected in Bridge
	 @type Boolean
*/
UploadToAdobeStock.prototype.run = function()
{
	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}

	// Get the selected Thumbnail objects
	var thumbs = app.document.getSelection();

	var stock = new AdobeStock();

	stock.uploadToAdobeStock(thumbs);

	return retval;
}

/**
 Determines whether snippet can be run given current context.  The snippet will
 fail if these preconditions are not met: 
 <ul>
 <li> Must in Bridge
 <li> At least one file must be selected in Bridge
 </ul>

 @return True if this snippet can run, false otherwise
 @type boolean
*/
UploadToAdobeStock.prototype.canRun = function()
{	
	
	// must run in Bridge 
	// must be at least one selection. 
	if((BridgeTalk.appName == "bridge") && (app.document.selectionLength > 0)) 
	{
		return true;
	}
	// Fail if these preconditions are not met.  
	$.writeln("ERROR:: Cannot run UploadToAdobeStock");
	$.writeln(this.requiredContext);
	return false;
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(UploadToAdobeStock_unitTest)  == "undefined") {
    new UploadToAdobeStock().run();
}

