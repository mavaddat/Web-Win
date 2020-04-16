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
 @fileoverview Shows how to acquire and update metadata for a selected thumbnail using XMP external object.
  @class Shows how to acquire and update metadata for a selected thumbnail using XMP external object.
 
 <h4>Usage</h4>
 	   
   <ol>
     <li> In Bridge, select a single thumbnail that has XMP-based metadata, such as a Adobe Photoshop CC 2018 (PSD), Adobe PDF or Adobe InDesign CC 2018 (INDD) file.
     <li> Run the snippet in the ExtendScript Toolkit (see Readme.txt)
	  <li> Inspect the Metadata panel and the File Properties section; note how  the Application has been modified by this snippet.
	<li> Inspect the metadata panel and the IPTC Core section; note how the Title has been modified by this snippet.
		<li> Select File > File Info... > Advanced
		<li> Expand the node http://ns.adobe.bridge.sdk/ and inspect the newly added metadata.
		<li> Inspect the JavaScript console to view information about all modifications made by this snippet to the XMP metadata.
  </ol>
	 
 <h4>Description</h4>

<p>Shows how to acquire XMP metadata for a selected thumbnail and modify the existing data.
Several properties are updated using the XMPMeta object, as well as some custom properties
being added, including arrays, qualifiers and structures.  This snippet also demonstrates how to
delete a property, delete all properties from a namespace and delete all properties from the 
XMPMeta object.
	
<p>The selected thumbnail's metadata is collected and serialised to give the XMP packet which 
is used to construct a new instance of an XMPMeta object.  The XMPMeta object is used to 
modify existing metadata as well as add custom data.  After all modifications are made
the XMP packet is serialized and written back to the selected thumbnail's metadata property.
			
<p>To add the custom data a new namespace (http://ns.adobe.bridge.sdk/) and prefix (nssdk) is 
registered, the namespace and prefix have no relevance outwith the scope of this snippet.  To view 
the newly added custom data then use the select File > File Info... > Advanced and expand the 
'http://ns.adobe.bridge.sdk/'  element.

<p>Note:  The selected file will have its metadata over written.
  
 <p>See the JavaScript Tools Guide for more details.<br />

 @see SnpInspectMetadata
 @see SnpModifyMetadata

 
  @constructor Constructor
 */
function SnpModifyMetadata() 
{

	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "Needs to run in Bridge, \nwith a selection of a file, \nideally with some metadata";	
}

/**
 Functional part of this snippet.  Get the selected Thumbnail and creates an XMPFile object which
 is used to get access to the XMP data.
 
 @return True if the snippet ran as expected, false otherwise
 @type boolean
*/
SnpModifyMetadata.prototype.run = function() 
{
	if(!this.canRun())
	{
		return false;
	}

	// Load the XMP Script library
	if( xmpLib == undefined ) 
	{
		if( Folder.fs == "Windows" )
		{
			var pathToLib = Folder.startup.fsName + "/AdobeXMPScript.dll";
		} 
		else 
		{
			var pathToLib = Folder.startup.fsName + "/AdobeXMPScript.framework";
		}
	
		var libfile = new File( pathToLib );
		var xmpLib = new ExternalObject("lib:" + pathToLib );
	}

	$.writeln("About to run SnpModifyXML");
	
	// Get the selected file
	var thumb = app.document.selections[0];
	
	if(thumb.hasMetadata)
	{
		// Get the metadata object - wait for  valid values
		var md = thumb.synchronousMetadata;
		
		// Get the XMP packet as a string and create the XMPMeta object
		var xmp = new XMPMeta(md.serialize());
		
		$.writeln("SnpModifyXML: About to modify XMP data for " + thumb.name);

		$.writeln("XMP packet before modifications:");
		$.writeln("-------------------------------------------------");
		$.writeln(xmp.dumpObject());
		
		// Change the creator tool
		xmp.setProperty(XMPConst.NS_XMP, "CreatorTool", "Changed by SnpModifyMetadata");
		
		// Change the date modified
		var d = new XMPDateTime(new Date());
		//d.convertToLocalTime();
		xmp.setProperty(XMPConst.NS_XMP, "ModifyDate", d, XMPConst.XMPDATE);

		// Create some custom data.  Register a new namespace and prefix
		var sdkNamespace = "http://ns.adobe.bridgesdk/";
		var sdkPrefix = "nssdk:";
		XMPMeta.registerNamespace(sdkNamespace, sdkPrefix);
		
		// Create a second namespace and prefix
		var sdkNamespace2 = "http://ns.adobe.bridgesdk/two/";
		var sdkPrefix2 = "nssdk2:";
		XMPMeta.registerNamespace(sdkNamespace2, sdkPrefix2);
		
		// Add a some properties and qualifiers
		xmp.setProperty(sdkNamespace, "SDKProp1", "A String");
		xmp.setQualifier(sdkNamespace, "SDKProp1", XMPConst.TYPE_TEXT, "SDKqual1", "String One");
		xmp.setQualifier(sdkNamespace, "SDKProp1", XMPConst.TYPE_TEXT, "SDKqual2", "String Two");
		
		xmp.setProperty(sdkNamespace, "SDKProp2", "A Number");
		xmp.setQualifier(sdkNamespace, "SDKProp2", sdkNamespace2, "SDKqual1", 12345, 0);
		xmp.setQualifier(sdkNamespace, "SDKProp2", sdkNamespace2, "SDKqual2", 67890, 0);
		
		// Delete the array if it exists
		xmp.deleteProperty(sdkNamespace, "SDKArray");
		
		// Add an array
		xmp.appendArrayItem(sdkNamespace, "SDKArray", "First Element", 0, XMPConst.ARRAY_IS_UNORDERED);
		xmp.appendArrayItem(sdkNamespace, "SDKArray", "Second Element", 0, XMPConst.ARRAY_IS_UNORDERED);
		xmp.appendArrayItem(sdkNamespace, "SDKArray", "Third Element", 0, XMPConst.ARRAY_IS_UNORDERED);
		
		// Insert an item into an array
		xmp.insertArrayItem(sdkNamespace, "SDKArray", 2, "Inserted after First Element");
		
		// Delete the dc:title property
		xmp.deleteProperty(XMPConst.NS_DC, "title");
		
		// Populate the dc:title alt lang array, if the correct options are supplied the array 
		// will be created even if it doesn' exist
		xmp.appendArrayItem(XMPConst.NS_DC, "title", "XMP is kewl!", 0, XMPConst.ALIAS_TO_ALT_TEXT);
		xmp.setQualifier(XMPConst.NS_DC, "title[1]", "http://www.w3.org/XML/1998/namespace", "lang", "x-default");

		// Set some properties and qualifiers
		xmp.setProperty(XMPConst.NS_DC, "title[2]", "XMP est frais!");
		xmp.setQualifier(XMPConst.NS_DC, "title[2]", "http://www.w3.org/XML/1998/namespace", "lang", "fr-fr");
		
		xmp.appendArrayItem(XMPConst.NS_DC, "title", "XMP è freddo!", 0, XMPConst.ALIAS_TO_ALT_TEXT);		
		var lastIndex = xmp.countArrayItems(XMPConst.NS_DC, "title");
		xmp.setProperty(XMPConst.NS_DC, "title[" + lastIndex +"]/@xml:lang", "it-it");
		
		// Or you could just use this
		xmp.setLocalizedText(XMPConst.NS_DC, "title", "en", "en-us", "XMP is cool!");
		
		// Create a structure and add some fields
		xmp.setProperty("http://ns.adobe.com/xap/1.0/t/pg/", "MaxPageSize", "", XMPConst.PROP_IS_STRUCT);
		xmp.setStructField("http://ns.adobe.com/xap/1.0/t/pg/", "MaxPageSize", XMPConst.TYPE_DIMENSIONS, "w", 8.5);
		xmp.setStructField("http://ns.adobe.com/xap/1.0/t/pg/", "MaxPageSize", XMPConst.TYPE_DIMENSIONS, "h", 12);
		xmp.setStructField("http://ns.adobe.com/xap/1.0/t/pg/", "MaxPageSize", XMPConst.TYPE_DIMENSIONS, "unit", "inches");
		
		// Create a custom structure and add some fields
		xmp.setProperty(XMPConst.NS_DC, "sdknames", "", XMPConst.PROP_IS_STRUCT);
		xmp.setStructField(XMPConst.NS_DC, "sdknames", sdkNamespace2, "sdkfld1", "Tom");
		xmp.setStructField(XMPConst.NS_DC, "sdknames", sdkNamespace2, "sdkfld2", "Dick");
		xmp.setStructField(XMPConst.NS_DC, "sdknames", sdkNamespace2, "sdkfld3", "Harry");
						
		$.writeln("XMP packet after modifications:");
		$.writeln("-------------------------------------------------");
		$.writeln(xmp.dumpObject());
		
		// NOTE: removal of properties is commented out, because otherwise
		// you won't see any of the modifications we applied above. But
		// the code is left here for your reference
		//
		// How you would delete a single property
		//xmp.deleteProperty(XMPConst.NS_XMP, "CreatorTool");
		
		// Delete all properties for a namespace
		//XMPUtils.removeProperties(xmp, sdkNamespace, "", XMPConst.REMOVE_ALL_PROPERTIES);
		
		//$.writeln("XMP packet after removing properties:");
		//$.writeln("-------------------------------------------------");
		//$.writeln(xmp.dumpObject());
		
		// How you might delete all properties
		//XMPUtils.removeProperties(xmp, "", "", XMPConst.REMOVE_ALL_PROPERTIES);
		
		//$.writeln("XMP packet after removing ALL properties:");
		//$.writeln("-------------------------------------------------");
		//$.writeln(xmp.dumpObject());
		
		// Write the packet back to the selected file
		var updatedPacket = xmp.serialize(XMPConst.SERIALIZE_OMIT_PACKET_WRAPPER | XMPConst.SERIALIZE_USE_COMPACT_FORMAT);

		// Uncomment to see the XMP packet in XML form
		// $.writeln(updatedPacket);
		thumb.metadata = new Metadata(updatedPacket);
	
	}
	else
	{
		$.writeln("The selected thumbnail has no metadata.");
	}

	$.writeln("Ran SnpModifyMetadata");
	
	return true;
}

/**
  Determines whether snippet can be run given current context.  The snippet 
  fails if these preconditions are not met:
  <ul>
  <li> Must be running in Bridge
  <li> A selection must be made in the Content pane of Bridge 
  </ul>

  @return True is this snippet can run, false otherwise
  @type boolean
*/
SnpModifyMetadata.prototype.canRun = function()
 {
	// Must be running in Bridge & have a selection
	if( (BridgeTalk.appName == "bridge") && (app.document.selectionLength == 1)) {
		return true;
	}

	// Fail if these preconditions are not met.  
	// Bridge must be running,
	// There must be a selection.
	$.writeln("ERROR:: Cannot run SnpModifyMetadata");
	$.writeln(this.requiredContext);
	return false;
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpModifyMetadata_unitTest ) == "undefined") {
	new SnpModifyMetadata().run();
}
