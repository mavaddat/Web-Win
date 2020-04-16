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
  @fileoverview Shows how to create and display an object-inspector panel using the InpsectorPanel object, 
     with a thumbnail-type subpanel, a ThumbnailPanelette object.  
  @class Shows how to create and display an object-inspector panel using the InpsectorPanel object, 
     with a thumbnail-type subpanel, a ThumbnailPanelette object.  
 
  <h4>Usage</h4>

     
	<ol>
	<li>Run the snippet in the ExtendScript Toolkit (see Readme.txt), setting Bridge CC 2018 as the target application.
  	<li>Select a thumbnail in the Bridge Content pane
  	<li>Open the Inspector Panel if it is not already open.
  	<li>You should see information displayed about the thumbnail selected
	</ol>
 
  <h4>Description</h4>

     <p>Shows how to create an object-inspector panel using the InpsectorPanel object, 
     with a thumbnail-type subpanel defined by a ThumbnailPanelette object.

     <p>The subpanel demonstrates ways to use panelette markup syntax to retrieve
     dynamic text values from the thumbnail's core node data, and also generates
      a text value by calling a thumbnail method at display time. 
	  
    <p>After it is registered, the panel appears in all menus that list available palettes.
	It is displayed in its default position at the top left of the browser, when 
	the Inspector is checked in the Window menu. Drag it to another location or change
	the relative sizes of palette columns to see how the text is displayed.

  <p>The key-value pairs used to populate the ThumbnailPanelette use both 
  string literals and panelette markup to specify dynamic values.<br />
  
     @constructor Constructor.   
 */
function SnpCreateThumbInspectorPanel()
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
 Creates InpsectorPanel and ThumbnailPanelette with various dynamic text values. 
 Registers the panelette with the panel, and registers the panel with the application.
 
	@return True if the snippet ran as expected, false otherwise.  
	@type Boolean
*/
SnpCreateThumbInspectorPanel.prototype.run = function()
{

	var retval = true;
	if(!this.canRun()) 
	{
		retval = false;	
		return retval;
	}

	// Create the object-inspector panel
	var pp = new InspectorPanel("Created By SnpCreateThumbnailInspectorPanel");	
	this.panelRef = pp;
	// Define a key-value pair array for the subpanel's text contents
	//   -- The first six members specify values derived from core node data
	//   -- The seventh member specifies dynamic text derived from metadata, 
	//      obtained by executing a helper function.
	//   -- The last member specifies static text.
	var kvp = [
				["Filename: ","[[core.immediate.name]]"],
				["Last Modified","[[core.immediate.modificationDate]]"],				
				["Metadata: ","[[javascript:SnpCreateThumbInspectorPanel.getMetaInfo(inspectorThumbnail)]]"],
				["Misc: ","Some Static Text"], [" "," "] // just some white space
		   ];
		
	// Create the subpanel, focused on the currently selected thumbnail
	var tp = new ThumbnailPanelette("Thumbnail Panelette Demo", "Node Information", "[[this]]", kvp, "right");
	
	// Register the subpanel with the panel.
	pp.registerPanelette(tp);	
	
	// Register the panel with the application.
	app.registerInspectorPanel(pp);

	// Show the inspector panel
	app.document.displayInspectorView = true;

	return retval;

}
	
/**
 Helper function retrieves certain metadata associated with a particular thumbnail 
 	@return The metadata values, if any
	@type String
*/
SnpCreateThumbInspectorPanel.getMetaInfo = function(thumb)
{
	mInfo = "None";
	if(thumb.hasMetadata)
	{
		var md = thumb.metadata;
		md.namespace = "http://ns.adobe.com/xap/1.0/";		
		mInfo = md.CreatorTool + "\n" + md.AuthorsPosition;
		
	}

	return mInfo;
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
SnpCreateThumbInspectorPanel.prototype.canRun = function()
{

	if(BridgeTalk.appName == "bridge") { 
		return true;
	}
	
	$.writeln("ERROR:: Cannot run SnpCreateThumbInspectorPanel");
	$.writeln(this.requiredContext);
	return false;

}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpCreateThumbInspectorPanel_unitTest)  == "undefined") {
    new SnpCreateThumbInspectorPanel().run();
}
