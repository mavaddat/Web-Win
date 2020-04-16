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
  @fileoverview Demonstrates a basic implementation of a node-handling extension, in which the model is read-only.
  @class Demonstrates a basic implementation of a node-handling extension, in which the model is read-only.
 
  <h4>Usage</h4>
  
  <ol>
  <li> Make sure the icon files required by this sample are in the ./resources folder (BEHFileIconxx.png)
  <li> Execute the snippet in the ExtendScript Toolkit (see Readme.txt) with Bridge CC 2018 as the target- you can do this only once, then you must restart Bridge.
  <li> In Bridge inspect in the Favorites panel and select the new icon added, which should be named "BERoot". 
  <li> Navigate through the node hierarchy in the Content pane
  <li> As each is selected inspect the JavaScript console in the ESTK to view the Thumbnail's URI.
  </ol>
 
  <h4>Description</h4>
 
<p>Shows how to implement an ExtensionHandler and ExtensionModel,
  using two supporting classes, SDKSystem and SDKNode.

<p>The main function, run(), creates several nodes of the new type, and one manager object. 
  It stores the node-identifying prefix and root node in the manager object. 
    
<p>The function creates the ExtensionHandler object, whose definition includes
  the 'makeModel()' method, which Bridge uses to create the ExtensionModel object 
  at node-display time. The function registers the ExtensionHandler, 
  associating it with the node-identifying prefix.
    
<p>These nodes have no real capabilities, so the hierarchy is read-only.  
  See the Bridge JavaScript Guide for more details of node-handling mechanisms
  you can implement.<br />

  @see SDKSystem
  @see SDKNode
  @see CustomInfosetExtensionHandler
  @see CustomSearchExtensionHandler
  @see CustomSortExtensionHandler
	
  @constructor  Constructor.
*/
function BasicExtensionHandler() {

	$.level = 1; // Debugging level
	/**
	  The context in which this sample can run.
	  @type String
	*/
	this.requiredContext = "\tNeed to be running in context of Bridge\n";		
}

/**
 Functional part of this sample, creates several nodes of the new type, and one manager object,
 which stores the node-identifying prefix and root node. 
     
<p>Creates the ExtensionHandler object, whose definition includes
 the 'makeModel()' method, which Bridge uses to create the ExtensionModel object 
 at node-display time.
 
<p>Registers the ExtensionHandler, associating it with the node-identifying prefix.
 	@return True if the sample ran as expected, false otherwise
 	@type Boolean
*/
BasicExtensionHandler.prototype.run = function()
{
	if(!this.canRun())
	{
		return false;
	}
	
	$.writeln("BasicExtensionHandler: About to run");
	
	// Create some nodes of the script-defined type 
	var root = new SDKNode("BERoot", true);

	// Sub node - /BERoot/EHFolder1
	var sub = new SDKNode("EHFolder1", true)
	root.addNode(sub);
	
	// add a leaf node to the root
	var lf = new SDKNode("RootLeaf", false);
	root.addNode(lf);
	
	var n = new SDKNode("leaf1", false);
	var d = root.findChildNode("EHFolder1");
	d.addNode(n);

	// Sub node - /BERoot/EHFolder2
	root.addNode(new SDKNode("EHFolder2", true));
	n = new SDKNode("leaf2", false);
	d = root.findChildNode("EHFolder2");
	d.addNode(n);
	n = new SDKNode("leaf3", false);
	d = root.findChildNode("EHFolder2");
	d.addNode(n);

	// /BERoot/EHFolder1/EHSubFolder1
	root.getChildNode("EHFolder2").addNode(new SDKNode("EHSubFolder1", true));

	// BERoot/EHFolder1/EHSubFolder1/leaf4
	n = new SDKNode("leaf4", false);
	d = root.findChildNode("EHSubFolder1");
	d.addNode(n);

	// Create the manager object with the node-identifying prefix, 
	// and add the root node
	var sys = new SDKSystem("bridge:beNode:");
	sys.addRoot(root);
	
	// Create the node extension handler object
	var behHandler = new ExtensionHandler("behHandler");

	/**
		Required. Returns a canonical URI for the path.  If the path does not contain the 
		registered prefix, the this method must append it to the path and return it.  For example: 
		bridge:beNode:/BERoot
		@param path The path of the node as a string
	*/
	behHandler.getBridgeUriForPath = function(path)
	{
		return path;
	}

	 var wrapperObject = this;
	/**
		Required. Creates and returns and ExtensionModel instance.  Called each time a handled node
		is displayed.  The model must also implement any methods that handle any required 
		functionality, such as renaming node.
		@return An ExtensionModel for this node
		@type ExtensionModel
	*/
	behHandler.makeModel = function(path)
	{
		behModel = new ExtensionModel(path);
		behModel.path = path;
		this.path = path;
		wrapperObject.initModel(behModel, sys);
		
		return behModel;
	}
	
	// Register the node handler and prefix with the application
	app.registerExtension(behHandler);
	app.registerPrefix( "bridge:beNode:", behHandler);
	
	// create a thumbnail and add it to the Favorites panel
	var t = new Thumbnail("bridge:beNode:/BERoot");
	app.favorites.insert(t);
	t.refresh();

	// create an event handler to capture selection changes
	onNodeSelect = function(event)
	{
		if(event.object instanceof Document && event.type == "selectionsChanged")
		{
			if(event.object.selections.length != 0)
			{
				var thumb = event.object.selections[0];
				$.writeln("BasicExtensionHandler: " + thumb.uri + " selected");
			}
		}
		// continue with other handlers
		return {handled: false};
	}
	
	// register the handler
	app.eventHandlers.push({handler: onNodeSelect});

	$.writeln("BasicExtensionHandler: ran successfully");
	return true;
}

/**
  Determines whether sample can be run given current context.  The sample
  fails if these preconditions are not met:
  <ul>
  <li> Bridge must be running
  <li> Resource files must be available
  </ul>
  @return True if this sample can run, false otherwise
  @type Boolean
*/
BasicExtensionHandler.prototype.canRun = function() {
	
	if(BridgeTalk.appName == "bridge") 
	{
		// Check that this extension handler is not already loaded
		for(index in app.extensions)
		{
			if(app.extensions[index].name == "behHandler")
			{
				$.writeln("BasicExtensionHandler: ERROR - Cannont run twice! You must restart Bridge");
				return false;
			}
		}
		return true;

	}
	$.writeln("BasicExtensionHandler: ERROR - Cannot run BasicExtensionHandler");
	$.writeln("BasicExtensionHandler: " + this.requiredContext);
	return false;
}

/**
	Initialize the model and define the methods that this model supports
	@param behModel The model for the handled nodes
	@param sys The manager object for the handled nodes
*/
BasicExtensionHandler.prototype.initModel = function(behModel, sys)
{
		/**
			Required.  Carries out any necessary authentication.
		*/
		behModel.authenticate = function()
		{
			return;
		}
	
		/**
			Required,  Checks if this node is a valid node.
			@return True if this node is valid, false if otherwise
			@type Boolean
		*/			
		behModel.exists = function()
		{
			return true;
		}

		/**
			Required.  Called after the model is created, sets up any necessary data structures
			that may be needed.
		*/
		behModel.initialize = function()
		{
			this.privateData.node = sys.getNodeFromPath(this.path);
		}
		
		/**
			Required.  Stores a back pointer to the cache that contains this model.
			@param cacheEelement The CacheElement that contains this model.
		*/
		behModel.registerInterest = function(cacheElement)
		{
			this.privateData.cacheElement = cacheElement;
		}
		
		/**
			Required. Removes the association between the CacheElement and
			this model instance.
		*/
		behModel.unregisterInterest = function()
		{
			this.privateData.cacheElement = undefined;
		}
	
		/**
			Returns the parent of this node
		*/
		behModel.getParent = function()
		{
			var parent = this.privateData.node.getParent();
			if(parent != undefined)
			{
				return (sys.getPrefix() + parent.getPath());
			}
		}
		
		/**
			Required.  Updates the core node data and any custom node data
			for this node.  Always set the CacheData.status after updating the node data.
			@param infosetName The name of the Infoset that is being updated.
		*/
		behModel.refreshInfoset = function(infosetName)
		{
			var infoset = this.privateData.cacheElement[infosetName];
			var currentNode = this.privateData.node;
			try
			{
				if(infosetName == "immediate" || infosetName == "all")
				{
					infoset.name = currentNode.getName();
					infoset.isContainer = currentNode.isContainer();
					infoset.cacheData.status = "good";
				}

				// The capabilities of a handled node
				if(infosetName == "item" || infosetName == "all")
				{
					infoset.cacheData.status = "good";
				}

				// Add any children of this node to the children infoset
				if(infosetName == "children" || infosetName == "all")
				{
					var arr = currentNode.getChildren();
					for(var j = 0;j < arr.length;j++)
					{
						infoset.addChild( sys.getPrefix() + arr[j].getPath() );
					}
							
					infoset.cacheData.status = "good"; 			
				}

				if(infosetName == "icon" || infosetName == "all")
				{
					infoset.bitmap = currentNode.getIcon();
					infoset.cacheData.status = "good";
				}

				if(infosetName == "thumbnail" || infosetName == "all")
				{
					infoset.thumbnail = currentNode.getThumb();
					infoset.cacheData.status = "good";
				}

				if(infosetName == "quickMetadata" || infosetName == "all")
				{
					infoset.colorMode = -1;
					infoset.hasRawSetting = false;
					infoset.hasCrop = false;
					infoset.height = 300;
					infoset.rating = 0;
					infoset.rotation = 0;
					infoset.stockPhotoStatus = 0;
					infoset.xResolution = 0;
					infoset.yResolution = 0;
					infoset.width = 300;
					infoset.cacheData.status = "good";
				}
 
				if(infosetName == "itemContent" || infosetName == "all")
				{
					infoset.canGetPreview = false;
					infoset.cacheData.status = "good";
				}
	  
				if(infosetName == "preview" || infosetName == "all")
				{
					infoset.preview = currentNode.getPreview();
					infoset.cacheData.status = "good";
				}

			} catch(error) { alert(error); }			

		} // end refrreshInfoset

		/**
			Required.  Returns the cache status of a node data set.
			@param infosetName The name of the Infoset in which to check the cache status		
		*/
		behModel.getCacheStatus = function( infosetName, cookie )
		{
			if(typeof this.privateData.cacheElement == "undefined")
			{
				return "bad";
			}

			if(typeof this.privateData.cacheElement.infosetName== "undefined")
			{
				var ce = this.privateData.cacheElement;
				var info = ce[infosetName];
				var cd = info.cacheData;
				var stat = cd.status;
				return stat;
			}
			return this.privateData.cacheElement[infosetName].cacheData.status;
		}
		
		/**
			Required.  Acts as a destructor for this instance.  Return 'undefined' from 
			this method. Any private data structures will be cleaned automatically
		*/
		behModel.terminate = function()
		{
			return;
		}	
}	

// Include the support classes
#include SDKSystem.jsx
#include SDKNode.jsx

/**
  "main program": construct an anonymous instance and run it
*/
if(typeof(BasicExtensionHandler_unitTest) == "undefined") {
	new BasicExtensionHandler().run();
}
