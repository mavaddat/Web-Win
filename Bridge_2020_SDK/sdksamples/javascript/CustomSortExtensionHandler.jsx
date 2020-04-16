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
@fileoverview Demonstrates how to implement a custom sorting and filters with a node-handling extension.
@class Demonstrates how to implement a custom sorting and filters with a node-handling extension.

<h4>Usage</h4>
<ol>
<li> Make sure the icon files required by this sample are in the ./resources folder (BEHFileIconxx.png)
<li> Run the snippet in the ExtendScript Toolkit (see Readme.txt) with Bridge C6 as the target;note, you can do this only once, 
then you must restart Bridge to run this sample again.
<li> In Bridge, select the new icon added to the Favorites panel
<li>  View > Sort > 'By SDK: Custom Number' to sort the thumbnails according
	to a number value stored in a custom Infoset for the thumbnail.
<li>  View > Sort > 'By SDK: Custom String' to sort the thumbnails according
	to a string stored in a custom Infoset for the thumbnail.
<li>  View > Sort > 'By SDK: Custom XMP' to sort the thumbnails according
	to some custom metadata stored in the thumbails metadata property.
<li>Drag and drop thumbnails within the content pane to sort them manually.
</ol>

<h4>Description</h4>

<p>Shows how to implement an ExtensionHandler and ExtensionModel with customized sorting of nodes in a
content hierarchy.  This sample uses SortCriterion, FilterDescription and XMPMeta objects  from the Bridge scripting DOM
to implement the custom sorts.  An additional property is also added to the ExtensionModel
that is used to set and get manually sort settings.

<p>To enable customized sorting, a method ExensionModel.getSortCriteria() has been defined.  The method
adds several new sorting options to Bridge for handled nodes by adding SortCriterion objects the to the
default list ( app.defaultSortCriteria ).  This extension has added three additional sort criterion.  These 
demonstrate the two variations of SortCriterion objects that can be used, SortCriterion that relies on 
Infoset data and SortCriterion that relies on XMP data.

<p>For the handled nodes to support being sorted by XMP data, Bridge must be made
aware of the nodes capabilities.  This is achieved by setting some of the capabilites of the node in
the core infosets.  Setting the 'canGetXMP' and 'canSetXMP' properties of the itemContent
infoset to 'true' will cause Bridge to look for the appropriate methods on the handler.

<p>To set metadata on a node then its handler must implement the long running operaton 
ExtensionHandler.setXMP().  In this sample, the methods create a ProgressOperator, which
carries out the operation of adding or updating the XMP data for the selected node.  The 
ProgressOperator can display a modal progress bar to give feedback of the ongoing operation.  
To ensure the progress bar is visible, the operator should be passed to app.enqueueOperation().

<p>This sample also supports manual sorting of nodes.  A manual sort does not have to rely on any 
particular data set or metadata; it can simply be nodes sorted by the user and placed in a configuration 
within the content pane.  Nodes can be dragged and dropped to arrange them in the desired manner.
To keep the sort persistent then three additional methods must be defined on the model to support 
manual sorting:

	<ul>
	<li>ExtensionModel.supportsUserSortOrder()
	<li>ExtensionModel.setUserSortOrder()
	<li>ExtensionModel.getUserSortOrder()
	</ul>

<h3>ExtensionModel.supportsUserSortOrder</h3>

<p>This method will be called on a handled container node to determine wether nodes can be sorted 
manually.

<h3>ExtensionModel.setUserSortOrder</h3>

<p>If the manual sorting is supported, then this method is used to store the sort details.  A XML string is
passed to this method which contains the sort details.  How these details are stored is implementation-dependent.  
This sample uses a custom property on the model, ExtensionModel.sortXML, but any number
of ways could be implemented, such as using the ExtensionModel.privateData property or even storing 
the details in a file on disk.

<h3>ExtensionModel.getUserSortOrder</h3>

<p>This method is called whenever Bridge needs to display the handled nodes in a manual sort.  An XML 
string is returned containing the details of sort.  The XML string is in the following format:

<pre>&lt;dirinfo&gt;
   &lt;files&gt;
  &lt;item key='XXX' /&gt;
  &lt;/files&gt;
  &lt;/dirinfo&gt;</pre>

<p>The item element has an attribute named 'key'.  This attribute holds a string which 
is the name of the thumbnail and the date of creation.  The date will take the format:

<ul>
<li>YYYYMMDDHHMMSS
</ul>

<p>For example, if we have a thumbnail named myFile which was created on 
Monday, September 25th at 10:28 and 34 seconds the date string would be 
20060925102834.  This is concatenated with the file name to give the attribute value of:

<ul>
<li>&lt;item hkey = &quot;myFile20060925102834&quot; /&gt;
</ul>

<p>The date is retrieved from the immediate infoset  - core.immediate.creationDate - and
the order of the item elements denotes the display order of the thumbnails.  For example, the thumbnail
denoted as the first 'item' element is displayed first in the browser pane, the thumnail denoted as 
second 'item' element is displayed second in the browser pane and etc, etc. If the creation date 
will not be supported for the handled nodes (core.immediate.creationDate) then a string of 0 (zero) 
is used to create the key.  For example:

<ul>
<li>&lt;item hkey = &quot;myFile00000000000000&quot; /&gt;
</ul>

<p>The XML string is always in this format, even if the sort has been reversed.  You do not need to 
consider the reverse order of the sort when building the XML string, if the sort is reversed then 
Bridge can determine this.

<h4>Filtering</h4>

<p>To add additional filters for custom nodes, the model must return an array of FilterDescription 
objects when the ExtensionModel.getFilterCriteria() is called.  The array can add to the default list or 
create an entirely new list.  This sample adds a custom filter to the default list, allowing the handled
nodes to be filtered on a string value stored in a custom Infoset.

<p>See the Bridge JavaScript Guide for more details of node-handling mechanisms
you can implement.<br />

  @see SDKSystem
  @see SDKNode
  @see BasicExtensionHandler
  @see CustomInfosetExtensionHandler
  @see CustomSearchExtensionHandler
	
@constructor  Constructor.
*/
function CustomSortExtensionHandler() {

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
 
 Registers the ExtensionHandler, associating it with the node-identifying prefix.
 	@return True if the sample ran as expected, false otherwise
 	@type Boolean
*/
CustomSortExtensionHandler.prototype.run = function()
{
	if(!this.canRun())
	{
		return false;
	}

	$.writeln("About to run CustomSortExtensionHandler");

	// Make sure the XMP object is loaded and available so we can access a nodes metadata
	if( XmpScriptLib == undefined ) {
		if( Folder.fs == "Windows" ) {
			var pathToLib = Folder.startup.fsName + "/AdobeXMPScript.dll";
		} else {
			var pathToLib = Folder.startup.fsName + "/AdobeXMPScript.framework";
		}
		var libfile = new File( pathToLib );
		var XmpScriptLib = new ExternalObject("lib:" + pathToLib );
	}
	
	// Create some nodes of the script-defined type 
	var root = new SDKNode("CustomSortRoot", true);

	// Sub node - /BehRoot/BehFolder1
	root.addNode(new SDKNode("CSFolder1", true));
	
	// add a leaf node to the root
	var lf = new SDKNode("RootLeaf", false);
	root.addNode(lf);

	var n = new SDKNode("leaf1", false);
	var d = root.findChildNode("CSFolder1");
	d.addNode(n);
	
	// Add a few extra nodes so we can see the sorting easier
	for(var i = 0;i < 20;i++)
	{
		var nd = new SDKNode("leaf" + i, false);
		nd.customNumber = (99-i);
		if(i % 2 == 0)
		{
			nd.customString = "Z_" + i;
			nd.customNumber = (99+i);
		}
		root.addNode(nd);
	}

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
	var sys = new SDKSystem("bridge:csortNode:");
	sys.addRoot(root);

	// Create the node extension handler object
	var sortHandler = new ExtensionHandler("sortHandler");

	// Register the node handler and prefix	with the application
	app.registerExtension(sortHandler);
	app.registerPrefix( "bridge:csortNode:", sortHandler);

	/**
		Required. Returns a canonical URI for the path.  If the path does not contain the 
		registered prefix, the this method must append it to the path and return it.  For example: 
		bridge:beNode:/CSRoot
		@param path The path of the node as a string
	*/
	sortHandler.getBridgeUriForPath = function(path)
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
			sortHandler.thumbsToSearch.push(kids[h]);
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
	sortHandler.getBridgeUriForSearch = function(scope, spec)
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
		sortHandler.thumbsToSearch = new Array();

		// This is the node from which to start
		var scopeNode = sys.getNodeFromPath(scope.uri);

		var children;
		// Check if the search is to include subfolders
		if(searchScopes[0] == "DoSubFolders")
		{
			// Get the node children and find all the thumbnaiils we need to search through
			this.getThumbsToSearch(scopeNode.getChildren());

			children = sortHandler.thumbsToSearch;
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
			alert("SDK: CustomSortExtensionHandler:\nSample does not show this type of search!");
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

	/**
		Creates an operator that performs the long running operation.  In this case, updates are
		made to the this nodes XMP data.
		
		@param targets
		@param xmpPackets
		@param timeoutInMs Optional. The number of microseconds after wich to abort the operation
		@param showUi Optional.  Wether to show the UI or not
		@param message Optional. A string to display via the progress UI		
	*/
	sortHandler.setXMP = function(targets, xmpPackets, timeoutInMs, showUi, message)
	{
		var thumbs = targets;
		var xmpData = xmpPackets;
			
		var op = new ProgressOperator("progress", thumbs);
	
		op.start = function()
		{
			op.procStat = "notStarted";
			
			op.opStat = "incomplete";
			app.operationChanged(this);
			
			op.procStat = "inProgress";

			this.processedNodeCount = 0;

			app.operationChanged(this);
			
			op.percComp = 1;
			
			for(var i = 0;i < thumbs.length;i++)
			{

				// Only added so we can see the ProgressOperator UI in action
				for(var j = 0;j < 10;j++)
				{
					$.sleep(50);
				}
				op.percComp += (100 / thumbs.length);
				app.operationChanged( this );
				
				var t = thumbs[i];
				t.core.metadata.metadata = new Metadata(xmpData[i]);
				t.model.privateData.node.setMetadata(new Metadata(xmpData[i]));
				
				this.processedNodeCount++;
			}

			op.percComp = 100;
			op.opStat = "succeeded";
			op.procStat = "completed";
	
			app.operationChanged( this );
			return;
		}

		op.stop = function() 
		{ 
			return;
		}
	
		op.getConflictInfo = function() 
		{ 
			return "unknown";
		}
	
		op.getOperationStatus = function()
		{
			return op.opStat;
		}
	
		op.getPercentageComplete = function()
		{ 
			return op.percComp;
		}
	
		op.getProcessedNodeCount = function() 
		{ 
			return this.processedNodeCount;
		}
	
		op.getProcessingStatus = function() 
		{ 
			return op.procStat;
		}
	
		op.getProgressMessage = function() 
		{ 
			return "Setting XMP on selected files";
		}
	
		op.getTotalBytesTransferred = function() 
		{ 
			return 0;
		}
	
		op.getTotalNodeCount = function() 
		{ 
			return thumbs.length;
		}
	
		op.getType = function()
		{ 
			return "progress";
		}
	
		op.getUIPolicy = function() 
		{ 
				return this.showUi;
		}
	
		op.resume = function() 
		{ 
			return false;
		}
	
		op.resolveConflict = function() { }

		app.enqueueOperation(op);
		//return op;

	}

	var wrapperObject = this;
	/**
		Required. Creates and returns an ExtensionModel instance.  Called each time a handled node
		is displayed.  The model must also implement any methods that handle any required 
		functionality, such as renaming a node.
		@return An ExtensionModel for this node
		@type ExtensionModel
	*/
	sortHandler.makeModel = function(path)
	{
			// Add a a property to store the manual sort
		ExtensionModel.prototype.sortXML = "";
		sortModel = new ExtensionModel(path);
		sortModel.path = path;
		this.path = path;
		wrapperObject.initModel(sortModel, sys);
		
		return sortModel;

	} // end makeModel

	// Create the InfosetMemberDescription objects
	var csDescriptions = new Array();
	csDescriptions[0] = new InfosetMemberDescription( "CustomString", "String" );
	csDescriptions[1] = new InfosetMemberDescription( "CustomNumber", "Integer" );
	csDescriptions[2] = new InfosetMemberDescription( "CustomDate", "String" );
	csDescriptions[3] = new InfosetMemberDescription( "CustomArray", "Array of String" );
	csDescriptions[4] = new InfosetMemberDescription( "CustomBool", "Boolean" );

	// Create the infoset
	var customInfoset = new Infoset("customInfoset", csDescriptions);

	// Register the infoset
	app.registerInfoset(sortHandler, customInfoset);
	
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

					if(thumb.sortHandler)
					{
						stringText.text = thumb.sortHandler.customInfoset.CustomString;
						numbersText.text = thumb.sortHandler.customInfoset.CustomNumber;
						dateText.text = thumb.sortHandler.customInfoset.CustomDate;
						arrStringText.text = thumb.sortHandler.customInfoset.CustomArray.toString();
						boolList.selection = (thumb.sortHandler.customInfoset.CustomBool) ? 0 : 1;
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
	var customSearchDataPalette = new TabbedPalette(app.document, "SDK: Custom Sort Infoset Data", "SDKCus2tomInfoPaletteSort", "script");
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
	var t = new Thumbnail("bridge:csortNode:/CustomSortRoot");
	app.favorites.insert(t);
	t.refresh();

	$.writeln("CustomSortExtensionHandler initialized successfully");
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
CustomSortExtensionHandler.prototype.canRun = function() {
	if(BridgeTalk.appName == "bridge") {
	
		for(index in app.extensions)
		{
			if(app.extensions[index].name == "sortHandler")
			{
				$.writeln("ERROR: Cannont run twice! You must restart Bridge");
				return false;
			}
		}
		return true;
	}
	$.writeln("ERROR:: Cannot run CustomSortExtensionHandler");
	$.writeln(this.requiredContext);
	return false;
}

/**
	Initialize the model and define the methods that this model supports
	@param sortModel The model for the handled nodes
	@param sys The manager object for the handled nodes
*/
CustomSortExtensionHandler.prototype.initModel = function(sortModel, sys)
{		
		/**
			Implements the customization of the Find dialog for the custom search in handled nodes.
			Creates and returns a SearchDefinition object used for the customization.
			
			@return A customized SearchDefinition
			@type SearchDefinition
		*/
		sortModel.getSearchDefinition = function()
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

			var searchDef = new SearchDefinition(critList, 10, ranksArray, scopesArray);
			return searchDef;
		}
			
			// Renames a node
		sortModel.setName = function(name)
		{

			// Get the parent of the node
			var parent = this.privateData.node.getParent();
			var update = new Thumbnail(sys.getPrefix() + parent.getPath());

			// Set the cache status to bad as we want a refresh to occur			
			update.core.children.cacheData.status = "bad";

			// Change the name of the node
			this.privateData.node.setName(name);

			// If the name has been changed whilst the node is viewed in a search results container
			if(app.document.thumbnail.name == "SearchNode")
			{
				app.document.thumbnail.core.children.cacheData.status = "bad";
			}

			var newURI = sys.getPrefix() + this.privateData.node.getPath();
			return newURI;
		} // end setName
	
		// Creates a new container of the script defined type
		// Must return an operator as this is a long running operation.
		// Creates a new container of the script defined type
		// Must return an operator as this is a long running operation.
		sortModel.createNewContainer = function(name)
		{
			var newNode = new SDKNode(name, true)
			this.privateData.node.addNode(newNode);

			// Set the cache status to bad as we want a refresh to occur			
			this.privateData.cacheElement.children.cacheData.status = "bad";
			//this.refreshInfoset("all"); 

			return sys.getPrefix() + newNode.getPath();
		} // end createNewContainer
	
		/**
			Checks whether this node requires authentication.
			@return True if this node requires authentication, false otherwise
			@type Boolean
		*/
		sortModel.needAuthentication = function()
		{
			return false;
		}

		/**
			Required.  Carries out any necessary authentication.
		*/
		sortModel.authenticate = function()
		{
			return;
		}
	
		/**
			Required,  Checks if this node is a valid node.
			@return True if this node is valid, false otherwise
			@type Boolean
		*/			
		sortModel.exists = function()
		{
			return true;
		}

		/**
			Required.  Called after the model is created, sets up any necessary data structures
			that may be needed.
		*/
		sortModel.initialize = function()
		{
			this.privateData.node = sys.getNodeFromPath(this.path);
		}
		
		/**
			Required.  Stores a back pointer to the cache that contains this model.
			@param cacheEelement The CacheElement that contains this model.
		*/	
		sortModel.registerInterest = function(cacheElement)
		{
			this.privateData.cacheElement = cacheElement;
		}
		
		/**
			Required. Removes the association between the CacheElement and
			this model instance.
		*/	
		sortModel.unregisterInterest = function()
		{
			this.privateData.cacheElement = undefined;
		}
	
		/**
			Adds a custom filter criteria to Bridge.  Single FilterDescription is added to the default list of FilterDescription objects.
			This allows hanlded nodes to be filtered based on a string value stored in a custom Infoet.
		*/	
		sortModel.getFilterCriteria = function()
		{
			var defFilters = app.defaultFilterCriteria;
			var filter = new FilterDescription("customStringfilter", "SDK: Custom Filter", "string", "sortHandler.customInfoset.CustomString", false);
			defFilters.push(filter);
			return defFilters;
		}

		/**
			Adds custom SortCriterion to Bridge for handled nodes.
			Three new sort options are added to Bridge's default sort criterion.  The first two use the custom infoset to sort Thumbnails. 
			The third uses a custom namespace and custom XMP data.
			@return An array of SortCriterion objects
		*/
		sortModel.getSortCriteria = function()
		{
			var dsc = app.defaultSortCriteria;
			var sc1 = new SortCriterion("sortSDKNumber", "number", "sortHandler.customInfoset.CustomNumber", "SDK: Custom Number");
			dsc.push(sc1);

			var sc2 = new SortCriterion("sortSDKString", "string", "sortHandler.customInfoset.CustomString", "SDK: Custom String");
			dsc.push(sc2);
						
			var sc3 = new SortCriterion("sortSDKXMP", "number", "http://ns.adobe.bridge.sdk/a/", "ID", "SDK: Custom XMP");
			dsc.push(sc3);

			return dsc;
		}
	
		/**
			Returns the parent of this node
		*/
		sortModel.getParent = function()
		{
			var parent = this.privateData.node.getParent();
			if(parent != undefined)
			{
				return (sys.getPrefix() + parent.getPath());
			}
		}
	
		sortModel.supportsUserSortOrder = function()
		{
			return true;
		}

		/**
			Stores the custom sort for this container
		*/
		sortModel.setUserSortOrder = function(inXML)
		{
			this.sortXML = inXML;
		}
	
		/**
			Return an XML string that gives the custom sort of the children
			of this container.
		*/
		sortModel.getUserSortOrder = function()
		{
			if(this.sortXML == "")
			{
				var xml = "<?xml version='1.0' encoding='UTF-8' standalone='yes' ?><dirinfo><files>";
				var children = this.privateData.node.getChildren();
				for(var i = 0;i < children.length;i++)
				{
					// Use 00000000000000 if creattiondate is not supported
					xml += "<item key='" + children[i].getName() + "00000000000000" + "' />";
				}
				xml += "</files></dirinfo>";
				this.sortXML = xml;
			}
			
			return this.sortXML;
		}
	
		sortModel.addToDrag = function(pointerToOsDragObject)
		{
			return true;
		}
	
		sortModel.wouldAcceptDrop = function(type, sources, osDragRef)
		{
			return false;
		}
	
		/**
			Required.  Updates the core node data and any custom node data
			for this node.  Always set the CacheData.status after updating the node data.
			@param infosetName The name of the Infoset that is being updated.
		*/
		sortModel.refreshInfoset = function(infosetName)
		{
			var infoset = this.privateData.cacheElement[infosetName];
			var currentNode = this.privateData.node;
			try
			{
				if(infosetName == "immediate" || infosetName == "all")
				{
					if(this.privateData.node.getName().substr(0,10) == "SearchNode")
					{
						infoset.name = "SearchNode";
					}
					else
					{
						infoset.displayPath = this.path;
						if(!currentNode.isContainer())
						{
							infoset.fileUrl = currentNode.getFileUrl();
						}							
						infoset.isApplication = false;
						infoset.isDeleted = false;
						infosetisHidden = false;
						infoset.isLink = false;
						infoset.isPackage = false;
						infoset.isSidecarFile = false;
						infoset.name = currentNode.getName();
						infoset.size = [1024, 0];
						infoset.sortIndex = currentNode.getName();
				
					}
				
					infoset.isContainer = currentNode.isContainer();
					infoset.cacheData.status = "good";
				}

				// The capabilities of a handled node
				if(infosetName == "item" || infosetName == "all")
				{
				
					infoset.canBeDragSource = true;
					infoset.canBeDropTarget  = true; 
					infoset.canCreateNewContainer = true;
					infoset.canCreateNewLink  = false;
					infoset.canDelete = true; // TODO - enabled for drag test
					infoset.canDuplicate = true; // TODO - enabled for drag test
					infoset.canEject = false;
					infoset.canGetFileUrl = true;
					infoset.canSetName = true;

					//descriptors 
					infoset.isExternalEditInProgress  = false;
					infoset.isLinkToContainer = false;
					infoset.isLockedByUser = false;
					infoset.isNeverWritable = false;
					infoset.isPhysicalFile = false;
					infoset.noWritePermission = false;
		
					if(this.privateData.node.getName().substr(0,10) != "SearchNode")
					{
						if(this.privateData.node.isContainer())
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
					infoset.bitmap = this.privateData.node.getIcon();
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
					infoset.hasRawSettings = false;
					infoset.hasCrop = false;
					infoset.height = 0;
					infoset.rating = 0;
					infoset.rotation = 0;
					infoset.stockPhotoStatus = 0;
					infoset.xResolution = 0;
					infoset.yResolution = 0;
					infoset.width = 0;

					infoset.cacheData.status = "good";
				}

				// The capabilities of a handled node
				if(infosetName == "itemContent" || infosetName == "all")
				{
					// capabilities
					infoset.canDoCameraRaw = false; 
					infoset.canGetFullSize = false; 
					infoset.canGetPreview = false;
					infoset.canGetQuickPreview = false;
					infoset.canGetThumbnail = false;
					infoset.canGetXmp = true;
					infoset.canLabelOrRate = true;
					infoset.canRotate = false; 
					infoset.canSetXmp = true;

					// descriptors
					infoset.dynamicMediaType = undefined;
					infoset.fileFormat = (currentNode.isContainer()) ? "" : "SDKNode";  
					infoset.hasSubContainers = (currentNode.isContainer()) ? true : false;  
					infoset.mimeType = "application/x-bridgesdknode";
					infoset.pageCount = 1 
					infoset.tooltip = (currentNode.isContainer()) ? "SDK Node Container" : "SDK Leafe Node";

					infoset.cacheData.status = "good";
				}
			
				if(infosetName == "cameraRaw" || infosetName == "all")
				{
					infoset.rawSupportType = 0;
					infoset.cacheData.status = "good";
				}
				
				if(infosetName == "preview" || infosetName == "all")
				{
					infoset.preview = currentNode.getPreview();
					infoset.cacheData.status = "good";
				}
			
				if(infosetName == "metadata" || infosetName == "all")
				{
					infoset.metadata = currentNode.getMetadata();
					infoset.cacheData.status = "good";
				}
			
				if(infosetName == "customInfoset" || "all")
				{
					this.privateData.cacheElement.customInfoset.CustomString = currentNode.getCustomString();	
					this.privateData.cacheElement.customInfoset.CustomNumber = currentNode.getCustomNumber();
					this.privateData.cacheElement.customInfoset.CustomDate = currentNode.getCustomDate();
					this.privateData.cacheElement.customInfoset.CustomArray = currentNode.getCustomArray();
					this.privateData.cacheElement.customInfoset.CustomBool = currentNode.getCustomBool();
	
					this.privateData.cacheElement.customInfoset.cacheData.status = "good";
				}
			}
			catch(error) { $.writeln("ERROR: " + error); }

		} // end refreshInfoset

		/**
			Required.  Returns the cache status of a node data set.
			@param infosetName The name of the Infoset in which to check the cache status		
		*/
		sortModel.getCacheStatus = function( infosetName)
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
			Return 'undefined' from this method. Any private data structures will be
			cleaned automatically
		*/
		sortModel.terminate = function()
		{
			return undefined;
		}
	
}

// Include the support classes
#include SDKSystem.jsx
#include SDKNode.jsx

/**
  "main program": construct an anonymous instance and run it
*/
if(typeof(CustomSortExtensionHandler_unitTest) == "undefined") {
	new CustomSortExtensionHandler().run();
}
