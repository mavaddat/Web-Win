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
 @fileoverview Shows how to place a TabbedPalette in Bridge in a custom location via scripting.
 @class Shows how to place a TabbedPalette in Bridge in a custom location via scripting.
 
 <h4>Usage</h4>
 <ol>
    <li>Run the snippet in the ExtendScript Toolkit (see Readme.txt)
	 <li>Click on the buttons to move the palette around
 </ol>
 
 <h4>Description</h4>
 
 <p>Adds a script-defined tabbed palette to the Bridge browser window which can be moved to a
 new location within Bridge using the TabbedPalette.setLocation() method.

 <p>The palette is of the "script" type, and contains ScriptUI components.  The ScriptUI buttons are
 used to move the palette around or dismiss the palette altogether.

 <p>The current workspace is reset to the defaul and the new palette appears in the default 
 upper-left position in the browser.  Removing the pallete will restore the workspace back 
 to its original state.<br />
  
	@see SnpCreateTabbedPaletteScriptUI
	@see SnpCreateWebTabbedPalette

 @constructor Constructor.
 */ 
function SnpMoveTabbedPalette()
{
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge main engine.\nBridge must be running";
	$.level = 1; // Debugging level
	this.paletteRefs = null;
	
}

/**
 Functional part of this snippet.  
 
 Creates the TabbedPalette object, defining the content with 
 ScriptUI components, and adds the palette to the current Bridge browser window.
	@return True if the snippet ran as expected, false otherwise.  
	@type Boolean
*/
SnpMoveTabbedPalette.prototype.run = function()
{
	var retval = true;
	if(!this.canRun())
	{
		retval = false;	
		return retval;
	}

	//TODO - get current workspace, reset to default, then put workspace back when done.
	var lastWorkspace = app.document.workspace;
	app.document.resetToDefaultWorkspace();

	// Create the TabbedPalette object, of type "script"
	var scriptPalette = new TabbedPalette( app.document, "SnpMoveTabbedPalette", "SnpMovePaletteTab", "script", "left", "top");
	
	// resize the elements if the palette is resized
	scriptPalette.content.onResize = function()
	{
		var b = this.bounds;
		pnl.bounds = b;
		this.layout.resize(true);
		scriptPalette.content.layout.layout(true);
	}
	
	var pnl = scriptPalette.content.add("panel", undefined , "");
	pnl.alignChildren = ["center", "fill"];

	var mainBtnGp = pnl.add("group");
	mainBtnGp.orientation = "column";
	
	var titleGp = mainBtnGp.add("group");
	titleGp.alignment = ["fill", "fill"];
	var title = titleGp.add("statictext", undefined, "SnpMoveTabbedPalette");
	
	// Change the font of the title
	var g = title.graphics;
	g.font = ScriptUI.newFont ("Arial", 20);
	
	var gp1 = mainBtnGp.add("group");
	gp1.orientation = "row";
	ulBtn = gp1.add("button", undefined, "Upper Left");
	urBtn = gp1.add("button", undefined, "Upper Right");
	
	gp2 = mainBtnGp.add("group");
	cBtn = gp2.add("button", undefined, "Center");
	
	gp3 = mainBtnGp.add("group");
	llBtn = gp3.add("button", undefined, "Lower Left");
	lrBtn = gp3.add("button", undefined, "Lower Right");
	
	removeBtn = mainBtnGp.add("button", undefined, "Remove Palette");
	removeBtn.alignment = ["fill", "fill"];
	
	// recalculate container size
	scriptPalette.content.layout.layout(true);
	versionCheck();
	
	// Handlers for the buttons
	
	// Remove the palette and restore the workspace
	removeBtn.onClick = function()
	{
		scriptPalette.remove();
		app.document.setWorkspace(lastWorkspace.id);
	}	
	
	// Place the palette in the top left corner of bridge (defaul)
	ulBtn.onClick = function()
	{
		scriptPalette.setLocation("left", "top");
	}

	// Place the palette in the top right
	urBtn.onClick = function()
	{
		scriptPalette.setLocation("right", "top");
	}

	// Place the palette in the center
	cBtn.onClick = function()
	{
		scriptPalette.setLocation("center", "middle");
	}

	// Place the palette in the bottom left
	llBtn.onClick = function()
	{
		scriptPalette.setLocation("left", "bottom");
	}

	// Place the palette in the bottom right
	lrBtn.onClick = function()
	{
		scriptPalette.setLocation("right", "bottom");
	}

	function versionCheck()
	{
		var v = app.version.split(".");
        if (v[0] < 2 || (v[0] == 2 && v[1] < 1))
		{
			ulBtn.enabled = false;
			urBtn.enabled = false;
			llBtn.enabled = false;
			lrBtn.enabled = false;
			cBtn.enabled = false;
			var errTxt = mainBtnGp.add("statictext", undefined, "Bridge 2.1 or above is required to move TabbedPalettes");
			var gfx = errTxt.graphics;
			gfx.font = ScriptUI.newFont ("Arial", ScriptUI.FontStyle.ITALIC, 10);
			scriptPalette.content.layout.layout(true);
		}
	}

	return retval;

}

/**
  Determines whether snippet can be run given current context.  The snippet 
  fails if these preconditions are not met:
  <ul>
  <li> Must be running in Bridge
  </ul>
 
  @return True is this snippet can run, false otherwise
  @type boolean
*/
SnpMoveTabbedPalette.prototype.canRun = function()
{	
	// Must run in Bridge

	if(BridgeTalk.appName == "bridge") 
	{
		return true;		
	}
	
	// Fail if these preconditions are not met.  
	// Bridge must be running,
	$.writeln("ERROR:: Cannot run SnpMoveTabbedPalette");
	$.writeln(this.requiredContext);
	return false;
	
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpMoveTabbedPalette_unitTest) == "undefined") {
    new SnpMoveTabbedPalette().run();
}

