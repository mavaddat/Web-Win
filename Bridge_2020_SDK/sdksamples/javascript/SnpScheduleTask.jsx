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
  @fileoverview Shows how to schedule a task in Bridge.
  @class Shows how to schedule a task in Bridge.
 
  <h4>Usage</h4>
<ol>
  <li>Run the snippet in the ExtendScript Toolkit (see Readme.txt)with Bridge CC 2018 as the target.
  <li>First, the browser window will be maximized when a scheduled task executes once.
  <li>Keep watching the Content pane of Bridge, you should see all thumbnails will be selected and be deselected
      each time the schedule task is given a chance to execute,until another scheduled task executes once and cancels the original task. 
 </ol>
 
  <h4>Description</h4>

  <p>Schedules a task using app.scheduleTask(), which is repeated at regular 
  intervals for a short time, then cancelled. 

  @constructor Constructor.
 */
function SnpScheduleTask() {
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tNeed to be running in context of Bridge\n";	
	$.level = 1; // Debugging level
}

/**
 Functional part of this snippet. 
 
 Schedules a task executes once to maximize the browser window. 
 Schedules a repeating task to select and deselect all the thumbnails in the Content pane. 
 Schedules another task executes once and cancels the original repeating task.
 
	@return True if the snippet ran as expected, False otherwise.
 	@type Boolean
*/
SnpScheduleTask.prototype.run = function() {
	
	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}
	
	// Start a scheduled task. This function is scheduled to run once,
	startTask = function()
	{
        $.writeln("Task start.");
        app.document.maximize();
	}

    // Repeat a scheduled task. This function is scheduled to run repeatedly,  Stops when this task is cancelled by calling app.cancelTask().
    var selectAll = false;
	repeatTask = function()
	{
        $.writeln("Task repeated.");
        if (selectAll)
        {
            app.document.deselectAll();
            selectAll = false;
        } else {
            app.document.selectAll();
            selectAll = true;
        }
	}

    // Cancel a scheduled task. This function is scheduled to run once, cancelling ongoing tasks.
	stopTask = function(id)
	{
        $.writeln("Task cancelled.");
        app.cancelTask(id);
        app.document.normalize();
	}
	
	// Define some components for complex strings to pass in function calls
	$.writeln("Scheduling tasks...");
    
	// Schedule a single call to the function startTask()
	app.scheduleTask("startTask()", 4000, false);
	
	// Schedule repeated calls to the  function repeatTask() 
	var taskID = app.scheduleTask("repeatTask()", 6000, true);
	
	// Schedule the task that cancels the repeating task
	app.scheduleTask("stopTask(" + taskID + ")", 15000, false);
    
	$.writeln("Script complete...tasks scheduled");
	
	return retval;
}


/**
  Determines whether snippet can be run given current context.  The snippet 
  fails if these preconditions are not met:
  <ul>
  <li> Must be running in Bridge
  </ul>

  @return True is this snippet can run, false otherwise
  @type Boolean
*/
SnpScheduleTask.prototype.canRun = function() {
		
	// Must run in Bridge 
	// Resource file must be in place
	if((BridgeTalk.appName == "bridge"))
	{
		return true;		
	}
	
	// Fail if these preconditions are not met.
	$.writeln("ERROR:: Cannot run SnpScheduleTask");
	$.writeln(this.requiredContext);
	return false;
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpScheduleTask_unitTest)  == "undefined") {
    new SnpScheduleTask().run();
}
