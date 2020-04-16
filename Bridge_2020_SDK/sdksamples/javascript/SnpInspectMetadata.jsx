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
 @fileoverview Shows how to acquire metadata for a selected thumbnail using XMP external object.
  @class Shows how to acquire metadata for a selected thumbnail using XMP external object.
 
 <h4>Usage</h4>
 	   
   
   <ol>
   <li>Open the snippet in the ExtendScript Toolkit (see Readme.txt), setting Bridge CC 2018 as the target application
     <li> In Bridge, select a single thumbnail that has metadata, such as an Adobe PDF, Adobe Photoshop CC 2018 (PSD) or Adobe InDesign CC 2018 (INDD).
     <li> Go back to the ExtendScript Toolkit and run the snippet.
     <li>Inspect the JavaScript Console of the Toolkit; you should see information about the XMP-based metadata of the thumbnail selected.
  </ol>
	 
 <h4>Description</h4>

<p>Shows how to acquire XMP metadata for a selected thumbnail by creating an XMPMeta object
  and retrieving XMP properties.
  
<p>The File object that is represented by the selected Thumbnail in Bridge is used to create a read only
	XMPFile object, which in turn gives the XMPMeta object.  Several properties are inspected from different
	namespaces and displayed via the JavaScript console.  
	
<p>One of the properties inspected is an alternative array  (language alternative) which may have several 
	qualifiers.  This sample demonstrates how to access the qualifier directly as well as how to select the
	localized text.
  
 <p>See the XMP section in the JavaScript Tools Guide for more details.<br />

 @see SnpInspectMetadata
 @see SnpModifyMetadata
 
  @constructor Constructor
 */
function SnpInspectMetadata() 
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
SnpInspectMetadata.prototype.run = function() 
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

	$.writeln("About to run SnpInspectMetadata");
	
	var thumb = app.document.selections[0];
	if(thumb.hasMetadata)
	{
	
		// Get the selected file
		var selectedFile = thumb.spec;
		
		// Create an XMPFile
		var myXmpFile = new XMPFile( selectedFile.fsName, XMPConst.UNKNOWN, XMPConst.OPEN_FOR_READ);
		
		// Get the XMP data
		var myXmp = myXmpFile.getXMP();
		
		var fileInfo = myXmpFile.getFileInfo();
		$.writeln("XMP contents for " + fileInfo.filePath);
		$.writeln("\n---------------------"); 
		
		$.writeln("PDF Schema - " + XMPConst.NS_PDF);
		var prop = myXmp.getProperty(XMPConst.NS_PDF, "Keywords", XMPConst.STRING);
		$.writeln("\tKeywords: " + prop);
		
		prop = myXmp.getProperty(XMPConst.NS_PDF, "Copyright", XMPConst.STRING);
		$.writeln("\tCopyright: " + prop);
		
		prop = myXmp.getProperty(XMPConst.NS_PDF, "Producer", XMPConst.STRING);
		$.writeln("\tProducer: " + prop);
		
		$.writeln("\n---------------------"); 
		
		$.writeln("XMP Basic - " + XMPConst.NS_XMP);
		prop = myXmp.getProperty(XMPConst.NS_XMP, "MetadataDate", XMPConst.XMPDATE);
		$.writeln("\tMetadataDate: " + prop);
		
		prop = myXmp.getProperty(XMPConst.NS_XMP, "CreatorTool", XMPConst.STRING);
		$.writeln("\tCreatorTool: " + prop);
		
		prop = myXmp.getProperty(XMPConst.NS_XMP, "CreateDate");
		$.writeln("\tCreateDate: " + prop);
		
		$.writeln("\n---------------------"); 
		
		$.writeln("Dublin Core - " + XMPConst.NS_DC);
		dumpArrayItems(XMPConst.NS_DC, "description");
		dumpArrayItems(XMPConst.NS_DC, "title");
		dumpArrayItems(XMPConst.NS_DC, "creator");
		
		$.writeln("\n---------------------"); 
		
		$.writeln("XMP Asset Management - " + XMPConst.NS_XMP_MM);
		prop = myXmp.getProperty(XMPConst.NS_XMP_MM, "InstanceID", XMPConst.STRING);
		$.writeln("\tInstanceID: \n\t  " + prop);
		
		prop = myXmp.getProperty(XMPConst.NS_XMP_MM, "DocumentID", XMPConst.STRING);
		$.writeln("\tDocumentID: \n\t  " + prop);
		
		$.writeln("\n---------------------"); 
		$.writeln("Getting some localized text:");
		var localizedText = myXmp.getLocalizedText(XMPConst.NS_DC,"title", null, "it-IT");
		$.writeln("\tItalian: " + localizedText);
		
		var localizedText = myXmp.getLocalizedText(XMPConst.NS_DC,"title", null, "fr-FR");
		$.writeln("\tFrench: " + localizedText);
		
		var localizedText = myXmp.getLocalizedText(XMPConst.NS_DC,"title", null, "en-US");
		$.writeln("\tEnglish: " + localizedText);

		
	}
	else
	{
		$.writeln("The selected thumbnail has no metadata.");
	}

	// Helper function to dump array items and qualifiers
	function dumpArrayItems(ns, prop)
	{
		var items = myXmp.countArrayItems(ns, prop);
		if(items > 0)
		{		
			$.writeln("\t" + prop + ": ");
			for(var i = 1;i <= items;i++)
			{
					arrItem = myXmp.getArrayItem(XMPConst.NS_DC, prop, i);
					$.writeln("\t  [" + i + "] = " + arrItem);
					if((arrItem.options & XMPConst.PROP_HAS_QUALIFIERS) > 0)
					{
						var propName = prop + "[" + i + "]";
						var val = myXmp.getQualifier(XMPConst.NS_DC, propName, "http://www.w3.org/XML/1998/namespace", "lang");
						$.writeln("\t    xml:lang = '" + val + "'");
					}
			}
		}
		else
		{
			$.writeln("\t" + prop + "\n\t  No data");
		}
	
		$.writeln();
	}

	$.writeln("Ran SnpInspectMetadata");
	
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
SnpInspectMetadata.prototype.canRun = function()
 {
	// Must be running in Bridge & have a selection
	if( (BridgeTalk.appName == "bridge") && (app.document.selectionsLength == 1)) {
		return true;
	}

	$.writeln("ERROR:: Cannot run SnpInspectMetadata");
	$.writeln(this.requiredContext);
	return false;
}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpInspectMetadata_unitTest ) == "undefined") {
	new SnpInspectMetadata().run();
}
