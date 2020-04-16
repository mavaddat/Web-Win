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
 @fileoverview Shows how to create separate event handlers for different events.
 @class Shows how to create separate event handlers for different events.
  
  <h4>Usage</h4>

   
   <ol>
   <li>Run the snippet in the ExtendScript Toolkit (see Readme.txt)
   <li> In Bridge, select Bridge > File > New Window, and inspect the JavaScript
        console of the ExtendScript Toolkit.
   <li> Select Bridge > File > Close Window, and inspect the JavaScript
	console.
	<li>You should see information about the event that took place; for instance, a message in the JavaScript console
	such as "SnpListenDocEvents: Document created".
   </ol>
 
  <h4>Description</h4>

 	<p>Defines separate event handlers for creating a new browser window and closing a browswer
	window. If either event is triggered, displays a message in the JavaScript
	console of the ExtendScript Toolkit.<br />

 @see SnpDefineAppClosingHandler
 
 @constructor Constructor
 */
function SnpListenDocEvents()
{
	/**
	  The context in which this snippet can run; Bridge must be running.
	  @type String
	*/
	this.requiredContext = "\tExecute against Bridge main engine.\n\tBridge must be running.";
	$.level = 1; // Debugging level
}

/**
 Functional part of this snippet. 
 Creates and registers the event handlers.

 @return True if the snippet ran as expected, false otherwise.   
 @type boolean
*/
SnpListenDocEvents.prototype.run = function()
{

	var retval = true;
	if(!this.canRun())
	{
		retval = false;	
		return retval;
	}

	// define handler for creation of a new Bridge browser window
	onCreateDocument = function(event) 
	{
		if(event.object instanceof Document && event.type == "create")
		{
			$.writeln("SnpListenDocEvents: Document created");
			return {handled:true};  // stop handling all other event handlers
		}
	}

	// define handler for when a Bridge browswer window is closed
	onCloseDocument = function(event)
	{
		if(event.object instanceof Document && event.type == "close")
		{
			$.writeln("SnpListenDocEvents: Document closed");
			return {handled:false};  // continue handling all other event handlers
		}
	}

	// Register and add the handlers
	app.eventHandlers.push({handler: onCreateDocument});
	app.eventHandlers.push({handler: onCloseDocument});
	
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
SnpListenDocEvents.prototype.canRun = function()
{	
		
	// Must run in Bridge 
	if(BridgeTalk.appName == "bridge")
	{
		return true;		
	}
	
	// Fail if these preconditions are not met.  
	// Bridge must be running,
	$.writeln("ERROR:: Cannot run SnpListenDocEvents");
	$.writeln(this.requiredContext);
	return false;
	
}

/**
  "main program": construct an anonymous instance and run it
*/
if(typeof(SnpListenDocEvents_unitTest)  == "undefined") {
    new SnpListenDocEvents().run();
}

