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
  @fileoverview Shows how to pass a scripting DOM object from Adobe Photoshop CC 2018 to Bridge CC 2018
  	in a BridgeTalk message.
  @class Shows how to pass a scripting DOM object from Adobe Photoshop CC 2018 to Bridge CC 2018
  	in a BridgeTalk message.
 
  <h4>Usage</h4>
  <ol>
  <li> Make sure Adobe Bridge CC 2018 and Adobe Photoshop CC 2018 are running
  <li> Run the snippet in the ExtendScript Toolkit, 
       with Bridge CC 2018 as the target (see Readme.txt)
  <li> Inspect the JavaScript Console in the Toolkit to see information about the messages and objects passed between the applications.
    <li>Note; there is no other visible output besides the trace to the JavaScript Console of the ESTK.
  </ol>
 
  <h4>Description</h4>

  <p>Demonstrates passing a DOM object from Adobe Photoshop CC 2018 to Adobe Bridge CC 2018 via BridgeTalk.  
  The passed script within the BridgeTalk message creates a File instance and then serialises
  it with toSource().  When Bridge receives the BridgeTalk message response, it can access the DOM object 
  created by Adobe Photoshop and its properties by using eval() on the 'resObj.body' which is 
  returned to the callback function BridgeTalk.onResult().<br />
 
  @constructor  Constructor 
 */
function SnpSendDOMObject()
{
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "\tExecute against Bridge 2.0 main engine.\nBridge must be running.";
	$.level = 1; // Debugging level
}

/**
 Functional part of this snippet.  
 
  Constructs a BridgeTalk message, which contains both the script to 
  run in Photoshop, and the onResult callback for processing the response,
  then sends the message to Photoshop.

  <p>The script creates a DOM object on the target side, and serializes it
  in order to return it as the result of evaluation.

 @return True if the snippet ran as expected, false if Photoshop or
  	Bridge is not running or if an error occurred sending the message.
 @type Boolean
*/
SnpSendDOMObject.prototype.run = function()
{
	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}

	try	
	{
		// Create the message object
		var bt = new BridgeTalk();
		// The message target is Photoshop
		bt.target = "Photoshop";
		
		// Construct a string containing the body of the message,
		// a script to be evaluated by Photoshop.
		var scp = "$.writeln('SnpSendDOMObject: Photoshop - Creating DOM object');";
		// create a DOM object on the target side
		scp += "var f = new Folder(Folder.myDocuments);";
		// serialize the object to return as the result of evaluation
		scp += "f.toSource();";
		// The string containing the script is the body of the message.
		bt.body = scp;
		
		// Bridge handles the result of the message
		bt.onResult = function(resObj)
		{
			// Use eval() to reconstruct the serialized object
			$.writeln("SnpSendDOMObject: Bridge - Received and reconstructing object...");
			f = eval(resObj.body);
			
			// Access the object's properties
			$.writeln("SnpSendDOMObject: Bridge - Folder Name = " + f.fsName);
			$.writeln("SnpSendDOMObject: Bridge - Folder created = " + f.created);
		}
		
		// Bridge handles any errors  that occur when sending the initial message
		bt.onError = function(errObj)
		{
			$.writeln("SnpSendDOMObject: " + errObj.body);
			retval = false;
		}

		// Send the initial message from Bridge to Photoshop
		bt.send();
		
	}
	catch(error) { $.writeln("SnpSendDOMObject: " + error); }

	return retval;
}

/**
 Determines whether snippet can run given current context.  The snippet  
 fails if these preconditions are not met: 
 <ul>
 <li> Must run in Bridge
 <li> Photoshop must be running
 </ul>

 @return True if this snippet can run, false otherwise
 @type Boolean
*/
SnpSendDOMObject.prototype.canRun = function()
{	
	// Must run in Bridge
	// Photoshop must be running
	if((BridgeTalk.appName == "bridge") && BridgeTalk.isRunning("photoshop")) {
		return true;
	}
	
	// Fail if these preconditions are not met.  
	$.writeln("ERROR:: Cannot run SnpSendDOMObject");
	$.writeln(this.requiredContext);
	return false;
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpSendDOMObject_unitTest)  == "undefined") {
    new SnpSendDOMObject().run();
}

