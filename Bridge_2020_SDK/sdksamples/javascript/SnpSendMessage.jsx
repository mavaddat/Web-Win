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
  @fileoverview Demonstrates basic cross-application communication using BridgeTalk messages, between Bridge CC 2018 and Photoshop CC 2018.
  @class Demonstrates basic cross-application communication using BridgeTalk messages, between Bridge CC 2018 and Photoshop CC 2018.
  
  <h4>Usage</h4>
  <ol>
  <li> Make sure Adobe Bridge CC 2018 and Adobe Photoshop CC 2018 are running
  <li> Run the snippet in the ExtendScript Toolkit (ESTK), 
       with Bridge as the target (see Readme.txt)
  <li> Inspect the JavaScript Console in the ESTK to see the sequence of messages passing between Bridge CC 2018 and Photoshop CC 2018.
  <li>Note; there is no other visible output besides the trace to the JavaScript Console of the ESTK.
  </ol>

  <h4>Description</h4>

  <p>This script creates a BridgeTalk message object and sends it from Bridge to Photoshop.
  It prints to the JavaScript Console so you can see the order of arrival of the
  message and message responses.

  <p>Adobe Bridge CC 2018 and Adobe Photoshop CC 2018 must be running for this script to work. When Photoshop receives 
  the  message from Bridge, its default BridgeTalk.onReceive() method evaluates the script
  contained in the message body. That script causes Photoshop to send create some BridgeTalk 
  messages and send them back to Bridge.<br />
 
  @constructor
  Constructor.
 */
function SnpSendMessage() {
	
	/**
	 The number of messages to send back from Photoshop.
	 @type int
	*/
	this.numberOfMessagesToSend = 4;
	
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge 2.0 main engine,\n Photoshop must also be running.";
	$.level = 1; // Debugging level	
}

/**
 Functional part of this snippet.  
 
 Constructs the BridgeTalk message, including an onResult callback,
 and passes it to Photoshop.

 @return True if the snippet ran as expected, false otherwise.  
 @type Boolean
*/
SnpSendMessage.prototype.run = function() {
	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}
	// Override the default static BridgeTalk.onReceive() function
	// for Bridge to add functionality.
	BridgeTalk.onReceive = function( msg ) {
		// this is added to the default action
		$.writeln("SnpSendMessage: In Bridge - received message = " + msg.body);
		// this is the default action
		retval = eval(msg.body);
		return retval;
	}
	
	
	// Build a string containing the script to be executed 
	// by the target application (Photoshop)
	var scp = "for(var i = 1; i <= " + this.numberOfMessagesToSend + "; i++) {\n"; 
	scp += "var bt = new BridgeTalk();\n";
	// Photoshop is going to send a message back to Bridge, so
	// when Photoshop is the sender, the target is Bridge
	scp += "bt.target = 'bridge';\n"; 
	scp += "var msgbody = 'var message_index = ' + i; ";
	scp += "bt.body = msgbody;\n";
	// Photoshop will acknowledge the Bridge response to each successful message
	scp += "bt.onResult = function( resultMsg )\n { $.writeln('SnpSendMessage: In Photoshop - response to message sent back to Bridge = ' + resultMsg.body); }\n";
	// Photoshop will acknowledge any errors that occur while sending back messages
	scp += "bt.onError = function( errorMsg )\n { $.writeln('SnpSendMessage: ERROR In Photoshop: error = ' + errorMsg.body); }\n";
	scp += "$.writeln('In Photoshop: about to send message ' + i + ' to Bridge');\n"
	scp += "bt.send();\n"
	scp += "}"; // end for
	
	// Bridge creates the initial message object 
	var btMsg = new BridgeTalk();
	// Photoshop is the target
	btMsg.target = "photoshop";
	// The string containing the script is the body
	btMsg.body = scp;
	
	// Bridge acknowledges the successful sending of the initial message
	btMsg.onResult = function( resultMsg ) {
		$.writeln("SnpSendMessage: In Bridge - result of sending initial message to Photoshop = " + resultMsg.body);
	}
	
	// Bridge handles any errors  that occur when sending the initial message
	btMsg.onError = function( errorMsg ) {
		 retval = false; 
		 $.writeln(eObj.body); 
	}
	// Bridge sends the initial message
	$.writeln("SnpSendMessage: In Bridge - about to send initial message to Photoshop");
	btMsg.send();
	 
	$.writeln("SnpSendMessage: In Bridge - BridgeTalk.send() invoked, SnpSendMessage.run() exiting");
	
	return retval;
}

/**
 Determines whether snippet can be run given current context.  The snippet 
 fails if these preconditions are not met:
 <ul>
 <li> Must run in Bridge
 <li> Photoshop must be running
 </ul>

 @return True if this snippet can run, false otherwise
 @type Boolean
*/
SnpSendMessage.prototype.canRun = function() {
	// Must run in Bridge 
	// Photoshop must be running
	if((BridgeTalk.appName == "bridge") && BridgeTalk.isRunning("photoshop")) {
		return true;
	}
	// Fail if these preconditions are not met. 
	$.writeln("ERROR:: Cannot run SnpSendMessage");
	$.writeln(this.requiredContext);
	return false;
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpSendMessage_unitTest)  == "undefined") {
    new SnpSendMessage().run();
}





