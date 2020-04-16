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
  @fileoverview Shows how to use the cross-DOM to open a file selected in Bridge 
   	in another Adobe application. 
  @class Shows how to use the cross-DOM to open a file selected in Bridge 
   	in another Adobe application. 
 
  <h4>Usage</h4>


  
  <ol>
  <li>Open the snippet in the ExtendScript Toolkit (see Readme.txt).
  <li> Make sure both Adobe Bridge CC 2018 and Adobe Photoshop CC 2018 are running
  <li> In Bridge select a single thumbnail representing a file that 
       Photoshop can load (such as JPG, GIF, PSD)
  <li>When you execute the snippet, you should find the file opened in Photoshop.
  </ol>
 
  <h4>Description</h4>

  <p>The selected file in Bridge will be opened in Photoshop and saved as a JPEG file with a prefix of 'snp'.  If a folder is
  selected the script will not run.<br />
 
  @constructor
  Constructor.
 */
function SnpOpenInPhotoshop()
{
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge main engine.\nAdobe Bridge CC 2018 and Adobe Photoshop CC 2018 must be running and\n" 
		+ "one thumbnail is selected that is not a folder.";
	$.level = 1; // Debugging level
}

/**
 Functional part of this snippet.  
 
 Sends a selected file from Bridge to Photoshop for editing, using a cross-DOM function.

 @return  True if the snippet ran as expected, false otherwise.  
 @type Boolean
*/
SnpOpenInPhotoshop.prototype.run = function()
{

	var retval = true;
	if(!this.canRun())
	{
		retval = false;	
		return retval;
	}
	
	// Get the first selected thumbnail
	var t = app.document.selections[0];
	
	// Get the file object for the selected thumbnail
	// and send it to Photoshop using the Cross-DOM open() function
	photoshop.open(new File(t.path));
	
	return retval;
}

/**
 Determines whether snippet can be run given current context.  The snippet will
 fail if these preconditions are not met: 

 <ul>
 <li> Must run in Bridge
 <li> Must be at least one file selected in Bridge
 <li> Photoshop must be running
 </ul>

 @return True if this snippet can run, false otherwise
 @type Boolean
*/
SnpOpenInPhotoshop.prototype.canRun = function()
{	

	// must run in Bridge
	// Photoshop must be running
	// must be at least one selection
	// the first selection must be a file
	if((BridgeTalk.appName == "bridge") && (BridgeTalk.isRunning("photoshop"))
		&& (app.document.selections.length > 0) && (!(app.document.selections[0] instanceof Folder))) 
	{
		return true;		
	}
	
	// Fail if these preconditions are not met 
	$.writeln("ERROR:: Cannot run SnpOpenInPhotoshop");
	$.writeln(this.requiredContext);
	return false;
	
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpOpenInPhotoshop_unitTest)  == "undefined") {
    new SnpOpenInPhotoshop().run();
}
