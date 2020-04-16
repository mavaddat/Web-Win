////////////////////////////////////////////////////////////////////////////
// ADOBE SYSTEMS INCORPORATED
// Copyright 2017 Adobe Systems Incorporated
// All Rights Reserved
//
// NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the
// terms of the Adobe license agreement accompanying it.  If you have received this file from a
// source other than Adobe, then your use, modification, or distribution of it requires the prior
// written permission of Adobe.
/////////////////////////////////////////////////////////////////////////////

/**
  @fileoverview Shows how to export a new pdf using the Output Module of Bridge
  @class Shows how to export a new pdf using the Output Module of Bridge
 
  <h4>Usage</h4>

     <ol>
		<li>Open the snippet in the ExtendScript Toolkit (see Readme.txt), setting Bridge CC 2018 as the target application.
		<li>In Bridge, go to output workspace and select at least one thumbnail representing an image file in content panel, and run the snippet.
		<li>Once you have executed the snippet, you should see the exported pdf file opened automatically. 
	 </ol>
 
  <h4>Description</h4>

   <p>Shows how to export a pdf file using the PDFOutput object.
	  PDFOutput object provides four methods to be used in exporting pdf.
   
   <p>resetDocument method will reset the Output Preview Document for exporting new pdf file.
	  This method should be called before exporting any new pdf file.
	  Result of this method call can be seen as Output Preview Document gets reset in Output Preview Panel.
   
   <p>setPDFTemplate method is used to set the output template to be used for exporting pdf file.
      Template names are listed in Output Settings Panel. Pass a tamplate name as an argument to this method,
	  results can be seen as Output Preview Document gets changed as per selected template.
   
   <p>addToDocument method is used to append selected thumbnails in the Output Preview Document.
	  This method call will update Output Preview Document in Output Preview Panel.
   
   <p>exportToPDF method will use the content of Output Preview Document and the selected template to proceed with pdf export.
	  This method takes Folder path as a first argument and filename as a second argument.

   @constructor Constructor.   
 */
 
function SnpExportPDF()
{
	/**
	 The context in which this snippet can run.
	 @type String
	*/
	this.requiredContext = "Needs to run in Bridge";
}

/**
 Functional part of this snippet.

 Creates PDFOutput object and calls its methods to export pdf file.

	@return True if the snippet ran as expected, false otherwise.  
	@type Boolean
*/
SnpExportPDF.prototype.run = function()
{

	var retval = true;
	if(!this.canRun()) {
		retval = false;	
		return retval;
	}

    // Navigate to output workspace.
    app.document.setWorkspace("$$$/Bridge/Workspace/Output=Output");
    
	// Create the PDFOutput object
	var pdfDoc= new PDFOutput("Created By SnpExportPDF");	
    
	// Reset Output Preview Document.
	pdfDoc.resetDocument();
	
	// Set template name to update Output Preview Document.
    pdfDoc.setPDFTemplate("Fine Art Mat");
    
	// Get selected thumbnails from Browser Document.
	var selectedThumbnails = app.document.getSelection();
    
    // return with error if no thumbnails are selected.
    if(selectedThumbnails.length < 1){
        $.writeln("ERROR:: Cannot run SnpExportPDF, no thumbnail is selected in content panel.");
        retval = false;	
		return retval;
    }
    
    for (i = 0; i < selectedThumbnails.length; i++) {
		// Add Thumbnail to the Output Preview Document.
    	pdfDoc.addToDocument(selectedThumbnails[i].path);
}
    // Save the pdf in the same folder where the first thumbnail is present.
    var pdfFilePath = selectedThumbnails[0].parent.path;
    
	// Finally, export the Output Preview Document to a pdf file.
    pdfDoc.exportToPDF(pdfFilePath, "Untitled.pdf");
    
	return retval;
}

/**
  Determines whether snippet can be run given current context.  The snippet 
  fails if these preconditions are not met: 
	<ul>
 	 <li> Must run in Bridge
	 </ul>
 	@return True if this snippet can run, false otherwise
	@type boolean
*/
SnpExportPDF.prototype.canRun = function()
{

	if(BridgeTalk.appName == "bridge") { 
		return true;
	}
	
	$.writeln("ERROR:: Cannot run SnpExportPDF");
	$.writeln(this.requiredContext);
	return false;

}

/**
 "main program": construct an anonymous instance and run it
  as long as we are not unit-testing this snippet.
*/
if(typeof(SnpExportPDF_unitTest) == "undefined") {
    new SnpExportPDF().run();
}
