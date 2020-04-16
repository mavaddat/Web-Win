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
                with an icon-list-type subpanel, an IconListPanelette object.
  @class Shows how to create and display an object-inspector panel  using the InpsectorPanel object, 
                with an icon-list-type subpanel, an IconListPanelette object.
 
  <h4>Usage</h4>

     <ol>
     <li>Run the snippet in the ExtendScript Toolkit (see Readme.txt).
     <li> Select a thumbnail in the Bridge Content pane
	 </ol>
 
  <h4>Description</h4>

   <p>Shows how to create an object-inspector panel using the InpsectorPanel object, 
   with an icon-list-type subpanel defined by a IconListPanelette object.

   <p>The subpanel demonstrates ways to use panelette markup syntax to retrieve
   dynamic text values from the thumbnail's core node data, and also generates
   text by calling a JavaScript function at display time, which retrieves
   a property value from the thumbnail object.
   
    <p>After it is registered, the panel appears in all menus that list available palettes.
 It is displayed in its default position at the top left of the browser, when 
 the Inspector is checked in the Window menu. Drag it to another location or change
 the relative sizes of palette columns to see how the text is displayed.

  <p>The key-value pairs used to populate the IconListPanelette use both 
  string literals and panelette markup to specify dynamic values.<br />

   @constructor Constructor.   
 */
function SnpCreateIconInspectorPanel()
{
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge main engine.\nBridge must be running.";
	$.level = 1; // Debugging level
	
	this.panelRef = null;
}

/**
 Functional part of this snippet.

 Creates InpsectorPanel and IconListPanelette with various dynamic text values. 
 Registers the panelette with the panel, and registers the panel with the application.

	@return True if the snippet ran as expected, false otherwise.  
	@type Boolean
*/
SnpCreateIconInspectorPanel.prototype.run = function()
{

	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}

	// Create the object-inspector panel
	var pp = new InspectorPanel("Created By SnpCreateIconListInspectorPanel");	
	this.panelRef = pp;  
	// Define a key-value pair array for the subpanel's text contents
	//   -- The first two members specify values derived from core node data
	//   -- The third member specifies dynamic text derived by executing a helper function.
	var kvp = [
	
			["","[[core.immediate.name]]"],
			["","[[core.immediate.size]]"], 
			["","[[javascript:SnpCreateIconInspectorPanel.getPath(inspectorThumbnail)]]"],

		  ];
		
	// Create the subpanel, focused on the currently selected thumbnail
	var ip = new IconListPanelette("IconListDemo", "Files and Folders", "[[this]]", kvp);
	
	// Register the subpanel with the panel.
	pp.registerPanelette(ip);

	// Register the panel with the application.
	app.registerInspectorPanel(pp);

	// Show the inspector panel
	app.document.displayInspectorView = true;

	return retval;

}
	
/**
 Helper function retrieves the path of a particular thumbnail 
 	@return The path string.
 	@type String
*/
SnpCreateIconInspectorPanel.getPath = function(thumb)
{
	return thumb.path;
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
SnpCreateIconInspectorPanel.prototype.canRun = function()
{

	if(BridgeTalk.appName == "bridge") { 
		return true;
	}
	
	$.writeln("ERROR:: Cannot run SnpCreateIconInspectorPanel");
	$.writeln(this.requiredContext);
	return false;

}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpCreateIconInspectorPanel_unitTest) == "undefined") {
    new SnpCreateIconInspectorPanel().run();
}
