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
  @fileoverview Supporting class; manages the backing nodes used for extension handling samples.
  @class Supporting class; manages the backing nodes used for extension handling samples.

 
  <h4>Description</h4>
	<ul>
  <li> Supporting class for script defined node extension samples
  <li> Stores the prefix used by the handled nodes
  <li> Stores the root node of the hierarchy
  </ul>
  
<p>A manager object for a node hierarchy. This class manages a node hierarchy that contains
  nodes of the type handled by the sample node-handling extension.  The constructor accepts the
  Bridge URI prefix that is used to identify handled nodes.<br />

  @see SDKNode
  @see BasicExtensionHandler
  @see CustomInfosetExtensionHandler
 
  @param prefix The URI prefix for the handled nodes
  @constructor Constructor
 */
function SDKSystem(prefix)
{
	/**
	  The prefix to be used for this node type.
	 @type String
	*/
	this.prefix = prefix;
	
	/**
	 The initial root node.
	 @type SDKNode
	*/
	this.root = undefined;
	
	/**
		The search node.  A special node used for storing search results.
		@type SDKNode
	*/
	this.searchNode = undefined;

}

/**
 Adds a node of the handled type as the root node of this node hierarchy.
 @param root The SDKNode which is the root node of this hierarchy
 @type void
*/
SDKSystem.prototype.addRoot = function(root)
{
	this.root = root;
}

/**
 Retrieves the prefix defined for the handled node type.
 @type String
 @return The registered prefix.
*/
SDKSystem.prototype.getPrefix = function(){ return this.prefix;}

/**
 Finds and returns a node of the handled type from a path
 @param path The path of the node to find in the system
 @type SDKNode
 @return The node with the given path, or null if not found.
*/
SDKSystem.prototype.getNodeFromPath = function(path)
{
	var tmp = path.split("/");
	var name = tmp[tmp.length-1];

	if(name.substring(0, 6) == "Search")
	{
		return this.searchNode;
	}

	if(name == this.root.getName()) return this.root;
	
	var retval = this.root.findChildNodeFromPath(path);
	return retval;
}

/**
	Adds a search node into the system.  There is only ever
	a single search node.
	@param n The SDKNode which is the search node.
*/
SDKSystem.prototype.addSearchNode = function(n)
{
	this.searchNode = n;
}
