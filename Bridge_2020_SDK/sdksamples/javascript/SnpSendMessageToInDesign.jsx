/*
	ADOBE SYSTEMS INCORPORATED
	Copyright 2008-2017 Adobe Systems Incorporated
	All Rights Reserved

	NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
	terms of the Adobe license agreement accompanying it.  If you have received this file from a
	source other than Adobe, then your use, modification, or distribution of it requires the prior
	written permission of Adobe.
*/

/** 
  @fileoverview Demonstrates basic cross-application communication using BridgeTalk messages, communicating between Bridge CC 2018 and InDesign CC 2018.
  @class Demonstrates basic cross-application communication using BridgeTalk messages, communicating between Bridge CC 2018 and InDesign CC 2018.
  
  <h4>Usage</h4>
  <ol>
  <li> Make sure Adobe Bridge CC 2018 is running and Adobe InDesign CC 2018 is running.
  <li> Run the snippet in the ExtendScript Toolkit, 
       with Bridge CC 2018 as the target (see Readme.txt)
  <li> Inspect the JavaScript Console in the Toolkit to see the sequence of messages between Bridge CC 2018 and InDesign CC 2018.
  <li>Switch to InDesign CC 2018; you should see a new document has been created, with a populated text frame.
  </ol>

  <h4>Description</h4>

  <p>This script creates a BridgeTalk message object and sends it from Bridge CC 2018 to InDesign CC 2018. The message sends a function
  (createInDesignObjects()), which is executed in the scripting engine of InDesign CC 2018 to create a new document with a populated text frame.<br />

  @constructor Constructor
 */
function SnpSendMessageToInDesign() {
	
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge CC 2018 main engine,\n InDesign CC 2018 must also be running.";
	$.level = 1; // Debugging level	
}

/**
 Functional part of this snippet. Constructs the BridgeTalk message, including an onResult callback,
 and passes it to InDesign.

 @return True if the snippet ran as expected, false otherwise.  
 @type Boolean
*/
SnpSendMessageToInDesign.prototype.run = function() {
	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}
	// Create the message object
	var bt = new BridgeTalk();
	// Initialize with the target and message string
	bt.target = "indesign";
	bt.body = "var SnpSentMessage = {}; SnpSentMessage.create = " + createInDesignObjects.toString();
	bt.body += "SnpSentMessage.create();"
	// Handle error case
	bt.onError = function(errObj)
	{
		$.writeln(errObj.body);
	}
	// Handler to get the result of the message, so we know when it is completed and with what result
	bt.onResult = function(resObj)
	{
		// The result of executing the code is the last line of the script that was executed in the target (InDesign)
		var retval = eval(resObj.body);
		$.writeln("SnpSendMessageToInDesign: (Bridge) received result = " + retval);
		$.writeln("SnpSendMessageToInDesign: (Bridge) the process of creating objects in InDesign has finished...");
		// Now we're done, switch the front app to be InDesign to see the result
		BridgeTalk.bringToFront("indesign");
	}

	$.writeln("SnpSendMessageToInDesign: (Bridge) about to send initial message to InDesign");
	// Send the message
	bt.send();
	$.writeln("SnpSendMessageToInDesign: (Bridge) BridgeTalk.send() invoked, SnpSendMessageToInDesign.run() exiting");
		 
	return retval;
}

/**
 Determines whether snippet can be run given current context.  The snippet 
 fails if these preconditions are not met:
 <ul>
 <li> Must run in Bridge
 <li> InDesign must be running
 </ul>

 @return True if this snippet can run, false otherwise
 @type Boolean
*/
SnpSendMessageToInDesign.prototype.canRun = function() {
	// Must run in Bridge 
	// InDesign must be running
	if((BridgeTalk.appName == "bridge") && BridgeTalk.isRunning("indesign")) {
		return true;
	}
	// Fail if these preconditions are not met. 
	$.writeln("ERROR:: Cannot run SnpSendMessageToInDesign");
	$.writeln(this.requiredContext);
	return false;
}

/**
 This is code that will only run within the InDesign scripting engine, but we send it to InDesign
 by serializing the function to a string and sending it as part of a BridgeTalk message.
*/
function createInDesignObjects() {
	$.writeln("SnpSendMessageToInDesign: (InDesign) entering createInDesignObjects");
	var mylayername = "snpsendmessagetoidlayer";
	var mydoc = app.documents.add();
	var mylayer = mydoc.layers.add({name: mylayername});
	with(mydoc.pages.item(0)) {
			myframe = textFrames.add(mydoc.layers.item(mylayername));
			myframe.geometricBounds = ["6p0", "6p0", "18p0", "18p0"];
			myframe.contents = "Hello World from SnpSendMessageToInDesign";
	}
	$.writeln("SnpSendMessageToInDesign: (InDesign) leaving createInDesignObjects");
	return true;
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpSendMessageToInDesign_unitTest )  == "undefined") {
	new SnpSendMessageToInDesign().run();
}






