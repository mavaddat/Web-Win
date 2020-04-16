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
  @fileoverview Shows how to add a custom menu element to a context menu in Bridge.
  @class Shows how to add a custom menu element to a context menu in Bridge. 
 
   <h4>Usage</h4>
   
   
   <ol>
   <li>Execute the snippet in the ExtendScript Toolkit (see Readme.txt)- with Adobe Bridge CC 2018 as the target.
   <li> In Bridge, select a single thumbnail
   <li> Right click in Windows, Ctrl-click in Mac OS to invoke context menu
   <li> Select the new item, "SDK SnpAddContextMenuItem: ".
 	This brings up a dialog with information about the menu item that was selected.
   </ol>

   <h4>Description</h4>
  
  <p>Shows how to add a custom menu element to a context menu in Bridge, when the user selects
  a folder or file.
   
  <p>Adds a command to the context menu  for thumbnails using a handler for
  the onDisplay event, and defines behavior for it using a handler for the onSelect event.
  When the command is selected, displays a message dialog.

  <p>The script can only be run once within a Bridge session; you must restart Bridge to run it again.
  This avoids the creation of duplicate menu elements with slightly different behavior.<br />
   
   @see SnpAddMenuItem

  @constructor Constructor.
 */
function SnpAddContextMenuItem()
{
	/**
	 The context in which this snippet can run; Bridge must be running.
	 @type String
	*/
	this.requiredContext = "\tAdobe Bridge must be running.\n\tExecute against Bridge CC 2018 as the Target.\n";
	$.level = 1; // Debugging level
	
	/**
	 The unique identifier for the new menu item command
	 @type String
	*/
	this.menuID = "snpAddContextMenu";
}


/**
  Functional part of this snippet.  
  Adds a command to the context menu that is displayed when there is a unique selection (file or folder)
 in the Bridge content pane, and defines the behavior using an event handler for the onSelect event.
 
 <p>Can only run once in a session. You must restart Bridge to test any change you make in the code.

 @return True if the snippet ran as expected, false otherwise. 
 @type Boolean
*/
SnpAddContextMenuItem.prototype.run = function()
{

	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}

	// create the menu element
	var cntCommand = new MenuElement("command", "SDK SnpAddContextMenuItem: ", "at the end of Thumbnail", this.menuID);

	// What to do when the menu item is selected
	cntCommand.onSelect = function(m)
	{
		alert("'" + m.text + "' was chosen context-sensitive menu item");
	};

	// When to display the menu item
	cntCommand.onDisplay = function()
	{
		try
		{
			cntCommand.enabled = (app.document.selections.length == 1) ? true : false;			
			// Check if the thumbnail is a container
			if(app.document.selections[0].container) 
			{
				cntCommand.text = "SDK SnpAddContextMenuItem: Folder";
			}
			else
			{
				cntCommand.text = "SDK SnpAddContextMenuItem: File";
			}
		}
		catch(error){ $.writeln(error); }
	};
	
	return retval;
}

/**
  Determines whether snippet can be run given current context.  The snippet 
  fails if these preconditions are not met:
  <ul>
  <li> Must be running in Bridge
  <li> Must only be executed once in a session
  </ul>
  @return True is this snippet can run, false otherwise
  @type boolean
*/
SnpAddContextMenuItem.prototype.canRun = function()
{	
	// Must run in Bridge 
	if(BridgeTalk.appName == "bridge") 
	{
		// Stop the menu element from being added again if the snippet has already run
		if(MenuElement.find(this.menuID))
		{
			$.writeln("ERROR:: Menu element from SnpAddContextMenuItem already exists!\nRestart Bridge to run this snippet again.");
			return false;
		}
		return true;
	}
	// Fail if these preconditions are not met.  
	// Bridge must be running,
	// The menu must not already exist.
	$.writeln("ERROR:: Cannot run SnpAddContextMenuItem");
	$.writeln(this.requiredContext);
	return false;
}


/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpAddContextMenuItem_unitTest) == "undefined") {
    new SnpAddContextMenuItem().run();
}
