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
  @fileoverview Shows how to create an event handler that responds to the application close event.  
  @class Shows how to create an event handler that responds to the application close event.  

  <h4>Usage</h4>

   
   <ol>
   <li>Run the snippet in the ExtendScript Toolkit (see Readme.txt), setting Bridge CC 2018 as the target application.
   <li> In Bridge, select File > Exit
   <li> Click Yes or No.
   <li>If you click No, then you will find that Bridge does not exit.
   <li>If you click Yes, then you should find that Bridge exits normally.
   </ol>
 
  <h4>Description</h4>

   <p>An event handler listens for the close event from the App object,
   and displays a confirm dialog in which the user can choose
   whether or not to actually quit from Adobe Bridge.<br />
   
  @see SnpListenDocEvents

   @constructor Constructor
 */
function SnpDefineAppClosingHandler()
{
	/**
	  The context in which this snippet can run; Bridge must be running.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge main engine.\n";
}

/**
  Functional part of this snippet.
  Registers an event handler that is called when the user requests that the 
  Bridge application be closed.
 
 @return True if the snippet ran as expected, false otherwise.   
 @type boolean
*/
SnpDefineAppClosingHandler.prototype.run = function()
{
	
	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}

	// Event handler, called when Bridge is about to close
	var myCloseHandler = function(event)
	{
		if((event.type == 'close') && (event.object instanceof App))
		{
			var b = (Window.confirm("Really quit?")) ? false : true;
			$.writeln(b);
			return { handled: b };  // Don't execute any more handlers
		}
		
		return {handled: false}; // continue with other handlers, if there are any
	}

	// Register and add the handler
	app.eventHandlers.push({handler:myCloseHandler});
	
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
SnpDefineAppClosingHandler.prototype.canRun = function() {
	
	// Must run in Bridge 
	if(BridgeTalk.appName == "bridge") {
		return true;
	}
	
	// Fail if these preconditions are not met.  
	// Bridge must be running,
	$.writeln("ERROR:: Cannot run SnpDefineAppClosingHandler");
	$.writeln(this.requiredContext);
	return false;
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpDefineAppClosingHandler_unitTest)  == "undefined") {
    new SnpDefineAppClosingHandler().run();
}



