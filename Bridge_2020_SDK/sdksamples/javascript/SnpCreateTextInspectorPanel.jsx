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
 @fileoverview Shows how to create and display an object-inspector panel  using the InpsectorPanel object, 
         with a text-type subpanel, a TextPanelette object.
  @class Shows how to create and display an object-inspector panel  using the InpsectorPanel object, 
         with a text-type subpanel, a TextPanelette object.
 
  <h4>Usage</h4>

     <ol>
     <li>Run the snippet in the ExtendScript Toolkit (see Readme.txt)
  	<li> Select file or folder thumbnails in the Bridge Content pane
  	<li>Make sure you have the Inspector Panel open (Window > Inspector Panel)
  	<li>You should see information about the selected thumbnails in the Inspector Panel.
	</ol>
 
  <h4>Description</h4>

   <p>Shows how to create an object-inspector panel using the InpsectorPanel object, 
   with a text-type subpanel defined by a TextPanelette object.

   <p>The text subpanel demonstrates different ways of adding text:
   static text, and dynamic text specified with panelette markup.
   
    <p>After it is registered, the panel appears in all menus that list available palettes.
	It is displayed in its default position at the top left of the browser, when 
	the Inspector is checked in the Window menu. Drag it to another location or change
	the relative sizes of palette columns to see how the text is displayed.

  <p>The key-value pairs used to populate the TextPanelette use both 
  string literals and panelette markup to specify dynamic values.<br />

   @constructor Constructor.   
 */
function SnpCreateTextInspectorPanel()
{
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge main engine.\nBridge must be running.";
	$.level = 1; // Debugging level
	this.panelRef = null;
}

// Used to generate the dynamic text for the text panelette
/**
  Used to generate dynamic text for the subpanel.
  The generated text lists the currently selected thumbnails.
*/
SnpCreateTextInspectorPanel.getDetails = function()
{
	var startTime = new Date();
	var retval = "SnpCreateTextInspectorPanel: " + startTime + "\n";
	retval += "Selected objects: \n";
	for(var i=0; i < app.document.selections.length; i++) {
		// Support multiple selections, iterate the entire selection.
		var myObj = app.document.selections[i];
		retval += " - " + myObj.name + "\n";
	}
	return retval;
}

/**
 Functional part of this snippet.

 Creates InpsectorPanel and TextPanelette with various text values. Registers the
 panelette with the panel, and registers the panel with the application.

	@return True if the snippet ran as expected, false otherwise.  
	@type Boolean
*/
SnpCreateTextInspectorPanel.prototype.run = function()
{

	var retval = true;
	if(!this.canRun())
	{
		retval = false;	
		return retval;
	}

	// Create the object-inspector panel
	var pp = new InspectorPanel("Created By SnpCreateTextInspectorPanel");
	this.panelRef = pp;
    
	// Define a key-value pair array for the subpanel's text contents
	//   -- The first three members specify values derived from core node data
	//   -- The fourth member specifies static text.
	var kvp = [
                ["Filename: ","[[core.immediate.name]]"],
                ["Filesize: ","[[core.immediate.size]]"], 
                ["Last Modified: ","[[core.immediate.modificationDate]]"],	
                ["Misc: ","Some Static Text"], [" "," "] // just some white space
		   ];

	// Create the subpanel, whose focus is the currently selected thumbnail,
	// indicated with the special markup [[this]].
	var tp = new TextPanelette("SnpCreateTextInspectorPanel Text Panelette", "Information about thumbnails", "[[this]]", kvp);

	// Register the subpanel with the panel.
	pp.registerPanelette(tp);

	// Register the panel with the application.
	app.registerInspectorPanel(pp);

	// Show the inspector panel
	app.document.displayInspectorView = true;

	return retval;

}

/**
  Determines whether snippet can be run given current context.  The snippet 
  fails if these preconditions are not met:
	 <ul>
 	 <li> Must run in Bridge
	 </ul>
 	@return True if this snippet can run, false otherwise
	@type boolean
*/
SnpCreateTextInspectorPanel.prototype.canRun = function()
{	
	if(BridgeTalk.appName == "bridge")
	{
		return true;		
	}
	
	$.writeln("ERROR:: Cannot run SnpCreateTextInspectorPanel");
	$.writeln(this.requiredContext);
	return false;
	
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpCreateTextInspectorPanel_unitTest)  == "undefined") {
    new SnpCreateTextInspectorPanel().run();
}
