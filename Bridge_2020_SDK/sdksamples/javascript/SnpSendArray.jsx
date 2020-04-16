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
  @fileoverview Shows how to pass an array from Adobe Photoshop CC 2018 to Bridge CC 2018
  	in response to a BridgeTalk message.
  @class Shows how to pass an array from Adobe Photoshop CC 2018 to Bridge CC 2018
  	in response to a BridgeTalk message.
 
  <h4>Usage</h4>
  <ol>
  <li> Make sure Adobe Bridge CC 2018 and Adobe Photoshop CC 2018 are running
  <li> Run the snippet in the ExtendScript Toolkit (ESTK), 
       with Bridge as the target (see Readme.txt)
  <li> Inspect the JavaScript Console in the ESTK for information on the sequence of messages and
  objects passed.
   <li>Note; there is no other visible output besides the trace to the JavaScript Console of the ESTK.
  </ol>
 
  <h4>Description</h4>

    <p>Bridge sends a BridgeTalk message to Photoshop, passing a
    script that creates an array on the target side. Photoshop 
    serializes the array in order to returns it as the result 
    of the initial message.
    
    <p>In processing the result, Bridge evaluates the serialized array 
    in order to reconstruct it.<br />
 
  @constructor Constructor
 */
function SnpSendArray() {
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge main engine.\nAdobe Bridge CC 2018 and Adobe Photoshop CC 2018 must be running";

}

/**
 Functional part of this snippet.  
 
 Constructs the BridgeTalk message, which contains both the script to 
 run in Photoshop, and the onResult callback for processing the response,
 then sends the message to Photoshop.

  <p>The script constructs an array on the target side, then serializes and 
  returns it as the result of the message.
 
  <p>In handling the result, the sender (Bridge) evaluates the serialized 
  array in order to reconstruct it.

 @return True if the snippet ran as expected, false if Photoshop or
  	Bridge is not running, or if an error occurred sending the message.
 @type Boolean
*/
SnpSendArray.prototype.run = function() {
	
	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}

	// Create the message object
	var bt = new BridgeTalk();
	// The message target is Photoshop
	bt.target = "photoshop";
	
	// Construct the body of the message, a string containing 
	// the script to be executed by the target application
	bt.body = "";
	bt.body = "var arr = [10, 'this string', 324];";
	// construct an array
	bt.body += "for (var i=0; i< arr.length; i++){ $.writeln('In Photoshop: ' + arr[i]);}";
	// serialized the array for sending
	bt.body += "arr.toSource();";
	
	// Bridge responds to result returned from Photoshop
	bt.onResult = function(resObj)
	{
		$.writeln("SnpSendArray: Bridge - Accessing the array...");
		
		// use eval to reconstruct the returned serialized array
		var anArray = eval(resObj.body);
		
		// access the reconstructed array
		for (var i=0; i< anArray.length; i++)
		{	
			$.writeln("SnpSendArray: Bridge - " + anArray[i]);
		}
	}
	
	// Handle errors that occur in sending the message
	bt.onError = function(errObj)
	{
		$.writeln("SnpSendArray: " + errObj.body);
		retval = false;
	}
	
	// Send the message
	bt.send();

	return retval;
}


/**
 Determines whether snippet can be run given current context. The snippet  
 fails if these preconditions are not met:
 <ul>
 <li> Must run in Bridge
 <li> Photoshop must be running
 </ul>

 @return True if this snippet can run, false otherwise
 @type Boolean
*/
SnpSendArray.prototype.canRun = function() {
	
	// Must run in Bridge 
	// Photoshop must be running
	if((BridgeTalk.appName == "bridge") ) { // HACK && BridgeTalk.isRunning("Photoshop")) {
		return true;
	}
	
	// Fail if these preconditions are not met 
	$.writeln("ERROR:: Cannot run SnpSendArray");
	$.writeln(this.requiredContext);
	return false;
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpSendArray_unitTest)  == "undefined") {
    new SnpSendArray().run();
}
