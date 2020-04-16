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
  @fileoverview Shows how to use a BitmapData object to create and rotate images.
  @class Shows how to use a BitmapData object to create and rotate images.
 
   <h4>Usage</h4>

   <ol>
   <li>Open the snippet in the ExtendScript Toolkit (see Readme.txt), setting Bridge CC 2018 as the target application.   
   <li> In Bridge, select one thumbnail representing an image file and run this snippet.
   <li>You should see rotated JPEG images created from the thumbnails you selected.
   </ol>

   <h4>Description</h4>
  
   <p>Shows how to rotate image files and export them as JPEG images, using the 
   BitmapData object and the ExtendScript File object for a thumbnail.  
   
   <p>You must select a single thumbnail for the image file to be rotated. 
   The sample rotates the image both clockwise and counter-clockwise,
   creating two new image files.<br />
 
  @constructor Constructor  
 */
function SnpRotateImage()
{
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge.\nBridge must be running and \n" 
		+ "only one thumbnail selected that is not a folder.";
	$.level = 1; // Debugging level
}

/**
 Functional part of this snippet.  
 
 Gets a File object for the selected thumbnail and uses it to create a BitmapData object. 
 Uses the BitmapData object to rotate and export to the JPEG format.
	 @return True if the snippet ran as expected, false if no image file is selected in Bridge
	 @type Boolean
*/
SnpRotateImage.prototype.run = function()
{
	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}

	// Get the selected Thumbnail object
	var selectedThumbnails = app.document.getSelection();
	var thumb = selectedThumbnails[0];

	// Create a BitmapData object
	var bm = new BitmapData(thumb.spec);

	if(bm instanceof BitmapData)
	{
		try
		{
			// Create the path and file name
			var exportFilePath = thumb.parent.spec + "/SnpRotateClock_" + thumb.name + ".jpg";

			// Rotate the image clockwise and save the returned BitmapObject
			var rotated = bm.rotate(90);
			rotated.exportTo(new File(exportFilePath));

			// Create the path and file name
			exportFilePath = thumb.parent.spec + "/SnpRotateAnti_" + thumb.name + ".jpg";

			// Rotate the image counter-clockwise
			rotated = bm.rotate(-90);
			rotated.exportTo(new File(exportFilePath));
		}
		catch(error) 
		{
			$.writeln("SnpRotateImage Error: Problem with image file");
			retval = false;
		}	
	}
	else
	{
		retval = false;
	}

	
	return retval;
}

/**
 Determines whether snippet can be run given current context. The snippet
 fails if these preconditions are not met: 
 <ul>
 <li> Must in Bridge
 <li> A single image file must be selected in Bridge
 </ul>

 @return True if this snippet can run, false otherwise
 @type Boolean
*/
SnpRotateImage.prototype.canRun = function()
{	
	
	// must run in Bridge 
	// must be single image file
	if((BridgeTalk.appName == "bridge") && (app.document.selectionLength == 1)
		&& (app.document.selections[0].spec instanceof File) )
	{
		return true;
	}
	// Fail if these preconditions are not met.  
	$.writeln("ERROR:: Cannot run SnpRotateImage");
	$.writeln(this.requiredContext);
	return false;
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpRotateImage_unitTest)  == "undefined") {
    new SnpRotateImage().run();
}


