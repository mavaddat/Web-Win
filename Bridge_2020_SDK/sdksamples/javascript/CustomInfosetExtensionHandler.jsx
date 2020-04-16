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
  @fileoverview Demonstrates a basic implementation of a node-handling extension with a custom Infoset.
  @class Demonstrates a basic implementation of a node-handling extension with a custom Infoset.
 
  <h4>Usage</h4>
  <ol>
  <li> Make sure the icon files required by this sample are in the ./resources folder (BEHFileIconxx.png)
  <li> Run the snippet in the ExtendScript Toolkit (see Readme.txt) with Bridge CC 2018 as the target; 
      you can do this only once, then you must restart Bridge if you want to run this sample again
  <li> Arrange the Inspector palettes so the Favorites, Content Pane and the newly added 'SDK: Custom Infoset Data' palette are visible.
  <li> Inspect the Favorites panel and select the new 'CIRoot' icon.
  <li> Navigate through the node hierarchy in the Content pane, and notice how the custom infoset data changes in 'SDK: Custom Infoset Data' palette.
  <li> In the 'SDK: Custom Infoset Data' palette, enter some new data in the 'Custom String' field and press Enter.
  <li> Click Yes at the prompt.
  <li> In 'SDK: Custom Infoset Data' palette, use the drop-down list to change the Boolean value of the custom Infoset member 'Custom Boolean'
  <li> Click Yes at the prompt.
  </ol>
  
  <h4>Description</h4>
 
  <p>Shows how to implement an ExtensionHandler and ExtensionModel with a custom Infoset object,
  using two supporting classes, SDKSystem and SDKNode.

  <p>This sample creates the ExtensionHandler object, whose definition includes
  the 'makeModel()' method, which Adobe Bridge uses to create the ExtensionModel object 
  at node-display time. The function registers the ExtensionHandler, associating it 
  with the node-identifying prefix.

  <p>The sample creates a custom Infoset object and its members, which contain different data
  types. The new Infoset is registered with its associated handler. The data for each handled node 
  is stored by this Infoset object.

  <p>The sample creates a TabbedPalette named 'SDK: Custom Infoset Data' in which to display
  the custom data when a handled node is selected. The palette allows you to modify the values
  in two of the member fields of the custom Infoset.

  <p>The main function creates several nodes of the new type, and one manager object
  that stores the node-identifying prefix and root node. 
  
  See the Adobe Bridge CC 2018 JavaScript Guide for more details of custom Infosets.<br />

  @see SDKSystem
  @see SDKNode
  @see BasicExtensionHandler
  @see CustomSearchExtensionHandler
  @see CustomSortExtensionHandler
	
  @constructor  Constructor.
*/
function CustomInfosetExtensionHandler() {

	$.level = 1; // Debugging level
	/**
	  The context in which this sample can run.
	  @type String
	*/
	this.requiredContext = "\tNeed to be running in context of Bridge\n";

	/**
	  The image for the button icon
        @type String
	*/
	this.buttonIcon = new File($.fileName).parent.fsName + "/resources/editIcon.png";
		
}

/**
 Functional part of this sample, creates the ExtensionHandler object, whose definition includes
 the 'makeModel()' method, which Bridge uses to create the ExtensionModel object 
 at node-display time.

 <p>Creates the custom Infoset and associated data.

 <p>Creates several nodes of the new type, and one manager object,
 which stores the node-identifying prefix and root node. 
 
 <p>Registers the ExtensionHandler, associating it with the node-identifying prefix.
 	@return True if the sample ran as expected, false otherwise
 	@type Boolean
*/
CustomInfosetExtensionHandler.prototype.run = function()
{
	if(!this.canRun())
	{
		return false;
	}
	
	$.writeln("CustomInfosetExtensionHandler: About to run");
	
	// Create some nodes of the script-defined type 
	var root = new SDKNode("CIRoot", true);

	// Sub node - /CIRoot/CIFolder1
	var sub = new SDKNode("CIFolder1", true)
	root.addNode(sub);
	
	// add a leaf node to the root
	var lf = new SDKNode("RootLeaf", false);
	root.addNode(lf);
	
	var n = new SDKNode("leaf1", false);
	var d = root.findChildNode("CIFolder1");
	d.addNode(n);

	// Sub node - /CIRoot/CIFolder2
	root.addNode(new SDKNode("CIFolder2", true));
	n = new SDKNode("leaf2", false);
	d = root.findChildNode("CIFolder2");
	d.addNode(n);
	n = new SDKNode("leaf3", false);
	d = root.findChildNode("CIFolder2");
	d.addNode(n);

	// /CIRoot/CIFolder2/CISubFolder1
	root.getChildNode("CIFolder2").addNode(new SDKNode("CISubFolder1", true));

	// CIRoot/CIFolder1/CISubFolder1/leaf4
	n = new SDKNode("leaf4", false);
	d = root.findChildNode("CISubFolder1");
	d.addNode(n);

	// Create the manager object with the node-identifying prefix, 
	// and add the root node
	var sys = new SDKSystem("bridge:ciNode:");
	sys.addRoot(root);

	
	// Create the node extension handler object
	var ciHandler = new ExtensionHandler("ciHandler");

	// Register the node handler and prefix with the application
	app.registerExtension(ciHandler);
	app.registerPrefix( "bridge:ciNode:", ciHandler);

	/**
		Required. Returns a canonical URI for the path.  If the path does not contain the 
		registered prefix, the this method must append it to the path and return it.  For example: 
		bridge:beNode:/CIRoot
		@param path The path of the node as a string
	*/
	ciHandler.getBridgeUriForPath = function(path)
	{
		return path;
	}

	var wrapperObject = this;
	/**
		Required. Creates and returns and ExtensionModel instance.  Called each time a handled node
		is displayed.  The model must also implement any methods that handle any required 
		functionality, such as renaming a node.
		@return An ExtensionModel for this node
		@type ExtensionModel
	*/
	ciHandler.makeModel = function(path)
	{
		ciModel = new ExtensionModel(path);
		ciModel.path = path;
		this.path = path;
		wrapperObject.initModel(ciModel, sys);
		
		return ciModel;
		
		
	} // end makeModel

	// Create the InfosetMemberDescription objects
	var customInfoDescriptions = new Array();
	customInfoDescriptions[0] = new InfosetMemberDescription( "CustomString", "String" );
	customInfoDescriptions[1] = new InfosetMemberDescription( "CustomNumber", "Integer" );
	customInfoDescriptions[2] = new InfosetMemberDescription( "CustomDate", "String" );
	customInfoDescriptions[3] = new InfosetMemberDescription( "CustomArray", "Array of String" );
	customInfoDescriptions[4] = new InfosetMemberDescription( "CustomBool", "Boolean" );

	// Create the infoset
	var customInfoset = new Infoset("customInfoset", customInfoDescriptions);

	// Register the infoset with the node handler
	app.registerInfoset(ciHandler, customInfoset);

	// Event handler displays the Custom Infoset Data palette for handled thumbnails.
	onEvent = function(event)
	{
		if(event.object instanceof Document)
		{			
			if(event.type == "selectionsChanged")
			{
				if(event.object.selections.length > 0)
				{
					var thumb = event.object.selections[0];	

					if(thumb.ciHandler)
					{
						stringText.text = thumb.ciHandler.customInfoset.CustomString;
						numbersText.text = thumb.ciHandler.customInfoset.CustomNumber;
						dateText.text = thumb.ciHandler.customInfoset.CustomDate;
						arrStringText.text = thumb.ciHandler.customInfoset.CustomArray.toString();
						boolList.selection = (thumb.ciHandler.customInfoset.CustomBool) ? 0 : 1;
						customDataPalette.content.enabled = true;
						customDataPalette.content.visible = true;
					} 
					else
					{
						customDataPalette.content.visible= false;
					}					
				}
				else
				{
					customDataPalette.content.visible= false;
				}
			}
		}
	}

	// Register the event handler
	app.eventHandlers.push({handler: onEvent});

	// Create  a palette to display the custom data
	var customDataPalette = new TabbedPalette(app.document, "SDK: Custom Infoset Data", "SDKCustomInfoPalette", "script");
	var win = customDataPalette.content;
	
	var stringLabel = win.add("statictext", [5, 9, 115, 25], "Custom String");
	var stringText = win.add("edittext", [120, 5, 320, 25], "");
	stringText.onChange = function()
	{
		var selected = app.document.selections[0];
		if(selected != undefined)
		{
			if(confirm("Are you sure you want to change this data?"))
			{
				selected.ciHandler.customInfoset.CustomString = stringText.text ;
				selected.ciHandler.customInfoset.cacheData.status = "bad";
				selected.model.privateData.node.setCustomString(stringText.text);
			}
			else
			{
				stringText.text = selected.ciHandler.customInfoset.CustomString;
			}
			app.document.selections[0] = selected;
		}
	}

	var numbersLabel = win.add("statictext", [5, 39, 115, 55], "Custom Number");
	var numbersText = win.add("edittext", [120, 35, 320, 55], "");

	numbersText.onChange = function()
	{
		var selected = app.document.selections[0];
		if(selected != undefined)
		{
			if(confirm("Are you sure you want to change this data?"))
			{
				selected.ciHandler.customInfoset.CustomNumber = numbersText.text ;
				selected.ciHandler.customInfoset.cacheData.status = "bad";
				selected.model.privateData.node.setCustomNumber(parseInt(numbersText.text));
			}
			else
			{
				numbersText.text = selected.ciHandler.customInfoset.CustomNumber;
			}
			app.document.selections[0] = selected;
		}
	}

	var dateLabel = win.add("statictext", [5, 69, 115, 85], "Custom Date");
	var dateText = win.add("edittext", [120, 65, 320, 85], "");
	dateText.enabled = false;

	var arrLabel = win.add("statictext", [5, 99, 115, 115], "Custom Array");
	var arrStringText = win.add("edittext", [120, 95, 320, 115], "");
	arrStringText.enabled = false;
	
	var boolLabel = win.add("statictext", [5, 129, 115, 145], "Custom Boolean");
	var boolList = win.add("dropdownlist", [120, 125, 320, 145]);
	var tItem = boolList.add("item", "True");
	tItem.val = true;
	var fItem = boolList.add("item", "False");
	fItem.val = false;
	
	boolList.onChange = function()
	{
		var selected = app.document.selections[0];
		var currentVal = selected.ciHandler.customInfoset.CustomBool;
		
		// Check the elements are actually here
		if(boolList.selection)
		{
			if(currentVal == boolList.selection)
			{
				if(confirm("Are you sure you want to change this data?"))
				{
					selected.ciHandler.customInfoset.CustomBool = boolList.selection.val;
					selected.ciHandler.customInfoset.cacheData.status = "bad";
					selected.model.privateData.node.setCustomBool(boolList.selection.val);

				}
			}			
			app.document.selections[0] = selected;
		}
	}

	// Hide the palette until a handled node is selected
	customDataPalette.content.visible = false;

	// Create a thumbnail of the handled type and add it to the Favorites palette
	var t = new Thumbnail("bridge:ciNode:/CIRoot");

	app.favorites.insert(t);
	t.refresh();

	$.writeln("CustomInfosetExtensionHandler ran successfully");

	return true;
}


/**
  Determines whether sample can be run given current context. The sample
  fails if these preconditions are not met:
  <ul>
  <li> Adobe Bridge must be running
  <li> Resource files must be available
  </ul>
  @return True if this sample can run, false otherwise
  @type Boolean
*/
CustomInfosetExtensionHandler.prototype.canRun = function() {
	
	if(BridgeTalk.appName == "bridge") {
	
		// Check that this extension handler is not already loaded
		for(index in app.extensions)
		{
			if(app.extensions[index].name == "ciHandler")
			{
				$.writeln("CustomInfosetExtensionHandler: ERROR - Cannot run twice! You must restart Bridge");
				return false;
			}
		}
		return true;
	}
	$.writeln("CustomInfosetExtensionHandler: ERROR - Cannot run CustomInfosetExtensionHandler");
	$.writeln("CustomInfosetExtensionHandler: " + this.requiredContext);
	return false;
}

/**
	Initialize the model and define the methods that this model supports
	@param ciModel The model for the handled nodes
	@param sys The manager object for the handled nodes
*/
CustomInfosetExtensionHandler.prototype.initModel = function(ciModel, sys)
{
	/**
			Checks whether this node requires authentication.
			@return True if this node requires authentication, false otherwise
			@type Boolean
		*/
		ciModel.needAuthentication = function()
		{
			return false;
		}

		/**
			Required.  Carries out any necessary authentication.
		*/
		ciModel.authenticate = function()
		{
			return;
		}
	
		/**
			Required,  Checks if this node is a valid node.
			@return True if this node is valid, false otherwise
			@type Boolean
		*/			
		ciModel.exists = function()
		{
			return true;
		}
		
		/**
			Required.  Called after the model is created, sets up any private data structures
			that may be needed.
		*/
		ciModel.initialize = function()
		{
			this.privateData.node = sys.getNodeFromPath(this.path);
		}
		
		/**
			Required.  Stores a back pointer to the cache that contains this model.
			@param cacheEelement The CacheElement that contains this model.
		*/		
		ciModel.registerInterest = function(cacheElement)
		{
			this.privateData.cacheElement = cacheElement;
		}
	
		/**
			Required. Removes the association between the CacheElement and
			this model instance.
		*/		
		ciModel.unregisterInterest = function()
		{
			this.privateData.cacheElement = undefined;
		}
	
		/**
			Returns the parent of this node
		*/
		ciModel.getParent = function()
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
		ciModel.refreshInfoset = function(infosetName)
		{
			var infoset = this.privateData.cacheElement[infosetName];
			var currentNode = this.privateData.node;
			try
			{				
				if(infosetName == "immediate" || infosetName == "all")
				{
					infoset.name =currentNode.getName();
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
			
				// Handles the custom infoset
				if(infosetName == "customInfoset" || "all")
				{	
					if(this.privateData.cacheElement.customInfoset.cacheData.status != "good")
					{
						this.privateData.cacheElement.customInfoset.CustomString = currentNode.getCustomString();	
						this.privateData.cacheElement.customInfoset.CustomNumber = currentNode.getCustomNumber();
						this.privateData.cacheElement.customInfoset.CustomDate = currentNode.getCustomDate();
						this.privateData.cacheElement.customInfoset.CustomArray = currentNode.getCustomArray();
						this.privateData.cacheElement.customInfoset.CustomBool = currentNode.getCustomBool();
					}
					else
					{
						currentNode.setCustomString(this.privateData.cacheElement.customInfoset.CustomString);
						currentNode.setCustomNumber(this.privateData.cacheElement.customInfoset.CustomNumber);
						currentNode.setCustomBool(this.privateData.cacheElement.customInfoset.CustomBool);
					}
					this.privateData.cacheElement.customInfoset.cacheData.status = "good";
				}				
			
			} catch(error) { alert(error); }			

		} // end refreshInfoset

		/**
			Required.  Returns the cache status of a node data set.
			@param infosetName The name of the Infoset in which to check the cache status		
		*/
		ciModel.getCacheStatus = function( infosetName, cookie )
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
		ciModel.terminate = function()
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
if(typeof(CustomInfosetExtensionHandler_unitTest) == "undefined") {
	new CustomInfosetExtensionHandler().run();
}
