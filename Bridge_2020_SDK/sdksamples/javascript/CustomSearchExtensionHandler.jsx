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
  @fileoverview Demonstrates how to implement a custom node search with a node-handling extension.
  @class Demonstrates how to implement a custom node search with a node-handling extension.
 
  <h4>Usage</h4>
 <ol>
  <li> Make sure the icon files required by this sample are in the ./resources folder (BEHFileIconxx.png)
  <li> Run the snippet in the ExtendScript Toolkit (see Readme.txt) with Bridge CC 2018 as the target; note you can do this only once, then you must restart Bridge for this sample.
  <li> In Adobe Bridge, select the new icon added to the Favorites panel, which is named CSRoot.
  <li> Navigate through the node hierarchy in the Content pane
  <li> Choose Edit > Find to open the Find dialog
  <li> Select search criteria and click 'Find'
  <li>If there are nodes in the hierarchy matching your search specification, you should see them returned in the Content pane within a  "SearchNode"
  <li>You can use the Back button in the Bridge browser window to return you to the previous context of your search.
 </ol>
 
  <h4>Description</h4>
 
  <p>Shows how to implement an ExtensionHandler and ExtensionModel with customized search
 over a node hierarchy.  This sample uses SearchDefinition, SearchCriteria, SearchSpecification and 
  SearchCondition objects from the Bridge scripting DOM to implement the custom search features.

  <p>The getSearchDefinition() method in the script-defined ExtensionModel returns a
  SearchDefinition object, which Bridge uses to display a customized Find dialog.   The Find dialog
  has 3 sections; the Source section, the Criteria section and the Results section.
  
 <p>The Source section shows the current thumbnail, at which to start the search.
  
  <p>In the Criteria section, each of the 3 elements is customized using SearchCriteria and Operand objects.
  Custom search field values include 'Custom String'  and 'Custom Boolean'. 
  	<ul>
  	<li> When the search field 'Custom String' is selected, additional custom operators
  		are shown in the center field.
  	<li> When the search field 'Custom Boolean' is selected, the operand field 
  		on the right dispalys a drop-down list with two choices.
	</ul>

 <p>The Results section displays two custom check boxes, "SDKSearch: Search subfolders"
  and "SDKSearch: Search hidden files". If you select "SDKSearch: Search subfolders"
  the search is performed recursively through subfolders. (The other checkbox is not considered.)

  <p>This search only supports "OR" searches; you can expand it to include "AND" searches.

  <p>The script-defined node extensions are defined by two supporting classes, SDKSystem and
  SDKNode; see the documentation on these classes for more detail on their capabilities.

<p>The  run() function of this sample creates several nodes of the type SDKNode, and one manager (SDKSystem) object. 
   It stores the node-identifying prefix and root node in the SDKSystem (manager) object. 
    
   <p>The run() function also creates the ExtensionHandler object, whose definition includes
   the 'makeModel()' method, which Bridge uses to create the ExtensionModel object 
   at node-display time. The run() function also registers the ExtensionHandler, 
   associating it with the node-identifying prefix.
    
   <p>See the Adobe Bridge CC 2018 JavaScript Guide for more details of node-handling mechanisms
   you can implement.<br />

  @see SDKSystem
  @see SDKNode
  @see BasicExtensionHandler
  @see CustomInfosetExtensionHandler
  @see CustomSortExtensionHandler

  @constructor  Constructor.
*/
function CustomSearchExtensionHandler() {

	$.level = 1; // Debugging level
	/**
	  The context in which this sample can run.
	  @type String
	*/
	this.requiredContext = "\tNeed to be running in context of Bridge\n";		
}

/**
 Functional part of this sample, creates several nodes of the type SDKNode, and one manager (SDKSystem) object,
 which stores the node-identifying prefix and root node. 
     
 <p>Also creates the ExtensionHandler object, whose definition includes
 the 'makeModel()' method, which Bridge uses to create the ExtensionModel object 
 at node-display time. 
 
 <p>The handler defines the getBridgeUriForSearch() method, and the model defines 
 the getSearchDefinition() method, which together implement the custom search.
 
 Registers the ExtensionHandler, associating it with the node-identifying prefix.
 	@return True if the sample ran as expected, false otherwise
 	@type Boolean
*/
CustomSearchExtensionHandler.prototype.run = function()
{
	if(!this.canRun())
	{
		return false;
	}

	$.writeln("About to run CustomSearchExtensionHandler");
	
	// Create some nodes of the script-defined type 
	var root = new SDKNode("CSRoot", true);

	// Sub node - /BehRoot/BehFolder1
	root.addNode(new SDKNode("CSFolder1", true));
	
	// add a leaf node to the root
	var lf = new SDKNode("RootLeaf", false);
	root.addNode(lf);

	var n = new SDKNode("leaf1", false);
	var d = root.findChildNode("CSFolder1");
	d.addNode(n);

	// Sub node - /BehRoot/BehFolder2
	root.addNode(new SDKNode("CSFolder2", true));
	n = new SDKNode("leaf2", false);
	d = root.findChildNode("CSFolder2");
	d.addNode(n);
	n = new SDKNode("leaf3", false);
	d = root.findChildNode("CSFolder2");
	d.addNode(n);

	// /BehRoot/BehFolder1/BehSubFolder1
	root.getChildNode("CSFolder2").addNode(new SDKNode("CSSubFolder1", true));

	// BehRoot/BehFolder1/BehSubFolder1/leaf4
	n = new SDKNode("leaf4", false);
	d = root.findChildNode("CSSubFolder1");
	d.addNode(n);

	// Create the manager object with the node-identifying prefix, 
	// and add the root node
	var sys = new SDKSystem("bridge:csNode:");
	sys.addRoot(root);

	// Create the node extension handler object
	var csHandler = new ExtensionHandler("csHandler");

	// Register the node handler and prefix	with the application
	app.registerExtension(csHandler);
	app.registerPrefix( "bridge:csNode:", csHandler);

	/**
		Required. Returns a canonical URI for the path.  If the path does not contain the 
		registered prefix, the this method must append it to the path and return it.  For example: 
		bridge:beNode:/CSRoot
		@param path The path of the node as a string
	*/
	csHandler.getBridgeUriForPath = function(path)
	{
		return path;
	}

	/**
		Extends the handler with a helper function so all the thumbnails can 
		be collected for the search
		@param kids An array of SDK nodes.
	*/
	ExtensionHandler.prototype.getThumbsToSearch = function(kids)
	{	
		for(var h = 0;h < kids.length;h++)
		{
			if(kids[h].isContainer())
			{
				this.getThumbsToSearch(kids[h].getChildren()); // node test
			}
			
			csHandler.thumbsToSearch.push(kids[h]);
		}
	}

	/**
		Search implementation: Performs a search and returns the search result,	
		a container Thumbnail object that contains the matching nodes.
		The passed 'scope' is the Thumbnail object that the search starts from, and 
		'spec' is the SearchSpecification object containing all search details as 
		set by the user in the Find dialog.
		
		@param scope  The Thumbnail to start searching from
		@param spec The SearchSpecification details
	*/
	csHandler.getBridgeUriForSearch = function(scope, spec)
	{
		// Create a search results node - give it a unique name for each search container created.
		var randomnumber=Math.floor(Math.random()*101);
		var d = new Date();
		var postfix = d.getSeconds() + randomnumber;

		var sNode = new SDKNode("SearchNode" + postfix, true)
		sNode.children = new Array();
		sys.addSearchNode(sNode); // This overwrites any previous search node objects in the system

		var sThumb = new Thumbnail("bridge:csNode:/SearchNode" + postfix);
		sThumb.core.children.cacheData.status = "bad";

		// Get the scope specifiers (whether to search subfolders)
		var searchScopes = spec.scopeSpecifiers;

		//  Create an array to hold the thumbnails to be checked against search criteria 
		csHandler.thumbsToSearch = new Array();

		// This is the node from which to start
		var scopeNode = sys.getNodeFromPath(scope.uri);

		var children;
		// Check if the search is to include subfolders
		if(searchScopes[0] == "DoSubFolders")
		{
			// Get the node children and find all the thumbnaiils we need to search through
			this.getThumbsToSearch(scopeNode.getChildren());

			children = csHandler.thumbsToSearch;
		}
		else
		{
			children = scopeNode.getChildren();
		}
		
		// Get the conditions of the search, as specified by the user
		var conditions = spec.conditionList;

		if(spec.conjunction == "or")	// This search only supports an "OR" conjunction
		{
			// Check each thumbnail/node and see if the criteria match
			for(var i = 0;i < children.length;i++)
			{
				var currentNode = children[i];
							
				for(j = 0;j < conditions.length;j++)
				{
					var currentCon = conditions[j]
					var searchField = currentCon.searchField;
					var operand = currentCon.operand;

					// Get the values for the field/data we are searching against
					switch(searchField)
					{
						var thumbFieldValue;
						case "CustomString":
							thumbFieldValue = currentNode.getCustomString();
							break;
						case "CustomNumber":
							thumbFieldValue = currentNode.getCustomNumber();
							break;
						case "CustomBool":
							thumbFieldValue = currentNode.getCustomBool();
							break;
						case "name":
							thumbFieldValue = currentNode.getName();
							break;
					}

					// Check if anything matches the criteria
					// This is an OR search, so when a node hits any match,
					// add it to the children of the search container
					switch(currentCon.operatorType)
					{
						case "equals":
							if(thumbFieldValue == operand || thumbFieldValue.toString() == operand) // catches boolean values and strings
							{
								addNodeToSearchResult(currentNode);
							}
							break;
						case "lessThanOrEqual":
							if(thumbFieldValue <= operand)
							{
								addNodeToSearchResult(currentNode);
							}
							break;
						case "greaterThanOrEqual":
							if(thumbFieldValue >= operand)
							{
								addNodeToSearchResult(currentNode);
							}
							break;
						case "endsWith":
							var s = thumbFieldValue.substr((thumbFieldValue.length - operand.length), operand.length );
							if(s == operand)
							{
								addNodeToSearchResult(currentNode);
							}
							break;
						default:
					} // end switch				
				} // end for condtions
			} // end for children
		}
		else if(spec.conjunction == "and")  // This search only supports "OR" searches; you can expand it to include "AND" searches.
		{
			alert("SDK: CustomSearchExtensionHandler:\nSample does not show this type of search!");
		}

		// Helper function to check for the existence of a node before adding it to the search node
		function addNodeToSearchResult(node)
		{
			var matches = sNode.getChildren();
			var addNode = true;
			for(var i = 0;i < matches.length;i++)
			{
				if(matches[i].getPath() == node.getPath())
				{
					addNode = false;
					break;
				}
			}

			if(addNode)
			{
				sNode.addNode(node);
			}
		}

		// Return the URI to the container (a Thumbnail object) holding the search results.
		return sThumb.uri;
	}

	var wrapperObject = this;
	/**
		Required. Creates and returns an ExtensionModel instance.  Called each time a handled node
		is displayed.  The model must also implement any methods that handle any required 
		functionality, such as renaming a node.
		@return An ExtensionModel for this node
		@type ExtensionModel
	*/
	csHandler.makeModel = function(path)
	{

		csModel = new ExtensionModel(path);
		csModel.path = path;
		this.path = path;
		wrapperObject.initModel(csModel, sys);
			
		return csModel;

	} // end makeModel

	// Create the InfosetMemberDescription objects
	var csDescriptions = new Array();
	csDescriptions[0] = new InfosetMemberDescription( "CustomString", "String" );
	csDescriptions[1] = new InfosetMemberDescription( "CustomNumber", "Number" );
	csDescriptions[2] = new InfosetMemberDescription( "CustomDate", "String" );
	csDescriptions[3] = new InfosetMemberDescription( "CustomArray", "Array of String" );
	csDescriptions[4] = new InfosetMemberDescription( "CustomBool", "Boolean" );

	// Create the infoset
	var customInfoset = new Infoset("customInfoset", csDescriptions);

	// Register the infoset
	app.registerInfoset(csHandler, customInfoset);
	
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

					if(thumb.csHandler)
					{
						stringText.text = thumb.csHandler.customInfoset.CustomString;
						numbersText.text = thumb.csHandler.customInfoset.CustomNumber;
						dateText.text = thumb.csHandler.customInfoset.CustomDate;
						arrStringText.text = thumb.csHandler.customInfoset.CustomArray.toString();
						boolList.selection = (thumb.csHandler.customInfoset.CustomBool) ? 0 : 1;
						customSearchDataPalette.content.visible = true;
					} 
					else
					{
						customSearchDataPalette.content.visible= false;
					}					
				}
				else
				{
					customSearchDataPalette.content.visible= false;
				}
			}
		}
	}

	// Register the event handler
	app.eventHandlers.push({handler: onEvent});
	
	
	// Create  a palette to display the custom data
	var customSearchDataPalette = new TabbedPalette(app.document, "SDK: Custom Search Infoset Data", "SDKCustomInfoPaletteSearch", "script");
	var win = customSearchDataPalette.content;

	var stringLabel = win.add("statictext", [5, 9, 115, 25], "Custom String");
	var stringText = win.add("edittext", [120, 5, 320, 25], "");
	stringText.enabled = false;
	
	var numbersLabel = win.add("statictext", [5, 39, 115, 55], "Custom Number");
	var numbersText = win.add("edittext", [120, 35, 320, 55], "");
	numbersText.enabled = false;

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
	boolList.enabled = false;
	
	// Hide the palette until a handled node is selected
	customSearchDataPalette.content.visible = false;	
	
	// create a thumbnail and add it to the Favorites panel
	var t = new Thumbnail("bridge:csNode:/CSRoot");
	app.favorites.insert(t);
	t.refresh();

	$.writeln("CustomSearchExtensionHandler initialized successfully");
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
CustomSearchExtensionHandler.prototype.canRun = function() {
	
	if(BridgeTalk.appName == "bridge") {
	
		for(index in app.extensions)
		{
			if(app.extensions[index].name == "csHandler")
			{
				$.writeln("ERROR: Cannont run twice! You must restart Bridge");
				return false;
			}
		}
		return true;
	}
	$.writeln("ERROR:: Cannot run CustomSearchExtensionHandler");
	$.writeln(this.requiredContext);
	return false;
}

/**
	Initialize the model and define the methods that this model supports
	@param behModel The model for the handled nodes
	@param sys The manager object for the handled nodes
*/
CustomSearchExtensionHandler.prototype.initModel = function(csModel, sys)
{
		/**
			Implements the customization of the Find dialog for the custom search in handled nodes.
			Creates and returns a SearchDefinition object used for the customization.
			
			@return A customized SearchDefinition
			@type SearchDefinition
		*/
		csModel.getSearchDefinition = function()
		{

			// Criteria section
			// Add values to the search field (left box) of the Criteria section
			var searchField = "CustomString";
			var opType = "string";
			var searchFieldDisplay = "Custom String";

			var searchCriteria1 = new SearchCriteria(searchField, opType, searchFieldDisplay);

			// Restrict values for the operator (middle box) of the Criteria section
			searchCriteria1.operatorTypesToDisable = ["exists", "equals", "doesNotExist", "doesNotEqual", "less", 
				"lessThanOrEqual", "greaterThanOrEqual", "contains", 
				"doesNotContain", "startsWith", "greater"];
	
			searchField = "CustomNumber";
			opType = "float";
			searchFieldDisplay = "Custom Number";
			var searchCriteria2 = new SearchCriteria(searchField, opType, searchFieldDisplay);
			searchCriteria2.operatorTypesToDisable = ["exists", "doesNotExist", "doesNotEqual", "less", 
				"contains", 	"doesNotContain", "endsWith", 
				"startsWith", "greater"];
			
			searchField = "name";
			opType = "string";
			searchFieldDisplay = "Name";			
			var searchCriteria3 = new SearchCriteria(searchField, opType, searchFieldDisplay);
			searchCriteria3.operatorTypesToDisable = ["exists", "doesNotExist", "doesNotEqual", "less", 
				"lessThanOrEqual", "greaterThanOrEqual", "contains", 
				"doesNotContain", "endsWith", "startsWith", "greater"];

			searchField = "CustomBool";
			opType = "boolean";
			searchFieldDisplay = "Custom Boolean";
			
			// Create some Operand objects
			// these populate the comparison-value choices in the far right box of the Criteria section
			var op1 = new Operand("true", "A true value");
			var op2 = new Operand("false", "A false value");
			var myOperators = [op1, op2];

			var searchCriteria4 = new SearchCriteria(searchField, opType, searchFieldDisplay, myOperators);
			searchCriteria4.operatorTypesToDisable = ["exists", "doesNotExist", "doesNotEqual", "less", 
				"lessThanOrEqual", "greaterThanOrEqual", "contains", 
				"doesNotContain", "endsWith", "startsWith", "greater"];

			var critList = [searchCriteria1, searchCriteria2, searchCriteria3, searchCriteria4];

			// Results section
			//var rank1 = new Rank("RankValueName", "RankDisplayName");
			//var rank2 = new Rank("RankValueName", "RankDisplayName");

			var ranksArray = [];  // These are optional, but empty arrays must be passed

			// create some scopeSpecifier objects
			var scope1 = new Scope( "DoSubFolders", "SDKSearch: Search subfolders");
			var scope2  = new Scope("DoHidden", "SDKSearch: Search hidden files");
			// the scopeSpecifiers to an Array
			var scopesArray = [scope1, scope2]; // These are documented as optional, true but empty arrays must be passed

			try
			{
				var searchDef = new SearchDefinition(critList, 10, ranksArray, scopesArray);
			}
			catch(error) { alert(error); }

			return searchDef;
		
		}
	
		/**
			Checks whether this node requires authentication.
			@return True if this node requires authentication, false otherwise
			@type Boolean
		*/
		csModel.needAuthentication = function()
		{
			return false;
		}

		/**
			Required.  Carries out any necessary authentication.
		*/
		csModel.authenticate = function()
		{
			return;
		}
	
		/**
			Required,  Checks if this node is a valid node.
			@return True if this node is valid, false otherwise
			@type Boolean
		*/			
		csModel.exists = function()
		{
			return true;
		}

		/**
			Required.  Called after the model is created, sets up any necessary data structures
			that may be needed.
		*/
		csModel.initialize = function()
		{
			this.privateData.node = sys.getNodeFromPath(this.path);
		}
		
		/**
			Required.  Stores a back pointer to the cache that contains this model.
			@param cacheEelement The CacheElement that contains this model.
		*/	
		csModel.registerInterest = function(cacheElement)
		{
			this.privateData.cacheElement = cacheElement;
		}
		
		/**
			Required. Removes the association between the CacheElement and
			this model instance.
		*/	
		csModel.unregisterInterest = function()
		{
			this.privateData.cacheElement = undefined;
		}
	
		/**
			Returns the parent of this node
		*/
		csModel.getParent = function()
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
		csModel.refreshInfoset = function(infosetName)
		{
			var infoset = this.privateData.cacheElement[infosetName];
			var currentNode = this.privateData.node;
			try
			{
				if(infosetName == "immediate" || infosetName == "all")
				{
					if(currentNode.getName().substr(0,10) == "SearchNode")
					{
						infoset.name = "SearchNode";
					}
					else
					{
						infoset.name = currentNode.getName();
						infoset.isLink = false;
					}				

					infoset.isContainer = currentNode.isContainer();
						 
					infoset.cacheData.status = "good";
				}

				// The capabilities of a handled node
				if(infosetName == "item" || infosetName == "all")
				{
					if(currentNode.getName().substr(0,10) != "SearchNode")
					{
						if(currentNode.isContainer())
						{
							infoset.canSearch = true;
						}
					}
					
					infoset.cacheData.status = "good";
				}
			
				// Add any children of this node to the children infoset
				if(infosetName == "children" || infosetName == "all")
				{
					var arr = currentNode.getChildren();
					for(var j = 0;j < arr.length;j++)
					{
						infoset.addChild(sys.getPrefix() + arr[j].getPath());
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
					infoset.rotation = 90;
					infoset.stockPhotoStatus = 0;
					infoset.xResolution = 0;
					infosetyResolution = 0;
					infoset.width = 300;

					infoset.cacheData.status = "good";
				}

				// The capabilities of a handled node
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
			
				if(infosetName == "customInfoset" || "all")
				{
					this.privateData.cacheElement.customInfoset.CustomString = this.privateData.node.getCustomString();	
					this.privateData.cacheElement.customInfoset.CustomNumber = this.privateData.node.getCustomNumber();
					this.privateData.cacheElement.customInfoset.CustomDate = this.privateData.node.getCustomDate();
					this.privateData.cacheElement.customInfoset.CustomArray = this.privateData.node.getCustomArray();
					this.privateData.cacheElement.customInfoset.CustomBool = this.privateData.node.getCustomBool();
	
					this.privateData.cacheElement.customInfoset.cacheData.status = "good";
				}
			}
			catch(error) { alert(error); }

		} // end refreshInfoset

		/**
			Required.  Returns the cache status of a node data set.
			@param infosetName The name of the Infoset in which to check the cache status		
		*/
		csModel.getCacheStatus = function( infosetName)
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
		csModel.terminate = function()
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
if(typeof(CustomSearchExtensionHandler_unitTest) == "undefined") {
	new CustomSearchExtensionHandler().run();
}
