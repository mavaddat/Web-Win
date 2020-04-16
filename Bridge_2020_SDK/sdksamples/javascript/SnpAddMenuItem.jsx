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
   @fileoverview Shows how to add a custom menu element to Bridge.
   @class Shows how to add a custom menu element to Bridge.
  
   <h4>Usage</h4>
   
      <ol>
      <li>Run the snippet in the ExtendScript Toolkit (see Readme.txt)
      <li>This creates a new context-sensitive menu item.
      <li> In Bridge, select SnpAddMenu > SnpAddMenuItem
      </ol>
 
   <h4>Description</h4>
  
   <p>Shows how to add a custom menu element to Bridge.
   
   <p>The script adds a new menu to the menu bar after the Help menu, with one menu item command. 
   When selected, the command displays a message dialog.

   <p>The script can only be run once within a Bridge session; you must restart Bridge to run it again.
   This avoids the creation of duplicate menu elements with slightly different behavior.<br />
   
   @see SnpAddContextMenuItem
 
  @constructor Constructor
 */
function SnpAddMenuItem()
{
	/**
	 The context in which this snippet can run; Bridge must be running.
	 @type String
	*/
	this.requiredContext = "\tAdobe Bridge must be running.\n\tExecute against Bridge CC 2018 as the target.\n";
	
	/**
	 The unique identifier for the menu 
	 @type String
	*/
	this.menuID = "snpAddMenuItem";
	
	/**
	 The unique identifier for the menu item command
	 @type String
	*/
	this.menuCommandID = "snpAddMenuItemSub";
	
	$.level = 1; // Debugging level
}

/**
  Functional part of this snippet. 

  Adds the menu and command to Bridge and defines the command behavior 
  using an event handler for the onSelect event.

  <p>Can only run once in a session. You must restart Bridge to test any change you make in the code.

  @return True if the snippet ran as expected, false otherwise.
  @type boolean
*/
SnpAddMenuItem.prototype.run = function()
{
	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}

	// Create the menu element
	var newMenu = new MenuElement( "menu", "SDK SnpAddMenu", "after Help", this.menuID );

	// Create the menu item
	var alertCommand = new MenuElement( "command", "SDK SnpAddMenu: Item", "at the end of " + this.menuID, this.menuCommandID );

	// Define the behavior (what happens when the item is selected)
	alertCommand.onSelect = function (m) 
	{ 
		var txt = m.text;
		// Display result as UI, as this is UI sample
		alert("'" + txt + "' was chosen menu item");
	}
	
	return retval;
}

/**
  Determines whether snippet can be run given current context.  The snippet 
  fails if these preconditions are not met:
  <ul>
  <li> Must be running in Bridge
  <li> Must only be executed once in a session
  </ul>
 
  @return True if this snippet can run, false otherwise
  @type boolean
*/
SnpAddMenuItem.prototype.canRun = function()
{	
	// Must run in Bridge 
	if(BridgeTalk.appName == "bridge") {
	
		// Stop the menu element from being added again if the snippet has already run
		if((MenuElement.find(this.menuID)) && (MenuElement.find(this.menuCommandID)))
		{
			$.writeln("Error:Menu element already exists!\nRestart Bridge to run this snippet again.");
			return false;
		}
	
		return true;
	}
	
	// Fail if these preconditions are not met.  
	// Bridge must be running,
	// The menu must not already exist.
	$.writeln("ERROR:: Cannot run SnpAddMenuItem");
	$.writeln(this.requiredContext);
	return false;
}

/**
  "main program": construct an anonymous instance and run it,
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpAddMenuItem_unitTest ) == "undefined") {
	new SnpAddMenuItem().run();
}

