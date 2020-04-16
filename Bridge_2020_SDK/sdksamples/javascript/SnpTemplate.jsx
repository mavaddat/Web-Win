////////////////////////////////////////////////////////////////////////////
// ADOBE SYSTEMS INCORPORATED
// Copyright 2007-2017 Adobe Systems Incorporated
// All Rights Reserved
//
// NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
// terms of the Adobe license agreement accompanying it.  If you have received this file from a
// source other than Adobe, then your use, modification, or distribution of it requires the prior
// written permission of Adobe.
/////////////////////////////////////////////////////////////////////////////

/** 
 @fileoverview The template for writing snippets.
  @class The template for writing snippets.
 
  <h4>Usage</h4>
  <ol>
  <li> Itemized list.
  <li> Describes how to run the snippet.
  </ol>
 
  <h4>Description</h4>
  
  <p>A more detailed description of the snippet goes here.<br />
 
  @constructor Constructor
 */
function SnpTemplate() 
{

	// Any class variables should be commented as such

	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tNeed to be running in context of Bridge\n";	
	// TODO define and initialize more instance variables here. 
}

/**
 Functional part of this snippet.
 @return True if the snippet ran as expected, false otherwise
 @type boolean
*/
SnpTemplate.prototype.run = function() 
{
	if(!this.canRun())
	{
		return false;
	}
	
	$.writeln("About to run SnpTemplate");
	
	// TODO Define behaviour
	
	$.writeln("Ran SnpTemplate");
	
	return true;
}


/**
 Determines whether snippet can be run given current context.  The snippet 
 fails if these preconditions are not met:
 <ul>
 <li> A condition - such as Must run in Bridge
 </ul>
 @return True if this snippet can run, false otherwise
 @type Boolean
*/
SnpTemplate.prototype.canRun = function()
 {
	if(BridgeTalk.appName == "bridge") 
	{ 
		return true;
	}
	$.writeln("ERROR:: Cannot run SnpTemplate");
	$.writeln(this.requiredContext);
	return false;
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpTemplate_unitTest ) == "undefined") {
	new SnpTemplate().run();
}
