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
  @fileoverview  Shows how to display ScriptUI components in the bottom navigation bar.
  @class Shows how to display ScriptUI components in the bottom navigation bar.
 
  <h4>Usage</h4>
  
  <ol>
  <li>Run the snippet in the ExtendScript Toolkit (see Readme.txt)	
  <li>You should find this creates a bottom NavBar below the Bridge Content pane.
   <li> Select a thumbnail in the Bridge Content pane.
   </ol>
 
  <h4>Description</h4>

  <p>Defines ScriptUI user-interface components, and displays them  
  in the bottom navigation bar. Displays the bar for existing
  browser windows, and defines an event handler to add it to 
  new browser windows on creation.

  <ul>
   <li> An edit box shows the path to the currently selected file or folder,
        and a Bridge event handler updates it when the Content page selection
        changes.
   <li> If you enter a new path and click Browse, the button's event handler
        updates the Content pane, navigating to that location. 
  </ul>
    
  @constructor Constructor.
 */
function SnpAddScriptUINavBar()
{
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tAdobe Bridge must be running.\n\tExecute against Bridge CC 2018 target.\n";
	$.level = 1; // Debugging level
}

/**
 Functional part of this snippet. 
 
 Defines ScriptUI user-interface components and displays them in the bottom navigation bar.

	@return  True if the snippet ran as expected, false otherwise.  
	@type boolean
*/
SnpAddScriptUINavBar.prototype.run = function()
{

	var retval = true;
	if(!this.canRun())	
	{
		retval = false;	
		return retval;
	}

	// Set up the navigation bar
	function buildNavbar(doc)
	{
		// retrieve the predefined NavBar object
		// the type defaults to "scriptui"
		var bottombar = doc.navbars.filesystem.bottom;
		
		// display it
		bottombar.visible = true;
		// set the height
		bottombar.height = 50;
		// add a ScriptUI display frame
		bottombar.pathPanel = bottombar.add( "panel", [5,5, 480,35], undefined);  // bounds = [left, top, right, bottom]
		// add UI components to the frame
		bottombar.pathPanel.browseField = bottombar.pathPanel.add( "edittext",[3, 3, 395, 22],"");
		bottombar.pathPanel.browseBtn = bottombar.pathPanel.add( "button",[400, 3, 465, 22],"Browse");
		bottombar.pathPanel.browseField.text = doc.thumbnail.path;
	
		// add the button's event handler, which navigates to the entered path
		bottombar.pathPanel.browseBtn.onClick = function()
		{
			app.document.thumbnail = new Thumbnail(new File(bottombar.pathPanel.browseField.text));
		}

	}

	// Display the bottom NavBar in each existing browser
	for(var i = 0;i < app.documents.length;i++)
	{
		buildNavbar(app.documents[i]);
	}

	// Define Bridge event handlers 
	onMyChangeEvent = function( event )
	{
		if(event.object instanceof Document)
		{
			// When thumbnail selection changes in the Content pane, update the NavBar
			// to show the current selection or the name of the folder being viewed
			if(event.type == "selectionsChanged")
			{
				if(event.object.navbars.filesystem.bottom != null && event.object.navbars.filesystem.bottom.pathPanel != null )
				{

					// get Thumbnail object for current selection 
					var thumb = (event.object.selections[0] != undefined) ? event.object.selections[0]  :  event.object.thumbnail;
					
					// update the UI component in the NavBar to show the path
					event.object.navbars.filesystem.bottom.pathPanel.browseField.text = thumb.path;
				}
				else
				{
					if(event.object instanceof Document)
					{
						// display the configured NavBar if it is not already visible
						buildNavbar(event.object);
					}
				}
			}
			
		}
		return {handled: false}; // continue with other handlers
	}

	// Register event handler
	app.eventHandlers.push( { handler: onMyChangeEvent} );
	
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
SnpAddScriptUINavBar.prototype.canRun = function()
{	

	// Must run Bridge 
	if(BridgeTalk.appName == "bridge") 
	{
		return true;
	}
	
	// Fail if these preconditions are not met. 
	$.writeln("ERROR:: Cannot run SnpAddScriptUINavBar");
	$.writeln(this.requiredContext);
	return false;
	
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpAddScriptUINavBar_unitTest) == "undefined") {
    new SnpAddScriptUINavBar().run();
}
