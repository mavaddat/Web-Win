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
  @fileoverview Supporting class; backing node for extension handling samples.
  @class Supporting class; backing node for extension handling samples.

 <h4>Description</h4>
  
<p>Implements the methods needed to support node handling via the ExtensionModel and ExtensionHandler. 
  This class encapsulates a node of the type handled by the sample node-handling extension.<br />

  @see SDKSystem
  @see BasicExtensionHandler
  @see CustomInfosetExtensionHandler
 
  @param name The name of the node
  @param iscontainer True if this node will be a container node, false otherwise
  @constructor Constructor.
 */
function SDKNode(name, iscontainer)
{

	/**
	  The children of this node, if any, in an array.
	  @type SDKNode
	*/
	this.children = new Array();
	
	/**
	  The children of this node, if any, in an associative array.
	  @type SDKNode
	*/
	this.childrenNames = {};
	
	/**
	  The name of this node.
	  @type String
	*/
	this.name = name;
	
	/**
	  The path of this node.
	  @type String.
	*/
	this.path = "/" + name;
	
	/**
	  The parent of this node. if any.
	  @type SDKNode
	*/
	this.parent = undefined;

	/**
	  Whether this node is a container.
       	  @type Boolean
   	 */
	this.container = iscontainer;

	/**
	  The path for the custom icon.
      	  @type Boolean
   	 */
	this.iconPath = new File($.fileName).parent.fsName + "/resources";
	
	/**
		The XMP for this node
		@type Metadata
	*/
	this.metadata = undefined;

	this.setCustomInfosetData();

}

/**
  Adds a child node to this node.
  @param node SDKNode. The node to add.
  @return True if the node was added successfully, false otherwise
  @type Boolean
*/
SDKNode.prototype.addNode = function(node)
{
	if(!this.getChildNode(node.getName()))
	{
		if(this.name.substr(0,10) != "SearchNode")
		{
			node.parent = this;
		}
		this.childrenNames[node.name] = node;
		this.children.push(node);
		return true;
	}
	return false;
}

/**
  Return the first child of this node.
  @type SDKNode
*/
SDKNode.prototype.getFirstChildNode = function() { return this.children[0]; }

/**
  Searches for a specific child node among the immediate children of this node.
  @param name The name of the node to find.
  @type SDKNode
  @return The child node, or null if not found.
*/
SDKNode.prototype.getChildNode = function(name)
{ 
	SDKNode.counter++;
	return this.childrenNames[name];
}

/**
  Searches for a specific child node in any part of the tree below this node.
  @param name The name of the node to find.
  @type SDKNode
  @return The descendant node, or null if not found.
*/
SDKNode.prototype.findChildNode = function(name)
{
	var found = this.getChildNode(name);
	if(found instanceof SDKNode)
	{
		return found;
	}
	else
	{
		for(index in this.children)
		{
			found = this.children[index].findChildNode(name);
			if(found instanceof SDKNode)
			{
				return found;
			}
		}
	}
	
	return false;
}

/**
  Searches for a specific child node in any part of the tree below this node.
  @param path The name of the node to find, including the prefix
  @type SDKNode
  @return The descendant node, or null if not found.
*/
SDKNode.prototype.findChildNodeFromPath = function(uri)
{
	var pathParts = uri.split("/");
	var currentNode = this;
	
	var searching = true;
	var pos = 1;
	while(searching)
	{
		if(typeof pathParts[pos+2] != "undefined")
		{
			pos++;
			currentNode = currentNode.getChildNode(pathParts[pos]);
		}
		else
		{
			currentNode = currentNode.getChildNode(pathParts[pos+1]);
			searching = false;
		}
	}
		
	if(currentNode instanceof Object && currentNode != false)
	{
		return currentNode;
	}
	else
	{
		return false;
	}
}

/**
  Retrieves all the children of this node
  @type Array
  @return An array of SDKNode objects
*/
SDKNode.prototype.getChildren = function(){ return this.children; }

/**
  Retrieves all the children of this node in an associative array
  @type Array
  @return An array of SDKNode objects
*/
SDKNode.prototype.getChildrenNames = function(){ return this.childrenNames; }

/**
  Retrieves the full path of this node.
  @type String
  @return The full, absolute path string.
*/
SDKNode.prototype.getPath = function()
{
	var path = this.path;
	var parent = this.parent;
	
	while(parent) 
	{
		var fullPath = parent.path + path;
		parent = parent.getParent();
		path = fullPath;
	}
	
	return path;
}

// For debugging only
SDKNode.prototype.listChildren = function()
{
	var kids = this.getChildren();

	for(var i = 0;i < kids.length;i++)
	{
		$.writeln(kids[i].getPath());
		kids[i].listChildren();
	}
}
	
/**
  Reports whether this node has any children
  @type Boolean
  @return True if this node has children.
*/
SDKNode.prototype.hasChildren = function() { return this.children.length > 0; }

/**
  Retrieves the parent of this node;
  @type SDKNode
  @return The parent node of this node.
*/
SDKNode.prototype.getParent = function() { return this.parent; }

/**
	Removes a child node from this  node
	@param node The SDKNode child to remove
*/
SDKNode.prototype.removeNode = function(node)
{
	var name = node.getName();
	delete this.childrenNames[name];
	
	var tmp = new Array();
	for(var i = 0;i < this.children.length;i++)
	{
		if(this.children[i].name != name)
		{
			tmp.push(this.children[i]);			
		}		
	}

	this.children = tmp;
}

SDKNode.prototype.updateNode = function(node, oldName)
{
	delete this.childrenNames[oldName];
	this.childrenNames[node.getName()] = node;	
	
}

SDKNode.prototype.cloneNode = function()
{
	var c = new Object();
	for( var i in this)
	{
		c[i] = this[i]
	}
	
	c.parent = undefined;
	
	return c;
}

// INFOSET SUPPORT //////////////////////////////////////////

/**
  Changes the name of this node
  @param String. The new name of this node.
  @type void
*/
SDKNode.prototype.setName = function(name)
{
	var oldName = this.name;
	//this.parent.removeNode(this);
	this.name = name;
	this.path = "/" + name;
	if(this.parent != undefined)
	{
		this.parent.updateNode(this, oldName);
	}
}

// IMMEDIATE

/**
  Reports whether this node is a container.
  @type Boolean
  @return True if this node is a container.
*/
SDKNode.prototype.isContainer = function() { return this.container; }


/**
  Retrieves the name of this node.
  @type String
  @return Returns the name of this node.
*/
SDKNode.prototype.getName = function() { return this.name; }

/**
	Returns the file url for this node.  For the extension handler samples this is 
	a fixed file.
	@type String
	@return Returns the file url for this node.
*/
SDKNode.prototype.getFileUrl = function()
{	
	return "file:///" + this.iconPath + "/BEHFileIcon512.png";
}

// ICON
/**
  Creates an icon for this node.
  @type BitmapData
  @return Returns the icon for this node
*/
SDKNode.prototype.getIcon = function()
{

	if(this.isContainer())
	{
		return new BitmapData(this.iconPath + "/BEHFolderIcon32.png");
	}
	else
	{
		return new BitmapData(this.iconPath + "/BEHFileIcon32.png");
	}	
}

// THUMBNAIL
/**
  Creates a thumbnail image for this node.
  @type BitmapData
  @return Returns the thumbnail image for this node
*/
SDKNode.prototype.getThumb = function()
{

	if(this.isContainer())
	{
		return new BitmapData(this.iconPath + "/BEHFolderIcon128.png");
	}
	else
	{
		return new BitmapData(this.iconPath + "/BEHFileIcon128.png");
	}	
}

// PREVIEW
/**
  Creates a preview image for this node.
  @type BitmapData
  @return Returns the preview image for this node
*/
SDKNode.prototype.getPreview = function()
{
	if(this.isContainer())
	{
		return new BitmapData(this.iconPath + "/BEHFolderIcon512.png");
	}
	else
	{
		return new BitmapData(this.iconPath + "/BEHFileIcon512.png");
	}
}

// Metadata
SDKNode.prototype.getMetadata = function()
{
	if(this.metadata == undefined)
	{
		var xmpMeta = new XMPMeta( ); 
		var d = new Date()
		d.setFullYear(2007,0,1);
		d.setHours(1, 0, 0, 0);
		var xmptoday = new XMPDateTime(d);
		xmptoday.convertToLocalTime();
		
		xmpMeta.setProperty( XMPConst.NS_EXIF, "DateTime", xmptoday);
		xmpMeta.setProperty( XMPConst.NS_EXIF, "DateTimeOriginal", xmptoday);
				
		xmpMeta.setProperty(XMPConst.NS_XMP, "CreatorTool", "Bridge SDK");
		xmpMeta.setProperty(XMPConst.NS_XMP, "CreateDate", xmptoday);
		xmpMeta.setProperty(XMPConst.NS_XMP, "MetadataDate", xmptoday);
		
		xmpMeta.setProperty(XMPConst.NS_DC, "creator", "Created by the Bridge SDK");
		xmpMeta.setProperty(XMPConst.NS_DC, "title", this.name);
		xmpMeta.setProperty(XMPConst.NS_DC, "description", "A Bridge SDK node");
		
		XMPMeta.registerNamespace("http://ns.adobe.bridge.sdk/a/", "extHanA");
		
		xmpMeta.setProperty("http://ns.adobe.bridge.sdk/a/", "Description", "Some custom metadata added to a script defined node");
		xmpMeta.setProperty("http://ns.adobe.bridge.sdk/a/", "ID", Math.floor(Math.random()*30));
			
		var newXmp = xmpMeta.serialize(XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER | XMPConst.SERIALIZE_USE_COMPACT_FORMAT ); 
		this.metadata = new Metadata( newXmp );
	}
	
	return this.metadata;
}

// Quick

SDKNode.prototype.setLabelRating = function(type, val)
{
	md = this.getMetadata();
	md.namespace = "http://ns.adobe.com/xap/1.0/";
	
	if(type == "Rating")
	{
		md.Rating = val;
	}
	else
	{
		md.Label = val;
	}
}

SDKNode.prototype.getLabelRating = function(type)
{
	var retval = 0;
	md = this.getMetadata();
	md.namespace = "http://ns.adobe.com/xap/1.0/";
	
	if(type == "Rating")
	{
		retval = md.Rating;
	}
	else
	{
		retval = md.Label;
	}

	return retval;
}
	

SDKNode.prototype.setMetadata = function(md)
{
	this.metadata = md;
}
/////////////////////////////////////////////////////////////////////////////////
// CUSTOM INFOSET 

// Support methods for the Custom Infoset

/**
  Called at node creation time to set values for the specified fields
*/
SDKNode.prototype.setCustomInfosetData = function()
{
	this.customString = "A Simple String for node: " + this.name;
	
	this.customNumber = (this.container) ? 1234 : 9876;
	this.customDate = new Date().toString();
	this.customArray = ["Array", "Of", "Strings"];
	this.customBool = true;
}

/**
	Retrieves this node's data for the custom Infoset member1 value
	@type String
	@return The value for member1 of the custom Infoset
*/
SDKNode.prototype.getCustomString = function(){ return this.customString; }

/**
	Retrieves this node's data for the custom Infoset member2  value;
	@type Number
	@return The value for member2 of the custom Infoset
*/
SDKNode.prototype.getCustomNumber = function(){ return this.customNumber; }

/**
	Retrieves this node's data for the custom Infoset member3  value;
	@type Date
	@return The value for member3 of the custom Infoset
*/
SDKNode.prototype.getCustomDate = function(){ return this.customDate; }

/** 
	Retrieves this node's data for the custom Infoset member4  value;
	@type Array
	@return The value for member4 of the custom Infoset
*/
SDKNode.prototype.getCustomArray = function(){ return this.customArray; }

/**
	Retrieves this node's data for the custom Infoset member5  value;
	@type Boolean
	@return The value for member5 of the custom Infoset
*/
SDKNode.prototype.getCustomBool = function(){ return this.customBool; }

/**
	Sets this node's data for the custom Infoset member1 value;
	@param s The new value for member1 of the custom Infoset
*/
SDKNode.prototype.setCustomString = function(s){ this.customString = s; }

/**
  Retrieves this node's data for the custom Infoset member2  value;
	@param n The new value for member2 of the custom Infoset
*/
SDKNode.prototype.setCustomNumber = function(n){ this.customNumber = n; }

/**
  Retrieves this node's data for the custom Infoset member3  value;
	@param d The new value for member3 of the custom Infoset
*/
SDKNode.prototype.setCustomDate = function(d){ this.customDate = d; }

/**
  Retrieves this node's data for the custom Infoset member4  value;
	@param a The new value for member4 of the custom Infoset
*/
SDKNode.prototype.setCustomArray = function(a){ this.customArray = a; }

/**
  Retrieves this node's data for the custom Infoset member5  value;
	@param b The new value for member5 of the custom Infoset
*/
SDKNode.prototype.setCustomBool = function(b){ this.customBool = b; }
