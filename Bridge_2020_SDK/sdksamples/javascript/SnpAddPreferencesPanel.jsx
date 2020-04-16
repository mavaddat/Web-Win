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
 @fileoverview Shows how to add a custom option to the Preferences dialog.
  @class Shows how to add a custom option to the Preferences dialog.
 
  <h4>Usage</h4>

  <ol>
  <li> Run the snippet in the ExtendScript Toolkit (see Readme.txt)
  <li> In Bridge, select Edit > Preferences
  <li> Examine the new preferences panel added, named after this snippet. 
  </ol>
 
  <h4>Description</h4>
  
  <p>Shows how to add a custom user-preferences option to the Preferences dialog.
  When the user sets this value, the change takes effect immediately, but does not 
  persist across sessions. The next time the Bridge application is restarted, the
  global preference value is used.
   
  @constructor Constructor
 */
function SnpAddPreferencesPanel() 
{
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tNeed to be running in context of Bridge\n";	
}

/**
 Functional part of this snippet, creates an event handler that adds a new panel 
 to the Preferences dialog, allowing the user to set a new script-defined option.
 @return True if the snippet ran as expected, false otherwise
 @type Boolean
*/
SnpAddPreferencesPanel.prototype.run = function() 
{
	if(!this.canRun())
	{
		return false;
	}
	
	$.writeln("About to run SnpAddPreferencesPanel");
    // This is the new preference
    app.preferences.snpAddPreferencesPref = true;
  
	// Create an event handler that modifies the Preferences dialog  
	var prefHandler = function(event)
	{
		// Can only add a panel when the Preferences dialog opens
		if(event.type == "create" && event.location == "prefs") 
		{
			// Add a panel
			var panel = event.object.addPanel("SnpAddPreferencesPanel");
			// Add a checkbox for the script-defined preference value
			var aBox = panel.add( 'checkbox', [50, 50, 200, 100],  "SnpAddPreferences", { alignment:['center','top'] } );
			// Initialize state of the checkbox 
			aBox.value = app.preferences.snpAddPreferencesPref;
			// Define the button behavior that ties the checkbox state to the preference property value
			aBox.onClick = function() { app.preferences.snpAddPreferencesPref = aBox.value; };
		}
		
		return { handled: false };
	};

	// Register the event handler
	app.eventHandlers.push( { handler: prefHandler } );
	
	$.writeln("Ran SnpAddPreferencesPanel");
	
	return true;
}

/**
 Determines whether snippet can be run given current context.  The snippet 
 fails if these preconditions are not met: 
 <ul>
 <li> Bridge must be running
 </ul>
 @return True is this snippet can run, false otherwise
 @type boolean
*/
SnpAddPreferencesPanel.prototype.canRun = function() 
{
	if(BridgeTalk.appName == "bridge") 
	{ 
		return true;
	}
	$.writeln("ERROR:: Cannot run SnpAddPreferencesPanel");
	$.writeln(this.requiredContext);
	return false;
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpAddPreferencesPanel_unitTest) == "undefined") {
    new SnpAddPreferencesPanel().run();
}

