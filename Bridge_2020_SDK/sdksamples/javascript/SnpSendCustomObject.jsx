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
  @fileoverview Shows how to pass a custom JavaScript object from Adobe Bridge CC 2018 to another
  	application (Adobe Photoshop CC 2018) in a BridgeTalk message, and pass it back in a response.
  @class Shows how to pass a custom JavaScript object from Adobe Bridge CC 2018 to another
  	application (Adobe Photoshop CC 2018) in a BridgeTalk message, and pass it back in a response.
 
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
    JavaScript object. Photoshop reconstructs and modifies the object,
    then serializes the object and returns it as the result of the initial message.
    
    <p>In processing the result, Bridge evaluates the serialized object in order
    to reconstruct it.<br />
 
  @constructor Constructor 
 */
function SnpSendCustomObject() {

	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge main engine.\nAdobe Bridge CC 2018 and Adobe Photoshop CC 2018 must be running.";
	$.level = 1; // Debugging level
}

/**
 Functional part of this snippet.  
 
 Constructs a BridgeTalk message, which contains both the script to 
 run in Photoshop, and the onResult callback for processing the response,
 then sends the message to Photoshop.

 <p>The script contains a serialized JavaScript object, reconstructs and
 modifies it on the target side, then reserializes and sends it back
 as the result.

 <p>The sender reconstructs the serialized object it receives as the result
 of the message.

 @return True if the snippet ran as expected, false if Photoshop or
  	Bridge is not running, or if an error occurred sending the message.
 @type Boolean
*/
SnpSendCustomObject.prototype.run = function() {
	
	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}

	// Create the message object
	var bt = new BridgeTalk();
	// The message target is Photoshop
	bt.target = "photoshop";
	
	// Create a custom JavaScript object with some properties
	var CustomObject = {};
	CustomObject.name = "A String";
	CustomObject.createdDate = new Date().toString();
	
	$.writeln("SnpSendCustomObject: Bridge - Custom object details:");
	$.writeln("SnpSendCustomObject: " + CustomObject.toSource());
	
	// Construct a string containing the body of the message,
	// a script to be evaluated by Photoshop.
	// The script contains the custom object, and causes Photoshop 
	// to modify its properties and send it back as the result
	scp = "";
	// serialize the object for sending
	scp += "var cm = eval(" + CustomObject.toSource() + ");";
	scp += "$.writeln('SnpSendCustomObject: Photoshop - Modifying object details...');";
	// modify the properties
	scp += "cm.name = cm.name + '_PS';";
	scp += "cm.modifiedDate = new Date().toString();";
	// serialize the modified object for return.
	// This is the last line of the script, so the serialized string 
	// is the result this evaluation, and is returned to Bridge
	scp += "cm.toSource();";  
			
	// The string containing the script is the body of the message.
	bt.body = scp;
	
	// Bridge handles the result of the message
	bt.onResult = function(resObj)
	{
		// Reconstruct the serialized object
		var returnedObject = eval(resObj.body);
		
		// Access the custom object's properties
		$.writeln("SnpSendCustomObject: Bridge - Custom object details after changes:");
		$.writeln(returnedObject.toSource());
	}
	
	// Bridge handles any errors  that occur when sending the initial message
	bt.onError = function(errObj)
	{
		$.writeln("SnpSendCustomObject: " + errObj.body);
		retval = false;
	}
	
	// Send the initial message from Bridge to Photoshop
	bt.send();
		
	return retval;
}

/**
 Determines whether snippet can run given current context. The snippet 
 fails if these preconditions are not met:
 <ul>
 <li> Must run in Bridge
 <li> Photoshop must be running
 </ul>

 @return True if this snippet can run, false otherwise
 @type Boolean
*/
SnpSendCustomObject.prototype.canRun = function() {
	
	// Must run in Bridge
	// Photoshop must be running
	if((BridgeTalk.appName == "bridge") && BridgeTalk.isRunning("photoshop")) {
		return true;
	}
	
	// Fail if these preconditions are not met.  
	$.writeln("ERROR:: Cannot run SnpSendCustomObject");
	$.writeln(this.requiredContext);
	return false;
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpSendCustomObject_unitTest)  == "undefined") {
    new SnpSendCustomObject().run();
}
