# ADOBE® BRIDGE 2020 JAVASCRIPT REFERENCE

![Adobe Bridge](reference/media/image1.png)

![Adobe Acrobat](reference/media/image2.jpeg)

> &copy; 2020 Adobe Systems Incorporated. All rights reserved.
>
> Adobe® Creative Cloud: Adobe Bridge JavaScript Reference for Windows®
> and Macintosh®.
>
> If this guide is distributed with software that includes an end user
> agreement, this guide, as well as the software described in it, is
> furnished under license and may be used or copied only in accordance
> with the terms of such license. Except as permitted by any such
> license, no part of this guide may be reproduced, stored in a
> retrieval system, or transmitted, in any form or by any means,
> electronic, mechanical, recording, or otherwise, without the prior
> written permission of Adobe Systems Incorporated. Please note that the
> content in this guide is protected under copyright law even if it is
> not distributed with software that includes an end user license
> agreement.
>
> The content of this guide is furnished for informational use only, is
> subject to change without notice, and should not be construed as a
> commitment by Adobe Systems Incorporated. Adobe Systems Incorporated
> assumes no responsibility or liability for any errors or inaccuracies
> that may appear in the informational content contained in this guide.
>
> Please remember that existing artwork or images that you may want to
> include in your project may be protected under copyright law. The
> unauthorized incorporation of such material into your new work could
> be a violation of the rights of the copyright owner. Please be sure to
> obtain any permission required from the copyright owner.
>
> Any references to company names in sample templates are for
> demonstration purposes only and are not intended to refer to any
> actual organization.
>
> Adobe, the Adobe logo, Illustrator, Photoshop, InDesign, and Drive are
> either registered trademarks or trademarks of Adobe Systems
> Incorporated in the United States and/or other countries.
>
> Microsoft and Windows are either registered trademarks or trademarks
> of Microsoft Corporation in the United States and/or other countries.
> Apple, Mac, Mac OS, and Macintosh are trademarks of Apple Computer,
> Incorporated, registered in the United States and other countries. Sun
> and Java are trademarks or registered trademarks of Sun Microsystems,
> Incorporated in the United States and other countries. UNIX is a
> registered trademark of The Open Group in the US and other countries.
>
> Adobe Systems Incorporated, 345 Park Avenue, San Jose, California
> 95110, USA. Notice to U.S. Government End Users. The Software and
> Documentation are "Commercial Items," as that term is defined at 48
> C.F.R. §2.101, consisting of "Commercial Computer Software" and
> "Commercial Computer Software Documentation," as such terms are used
> in 48
>
> C.F.R. §12.212 or 48 C.F.R. §227.7202, as applicable. Consistent with
> 48 C.F.R. §12.212 or 48 C.F.R. §§227.7202-1 through 227.7202-4, as
> applicable, the Commercial Computer Software and Commercial Computer
> Software Documentation are being licensed to U.S. Government end users
> (a) only as Commercial Items and (b) with only those rights as are
> granted to all other end users pursuant to the terms and conditions
> herein. Unpublished-rights reserved under the copyright laws of the
> United States. Adobe Systems Incorporated, 345 Park Avenue, San Jose,
> CA 95110-2704, USA. For U.S. Government End Users, Adobe agrees to
> comply with all applicable equal opportunity laws including, if
> appropriate, the provisions of Executive Order 11246, as amended,
> Section 402 of the Vietnam Era Veterans Readjustment Assistance Act of
> 1974 (38 USC 4212), and Section 503 of the Rehabilitation Act of 1973,
> as amended, and the regulations at 41 CFR Parts 60-1 through 60-60,
> 60-250, and 60-741. The affirmative action clause and regulations
> contained in the preceding sentence shall be incorporated by
> reference.

## Contents

========

[Welcome 7](#welcome)

> [About this book 7](#about-this-book)
>
> [Who should read this book 7](#who-should-read-this-book)
>
> [What is in this book 7](#what-is-in-this-book)
>
> [Document conventions 8](#document-conventions)
>
> [Typographical conventions 8](#typographical-conventions)
>
> [JavaScript conventions 8](#javascript-conventions)
>
> [Where to go for more information 8](#where-to-go-for-more-information)

1. [Adobe Bridge DOM Object Reference > 10](#adobe-bridge-dom-object-reference)

> [AdobePortfolio Object 12](#adobeportfolio-object)
>
> [AdobePortfolio functions 12](#adobeportfolio-functions)
>
> [AdobeStock Object 13](#adobestock-object)
>
> [AdobeStock functions 13](#adobestock-functions)
>
> [App Object 14](#app-object)
>
> [App properties 14](#app-properties)

[App functions 17](#app-functions)

[BitmapData Object 25](#bitmapdata-object)

[BitmapData object constructors 25](#bitmapdata-object-constructors)

[BitmapData properties 26](#bitmapdata-properties)

[BitmapData functions 27](#bitmapdata-functions)

[Color Object 30](#color-object)

[Color object constructor 30](#color-object-constructor)

[Color properties 30](#color-properties)

[Color functions 30](#color-functions)

[Document Object 31](#document-object)

[Document object constructor 31](#document-object-constructor)

[Document properties 31](#document-properties)

[Document functions 43](#document-functions)

[Event Object 48](#event-object)

[Event properties 48](#event-properties)

> [Event object types 49](#event-object-types)
>
> [App events 49](#app-events)

[Document events 50](#document-events)

[Thumbnail events 51](#thumbnail-events)

[PreferencesDialog events 52](#preferencesdialog-events)

[Favorites Object 54](#favorites-object)

[Favorites properties 54](#favorites-properties)

[Favorites functions 54](#favorites-functions)

[IconListPanelette Object 57](#iconlistpanelette-object)

[IconListPanelette constructor 57](#iconlistpanelette-constructor)

> [IconListPanelette properties 57](#iconlistpanelette-properties)

> [InspectorPanel Object 58](#inspectorpanel-object)
>
> [InspectorPanel constructor 58](#inspectorpanel-constructor)
>
> [InspectorPanel properties 58](#inspectorpanel-properties)
>
> [InspectorPanel functions 59](#inspectorpanel-functions)
>
> [MenuElement Object 60](#menuelement-object)
>
> [MenuElement class functions 60](#menuelement-class-functions)

[MenuElement properties 61](#menuelement-properties)

[Adobe Bridge menu and command identifiers 63](#adobe-bridge-menu-and-command-identifiers)

[Top-level menu identifiers 63](#top-level-menu-identifiers)

[Menu bar submenu and command identifiers 64](#menu-bar-submenu-and-command-identifiers)

[Toolbar menus and commands 69](#toolbar-menus-and-commands)

[Context and flyout submenus and commands 71](#context-and-flyout-submenus-and-commands)

[Metadata Object 78](#metadata-object)

> [Metadata properties 79](#metadata-properties)
>
> [Metadata functions 80](#metadata-functions)
>
> [NavBar Object 81](#navbar-object)
>
> [NavBar properties 81](#navbar-properties)
>
> [NavBar functions 82](#navbar-functions)

[Panelette Base Class 83](#panelette-base-class)

[Panelette class properties 83](#panelette-class-properties)

[Panelette markup elements 84](#panelette-markup-elements)

[PDFOutput Object 85](#pdfoutput-object)

[PDFOutput Functions 85](#pdfoutput-functions)

[Preferences Object 86](#preferences-object)

> [Preferences properties 86](#preferences-properties)
>
> [Preferences functions 90](#preferences-functions)
>
> [PreferencesDialog Object 91](#preferencesdialog-object)
>
> [PreferencesDialog functions 91](#preferencesdialog-functions)

[QuickSearch Object 93](#quicksearch-object)

[QuickSearch Functions 93](#quicksearch-functions)

[TabbedPalette Object 94](#tabbedpalette-object)

[TabbedPalette constructor 94](#tabbedpalette-constructor)

[TabbedPalette properties 95](#tabbedpalette-properties)

[TabbedPalette object methods 96](#tabbedpalette-object-methods)

[TextPanelette Object 97](#textpanelette-object)

[TextPanelette constructor 97](#textpanelette-constructor)

[TextPanelette properties 97](#textpanelette-properties)

[Thumbnail Object 98](#thumbnail-object)

[Thumbnail object constructor 98](#thumbnail-object-constructor)

[Multiple references to the same node 99](#multiple-references-to-the-same-node)

[Thumbnail properties 100](#thumbnail-properties)

[Thumbnail functions 103](#thumbnail-functions)

[ThumbnailPanelette Object 107](#thumbnailpanelette-object)

> [ThumbnailPanelette constructor 107](#thumbnailpanelette-constructor)
>
> [ThumbnailPanelette properties 107](#thumbnailpanelette-properties)

2. [Node-Handling Extension Object Reference  > 108](#node-handling-extension-object-reference)

> [Badge Object 110](#badge-object)
>
> [Badge properties 110](#badge-properties)
>
> [CacheData Object 111](#cachedata-object)

[CacheData properties 111](#cachedata-properties)

> [CacheElement Object 112](#cacheelement-object)

[CacheElement properties 112](#cacheelement-properties)

[CacheElement functions 112](#cacheelement-functions)

> [ExtensionHandler Object 113](#extensionhandler-object)

[ExtensionHandler object constructor 113](#extensionhandler-object-constructor)

[ExtensionHandler properties 114](#extensionhandler-properties)

[ExtensionHandler methods 114](#extensionhandler-methods)

[Immediate handler operations 115](#immediate-handler-operations)

[Long-running handler operations 116](#long-running-handler-operations)

[ExtensionModel Object 120](#extensionmodel-object)

[ExtensionModel constructor 120](#extensionmodel-constructor)

[ExtensionModel properties 120](#extensionmodel-properties)

[ExtensionModel methods 121](#extensionmodel-methods)

[Immediate model operations 121](#immediate-model-operations)

[Long-running model operations 126](#long-running-model-operations)

[FilterDescription Object 128](#filterdescription-object)

[FilterDescription constructor 128](#filterdescription-constructor)

[FilterDescription properties 128](#filterdescription-properties)

[Infoset Object 130](#infoset-object)

[Infoset object constructor 130](#infoset-object-constructor)

[Infoset properties 130](#infoset-properties)

[Infoset functions 131](#infoset-functions)

[Core infosets 132](#core-infosets)

[InfosetMemberDescription Object 138](#infosetmemberdescription-object)

[InfosetMemberDescription constructor 138](#infosetmemberdescription-constructor)

[InfosetMemberDescription properties 138](#infosetmemberdescription-properties)

[ModalOperator Object 139](#modaloperator-object)

[ModalOperator constructor 139](#modaloperator-constructor)

[Operand Object 140](#operand-object)

[Operand object constructor 140](#operand-object-constructor)

[Operand properties 140](#operand-properties)

[Operator Class 141](#operator-class)

[Operator common properties 141](#operator-common-properties)

[Operator functions 144](#operator-functions)

[ProgressOperator Object 147](#progressoperator-object)

[ProgressOperator constructor 147](#progressoperator-constructor)

[Rank Object 148](#rank-object)

[Rank object constructor 148](#rank-object-constructor)

[Rank properties 148](#rank-properties)

[Scope Object 149](#scope-object)

[Scope object constructor 149](#scope-object-constructor)

[Scope properties 149](#scope-properties)

[SearchCondition Object 150](#searchcondition-object)

> [SearchCondition object constructor 150](#searchcondition-object-constructor)
>
> [SearchCondition properties 150](#searchcondition-properties)
>
> [SearchCriteria Object 151](#searchcriteria-object)
>
> [SearchCriteria object constructor 151](#searchcriteria-object-constructor)
>
> [SearchCriteria properties 151](#searchcriteria-properties)
>
> [SearchDefinition Object 153](#searchdefinition-object)
>
> [SearchDefinition object constructor 153](#searchdefinition-object-constructor)
>
> [SearchDefinition properties 153](#searchdefinition-properties)
>
> [SearchDetails Object 154](#searchdetails-object)
>
> [SearchDetails object constructor 154](#searchdetails-object-constructor)
>
> [SearchDetails properties 154](#searchdetails-properties)
>
> [SearchSpecification Object 155](#searchspecification-object)
>
> [SearchSpecification object constructor 155](#searchspecification-object-constructor)
>
> [SearchSpecification properties 155](#searchspecification-properties)
>
> [SortCriterion Object 157](#sortcriterion-object)
>
> [SortCriterion object constructor 157](#sortcriterion-object-constructor)
>
> [SortCriterion properties 157](#sortcriterion-properties)

3.  [External Communication Tools 159](#external-communication-tools)

> [Loading the Web Access library 159](#loading-the-web-access-library)
>
> [FtpConnection object 159](#ftpconnection-object)
>
> [Using File objects with the FtpConnection object 159](#using-file-objects-with-the-ftpconnection-object)
>
> [Synchronous and asynchronous operation 160](#synchronous-and-asynchronous-operation)

[FtpConnection object reference 161](#ftpconnection-object-reference)

[FtpConnection object constructor 161](#ftpconnection-object-constructor)

[FtpConnection object properties 161](#ftpconnection-object-properties)

[FtpConnection object functions 166](#ftpconnection-object-functions)

[HttpConnection object 170](#httpconnection-object)

[Requests and responses 170](#requests-and-responses)

[Asynchronous operations 171](#asynchronous-operations)

[Authentication 171](#authentication)

[HttpConnection object reference 172](#httpconnection-object-reference)

[HttpConnection object constructor 172](#httpconnection-object-constructor)

[HttpConnection object properties 172](#httpconnection-object-properties)

[HttpConnection object functions 176](#httpconnection-object-functions)

[Index 177](#index)

# Welcome

> Welcome to the _Adobe Bridge 2020 JavaScript Reference_. This book
> describes the JavaScript scripting API that allows you to manipulate
> and extend Adobe® Bridge.

## About this book

> This book provides complete reference information for the JavaScript
> objects, properties, and functions defined by Adobe Bridge. For
> conceptual information and examples, see the companion document, the
> _Adobe Bridge JavaScript Guide_.

### Who should read this book

> This book is for developers who want to call Adobe Bridge
> functionality from scripts, extend the capabilities of Adobe Bridge
> using JavaScript, and use scripts to communicate between Adobe Bridge
> and other applications. It assumes a general familiarity with the
> following:

- JavaScript

- Adobe Bridge

- Any other Adobe Bridge applications you are using, such as Adobe
  > Illustrator, Adobe Photoshop®, or Adobe InDesign®. The scripting
  > API details for each application are included with the scripting
  > documentation for that product.

### What is in this book

> This book provides detailed reference information about the JavaScript
> objects that Adobe Bridge provides.
>
> This book contains the following chapters:

- [Chapter 1, "Adobe Bridge DOM Object Reference](#adobe-bridge-dom-object-reference),"
  > provides a complete API reference for the objects, properties, and
  > functions defined in the Adobe Bridge document object model, which
  > any script can use to program Adobe Bridge functionality and
  > interactions with users.

- [ [Chapter 2, "Node-Handling Extension Object

  > Reference](#node-handling-extension-object-reference),"
  > provides a complete API reference for the objects, properties, and
  > functions that allow a product or plug-in developer to extend
  > Adobe Bridge functionality, in order to provide compatibility with
  > another product or plug-in.

- [ [Chapter 3, "External Communication
  > Tools](#external-communication-tools)," provides a
  > complete API reference for the Web Access library, which supplies
  > tools for communicating with other computers or the Internet using
  > standard protocols FTP and HTTP.

> The Adobe Bridge scripter also has access to a various utilities and
> tools that are part of ExtendScript, the Adobe extended implementation
> of JavaScript. These are described separately, in the _JavaScript
> Tools Guide_.

**7**

### Document conventions

#### Typographical conventions

+----------------------------------+----------------------------------+
| Monospaced font | > Literal values and code, such |
| | > as JavaScript code, HTML code, |
| | > filenames, and pathnames. |
+==================================+==================================+
| _Italics_ | > Variables or placeholders in |
| | > code. For example, in |
| | > name=\"_myName_\", the text |
| | > _myName_ represents a value |
| | > you are expected to supply, |
| | > such as name=\"Fred\". Also |
| | > indicates the first occurrence |
| | > of a new term. |
+----------------------------------+----------------------------------+
| [Blue underlined | > A hyperlink you can click to |
| text]{.underline} | > go to a related section in |
| | > this book or to a URL in your |
| | > web browser. |
+----------------------------------+----------------------------------+
| **Sans-serif bold font** | > The names of Adobe Bridge UI |
| | > elements (menus, menu items, |
| | > and buttons). |
| | > |
| | > The **\>** symbol is used as |
| | > shorthand notation for |
| | > navigating to menu items. For |
| | > example, **Edit \> Cut** |
| | > refers to the **Cut** item in |
| | > the **Edit** menu. |
+----------------------------------+----------------------------------+

> **NOTE:** Notes highlight important points that deserve extra
> attention.

#### JavaScript conventions

> This reference does not list properties and methods provided by the
> JavaScript language itself. For example, it is common for JavaScript
> objects to provide a toString() method, and many of the objects the
> SDK supplies implement this method. However, this book does not
> describe such methods unless they differ from the standard JavaScript
> implementation.
>
> Similarly, because most objects provided by the SDK have a name
> property, the reference does not list name
>
> properties explicitly.

### Where to go for more information

> The Adobe Bridge Software Developer's Kit (SDK) contains the
> JavaScript documentation and code samples. The SDK is available for
> download from Adobe Developer Center,
> [[h](http://www.adobe.com/devnet/)ttp:[//w](http://www.adobe.com/devnet/)ww]{.underline}[[.adobe.com/devnet/]{.underline}.](http://www.adobe.com/devnet/)
> You can install the SDK in a folder with a name and location of your
> choice, referred to here as _sdkInstall_. The SDK contains:

_sdkInstall_/docs/ Adobe Bridge JavaScript documents in PDF format,
including:

> This manual
>
> The _Adobe Bridge JavaScript Guide_, which provides an overview of
> conceptual information and details of scripting techniques.
>
> _sdkInstall_/sdksamples/ A set of code samples that illustrate Adobe
> Bridge scripting concepts and techniques.
>
> The sections in this manual that discuss particular concepts list the
> code samples that demonstrate the related techniques.
>
> This book does not describe the JavaScript language. For documentation
> of the JavaScript language or descriptions of how to use it, see
> publicly available web resources or any of numerous works on this
> subject, including the following:

- []The public JavaScript standards organization
  > web site: [www.ecma-international.org](http://www.ecma-international.org/)

- _JavaScript: The Definitive Guide, 4th Edition_; Flanagan, D.;

  > O'Reilly 2001; ISBN 0-596-00048-0

- _JavaScript Programmer's Reference_; Wootton, C.; Wrox 2001; ISBN

  > 1-861004-59-1

- _JavaScript Bible. 5th Edition_; Goodman, D. and Morrison, M.; John
  > Wiley and Sons1998; ISBN 0-7645-57432

# Adobe Bridge DOM Object Reference

###### Object summary

> This document provides a complete reference for the objects of the
> Adobe Bridge document object model (DOM). An overview of the objects
> and usage details are provided in the _Adobe Bridge JavaScript Guide_.
>
> [ ]{#\_bookmark13 .anchor}This chapter presents the primary objects.
> Additional objects are available to advanced developers who wish to
> extend the node-handling capability of Adobe Bridge by defined their
> own node types; these objects are described in [[Chapter 2,
> "Node-Handling Extension Object
> Reference](#node-handling-extension-object-reference).\"
>
> In addition to these Adobe Bridge-specific objects, an API common to
> most JavaScript-enabled Adobe applications is supplied by
> ExtendScript, the Adobe extended implementation of JavaScript. These
> tools are described in detail in the _JavaScript Tools Guide_. The
> tools include:

- [ ]{#bookmark14 .anchor}_ScriptUI_ objects that provide
  > user-interface capability.

```{=html}
<!-- -->
```

- []{#bookmark15 .anchor}The ExtendScript File and Folder objects that

  > provide portable access to the file system.

- An interapplication messaging framework that provides the ability to

  > communicate among scriptable applications using JavaScript.

- ExtendScript utilities, including tools for debugging, for
  > localization, and for specifying and working with measurement
  > values.

> []{#\_bookmark16 .anchor}The objects are presented alphabetically. For
> each object, complete syntax details are provided for the constructor,
> properties, and functions.

[[AdobePortfolio Object](#adobeportfolio-object) Creates a new portfolio project based on the project name and the list of files provided.

---

[AdobeStock Object](#adobestock-object) Provides capability to upload selected images in Bridge to Adobe Stock directly.
[App Object](#app-object) Global information about the Adobe Bridge application.
[BitmapData Object](#bitmapdata-object) Represents an image as a matrix of pixels.
[Color Object](#color-object) An RGB color description.
[Document Object](#document-object) An Adobe Bridge browser window.
[Event Object](#event-object) A user-interaction event.
[FavoritesObject](#favorites-object) Two arrays of the thumbnails shown in the Standard and User sections of the Favorites palette.
[IconListPanelette Object](#iconlistpanelette-object) A member sub-panel in an Inspector panel that displays two or three columns.
[InspectorPanel Object](#inspectorpanel-object) An object-inspection panel in the tabbed palettes.
[MenuElement Object](#menuelement-object) Access to the Adobe Bridge menus and commands.
[Metadata Object](#metadata-object) Access to file metadata through a thumbnail.
[NavBar Object](#navbar-object) A configurable navigation bar that can display user-interface controls.

---

[Panelette Base Class](#panelette-base-class) A base class for sub-panels in an Inspector panel.
[PDFOutput Object](#pdfoutput-object) Provides capability to generate a PDF using the Bridge\'s native PDF Output module.
[PreferencesObject](#preferences-object) Access to application preferences.
[PreferencesDialogObject](#preferencesdialog-object) Access to the Preferences dialog.
[QuickSearch Object](#quicksearch-object) Provides capability to use bridge quick search feature
[TabbedPalette Object](#tabbedpalette-object) A tabbed panel in the Adobe Bridge browser window.
[TextPanelette Object](#textpanelette-object) A member sub-panel in an Inspector panel that displays text.
[ThumbnailObject](#thumbnail-object) A navigable node representing a file, folder, or web page.
[ThumbnailPanelette Object](#thumbnailpanelette-object) A member sub-panel in an Inspector panel that displays thumbnails.

## AdobePortfolio Object

> AdobePortfolio Object provides capability to create a new portfolio
> project based on the project name and the list of files provided.
> Adobe Portfolio is a service to quickly and simply build a website to
> showcase creative work. After project creation, you can go to the
> Portfolio website to publish the project.

### AdobePortfolio functions

+----------------------------------+----------------------------------+
| createPortfolioProject() | Upload provided images on Adobe |
| adobePortfolioObj. | Stock. |
| createPortfolioProject | |
| (projectTitle, coverPath, | Returns true if the snippet ran |
| requestType, adultContent) | as expected, false if no files |
| | are selected in Bridge |
| projectTitle coverPath | |
| | Title of the Portfolio project. |
| requestType | |
| | Path of the thumbnail used for |
| adultContent | the cover picture of the |
| | project. |
| | |
| | Can be either 0 or 1. |
| | |
| | 0 denotes publish only to Adobe |
| | Portfolio;1 denotes publish to |
| | both Adobe Portfolio and |
| | Behance. |
| | |
| | Can be true or false. |
+==================================+==================================+
| addFilesForPortfolioProject() | Adds the provided files to the |
| | Adobe Portfolio object. |
+----------------------------------+----------------------------------+
| adobePortfolioObj | |
+----------------------------------+----------------------------------+
| .a | |
| ddFilesForPortfolioProject(thumb | |
+----------------------------------+----------------------------------+
| nailPath) | |
+----------------------------------+----------------------------------+
| thumbnailPath | Thumbnail Path of the images to |
| | be added to the project. |
+----------------------------------+----------------------------------+

## AdobeStock Object

> AdobeStock Object provides capability to upload selected images in
> Bridge to Adobe Stock directly via Bridge scripting. Adobe Stock is a
> service that provides designers and businesses with access to millions
> of high-quality creative assets.

### AdobeStock functions

+----------------------------------+----------------------------------+
| uploadToAdobeStock() | > Upload provided images on |
| | > Adobe Stock. |
+==================================+==================================+
| ad | > Return True if the snippet ran |
| obeStockObj.uploadToAdobeStock(I | > as expected, false if no files |
| mageList) | > are selected in Bridge |
+----------------------------------+----------------------------------+
| > _ImageList_ | > Array of thumbnail objects for |
| | > the images to be uploaded. |
+----------------------------------+----------------------------------+

## App Object

> []{#\_bookmark22 .anchor}The App object represents the Adobe Bridge
> application. A singleton instance is created on startup; access it
> using the app global variable.
>
> There is only one App object; multiple browser windows are represented
> by instances of Document, and can be accessed with the app.document or
> app.documents properties.

### App properties

+----------------------+----------------------+----------------------+
| []{#\_bookmark25 | > Array of Filter | > A collection of |
| .anchor}d | > Description | > the default |
| efaultFilterCriteria | | > |
| | | [[FilterDescription] |
| | | {.underline}](#filte |
| | | rdescription-object) |
| | | > [Object](#filter |
| | | description-object)s |
| | | > used to populate |
| | | > the Filter |
| | | > palette. Read |
| | | > only. |
+======================+======================+======================+
| []{#\_bookmark26 | > Array of | > A collection of |
| .anchor | > SortCriterion | > the default |
| }defaultSortCriteria | | > [[SortCriterion |
| | | > Obje |
| | | ct](#so |
| | | rtcriterion-object)s |
| | | > used to sort the |
| | | > contents of |
| | | > container nodes. |
| | | > Read only. |
| | | > |
| | | > Default list is: |
| | | > |
| | | > Filename Document |
| | | > type Date created |
| | | > |
| | | > Date file modified |
| | | > File size |
| | | > Dimensions |
| | | > Resolution |
| | | > |
| | | > Color profile |
| | | > Label |
| | | > |
| | | > Rating Keywords |
+----------------------+----------------------+----------------------+
| displayDialogs | > String | > The policy for the |
| | | > display of modal |
| | | > dialogs. |
| | | > Read/write. One |
| | | > of: |
| | | > |
| | | > **all** |
| | | > (default)\-- Modal |
| | | > dialogs should |
| | | > always be |
| | | > displayed. |
| | | > |
| | | > **none**---Modal |
| | | > dialog should |
| | | > never be |
| | | > displayed. |
| | | > |
| | | > **error**---Only |
| | | > dialogs that |
| | | > report an error to |
| | | > the user should be |
| | | > displayed. |
+----------------------+----------------------+----------------------+
| []{#\_bookmark27 | > Document | > The active |
| .anchor}document | | > (top-most) |
| | | > [[Document |
| | | > |
| | | Object]{.underline} |
| | | ](#document-object), |
| | | > representing the |
| | | > active browser |
| | | > window. |
| | | > Read/write. |
| | | > |
| | | > During an |
| | | > [open](#_bookmark120) |
| | | > or |
| | | > [create](#_bookmark118) |
| | | > event, this value |
| | | > still contains the |
| | | > previous Document |
| | | > object, while the |
| | | > new Document |
| | | > object is passed |
| | | > to the event |
| | | > handler. |
+----------------------+----------------------+----------------------+
| documents | > Array of Document | > A collection of |
| | | > [[Document |
| | | > |
| | | Object]{.underline} |
| | | ](#document-object)s |
| | | > representing the |
| | | > set of all open |
| | | > browser windows. |
| | | > Read/write. |
+----------------------+----------------------+----------------------+

+----------------------+----------------------+----------------------+
| []{#\_bookmark28 | > Array of | > A collection of |
| . | > EventHandler | > event handlers |
| anchor}eventHandlers | | > installed by |
| | | > scripts. Add an |
| | | > event handler to |
| | | > this array to |
| | | > register it with |
| | | > Adobe Bridge. |
| | | > Registered handler |
| | | > functions are |
| | | > called when any |
| | | > user-interaction |
| | | > event is |
| | | > triggered. |
| | | > Read/write. |
| | | > |
| | | > Each event handler |
| | | > is specified by a |
| | | > JavaScript object |
| | | > with one property, |
| | | > the handler |
| | | > function name: |
| | | > |
| | | > { handler: |
| | | > _fnName_} |
| | | > |
| | | > The handler |
| | | > function takes one |
| | | > argument, an |
| | | > [[Event |
| | | > Object](#event-object), |
| | | > and returns a |
| | | > result object |
| | | > |
| | | > {handled: |
| | | > boolean}. |
| | | > |
| | | > When true, the |
| | | > event has been |
| | | > completely handled |
| | | > and Adobe Bridge |
| | | > does not look for |
| | | > more handlers or |
| | | > call the default |
| | | > handler. |
| | | > |
| | | > When false (or |
| | | > when the handler |
| | | > returns |
| | | > undefined), Adobe |
| | | > Bridge continues |
| | | > to call registered |
| | | > handlers, or if |
| | | > there are no more, |
| | | > calls the default |
| | | > handler. |
+======================+======================+======================+
| []{#\_bookmark29 | > Array of | > A collection of |
| .anchor}extensions | > ExtensionHandler | > [[Extension |
| | | Handler]{.underline} |
| | | > [Object] |
| | | {.underline}](#exten |
| | | sionhandler-object)s |
| | | > representing |
| | | > registered |
| | | > node-handling |
| | | > extensions. Read |
| | | > only. Use |
| | | > [[registe |
| | | rExtension()]{.under |
| | | line}](#_bookmark46) |
| | | > and |
| | | > [[unregiste |
| | | rExtension()]{.under |
| | | line}](#_bookmark54) |
| | | > to modify the |
| | | > list. |
+----------------------+----------------------+----------------------+
| favorites | > Favorites | > The top-level |
| | | > object for the |
| | | > navigation |
| | | > hierarchy |
| | | > displayed in the |
| | | > Favorites palette. |
| | | > This |
| | | > [[Fa |
| | | vorites]{.underline} |
| | | ](#favorites-object) |
| | | > [ |
| | | [Object]{.underline} |
| | | ](#favorites-object) |
| | | > contains two |
| | | > arrays of |
| | | > [Thumbnail |
| | | > O |
| | | bject]( |
| | | #thumbnail-object)s, |
| | | > for the nodes |
| | | > shown in the two |
| | | > sections. Read |
| | | > only. |
+----------------------+----------------------+----------------------+
| folderRoots | > Array of String | > The list of Bridge |
| | | > URI strings for |
| | | > the root nodes of |
| | | > the Folders pane. |
| | | > Read only. |
| | | > |
| | | > Extension |
| | | > developers can |
| | | > modify the list |
| | | > with |
| | | > [[addC |
| | | ustomRoot()]{.underl |
| | | ine}](#_bookmark36). |
+----------------------+----------------------+----------------------+
| []{#\_bookmark30 | > Array of | > The collection of |
| .an | > InspectorPanel | > script-defined |
| chor}inspectorPanels | | > [[InspectorPan |
| | | el](#in |
| | | spectorpanel-object) |
| | | > [Objec |
| | | t](#ins |
| | | pectorpanel-object)s |
| | | > that define |
| | | > Inspector panels |
| | | > for new |
| | | > [[D |
| | | ocument]{.underline} |
| | | > |
| | | [Object]{.underline} |
| | | ](#document-object)s |
| | | > (browser windows). |
| | | > The list is in |
| | | > display order. |
| | | > |
| | | > Read only. Use |
| | | > [[registerInsp |
| | | ectorPanel()]{.under |
| | | line}](#_bookmark50) |
| | | > and |
| | | > [[unregisterInsp |
| | | ectorPanel()]{.under |
| | | line}](#_bookmark56) |
| | | > to modify the |
| | | > list. |
+----------------------+----------------------+----------------------+
| language | > String | > The display name |
| | | > of the language |
| | | > for the current |
| | | > locale, as |
| | | > configured by the |
| | | > operating system. |
| | | > This is the name |
| | | > as it appears in |
| | | > the Preferences |
| | | > dialog. Read only. |
+----------------------+----------------------+----------------------+

+-------------------------+---------------+-------------------------+
| lastSender | > String | > The application |
| | | > specifier for the |
| | | > application that has |
| | | > most recently sent an |
| | | > interapplication |
| | | > message to Adobe |
| | | > Bridge. |
+=========================+===============+=========================+
| locale | > String | > The Adobe locale code |
| | | > for the current |
| | | > locale, as configured |
| | | > by the operating |
| | | > system. Read only. |
| | | > |
| | | > An Adobe locale code |
| | | > consists of a |
| | | > 2-letter ISO-639 |
| | | > language code and an |
| | | > optional 2-letter ISO |
| | | > 3166 country code |
| | | > separated by an |
| | | > underscore. Case is |
| | | > significant. For |
| | | > example, en_US, |
| | | > en_UK, ja_JP, |
| | | > de_DE, fr_FR. |
+-------------------------+---------------+-------------------------+
| name | > String | > The application |
| | | > specifier for this |
| | | > application, |
| | | > |
| | | > \"bridge\". Read |
| | | > only. |
+-------------------------+---------------+-------------------------+
| pendingJobs | > Number | > The number of |
| | | > background tasks that |
| | | > Adobe Bridge has left |
| | | > to process. |
| | | > Background tasks are |
| | | > started for |
| | | > asynchronous |
| | | > operations, such as |
| | | > metadata extraction |
| | | > from thumbnails, or |
| | | > exporting the cache |
| | | > with |
| | | > app.[[b |
| | | uildFolderCache()]{.und |
| | | erline}](#_bookmark38). |
| | | > When all tasks have |
| | | > been started, this |
| | | > value is 0. Read |
| | | > only. |
| | | > |
| | | > **NOTE:** The 0 value |
| | | > does not mean that |
| | | > all jobs have |
| | | > completed. The |
| | | > application might |
| | | > still be building the |
| | | > cache after no more |
| | | > jobs are pending. To |
| | | > determine if the |
| | | > cache is complete, |
| | | > monitor the cache |
| | | > size to see when it |
| | | > stops growing or |
| | | > simply check if |
| | | > isProcessingJob() |
| | | > returns false. |
+-------------------------+---------------+-------------------------+
| []{#\_bookmark31 | > Preferences | > The [[Preferences |
| .anchor}preferences | | > Object]{.underline} |
| | | ](#preferences-object), |
| | | > which provides access |
| | | > to the user |
| | | > preferences shown in |
| | | > the Preferences |
| | | > dialog (invoked from |
| | | > the **Edit \> |
| | | > Preferences** |
| | | > command). Read only. |
+-------------------------+---------------+-------------------------+
| []{#\_bookmark32 | > Boolean | > When true, Adobe |
| .anchor}synchronousMode | | > Bridge attempts to |
| | | > ensure that all |
| | | > Thumbnail properties |
| | | > are valid before |
| | | > returning their |
| | | > values. This is |
| | | > particularly |
| | | > important when |
| | | > accessing or setting |
| | | > metadata. |
| | | > |
| | | > Scripts (other than |
| | | > node handlers) |
| | | > typically need to set |
| | | > synchronous mode to |
| | | > true. Default is |
| | | > false, for |
| | | > performance reasons. |
| | | > The value of false is |
| | | > automatically |
| | | > restored when a |
| | | > script has completed. |
+-------------------------+---------------+-------------------------+
| standardFavorites | > Favorites | > This Favorites object |
| | | > contains an array of |
| | | > Thumbnail objects for |
| | | > the nodes shown in |
| | | > the Standard section |
| | | > of the Favorites |
| | | > palette. |
+-------------------------+---------------+-------------------------+
| userFavorites | > Favorites | > This Favorites object |
| | | > contains an array of |
| | | > Thumbnail objects for |
| | | > the nodes shown in |
| | | > the User section of |
| | | > the Favorites |
| | | > palette. |
+-------------------------+---------------+-------------------------+

+------------------+-------------------+-----------------------------+
| version | > String | > The version number of the |
| | | > Adobe Bridge application. |
| | | > Read only. |
+==================+===================+=============================+
| watchDirInterval | > Number | > The duration in seconds |
| | | > between checks for folder |
| | | > consistency (checking |
| | | > whether files have been |
| | | > added or removed). |
+------------------+-------------------+-----------------------------+
| workspaces | > Array of Object | > The list of all available |
| | | > workspaces, both default |
| | | > and user- or |
| | | > script-defined. Each |
| | | > workspace is a JavaScript |
| | | > object with two |
| | | > properties, id and name, |
| | | > specifying the unique |
| | | > identifier and the |
| | | > localized display name; |
| | | > see |
| | | > Document.[workspace](#_bookmark91). |
| | | > Read only. |
+------------------+-------------------+-----------------------------+

### App functions

+----------------------------------+----------------------------------+
| acquirePhysicalFiles() | > For each specified thumbnail, |
| app.acquirePhysicalFiles | > if it refers to a resource |
| (_thumbnails_) | > that does not have a local |
| | > copy (such as the files |
| | > referenced by AdobeDrive |
| | > nodes), downloads the |
| | > resource. |
| | > |
| | > **NOTE:** For efficiency, make |
| | > one call for all files to be |
| | > processed, rather than calling |
| | > repeatedly. |
| | > |
| | > Returns true on success. |
+==================================+==================================+
| > _thumbnails_ | > An array of [Thumbnail |
| | > Object](#thumbnail-object)s. |
+----------------------------------+----------------------------------+
| addCollectionMember() | > Adds a member thumbnail, or |
| app.addCollection (_collection, | > set of member thumbnails, to a |
| member_) | > collection. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _collection_ | > The [[Thumbnail]{.underline} |
| | > [Object] |
| | {.underline}](#thumbnail-object) |
| | > for the collection node, as |
| | > returned by |
+----------------------------------+----------------------------------+
| | > app.[[createCollectio |
| | n()]{.underline}](#_bookmark40). |
+----------------------------------+----------------------------------+
| > _member_ | > A [[Thumbnail]{.underline} |
| | > [Object] |
| | {.underline}](#thumbnail-object) |
| | > or array of [Thumbnail |
| | > Object](#thumbnail-object)s |
| | > to be added to the |
+----------------------------------+----------------------------------+
| | > collection. |
+----------------------------------+----------------------------------+
| []{#\_bookmark35 | > Appends a text string to the |
| .anchor}addCredits() | > Credits area of the Adobe |
| | > Bridge About box. |
| app.addCredits (_title, | > |
| content_) | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _title_ | > The unique identifying name of |
| > | > this addition. |
| > _content_ | > |
| | > The localizable text string. |
+----------------------------------+----------------------------------+
| []{#\_bookmark36 | > Appends a custom URI to the |
| .anchor}addCustomRoot() | > list of root nodes in |
| | > app.folderRoots, which appear |
| app.addCustomRoot (_uri_) | > in the Folders pane. Used by |
| | > script-defined node handlers. |
| | > |
| | > Returns true on success. |
+----------------------------------+----------------------------------+
| > _uri_ | > The Bridge URI string. |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| []{#\_bookmark37 | > Appends a text string to the |
| .anchor}addLegalNotice() | > Legal Notice area of the Adobe |
| app.addLegalNotice (_title, | > Bridge About box. |
| content_) | > |
| | > Returns undefined. |
+==================================+==================================+
| > _title_ | > The unique identifying name of |
| > | > this addition. |
| > _content_ | > |
| | > The localizable text string. |
+----------------------------------+----------------------------------+
| beep() | > Calls on the operating system |
| | > to emit a short audio tone. |
| app.beep () | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| bringToFront() | > Gives Adobe Bridge the |
| | > operating system application |
| app.bringToFront () | > focus, and brings the current |
| | > browser window to the front in |
| | > the windowing system. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| []{#\_bookmark38 | > Forces Adobe Bridge to create |
| .anchor}buildFolderCache() | > thumbnail images for the |
+----------------------------------+----------------------------------+
| > app.buildFolderCache | > specified folder. These are |
| | > stored in a cache file in the |
+----------------------------------+----------------------------------+
| > (_path\[, recurse, quality,_ | > folder to which they apply. |
| > | |
| > _buildFullSize\]_ | |
+----------------------------------+----------------------------------+
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _path_ | > The folder. An ExtendScript |
| | > Folder object, |
| | > [[Thumbnail]{.underline} |
| | > [Object] |
| | {.underline}](#thumbnail-object) |
| | > for a folder, or Bridge URI |
| | > path string. If this specifies |
| | > a file, the cache is built for |
| | > the containing folder. |
+----------------------------------+----------------------------------+
| > _recurse_ | > Optional in Adobe Bridge 1.0, |
| | > not used in Adobe Bridge 2.0. |
| | > Boolean. Cache building is |
| | > always recursive; pass true. |
+----------------------------------+----------------------------------+
| > _quality_ | > Optional. String. Whether to |
| | > create low or high quality |
| | > thumbnail images. One of the |
| | > strings \"quick\" (the |
| | > default) or \"highQuality\". |
+----------------------------------+----------------------------------+
| > _buildFullSize_ | > Optional. Boolean. Whether to |
| | > export full-size images to |
| | > cache folder. This matches |
| | > what happens when users select |
| | > \"Generate 100% previews\" in |
| | > the Bridge window. |
+----------------------------------+----------------------------------+
| []{#\_bookmark39 | > Cancels a task that has been |
| .anchor}cancelTask() | > scheduled using |
| | > [[scheduleTas |
| app.cancelTask (_taskId_) | k()]{.underline}](#_bookmark52). |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _taskId_ | > The task ID number, as |
| | > returned from |
| | > app.scheduleTask(). |
+----------------------------------+----------------------------------+
| []{#\_bookmark40 | > Creates a new, named |
| .anchor}createCollection() | > collection node. |
| | > |
| app.createCollection (_name_) | > Returns the [[Thumbnail |
| | > Object] |
| | {.underline}](#thumbnail-object) |
| | > for the new node. Use this to |
| | > access the collection |
| | > programmatically. |
+----------------------------------+----------------------------------+
| > _name_ | > The name of the new |
| | > collection. If a collection |
| | > with this name already exists, |
| | > a unique name is generated |
| | > using this string. |
+----------------------------------+----------------------------------+
| createSmartCollection() | > Creates a new, named smart |
| app.createSmartCollection (name, | > collection node. |
| scope, searchSpec) | > |
| | > Returns the Thumbnail Object |
| | > for the new node. Use this to |
| | > access the collection |
| | > programmatically |
+----------------------------------+----------------------------------+

name

scope

> The name of the new smart collection. If a collection with this name
> already exists, a unique name is generated using this string.
>
> A Thumbnail Object for the target container node.
>
> searchSpec
>
> deleteCollection()
>
> A SearchSpecification Object used to generate the search result.
>
> Deletes a collection node.
>
> app.deleteCollection (_collection_)
>
> Returns true on success.
>
> _collection_ The [ThumbnailObject](#thumbnail-object) for the collection node, as
> returned by

app.[[createCollection()]{.underline}](#_bookmark40).

> deleteSmartCollection() app.deleteSmartCollection (_collection_)
>
> Deletes a smart collection node. Returns true on success.
>
> _collection_
>
> []{#\_bookmark41 .anchor}enqueueOperation()
>
> The Thumbnail Object for the collection node, as returned by
> app.createSmartCollection().
>
> Enqueues a long-running node-handling operation for
>
> app.enqueueOperation(_operator_)
>
> execution at an appropriate time. Returns undefined.
>
> _operator_ The [OperatorClass](#operator-class) instance that encapsulates the
> operation, returned by an

[ExtensionModelObject](#extensionmodel-object) method.

> exportKeywordsToFile() app.exportKeywordsToFile (_keywordsFile_)
>
> Exports the keywords in the Keywords palette to a file. This is the
> same as choosing Export from the flyout menu in the Keywords palette.
>
> Returns undefined.
>
> _keywordsFile_ The file, specified as a path string or ExtendScript
> File object.
>
> getCollectionMembers() app.getCollectionMembers (_collection_)
>
> Retrieves the collection members for a collection node.
>
> Returns an array of [Thumbnail
> Object](#thumbnail-object)s for the collection members.
>
> _collection_ The [ThumbnailObject](#thumbnail-object) for the collection node, as
> returned by

app.[[createCollection()]{.underline}](#_bookmark40).

> getCollections()
>
> app.getCollections ()
>
> getSmartCollections()
>
> app.getSmartCollections ()
>
> Retrieves all collection nodes, as created with
> [[createCollection()]{.underline}](#_bookmark40).
>
> Returns an array of [Thumbnail
> Object](#thumbnail-object)s for the collection nodes.
>
> Retrieves all smart collection nodes, as created with
> createSmartCollection().
>
> Returns an array of Thumbnail Objects for the collection nodes.

+----------------------------------+----------------------------------+
| hide() | > Hides or minimizes all Adobe |
| | > Bridge browser windows. |
| app.hide () | |
| | - In Mac OS, performs the |
| | > platform-specific hide |
| | > gesture. |
| | |
| | - In Windows, does the |
| | > equivalent of |
| | |
| | > app.document.minimize(). |
| | > |
| | > Returns undefined. |
+==================================+==================================+
| importKeywordsFromFile() | > Imports the keywords from a |
| app.exportKeywordsFromFile | > file into the Keywords |
| (_keywordsFile_\[, | > palette. This is the same as |
| _importType_\]) | > choosing Import from the |
| | > flyout menu in the Keywords |
| | > palette. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _keywordsFile importType_ | > The file, specified as a path |
| | > string or ExtendScript File |
| | > object. |
| | > |
| | > Optional. How to handle |
| | > existing keywords in the |
| | > palette. One of these strings: |
| | > |
| | > **c |
| | learExistingKeywords**---Replace |
| | > existing keywords in the |
| | > palette. |
| | > **mergeWithExistingKeywords** |
| | > (default)---Merge the imported |
| | > keywords with any existing |
| | > keywords in the palette. |
+----------------------------------+----------------------------------+
| isCollectionMember() | > Reports whether a given |
| app.isCollectionMember | > thumbnail is a member of a |
| (_collection, member_) | > given collection. |
| | > |
| | > Returns true if the thumbnail |
| | > is a member. |
+----------------------------------+----------------------------------+
| > _collection_ | > The [[Thumbnail]{.underline} |
| > | > [Object] |
| > _member_ | {.underline}](#thumbnail-object) |
| | > for the collection node, as |
| | > returned by |
| | > |
| | > app.[[createCollectio |
| | n()]{.underline}](#_bookmark40). |
| | > |
| | > The [[Thumbnail]{.underline} |
| | > [Object] |
| | {.underline}](#thumbnail-object) |
| | > for the node to be tested. |
+----------------------------------+----------------------------------+
| isProcessingJob() | > Whether Adobe Bridge is |
| | > processing any task. |
| app.isProcessingJob () | > |
| | > Returns false if all the jobs |
| | > are finished. |
+----------------------------------+----------------------------------+
| makeSearch() app.makeSearch | > Adobe Bridge passes the search |
| (_scope_, _searchSpec_) | > specification to execute a |
| | > search and returns a |
| | > [[Thumbnail]{.underline} |
| | > [Object] |
| | {.underline}](#thumbnail-object) |
| | > which represents a |
| | > search-result container node. |
| | > Users can access the children |
| | > property of the |
| | > [[Thumbnail]{.underline} |
| | > [Object] |
| | {.underline}](#thumbnail-object) |
| | > to get all matched nodes. |
+----------------------------------+----------------------------------+
| > _scope_ | > A [[Thumbnail]{.underline} |
| > | > [Object] |
| > _searchSpec_ | {.underline}](#thumbnail-object) |
| | > for the target container node. |
| | > |
| | > A [SearchSpecification |
| | > Object](#searchspecification-object) |
| | > used to generate this search |
| | > result. |
+----------------------------------+----------------------------------+
| openUrl() | > Opens a page in the platform's |
| | > default web browser. |
| app.openUrl (_url_) | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _url_ | > The URL for the page to open. |
+----------------------------------+----------------------------------+

+----------------------+----------------------+----------------------+
| []{#\_bookmark42 | > (_operator_) | > Notifies Adobe |
| .ancho | | > Bridge of an |
| r}operationChanged() | | > update to the |
| | | > processing status |
| app.operationChanged | | > or progress of a |
| | | > long-running |
| | | > background |
| | | > operation |
| | | > implemented by a |
| | | > [[ProgressO |
| | | perator]{.underline} |
| | | > [Object] |
| | | {.underline}](#progr |
| | | essoperator-object). |
| | | > |
| | | > Adobe Bridge |
| | | > queries the object |
| | | > to find the |
| | | > current status and |
| | | > update the UI as |
| | | > appropriate. |
| | | > |
| | | > Returns undefined. |
+======================+======================+======================+
| > _operator_ | > The | |
| | > [O | |
| | perator]{.underline} | |
| | > [Class](#operator-class) | |
| | > instance that | |
| | > encapsulates the | |
| | > operation, | |
| | > returned by an | |
| | > [Extensi | |
| | onModel]{.underline} | |
| | > [Obje | |
| | ct](#ex | |
| | tensionmodel-object) | |
| | > method. | |
+----------------------+----------------------+----------------------+
| []{#\_bookmark43 | > Purges the | |
| .anc | > thumbnail caches | |
| hor}purgeAllCaches() | > for all folders. | |
| | > See also | |
| app.purgeAllCaches | > [[buildF | |
| () | olderCache()]{.under | |
| | line}](#_bookmark38) | |
| | > and | |
| | > [[purgeFo | |
| | lderCache()]{.underl | |
| | ine}](#_bookmark44). | |
| | > | |
| | > Returns undefined. | |
+----------------------+----------------------+----------------------+
| []{#\_bookmark44 | > Purges the | |
| .ancho | > thumbnail caches | |
| r}purgeFolderCache() | > for the specified | |
| app.purgeFolderCache | > folder. See also | |
| (\[_path_\]) | > [[buildF | |
| | olderCache()]{.under | |
| | line}](#_bookmark38) | |
| | > and | |
| | > [[purge | |
| | AllCaches()]{.underl | |
| | ine}](#_bookmark43). | |
| | > | |
| | > Returns undefined. | |
+----------------------+----------------------+----------------------+
| > _path_ | > Optional. The | |
| | > folder to purge. | |
| | > An ExtendScript | |
| | > Folder object, | |
| | > [[Th | |
| | umbnail]{.underline} | |
| | ](#thumbnail-object) | |
| | > [ | |
| | [Object]{.underline} | |
| | ](#thumbnail-object) | |
| | > for a folder, or | |
| | > Bridge URI path | |
| | > string. If this | |
| | > specifies a file, | |
| | > the cache is | |
| | > purged for the | |
| | > containing folder. | |
| | > If not supplied, | |
| | > purges all folder | |
| | > caches. | |
+----------------------+----------------------+----------------------+
| []{#\_bookmark45 | > Shuts down the | |
| .anchor}quit() | > Adobe Bridge | |
| | > application. All | |
| app.quit () | > browser windows | |
| | > are closed. | |
| | > | |
| | > Returns undefined. | |
+----------------------+----------------------+----------------------+
| [[]{#\_bookmark47 | > Adds a | |
| .a | > script-defined | |
| nchor}]{#\_bookmark46 | > node-handling | |
| .anchor | > extension to the | |
| }registerExtension() | > application's list | |
| | > of available | |
| a | > handlers. | |
| pp.registerExtension | > | |
| (_handler_) | > Returns true on | |
| | > success, false if | |
| | > there is an | |
| | > existing extension | |
| | > with the same | |
| | > name. | |
+----------------------+----------------------+----------------------+
| > _handler_ | > The | |
| | > [[Extension | |
| | Handler]{.underline} | |
| | > [Object] | |
| | {.underline}](#exten | |
| | sionhandler-object). | |
+----------------------+----------------------+----------------------+
| [[]{#\_bookmark49 | > Declares a new | |
| .a | > node-data | |
| nchor}]{#\_bookmark48 | > information set, | |
| .anch | > associating it | |
| or}registerInfoset() | > with a | |
| app.registerInfoset | > node-handling | |
| (_handler_, | > extension. Sets | |
| _infoset_) | > can be associated | |
| | > with multiple | |
| | > handlers. All | |
| | > handlers must | |
| | > support the core | |
| | > sets. Registering | |
| | > a set makes the | |
| | > defined properties | |
| | > available to node | |
| | > display code. | |
| | > | |
| | > Returns true on | |
| | > success. | |
+----------------------+----------------------+----------------------+
| > _handler_ | > The | |
| > | > [[Extension | |
| > *infoset* | Handler]{.underline} | |
| | > [Object] | |
| | {.underline}](#exten | |
| | sionhandler-object). | |
| | > | |
| | > The [Infoset | |
| | > Object](#infoset-object). | |
+----------------------+----------------------+----------------------+

+----------------------------------+----------------------------------+
| []{#\_bookmark50 | > Registers a script-defined |
| .anchor}registerInspectorPanel() | > Inspector panel, adding it to |
| | > app.[inspectorPan |
| app.registerInspectorPanel | els](#_bookmark30). |
| (_panel_) | > This panel appears in the |
| | > Inspector palette unless the |
| | > selected thumbnail explicitly |
| | > disallows it. |
| | > |
| | > Returns undefined. |
+==================================+==================================+
| > _panel_ | > The [InspectorPanel |
| | > Object](#inspectorpanel-object). |
+----------------------------------+----------------------------------+
| []{#\_bookmark51 | > Associates a URI prefix string |
| .anchor}registerPrefix() | > with a node-handling |
| app.registerPrefix (_prefix_, | > extension. The prefix |
| _handler_) | > identifies a node type managed |
| | > by the handler. Handlers can |
| | > register multiple prefixes. |
| | > |
| | > Returns true on success. |
+----------------------------------+----------------------------------+
| > _prefix_ | > The prefix string, which must |
| > | > contain only ASCII characters. |
| > _handler_ | > |
| | > The |
| | > |
| | [ExtensionHandler]{.underline} |
| | > [Object](#extensionhandler-object). |
+----------------------------------+----------------------------------+
| removeCollectionMember() | > Removes one or more member |
| app.removeCollectionMember | > thumbnails from a collection. |
| (_collection, member_) | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _collection_ | > The [[Thumbnail]{.underline} |
| > | > [Object] |
| > _member_ | {.underline}](#thumbnail-object) |
| | > for the collection node, as |
| | > returned by |
| | > |
| | > app.[[createCollectio |
| | n()]{.underline}](#_bookmark40). |
| | > |
| | > The [[Thumbnail]{.underline} |
| | > [Object] |
| | {.underline}](#thumbnail-object) |
| | > or array of [Thumbnail |
| | > Object](#thumbnail-object)s |
| | > for the member or members to |
| | > be removed. |
+----------------------------------+----------------------------------+
| removeCredits() | > Removes a text string from the |
| | > Credits area of the Adobe |
| app.removeCredits (_title_) | > Bridge About box. The string |
| | > must have been previously |
| | > added with |
| | > [[addCredit |
| | s()]{.underline}](#_bookmark35). |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _title_ | > The unique identifying name of |
| | > the addition to remove. |
+----------------------------------+----------------------------------+
| removeLegalNotice() | > Removes a text string from the |
| | > Legal Notice area of the Adobe |
| app.removeLegalNotice (_title_) | > Bridge About box. The string |
| | > must have been previously |
| | > added with |
| | > [[addLegalNotic |
| | e()]{.underline}](#_bookmark37). |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _title_ | > The unique identifying name of |
| | > the addition to remove. |
+----------------------------------+----------------------------------+
| renameCollection() | > Renames a collection. |
| app.renameCollection | > |
| (_collection, name_) | > Returns true on success. |
+----------------------------------+----------------------------------+
| > _collection_ | > The [[Thumbnail]{.underline} |
| > | > [Object] |
| > _name_ | {.underline}](#thumbnail-object) |
| | > for the collection node, as |
| | > returned by |
| | > |
| | > app.[[createCollectio |
| | n()]{.underline}](#_bookmark40). |
| | > |
| | > The new name of the |
| | > collection. If a collection |
| | > with this name already exists, |
| | > a unique name is generated |
| | > using this string. |
+----------------------------------+----------------------------------+
| renameSmartCollection() | > Renames a smart collection. |
| app.renameSmartCollection | > |
| (_collection, name_) | > Returns true on success. |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| > _collection_ | > The [[Thumbnail]{.underline} |
| > | > [Object] |
| > _name_ | {.underline}](#thumbnail-object) |
| | > for the collection node, as |
| | > returned by |
| | > |
| | > app.createSmartCollection(). |
| | > |
| | > The new name of the |
| | > collection. If a collection |
| | > with this name already exists, |
| | > a unique name is generated |
| | > using this string. |
+==================================+==================================+
| runSlideshow() app.runSlideshow | > Loads a set of files or |
| (_sources_) | > thumbnails as a slideshow, |
| | > using the Preference options |
| | > currently set for Adobe |
| | > Bridge. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _sources_ | > An array of [Thumbnail |
| | > Object](#thumbnail-object)s |
| | > or file path strings. |
+----------------------------------+----------------------------------+
| [[]{#\_bookmark53 | > Executes a script after a |
| .anchor}]{#\_bookmark52 | > specified delay. The script |
| .anchor}scheduleTask() | > can be executed repeatedly, |
| app.scheduleTask (_script, | > stopping when it returns |
| delay_\[, _repeat_\]) | > undefined, or when you cancel |
| | > the task using |
| | > [[cancelTas |
| | k()]{.underline}](#_bookmark39). |
| | > |
| | > Returns the task ID number, |
| | > which can be used to cancel |
| | > the scheduled task. |
| | > |
| | > See the _Adobe Bridge |
| | > JavaScript Guide_ and Adobe |
| | > Bridge SDK for examples. |
+----------------------------------+----------------------------------+
| > _script_ | > A string containing the script |
| > | > to be run. |
| > _delay_ | > |
| > | > **NOTE:** If this script needs |
| > _repeat_ | > to load another script, do not |
| | > use the JavaScript eval() |
| | > function; instead use the |
| | > ExtendScript \$.evalFile() |
| | > function. See the _JavaScript |
| | > Tools Guide_. |
| | > |
| | > A number of milliseconds to |
| | > wait before executing the |
| | > script. If 0, waits the |
| | > default number of |
| | > milliseconds, which is 10. |
| | > |
| | > Optional. When true, execute |
| | > the script repeatedly after |
| | > each elapsed delay. Stops when |
| | > a script execution returns |
| | > undefined, or when this task |
| | > is cancelled by calling |
| | > app.[[cancelTas |
| | k()]{.underline}](#_bookmark39). |
| | > Default is false, which means |
| | > execute the script only once. |
+----------------------------------+----------------------------------+
| system() | > Issues the argument to the |
| | > operating system, as if it |
| app.system (_commandLine_) | > were entered on the command |
| | > line in a shell. Control does |
| | > not return to Adobe Bridge |
| | > until this function returns. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _commandLine_ | > The command to pass to the |
| | > operating system. |
+----------------------------------+----------------------------------+
| []{#\_bookmark54 | > Removes a node-handling |
| .anchor}unregisterExtension() | > extension, previously |
| | > registered with |
| app.unregisterExtension | > [[registerExtensio |
| (_handler_) | n()]{.underline}](#_bookmark46), |
| | > from the application's global |
| | > list. |
| | > |
| | > Returns true on success. |
+----------------------------------+----------------------------------+
| > _handler_ | > The |
| | > |
| | [ExtensionHandler]{.underline} |
| | > [Object](#extensionhandler-object). |
+----------------------------------+----------------------------------+
| []{#\_bookmark55 | > Removes the association |
| .anchor}unregisterInfoset() | > between an extension and an |
| app.unregisterInfoset | > information set, previously |
| (_handler_, _infoset_) | > established with |
| | > [[registerInfose |
| | t()]{.underline}](#_bookmark48). |
| | > |
| | > Returns true on success. |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| > _handler_ The | |
| > | |
| [ExtensionHandler]{.underline} | |
| > [Object](#extensionhandler-object). | |
| > | |
| > _infoset_ The [Infoset | |
| > Object | |
| ](#infoset-object). | |
+==================================+==================================+
| []{#\_bookmark56 | > Removes a script-defined |
| .a | > Inspector panel from the |
| nchor}unregisterInspectorPanel() | > global list in |
| app.unregisterInspectorPanel | > app.[[inspectorPan |
| (_panel_) | els]{.underline}](#_bookmark30). |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _panel_ The [InspectorPanel | |
| > Object](#inspectorpanel-object). | |
+----------------------------------+----------------------------------+
| []{#\_bookmark57 | > Removes a node URI prefix from |
| .anchor}unregisterPrefix() | > the list of prefixes that the |
| app.registerInfoset (_prefix, | > associated node-handling |
| handler_) | > extension manages. |
| | > |
| | > Returns true on success. |
+----------------------------------+----------------------------------+
| > _prefix_ The prefix string. | |
| > | |
| > _handler_ The | |
| > | |
| [ExtensionHandler]{.underline} | |
| > [Object](#extensionhandler-object). | |
+----------------------------------+----------------------------------+

## BitmapData Object

> []{#\_bookmark60 .anchor}Represents an image as a matrix of pixels,
> described by four channels: red, green, blue, and an "alpha" channel
> that represents the opacity of the pixel. Each channel stores a number
> between 0 and 255. For the color channels, 0 means an absence of that
> color and 255 means the maximum amount of that color. For the alpha
> channel, 0 means the pixel is completely transparent and 255 means it
> is completely opaque.
>
> This object allows direct manipulation of the pixels in memory. They
> are assumed to be stored in
>
> row-major order, with consecutive bytes for red, green, blue, and
> alpha channel. Each row may have some padding at the end, and the
> total width of a row, in bytes, is represented by rowBytes.
>
> The maximum width and maximum height of a BitmapData object is 8192
> pixels.

### BitmapData object constructors

> There are three forms for the constructor:
>
> new BitmapData (_width_, _height_, _transparent_\*, _fillColor_\*) new
> BitmapData (_file_\[, _preserveColorProfile_\])
>
> new BitmapData (_width_, _height_, _transparent_, _rowBytes_, _data_)
>
> Arguments for the first form:

+-------------+-----------+------------------------------------------+
| width | > Number | > Image width in pixels. |
+=============+===========+==========================================+
| height | > Number | > Image height in pixels. |
+-------------+-----------+------------------------------------------+
| transparent | > Boolean | > Optional, true to support per-pixel |
| | | > transparency. Default is true. |
+-------------+-----------+------------------------------------------+
| fillColor | > Color | > Optional, the fill color. Can be the |
| | | > object, or any of the valid |
| | | > constructors of a Color object; for |
| | | > example, the string "\#FF4450" or the |
| | | > integer 0xFF4450. |
| | | > |
| | | > Default is Black. |
+-------------+-----------+------------------------------------------+

> Argument for the second form:

+----------------------+------------------+------------------------+
| file | > String or File | > The path or File |
| | | > object for an image |
| | | > file. |
+======================+==================+========================+
| preserveColorProfile | > Boolean | > Optional. True to |
| | | > preserve the |
| | | > embedded color |
| | | > profile, if any. If |
| | | > none is present, or |
| | | > if not supplied, |
| | | > embeds the default |
| | | > sRGB profile. |
| | | > |
| | | > **NOTE:** ACR cannot |
| | | > be used with a |
| | | > preserved embedded |
| | | > profile; it returns |
| | | > all images with an |
| | | > sRGB profile which |
| | | > would conflict with |
| | | > the desired color |
| | | > profile behavior. If |
| | | > you choose to |
| | | > preserve the |
| | | > embedded profile, |
| | | > the standard JPEG or |
| | | > TIFF libraries are |
| | | > used, even if the |
| | | > thumbnail preference |
| | | > \"Use ACR for JPEG |
| | | > and TIFF\" is set. |
+----------------------+------------------+------------------------+

> Arguments for the third form:

+-------------+--------------------------+--------------------------+
| width | > Number | > Image width in pixels. |
+=============+==========================+==========================+
| height | > Number | > Image height in |
| | | > pixels. |
+-------------+--------------------------+--------------------------+
| transparent | > Boolean | > True to support |
| | | > per-pixel |
| | | > transparency. |
+-------------+--------------------------+--------------------------+
| rowBytes | > Number | > The length in bytes of |
| | | > a row of pixels in the |
| | | > supplied data. |
+-------------+--------------------------+--------------------------+
| data | > Number or Array of | > The memory address of |
| | > Number | > an ARGB pixel buffer, |
| | | > a 32-bit integer or an |
| | | > array of two 32-bit |
| | | > integers. |
+-------------+--------------------------+--------------------------+

### BitmapData properties

+-------------+-------------------+----------------------------------+
| checksum | > Number | > A 32-bit Adler checksum of the |
| | | > image data: use to compare two |
| | | > object to see if they |
| | | > represent the same image. Read |
| | | > only. |
+=============+===================+==================================+
| height | > Number | > Image height in pixels. Read |
| | | > only. |
+-------------+-------------------+----------------------------------+
| pointer | > Number | > A pointer to the buffer |
| | | > storing the matrix of pixels. |
| | | > Read only. |
+-------------+-------------------+----------------------------------+
| rectangle | > Array of Number | > The rectangle that defines the |
| | | > size of the bitmap image, in |
| | | > the format \[0, 0, w, h\]. |
| | | > Origin is top left. Read only. |
+-------------+-------------------+----------------------------------+
| rowBytes | > Number | > The length in bytes of a row |
| | | > of pixels. |
| | | > |
| | | > This provides the offset from |
| | | > a given pixel to the pixel |
| | | > immediately below it, allowing |
| | | > for padding at the end of each |
| | | > line. Because a pixel is |
| | | > typically represented by 4 |
| | | > bytes, the value is usually |
| | | > around 4 times bigger than the |
| | | > width in pixels. |
| | | > |
| | | > Typically, rows are padded to |
| | | > multiples of 4, sometimes 16. |
| | | > For example, if a bitmap is 3 |
| | | > pixels wide, width is 3, and |
| | | > rowBytes could be 12 or 16. |
| | | > |
| | | > Read only. |
+-------------+-------------------+----------------------------------+
| transparent | > Boolean | > True if the bitmap image |
| | | > supports per-pixel |
| | | > transparency. Read only. |
+-------------+-------------------+----------------------------------+
| width | > Number | > Image width in pixels. Read |
| | | > only. |
+-------------+-------------------+----------------------------------+

### BitmapData functions

+----------------------------------+----------------------------------+
| clone() | > Duplicates this object, |
| | > creating a new object with an |
| _bitmapDataObj_.clone () | > exact copy of the contained |
| | > bitmap. |
| | > |
| | > Returns the BitmapData object. |
+==================================+==================================+
| dispose() | > Explicitly frees the memory |
| | > used to store pixel data for |
| _bitmapDataObj_.dispose () | > this object. If not called, |
| | > the JavaScript garbage |
| | > collector eventually frees the |
| | > memory when there are no |
| | > references remaining. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| exportTo() | > Writes the image data to a |
| _bitmapDataObj_.exportTo | > file in JPEG format. Returns |
| (_path_\[, _jpegQuality_\]) | > undefined. |
| | > |
| | > **NOTE:** If you create a JPG |
| | > file with this method in a |
| | > folder that is already |
| | > displayed in the browser |
| | > window, for certain file |
| | > systems the browser may not |
| | > update the display. In this |
| | > case, the script should call |
| | > [[verifyExternalChange |
| | s()]{.underline}](#_bookmark268) |
| | > for any currently displayed |
| | > thumbnail, to ensure that the |
| | > browser updates to display the |
| | > generated file. |
+----------------------------------+----------------------------------+
| > _path_ An ExtendScript File | |
| > object for the target file. | |
| > Creates the file if it does | |
| > not exist, or overwrites an | |
| > existing file. It is | |
| > recommended that the file name | |
| > have an extension of \".jpg\". | |
| > | |
| > _jpegQuality_ Optional. The | |
| > quality of the image. A number | |
| > in the range \[0..100\] where | |
| > 100 is the highest quality | |
| > image and largest file size, | |
| > and lower values indicate more | |
| > compression, lossier image, | |
| > and smaller file size. Default | |
| > is 60 (equivalent to Photoshop | |
| > quality 7). | |
+----------------------------------+----------------------------------+
| getPixel() | > Retrieves the color data for a |
| _bitmapDataObj_.getPixel (_x_, | > specific pixel from the image. |
| _y_) | > If the transparent property |
| | > for this object is true, the |
| | > returned color number is |
| | > pre-multiplied. |
| | > |
| | > Returns an integer that |
| | > represents the ARGB pixel |
| | > value. This can be used to |
| | > create a [Color]{.underline} |
| | > [Obje |
| | ct](#color-object). |
+----------------------------------+----------------------------------+
| > _x, y_ The pixel coordinates | |
| > relative to this bitmap's | |
| > origin, the top left. | |
+----------------------------------+----------------------------------+
| getPixel32() | > Retrieves the color data for a |
| _bitmapDataObj_.getPixel32 (_x_, | > specific pixel from the image, |
| _y_) | > including its alpha channel. |
| | > |
| | > Returns an integer that |
| | > represents the ARGB pixel |
| | > value. This can be used to |
| | > create a [Color]{.underline} |
| | > [Obje |
| | ct](#color-object). |
+----------------------------------+----------------------------------+
| > _x, y_ | > The pixel coordinates relative |
| | > to this bitmap's origin, the |
| | > top left. |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| loadFromJpegStream() | > Loads the JPEG stream at a |
| _b | > memory address into this |
| itmapDataObj_.loadFromJpegStream | > object, replacing the previous |
| (_data_, _dataSize_) | > content. The object is |
| | > resized, if necessary. |
| | > |
| | > Returns undefined. |
+==================================+==================================+
| > _data_ | > The address of the data |
| > | > stream, a 32-bit value or an |
| > _dataSize_ | > array of two elements |
| | > containing the low word and |
| | > high word of a 64-bit address. |
| | > |
| | > The length of the data buffer |
| | > in bytes. |
+----------------------------------+----------------------------------+
| loadFromPngStream() | > Loads the PNG stream at a |
| _ | > memory address into this |
| bitmapDataObj_.loadFromPngStream | > object, replacing the previous |
| (_data_, _dataSize_) | > content. The object is |
| | > resized, if necessary. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _data_ | > The address of the data |
| > | > stream, a 32-bit value or an |
| > _dataSize_ | > array of two elements |
| | > containing the low word and |
| | > high word of a 64-bit address. |
| | > |
| | > The length of the buffer in |
| | > bytes. |
+----------------------------------+----------------------------------+
| resize() _bitmapDataObj_.resize | > Resizes the bitmap to the |
| (_dimension_\[, _quality_\]) | > specified dimensions. The |
| | > target dimensions must be |
| | > smaller than the largest of |
| | > the current bitmap dimensions. |
| | > |
| | > Returns a new BitmapData |
| | > object whose sides are no |
| | > greater than the specified |
| | > dimensions, or undefined if |
| | > the object already satisfies |
| | > this condition. |
+----------------------------------+----------------------------------+
| > _dimension_ | > The desired edge size, in |
| > | > pixels, of the resized image. |
| > _quality_ | > The resized image is obtained |
| | > by scaling down the source |
| | > image to fit into a square |
| | > with sides that are this |
| | > number of pixels. |
| | > |
| | > Optional. The algorithm to use |
| | > in scaling the image. One of |
| | > these strings: |
| | > |
| | > **bilinear** (default)---Lower |
| | > quality, but faster scaling. |
| | > **bicubic**---Higher quality, |
| | > but slower scaling. |
| | > **bicubicSharper**---Slowest, |
| | > but best quality. |
+----------------------------------+----------------------------------+
| rotate() | > Rotates the bitmap by the |
| | > specified multiple of 90 |
| _bitmapDataObj_.rotate (_angle_) | > degrees. |
| | > |
| | > Returns a new BitmapData |
| | > object containing the rotated |
| | > image. |
+----------------------------------+----------------------------------+
| > _angle_ | > The rotation angle in degrees. |
| | > Positive values rotate |
| | > clockwise, negative values |
| | > rotate counterclockwise. |
| | > Allowed values are -90, 0, 90, |
| | > 180, 270. |
+----------------------------------+----------------------------------+
| setPixel() | > Sets the color data for a |
| _bitmapDataObj_.setPixel (_x_, | > specific pixel from the image. |
| _y, color_) | > The alpha channel is set to |
| | > 255 (fully opaque). |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _x, y color_ | > The pixel coordinates relative |
| | > to this bitmap's origin, the |
| | > top left. |
| | > |
| | > A [Color]{.underline} |
| | > [Obje |
| | ct](#color-object), |
| | > or an integer that represents |
| | > the RGB pixel value, or a |
| | > predefined color name string. |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| setPixel32() | > Sets the color data for a |
| _bitmapDataObj_.setPixel32 (_x_, | > specific pixel from the image, |
| _y, color_) | > including its alpha channel. |
| | > |
| | > Returns undefined. |
+==================================+==================================+
| > _x, y_ The pixel coordinates | |
| > relative to this bitmap's | |
| > origin, the top left. | |
| > | |
| > _color_ A [Color]{.underline} | |
| > [Obje | |
| ct](#color-object), | |
| > or an integer that represents | |
| > the RGB pixel value, or a | |
| > predefined color name string. | |
+----------------------------------+----------------------------------+

## Color Object

> []{#\_bookmark68 .anchor}This object represents a pixel in the sRGB
> color space, with an optional alpha channel for opacity.

### Color object constructor

> []{#\_bookmark70 .anchor}To create a new object, use the new operator:
> new Color (_red_, _green_, _blue_\[, _alpha_\]);
>
> Parameters set corresponding properties.
>
> new Color (_colorValue_);
>
> new Color (_name_);

### Color properties

+--------+---------------------+-------------------------------------+
| alpha | > Number \[0..255\] | > Optional. Degree of opacity when |
| | | > the color is composited. An |
| | | > integer in the range \[0..255\]. |
| | | > If not specified, default is 255, |
| | | > fully opaque. |
+========+=====================+=====================================+
| blue | > Number \[0..255\] | > Blue component value. |
+--------+---------------------+-------------------------------------+
| green | > Number \[0..255\] | > Green component value. |
+--------+---------------------+-------------------------------------+
| number | > Number | > The color expressed as a 32-bit |
| | | > ARGB value. |
+--------+---------------------+-------------------------------------+
| red | > Number \[0..255\] | > Red component value. |
+--------+---------------------+-------------------------------------+

### Color functions

## Document Object

> Represents an Adobe Bridge browser window. The user can create
> multiple browser windows by selecting the **File \> New Window**
> command. For each browser window, there is one Document instance.
>
> Access the object for the active browser window using app.document.
> Access an array of objects for all open browser windows in
> app.documents.
>
> For a discussion of how the parts of the browser window map to
> JavaScript objects, see the _Adobe Bridge JavaScript Guide_.

### Document object constructor

> To create a new object, use the new operator. The argument specifies
> the file or page to be selected and displayed in the new window.
>
> new Document (_osPath_ \| _thumb_ \| _file_ \| _folder_)

+------------+-------------+-----------------------------------------+
| > _osPath_ | > String | > The path or URL for the file or page. |
+============+=============+=========================================+
| > _thumb_ | > Thumbnail | > The [Thumbnail |
| | | > |
| | | Object](#thumbnail-object) |
| | | > for the file or page. |
+------------+-------------+-----------------------------------------+
| > _file_ | > File | > The File object for the selected |
| | | > file. |
+------------+-------------+-----------------------------------------+
| > _folder_ | > Folder | > The Folder object for the selected |
| | | > folder. |
+------------+-------------+-----------------------------------------+

### Document properties

+--------------------+-------------------+---------------------------+
| additionalMetadata | > Array of String | > Identifies up to four |
| | | > lines of additional |
| | | > metadata to display for |
| | | > thumbnails in the |
| | | > Content pane. |
| | | > |
| | | > Overrides the values |
| | | > set in the **Additional |
| | | > Thumbnail Metatdata** |
| | | > drop-down lists and |
| | | > checkboxes in the |
| | | > Thumbnails page of the |
| | | > Preferences dialog, and |
| | | > any value set in |
| | | > Prefere |
| | | nces.[extraMetadata](#_bookmark219), |
| | | > but does not change the |
| | | > preference values. |
| | | > |
| | | > Read/write. The first |
| | | > value in the array sets |
| | | > the first line of |
| | | > additional metadata, |
| | | > the second value sets |
| | | > the second line, and so |
| | | > on. |
| | | > |
| | | > Allowed values are: |
| | | > |
| | | > author bit-depth |
| | | > |
| | | > color-mode |
| | | > color-profile copyright |
| | | > date-created |
| | | > date-modified |
| | | > description dimensions |
+--------------------+-------------------+---------------------------+

+----------------------+----------------------+----------------------+
| | | > document-creator |
| | | > document-kind |
| | | > exposure |
| | | > |
| | | > file-size |
| | | > focal-length |
| | | > keywords label |
| | | > |
| | | > |
| | | opening-application |
| | | > |
| | | > An array value of |
| | | > undefined turns |
| | | > off the display of |
| | | > metadata for that |
| | | > line. |
+======================+======================+======================+
| allowDrags | > Boolean | > When true (the |
| | | > default), |
| | | > drag-and-drop of |
| | | > thumbnails is |
| | | > allowed in this |
| | | > browser window. |
| | | > When false, |
| | | > thumbnails cannot |
| | | > be dragged within |
| | | > or from this |
| | | > browser window. |
+----------------------+----------------------+----------------------+
| []{#\_bookmark79 | > String | > The browser window |
| .anchor}browserMode | | > mode, |
| | | > corresponding to |
| | | > the UI button on |
| | | > the upper right, |
| | | > \"Switch to |
| | | > compact mode\". |
| | | > Value can be full |
| | | > or compact. |
| | | > Ultra-compact mode |
| | | > has no scripting |
| | | > equivalent. |
| | | > Read/write. |
+----------------------+----------------------+----------------------+
| context | > Thumbnail | > The |
| | | > [[Th |
| | | umbnail]{.underline} |
| | | > |
| | | [Object]{.underline} |
| | | ](#thumbnail-object) |
| | | > a user has |
| | | > right-clicked to |
| | | > invoke a context |
| | | > menu. Otherwise |
| | | > undefined. Read |
| | | > only. |
+----------------------+----------------------+----------------------+
| []{#\_bookmark80 | > Boolean | > When true, this |
| .anchor} | | > browser window |
| displayInspectorView | | > displays the |
| | | > Inspector palette, |
| | | > showing the panels |
| | | > listed in |
| | | > app.[[insp |
| | | ectorPanels](#_bookmark30). |
| | | > When false, the |
| | | > Inspector is not |
| | | > shown. Read/write. |
+----------------------+----------------------+----------------------+
| []{#\_bookmark81 | > Array of Array of | > A list of |
| .anch | > Thumbnail | > selections in the |
| or}groupedSelections | | > current Content |
| | | > page, where each |
| | | > member is an array |
| | | > containing a |
| | | > single selected |
| | | > [[Th |
| | | umbnail]{.underline} |
| | | > [ |
| | | Object]{.underline}] |
| | | (#thumbnail-object), |
| | | > or an array of |
| | | > [[Th |
| | | umbnail]{.underline} |
| | | ](#thumbnail-object) |
| | | > [[ |
| | | Object]{.underline}] |
| | | (#thumbnail-object)s |
| | | > that make up a |
| | | > selected stack. |
| | | > See |
| | | > Docume |
| | | nt.[stacks](#_bookmark89). |
| | | > |
| | | > Read only. |
+----------------------+----------------------+----------------------+
| height | > Number | > The height of the |
| | | > browser window in |
| | | > pixels. Legal |
| | | > values are |
| | | > positive integers. |
| | | > Read/write. |
| | | > |
| | | > The window is |
| | | > resized only |
| | | > within the limits |
| | | > of the minimum and |
| | | > maximum size |
| | | > allowed by the |
| | | > screen resolution. |
+----------------------+----------------------+----------------------+
| hwnd | > Number | > In Windows only, a |
| | | > platform-specific |
| | | > handle to the |
| | | > window for this |
| | | > browser. |
+----------------------+----------------------+----------------------+
| id | > Number | > A unique |
| | | > identifier for the |
| | | > browser window, |
| | | > valid for the life |
| | | > of the window. It |
| | | > is possible for |
| | | > more than one |
| | | > Document object to |
| | | > reference the same |
| | | > window. Read only. |
+----------------------+----------------------+----------------------+

+----------------------+----------------------+----------------------+
| []{#\_bookmark82 | > Object | > DEPRECATED. Do not |
| .anchor}jsFuncs | | > use. |
| | | > |
| | | > A JavaScript |
| | | > object containing |
| | | > the function |
| | | > definitions for |
| | | > one or more |
| | | > callbacks, in the |
| | | > form: |
| | | > |
| | | > { _fnName1_: |
| | | > function( \[args\] |
| | | > ) |
| | | > |
| | | > { |
| | | > _fn1_definition_ |
| | | > }, |
| | | > |
| | | > _fnName2_: |
| | | > function( \[args\] |
| | | > ) |
| | | > |
| | | > { |
| | | > _fn2_definition_ |
| | | > } |
| | | > |
| | | > \... |
| | | > |
| | | > } |
| | | > |
| | | > These functions |
| | | > are available to |
| | | > the code in an |
| | | > HTML page |
| | | > displayed in the |
| | | > Content pane, |
| | | > which can invoke |
| | | > them using the |
| | | > call function. |
| | | > They run in Adobe |
| | | > Bridge's |
| | | > ExtendScript |
| | | > engine, and can |
| | | > use Adobe Bridge |
| | | > DOM objects. |
| | | > Read/write. |
+======================+======================+======================+
| maximized | > Boolean | > When true, this |
| | | > browser window is |
| | | > in the zoomed or |
| | | > maximized state. |
| | | > Read only. |
+----------------------+----------------------+----------------------+
| minimized | > Boolean | > When true, this |
| | | > browser window is |
| | | > in the collapsed |
| | | > or minimized |
| | | > state. Read only. |
| | | > |
| | | > **NOTE:** In Mac |
| | | > OS, a window can |
| | | > be in the zoomed |
| | | > state, and still |
| | | > be minimized. If |
| | | > both maximized and |
| | | > minimized are |
| | | > true, call the |
| | | > document's |
| | | > |
| | | [[restore()]{.under |
| | | line}](#_bookmark99) |
| | | > method to un-zoom |
| | | > the window. |
+----------------------+----------------------+----------------------+
| navbars | > NavBar | > Contains the |
| | | > predefined |
| | | > [ |
| | | [NavBar]{.underline} |
| | | > [Object](#navbar-object)s |
| | | > for the |
| | | > configurable |
| | | > navigation bars. |
| | | |
| | | - To access the |
| | | > navigation |
| | | > bars that can |
| | | > be shown when |
| | | > the Content |
| | | > pane displays |
| | | > files and |
| | | > folders, use |
| | | > na |
| | | vbars.filesystem.top |
| | | > and |
| | | > navbar |
| | | s.filesystem.bottom. |
| | | |
| | | > Both of the two |
| | | > bars can be |
| | | > configured to |
| | | > display ScriptUI |
| | | > controls, and are |
| | | > hidden by default. |
+----------------------+----------------------+----------------------+
| noItems | > String | > Text to be |
| | | > displayed in the |
| | | > Content pane when |
| | | > the selected |
| | | > thumbnail is for |
| | | > an empty folder. |
| | | > The default is |
| | | > \"No Items to |
| | | > Display\". |
| | | > Read/write. |
+----------------------+----------------------+----------------------+
| owner | > String | > The Adobe |
| | | > Bridge-enabled |
| | | > application that |
| | | > created or first |
| | | > activated this |
| | | > browser window, if |
| | | > it was not Adobe |
| | | > Bridge. An |
| | | > application |
| | | > specifier, such as |
| | | > illustrator or |
| | | > photoshop. |
| | | > |
| | | > For details of |
| | | > application |
| | | > specifier format, |
| | | > see the |
| | | > |
| | | > _JavaScript Tools |
| | | > Guide_. |
+----------------------+----------------------+----------------------+
| []{#\_bookmark83 | > Array of | > A collection of |
| .anchor}palettes | > TabbedPalette | > [[TabbedPalette |
| | | > Obj |
| | | ect](#t |
| | | abbedpalette-object) |
| | | > for all default |
| | | > and script-defined |
| | | > display palettes |
| | | > available to this |
| | | > browser, |
| | | > regardless of |
| | | > their visibility |
| | | > status. Read only. |
+----------------------+----------------------+----------------------+

+----------------------+----------------------+----------------------+
| position | > Object | > The position of |
| | | > this browser |
| | | > window on the |
| | | > screen. An object |
| | | > with two |
| | | > properties, x and |
| | | > y, whose value is |
| | | > the point of the |
| | | > screen |
| | | > coordinates, the |
| | | > screen coordinates |
| | | > are relative to |
| | | > the upper-left |
| | | > corner of the main |
| | | > display. |
| | | > Read/write. |
+======================+======================+======================+
| presentationMode | > String | > The presentation |
| | | > mode of the |
| | | > Content pane. The |
| | | > value is always |
| | | > \"browser\" in |
| | | > CS5. In support of |
| | | > this, |
| | | > [[setPresent |
| | | ationMode()]{.underl |
| | | ine}](#_bookmark102) |
| | | > and |
| | | > [pres |
| | | entationPath](#_bookmark84) |
| | | > now support the |
| | | > \"browser\" mode |
| | | > only. |
+----------------------+----------------------+----------------------+
| []{#\_bookmark84 | > String | > The path to the |
| .anc | | > content displayed |
| hor}presentationPath | | > in the Content |
| | | > pane. A Bridge |
| | | > URI, which is a |
| | | > valid filesystem |
| | | > path that Adobe |
| | | > Bridge can |
| | | > interpret. This |
| | | > property no longer |
| | | > supports URL. To |
| | | > display an HTML |
| | | > page, use a |
| | | > [[TabbedPalette |
| | | > Obje |
| | | ct](#ta |
| | | bbedpalette-object). |
+----------------------+----------------------+----------------------+
| []{#\_bookmark85 | > Number | > The number of |
| .an | | > currently selected |
| chor}selectionLength | | > thumbnails in the |
| selectionsLength | | > Content pane. |
+----------------------+----------------------+----------------------+
| []{#\_bookmark86 | > Array of Thumbnail | > The |
| .anchor}selections | | > [[Th |
| | | umbnail]{.underline} |
| | | > [ |
| | | Object]{.underline}] |
| | | (#thumbnail-object)s |
| | | > for all currently |
| | | > selected files in |
| | | > the Content pane |
| | | > of this document. |
| | | > Read only. |
| | | > |
| | | > Change the |
| | | > selections using |
| | | > the [[Document |
| | | > |
| | | Object]{.underline}] |
| | | (#document-object)'s |
| | | > |
| | | [[select()]{.underli |
| | | ne}](#_bookmark100), |
| | | > [[s |
| | | electAll()]{.underli |
| | | ne}](#_bookmark101), |
| | | > |
| | | [[deselect()]{.under |
| | | line}](#_bookmark95) |
| | | > and |
| | | > [[d |
| | | eselectAll()]{.under |
| | | line}](#_bookmark96) |
| | | > methods. A script |
| | | > should wait until |
| | | > the |
| | | > [loaded](#_bookmark119) |
| | | > event has occurred |
| | | > before making |
| | | > calls to document |
| | | > selection methods. |
| | | > |
| | | > Use |
| | | > [[ge |
| | | tSelection()]{.under |
| | | line}](#_bookmark97) |
| | | > to limit the |
| | | > request to visible |
| | | > thumbnails, or |
| | | > those for files of |
| | | > a given type. Use |
| | | > [group |
| | | edSelections](#_bookmark81) |
| | | > to include |
| | | > thumbnails that |
| | | > are in selected |
| | | > stacks. |
| | | > |
| | | > **TIP:** Accessing |
| | | > this value is a |
| | | > time-intensive |
| | | > operation. To |
| | | > improve |
| | | > performance, |
| | | > access it outside |
| | | > loops: |
| | | > |
| | | > var sel = |
| | | > |
| | | document.selections; |
| | | > |
| | | > for (var i = 0; i |
| | | > \< sel.length; |
| | | > i++) |
| | | > process(sel\[i\]); |
| | | > |
| | | > Also, use |
| | | > [sel |
| | | ectionLength](#_bookmark85) |
| | | > when possible, |
| | | > rather than |
| | | > |
| | | > checking the |
| | | > length of this |
| | | > array: |
| | | > |
| | | > if |
| | | > (docu |
| | | ment.selectionLength |
| | | > \> 0) |
+----------------------+----------------------+----------------------+
| []{#\_bookmark87 | > Boolean | > When true, |
| .anch | | > thumbnail names |
| or}showThumbnailName | | > are displayed in |
| | | > the Content pane. |
| | | > This overrides the |
| | | > |
| | | [[ShowName](#_bookmark222) |
| | | > preference value. |
| | | > Read/write. |
+----------------------+----------------------+----------------------+

+-----------------------+--------------------+-----------------------+
| []{#\_bookmark88 | > Array of Objects | > How the thumbnails |
| .anchor}sorts | | > in the Content pane |
| | | > are sorted. |
| | | > References a |
| | | > [[SortCriterion |
| | | > O |
| | | bject](# |
| | | sortcriterion-object) |
| | | > using an array |
| | | > containing one |
| | | > JavaScript object |
| | | > with three |
| | | > properties: |
| | | > |
| | | > { type, name, |
| | | > reverse } |
| | | |
| | | - The type value |
| | | > corresponds to |
| | | > the |
| | | > [type](#_bookmark437) |
| | | > property of a |
| | | > [SortC |
| | | riterion]{.underline} |
| | | > [Ob |
| | | ject](#s |
| | | ortcriterion-object). |
| | | > It is |
| | | > read-only, and |
| | | > is ignored when |
| | | > setting this |
| | | > value. |
| | | |
| | | > Allowed values are: |
| | | > |
| | | > string date number |
| | | > dimensions |
| | | > resolution |
| | | > |
| | | > colorProfile user |
| | | |
| | | - The name value |
| | | > corresponds to |
| | | > the |
| | | > [name](#_bookmark436) |
| | | > property of a |
| | | > [SortCriterion |
| | | > Ob |
| | | ject](#s |
| | | ortcriterion-object), |
| | | > and identifies |
| | | > the object that |
| | | > defines the |
| | | > sorting |
| | | > criterion. |
| | | |
| | | > Allowed values are: |
| | | > |
| | | > user name |
| | | > |
| | | > date-created |
| | | > date-modified label |
| | | > |
| | | > rating file-size |
| | | > |
| | | > document-kind |
| | | > keywords dimensions |
| | | > resolution |
| | | > color-profile |
| | | |
| | | - The reverse value |
| | | > is true if the |
| | | > thumbnails are |
| | | > sorted in |
| | | > reverse order |
| | | > in the given |
| | | > category. |
| | | |
| | | > To set the value, |
| | | > create an array |
| | | > that contains an |
| | | > object with name |
| | | > and reverse |
| | | > properties. For |
| | | > example, to sort in |
| | | > reverse by creation |
| | | > date: |
| | | > |
| | | > var mySortObj = {}; |
| | | > mySortObj.name = |
| | | > \"date-created\"; |
| | | > mySortObj.reverse = |
| | | > true; |
| | | > |
| | | > var mySortsArray = |
| | | > \[\]; |
| | | > mySortsA |
| | | rray.push(mySortObj); |
| | | > app.document.sorts |
| | | > = mySortsArray; |
+-----------------------+--------------------+-----------------------+

+----------------------+----------------------+----------------------+
| []{#\_bookmark89 | > Array of Array of | > A list of current |
| .anchor}stacks | > Thumbnail | > thumbnail stacks |
| | | > in the Content |
| | | > pane of this |
| | | > document. Each |
| | | > stack is an object |
| | | > with the following |
| | | > properties and |
| | | > functions: |
| | | |
| | | - thumbnails---An |
| | | > array in which |
| | | > each item is |
| | | > an array of |
| | | > [[Th |
| | | umbnail]{.underline} |
| | | > [O |
| | | bject]( |
| | | #thumbnail-object)s. |
| | | |
| | | - prop |
| | | erties---Read/write. |
| | | > An array in |
| | | > which a user |
| | | > can add and |
| | | > retrieve |
| | | > customized |
| | | > properties for |
| | | > the stack. |
| | | > Those |
| | | > properties can |
| | | > stored into |
| | | > the cache file |
| | | > by calling |
| | | > flu |
| | | shStackProperties(). |
| | | |
| | | - isValid |
| | | > ()---Function. |
| | | > If the stack |
| | | > already exists |
| | | > and is valid, |
| | | > the function |
| | | > returns true, |
| | | > otherwise it |
| | | > returns false. |
| | | |
| | | - |
| | | isExpanded---Returns |
| | | > true if the |
| | | > stack object |
| | | > is expanded |
| | | > and false if |
| | | > it is |
| | | > collapsed |
| | | |
| | | - co |
| | | llapse()---Collapses |
| | | > the stack |
| | | > object |
| | | |
| | | - expand() --- |
| | | > Expands the |
| | | > stack object |
| | | > See examples |
| | | > in Bridge SDK |
| | | > samples |
| | | |
| | | > |
| | | SnpManageStacks.jsx |
+======================+======================+======================+
| status | > String | > The text displayed |
| | | > in the document's |
| | | > status line at the |
| | | > bottom of the |
| | | > Content pane. |
| | | > Read/write. |
+----------------------+----------------------+----------------------+
| thumbnail | > Thumbnail | > The |
| | | > [[Th |
| | | umbnail]{.underline} |
| | | > |
| | | [Object]{.underline} |
| | | ](#thumbnail-object) |
| | | > for the node |
| | | > currently selected |
| | | > in the Folders or |
| | | > Favorites palette. |
| | | > Read/write. |
| | | > Setting this value |
| | | > navigates to and |
| | | > selects the |
| | | > corresponding node |
| | | > in the Folders |
| | | > pane. The contents |
| | | > of this node are |
| | | > displayed in the |
| | | > Content pane. |
| | | > |
| | | > **NOTE:** The |
| | | > documen |
| | | t.thumbnail.children |
| | | > array is not |
| | | > populated until |
| | | > the |
| | | > [loaded](#_bookmark119) |
| | | > event has occurred |
| | | > for the document. |
+----------------------+----------------------+----------------------+
| thumbnailViewMode | > String | > The view mode of |
| | | > the Content pane, |
| | | > as selected by the |
| | | > **View** menu. |
| | | > Read/write. One |
| | | > of: |
| | | > |
| | | > thumbnails details |
| | | > list |
+----------------------+----------------------+----------------------+
| visible | > Boolean | > When true, the |
| | | > browser window is |
| | | > expanded, as |
| | | > opposed to being |
| | | > minimized or |
| | | > collapsed. |
| | | > |
| | | > Read/write. |
| | | > Setting this to |
| | | > true is the same |
| | | > as calling |
| | | > Document.[[ |
| | | normalize()]{.underl |
| | | ine}](#_bookmark98). |
| | | > Setting it to |
| | | > false collapses |
| | | > the window. |
+----------------------+----------------------+----------------------+

+----------------------+----------------------+----------------------+
| []{#\_bookmark90 | > Array of Thumbnail | > Read only. An |
| .anch | | > array of |
| or}visibleThumbnails | | > [[Thumbnail |
| | | > |
| | | Object]{.underline}] |
| | | (#thumbnail-object)s |
| | | > that are currently |
| | | > shown in the |
| | | > Content pane. The |
| | | > array is ordered |
| | | > according to the |
| | | > current sort |
| | | > order, and |
| | | > contains only |
| | | > thumbnails whose |
| | | > visible property |
| | | > is true. |
| | | > |
| | | > **TIP:** Accessing |
| | | > this value is a |
| | | > time-intensive |
| | | > operation. To |
| | | > improve |
| | | > performance, |
| | | > access it outside |
| | | > loops: |
| | | > |
| | | > var sel = |
| | | > documen |
| | | t.visibleThumbnails; |
| | | > for (var i = 0; i |
| | | > \< sel.length; |
| | | > i++) |
| | | > process(sel\[i\]); |
| | | > |
| | | > Also, use |
| | | > [sel |
| | | ectionLength](#_bookmark85) |
| | | > when possible, |
| | | > rather than |
| | | > |
| | | > checking the |
| | | > length of this |
| | | > array: |
| | | > |
| | | > if |
| | | > (document.vis |
| | | ibleThumbnailsLength |
| | | > \> 0) |
+======================+======================+======================+
| vis | > Number | > Read only. The |
| ibleThumbnailsLength | | > number of |
| | | > thumbnails in the |
| | | > [visib |
| | | leThumbnails](#_bookmark90) |
| | | > array. |
+----------------------+----------------------+----------------------+
| visitUrl | > Function | > DEPRECATED. Do not |
| | | > use. |
| | | > |
| | | > A callback |
| | | > function that is |
| | | > called when the |
| | | > Content pane is |
| | | > about to open a |
| | | > URL. Allows the |
| | | > script to approve |
| | | > or redirect the |
| | | > browser. The |
| | | > function takes the |
| | | > URL as an |
| | | > argument, and |
| | | > should return an |
| | | > object with these |
| | | > properties: |
| | | > |
| | | > **result**---When |
| | | > false, Adobe |
| | | > Bridge does not |
| | | > open the new URL. |
| | | > When true, it |
| | | > opens the passed |
| | | > URL or a different |
| | | > URL as provided in |
| | | > this object. |
+----------------------+----------------------+----------------------+

+-------+----------+-------------------------------------------------+
| | | > **url**---When present, a URL string that |
| | | > replaces the passed URL. |
| | | > |
| | | > **toHistory**---When false, the passed or |
| | | > provided URL is not added to the browser's |
| | | > history list. Default is true. |
| | | > |
| | | > For example, this confirms a link with the |
| | | > user: |
| | | > |
| | | > var myFn = function(url) { |
| | | > |
| | | > if( Window.confirm( \"Proceed to \" + url + |
| | | > \" ?\" ) ) |
| | | > |
| | | > return {result:true}; else |
| | | > |
| | | > return {result:false}; |
| | | > |
| | | > } |
| | | > |
| | | > app.document.visitUrl = myFn; |
| | | > |
| | | > This example replaces a link to an unwanted |
| | | > page with an application-specific help page: |
| | | > |
| | | > var helpPageFn= function(url) { if( url == |
| | | > \"unwanted_page\" ) |
| | | > |
| | | > return {result:true, |
| | | > |
| | | > url:\"my_help_page\", toHistory:false}; |
| | | > |
| | | > else |
| | | > |
| | | > return {result:true}; |
| | | > |
| | | > } |
| | | > |
| | | > app.document.visitUrl = helpPageFn; |
| | | > |
| | | > Within the context of this function, the |
| | | > implicit this variable references this |
| | | > [Document |
| | | > Object](#document-object). For |
| | | > example: |
| | | > |
| | | > var myFilter = function(url) { |
| | | > Window.alert(this.thumbnail.displayPath); |
| | | > return {result:true, url:url}; |
| | | > |
| | | > } |
| | | > |
| | | > **NOTE:** This function is also called when |
| | | > the Content pane switches from a web page |
| | | > view to a filesystem view. In this case, the |
| | | > URL passed to the function is |
| | | > \"about:blank\". |
+=======+==========+=================================================+
| width | > Number | > The width of the browser window in pixels. |
| | | > Legal values are positive integers. |
| | | > Read/write. |
| | | > |
| | | > The window is resized only within the limits |
| | | > of the minimum and maximum size allowed by |
| | | > the screen resolution. |
+-------+----------+-------------------------------------------------+

+----------------------------+----------+----------------------------+
| []{#\_bookmark91 | > Object | > Retrieves the most |
| .anchor}workspace | | > recently set workspace, |
| | | > a JavaScript object with |
| | | > two properties, id and |
| | | > name, whose string |
| | | > values are the unique |
| | | > identifier and display |
| | | > name of the workspace. A |
| | | > user-defined workspace |
| | | > may have been renamed by |
| | | > the user since being set |
| | | > by a script. |
| | | > |
| | | > Read-only. Set with |
| | | > Doc |
| | | ument.[[setWorkspace()]{.u |
| | | nderline}](#_bookmark103). |
| | | > The current workspace |
| | | > can also be set by user |
| | | > action. Value is |
| | | > undefined for a new |
| | | > document before any |
| | | > workspace has been |
| | | > explicitly set. |
| | | > |
| | | > Bridge CS5 uses the XML |
| | | > encoding method instead |
| | | > of the URL encoding |
| | | > method. This changed in |
| | | > CS5. If users copy an |
| | | > old workspace file from |
| | | > CS4 to CS5, and the |
| | | > workspace name contains |
| | | > non-ASCII characters, |
| | | > Bridge CS5 will not |
| | | > translate it. This will |
| | | > cause an issue where the |
| | | > workspace name is not |
| | | > the name which the user |
| | | > saved before. To resolve |
| | | > this problem, users can |
| | | > simply save a new |
| | | > workspace name in Bridge |
| | | > CS5. |
+----------------------------+----------+----------------------------+

### Document functions

+----------------------------------+----------------------------------+
| bringToFront() | > Makes this browser window the |
| | > topmost active window in the |
| _docObj_.bringToFront () | > windowing system. Makes Bridge |
| | > exit stealth mode if it is in |
| | > that mode. |
| | > |
| | > Returns undefined. |
+==================================+==================================+
| center() | > Centers this browser window on |
| | > the screen. If there is more |
| _docObj_.center () | > than one monitor, centers the |
| | > window on the monitor where |
| | > most of the window resides. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| []{#\_bookmark94 | > Executes an Adobe |
| .anchor}chooseMenuItem() | > Bridge-defined or |
| | > script-defined menu command |
| _ | > programatically. This is the |
| docObj_.chooseMenuItem(_menuId_) | > equivalent to the user |
| | > selecting the command |
| | > interactively. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _menuID_ The unique identifier | |
| > for the command to execute; | |
| > see [MenuElement | |
| > Object](#menuelement-object). | |
| > Predefined identifiers for | |
| > Adobe Bridge commands are | |
| > listed in ['Adobe | |
| > | |
| Bridge](#adobe-brid | |
| ge-menu-and-command-identifiers) | |
| > [menu and command | |
| > identifiers' on]{.underline} | |
| > [page]{.underline} | |
| > [59](#adobe-bridg | |
| e-menu-and-command-identifiers). | |
| > If the ID is for a menu or | |
| > submenu, the function does | |
| > nothing. | |
+----------------------------------+----------------------------------+
| close() | > Closes this browser window. |
| | > |
| _docObj_.close () | > Returns undefined. |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| []{#\_bookmark95 | > If the specified thumbnail is |
| .anchor}deselect() | > a child of this document and |
| | > is selected, removes it from |
| _docObj_.deselect(_thumbnail_) | > the |
| | > [select |
| | ions](#_bookmark86) |
| | > array and deselects it in the |
| | > browser window. |
| | > |
| | > Returns true if the thumbnail |
| | > was deselected. |
| | > |
| | > A script should wait until the |
| | > [loa |
| | ded](#_bookmark119) |
| | > event has occurred before |
| | > making calls to document |
| | > selection methods. |
+==================================+==================================+
| > _thumbnail_ The [[Thumbnail | |
| > Object] | |
| {.underline}](#thumbnail-object) | |
| > for the node to deselect. | |
+----------------------------------+----------------------------------+
| []{#\_bookmark96 | > Removes all members from the |
| .anchor}deselectAll() | > [select |
| | ions](#_bookmark86) |
| _docObj_.deselectAll () | > array and deselects all |
| | > thumbnails in the browser |
| | > window. |
| | > |
| | > Returns undefined. |
| | > |
| | > A script should wait until the |
| | > [loa |
| | ded](#_bookmark119) |
| | > event has occurred before |
| | > making calls to document |
| | > selection methods. |
+----------------------------------+----------------------------------+
| execJS() | > DEPRECATED. Do not use. |
| | > |
| _docObj_.execJS (_script_) | > Executes a JavaScript function |
| | > that is defined within the |
| | > HTML page displayed in the |
| | > Content pane when a thumbnail |
| | > with displayMode=web is |
| | > selected. If the page that |
| | > defines the function is not |
| | > currently displayed, causes a |
| | > run-time error. |
| | > |
| | > **NOTE:** Do not call this |
| | > method from a |
| | > [jsF |
| | uncs](#_bookmark82) |
| | > callback function. This |
| | > attempts to re-enter the |
| | > JavaScript engine, which is |
| | > not allowed, and causes Adobe |
| | > Bridge to hang. A callback |
| | > can, instead, schedule a task |
| | > using |
| | > app.[[scheduleTas |
| | k()]{.underline}](#_bookmark52), |
| | > and call execJS from the |
| | > function associated with the |
| | > task. |
| | > |
| | > Returns the result of the |
| | > executed JavaScript function, |
| | > which must be a Boolean, |
| | > Number, or String, or null. |
+----------------------------------+----------------------------------+
| > _script_ A string containing a | |
| > script to execute. This | |
| > typically contains the name | |
| > and arguments of the | |
| > JavaScript function to | |
| > execute, but can have multiple | |
| > statements, including variable | |
| > declarations, assignments and | |
| > so on. | |
+----------------------------------+----------------------------------+
| flushStackProperties() | > Stores stack properties into |
| | > the cache file. |
| _docObj_.flushStackProperties () | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| []{#\_bookmark97 | > Collects selected thumbnails |
| .anchor}getSelection() | > for files of a given type, if |
| | > any are selected. If no |
| _do | > matching thumbnails are |
| cObj_.getSelection(\[_filter_\]) | > selected, collects matching |
| | > thumbnails that are currently |
| | > visible in the Content pane. |
| | > See examples in Bridge SDK |
| | > samples SnpSaveAsJPEG.jsx and |
| | > SnpRotateImage.jsx. |
| | > |
| | > Returns an Array of |
| | > [Thumbnail |
| | > Object](#thumbnail-object). |
+----------------------------------+----------------------------------+
| > _filter_ Optional. A String | |
| > containing a comma-delimited | |
| > list of file extensions to | |
| > match, or the wildcard | |
| > character \"\*\" to match all | |
| > file extensions. \"\*\" is the | |
| > default. | |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| getStackforThumbnail () | > Returns the stack object for |
| _docObj_. getStackforThumbnail | > the passed [[Thumbnail |
| (thumbnail) | > Object]{ |
| | .underline}](#thumbnail-object). |
| | > See examples in Bridge SDK |
| | > samples SnpManageStacks.jsx |
+==================================+==================================+
| maximize() | > Maximizes or zooms this |
| | > browser window. |
| _docObj_.maximize () | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| minimize() | > Minimizes or docks this |
| | > browser window. |
| _docObj_.minimize () | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| []{#\_bookmark98 | > Centers this browser window on |
| .anchor}normalize() | > the screen, and sets the |
| | > height and width to 80% of the |
| _docObj_.normalize () | > screen height and width. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| print() | > DEPRECATED. Do not use. |
| | > |
| _docObj_.print () | > Prints the page shown in the |
| | > Content pane, if it shows a |
| | > web page. |
| | > |
| | > Returns true on success. |
+----------------------------------+----------------------------------+
| refresh() | > Refreshes the display of this |
| | > browser window. |
| _docObj_.refresh () | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| resetToDefaultWorkspace() | > Restores the default |
| | > configuration of the tabbed |
| _docObj_.resetToDefaultWorkspace | > palettes in this browser |
| () | > window. The equivalent of |
| | > choosing **Window** \> |
| | > **Workspace** \> **Reset**. |
| | > |
| | > This works only when |
| | > [browser |
| | Mode](#_bookmark79) |
| | > is full. If |
| | > [browser |
| | Mode](#_bookmark79) |
| | > is compact, it does nothing. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| []{#\_bookmark99 | > Restores this browser window |
| .anchor}restore() | > after it has been minimized. |
| | > In Windows, makes it |
| _docObj_.restore () | > user-sizeable. In Mac OS, |
| | > returns it to the |
| | > user-configured size. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| reveal() | > Causes the Content pane (not |
| | > the Folders or Favorites |
| _docObj_.reveal(_thumbnail_) | > palette) to show the specified |
| | > thumbnail, scrolling the |
| | > display if necessary to make |
| | > it visible. Does not select |
| | > the Thumbnail. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _thumbnail_ The [[Thumbnail | |
| > Object] | |
| {.underline}](#thumbnail-object) | |
| > for the node to scroll to. | |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| []{#\_bookmark100 | > If the specified thumbnail is |
| .anchor}select() | > a child of this document and |
| | > is not selected, adds it to |
| _docObj_.select(_thumbnail_) | > the |
| | > [select |
| | ions](#_bookmark86) |
| | > array and selects it in the |
| | > Content pane. This is the same |
| | > as selecting the icon in the |
| | > Content pane with |
| | > CONTROL-click. |
| | > |
| | > Returns true if the thumbnail |
| | > was selected. |
| | > |
| | > A script should wait until the |
| | > [loa |
| | ded](#_bookmark119) |
| | > event has occurred before |
| | > making calls to document |
| | > selection methods. |
+==================================+==================================+
| > _thumbnail_ The [[Thumbnail | |
| > Object] | |
| {.underline}](#thumbnail-object) | |
| > for the node to select. | |
+----------------------------------+----------------------------------+
| []{#\_bookmark101 | > Adds all child |
| .anchor}selectAll() | > [Thumbnail]{.underline} |
| | > [Object](#thumbnail-object)s |
| | > of the current thumbnail |
| | > (document.thumbnail) to the |
| | > [select |
| | ions](#_bookmark86) |
| | > array, and selects them in the |
| | > Content pane. This is the same |
| | > as typing CONTROL-a (in |
| | > Windows) or CMD-a (in Mac OS) |
| | > in the Content pane. |
| | > |
| | > Returns undefined. |
| | > |
| | > A script should wait until the |
| | > [loa |
| | ded](#_bookmark119) |
| | > event has occurred before |
| | > making calls to document |
| | > selection methods. |
+----------------------------------+----------------------------------+
| []{#\_bookmark102 | > Sets the presentation mode of |
| .anchor}setPresentationMode() | > the Content pane, and |
| _docObj_.setPresentationMode | > optionally the path to the |
| (_mode_, \[_path_\]) | > current content to display. |
| | > The mode determines how the |
| | > presentationPath value is |
| | > interpreted. |
| | > |
| | > CAUTION : In CS5, only the |
| | > browser mode is supported. |
| | > Setting the presentation mode |
| | > to anything else will cause |
| | > the presentationPath property |
| | > to not work properly. To |
| | > display an HTML page, use the |
| | > [TabbedPalette |
| | > Object](#tabbedpalette-object). |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _mode_ String. The new display | |
| > mode. In CS5, must be browser, | |
| > otherwise the presentationPath | |
| > property will not work | |
| > correctly. | |
| > | |
| > _path_ Optional. The path | |
| > string, a Bridge URI. | |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| []{#\_bookmark103 | > Sets the browser configuration |
| .anchor}setWorkspace() | > to a predefined or |
| | > user-defined workspace. |
| _doc | > |
| Obj_.setWorkspace(_workspaceId_) | > The current workspace can also |
| | > be set by user action. A |
| | > user-defined workspace may |
| | > have been renamed by the user |
| | > since being set by a script. |
| | > If an invalid ID is assigned, |
| | > the workspace is not changed. |
| | > |
| | > If a script-defined tabbed |
| | > palette is visible when the |
| | > user or a script creates a |
| | > workspace, the workspace |
| | > references that palette by its |
| | > unique identifier. If a |
| | > workspace references a |
| | > script-defined tabbed palette, |
| | > the palette must be created |
| | > before the workspace is |
| | > applied. Otherwise, the |
| | > palette does not appear. |
| | > |
| | > **NOTE:** This works only when |
| | > [browser |
| | Mode](#_bookmark79) |
| | > is full. If |
| | > [browser |
| | Mode](#_bookmark79) |
| | > is compact, it does nothing. |
| | > |
| | > Returns true on success. |
+==================================+==================================+
| > _workspaceId_ The unique, | |
| > identifying name string for | |
| > the new workspace. If it is | |
| > the same as the name of the | |
| > current workspace, the | |
| > function does nothing. | |
| > | |
| > Identifiers of predefined | |
| > workspaces are: | |
| > | |
| > default lightTable navigator | |
| > metadata | |
| > | |
| > horizontalFilmstrip | |
| > verticalFilmstrip | |
+----------------------------------+----------------------------------+

## Event Object

> Represents a user-interaction event, such as clicking a thumbnail.
> Adobe Bridge creates an event object whenever one of the triggering
> events occurs, and passes it to any event handlers that you have
> registered with the [App Object](#app-object)'s
> [eventHandlers](#_bookmark28) property. The only way to
> access an event object is as the argument to such an event-handling
> function. See the _Adobe Bridge JavaScript Guide_ for details of how
> to define and register these functions.
>
> []{#\_bookmark106 .anchor}The object with which the user interacted to
> generate the event is called the _target object_ of that event.
> Different target object types are associated with different types of
> events, as listed in [[Event object
> types](#event-object-types).
>
> Event defines no functions.

### Event properties

+-----------+-------------+------------------------------------------+
| appPath | > String | When the type is |
| | | [openWith](#_bookmark125), |
| | | the platform-specific path to the |
| | | selected opening application. Otherwise |
| | | undefined. Read only. |
+===========+=============+==========================================+
| document | > Document | When the target object is a [Thumbnail |
| | | Object](#thumbnail-object), |
| | | the |
| | | [ |
| | | Document](#document-object) |
| | | [Object](#document-object) |
| | | for the browser window in which the |
| | | event occurred. Otherwise undefined. |
| | | Read only. |
+-----------+-------------+------------------------------------------+
| favorites | > Favorites | When location is favorites, the |
| | | [Favorites]{.underline} |
| | | [Object](#favorites-object) |
| | | for the pane in which the event |
| | | occurred. Otherwise undefined. Read |
| | | only. |
+-----------+-------------+------------------------------------------+
| isContext | > Boolean | When the target object is a [Thumbnail |
| | | Object](#thumbnail-object), |
| | | and the type is |
| | | [select |
| | | ionsChanged](#_bookmark121) |
| | | or |
| | | [selectio |
| | | nsChanging](#_bookmark122), |
| | | this value is true if the event was |
| | | generated by a right-click (the gesture |
| | | that normally brings up a context menu). |
| | | Otherwise false. |
+-----------+-------------+------------------------------------------+
| location | > String | The location at which the event |
| | | occurred. This value helps to |
| | | distinguish events of the same type than |
| | | can be triggered in different ways. One |
| | | of: |
| | | |
| | | > **app**---The target object is the |
| | | > [App |
| | | > Object](#app-object) and |
| | | > the event was generated for an |
| | | > interaction with the operating system. |
| | | > **document**---The target object is a |
| | | > [Thumbnail |
| | | > |
| | | Object](#thumbnail-object) |
| | | > and the event was generated for an |
| | | > interaction in the Folders pane, or |
| | | > the target object is a [Document |
| | | > Object](#document-object) |
| | | > and the event was generated for an |
| | | > interaction with the windowing |
| | | > environment. |
| | | > |
| | | > **favorites**---The target object is a |
| | | > [Thumbnail]{.underline} |
| | | > |
| | | [Object](#thumbnail-object) |
| | | > and the event was generated for an |
| | | > interaction in the Favorites palette. |
| | | > |
| | | > **prefs**---The target object is the |
| | | > [[PreferencesDialog]{.underline} |
| | | > [Object] |
| | | {.underline}](#preferencesdialog-object) |
| | | > and the event was generated in the |
| | | > Preferences dialog. |
| | | > |
| | | > **web**---The target object is a |
| | | > [Document |
| | | > Object](#document-object) |
| | | > and the event was generated for an |
| | | > interaction with the Internet. In this |
| | | > case, event.url contains the URL of |
| | | > the page. |
| | | |
| | | Read only. |
+-----------+-------------+------------------------------------------+

+----------------------+----------------------+----------------------+
| []{#\_bookmark109 | > Thumbnail, | The target object of |
| .anchor}object | > Document, App, | the event; that is, |
| | > PreferencesDialog | the object that |
| | | generated the event. |
| | | Read/write. |
+======================+======================+======================+
| section | > String | When location is |
| | | favorites, one of: |
| | | |
| | | > **standard**---The |
| | | > target object is a |
| | | > predefined member |
| | | > of the |
| | | > |
| | | > favorites array. |
| | | > |
| | | > **user**---The |
| | | > target object is a |
| | | > user-added member |
| | | > of the |
| | | > |
| | | > favorites array. |
| | | |
| | | Otherwise undefined. |
| | | Read only. |
+----------------------+----------------------+----------------------+
| type | > String | The type of action |
| | | that triggered the |
| | | event. Different |
| | | types of events that |
| | | are supported for |
| | | each type of target |
| | | object; see |
| | | [[ |
| | | Event]( |
| | | #event-object-types) |
| | | [object |
| | | t |
| | | ypes](# |
| | | event-object-types). |
| | | Read only. |
+----------------------+----------------------+----------------------+
| []{#\_bookmark110 | > String | The Bridge URI of a |
| .anchor}uri | | node that was |
| | | affected by the |
| | | event. |
+----------------------+----------------------+----------------------+
| url | > String | When location is |
| | | web, the URL of the |
| | | web page. Read only. |
+----------------------+----------------------+----------------------+

### Event object types

> Events of different types are triggered for different target objects.
> All types are described here according to the target object.

#### App events

> []{#\_bookmark115 .anchor}When an application event occurs, the event
> object has the following property values:

- The target, _eventObj_.object, is the [[App

  > Object](#app-object).

- The location, _eventObj_.location, is the string app.

- The type, _eventObj_.type, is one of these event types:

+---------+-----------------------------------------------------------+
| close | > Generated when the Adobe Bridge application has |
| | > received a request to terminate, but has not yet |
| | > started the process. If the handler returns a handled |
| | > value of true in the result object, the termination is |
| | > cancelled. To query the user, you can set this with the |
| | > return value of Window.confirm. For example: |
| | > |
| | > return { handled: Window.confirm(\"Really quit?\") }; |
+=========+===========================================================+
| destroy | > Generated when the Adobe Bridge application terminates. |
| | > Occurs when the user exits from Adobe Bridge by |
| | > selecting the **File \> Exit** command, when the user |
| | > closes the final open document, or when a script calls |
| | > the [App Object](#app-object)'s |
| | > [[quit()]{.underline}](#_bookmark45) function. |
| | > |
| | > The handler cannot override the default shutdown |
| | > behavior, but it can take additional actions before the |
| | > shutdown completes. |
+---------+-----------------------------------------------------------+

#### Document events

> You cannot define event handlers that override the default behavior of
> Document events. You can, however, write an event handler to take
> additional actions prior to the event. Such a handler could return a
> handled value of true in the result object, to prevent the default
> behavior, but this is not recommended.
>
> When a document event occurs, the event object has the following
> property values:

- The target, _eventObj_.object, is a [Document

  > Object](#document-object).

- The location, _eventObj_.location, can be app, web, or document,

  > depending on the type.

- The type, _eventObj_.type, is one of these event types:

+----------------------------------+----------------------------------+
| []{#\_bookmark118 .anchor}create | > Location is app. Generated |
| | > when a new document is |
| | > created. Occurs when the user |
| | > selects the **File \> New |
| | > Window** command, or when a |
| | > script creates a new document |
| | > with a constructor call. |
| | > |
| | > The new |
| | > [[Document]{.underline} |
| | > [Object |
| | ](#document-object) |
| | > is passed to the event |
| | > handler, but |
| | > |
| | > app.[docu |
| | ment](#_bookmark27) |
| | > still contains the previous |
| | > Document object. |
+==================================+==================================+
| deselect | > Location is document. |
| | > Generated when the OS window |
| | > focus is removed from the |
| | > browser window. |
+----------------------------------+----------------------------------+
| destroy | > Location is app. Generated |
| | > when a browser window is |
| | > closed. Occurs when the user |
| | > selects the **File** \> |
| | > **Close Window** command in |
| | > the UI, when a script closes a |
| | > browser window using the |
| | > [Document]{.underline} |
| | > [Object](#document-object)'s |
| | > close () method, or when Adobe |
| | > Bridge closes a browser window |
| | > because the application is |
| | > terminated. |
+----------------------------------+----------------------------------+
| []{#\_bookmark119 .anchor}loaded | > Location is app. Generated |
| | > when the Content pane has |
| | > finished its first iteration |
| | > through the files to be |
| | > displayed. |
| | > |
| | > The |
| | > Document.thumbnail.children |
| | > array is not populated until |
| | > some time after this event has |
| | > occurred for the document. A |
| | > script should delay making |
| | > calls to document selection |
| | > methods such as |
| | > [[selec |
| | t()]{.underline}](#_bookmark100) |
| | > and |
| | > [[deselec |
| | t()]{.underline}](#_bookmark95). |
+----------------------------------+----------------------------------+
| []{#\_bookmark120 .anchor}open | > Location is document. |
| | > Generated when the browser |
| | > gets the input focus. |
| | > |
| | > The new |
| | > [[Document]{.underline} |
| | > [Object |
| | ](#document-object) |
| | > is passed to the event |
| | > handler, but |
| | > |
| | > app.[docu |
| | ment](#_bookmark27) |
| | > still contains the previous |
| | > Document object. |
+----------------------------------+----------------------------------+
| select | > Location is document. |
| | > Generated when the OS window |
| | > focuses on the browser window. |
+----------------------------------+----------------------------------+
| []{#\_bookmark121 | > Location is document. |
| .anchor}selectionsChanged | > Generated just after the |
| | > selection is changed in the |
| | > UI, as a result of script or |
| | > user action. The document |
| | > [[select |
| | ions](#_bookmark86) |
| | > list reflects the |
| | > post-selection state. |
+----------------------------------+----------------------------------+
| []{#\_bookmark122 | > Location is document. |
| .anchor}selectionsChanging | > Generated just before the |
| | > selection is changed in the |
| | > UI, as a result of script or |
| | > user action. The document |
| | > [[select |
| | ions](#_bookmark86) |
| | > list reflects the |
| | > pre-selection state. |
+----------------------------------+----------------------------------+

+--------------------+------------------------------------------------+
| workspacesPreLoad | > Location is document. Generated just before |
| | > workspaces are loaded from disk into a new |
| | > [Document |
| | > Object](#document-object). If |
| | > your script-created |
| | > [Tabb |
| | edPalette](#tabbedpalette-object) |
| | > |
| | [Object](#tabbedpalette-object) |
| | > is intended to be part of a workspace, you |
| | > should create it in handling this event. |
+====================+================================================+
| workspacesPostLoad | > Location is document. Generated just after |
| | > workspaces have been loaded from disk into a |
| | > new [Document |
| | > Object](#document-object). |
+--------------------+------------------------------------------------+

#### Thumbnail events

> When a thumbnail event occurs, the event object has the following
> property values:

- The target, _eventObj_.object, is a [Thumbnail

  > Object](#thumbnail-object).

- The location, _eventObj_.location, is document for an interaction

  > with the Folders or Content pane, or favorites for an interaction
  > with the Favorites palette.

  - If location is favorites, the favorites property contains the
    > [Favorites Object](#favorites-object) and the
    > section property reflects whether the target thumbnail is a
    > predefined or user-defined member of the favorites array.

- The _eventObj_.document property contains the [Document

  > Object](#document-object) for the browser window in
  > which the event occurred.

- The type, _eventObj_.type, is one of these event types:

+--------+------------------------------------------------------------+
| add | > Location is favorites. Generated when the user adds a |
| | > new node to the Favorites palette. |
+========+============================================================+
| hover | > Location is document. Generated when the cursor hovers |
| | > over a thumbnail. Your handler can override the text |
| | > displayed in the tooltip box. Return the text to be |
| | > displayed in the result object property tipText. |
+--------+------------------------------------------------------------+
| modify | > Location is favorites. Generated when the user modifies |
| | > new node to the Favorites palette by adding a subnode to |
| | > it. |
+--------+------------------------------------------------------------+
| move | > Location is favorites. Generated when the user changes |
| | > the position of a node in the Favorites palette. |
+--------+------------------------------------------------------------+

+----------------------------------+----------------------------------+
| open | > Location is document. |
| | > Generated when a file |
| | > thumbnail in the Content pane |
| | > is opened with an application |
| | > other than Adobe Bridge. |
| | > Occurs when the user |
| | > successfully opens a thumbnail |
| | > with the **File \> Open** |
| | > command, or by |
| | > double-clicking, or when a |
| | > script calls the [Thumbnail |
| | > Object](#thumbnail-object)'s |
| | > open method. |
| | > |
| | > Also generated when a folder |
| | > thumbnail is opened in the |
| | > Content pane, which opens that |
| | > folder in an Adobe Bridge |
| | > browser window. If this opens |
| | > a new browser window, |
| | > app.[docu |
| | ment](#_bookmark27) |
| | > contains the Document object |
| | > for the browser in which the |
| | > thumbnail was clicked, and the |
| | > new browser that will display |
| | > the contents is passed to the |
| | > event handler. |
| | > |
| | > By default, Bridge determines |
| | > which application is used to |
| | > open a thumbnail based on the |
| | > file type and Preferences |
| | > settings. If you want to |
| | > change this behavior, it is |
| | > best to try to affect as few |
| | > file types as possible while |
| | > still accomplishing the goal |
| | > of your script. If you do want |
| | > to override this behavior for |
| | > all file types, it is better |
| | > to provide a context menu item |
| | > rather than overriding the |
| | > double-click behavior. In the |
| | > latter case, users will lose |
| | > the ability to use the |
| | > Preferences settings through |
| | > your script. |
+==================================+==================================+
| []{#\_bookmark125 | > Location is document. |
| .anchor}openWith | > Generated when a user makes a |
| | > selection of thumbnails in the |
| | > Content pane, then selects an |
| | > application from the **Open |
| | > With** submenu of the **File** |
| | > or context menu. The object |
| | > provides a platform-specific |
| | > path string to the selected |
| | > application. |
+----------------------------------+----------------------------------+
| preview | > Location is document. |
| | > Generated when an image |
| | > thumbnail in the Content pane |
| | > is selected. The handler can |
| | > return an object in which the |
| | > result value is an array |
| | > containing text captions to |
| | > display under the image in the |
| | > Preview pane. For example: |
| | > |
| | > { handled: true, result: |
| | > \[\"my image\", \"new preview |
| | > caption\"\] } |
| | > |
| | > The preview caption can be |
| | > modified this way for images |
| | > displayed in filmstrip view as |
| | > well. |
+----------------------------------+----------------------------------+
| remove | > Location is favorites. |
| | > Generated when the user |
| | > removes a node from the |
| | > Favorites palette. |
+----------------------------------+----------------------------------+

#### PreferencesDialog events

> You cannot override the default behavior of a Preferences dialog
> event. You can, however, write an event handler to take additional
> actions prior to the default action, such as adding a panel that
> reflects your own preferences, and interpreting the results from that
> panel.
>
> When an Preferences dialog event occurs, the event object has the
> following property values:

- The target, _eventObj_.object, is the [[PreferencesDialog

  > Object](#preferencesdialog-object)

- The location, _eventObj_.location, is the string prefs.

- The type, _eventObj_.type, is one of these event types:

+--------+------------------------------------------------------------+
| cancel | > Generated when the user clicks **Cancel** in the |
| | > Preferences dialog. |
+========+============================================================+
| create | > Generated when the user invokes the Preferences dialog. |
+--------+------------------------------------------------------------+

+----------+----------------------------------------------------------+
| destroy | > Generated when the user closes the Preferences dialog |
| | > using the window frame's close button. |
+==========+==========================================================+
| disabled | > Generated when the user disables a startup script |
| | > using the Startup Scripts page of the Preferences |
| | > dialog. The event handler receives an additional |
| | > argument, the script name, and can remove any |
| | > Favorites nodes added by a node-handling extension |
| | > associated with the script. |
| | > |
| | > Also generated when the user disables a node in the |
| | > Standard section of the Favorites palette. In this |
| | > case, the event object's |
| | > [uri](#_bookmark110) property contains |
| | > the URI of the node. |
+----------+----------------------------------------------------------+
| enabled | > Generated when the user enables a startup script using |
| | > the Startup Scripts page of the Preferences dialog. |
| | > The event handler receives an additional argument, the |
| | > script name, and can add any Favorites nodes needed by |
| | > a node-handling extension associated with the script. |
| | > |
| | > Also generated when the user enables a node in the |
| | > Standard section of the Favorites palette. In this |
| | > case, the event object's |
| | > [uri](#_bookmark110) property contains |
| | > the URI of the node. |
+----------+----------------------------------------------------------+
| ok | > Generated when the user clicks **OK** in the |
| | > Preferences dialog. |
+----------+----------------------------------------------------------+

## Favorites Object

> Represents the navigation nodes that appear in the Favorites palette
> in the Adobe Bridge browser. The Favorites object contains two arrays
> of [Thumbnail Object](#thumbnail-object)s; one for the
> top, or _standard_ section, which contains a predefined set of nodes,
> and one for the bottom, or _user_ section, where the user can choose
> which nodes to display.
>
> While the Folders palette shows the full navigation hierarchy, with
> all folders and subfolders that Adobe Bridge can access, the Favorites
> palette shows only certain top-level folders and one level of
> subfolders. Subfolders in the Favorites palette can be, but are not
> necessarily, children of the Thumbnail for the parent node.
>
> Access the Favorites object through the [App
> Object](#app-object)'s favorites, standardFavorites, or
>
> userFavorites properties:
>
> currentFavorites = app.favorites currentStandardFavorites =
> app.standardFavorites currentUserFavorites = app.userFavorites

### Favorites properties

+----------------------------+----------+----------------------------+
| length | > Number | > The number of |
| | | > [Thumbnail]{.underline} |
| | | > [Object](#thumbnail-object)s |
| | | > in the current |
| | | > [section](#_bookmark131) |
| | | > of the Favorites |
| | | > palette. |
+============================+==========+============================+
| []{#\_bookmark131 | > String | > Sets the section of the |
| .anchor}section | | > Favorites palette for |
| | | > the next node operations |
| | | > in the immediate scope. |
| | | > The value does not |
| | | > persist. One of: |
| | | > |
| | | > **standard**---The top |
| | | > section of the Favorites |
| | | > palette containing |
| | | > predefined nodes. |
| | | > |
| | | > **user** (default)---The |
| | | > bottom section of the |
| | | > Favorites palette |
| | | > containing user-selected |
| | | > nodes. |
+----------------------------+----------+----------------------------+

### Favorites functions

+----------------------------------+----------------------------------+
| add() | > Appends a new node into the |
| | > current section of the |
| _favoritesObj_.add (_thumbnail_) | > favorites array, and updates |
| | > the Favorites palette to show |
| | > the new node at the root |
| | > level. |
| | > |
| | > Returns true on success. If |
| | > the referenced node is already |
| | > in the array, returns false |
| | > and does not change the array. |
+==================================+==================================+
| > _thumbnail_ The | |
| > [[Thumbnail]{.underline} | |
| > [Object] | |
| {.underline}](#thumbnail-object) | |
| > for the node to add. | |
+----------------------------------+----------------------------------+
| []{#\_bookmark133 | > Inserts a new subnode into the |
| .anchor}addChild() | > current section of the |
| _favoritesObj_.addChild | > favorites array, and updates |
| (_parentNode, subNode_) | > the Favorites palette to show |
| | > the new node below its parent |
| | > when the parent is selected. |
| | > |
| | > Returns true on success. If |
| | > the specified parent node is |
| | > not in favorites array, |
| | > returns false and does not add |
| | > the subnode. |
+----------------------------------+----------------------------------+
| > _parentNode_ The | |
| > [[Thumbnail]{.underline} | |
| > [Object] | |
| {.underline}](#thumbnail-object) | |
| > for the parent node. Must be a | |
| > root node in the favorites | |
| > array. | |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| > _subNode_ | > The [[Thumbnail]{.underline} |
| | > [Object] |
| | {.underline}](#thumbnail-object) |
| | > for the subnode. This node can |
| | > be, but does not need not to |
| | > be a child of the parent |
| | > Thumbnail. It is not added to |
| | > the parent's children array. |
+==================================+==================================+
| associateWorkspace() | Associates a named workspace |
| _ | with a thumbnail in the standard |
| favoritesObj_.associateWorkspace | section of the Favorites |
| (_thumbnail_, _workspace_) | palette. When the user clicks |
| | this thumbnail, this workspace |
| | becomes current. |
| | |
| | Returns true on success. If the |
| | thumbnail is in the user |
| | section, or is not in the |
| | Favorites palette, returns false |
| | and does nothing. |
+----------------------------------+----------------------------------+
| > _thumbnail_ | > The [Thumbnail]{.underline} |
| > | > [Object](#thumbnail-object). |
| | > |
| | > The workspace name. See |
| | > Document.[worksp |
| | ace](#_bookmark91). |
+----------------------------------+----------------------------------+
| clearAll() | Deletes all the nodes from the |
| | current section of the favorites |
| _favoritesObj_.clearAll () | array and updates the Favorites |
| | palette. |
| | |
| | Returns undefined. |
+----------------------------------+----------------------------------+
| contains() | Reports whether the list of |
| | favorites currently contains a |
| _favoritesObj_.contains(_uri_) | specific node, either in the |
| | standard or user sections. |
| | |
| | Returns true if the node is in |
| | the current favorites list, |
| | false |
| | |
| | otherwise. |
+----------------------------------+----------------------------------+
| > _uri_ | > The Bridge URI string for the |
| | > node. |
+----------------------------------+----------------------------------+
| disable() | Disables a node from the |
| | standard section, removing it |
| _favoritesObj_.disable(_uri_) | from display in the browser, but |
| | leaving it as an unchecked |
| | option in the General page of |
| | the Preferences dialog. |
| | |
| | Returns undefined. |
+----------------------------------+----------------------------------+
| > _uri_ | > The Bridge URI string for the |
| | > node. |
+----------------------------------+----------------------------------+
| enable() | Enables a node from the standard |
| | section, displaying it in the |
| _favoritesObj_.enable(_uri_) | browser, and checking the |
| | corresponding option in the |
| | General page of the Preferences |
| | dialog. |
| | |
| | Returns undefined. |
+----------------------------------+----------------------------------+
| > _uri_ | > The Bridge URI string for the |
| | > node. |
+----------------------------------+----------------------------------+
| getChildren() | Retrieves the subnodes of a node |
| | in the Standard section of the |
| _favoritesObj_.getChildren | Favorites palette. The node can |
| (_uri_) | be in either the enabled or |
| | disabled state. |
| | |
| | In this context, _children_ |
| | means subnodes added with |
| | |
| | Favorites.[[addChild |
| | ()]{.underline}](#_bookmark133), |
| | rather then Thumbnail children. |
| | |
| | Returns an array of URI strings |
| | for the child nodes, or |
| | undefined if the node is not in |
| | the Standard section or not in |
| | the Favorites palette. |
+----------------------------------+----------------------------------+
| > _uri_ | > The Bridge URI string for the |
| | > parent node. |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| insert() _favoritesObj_.insert | > Inserts a new node into the |
| (_thumbnail_ \[, _index_\]) | > current section of the |
| | > favorites array, and updates |
| | > the Favorites palette to show |
| | > the new node at the root |
| | > level. |
| | > |
| | > Returns true on success. If |
| | > the referenced node is already |
| | > in the array, returns false |
| | > and does not change the array. |
+==================================+==================================+
| > _thumbnail_ The | |
| > [[Thumbnail]{.underline} | |
| > [Object] | |
| {.underline}](#thumbnail-object) | |
| > for the node to insert. | |
| > | |
| > _index_ Optional. A 0-based | |
| > index into the existing node | |
| > array at which to insert the | |
| > new node, or an object | |
| > reference for a node in the | |
| > existing node array. The node | |
| > is inserted before this | |
| > existing node. If the value is | |
| > beyond the end, is not in the | |
| > existing node array, or is not | |
| > supplied, the new node is | |
| > appended to the end of the | |
| > array. | |
+----------------------------------+----------------------------------+
| remove() | > Removes the specified |
| | > script-defined node from the |
| _f | > favorites array and updates |
| avoritesObj_.remove(_thumbnail_) | > the Favorites palette. Scripts |
| | > cannot access predefined |
| | > nodes. |
| | > |
| | > Returns true on success. |
+----------------------------------+----------------------------------+
| > _thumbnail_ The | |
| > [[Thumbnail]{.underline} | |
| > [Object] | |
| {.underline}](#thumbnail-object) | |
| > for the node to remove. | |
+----------------------------------+----------------------------------+

## IconListPanelette Object

> An instantiable subclass of the [PaneletteBase]{.underline} [Class](#panelette-base-class),
> representing a member sub-panel of a
> [InspectorPanel](#inspectorpanel-object) > [Object](#inspectorpanel-object) that displays two
> columns. The left column contains an icon, and the right column
> contains text.
>
> The text can be static, or can be obtained dynamically from the
> associated thumbnail at display time. See [Panelette markup
> elements](#panelette-markup-elements).

### IconListPanelette constructor

> To create a new object, use the new operator. The _name_ and
> _titleMarkup_ parameters set the corresponding properties inherited
> from the [Panelette Base Class](#panelette-base-class).
>
> This version can be used when all display data is known in advance:
>
> new IconListPanelette(_name_, _titleMarkup_, _rows_);

+----------+----------------------------------------------------------+
| > _rows_ | > A collection of two-member arrays describing the rows |
| | > to display in the panelette. Sets the |
| | > [rows](#_bookmark138) property. |
+----------+----------------------------------------------------------+

> This version provides the ability to obtain data dynamically at
> display time.
>
> new IconListPanelette(_name_, _titleMarkup_, _rows, columnText_);

+----------------+----------------------------------------------------+
| > _rows_ | > The icons shown in the first column. An array of |
| | > [Thumbnail |
| | > Object](#thumbnail-object)s or a |
| | > string containing panelette markup that obtains |
| | > a set of thumbnails at display time. |
+================+====================================================+
| > _columnText_ | > A corresponding array of strings, where each |
| | > member is a line of text with which to label the |
| | > corresponding thumbnail. The text strings can |
| | > contain [Panelette |
| | > markup](#panelette-markup-elements) |
| | > [ |
| | elements](#panelette-markup-elements) |
| | > to access dynamic data. |
+----------------+----------------------------------------------------+

### IconListPanelette properties

+----------------------+----------------------+----------------------+
| []{#\_bookmark138 | > Array of Array of | > A collection of |
| .anchor}rows | > 2-member Array | > two-member arrays |
| | | > describing the |
| | | > rows to display in |
| | | > the panelette. |
| | | > Each member of the |
| | | > member arrays |
| | | > corresponds to a |
| | | > column. |
| | | |
| | | - The first member |
| | | > of each member |
| | | > array |
| | | > specifies the |
| | | > icon displayed |
| | | > in the first |
| | | > column, as a |
| | | > [[Th |
| | | umbnail]{.underline} |
| | | > |
| | | [Object]{.underline} |
| | | ](#thumbnail-object) |
| | | > or a 16x16 |
| | | > pixel JPG, |
| | | > PNG, or system |
| | | > icon. |
| | | |
| | | - The second |
| | | > member, |
| | | > displayed in |
| | | > the second |
| | | > column, is a |
| | | > string that |
| | | > can contain |
| | | > markup |
| | | > elements to |
| | | > access dynamic |
| | | > data. See |
| | | > [Pa |
| | | nelette]{.underline} |
| | | > [markup |
| | | > elements](#panelet |
| | | te-markup-elements). |
| | | |
| | | > Read only. |
+----------------------+----------------------+----------------------+

## InspectorPanel Object

> Represents an object-inspection panel, a special type of tabbed
> palette that displays contextual information for a selected thumbnail.
>
> Your script defines what kind of related information to display, and
> how to display it. The panel serves as a frame and parent for
> subpanels that actually display the information. Subpanels are
> represented by members of the [Panelette Base
> Class](#panelette-base-class) contained in this parent
> panel.

- Register a inspection panel that you create to make it available to
  > Adobe Bridge, using the app

> method [[registerInspectorPanel()]{.underline}](#_bookmark50).

- To turn the display of registered inspection panels on or off in a
  > particular browser window, set
  > [displayInspectorView](#_bookmark80) in the
  > [Document Object](#document-object).

### InspectorPanel constructor

> To create a new object, use the new operator:
>
> new InspectorPanel(_title_, _displayTitle_\*, _visible_\*, _wide_\*,
> _sortPosition_\*);
>
> Parameters set the corresponding properties.

### InspectorPanel properties

+---------------------------+------------+---------------------------+
| displayInInspector | > Boolean | > When true, this panel |
| | | > is displayed when |
| | | > Document. |
| | | [displayInspectorView](#_bookmark80) |
| | | > is true, if the |
| | | > [ |
| | | hidePanelForThumbnail](#_bookmark146) |
| | | > callback returns true |
| | | > or is not implemented. |
| | | > |
| | | > When false, this panel |
| | | > is never displayed, and |
| | | > is also hidden in the |
| | | > Inspector page of the |
| | | > Preferences dialog. |
+===========================+============+===========================+
| []{#\_bookmark145 | > String | > Optional. The localized |
| .anchor}displayTitle | | > title string to display |
| | | > in the panel's tab |
| | | > header. The string can |
| | | > include values derived |
| | | > dynamically at display |
| | | > time, using |
| | | > [[P |
| | | anelette](#p |
| | | anelette-markup-elements) |
| | | > [markup |
| | | > e |
| | | lements](#pa |
| | | nelette-markup-elements). |
| | | > |
| | | > Read only, supplied on |
| | | > creation. Supplying |
| | | > this value allows you |
| | | > to use the same panel |
| | | > object with different |
| | | > titles for different |
| | | > node types. If this |
| | | > value is not supplied, |
| | | > the title value is |
| | | > displayed. |
+---------------------------+------------+---------------------------+
| flyoutMenuId | > String | > The unique menu |
| | | > identifier of a |
| | | > script-defined flyout |
| | | > menu for this panel. |
| | | > See [MenuElement |
| | | > Object](#menuelement-object). |
| | | > Read only. |
+---------------------------+------------+---------------------------+
| []{#\_bookmark146 | > Function | > Optional. A |
| .anc | | > script-defined function |
| hor}hidePanelForThumbnail | | > that takes a |
| | | > [[Thumbnail |
| | | > Object](#thumbnail-object) |
| | | > as a parameter and |
| | | > returns true if the |
| | | > thumbnail allows this |
| | | > panel to be displayed. |
| | | > Called on the focus |
| | | > thumbnail when the |
| | | > Inspector is displayed. |
| | | > Read/write. |
+---------------------------+------------+---------------------------+

+----------------------+----------------------+----------------------+
| minimized | > Boolean | > When true, the |
| | | > panel is minimized |
| | | > or iconified. |
+======================+======================+======================+
| []{#\_bookmark147 | > Array of Panelette | > A collection of |
| .anchor}panelettes | | > panelettes |
| | | > contained in this |
| | | > panel, in display |
| | | > order. Read only; |
| | | > use |
| | | > [[register |
| | | Panelette()]{.underl |
| | | ine}](#_bookmark150) |
| | | > and |
| | | > [[unregister |
| | | Panelette()]{.underl |
| | | ine}](#_bookmark151) |
| | | > to manage the |
| | | > list. Contains |
| | | > instances of the |
| | | > type-specific |
| | | > panelette |
| | | > subclasses: |
| | | > |
| | | > |
| | | [[IconListPanelette |
| | | > Object] |
| | | {.underline}](#iconl |
| | | istpanelette-object) |
| | | > [TextPanelette |
| | | > Obj |
| | | ect](#t |
| | | extpanelette-object) |
| | | > |
| | | [ThumbnailPanelette |
| | | > Object](#thumbn |
| | | ailpanelette-object) |
+----------------------+----------------------+----------------------+
| sortPosition | > Number | > The preferred |
| | | > default position |
| | | > of this tabbed |
| | | > panel in the |
| | | > Inspector, |
| | | > relative to other |
| | | > panels. In the |
| | | > range \[1..100\]. |
| | | > Panels with lower |
| | | > values are above |
| | | > and to the left. |
| | | > Read/write. |
+----------------------+----------------------+----------------------+
| title | > String | > A unique |
| | | > identifying name |
| | | > for this panel. If |
| | | > no |
| | | > [[d |
| | | isplayTitle](#_bookmark145) |
| | | > is specified, this |
| | | > is shown in the |
| | | > top header bar. |
| | | > Read/write. |
+----------------------+----------------------+----------------------+
| visible | > Boolean | > When true, the |
| | | > majority of this |
| | | > panel is visible |
| | | > on the screen. |
| | | > When false, the |
| | | > panel is minimized |
| | | > or iconified, or |
| | | > most of it is |
| | | > positioned off the |
| | | > screen. Read only. |
+----------------------+----------------------+----------------------+
| wide | > Boolean | > When true, this |
| | | > panel occupies the |
| | | > entire available |
| | | > horizontal space. |
| | | > When false, the |
| | | > default, the panel |
| | | > occupies one third |
| | | > of available |
| | | > space. Read/write. |
+----------------------+----------------------+----------------------+

### InspectorPanel functions

+----------------------------------+----------------------------------+
| []{#\_bookmark150 | Registers a script-defined |
| .anchor}registerPanelette() | panelette as a member of this |
| _panelObj_.registerPanelette | panel, adding it to |
| (_panelette_) | [panelet |
| | tes](#_bookmark147) |
| | list. |
| | |
| | Returns true on success, false |
| | if the panelette is already |
| | registered or the operation |
| | fails. |
+==================================+==================================+
| > _panelette_ An instance of one | |
| > of the type-specific panelette | |
| > subclasses: | |
| > | |
| > [IconListPanelette | |
| > Object](#iconlistpanelette-object) | |
| > [TextPanelette | |
| > Object](#textpanelette-object) | |
| > [ThumbnailPanelette | |
| > Object](#thumbnailpanelette-object) | |
+----------------------------------+----------------------------------+
| []{#\_bookmark151 | Removes a member panelette from |
| .anchor}unregisterPanelette() | this panel. |
| _panelObj_.unregisterPanelette | |
| (_panelette_) | Returns undefined. |
+----------------------------------+----------------------------------+
| > _panelette_ The panelette | |
| > instance. | |
+----------------------------------+----------------------------------+

## MenuElement Object

> The MenuElement object is used to represent the application menu bar,
> menus and submenus, and individual items or commands. Adobe Bridge
> creates MenuElement instances for each of the existing menu elements,
> and you can create additional instances to extend the existing menus.
>
> A script can execute a menu command using
> app.document.[[chooseMenuItem()]{.underline}](#_bookmark94).
>
> Existing menu elements that can be extended have predefined
> identifiers, listed in ['Adobe Bridge
> menu](#adobe-bridge-menu-and-command-identifiers) [and
> command identifiers' on59](#adobe-bridge-menu-and-command-identifiers). Not all
> existing menu elements can be extended. You can only add a new menu or
> command before or after an existing menu or command, which you must
> specify using the predefined unique identifier.
>
> Use the Menu.[[create()]{.underline}](#_bookmark156) static function
> to create new menu items, rather than the new operator. This function
> behaves correctly if a menu item with the same name already exists.

### MenuElement class functions

> The MenuElement class defines these static functions that you can use
> to extend and work with existing menu elements.

+----------------------------------+----------------------------------+
| []{#\_bookmark156 | > Adds a new menu to the menu |
| .anchor}create() | > bar, a new submenu to an |
| MenuElement.create (_type_, | > existing menu, or a new |
| _text_, _location\[_, _id\]_); | > command to an existing menu or |
| | > submenu. |
| | > |
| | > Returns the new MenuElement |
| | > object. |
+==================================+==================================+
| > _type_ | > The type of menu element, one |
| | > of: |
| | > |
| | > **menu**---a menu or submenu |
| | > **command**---a menu item |
+----------------------------------+----------------------------------+
| > _text_ | > The localizable string that is |
| | > displayed as the label text. |
| | > Script-created menu and menu |
| | > commands cannot have keyboard |
| | > shortcuts or icons. |
+----------------------------------+----------------------------------+
| > _location_ | > A string describing the |
| | > location of the new menu |
| | > element, with respect to |
| | > existing menu elements. If the |
| | > relative element is not found, |
| | > the new element is appended to |
| | > the Tools menu. |
| | > |
| | > The location specifier can |
| | > take one of the following |
| | > forms: |
| | > |
| | > **before** |
| | > _identifier_---Create the new |
| | > element before the given menu |
| | > element. **after** |
| | > _identifier_---Create the new |
| | > element before the given menu |
| | > element. **at the end of** |
| | > _identifier_---Append the new |
| | > element to the given menu. |
| | > |
| | > The identifier must be for a |
| | > menu, not a command item. |
| | > |
| | > **at the beginning of** |
| | > _identifier_---Create the new |
| | > element as the first item in |
| | > the given menu. The identifier |
| | > must be for a menu, not a |
| | > command item. |
| | > |
| | > To insert a separator before |
| | > or after the new element, |
| | > specify a dash (**_-_**) at |
| | > the beginning or end of the |
| | > location string. For example, |
| | > this value draws separators |
| | > before and after the new |
| | > element, which is added after |
| | > the Find submenu in the Edit |
| | > menu: |
| | > |
| | > -after /bridge/edit/find- |
| | > |
| | > A string that does not conform |
| | > to these rules causes a |
| | > run-time error. |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| > _id_ The unique identifier for | |
| > this element. Optional. | |
| | |
| - If the ID of an existing | |
| > menu or submenu is | |
| > supplied, the call returns | |
| > that | |
| | |
| > MenuElement object. | |
| | |
| - If the ID of an existing | |
| > command is supplied, the | |
| > call causes a JavaScript | |
| > error. | |
| | |
| - If not supplied, the call | |
| > generates a numeric value, | |
| > which can be found in the | |
| | |
| > id property of the returned | |
| > menu object. | |
+==================================+==================================+
| []{#\_bookmark157 .anchor}find() | > Retrieves a menu element using |
| | > its unique identifier. |
| MenuElement.find (_id_) | > |
| | > Returns the MenuElement object |
| | > for the specified menu or menu |
| | > item, or null if no such |
| | > element is found. |
+----------------------------------+----------------------------------+
| > _id_ String. The unique | |
| > identifier for the menu | |
| > element to find. | |
| | |
| **_Example_** | |
| | |
| This example checks to see | |
| whether a specific menu item | |
| already exists to avoid an error | |
| if the script is executed a | |
| second time. | |
| | |
| var menu = MenuElement.find | |
| (\'myMenuId\'); | |
| | |
| if (menu = null) //element does | |
| not yet exist | |
| | |
| // add menu element | |
+----------------------------------+----------------------------------+
| remove() | > Removes a script-defined menu |
| | > or menu item. |
| MenuElement.remove (_id_) | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _id_ String. The unique | |
| > identifier for the menu | |
| > element to remove. | |
+----------------------------------+----------------------------------+

### MenuElement properties

+--------------+-----------+-----------------------------------------+
| altDown | > Boolean | > When true, the ALT modifier key was |
| | | > pressed when the item was selected. |
| | | > Read only. |
+==============+===========+=========================================+
| canBeChecked | > Boolean | > When true, the menu item is a |
| | | > bi-state item that can be checked. |
| | | > Otherwise, the menu item cannot be |
| | | > checked. Read only. |
+--------------+-----------+-----------------------------------------+
| checked | > Boolean | > When true, the command is selected. A |
| | | > check mark appears next to the label. |
| | | > When false, the item is not selected, |
| | | > and no check mark is shown. |
| | | > Read/write. |
+--------------+-----------+-----------------------------------------+
| cmdDown | > Boolean | > When true, the COMMAND modifier key |
| | | > was pressed when the item was |
| | | > selected. Read only. |
+--------------+-----------+-----------------------------------------+
| ctrlDown | > Boolean | > When true, the CONTROL modifier key |
| | | > was pressed when the item was |
| | | > selected. Read only. |
+--------------+-----------+-----------------------------------------+
| enabled | > Boolean | > When true, the menu or command is |
| | | > selectable. When false, it is grayed |
| | | > out and cannot be selected. |
| | | > Read/write. |
+--------------+-----------+-----------------------------------------+
| id | > String | > A unique identifier. Read only. |
| | | > Identifiers take the form: |
| | | > |
| | | > _/app/menu_/_submenu_/_command_ |
| | | > |
| | | > They are not localized, and are case |
| | | > sensitive. |
+--------------+-----------+-----------------------------------------+

+---------------------------+------------+---------------------------+
| onDisplay | > Function | > The callback function |
| | | > that is called when the |
| | | > application is about to |
| | | > display this menu or |
| | | > menu item. The function |
| | | > takes no arguments, and |
| | | > returns nothing. It can |
| | | > change the enabled and |
| | | > checked properties |
| | | > according to the state |
| | | > of the application. |
| | | > |
| | | > **TIP:** This is called |
| | | > frequently and affects |
| | | > performance. Avoid |
| | | > |
| | | > time-intensive |
| | | > processing, such as |
| | | > checking metadata, or |
| | | > iteration over an |
| | | > entire, large |
| | | > selection. Use |
| | | > Docu |
| | | ment.[selectionLength](#_bookmark85) |
| | | > to check the size of |
| | | > the selection before |
| | | > accessing it. |
| | | > |
| | | > If an item is enabled |
| | | > incorrectly, you can |
| | | > handle the incorrect |
| | | > cases in the |
| | | > [onSelect](#_bookmark160) |
| | | > function, which is |
| | | > called far less often. |
+===========================+============+===========================+
| optionDown | > Boolean | > When true, the OPTION |
| | | > modifier key was |
| | | > pressed when the item |
| | | > was selected. Read |
| | | > only. |
+---------------------------+------------+---------------------------+
| []{#\_bookmark160 | > Function | > The callback function |
| .anchor}onSelect | | > that is called when the |
| | | > user selects the menu |
| | | > or menu item. The |
| | | > function takes no |
| | | > arguments, and returns |
| | | > nothing. It implements |
| | | > the behavior of a menu |
| | | > item. |
| | | > |
| | | > The callback can check |
| | | > this object's |
| | | > properties to respond |
| | | > to the following |
| | | > modifier keys: |
| | | > |
| | | > if (this.ShiftDown) |
| | | > |
| | | > // Shift key pressed if |
| | | > (this.altDown) |
| | | > |
| | | > // Alt key pressed if |
| | | > (this.ctrlDown) |
| | | > |
| | | > // Control key pressed |
| | | > if (this.cmdDown) |
| | | > |
| | | > // Command key pressed |
| | | > if (this.optionDown) |
| | | > |
| | | > // Option key pressed |
+---------------------------+------------+---------------------------+
| shiftDown | > Boolean | > When true, the SHIFT |
| | | > modifier key was |
| | | > pressed when the item |
| | | > was selected. Read |
| | | > only. |
+---------------------------+------------+---------------------------+
| text | > String | > The displayed label |
| | | > text, a localizable |
| | | > string. Read only. |
+---------------------------+------------+---------------------------+
| type | > String | > The type of menu |
| | | > element, one of: |
| | | > |
| | | > **menu**---A menu or |
| | | > submenu **command**---A |
| | | > menu item |
| | | > |
| | | > Read only. |
+---------------------------+------------+---------------------------+

### Adobe Bridge menu and command identifiers

> These unique identifiers are predefined for Adobe Bridge menus that
> can be extended.
>
> **NOTE:** Some menus and commands are dynamically created, and cannot
> be located with MenuElement.[[find()]{.underline}](#_bookmark157)
> unless they are visible. You can, however, use the menu and command
> IDs at any time to extend the menus.
>
> The menu/command-identifier mapping is organized as follows:

- [Top-levelmenu

  > identifiers](#top-level-menu-identifiers): Top-level
  > menus in the menu bar, tool bar, context menus and flyout menus.

- [Menu bar submenu and command

  > identifiers](#menu-bar-submenu-and-command-identifiers):
  > Items that appear in menu-bar menus.

- [Toolbar menusand

  > commands](#toolbar-menus-and-commands): Items that
  > appear in menus that drop down from toolbar icons.

- [Contextsubmenus and
  > commands](#context-and-flyout-submenus-and-commands):
  > Items that appear in context and flyout menus.

#### Top-level menu identifiers

> These tables list unique identifiers for the top-level menus in the
> menu bar, tool bar, context menus and flyout menus.

+------------------------------------+--------------------------------+
| []{#\_bookmark164 .anchor}**Menubar | > **Menu ID** |
| menus** | |
+====================================+================================+
| Bridge (Mac OS only) | > (not available) |
+------------------------------------+--------------------------------+
| File | > File |
+------------------------------------+--------------------------------+
| Edit | > Edit |
+------------------------------------+--------------------------------+
| View | > View |
+------------------------------------+--------------------------------+
| Stacks | > submenu/Stack |
+------------------------------------+--------------------------------+
| Label | > Labels |
+------------------------------------+--------------------------------+
| Tools | > Tools |
+------------------------------------+--------------------------------+
| Window | > Window |
+------------------------------------+--------------------------------+
| Help | > Help |
+------------------------------------+--------------------------------+
| []{#\_bookmark165 .anchor}**Toolbar | > **Menu ID** |
| menus** | |
+------------------------------------+--------------------------------+
| Refine | > iddmenu/RefineTask |
+------------------------------------+--------------------------------+
| Output | > iddmenu/Menu/OutputTask |
+------------------------------------+--------------------------------+
| (Other toolbar menus not available | |
| to scripts) | |
+------------------------------------+--------------------------------+
| []{#\_bookmark166 .anchor}**Context | > **Menu ID** |
| menus** | |
+------------------------------------+--------------------------------+
| Content pane thumbnail/background | > Thumbnail |
| context | |
+------------------------------------+--------------------------------+
| Favorites thumbnail context | > Bridge/ContextMenu/Favorites |
+------------------------------------+--------------------------------+

+----------------------------------+----------------------------------+
| Preview thumbnail context | > PreviewContextMenu |
+==================================+==================================+
| Palette context (commands not | > Bridge/ |
| available to scripts) | BrowserTabDocMenu/BrowserTabDock |
+----------------------------------+----------------------------------+
| Collections context | > Bridge/ContextMenu/Collection |
+----------------------------------+----------------------------------+
| (Other context menus not | |
| available to scripts) | |
+----------------------------------+----------------------------------+
| []{#\_bookmark167 | > **Menu ID** |
| .anchor}**Flyout menus** | |
+----------------------------------+----------------------------------+
| Main window in compact mode | > Bridge/CompactFlyoutMenu |
+----------------------------------+----------------------------------+
| (Flyout menus and commands | |
| generally not available to | |
| scripts) | |
+----------------------------------+----------------------------------+

#### Menu bar submenu and command identifiers

> These tables list unique identifiers for submenus and
> comman[]{#\_bookmark170 .anchor}ds in the top-level menus that appear
> in the menu bar.
>
> When a command opens a submenu, there is a command identifier for the
> item itself, which can be used to position commands in the parent
> menu, and a menu identifier for the submenu, as well as identifiers
> for the individual commands in the submenu.

###### Bridge menu items (Mac OS only)

+---------------------+-----------------------+
| **Bridge commands** | > **Menu ID** |
+=====================+=======================+
| About Bridge | > mondo/command/about |
+---------------------+-----------------------+
| Preferences | > Prefs |
+---------------------+-----------------------+
| Quit Bridge | > mondo/command/quit |
+---------------------+-----------------------+

> []{#\_bookmark172 .anchor}**File menu submenus and commands**

+-------------------+----------------------+
| **File submenus** | > **Menu ID** |
+===================+======================+
| Open With \> | > submenu/OpenWith |
+-------------------+----------------------+
| Open Recent \> | > submenu/OpenRecent |
+-------------------+----------------------+
| Move to \> | > submenu/MoveTo |
+-------------------+----------------------+
| Copy to \> | > submenu/CopyTo |
+-------------------+----------------------+
| Place \> | > submenu/Place |
+-------------------+----------------------+
| **File commands** | > **Menu ID** |
+-------------------+----------------------+
| New Window | > mondo/command/new |
+-------------------+----------------------+
| New Folder | > NewFolder |
+-------------------+----------------------+
| Open | > Open |
+-------------------+----------------------+
| Open With \> | > OpenWith |
+-------------------+----------------------+

+------------------------------------------+-----------------------+
| Open With \> \[_installed application_\] | > (not available) |
+==========================================+=======================+
| Open Recent \> | > item/OpenRecent |
+------------------------------------------+-----------------------+
| Open Recent \> _\[recent files}_ | > (not available) |
+------------------------------------------+-----------------------+
| Open Recent \> Clear Menu | > ClearOpenRecentList |
+------------------------------------------+-----------------------+
| Open in Camera Raw\... | > OpenInCameraRaw |
+------------------------------------------+-----------------------+
| Close Window | > mondo/command/close |
+------------------------------------------+-----------------------+
| Delete/Move to Trash | > MoveToTrash |
+------------------------------------------+-----------------------+
| Eject | > Eject |
+------------------------------------------+-----------------------+
| Return to\... | > ReturnToApplication |
+------------------------------------------+-----------------------+
| Reveal in Explorer/Finder | > Reveal |
+------------------------------------------+-----------------------+
| Reveal in Bridge | > RevealInBridge |
+------------------------------------------+-----------------------+
| Get Photos From Camera\... | > (not available) |
+------------------------------------------+-----------------------+
| Move to \> | > MoveTo |
+------------------------------------------+-----------------------+
| Move to \> _\[recent folders}_ | > (not available) |
+------------------------------------------+-----------------------+
| Move to \> Choose Folder | > MoveToChooseFolder |
+------------------------------------------+-----------------------+
| Copy to \> | > CopyTo |
+------------------------------------------+-----------------------+
| Copy to \> _\[recent folders}_ | > (not available) |
+------------------------------------------+-----------------------+
| Copy to \> Choose Folder | > CopyToChooseFolder |
+------------------------------------------+-----------------------+
| Place \> | > item/Place |
+------------------------------------------+-----------------------+
| Add To Favorites | > AddToFavorites |
+------------------------------------------+-----------------------+
| File Info\... | > FileInfo |
+------------------------------------------+-----------------------+
| Hide | > HideBridge |
+------------------------------------------+-----------------------+
| Exit | > mondo/command/quit |
+------------------------------------------+-----------------------+

> []{#\_bookmark173 .anchor}**Edit menu submenus and commands**

+---------------------+--------------------------+
| **Edit submenus** | > **Menu ID** |
+=====================+==========================+
| Develop Settings \> | > submenu/CameraRaw |
+---------------------+--------------------------+
| **Edit commands** | > **Menu ID** |
+---------------------+--------------------------+
| Undo Redo | > mondo/command/undoRedo |
+---------------------+--------------------------+
| Cut | > mondo/command/cut |
+---------------------+--------------------------+
| Copy | > mondo/command/copy |
+---------------------+--------------------------+

+-----------------------------------------+----------------------------+
| Paste | > mondo/command/paste |
+=========================================+============================+
| Duplicate | > Duplicate |
+-----------------------------------------+----------------------------+
| Select All | > mondo/command/selectAll |
+-----------------------------------------+----------------------------+
| Deselect All | > mondo/command/selectNone |
+-----------------------------------------+----------------------------+
| Invert Selection | > InvertSelection |
+-----------------------------------------+----------------------------+
| Find\... | > Search |
+-----------------------------------------+----------------------------+
| Develop Settings \> | > ApplyCameraRaw |
+-----------------------------------------+----------------------------+
| Develop Settings \> Camera Raw Defaults | > CRDefault |
+-----------------------------------------+----------------------------+
| Develop Settings \> Previous Conversion | > CRPrevious |
+-----------------------------------------+----------------------------+
| Develop Settings \> Copy Settings | > CRCopy |
+-----------------------------------------+----------------------------+
| Develop Settings \> Paste Settings | > CRPaste |
+-----------------------------------------+----------------------------+
| Develop Settings \> Clear Settings | > CRClear |
+-----------------------------------------+----------------------------+
| Rotate 180o | > Rotate180 |
+-----------------------------------------+----------------------------+
| Rotate 90o Clockwise | > Rotate90CW |
+-----------------------------------------+----------------------------+
| Rotate 90o Counterclockwise | > Rotate90CCW |
+-----------------------------------------+----------------------------+
| Creative Suite Color Settings\... | > SharedSettings |
+-----------------------------------------+----------------------------+
| Camera Raw Preferences\... | > CrPreferences |
+-----------------------------------------+----------------------------+
| Preferences\... | > Prefs |
+-----------------------------------------+----------------------------+

> []{#\_bookmark174 .anchor}**View menu commands**

+-----------------------+---------------------+
| **View submenus** | > **Menu ID** |
+=======================+=====================+
| Sort \> | > submenu/Sort |
+-----------------------+---------------------+
| **View commands** | > **Menu ID** |
+-----------------------+---------------------+
| Full Screen Preview | > FullScreenPreview |
+-----------------------+---------------------+
| Slideshow | > SlideShow |
+-----------------------+---------------------+
| Slideshow Options\... | > SlideShowOptions |
+-----------------------+---------------------+
| Review Mode | > ReviewMode |
+-----------------------+---------------------+
| Compact Mode | > ToggleCompactMode |
+-----------------------+---------------------+
| As Thumbnails | > View/Thumbnail |
+-----------------------+---------------------+
| As Details | > View/Details |
+-----------------------+---------------------+
| As List | > (not available) |
+-----------------------+---------------------+
| Show Thumbnail Only | > ShowThumbnailOnly |
+-----------------------+---------------------+

+---------------------------+----------------+
| Grid Lock | > GridLock |
+===========================+================+
| Show Reject Files | > ShowReject |
+---------------------------+----------------+
| Show Hidden Files | > ShowHidden |
+---------------------------+----------------+
| Show Folders | > ShowFolders |
+---------------------------+----------------+
| Show Items from Subfolder | > FlatView |
+---------------------------+----------------+
| Sort \> | > Sort |
+---------------------------+----------------+
| Sort \> Ascending Order | > Ascending |
+---------------------------+----------------+
| Sort \> \[_items_\] | > submenu/Sort |
+---------------------------+----------------+
| Sort \> Manually | > SortManually |
+---------------------------+----------------+
| Refresh | > Refresh |
+---------------------------+----------------+

> []{#\_bookmark175 .anchor}**Stacks menu commands**

**Stacks submenus** **Menu ID**

---

Frame Rate \> submenu/StackFrameRate
**Stacks commands** **Menu ID**
Group as Stack StackGroup
Ungroup from Stack StackUngroup
Open/Close Stack ToggleStackStateOpen ToggleStackStateClose
Promote to Top of Stack PromoteToTopOfStack
Expand All Stacks ExpandAllStacks
Collapse All Stacks CollapseAllStacks
Frame Rate \> (not available as command)
Frame Rate \> \[_rates_\] (not available)

> []{#\_bookmark176 .anchor}**Label menu commands**

+--------------------+-------------------+
| **Label commands** | > **Menu ID** |
+====================+===================+
| Rating | > (not available) |
+--------------------+-------------------+
| No Rating | > NoDot |
+--------------------+-------------------+
| Reject | > Reject |
+--------------------+-------------------+
| \* | > OneDot |
+--------------------+-------------------+
| \*\* | > TwoDots |
+--------------------+-------------------+

+-----------------+-------------------+
| \*\*\* | > ThreeDots |
+=================+===================+
| \*\*\*\* | > FourDots |
+-----------------+-------------------+
| \*\*\*\*\* | > FiveDots |
+-----------------+-------------------+
| Decrease Rating | > RemoveDot |
+-----------------+-------------------+
| Increase Rating | > AddDot |
+-----------------+-------------------+
| Label | > (not available) |
+-----------------+-------------------+
| No Label | > NoLabel |
+-----------------+-------------------+
| Select | > Red |
+-----------------+-------------------+
| Second | > Yellow |
+-----------------+-------------------+
| Approved | > Green |
+-----------------+-------------------+
| Review | > Blue |
+-----------------+-------------------+
| ToDo | > Purple |
+-----------------+-------------------+

> []{#\_bookmark177 .anchor}**Tools menu commands**

+------------------------------------+--------------------------------+
| **Tools submenus** | > **Menu ID** |
+====================================+================================+
| Edit Metadata Template \> | > submenu/EditMetadata |
+------------------------------------+--------------------------------+
| Append Metadata \> | > submenu/AppendMetadata |
+------------------------------------+--------------------------------+
| Replace Metadata \> | > submenu/ReplaceMetadata |
+------------------------------------+--------------------------------+
| Cache \> | > submenu/Cache |
+------------------------------------+--------------------------------+
| **Tools commands** | > **Menu ID** |
+------------------------------------+--------------------------------+
| Batch Rename\... | > BatchRename |
+------------------------------------+--------------------------------+
| Create Metadata Template\... | > CreateMetaTemplate |
+------------------------------------+--------------------------------+
| Edit Metadata Template \> | > item/EditMetadata |
+------------------------------------+--------------------------------+
| \[_templates_\] | > (not available) |
+------------------------------------+--------------------------------+
| Append Metadata \> | > item/AppendMetadataTemplate |
+------------------------------------+--------------------------------+
| \[_templates_\] | > (not available) |
+------------------------------------+--------------------------------+
| Replace Metadata \> | > item/ReplaceMetadataTemplate |
+------------------------------------+--------------------------------+
| \[_templates_\] | > (not available) |
+------------------------------------+--------------------------------+
| Cache \> | > item/Cache |
+------------------------------------+--------------------------------+
| Cache \> Build and Export | > BuildSubCaches |
| Cache\... | |
+------------------------------------+--------------------------------+
| Cache \> Purge Cache for Folder | > PurgeCache |
| _\[this folder\]_ | |
+------------------------------------+--------------------------------+

> []{#\_bookmark178 .anchor}**Window menu commands**

+------------------------------------------+------------------------------+
| **Window submenus** | > **Menu ID** |
+==========================================+==============================+
| Workspace \> | > submenu/Workspace |
+------------------------------------------+------------------------------+
| **Window commands** | > **Menu ID** |
+------------------------------------------+------------------------------+
| New Synchronized Window | > NewSynchronizedWindow |
+------------------------------------------+------------------------------+
| Workspace \> | > (not available as command) |
+------------------------------------------+------------------------------+
| Workspace \> Reset Workspace | > ResetCurrentWorkspace |
+------------------------------------------+------------------------------+
| Workspace \> New Workspace | > SaveWorkspace |
+------------------------------------------+------------------------------+
| Workspace \> Delete Workspace | > DeleteWorkspace |
+------------------------------------------+------------------------------+
| Workspace \>Reset Standard Workspace | > ResetWorkspace |
+------------------------------------------+------------------------------+
| Workspace \> \[_predefined workspaces_\] | > (not available) |
+------------------------------------------+------------------------------+
| \[_individual panels_\] | > (not available) |
+------------------------------------------+------------------------------+
| Path Bar | > PathBar |
+------------------------------------------+------------------------------+
| Minimize | > Minimize |
+------------------------------------------+------------------------------+
| \[_current folder_\] | > (not available) |
+------------------------------------------+------------------------------+

> []{#\_bookmark179 .anchor}**Help menu commands**

+------------------------------------+-----------------------+
| **Help commands** | > **Menu ID** |
+====================================+=======================+
| Adobe Bridge Help\... | > mondo/command/help |
+------------------------------------+-----------------------+
| Adobe Bridge Support Center\... | > SupportCenter |
+------------------------------------+-----------------------+
| Manage Extensions\... | > ManageExtensions |
+------------------------------------+-----------------------+
| Updates\... | > Updates |
+------------------------------------+-----------------------+
| Adobe Product Improvement Plan\... | > AdobePIP |
+------------------------------------+-----------------------+
| About Bridge\... | > mondo/command/about |
+------------------------------------+-----------------------+

#### Toolbar menus and commands

> These tables list unique identifiers for submenus and commands that
> appear in the menus that drop down from toolbar icons.

###### Reveal recent files commands

+---------------------------+---------------+
| **Reveal-recent command** | > **Menu ID** |
+---------------------------+---------------+

+----------------------+-----------------------+
| Clear Recent Files | > ClearOpenRecentList |
+======================+=======================+
| Clear Recent Folders | > ClearRecentFolders |
+----------------------+-----------------------+

> **Refine commands**

+--------------------+-------------------+
| **Refine command** | > **Menu ID** |
+====================+===================+
| Review Mode | > ReviewMode |
+--------------------+-------------------+
| Batch Rename | > (not available) |
+--------------------+-------------------+
| File Info | > (not available) |
+--------------------+-------------------+

> **Output commands**

+----------------------+-------------------+
| **Submenus/command** | > **Menu ID** |
+======================+===================+
| Output to Web or PDF | > (not available) |
+----------------------+-------------------+

> **Workspace commands**

+---------------------------+-------------------+
| **Submenus/command** | > **Menu ID** |
+===========================+===================+
| Reset Workspace | > (not available) |
+---------------------------+-------------------+
| New Workspace | > (not available) |
+---------------------------+-------------------+
| Delete Workspace | > (not available) |
+---------------------------+-------------------+
| Reset Standard Workspaces | > (not available) |
+---------------------------+-------------------+

> **Search commands**

+-------------------------------+-------------------+
| **Submenus/command** | > **Menu ID** |
+===============================+===================+
| Bridge Search: Current Folder | > (not available) |
+-------------------------------+-------------------+
| Clear Recent Search Menu | > (not available) |
+-------------------------------+-------------------+

> **Thumbnail and preview options commands**

+--------------------------+-------------------+
| **Submenus/command** | > **Menu ID** |
+==========================+===================+
| Prefer Embedded (Faster) | > (not available) |
+--------------------------+-------------------+
| High Quality On Demand | > (not available) |
+--------------------------+-------------------+
| Always High Quality | > (not available) |
+--------------------------+-------------------+
| Generate 100% Previews | > (not available) |
+--------------------------+-------------------+

> **Filter by ratings commands**

+---------------------------+-------------------+
| **Submenus/command** | > **Menu ID** |
+===========================+===================+
| Clear Filter | > (not available |
+---------------------------+-------------------+
| Show Rejected Items Only | > RejectStars |
+---------------------------+-------------------+
| Show Unrated Items Only | > NoStars |
+---------------------------+-------------------+
| Show _n_ Stars | > (not available) |
+---------------------------+-------------------+
| Show Labeled Items Only | > ShowLabeled |
+---------------------------+-------------------+
| Show Unlabeled Items Only | > ShowUnlabeled |
+---------------------------+-------------------+

> **Sort commands**

+----------------------+-------------------+
| **Submenus/command** | > **Menu ID** |
+======================+===================+
| By \[items\] | > (not available) |
+----------------------+-------------------+
| Manually | > (not available) |
+----------------------+-------------------+

> **Open recent file commands**

+----------------------+-----------------------+
| **Submenus/command** | > **Menu ID** |
+======================+=======================+
| Clear Menu | > ClearOpenRecentList |
+----------------------+-----------------------+

#### Context and flyout submenus and commands

> These tables list unique identifiers for submenus and commands that
> appear in context menus and flyout menus.

###### Thumbnail context menu submenus

+------------------------------------------------+--------------------+
| []{#\_bookmark183 .anchor}**Thumbnail context | > **Menu ID** |
| in Folders submenus** | |
+================================================+====================+
| Sort \> | > submenu/Sort |
+------------------------------------------------+--------------------+
| []{#\_bookmark184 .anchor}**Thumbnail context | > **Menu ID** |
| in Content pane: submenus** | |
+------------------------------------------------+--------------------+
| Open With \> | > submenu/OpenWith |
+------------------------------------------------+--------------------+
| Move to \> | > submenu/MoveTo |
+------------------------------------------------+--------------------+
| Copy to \> | > submenu/CopyTo |
+------------------------------------------------+--------------------+
| Label \> | > submenu/Label |
+------------------------------------------------+--------------------+

+----------+----------------+
| Sort \> | > submenu/Sort |
+==========+================+
| Stack \> | > Stacks |
+----------+----------------+

> []{#\_bookmark185 .anchor}**Thumbnail context menu commands**

+----------------------------------+----------------------------------+
| []{#\_bookmark186 | > **Menu ID** |
| .anchor}**Thumbnail context in | |
| Favorites commands** | |
+==================================+==================================+
| Remove from Favorites | > B |
| | ridge/ContextMenu/Keyword/Delete |
+----------------------------------+----------------------------------+
| Reveal in Explorer/Finder | > B |
| | ridge/ContextMenu/Keyword/Reveal |
+----------------------------------+----------------------------------+
| []{#\_bookmark187 | > **Menu ID** |
| .anchor}**Thumbnail context in | |
| Folders commands** | |
+----------------------------------+----------------------------------+
| Open | > Thumbnail/Open |
+----------------------------------+----------------------------------+
| Open in New Window | > Brid |
| | ge/ContextMenu/Folders/NewWindow |
+----------------------------------+----------------------------------+
| Cut | > Bridge/ContextMenu/Folders/Cut |
+----------------------------------+----------------------------------+
| Copy | > |
| | Bridge/ContextMenu/Folders/Copy |
+----------------------------------+----------------------------------+
| New Folder | > Brid |
| | ge/ContextMenu/Folders/NewFolder |
+----------------------------------+----------------------------------+
| Sort \> | > (not available as command) |
+----------------------------------+----------------------------------+
| Sort \> \[commands\] | > (not available) |
+----------------------------------+----------------------------------+
| Reveal in Explorer/Finder | > B |
| | ridge/ContextMenu/Folders/Reveal |
+----------------------------------+----------------------------------+
| Add to Favorites | > Bridge/Co |
| | ntextMenu/Folders/AddToFavorites |
+----------------------------------+----------------------------------+
| Remove from Favorites | > Bridge/Context |
| | Menu/Folders/RemoveFromFavorites |
+----------------------------------+----------------------------------+
| Delete | > B |
| | ridge/ContextMenu/Folders/Delete |
+----------------------------------+----------------------------------+
| Rename | > B |
| | ridge/ContextMenu/Folders/Rename |
+----------------------------------+----------------------------------+

+--------------------------------------+------------------------------+
| []{#\_bookmark188 .anchor}**Thumbnail | > **Menu ID** |
| context in Content pane: commands** | |
+======================================+==============================+
| Open | > Thumbnail/Open |
+--------------------------------------+------------------------------+
| (_files_) Open With \> | > (not available as command) |
+--------------------------------------+------------------------------+
| Open With \> \[_installed | > (not available) |
| application_\] | |
+--------------------------------------+------------------------------+
| (_folders_) Open in New Window | > Thumbnail/NewWindow |
+--------------------------------------+------------------------------+
| Purge Cache for Selection | > PurgeCacheForSelected |
+--------------------------------------+------------------------------+
| Cut | > Thumbnail/Cut |
+--------------------------------------+------------------------------+
| Copy | > Thumbnail/Copy |
+--------------------------------------+------------------------------+
| Paste | > Thumbnail/Paste |
+--------------------------------------+------------------------------+

+--------------------------------------+------------------------------+
| Delete | > Thumbnail/Delete |
+======================================+==============================+
| Move to \> | > (not available as command) |
+--------------------------------------+------------------------------+
| Move to \> _\[recent folders}_ | > (not available) |
+--------------------------------------+------------------------------+
| Move to \> Choose Folder | > MoveToChooseFolder |
+--------------------------------------+------------------------------+
| Copy to \> | > (not available as command) |
+--------------------------------------+------------------------------+
| Copy to \> _\[recent folders}_ | > (not available) |
+--------------------------------------+------------------------------+
| Copy to \> Choose Folder | > CopyToChooseFolder |
+--------------------------------------+------------------------------+
| (_JavaScript files_) Install | > Thumbnail/InstallScript |
+--------------------------------------+------------------------------+
| Reveal in Explorer/Finder | > Thumbnail/RevealLocation |
+--------------------------------------+------------------------------+
| Reveal in Bridge | > Thumbnail/RevealInBridge |
+--------------------------------------+------------------------------+
| Add to Favorites Remove from | > Thumbnail/ToggleAsFavorite |
| Favorites | |
+--------------------------------------+------------------------------+
| Rename | > Thumbnail/Rename |
+--------------------------------------+------------------------------+
| (_files_) Batch Rename\... | > Thumbnail/BatchRename |
+--------------------------------------+------------------------------+
| (_image files_) Generate High | > MakeHighQualityThumbnail |
| Quality Thumbnail | |
+--------------------------------------+------------------------------+
| (_image files_) Generate Quick | > MakeQuickThumbnail |
| Thumbnail | |
+--------------------------------------+------------------------------+
| (_files_) Lock Item | > Thumbnail/LockFile |
+--------------------------------------+------------------------------+
| (_files_) Unlock Item | > Thumbnail/UnlockFile |
+--------------------------------------+------------------------------+
| (_image files_) File Info\... | > Thumbnail/FileInfo |
+--------------------------------------+------------------------------+
| Label \> | > submenu/Label |
+--------------------------------------+------------------------------+
| Label \> No Label | > NoLabel |
+--------------------------------------+------------------------------+
| Label \> Select | > Red |
+--------------------------------------+------------------------------+
| Label \> Second | > Yellow |
+--------------------------------------+------------------------------+
| Label \> Approved | > Green |
+--------------------------------------+------------------------------+
| Label \> Review | > Blue |
+--------------------------------------+------------------------------+
| Label \> ToDo | > Purple |
+--------------------------------------+------------------------------+
| New Folder | > Thumbnail/NewFolder |
+--------------------------------------+------------------------------+
| Sort \> | > (not available as command) |
+--------------------------------------+------------------------------+
| Sort \> Ascending Order | > Ascending |
+--------------------------------------+------------------------------+
| Sort \> By Filename | > SortFileName |
+--------------------------------------+------------------------------+
| Sort \> By Document Type | > SortFileType |
+--------------------------------------+------------------------------+
| Sort \> By Date created | > SortDateCreated |
+--------------------------------------+------------------------------+

+----------------------------------+----------------------------------+
| Sort \> By Date file modified | > SortDateModified |
+==================================+==================================+
| Sort \> By File size | > SortFileSize |
+----------------------------------+----------------------------------+
| Sort \> By Dimensions | > SortDimensions |
+----------------------------------+----------------------------------+
| Sort \> By Resolution | > SortResolution |
+----------------------------------+----------------------------------+
| Sort \> By Color profile | > SortColorProfile |
+----------------------------------+----------------------------------+
| Sort \> By Copyright | > SortCopyright |
+----------------------------------+----------------------------------+
| Sort \> By Keywords | > SortKeywords |
+----------------------------------+----------------------------------+
| Sort \> By Label | > SortByLabel |
+----------------------------------+----------------------------------+
| Sort \> By Rating | > SortRating |
+----------------------------------+----------------------------------+
| Sort \> Manually | > SortManually |
+----------------------------------+----------------------------------+
| (_multi-select_) Stack \> | > Stacks |
+----------------------------------+----------------------------------+
| Stack \> Frame Rate \> | > submenu/StackFrameRate |
+----------------------------------+----------------------------------+
| Stack \> Frame Rate \> \[rates\] | > (not available) |
+----------------------------------+----------------------------------+
| Stack \> Enable Onion Skin | > StackEnableOnionSkin |
+----------------------------------+----------------------------------+
| Stack \> Disable Onion Skin | > StackDisableOnionSkin |
+----------------------------------+----------------------------------+
| Stack \> Ungroup from Stack | > Stacks/Ungroup |
+----------------------------------+----------------------------------+
| Stack \> Group as Stack | > Stacks/Group |
+----------------------------------+----------------------------------+
| Remove From Collection | > Thumbna |
| | il/RemoveFromArbitraryCollection |
+----------------------------------+----------------------------------+

+-----------------------------------------------------+---------------+
| **Thumbnail context menu in Preview pane: | > **Menu ID** |
| additional commands for image files** | |
+=====================================================+===============+
| No Rating | > NoDot |
+-----------------------------------------------------+---------------+
| Reject | > Reject |
+-----------------------------------------------------+---------------+
| \* | > OneDot |
+-----------------------------------------------------+---------------+
| \*\* | > TwoDots |
+-----------------------------------------------------+---------------+
| \*\*\* | > ThreeDots |
+-----------------------------------------------------+---------------+
| \*\*\*\* | > FourDots |
+-----------------------------------------------------+---------------+
| \*\*\*\*\* | > FiveDots |
+-----------------------------------------------------+---------------+
| No Label | > NoLabel |
+-----------------------------------------------------+---------------+
| Select | > Red |
+-----------------------------------------------------+---------------+
| Second | > Yellow |
+-----------------------------------------------------+---------------+
| Approved | > Green |
+-----------------------------------------------------+---------------+

+-----------------------------+---------------+
| Review | > Blue |
+=============================+===============+
| ToDo | > Purple |
+-----------------------------+---------------+
| Rotate 90o Clockwise | > Rotate90CW |
+-----------------------------+---------------+
| Rotate 90o Counterclockwise | > Rotate90CCW |
+-----------------------------+---------------+
| Open | > Open |
+-----------------------------+---------------+

> **Collections context menu commands**

+----------------------------------+----------------------------------+
| **Collections context menu | > **Menu ID** |
| commands** | |
+==================================+==================================+
| New Smart Collection | > Bridge/Co |
| | ntextMenu/Collection/NewSmartKey |
+----------------------------------+----------------------------------+
| New Collection | > Bridge/Contex |
| | tMenu/Collection/NewArbitraryKey |
+----------------------------------+----------------------------------+
| Rename | > Brid |
| | ge/ContextMenu/Collection/Rename |
+----------------------------------+----------------------------------+
| Delete | > Brid |
| | ge/ContextMenu/Collection/Delete |
+----------------------------------+----------------------------------+
| Add to Favorites | > Br |
| | idge/ContextMenu/Collection/Edit |
+----------------------------------+----------------------------------+

> []{#\_bookmark189 .anchor}**Keywords context and flyout menu commands**

+----------------------------------+----------------------------------+
| **Keywords context menu | > **Menu ID** |
| commands** | |
+==================================+==================================+
| New Keyword | > B |
| | ridge/ContextMenu/Keyword/NewKey |
+----------------------------------+----------------------------------+
| New Sub Keyword | > Brid |
| | ge/ContextMenu/Keyword/NewSubKey |
+----------------------------------+----------------------------------+
| Rename | > B |
| | ridge/ContextMenu/Keyword/Rename |
+----------------------------------+----------------------------------+
| Delete | > Bridg |
| | e/ContextMenu/Keyword/DeleteNode |
+----------------------------------+----------------------------------+
| Exclude | > Br |
| | idge/ContextMenu/Keyword/Exclude |
+----------------------------------+----------------------------------+
| Include | > Br |
| | idge/ContextMenu/Keyword/Include |
+----------------------------------+----------------------------------+
| Expand All | > Bridg |
| | e/ContextMenu/Keyword/ExpandNode |
+----------------------------------+----------------------------------+
| Collapse All | > Bridge/ |
| | ContextMenu/Keyword/CollapseNode |
+----------------------------------+----------------------------------+
| Find\... | > B |
| | ridge/ContextMenu/Keyword/Search |
+----------------------------------+----------------------------------+
| **Keywords flyout menu: | > **Menu ID** |
| additional commands** | |
+----------------------------------+----------------------------------+
| Remove Keywords | > B |
| | ridge/ContextMenu/Keyword/Delete |
+----------------------------------+----------------------------------+
| Import\... | > (not available) |
| | |
| Clear and Import\... Export\... | |
+----------------------------------+----------------------------------+

+-----------------------------------+-------------------+
| **Keywords search menu commands** | > **Menu ID** |
+===================================+===================+
| Contains Equals Starts With | > (not available) |
+-----------------------------------+-------------------+

> **Compact-mode flyout menu commands**

+--------------+-------------------+
| **Submenus** | > **Menu ID** |
+==============+===================+
| Label \> | > submenu/Label |
+--------------+-------------------+
| View \> | > (not available) |
+--------------+-------------------+

+----------------------------------+---------------------+
| **Commands** | > **Menu ID** |
+==================================+=====================+
| New Window | > mondo/command/new |
+----------------------------------+---------------------+
| New Folder | > NewFolder |
+----------------------------------+---------------------+
| Open | > Open |
+----------------------------------+---------------------+
| Open With | > (not available) |
+----------------------------------+---------------------+
| Open in Camera Raw | > OpenInCameraRaw |
+----------------------------------+---------------------+
| Reveal in Explorer/Finder | > Reveal |
+----------------------------------+---------------------+
| Label \> | > submenu/Label |
+----------------------------------+---------------------+
| Label \> No Label | > NoLabel |
+----------------------------------+---------------------+
| Label \> Select | > Red |
+----------------------------------+---------------------+
| Label \> Second | > Yellow |
+----------------------------------+---------------------+
| Label \> Approved | > Green |
+----------------------------------+---------------------+
| Label \> Review | > Blue |
+----------------------------------+---------------------+
| Label \> ToDo | > Purple |
+----------------------------------+---------------------+
| Compact Window Always On Top | > (not available) |
+----------------------------------+---------------------+
| View \> | > (not available) |
+----------------------------------+---------------------+
| View \> Full Mode | > (not available) |
+----------------------------------+---------------------+
| View \> Sort \> | > (not available) |
+----------------------------------+---------------------+
| View \> Sort \> Ascending Order | > Ascending |
+----------------------------------+---------------------+
| View \> Sort \> By Filename | > SortFileName |
+----------------------------------+---------------------+
| View \> Sort \> By Document Type | > SortFileType |
+----------------------------------+---------------------+
| View \> Sort \> By Date created | > SortDateCreated |
+----------------------------------+---------------------+

+---------------------------------------+----------------------+
| View \> Sort \> By Date file modified | > SortDateModified |
+=======================================+======================+
| View \> Sort \> By File size | > SortFileSize |
+---------------------------------------+----------------------+
| View \> Sort \> By Dimensions | > SortDimensions |
+---------------------------------------+----------------------+
| View \> Sort \> By Resolution | > SortResolution |
+---------------------------------------+----------------------+
| View \> Sort \> By Color profile | > SortColorProfile |
+---------------------------------------+----------------------+
| View \> Sort \> By Copyright | > SortCopyright |
+---------------------------------------+----------------------+
| View \> Sort \> By Keywords | > SortKeywords |
+---------------------------------------+----------------------+
| View \> Sort \> By Label | > SortByLabel |
+---------------------------------------+----------------------+
| View \> Sort \> By Rating | > SortRating |
+---------------------------------------+----------------------+
| View \> Sort \> Manually | > SortManually |
+---------------------------------------+----------------------+
| View \> Refresh | > Refresh |
+---------------------------------------+----------------------+
| View \> Show Thumbnails Only | > ShowThumbnailsOnly |
+---------------------------------------+----------------------+
| View \> Grid Lock | > GridLock |
+---------------------------------------+----------------------+
| View \> Show Hidden Files | > ShowHidden |
+---------------------------------------+----------------------+
| Path Bar | > PathBar |
+---------------------------------------+----------------------+
| Exit Bridge | > mondo/command/quit |
+---------------------------------------+----------------------+

## Metadata Object

> Allows you to access the Extensible Metadata Platform (XMP) metadata
> associated with the file node of a [ThumbnailObject](#thumbnail-object). This is embedded metadata
> associated with the file, such a copyright owner, author, or camera
> settings.
>
> []{#\_bookmark193 .anchor}Metadata is organized into schemas that group
> related types of metadata; for example the XMP Rights Management
> Schema groups metadata associated with ownership and rights, such as
> copyright and owner. The metadata properties found in a specific
> schema are accessed via the _namespace_ of the schema and the
> _property name_ of the metadata item. For example, the namespace of
> the XMP Rights Management Schema is
> [http://www.adobe.com/xap/1.0/rights,](http://www.adobe.com/xap/1.0/rights)
> and the copyright property name is Copyright.
>
> For more information about XMP metadata, see the XMP Specification at
> Adobe Developer Center,
> [[h](http://www.adobe.com/devnet/)ttp:[//w](http://www.adobe.com/devnet/)ww]{.underline}[[.adobe.com/devnet/]{.underline}.](http://www.adobe.com/devnet/)
>
> Access the Metadata object for a file-type thumbnail through the
> [ThumbnailObject](#thumbnail-object)'s
> [metadata](#_bookmark259) property:

###### Example code

> var t = new Thumbnail (File (\"/C/mydir/myfile\")); var mdata =
> t.metadata
>
> When a script needs to access the metadata through the Thumbnail
> object, it is important to make sure that the returned object contains
> the most current data. To ensure this, your script should set
> app.synchronousMode to true before attempting to retrieve or set
> values through Thumbnail.metadata, or else use
> Thumbnail.synchronousMetadata. Keep in mind, however, that metadata
> access is a time-intensive operation. Do not do it unnecessarily, or
> as part of operations that occur very frequently, such as a
> MenuItem.onDisplay callback function.
>
> The Metadata object does not support multi-valued properties.
>
> The sample code distributed with the Adobe Bridge SDK includes these
> code examples that specifically demonstrate the use of this object:

###### Thumbnail metadata access

> SnpInspectMetadata.jsx Shows how to acquire metadata.
>
> SnpModifyMetadata.jsx Shows how to alter metadata on a selected file.

### Metadata properties

+-------------------+----------+-------------------------------------+
| namespace | > String | The current XMP namespace, used to |
| | | search for XMP properties. Default |
| | | is the root namespace. Read/write. |
| | | Assigning a new namespace creates |
| | | that namespace in the XMP metadata. |
| | | |
| | | To access values in a specific |
| | | schema, the namespace for that |
| | | schema must be set before |
| | | referencing the properties in the |
| | | schema. |
+===================+==========+=====================================+
| _xmpPropertyName_ | > String | Get or set a simple XMP property |
| | | value for a thumbnail by specifying |
| | | it as a property of that |
| | | thumbnail's metadata object. |
| | | Properties are accessed in the |
| | | current namespace. Read/write. |
| | | |
| | | New simple metadata properties are |
| | | created and added to the current |
| | | namespace when a script references |
| | | a new property name. You can add |
| | | properties only to currently |
| | | defined namespaces, not to the root |
| | | namespace. Property names are case |
| | | sensitive. |
| | | |
| | | If no metadata is defined for a |
| | | thumbnail, and you attempt to |
| | | access a property through the |
| | | Thumbnail.metadata property, the |
| | | value undefined is returned. Note |
| | | that this differs from the behavior |
| | | in Adobe Bridge CS2, where an |
| | | exception was thrown in this case. |
| | | |
| | | **NOTE:** For metadata properties |
| | | that are known date formats, the |
| | | corresponding Metadata object |
| | | property contains an ISO-8601 date |
| | | string. These include: |
| | | |
| | | > xmp/DateCreated xmp/DateModified |
| | | > xmp/MetadataDate |
| | | > photoshop/OriginDateCreated |
| | | > tiff/DateTime |
| | | > exif/DateTimeOriginal |
| | | > exif/ExifDateTimeDigitized |
| | | > exif/GPS_TimeStamp |
| | | > exif/GPSDateStamp |
+-------------------+----------+-------------------------------------+

### Metadata functions

+----------------------------------+----------------------------------+
| applyMetadataTemplate() | > Adds metadata properties to |
| _me | > this object that were saved to |
| tadataObj_.applyMetadataTemplate | > an XMP template from the |
| (_templateName, modType_) | > FileInfo dialog. |
| | > |
| | > Returns undefined. |
+==================================+==================================+
| > _templateName_ String, The | |
| > name of the XMP template. | |
| > Templates are stored for each | |
| > user in: | |
| | |
| - (Windows) | |
| | |
| > %APPDATA%/Adobe/XMP/Metadata | |
| > Templates/ | |
| | |
| - (Mac OS) | |
| | |
| > /User | |
| s/_username_/Library/Application | |
| > Support/Adobe/XMP/ Metadata | |
| > Templates/ | |
| > | |
| > _modType_ The modification | |
| > type, one of: | |
| > | |
| > **append**---Adds to the | |
| > metadata any property that is | |
| > in the template but not in the | |
| > source. If a property in the | |
| > template already exists in the | |
| > source, its value is not | |
| > changed, unless it is an | |
| > array. For an array, adds | |
| > members that are in the | |
| > template but not in the | |
| > source. If an array member | |
| > already exists in the source, | |
| > the value is not changed. | |
| > | |
| > **replace**---Adds to the | |
| > metadata all properties and | |
| > values that are in the | |
| > template. If a property in the | |
| > template already exists in the | |
| > source, its value is changed | |
| > to the template value. | |
+----------------------------------+----------------------------------+
| read() _metadataObj_.read | > Retrieves and returns the |
| (_namespace, property_) | > string value of a metadata |
| | > property in the specified |
| | > namespace. |
| | > |
| | > Returns the string value, or |
| | > an empty string if the |
| | > specified property does not |
| | > exist. |
+----------------------------------+----------------------------------+
| > _namespace_ String. The XMP | |
| > namespace. | |
| > | |
| > _property_ String. The | |
| > property name. To access a | |
| > multivalue (complex) property, | |
| > use an XPath to the individual | |
| > value. For example: | |
| > | |
| > var text = | |
| > md.read(\"<http | |
| ://purl.org/dc/elements/1.1/>\", | |
| > \"rights/\*\[1\]\"); | |
+----------------------------------+----------------------------------+
| serialize() | > Serializes the XMP packet into |
| | > a string. |
| _metadataObj_.serialize () | > |
| | > Returns the string containing |
| | > the serialized metadata. |
+----------------------------------+----------------------------------+

## NavBar Object

> Represents a configurable navigation bar, one of which can be
> displayed at the top of the browser window (below the application
> navigation bar), and one at the bottom (above the status bar). You do
> not create new NavBar objects. Instead, you access the existing
> objects through the [Document Object](#document-object)'
> s properties:
>
> topbarF = app.document.navbars.filesystem.top btmbarF =
> app.document.navbars.filesystem.bottom
>
> The bars in navbars.filesystem can be shown when the Content pane
> displays files and folders.
>
> The navigation bars are hidden by default. You can show and hide them
> by setting the NavBar object's visible property.
>
> Your script can configure a navigation bar to contain user-interface
> controls such as push buttons, radio buttons, edit fields, list boxes,
> and so on. The NavBar objects are initially empty. You can add
> ScriptUI controls.

### NavBar properties

+---------+----------+-----------------------------------------------+
| height | > Number | > The height of the navigation bar in pixels. |
| | | > Default is 40. Read/write. |
+=========+==========+===============================================+
| id | > String | > A unique identifier that can be used by a |
| | | > node-handling extension to identify a bar |
| | | > that it manages during configuration |
| | | > operations. The extension is responsible |
| | | > for supplying and interpreting this value. |
| | | > See |
| | | > [ExtensionHa |
| | | ndler](#extensionhandler-object) |
| | | > [Ob |
| | | ject](#extensionhandler-object). |
| | | > |
| | | > Default values (used by the default |
| | | > node-handler) are topFilesystemNavbar, |
| | | > bottomFilesystemNavbar, topWebNavbar, and |
| | | > bottomWebNavbar. |
+---------+----------+-----------------------------------------------+
| jsFuncs | > Object | > DEPRECATED. Do not use. |
| | | > |
| | | > A JavaScript object that defines a set of |
| | | > callback functions that access the Adobe |
| | | > Bridge DOM, but can be called from within |
| | | > an HTML page displayed in this navigation |
| | | > bar. Used only when type is html. |
| | | > Read/write. |
| | | > |
| | | > Each property in the object is a callback |
| | | > function name, and the value is the |
| | | > function declaration: |
| | | > |
| | | > { |
| | | > |
| | | > _fnName1_: function( \[_args_\] ) { |
| | | > _fn1_definition_ }, |
| | | > |
| | | > _fnName2_: function( \[_args_\] ) { |
| | | > _fn2_definition_ } |
| | | > |
| | | > } |
| | | > |
| | | > The HTML page displayed by this bar can |
| | | > access the Adobe Bridge DOM by invoking one |
| | | > of these callbacks, using the JavaScript |
| | | > function call. For example, suppose jsFuncs |
| | | > has the value: |
| | | > |
| | | > {myFn: function(x) { return x \> |
| | | > app.document.topNavBar.height }} |
| | | > |
| | | > A script on the displayed HTML page can |
| | | > invoke this function as follows: |
| | | > |
| | | > var toobig = call(\"myFn\", 55); |
+---------+----------+-----------------------------------------------+

+----------+------------+--------------------------------------------+
| onResize | > Function | > For a bar that displays ScriptUI, you |
| | | > can provide this callback function to |
| | | > resize the component elements |
| | | > automatically when the bar is resized by |
| | | > the user. |
| | | > |
| | | > For details, see the _JavaScript Tools |
| | | > Guide_. |
+==========+============+============================================+
| type | > String | > The type of user-interface controls |
| | | > displayed in the navigation bar. |
| | | > Read/write. One of: |
| | | > |
| | | > **scriptui**: Display the ScriptUI |
| | | > controls added with this object's |
| | | > [[add()]{.underline}](#_bookmark205) |
| | | > method. |
+----------+------------+--------------------------------------------+
| visible | > Boolean | > Controls whether the bar is shown. If |
| | | > true, the navigation bar is visible. |
| | | > Default is false. Read/write. |
+----------+------------+--------------------------------------------+

### NavBar functions

+----------------------------------+----------------------------------+
| []{#\_bookmark205 .anchor}add() | > Creates and returns a new |
| _navBarObj_.add (_type_ \[, | > ScriptUI control or container |
| _bounds_, _text_, | > object and adds it to the |
| | > children of this navigation |
| > { _creation_props_\> } \]); | > bar. |
| | > |
| | > Returns the new object, or |
| | > null if unable to create the |
| | > object. |
+==================================+==================================+
| > _type_ The control type. See | |
| > the _JavaScript Tools Guide_. | |
| > | |
| > _bounds_ Optional. A bounds | |
| > specification that describes | |
| > the size and position of the | |
| > new control or container, | |
| > relative to its parent. See | |
| > Bounds object for | |
| > specification formats. | |
| > | |
| > If supplied, the method | |
| > creates a new Bounds object | |
| > which is assigned to the new | |
| > control object's bounds | |
| > property. | |
| > | |
| > _text_ Optional. A string | |
| > containing the initial text to | |
| > be displayed in the control as | |
| > the title, label, or contents, | |
| > depending on the control type. | |
| > If supplied, this value is | |
| > assigned to the new object's | |
| > text property. | |
| > | |
| > _creation_props_ Optional. | |
| > The properties of this | |
| > JavaScript object specify | |
| > creation parameters, which are | |
| > specific to each object type. | |
| > See the _JavaScript Tools | |
| > Guide_. | |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| execJS() | > DEPRECATED. Do not use. |
| | > |
| _navBarObj_.execJS (_script_) | > Executes a JavaScript function |
| | > that is defined within the |
| | > HTML page displayed in the |
| | > navigation bar when type is |
| | > html. If the page that defines |
| | > the function is not currently |
| | > displayed, causes a run-time |
| | > error. |
| | > |
| | > **NOTE:** Do not call this |
| | > method from a NavBar callback |
| | > function defined in jsFuncs. |
| | > This attempts to re-enter the |
| | > JavaScript engine, which is |
| | > not allowed, and causes Adobe |
| | > Bridge to hang. A callback |
| | > can, instead, schedule a task |
| | > using app.scheduleTask(), and |
| | > call execJS from the function |
| | > associated with the task. |
| | > |
| | > Returns the result of the |
| | > executed JavaScript function, |
| | > which must be a Boolean, |
| | > Number, or String, or null. |
+==================================+==================================+
| > _script_ A string containing a | |
| > script to execute. This | |
| > typically contains the name | |
| > and arguments of the | |
| > JavaScript function to | |
| > execute, but can have multiple | |
| > statements, including variable | |
| > declarations, assignments and | |
| > so on. | |
+----------------------------------+----------------------------------+
| print() | > DEPRECATED. Do not use. |
| | > |
| _navBarObj_.print () | > Prints the HTML page displayed |
| | > in the navigation bar when |
| | > type is html. Does nothing if |
| | > the HTML is not yet loaded |
| | > when the call is made, or if |
| | > type is scriptui. |
| | > |
| | > Returns true on success. |
+----------------------------------+----------------------------------+

### Panelette Base Class

> []{#\_bookmark208 .anchor}A base class for the subpanel types that can
> be contained in the [[panelettes](#_bookmark147) property
> of a [InspectorPanel](#inspectorpanel-object) > [Object](#inspectorpanel-object):

- [IconListPanelette Object](#iconlistpanelette-object)

- [TextPanelette Object](#textpanelette-object)

- [ThumbnailPanelette
  > Object](#thumbnailpanelette-object)

> The base class is not instantiable. Use the new operator with the
> subclasses to create subpanel objects.

### Panelette class properties

+-------------+--------+---------------------------------------------+
| name | String | > The unique, identifying name of this |
| | | > subpanel. Read/write. |
+=============+========+=============================================+
| titleMarkup | String | > Optional. Localizable text shown in the |
| | | > subpanel header bar. Can include |
| | | > [Panelette markup |
| | | > elements |
| | | ](#panelette-markup-elements). |
| | | > If not supplied, the name string appears |
| | | > as the header. Read/write. |
+-------------+--------+---------------------------------------------+

### Panelette markup elements

> You can specify dynamic or calculated string content to be displayed
> in the subpanels, or in the title string of the panel
> (InspectorPanel.displayTitle) or subpanel tabs
> (Panelette.titleMarkup). To specify these special string values, you
> use _panelette markup elements_.
>
> Markup elements are enclosed by double brackets. They can indicate:

- []{#bookmark211 .anchor}**Dynamic text**: Dynamic text values are
  > retrieved from the thumbnail's associated node data. To insert a
  > dynamic value retrieved from node data, use a markup element that
  > identifies the ExtensionHandler, Infoset, and member element:

> \[\[_extensionName_._infosetName_._elementName_\]\]

- []{#bookmark212 .anchor}**JavaScript**: Values can be retrieved or
  > calculated at display time using JavaScript. To specify a
  > dynamically calculated value, embed JavaScript within the content
  > string, using this tag:

> \[\[javascript:_code_\]\]
>
> A function in this context is not allowed to block; if it takes more
> than 10 milliseconds, the display string is converted to an error
> string.
>
> Within the context of the markup tag, you can refer to the currently
> selected Thumbnail object using a special variable inspectorThumbnail.
> This is useful for accessing embedded file metadata. For example:
>
> \[\[javascript:\"Name: \" + inspectorThumbnail.name\]\] > \[\[javascript:\"Author: \" + inspectorThumbnail.metadata.author\]\]
>
> For additional examples, see the _Adobe Bridge JavaScript Guide_ and
> SDK code-snippet examples.

## PDFOutput Object

> PDFOutput object provides capability to generate a PDF using the
> Bridge\'s native PDF Output Module. PDFOutput object takes a template
> name and a list of files to be added in the PDF. The PDF file
> generated with the provided template and assets can be exported at a
> specified location.

### PDFOutput Functions

+----------------------------------+----------------------------------+
| resetDocument() | > Resets the Output preview. |
| pdfOutPutObj.resetDocumen t() | > This can be used to clear the |
| | > list of files added for PDF |
| | > generation. |
| | > |
| | > Returns undefined. |
+==================================+==================================+
| setPDFTemplate() | > Sets template for the pdf |
| | > file. |
+----------------------------------+----------------------------------+
| pdfOutPutObj.setPDFTempla | > Returns undefined. |
| te(templateName) | |
+----------------------------------+----------------------------------+
| templateName | > Name of the PDF template. |
+----------------------------------+----------------------------------+
| addToDocument() | > Adds the provided files to be |
| pdfOutPutObj.addToDocumen t() | > generated as the PDF file. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| exportToPDF() | > Exports the pdf file at |
| | > provided path. |
+----------------------------------+----------------------------------+
| pdfOutPutObj.exportToPDF | > Returns undefined. |
| (filePath, fileName) | |
+----------------------------------+----------------------------------+
| filePath | > Path of the folder for |
| | > exporting of the PDF file. |
+----------------------------------+----------------------------------+
| fileName | > Name of the exported PDF file |
| | > with extension. |
+----------------------------------+----------------------------------+

## Preferences Object

> Allows access to the Adobe Bridge application preferences, as viewed
> in and controlled by Preferences dialog (invoked by the **Edit \>
> Preferences** command).

- Some existing preferences can be set or read by setting or

  > retrieving the associated property value. Not all existing
  > preferences are available in the scripting environment. Those that
  > are available are listed below. Preference values do not take
  > effect until the Adobe Bridge application is restarted.

- You can set certain preference values for the current session only.

  > That is, the changes take effect immediately, but do not persist
  > across sessions. The next time the Adobe Bridge application is
  > restarted, the global preference value is used.

- A script can create a new preference by simply referencing a new
  > property name in this object. New preferences must be of the type
  > String, Number, or Boolean. Composite types (such as Rect and
  > Point) are retrieved as String objects.

> Access the Preferences object through the [App
> Object](#app-object)'s
> [preferences](#_bookmark31) property: var prefs =
> app.preferences;

### Preferences properties

> The following current-view properties allow you to set these styles
> for a specific Content pane view. They do not change the related
> global preference, and the changes do not persist beyond the current
> view:

+-----------------------+-------------------+-----------------------+
| []{#\_bookmark219 | > Array of String | > An array of up to |
| .anchor}extraMetadata | | > four values, where |
| | | > each value |
| | | > identifies a |
| | | > metadata property |
| | | > to be displayed |
| | | > beneath a thumbnail |
| | | > icon. Read/write. |
| | | > |
| | | > Setting this |
| | | > property is the |
| | | > same as setting the |
| | | > preferences |
| | | > associated with the |
| | | > **Additional |
| | | > Thumbnail |
| | | > Metatdata** |
| | | > drop-down lists and |
| | | > checkboxes in the |
| | | > Thumbnail page of |
| | | > the Preferences |
| | | > dialog, except that |
| | | > the setting does |
| | | > not persist beyond |
| | | > the current view. |
| | | > |
| | | > The first value in |
| | | > the array sets the |
| | | > first line of |
| | | > additional |
| | | > metadata, the |
| | | > second value sets |
| | | > the second line, |
| | | > and so on. Allowed |
| | | > values are: |
| | | > |
| | | > author bit-depth |
| | | > |
| | | > color-mode |
| | | > color-profile |
| | | > copyright |
| | | > date-created |
| | | > date-modified |
| | | > description |
| | | > dimensions |
| | | > |
| | | > document-creator |
| | | > document-kind |
| | | > exposure |
| | | > |
| | | > file-size |
| | | > focal-length |
| | | > keywords label |
| | | > |
| | | > opening-application |
+-----------------------+-------------------+-----------------------+

+----------+-----------+---------------------------------------------+
| | | > An array value of undefined turns off the |
| | | > display of metadata for that line. |
+==========+===========+=============================================+
| showName | > Boolean | > When true, the names of thumbnails are |
| | | > displayed beneath the icon in this view. |
| | | > When false, they are not. Read/write. |
| | | > (This is overridden by the document's |
| | | > [sh |
| | | owThumbnailName](#_bookmark87) |
| | | > value.) |
+----------+-----------+---------------------------------------------+

> The following properties allow access to existing application
> preferences. Preference values do not take effect until the Adobe
> Bridge application is restarted:

+------------------------+------------------+------------------------+
| AutoExportCaches | Boolean | In the Cache page of |
| | | the Preferences |
| | | dialog, the preference |
| | | associated with |
| | | **Cache** choices, |
| | | true when |
| | | **Automatically Export |
| | | Caches to Folders When |
| | | Possible** is |
| | | selected. Default |
| | | false. Read/write. |
+========================+==================+========================+
| CacheDirectory | String or Folder | In the Cache page of |
| | | the Preferences |
| | | dialog, the preference |
| | | associated with the |
| | | **Cache Location**. |
| | | The location of the |
| | | centralized cache. A |
| | | folder path, specified |
| | | as a string or |
| | | ExtendScript Folder |
| | | object. Read/write. |
+------------------------+------------------+------------------------+
| ColorTheme | Number | > In the Interface |
| | | > page of the |
| | | > **Preferences** |
| | | > dialog, the |
| | | > preference |
| | | > associated with the |
| | | > **ColorTheme** |
| | | > selection. |
| | | > Read/write. One of: |
| | | > |
| | | > 1 |
| | | > |
| | | > 2 |
| | | > |
| | | > 3 |
| | | > |
| | | > 4 |
+------------------------+------------------+------------------------+
| []{#\_bookmark220 | Array of String | In the General page of |
| .anchor}Favorites | | the Preferences |
| | | dialog, the preference |
| | | associated with |
| | | **Favorite Items** |
| | | choices. A collection |
| | | of Bridge URI strings |
| | | for checked nodes, |
| | | which are displayed in |
| | | the Favorites palette. |
+------------------------+------------------+------------------------+
| FavoritesDisplayNames | Array of String | A collection of |
| | | localized display |
| | | names for the nodes |
| | | displayed in the |
| | | Favorites palette, |
| | | where each member |
| | | corresponds to URI |
| | | member of the |
| | | [[Favorites](#_bookmark220) |
| | | array. |
+------------------------+------------------+------------------------+
| FileSize | Number | In the Thumbnails page |
| | | of the Preferences |
| | | dialog, the preference |
| | | associated with **Do |
| | | not process files |
| | | larger than: _nnn_ |
| | | MB**. Default 1000. |
| | | Read/write. |
+------------------------+------------------+------------------------+
| HideEmptyFields | Boolean | In the Metadata page |
| | | of the Preferences |
| | | dialog, the preference |
| | | associated with the |
| | | **Hide Empty Fields** |
| | | checkbox, true when |
| | | checked. Default true. |
| | | |
| | | Read/write. |
+------------------------+------------------+------------------------+
| HideUnknownOpeners | Boolean | In the File Type |
| | | Associations page of |
| | | the Preferences |
| | | dialog, the preference |
| | | associated with the |
| | | **Hide Undefined File |
| | | Associations** |
| | | checkbox, true when |
| | | checked. Default |
| | | false. Read/write. |
+------------------------+------------------+------------------------+

+------------------------+-----------------+------------------------+
| ImageBackdrop | Number | In the General page of |
| | | the Preferences |
| | | dialog, the preference |
| | | associated with the |
| | | **Image Backdrop** |
| | | slide bar. Read/write. |
| | | Sets background of the |
| | | Content pane.The |
| | | background color is |
| | | set in the range of 1 |
| | | - 10, where 1 is |
| | | black, and 10 is |
| | | white. Default value |
| | | is 2. |
+========================+=================+========================+
| Keyboard | String | In the Advanced page |
| | | of the Preferences |
| | | dialog, the preference |
| | | associated with |
| | | **Keyboard**. |
| | | Read/write, takes |
| | | effect on restart. |
+------------------------+-----------------+------------------------+
| Label1 Label2 Label3 | String | In the Labels page of |
| Label4 Label5 | | the Preferences |
| | | dialog, the |
| | | preferences associated |
| | | with the label colors |
| | | and their keyboard |
| | | shortcuts. These |
| | | preferences control |
| | | the choices that |
| | | appear in the |
| | | **Label** menu in the |
| | | menu bar and in the |
| | | right-click context |
| | | menu for image |
| | | thumbnails. |
| | | Read/write. |
+------------------------+-----------------+------------------------+
| | | The preference value |
| | | is any string. For |
| | | example, if you |
| | | associate the red flag |
| | | with the string |
| | | Urgent, the string |
| | | Urgent appears in |
| | | **Label** menu (in |
| | | place of the default |
| | | string Red), in the |
| | | tooltip for the |
| | | labeled thumbnail, and |
| | | in a labeled |
| | | thumbnail's |
| | | [label](#_bookmark257) |
| | | value. The thumbnail |
| | | is displayed with a |
| | | red highlight frame. |
+------------------------+-----------------+------------------------+
| | | The labeling feature |
| | | is only available for |
| | | those thumbnails |
| | | associated with image |
| | | files. |
+------------------------+-----------------+------------------------+
| | | By default, no labels |
| | | are set. Labels can be |
| | | set interactively by |
| | | choosing from the |
| | | **Label** menu or |
| | | programmatically by |
| | | setting the |
| | | Th |
| | | umbnail.[label](#_bookmark257) |
| | | value to any string. |
| | | If that string is not |
| | | one of the |
| | | preferences, it is |
| | | associated with a |
| | | white highlight frame. |
+------------------------+-----------------+------------------------+
| LabelCtrlKey | Boolean | In the Labels page of |
| | | the Preferences |
| | | dialog, the preference |
| | | associated with the |
| | | **Require the Control |
| | | Key to Apply Labels |
| | | and Ratings** |
| | | checkbox, true when |
| | | checked. Default true. |
| | | Read/write, takes |
| | | effect on restart. |
+------------------------+-----------------+------------------------+
| Language | String | In the Advanced page |
| | | of the Preferences |
| | | dialog, the preference |
| | | associated with |
| | | **Language**. |
| | | Read/write. |
+------------------------+-----------------+------------------------+
| []{#\_bookmark221 | Number | In the General page of |
| .anchor}MRUCount | | the Preferences |
| | | dialog, the preference |
| | | associated with |
| | | **Number of Recent |
| | | Items to Display**. |
| | | Read/write. |
+------------------------+-----------------+------------------------+
| MRUFolders | Array of String | The set of absolute |
| | | path strings for |
| | | recently-visited |
| | | folders, displayed |
| | | when the |
| | | [[MRUCount](#_bookmark221) |
| | | is greater than |
| | | |
| | | 0\. Read/write. |
+------------------------+-----------------+------------------------+
| P | Array of String | In the Startup Scripts |
| ermittedStartupScripts | | the Preferences |
| | | dialog, the script |
| | | names associated with |
| | | selected script |
| | | checkboxes. This is |
| | | the set of scripts |
| | | that load |
| | | automatically on |
| | | startup. Read/write. |
+------------------------+-----------------+------------------------+

+----------------------------+---------+----------------------------+
| PreferencePanel | Number | The panel to be displayed |
| | | when the Preferences |
| | | dialog is invoked. A |
| | | zero-based index of the |
| | | panel, in the order in |
| | | which they appear in the |
| | | dialog. |
| | | |
| | | Read/write. |
+============================+=========+============================+
| ShowCameraRawInterface | Boolean | In the General page of the |
| | | Preferences dialog, the |
| | | preference associated with |
| | | the **Double-Click Edits |
| | | Camera Raw Settings in |
| | | Bridge** checkbox, true |
| | | when checked. Default |
| | | false. Read/write. |
+----------------------------+---------+----------------------------+
| []{#\_bookmark222 | Boolean | When true, the names of |
| .anchor}ShowName | | thumbnails are displayed |
| | | beneath the icon. When |
| | | false, they are not. |
| | | |
| | | Read/write. |
+----------------------------+---------+----------------------------+
| ShowPlacard | Boolean | In the Metadata page of |
| | | the Preferences dialog, |
| | | the preference associated |
| | | with the **Show Metadata |
| | | Placard** checkbox, true |
| | | when checked. Default is |
| | | true. Read/write. |
+----------------------------+---------+----------------------------+
| ShowTooltips | Boolean | In the Thumbnails page of |
| | | the Preferences dialog, |
| | | the preference associated |
| | | with **Show Tooltips**, |
| | | true when checked. Default |
| | | is false. Read/write. |
+----------------------------+---------+----------------------------+
| StackFrameRate | Number | In the Playback page of |
| | | the Preferences dialog, |
| | | the preference associated |
| | | with **Stack Playback |
| | | Framerate**. Read/write. |
| | | One of: |
| | | |
| | | > 2 4 6 10 12 15 24 25 30 |
| | | > 50 60 |
+----------------------------+---------+----------------------------+
| StartupScriptsShouldLoad | Boolean | In the Startup Scripts the |
| | | Preferences dialog, |
| | | setting to true is the |
| | | equivalent of clicking |
| | | **Enable All**, setting to |
| | | false is the equivalent of |
| | | clicking **Disable All**. |
| | | Read/write. |
+----------------------------+---------+----------------------------+
| ThumbnailQuality | String | Options for thumbnail |
| | | quality and preview |
| | | generation. Read/write. |
| | | One of: |
| | | |
| | | > **draft---**Prefer |
| | | > Embedded (Faster) |
| | | > **proof**---Always High |
| | | > Quality |
| | | > **drafttoproof**---High |
| | | > Quality On Demand |
+----------------------------+---------+----------------------------+

+----------------------+----------------------+----------------------+
| UseSoftwareRendering | Boolean | In the Advanced page |
| | | of the Preferences |
| | | dialog, the |
| | | preference |
| | | associated with the |
| | | **Use Software |
| | | Rendering** |
| | | checkbox, true when |
| | | checked. |
| | | |
| | | Read/write, takes |
| | | effect on restart. |
| | | |
| | | When true, hardware |
| | | acceleration is |
| | | disabled for the |
| | | Preview panel and |
| | | slideshows. Default |
| | | is false. |
+======================+======================+======================+
| _anyPropertyName_ | Number, String, or | A script-defined |
| | Boolean | preference. |
| | | Read/write. |
| | | |
| | | This example creates |
| | | a new preference |
| | | named mypref by |
| | | assigning a value to |
| | | a property of that |
| | | name, then accesses |
| | | the value by reading |
| | | the property. |
| | | |
| | | ap |
| | | p.preferences.mypref |
| | | = \"sample value\"; |
| | | Window.alert(\"New |
| | | preference mypref = |
| | | \" + |
| | | |
| | | > app. |
| | | preferences.mypref); |
| | | |
| | | To add your |
| | | script-defined |
| | | preference to the |
| | | Preferences dialog, |
| | | use the |
| | | [[PreferencesDialog] |
| | | {.underline}](#prefe |
| | | rencesdialog-object) |
| | | [Object](#prefere |
| | | ncesdialog-object)'s |
| | | [ |
| | | [addPanel()]{.underl |
| | | ine}](#_bookmark228) |
| | | function. |
| | | |
| | | **NOTE:** The script |
| | | must implement |
| | | default values and |
| | | initialization of |
| | | any private setting |
| | | stored in the Adobe |
| | | Bridge preferences. |
+----------------------+----------------------+----------------------+

### Preferences functions

+----------------------------------+----------------------------------+
| clear() _prefObj_.clear | > Removes script-created keys |
| (\[_name_\[, _name2_\...\]\]) | > and values from the Adobe |
| | > Bridge preferences, or resets |
| | > preferences. |
| | |
| | - If one or more preference |
| | > names is passed, each is |
| | > removed. If you try to |
| | > access the property for a |
| | > preference that has been |
| | > removed, the property |
| | > returns undefined. |
| | |
| | - If no preference names are |
| | > passed, removes all |
| | > script-defined |
| | > preferences, and resets |
| | > all Adobe Bridge |
| | > application preferences to |
| | > their default values. |
| | |
| | > Returns undefined. |
+==================================+==================================+
| > _name_ Optional. One or more | |
| > names of preferences to | |
| > remove. | |
+----------------------------------+----------------------------------+
| resetFileAssociations() | > Resets file type associations |
| | > to their default values. |
| _prefObj_.resetFileAssociations | > Corresponds to the **Reset to |
| () | > Default Associations** button |
| | > in the File Type Associations |
| | > page of the Preferences |
| | > dialog. |
+----------------------------------+----------------------------------+
| resetWarningDialogs() | > Resets \"Do not show again\" |
| | > settings to false for all |
| _prefObj_.resetWarningDialogs () | > warning dialogs. Corresponds |
| | > to the **Reset** button in the |
| | > General page of the |
| | > Preferences dialog. |
+----------------------------------+----------------------------------+

## PreferencesDialog Object

> Provides access to the Adobe Bridge Preferences dialog, allowing you
> to add a panel to the dialog with your own ScriptUI controls that
> access and set any application preferences that you have defined by
> adding properties to the [Preferences
> Object](#preferences-object).
>
> You can only access this object as the target of an event. The object
> is returned in the [object](#_bookmark109) property of
> an [EventObject](#event-object) that
> results from an event in a Preferences dialog. See [PreferencesDialog
> events](#preferencesdialog-events).
>
> The Preferences dialog is modal, which means that no other Adobe
> Bridge events can occur until the user dismisses it with the **OK** or
> **Cancel** button, or closes it with the window-frame icon.

- For the **OK** button, the dialog generates an ok event. Your

  > handler can collect the values from the controls in your panel,
  > and modify the property values in the Preferences object
  > accordingly.

- For the **Cancel** button, the dialog generates a cancel event, and
  > for the window-close gesture, it generates a destroy event. Your
  > handler can, for example, clean up structures you created for the
  > window.

> The class defines no properties.

### PreferencesDialog functions

+----------------------------------+----------------------------------+
| []{#\_bookmark228 | > Creates and returns a ScriptUI |
| .anchor}addPanel() | > Window object to be used as a |
| | > new page in the Preferences |
| _prefObj_.addPanel (_name_) | > dialog. You can add ScriptUI |
| | > controls to the window to |
| | > allow users to access and set |
| | > preferences that you provide. |
| | > |
| | > Returns the new Window object. |
+==================================+==================================+
| > _name_ The name of the new | |
| > page, used as the title of the | |
| > new Window object. | |
| | |
| **_Example_** | |
| | |
| This example adds a page to the | |
| Preferences dialog that contains | |
| a single checkbox, which | |
| controls the boolean preference | |
| named myPref. | |
| | |
| function doPrefs(dialog) { | |
| | |
| > var panel = | |
| > dialog.addPanel(\"My | |
| > Preferences\"); | |
| > | |
| > var aBox = panel.add( | |
| > \'checkbox\', \[50, 50, 200, | |
| > 100\], \"My Pref\", | |
| > | |
| > { | |
| > | |
| alignment:\[\'center\',\'top\'\] | |
| > } ); | |
| > | |
| > aBox.onClick = function() { | |
| > app.preferences.myPref = | |
| > aBox.value; }; | |
| | |
| } | |
| | |
| var myHandler = function(event) | |
| { | |
| | |
| > if (event.type == \"create\" | |
| > && event.location == | |
| > \"prefs\") { | |
| > doPrefs(event.object); | |
| > | |
| > } | |
| > | |
| > return { handled: false }; | |
| | |
| }; | |
| | |
| app.eventHandlers.push( { | |
| handler: myHandler } ); | |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| close() | > Closes the Preferences dialog. |
| | > |
| _prefObj_.close (_isOK_) | > Returns undefined. |
+==================================+==================================+
| > _isOK_ Pass true to simulate | |
| > the user clicking **OK** to | |
| > close the dialog, false for | |
| > **Cancel**. | |
+----------------------------------+----------------------------------+

## QuickSearch Object

> QuickSearch object provides capability to the quick search feature in
> Bridge through Bridge SDK. Using QuickSearch, assets can be searched
> quickly from different locations such as current folder, system, or
> web (Adobe Stock search). Search strings can be retrieved or cleared.
> Search Results appear in the Content panel, or the default web browser
> if the selected search option is Adobe Stock search.
>
> There are four options available for search as provided in the quick
> search bar on the upper-right corner of the Bridge window.

**Quick Search Option** **String Equivalent**

---

Bridge Search: Current folder \"bridge\"
Search Adobe Stock \"Stock_Search\"
Spotlight (Mac)/ Desktop Search (Windows): Current folder \"os_folder\"
Spotlight (Mac)/ Desktop Search (Windows): Computer \"os_computer\"

### QuickSearch Functions

+----------------------------------+----------------------------------+
| clearSearchString() | Clears the current string from |
| quickSearchObj.clearSearch | Quick Search bar. |
| String() | |
| | Returns undefined. |
+==================================+==================================+
| getSearchString () | Gets the current string from |
| quickSearchObj.getSearchSt ring | Quick Search bar. |
| () | |
| | Returns searched term as string. |
+----------------------------------+----------------------------------+
| searchString() | Searches the provided string |
| quickSearchObj.searchStrin | using the selected Quick search |
| g(serachString) | option. The search results are |
| | displayed in the content |
| searchString | panel/browser. |
| | |
| | Returns undefined. |
| | |
| | The string to be searched. |
+----------------------------------+----------------------------------+
| getSearchMethod() | Gets currently selected |
| quickSearchObj.getSearchMe | QuickSearch option. |
| thod() | |
| | Returns string equivalent of |
| | quick search option selected. |
| | Refer to previous table for |
| | values. |
+----------------------------------+----------------------------------+
| setSearchMethod() | Sets quick Search Option. |
| quickSearchObj.setSearchMe | Allowed values are: |
| thod(quickSearchOption) | |
| | > bridge Stock_Search |
| quickSearchOption | > os_folder os_computer |
| | |
| | Returns undefined. |
| | |
| | Search option string for setting |
| | the scope of search. |
+----------------------------------+----------------------------------+

## TabbedPalette Object

> Allows a script to define and add a tabbed palette to a browser
> window. A script-defined palette is displayed in addition to the
> default palettes such as Favorites, Folders, Preview, Filter,
> Keywords, and Metadata. A script-defined palette can display a user
> interface defined in ScriptUI, or it can display HTML.
>
> You can add a palette to an existing browser window at any time (as
> long as the identifier is unique), and you can use the
> [create](#_bookmark118) document event to add your
> palette to new browser windows on creation.
>
> []{#\_bookmark233 .anchor}The name of a script-defined palette is
> automatically added to all relevant menus. You can specify where the
> palette goes, or move it programmatically. When it is shown, however,
> it can be dragged and dropped like the default palettes, and scripts
> cannot query the current position.
>
> You can show and hide individual palettes using this object's
> properties. A list of all defined palettes for a browser, including
> default palettes, is available in
> app.document.[[palettes](#_bookmark83).
>
> If a script-defined tabbed palette is visible when the user or a
> script creates a workspace, the workspace references that palette by
> its unique identifier. If a workspace references a script-defined
> tabbed palette, the palette must be created before the workspace is
> applied. Otherwise, the palette does not appear.

### TabbedPalette constructor

> To create a new object, use the new operator:
>
> new TabbedPalette (_document_, _title, id, type_, _\*paletteColumn,
> \*paletteRow_) new TabbedPalette (_document_, _title, id, type_, \*_url_, _\*paletteColumn,_
>
> _\*paletteRow_)

+-------------------+-------------------------------------------------+
| > _document_ | The browser window to which to add the palette. |
+===================+=================================================+
| > _title_ | The localizable title string that appears in |
| | the tab. |
+-------------------+-------------------------------------------------+
| > _id_ | The unique identifying string for the palette. |
+-------------------+-------------------------------------------------+
| > _type_ | The type of palette. One of: |
| | |
| | > **script**---A ScriptUI window **web**---A |
| | > browser view |
+-------------------+-------------------------------------------------+
| > _url_ | Optional. When _type_ is web, the web page URL |
| | to display. Default is the empty string, in |
| | which case the displayed palette is blank until |
| | the [url](#_bookmark238) property |
| | is set. |
+-------------------+-------------------------------------------------+
| > _paletteColumn_ | Optional. The horizontal location of the |
| | palette in the browser. A string or number, one |
| | of: |
| | |
| | > **left**, 0---The leftmost column (the |
| | > default) **center**, 1---The middle column |
| | > |
| | > **right**, 2---The rightmost column |
+-------------------+-------------------------------------------------+

+----------------+----------------------------------------------------+
| > _paletteRow_ | Optional. The vertical location of the palette in |
| | the browser. Can be a number, or one of these |
| | strings: |
| | |
| | > **top**---The topmost row (index 0, the default) |
| | > |
| | > **middle**---The middle row (or close to the |
| | > middle, if there are an even number) |
| | > |
| | > **bottom**---The bottommost row |
| | |
| | If a number, it is the 0-based index of the row, |
| | where 0 is the topmost row. If the index is out of |
| | range, the palette is placed in the closest |
| | existing row. |
| | |
| | The number of rows can vary according to the |
| | current workspace configuration. This function |
| | cannot create new rows. |
+----------------+----------------------------------------------------+

> **Example:** \#target bridge
>
> // create browser palette
>
> var webPalette = new TabbedPalette(app.document, \"myWebPalette\",
> \"myWebID\", \"web\",
> \"[http://www.adobe.com](http://www.adobe.com/)\");
>
> // create ScriptUI palette
>
> var scriptPalette = new TabbedPalette(app.document,
> \"myScriptPalette\", \"myScripID\", \"script\");
>
> scriptPalette.content.add(\'statictext\', \[15,15,105,35\], \'Display
> this text in my tab.\');

### TabbedPalette properties

+---------+----------+-----------------------------------------------+
| content | > Object | > When type is script, the ScriptUI Group |
| | | > object to display. |
| | | > |
| | | > Use this object's add() method to add UI |
| | | > elements to the palette. |
| | | > |
| | | > You can provide an onResize callback method |
| | | > for the Group object, which will be used to |
| | | > resize the contained elements when the user |
| | | > resizes the palette. |
| | | > |
| | | > For details of these methods and ScriptUI |
| | | > usage, see the _JavaScript Tools Guide_. |
+=========+==========+===============================================+
| id | > String | > A non-localized unique identifier for the |
| | | > palette. The identifiers for the built-in |
| | | > palettes are: |
| | | > |
| | | > favoritesTab foldersTab filterTab |
| | | > metadataTab keywordsTab contentTab |
| | | > cinemaPreviewTab inspectorTab |
+---------+----------+-----------------------------------------------+
| title | > String | > The localized title string to display in |
| | | > the palette's tab header. The string can |
| | | > include values derived dynamically at |
| | | > display time, using |
| | | > [Panele |
| | | tte](#panelette-markup-elements) |
| | | > [markup |
| | | > elemen |
| | | ts](#panelette-markup-elements). |
+---------+----------+-----------------------------------------------+

+---------------------------+-----------+---------------------------+
| type | > String | > The type of palette. |
| | | > One of: |
| | | > |
| | | > **script**---A ScriptUI |
| | | > window **web**---A |
| | | > browser view |
+===========================+===========+===========================+
| []{#\_bookmark238 | > String | > When type is web, the |
| .anchor}url | | > path to the page to |
| | | > display. |
+---------------------------+-----------+---------------------------+
| visible | > Boolean | > When true, this palette |
| | | > is visible, when false |
| | | > it is hidden. |
| | | > Read/write. **Note**: |
| | | > **Setting the visible |
| | | > parameter to false will |
| | | > destroy the panel |
| | | > created in UI.** |
+---------------------------+-----------+---------------------------+

### TabbedPalette object methods

+----------------------------------+----------------------------------+
| setLocation() | > Moves this palette to a |
| | > specific docking location in |
| _tabObj_.setLocation | > the browser. |
| | > |
| > (_paletteColumn_\[, | > Returns undefined. |
| > _paletteRow_\]) | |
+==================================+==================================+
| > _paletteColumn_ The horizontal | |
| > location of the palette in the | |
| > browser. A string, one of: | |
| > | |
| > **left**---The leftmost column | |
| > **center**---The middle column | |
| > **right**---The rightmost | |
| > column | |
| > | |
| > _paletteRow_ Optional. The | |
| > vertical location of the | |
| > palette in the browser. The | |
| > number of rows can vary | |
| > according to the current | |
| > workspace configuration. This | |
| > function cannot create new | |
| > rows. | |
| > | |
| > A string or number, one of: | |
| > | |
| > **top**---The topmost row (the | |
| > default) | |
| > | |
| > **middle**---The middle row | |
| > (or close to the middle, if | |
| > there are an even number) | |
| > | |
| > **bottom**---The bottommost | |
| > row | |
| > | |
| > Can be a number, the 0-based | |
| > index of the row, where 0 is | |
| > the topmost row. If the index | |
| > is out of range, the palette | |
| > is placed in the closest | |
| > existing row. | |
+----------------------------------+----------------------------------+
| remove() | > Removes this palette from the |
| | > list of available palettes and |
| _tabObj_.remove ( ) | > destroys it. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+

## TextPanelette Object

> []{#\_bookmark243 .anchor}An instantiable subclass of the [[Panelette
> Base Class](#panelette-base-class), representing a member
> subpanel of an [InspectorPanelObject](#inspectorpanel-object) that displays textual
> information about a set of thumbnails. It differs from the
> [ThumbnailPanelette Object](#thumbnailpanelette-object)
> in that it does not display the thumbnail icon, only the related text.
>
> The text can be static, or can be obtained dynamically from the
> associated thumbnail at display time. See [Panelette markup
> elements](#panelette-markup-elements).

### TextPanelette constructor

> To create a new object, use the new operator:
>
> new TextPanelette(_name_, _titleMarkup_, _thumbnails_,
> _keyValuePairs_);
>
> Parameters set the corresponding properties. The name and titleMarkup
> properties are inherited from the [Panelette Base
> Class](#panelette-base-class).

### TextPanelette properties

+---------------+-------------------------+-------------------------+
| keyValuePairs | > Array of 2-element | > A set of two-element |
| | > Array | > arrays in the format |
| | | > \[key, value\]. The |
| | | > array corresponds to |
| | | > the thumbnails array, |
| | | > each pair describing |
| | | > the text for the |
| | | > corresponding |
| | | > thumbnail. |
| | | > |
| | | > The key is shown on |
| | | > the left of each |
| | | > field in bold, and |
| | | > the value on the |
| | | > right in plain text. |
| | | > |
| | | > The fields contains |
| | | > string literals |
| | | > combined with |
| | | > [[Panel |
| | | ette](#pan |
| | | elette-markup-elements) |
| | | > [markup |
| | | > eleme |
| | | nts](#pane |
| | | lette-markup-elements), |
| | | > which specify the |
| | | > text to be displayed. |
+===============+=========================+=========================+
| thumbnails | > Array of Thumbnail or | > An array of |
| | > String | > [ |
| | | [Thumbnail]{.underline} |
| | | > [Object](#thumbnail-object)s |
| | | > or node URI strings |
| | | > for which to display |
| | | > descriptive text; or |
| | | > the special markup |
| | | > \[\[this\]\] to |
| | | > indicate the |
| | | > currently selected |
| | | > thumbnail in the |
| | | > Content pane. |
+---------------+-------------------------+-------------------------+

## Thumbnail Object

> Represents a reference to a node in the browser navigation hierarchy.
> Thumbnail objects can represent:

- Files and folders in the local file system.

- URLs

- Navigation nodes of types defined by an [[ExtensionHandler
  > Object](#extensionhandler-object).

> []{#\_bookmark249 .anchor}A thumbnail's applicable node handler
> determines how nodes are displayed when that thumbnail is selected.
> The Content pane can show thumbnail icons or a local or remote web
> page.
>
> **CAUTION:** When a script accesses the properties of a Thumbnail
> object, some properties of the object may not be immediately
> available. To ensure the object contains current data, set
> app.[[synchronousMode](#_bookmark32) to true before
> accessing properties.

### Thumbnail object constructor

> Adobe Bridge automatically creates Thumbnail objects for files and
> folders in the local file system and for the default and interactively
> added contents of the Favorites palette.
>
> To create a Thumbnail object with a script for use in the Favorites
> palette, use the new operator: new Thumbnail (_node_\[, _name_\]);

+--------+------------------------------------------------------------+
| _node_ | The node specifier. One of the following: |
| | |
| | - An ExtendScript File or Folder object for a file or |
| | > folder that exists on the local file system. If the |
| | > referenced file or folder does not exist, causes a |
| | > run-time error. This object becomes the value of the |
| | > new object's [spec](#_bookmark261) |
| | > property. |
| | |
| | - A Thumbnail object. This creates a new Thumbnail |
| | > object that references the same node. See [Multiple |
| | > referencesto the same |
| | > |
| | node](#multiple-references-to-the-same-node). |
| | |
| | - A string containing a fully qualified Bridge URI |
| | > (uniform resource identifier). To be a fully |
| | > qualified Bridge URI, the path should include a |
| | > prefix that identifies the node type and its |
| | > associated the node handler; the default is bridge: |
| | > for the default node handler. |
| | |
| | A path to a local or remote file, folder, or page, which |
| | becomes the value of the new object's |
| | [path](#_bookmark260) property. |
+========+============================================================+
| _name_ | Optional. A localizable string to use as the display name |
| | for the thumbnail icon in the browser window. For |
| | script-defined node types, the node-handling extension |
| | must be registered before the thumbnail is created for the |
| | name to take effect. |
| | |
| | If not supplied, the display name defaults to the |
| | [path](#_bookmark260) or |
| | [spec](#_bookmark261) value. |
| | |
| | **CAUTION:** For a Thumbnail object associated with an |
| | ExtendScript File or Folder object, using the name |
| | argument renames the folder or file on disk. |
+--------+------------------------------------------------------------+

###### Examples of thumbnail creation

> // references a folder
>
> var myLocation = new Thumbnail(Folder(\"/C/myFolder\"));
>
> // a second reference to the same node
>
> var newLocation = new Thumbnail(myLocation);
>
> // references a file, and renames the file on disk
>
> var myFile = new Thumbnail(File(\"/C/myFolder/file.txt\"),
> \"myfile.txt\");
>
> // references a URL
>
> var myURL = new Thumbnail
> (\"[http://www.adobe.com](http://www.adobe.com/)\");

#### Multiple references to the same node

> Multiple Thumbnail objects can refer to the same node. In JavaScript
> terminology, two such objects are equal, but not identical. That is,
> if you declare two Thumbnail objects that point to the same file, the
> JavaScript equality operator \"==\" returns true, but the identity
> operator \"===\" returns false. Any values that are assigned (not
> predefined) in one of the objects are not reflected in the other.
>
> This example creates two Thumbnail objects that reference the same
> node, and shows that an arbitrary property defined on one cannot be
> referenced on the other.
>
> var t1 = new Thumbnail(File(\"/C/Temp/afile.txt\"); var t2 = new
> Thumbnail(File(\"/C/Temp/afile.txt\");
>
> t1 == t2; // returns true t1 === t2; // returns false
>
> t1.newNote = \"a note for the thumbnail\"; alert(t2.newNote); //
> t2.newNote is undefined
>
> For a thumbnail that references a file, however, you can assign
> arbitrary data to the Thumbnail.metadata
>
> object, which can be referenced from either object.
>
> var t1 = new Thumbnail(File(\"/C/myFolder/myfile.txt\")); var t2 = new
> Thumbnail(File(\"/C/myFolder/myfile.txt\")); t1.newProperty =
> \"arbitrary value\";
>
> var val = t2.newProperty; // result is undefined.
>
> //properties created directly in thumbnail are not shared var md =
> t1.metadata;
>
> md.namespace = \"<http://ns.adobe.com/photoshop/1.0/>\";
> md.SpecialNotes = \"Special notes for this file.\";
>
> // You can access SpecialNotes from either Thumbnail object
> t2.metadata.namespace = \"<http://ns.adobe.com/photoshop/1.0/>\";
> alert(\"Special Notes: \", t2.metadata.SpecialNotes);
>
> The spec values of the two thumbnail objects reference different File
> objects, and so are not equal.
>
> However, the two File objects reference the same file, as shown by
> inspecting the string value: t1.spec == t2.spec; //returns false
>
> t1.spec.toString() == t2.spec.toString(); // returns true

### Thumbnail properties

+-----------------+--------------------+-----------------------------+
| _extensionName_ | ExtensionModel | > A model object for the |
| | | > node-handling extension |
| | | > that applies to this |
| | | > thumbnail is accessible |
| | | > through a property with |
| | | > the same name as the |
| | | > [[Ex |
| | | tensionHandler]{.underline} |
| | | > [Object]{.underline} |
| | | ](#extensionhandler-object) |
| | | > name. |
| | | > |
| | | > Adobe Bridge instantiates |
| | | > the |
| | | > |
| | | [ExtensionModel](#extensionmodel-object) |
| | | > [Object](#extensionmodel-object) |
| | | > when it creates the |
| | | > Thumbnail object in order |
| | | > to display the node. |
+=================+====================+=============================+
| aliasType | String | > If the value of |
| | | > [type](#_bookmark263) |
| | | > is alias, the kind of |
| | | > target this thumbnail |
| | | > represents, one of: |
| | | > |
| | | > file folder |
| | | > |
| | | > Otherwise undefined. |
+-----------------+--------------------+-----------------------------+
| children | Array of Thumbnail | > An array of Thumbnail |
| | | > objects for the children |
| | | > of this container node. |
| | | > When this object |
| | | > references a folder, the |
| | | > children are the |
| | | > thumbnails that reference |
| | | > the contents of the |
| | | > folder. By default, when |
| | | > the thumbnail is selected |
| | | > in a navigation pane, its |
| | | > children are shown in the |
| | | > Content pane. Read only. |
| | | > |
| | | > **NOTE:** This array is |
| | | > not populated until the |
| | | > [loaded](#_bookmark119) |
| | | > event has occurred for |
| | | > the document. |
| | | > |
| | | > The list of children is |
| | | > cached on the first |
| | | > reference so that |
| | | > subsequent references do |
| | | > not result in further |
| | | > disk access. To ensure |
| | | > that the list is up to |
| | | > date (for example after |
| | | > you have performed |
| | | > operations that may have |
| | | > resulted in children |
| | | > being deleted, added, or |
| | | > renamed) call the |
| | | > [[refresh()]{ |
| | | .underline}](#_bookmark266) |
| | | > method to make sure the |
| | | > list is updated on the |
| | | > next access. You do not |
| | | > need to refresh if you |
| | | > changed the content or |
| | | > properties of a child |
| | | > thumbnail. |
+-----------------+--------------------+-----------------------------+
| container | Boolean | > When true, the node is a |
| | | > container; that is, it |
| | | > can have child nodes |
| | | > (regardless of whether it |
| | | > currently has any |
| | | > children). Only container |
| | | > nodes can appear in the |
| | | > Folders and Favorites |
| | | > palettes. |
| | | > |
| | | > Folder and web-browser |
| | | > thumbnails are |
| | | > containers; a |
| | | > node-handling extension |
| | | > can define other |
| | | > container node types. |
| | | > |
| | | > Read only. |
+-----------------+--------------------+-----------------------------+

+----------------------+----------------------+----------------------+
| core | Object | > Provides access to |
| | | > the core node-data |
| | | > sets defined by |
| | | > the default node |
| | | > handler. Contains |
| | | > a set of |
| | | > |
| | | [Infoset](#infoset-object) |
| | | > [ |
| | | [Object]{.underline} |
| | | ](#infoset-object)s. |
| | | > |
| | | > Refer to core node |
| | | > attributes through |
| | | > the name of the |
| | | > core |
| | | > [ |
| | | Infoset]{.underline} |
| | | > [Object](#infoset-object) |
| | | > and |
| | | > |
| | | [InfosetMemberDesc |
| | | ription]{.underline} |
| | | > [Object](#infosetmember |
| | | description-object). |
| | | > For example, |
| | | > myThumbSize = |
| | | > myThumb |
| | | .core.immediate.size |
+======================+======================+======================+
| creationDate | Date | > Date the |
| | | > referenced file or |
| | | > folder was |
| | | > created, if it can |
| | | > be determined. |
| | | > Read only. |
+----------------------+----------------------+----------------------+
| exists | Boolean | > When true, the |
| | | > resource for this |
| | | > file or folder |
| | | > node exists on the |
| | | > local disk. |
| | | > |
| | | > Node-handling |
| | | > extensions can |
| | | > define other |
| | | > criteria for |
| | | > whether a node |
| | | > exists. |
+----------------------+----------------------+----------------------+
| extensions | Array of | > All of the |
| | ExtensionHandler | > [[ExtensionHandler |
| | | > Object] |
| | | {.underline}](#exten |
| | | sionhandler-object)s |
| | | > that could handle |
| | | > this node; the |
| | | > last one in the |
| | | > list is the one |
| | | > that does handle |
| | | > it. |
+----------------------+----------------------+----------------------+
| hasMetadata | Boolean | > When true, this |
| | | > thumbnail is |
| | | > associated with a |
| | | > file that contains |
| | | > embedded metadata. |
| | | > Otherwise false. |
+----------------------+----------------------+----------------------+
| hidden | Boolean | > When true, this |
| | | > thumbnail is |
| | | > hidden. When false |
| | | > |
| | | > (the default), it |
| | | > is shown. Read |
| | | > only. |
+----------------------+----------------------+----------------------+
| iconPath | String | > The path to the |
| | | > operating-system |
| | | > icon image file |
| | | > for this node, |
| | | > when it represents |
| | | > a web page. |
+----------------------+----------------------+----------------------+
| [[]{#\_bookmark258 | String | > The label string |
| .an | | > for this |
| chor}]{#\_bookmark257 | | > thumbnail. Can be |
| .anchor}label | | > one of the |
| | | > predefined label |
| | | > strings (as seen |
| | | > in the Label menu) |
| | | > to apply one of |
| | | > the standard color |
| | | > tags. Any string |
| | | > that does not |
| | | > match a predefined |
| | | > label is displayed |
| | | > with the default |
| | | > white color tag. |
| | | > Removing the label |
| | | > string removes the |
| | | > color tag as well. |
| | | > Read/write. |
+----------------------+----------------------+----------------------+
| lastModifiedDate | Date | > Date the |
| | | > referenced file or |
| | | > folder was last |
| | | > modified, if it |
| | | > can be determined. |
| | | > Read only. |
+----------------------+----------------------+----------------------+
| location | String | > Whether the |
| | | > thumbnail is |
| | | > associated with a |
| | | > local file-system |
| | | > object or an Adobe |
| | | > Drive® node (which |
| | | > can have both a |
| | | > local and remote |
| | | > replica). One of: |
| | | > |
| | | > local unknown |
| | | > |
| | | > |
| | | AdobeDriveExtension |
+----------------------+----------------------+----------------------+
| locked | Boolean | > When true, this |
| | | > node represents a |
| | | > read-only file in |
| | | > Windows, or a file |
| | | > that has been |
| | | > locked in the |
| | | > Finder in Mac OS. |
+----------------------+----------------------+----------------------+

+-------------------------+----------------+-------------------------+
| []{#\_bookmark259 | Metadata | > The |
| .anchor}metadata | | > |
| | | [[Metadata]{.underline} |
| | | > [Object](#metadata-object) |
| | | > associated with this |
| | | > thumbnail, if any. |
| | | > Otherwise undefined. |
| | | > Read only. |
| | | > |
| | | > Some properties of |
| | | > this Metadata object |
| | | > may not be |
| | | > immediately |
| | | > available. To ensure |
| | | > the object contains |
| | | > current data, set |
| | | > app |
| | | .[synchronousMode](#_bookmark32) |
| | | > to true, or use |
| | | > Thumbnail.[syn |
| | | chronousMetadata](#_bookmark262). |
| | | > |
| | | > If no metadata is |
| | | > defined for a |
| | | > thumbnail, and you |
| | | > attempt to access a |
| | | > metadata property |
| | | > through this |
| | | > property, the value |
| | | > undefined is |
| | | > returned. Note that |
| | | > this differs from the |
| | | > behavior in Adobe |
| | | > Bridge CS2, where an |
| | | > exception was thrown |
| | | > in this case. |
+=========================+================+=========================+
| mimeType | String | > The referenced file's |
| | | > MIME type, if it can |
| | | > be determined; |
| | | > otherwise, the empty |
| | | > string. Read only. |
+-------------------------+----------------+-------------------------+
| model | ExtensionModel | > The |
| | | > [Exte |
| | | nsionModel]{.underline} |
| | | > |
| | | [Object]( |
| | | #extensionmodel-object) |
| | | > associated with this |
| | | > node. Read-only. |
+-------------------------+----------------+-------------------------+
| name | String | > The label displayed |
| | | > for the thumbnail. |
| | | > Read/write. Default |
| | | > is the path value. |
+-------------------------+----------------+-------------------------+
| parent | Thumbnail | > The Thumbnail object |
| | | > for the parent node |
| | | > of this thumbnail. |
| | | > The value is |
| | | > undefined for |
| | | > thumbnails added to |
| | | > the root level of |
| | | > app.favorites. This |
| | | > object is in the |
| | | > children array of its |
| | | > parent. |
| | | > |
| | | > Read-only. |
+-------------------------+----------------+-------------------------+
| []{#\_bookmark260 | String | > A Bridge URI |
| .anchor}path | | > containing the path |
| | | > or URL for the |
| | | > referenced node. Set |
| | | > when the object is |
| | | > created, using the |
| | | > first argument to the |
| | | > [[Thumbnail |
| | | > objec |
| | | t](#thumbn |
| | | ail-object-constructor) |
| | | > [constructor |
| | | ](#thumbna |
| | | il-object-constructor). |
| | | > Read only. |
+-------------------------+----------------+-------------------------+
| rating | Number | > The rating value for |
| | | > this thumbnail, in |
| | | > the range |
| | | > |
| | | > \[-1..5\]. A negative |
| | | > value signifies a |
| | | > rejection. If set to |
| | | > a value that is out |
| | | > of range, the rating |
| | | > is set to 0. |
| | | > |
| | | > Read/write. |
| | | > |
| | | > Applies to all |
| | | > thumbnails regardless |
| | | > of whether they |
| | | > support embedded |
| | | > metadata. |
+-------------------------+----------------+-------------------------+
| rotation | Number | > This thumbnail's |
| | | > rotation, one of: |
| | | > |
| | | > 0: No rotation |
| | | > |
| | | > 90: Rotated 90 |
| | | > degrees clockwise |
| | | > |
| | | > -90: Rotated 90 |
| | | > degrees |
| | | > counterclockwise 180: |
| | | > Rotated 180 degrees |
| | | > |
| | | > All other values are |
| | | > ignored. Read/write. |
+-------------------------+----------------+-------------------------+

+--------------------------+--------------+--------------------------+
| []{#\_bookmark261 | File, Folder | > An ExtendScript File |
| .anchor}spec | | > or Folder object for |
| | | > this thumbnail's |
| | | > referenced node. Set |
| | | > when the object is |
| | | > created, using the |
| | | > first argument to the |
| | | > [[Thumbn |
| | | ail](#thumb |
| | | nail-object-constructor) |
| | | > [object]{.underline} |
| | | > [construct |
| | | or](#thumbn |
| | | ail-object-constructor). |
| | | > If the thumbnail does |
| | | > not reference a file |
| | | > or folder, the value |
| | | > is undefined. |
| | | > |
| | | > Read only. |
+==========================+==============+==========================+
| []{#\_bookmark262 | Metadata | > Waits for confirmation |
| .an | | > of a valid value to |
| chor}synchronousMetadata | | > return the [[Metadata |
| | | > Object](#metadata-object) |
| | | > associated with this |
| | | > thumbnail, if any. |
| | | > Otherwise undefined. |
| | | > Read only. |
| | | > |
| | | > If |
| | | > a |
| | | pp.[synchronousMode](#_bookmark32) |
| | | > is true, this is the |
| | | > same as |
| | | > Th |
| | | umbnail.[metadata](#_bookmark259). |
+--------------------------+--------------+--------------------------+
| []{#\_bookmark263 | String | > The type of node this |
| .anchor}type | | > thumbnail references. |
| | | > One of: |
| | | > |
| | | > file folder alias |
| | | > package |
| | | > |
| | | > application (an |
| | | > executable file) |
| | | > |
| | | > other |
+--------------------------+--------------+--------------------------+
| uri | String | > The full Bridge URI |
| | | > (unique resource |
| | | > identifier) for this |
| | | > thumbnail. This is the |
| | | > path string preceded |
| | | > by a registered |
| | | > node-type identifying |
| | | > prefix such as |
| | | > \"vc:\". Read only. |
+--------------------------+--------------+--------------------------+

### Thumbnail functions

> Additional functions can be defined for the Thumbnail object by a
> node-handling extension; see
> ExtensionHandler.[methods](#_bookmark300).

+----------------------------------+----------------------------------+
| copyTo() | > Creates a new [[Thumbnail |
| | > Object] |
| _thumbnailObj_.copyTo (_path_) | {.underline}](#thumbnail-object) |
| | > that references the same node |
| | > as this one, and adds it to |
| | > the target thumbnail's |
| | > children list. Each call to |
| | > this function is added to the |
| | > Undo stack. |
| | > |
| | > Returns true on success. |
+==================================+==================================+
| > _path_ The parent node of the | |
| > new copy. A File or Folder | |
| > object, a | |
| > [[Thumbnail] | |
| {.underline}](#thumbnail-object) | |
| > [Object](#thumbnail-object), | |
| > or a Bridge URI string. | |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| moveTo() | > Removes this thumbnail from |
| | > its current parent, and adds |
| _thumbnailObj_.moveTo (_path_) | > it to the target thumbnail's |
| | > children list. Each call to |
| | > this function is added to the |
| | > Undo stack. |
| | > |
| | > Returns true on success. |
| | > |
| | > **NOTE:** If the thumbnail |
| | > refers to an existing file or |
| | > folder, this moves the |
| | > referenced file or folder on |
| | > disk. |
| | > |
| | > var thumbnail = |
| | > |
| | > new |
| | > Thumbnai |
| | l(File.openDialog(\"Source?\")); |
| | > var target = new |
| | > Thumbnail(Fo |
| | lder.selectDialog(\"Target?\")); |
| | > if (thumbnail.moveTo(target)) |
| | > { |
| | > |
| | > Window.alert(\"move |
| | > succeeded\"); |
| | > |
| | > } |
| | > |
| | > else Window.alert(\"move |
| | > failed\"); |
+==================================+==================================+
| > _path_ The new parent node. A | |
| > File or Folder object, a | |
| > [Thumbnail | |
| > Object](#thumbnail-object), | |
| > or a Bridge URI string. | |
+----------------------------------+----------------------------------+
| open() | > Launches the file referenced |
| | > by this thumbnail in the |
| _thumbnailObj_.open () | > appropriate application (such |
| | > as Photoshop for JPEG files). |
| | > This is the same as choosing |
| | > **Open** from the **File** or |
| | > context menu, or |
| | > double-clicking the thumbnail |
| | > icon in the Content pane. |
| | > |
| | > If this thumbnail references a |
| | > JSX file, runs the script in |
| | > its target application, or, if |
| | > no target is specified, in the |
| | > ExtendScript Toolkit. See the |
| | > _JavaScript Tools Guide_. |
| | > |
| | > If this thumbnail references a |
| | > folder, navigates to that |
| | > folder in the Folders |
| | > pane---that is, sets |
| | > document.thumbnail to this |
| | > thumbnail. |
| | > |
| | > Returns true on success. |
+----------------------------------+----------------------------------+
| openWith() | > Launches the file referenced |
| | > by this thumbnail in the |
| _thumbnailObj_.openWith | > specified application. |
| (_appPath_) | > |
| | > Returns true on success. |
+----------------------------------+----------------------------------+
| > _appPath_ A platform-specific | |
| > path string to the | |
| > application, as returned in | |
| > appPath property of the | |
| > [openW | |
| ith](#_bookmark125) | |
| > event object when a user makes | |
| > a selection of thumbnails in | |
| > the Content pane, then selects | |
| > an application from the **Open | |
| > With** submenu of the **File** | |
| > or context menu. | |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| []{#\_bookmark266 | > Refreshes an associated |
| .anchor}refresh() | > information set or sets to |
| | > reflect the current state of |
| _thumbnailObj_.refresh | > this node's referenced file or |
| (\[_infosetName_\]) | > folder. |
| | > |
| | > For container thumbnails, |
| | > marks the Thumbnail object so |
| | > that the next access to the |
| | > children property causes a |
| | > disk access to update the |
| | > cached list of children. |
| | |
| | - For non-container |
| | > thumbnails, returns true |
| | > if the node has changed |
| | > since the last access. |
| | |
| | - For container thumbnails, |
| | > returns true if the node |
| | > has been renamed since the |
| | > last access. |
+==================================+==================================+
| > _infosetName_ Optional. An | |
| > array of [Infoset | |
| > Objec | |
| t](#infoset-object) | |
| > names, or the string all (the | |
| > default), which refreshes all | |
| > information sets associated | |
| > with this thumbnail. | |
+----------------------------------+----------------------------------+
| []{#\_bookmark267 | > Registers a callback function |
| .anchor}registerInterest() | > that is executed whenever a |
| _thumbnailObj_.registerInterest | > node-data value in this |
| (_callback_) | > thumbnail changes. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| > _callback_ A developer-defined | |
| > function that conforms to the | |
| > following prototype: | |
| > | |
| > function interestCallback | |
| > (thumb, message) | |
| > | |
| > _thumb_---This Thumbnail | |
| > object. | |
| > | |
| > _message_---A string, the name | |
| > of the [Infoset | |
| > Objec | |
| t](#infoset-object) | |
| > whose update triggered the | |
| > call. | |
+----------------------------------+----------------------------------+
| remove() | > Deletes this Thumbnail object, |
| | > and also deletes the file or |
| _thumbnailObj_.remove () | > folder associated with the |
| | > thumbnail from the disk. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+
| resolve() | > If the value of |
| | > [[t |
| _thumbnailObj_.resolve () | ype]{.underline}](#_bookmark263) |
| | > is alias, retrieves a |
| | > Thumbnail |
| | > |
| | > object for the target of the |
| | > alias. |
| | |
| | - If the alias can be |
| | > resolved, returns the |
| | > Thumbnail |
| | |
| | > object for the target. |
| | |
| | - If the alias cannot be |
| | > resolved, returns |
| | |
| | > undefined. |
| | |
| | - If the type is not alias, |
| | > returns this Thumbnail |
| | |
| | > object. |
| | > |
| | > **NOTE:** Adobe Bridge does |
| | > not support symbolic links |
| | > (that is, links created in Mac |
| | > OS or Unix with -s). |
+----------------------------------+----------------------------------+
| revealInSystemBrowser() | > Opens the platform-specific |
| | > native file browser, |
| _thu | > displaying and selecting the |
| mbnailObj_.revealInSystemBrowser | > file or folder for this |
| () | > thumbnail. |
| | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| unregisterInterest() | > Removes a callback function |
| _thumbnailObj_.registerInterest | > from the list of callbacks |
| (_callback_) | > registered for this thumbnail. |
| | > |
| | > Returns undefined. |
+==================================+==================================+
| > _callback_ A developer-defined | |
| > function, previously | |
| > registered with | |
| > [[registerInterest | |
| ()]{.underline}](#_bookmark267). | |
+----------------------------------+----------------------------------+
| []{#\_bookmark268 | > Re-enumerates the children of |
| .anchor}verifyExternalChanges() | > a container node. Has no |
| | > effect if the node is not a |
| _thumb | > container. |
| nailObj_.verifyExternalChanges() | > |
| | > Returns undefined. |
+----------------------------------+----------------------------------+

## ThumbnailPanelette Object

> An instantiable subclass of the [Panelette Base
> Class](#panelette-base-class), representing a member
> subpanel of a [InspectorPanel](#inspectorpanel-object) > [Object](#inspectorpanel-object) that displays
> resizeable thumbnail icons, with corresponding text labels for each
> thumbnail. The text can be specified with literal strings, derived
> from data in various ways, or calculated using JavaScript; see
> [Panelette markup elements](#panelette-markup-elements).
>
> The displayed thumbnails are mouse-sensitive. A single click makes a
> thumbnail the inspection focus for the Inspector, and reveals or
> navigates to that thumbnail in the Content pane.

### ThumbnailPanelette constructor

> To create a new object, use the new operator:
>
> new ThumbnailPanelette(_name_, _titleMarkup_, _thumbnails_,
> _keyValuePairs_,

\*textPosition\*\*);

> Parameters set the corresponding properties. The name and titleMarkup
> properties are inherited from the [Panelette Base
> Class](#panelette-base-class).

### ThumbnailPanelette properties

+---------------+-------------------------+-------------------------+
| keyValuePairs | > Array of Array of | > A collection |
| | > 2-element Array | > corresponding to the |
| | | > thumbnails array, |
| | | > where each member |
| | | > contains a set of |
| | | > two-element arrays, |
| | | > each of which |
| | | > specifies a text |
| | | > field for the |
| | | > corresponding |
| | | > thumbnail. Field |
| | | > arrays are in the |
| | | > format \[_key_, |
| | | > _value_\]. The key is |
| | | > shown on the left of |
| | | > each field in bold, |
| | | > and the value on the |
| | | > right in plain text. |
| | | > |
| | | > The key and value |
| | | > fields containing |
| | | > string literals |
| | | > combined with |
| | | > [ |
| | | [Panelette]{.underline} |
| | | > [markup]{.underline} |
| | | > [eleme |
| | | nts](#pane |
| | | lette-markup-elements), |
| | | > which specify the |
| | | > text to be displayed |
| | | > with the thumbnail |
| | | > icons. Read/write. |
+===============+=========================+=========================+
| textPosition | > String | > Optional. The |
| | | > placement of the |
| | | > displayed text in the |
| | | > horizontal |
| | | > presentation mode. |
| | | > Read/write. |
| | | > |
| | | > One of: |
| | | > |
| | | > **below**---(Default) |
| | | > Displays text below |
| | | > the thumbnail icon. |
| | | > **right**---Displays |
| | | > text to the right of |
| | | > the thumbnail icon. |
+---------------+-------------------------+-------------------------+
| thumbnails | > String or Array of | > An array of |
| | > Thumbnail | > [Thumbnail |
| | | > Object](#thumbnail-object)s |
| | | > to be displayed in |
| | | > this subpanel, or a |
| | | > string containing |
| | | > panelette markup that |
| | | > obtains a set of |
| | | > thumbnails at display |
| | | > time. Read only. |
+---------------+-------------------------+-------------------------+

# Node-Handling Extension Object Reference

###### Object summary

> []{#\_bookmark275 .anchor}This chapter presents objects that are
> available to product or plug-in developers who wish to extend the
> node-handling capability of Adobe Bridge. This object model allows
> advanced developers to integrate a product or plug-in with Adobe
> Bridge by defining new node types.
>
> []{#\_bookmark276 .anchor}The objects are presented alphabetically. For
> each object, complete syntax details are provided for the constructor,
> properties, and functions.

+----------------------------------+----------------------------------+
| [[Badge | > Represents a status icon |
| Obj | > associated with a node in the |
| ect](#badge-object) | > Content pane. |
+==================================+==================================+
| [[CacheData | > Tracks the current cache |
| Object] | > status of node data in an |
| {.underline}](#cachedata-object) | > [Infoset]{.underline} |
| | > [Object |
| | ](#infoset-object). |
+----------------------------------+----------------------------------+
| [CacheElement | > Encapsulates all node-handling |
| Object](#cacheelement-object) | > a [Thumbnail]{.underline} |
| | > [Object](#thumbnail-object). |
+----------------------------------+----------------------------------+
| [ExtensionHandler]{.underline} | > Defines an extension to the |
| [Object](#extensionhandler-object) | > model. |
+----------------------------------+----------------------------------+
| [ExtensionModel]{.underline} | > Provides a framework for |
| [Object](#extensionmodel-object) | > node-handling methods for a |
| | > specific node. |
+----------------------------------+----------------------------------+
| [FilterDescription | > Encapsulates a filtering |
| Object](#filterdescription-object) | |
+----------------------------------+----------------------------------+
| [Infoset | > Encapsulates private node data |
| Objec | > associated with a |
| t](#infoset-object) | > node-handling extension, as |
| | > defined by an |
| | > |
| | [ExtensionHandler]{.underline} |
| | > [Object](#extensionhandler-object). |
| | > |
| | > Adobe Bridge defines [Core |
| | > infoset |
| | s](#core-infosets), |
| | > which script-defined handlers |
| | > must support. |
+----------------------------------+----------------------------------+
| [InfosetM | > Describes a data member of an |
| emberDescription](# | > [[Infoset |
| infosetmemberdescription-object) | > Object |
| [[Object]{.underline}](# | ]{.underline}](#infoset-object). |
| infosetmemberdescription-object) | > Corresponds to a |
| | > developer-defined property of |
| | > the [[Thumbnail]{.underline} |
| | > [Object] |
| | {.underline}](#thumbnail-object) |
| | > for a handled node. |
+----------------------------------+----------------------------------+
| [ModalOperator]{.underline} | > An independent node-handling |
| [Object](#modaloperator-object) | > interface. |
+----------------------------------+----------------------------------+
| [Operand | > Utility class for searches in |
| Objec | > handled nodes. |
| t](#operand-object) | |
+----------------------------------+----------------------------------+
| [Operator | > A base class for lengthy or |
| Clas | > complex node-handling |
| s](#operator-class) | > operations. |
+----------------------------------+----------------------------------+
| [ProgressOperator | > A lengthy node-handling |
| Object](#progressoperator-object) | > progress and be interrupted or |
| | > canceled. |
+----------------------------------+----------------------------------+
| [Rank | > Utility class for searches in |
| Ob | > handled nodes. |
| ject](#rank-object) | |
+----------------------------------+----------------------------------+
| [Scope | > Utility class for searches in |
| Obj | > handled nodes. |
| ect](#scope-object) | |
+----------------------------------+----------------------------------+
| [SearchCondition | > Defines a specific condition |
| Object](#searchcondition-object) | > node to match a search. |
| | > Returned from a selection in |
| | > the Find dialog. |
+----------------------------------+----------------------------------+
| [SearchCriteria | > Defines one possible search |
| Object](#searchcriteria-object) | > handled nodes. Passed to Adobe |
| | > Bridge to populate the Find |
| | > dialog. |
+----------------------------------+----------------------------------+
| [SearchDefinition | > Defines a set of search |
| Object](#searchdefinition-object) | > handled nodes. Passed to Adobe |
| | > Bridge to populate the Find |
| | > dialog. |
+----------------------------------+----------------------------------+

**108**

+----------------------------------+----------------------------------+
| [SearchDetails | > Utility class for searches in |
| Object](#searchdetails-object) | |
+==================================+==================================+
| [ | > Defines a specific search |
| SearchSpecification]{.underline} | > among handled nodes. Returned |
| [Object](#searchspecification-object) | > dialog. |
+----------------------------------+----------------------------------+
| [SortCriterion]{.underline} | > Defines a sorting criterion |
| [Object](#sortcriterion-object) | |
+----------------------------------+----------------------------------+

## Badge Object

> []{#\_bookmark278 .anchor}Represents a status icon that can be
> displayed with a node in the Content pane. A node can be associated
> with up to four badge icons, specified in the badges member of the
> [[badges](#_bookmark352) core node-data set. See
> ['Core](#core-infosets) [infosets' on page
> 132](#core-infosets).

### Badge properties

+---------+--------------+-------------------------------------------+
| badge | > BitmapData | > The [BitmapData |
| | | > |
| | | Object](#bitmapdata-object) |
| | | > that defines the icon image. |
+=========+==============+===========================================+
| toolTip | > String | > A string that is shown when the mouse |
| | | > hovers over the badge icon (in the |
| | | > |
| | | > details view). |
+---------+--------------+-------------------------------------------+

## CacheData Object

> []{#\_bookmark282 .anchor}This object associates a cache status with
> each [[Infoset Object](#infoset-object) in a
> [CacheElement Object](#cacheelement-object). The status
> determines whether the data needs to be refreshed.
>
> Your [ExtensionModelObject](#extensionmodel-object) method for
> [[refreshInfoset()]{.underline}](#_bookmark327) should update the
> cache status for each data set it updates, including core data sets:
>
> myModel.refreshInfoset = function(infosetName) {
>
> // retrieve the cache
>
> thisCache = this.privateData.cacheElement;
>
> // update the cache status for core data if(infosetName ==
> "immediate") {
>
> thisCache.immediate.cacheData.status = "good";
>
> }
>
> \...
>
> Adobe Bridge does not check any data value until the cache status is
> set.

### CacheData properties

+--------+----------+------------------------------------------------+
| cookie | > String | > Opaque storage to aid extensions in |
| | | > discovering the cache status. The string |
| | | > contains data in an extension-defined |
| | | > format. Read/write. |
+========+==========+================================================+
| status | > String | > The cache status for a member of the |
| | | > associated information set, or of the set |
| | | > itself. Read/write. One of: |
| | | > |
| | | > good (known valid data) |
| | | > |
| | | > bad (was good at one point, but not now) |
| | | > unknown |
| | | > |
| | | > inProgress (status is inProgress after a |
| | | > refresh has been requested |
| | | > |
| | | > but before the data is confirmed as good) |
| | | > |
| | | > invalid (status is invalid if the |
| | | > [ExtensionModel |
| | | > Object](#extensionmodel-object) |
| | | > no longer exists) |
+--------+----------+------------------------------------------------+

## CacheElement Object

> []{#\_bookmark286 .anchor}This object associates a
> [[Thumbnail]{.underline} [Object](#thumbnail-object) with
> the [ExtensionModelObject](#extensionmodel-object) that handles the node
> and that defines additional node data. The cache collects all
> currently defined node data.
>
> This object actually contains the [ExtensionModel
> Object](#extensionmodel-object) that is created for the
> thumbnail, as well as the associated [Infoset
> Object](#infoset-object)s. Each [Infoset
> Object](#infoset-object) in the cache is associated with
> a [CacheData Object](#cachedata-object) object that
> contains its cache status.
>
> When Adobe Bridge needs to display a handled node, it instantiates
> this object. It creates the [ExtensionModelObject](#extensionmodel-object) using the handler's
> makeModel() method, and stores it in the CacheElement. It then passes
> the CacheElement object to the node handler's model method
> registerInterest().
>
> Your implementation of the registerInterest() method must store the
> cache object (typically in the model object's privateData property) so
> that the model's refreshInfoset() method can use it to update the
> data. For example, to store the reference to the containing
> CacheElement in the model (and remove the reference when the node is
> no longer displayed):
>
> // associate this node with the node data cache
> myModel.registerInterest = function(cacheElement) {
>
> this.privateData.cacheElement = cacheElement;
>
> }
>
> // dissociate this node from the node data cache
> myModel.unregisterInterest = function() {
>
> this.privateData.cacheElement = undefined;
>
> }
>
> Your model methods can access the cache element, and through it all
> Adobe Bridge-defined and script-defined thumbnail properties:
>
> thisCache = this.privateData.cacheElement; myProp =
> thisCache.myInfoset.myInfosetMember;

### CacheElement properties

_infosetNames_ Infoset Every node data set associated with this cache is accessible through a property with the same name as the [Infoset Object](#infoset-object) name. Read only.

---

path String The path of the asset associated with this object. Read only.

### CacheElement functions

## ExtensionHandler Object

> []{#\_bookmark292 .anchor}This object defines the properties and
> methods needed to extend the Adobe Bridge node model. It does not
> implement any of the methods; you must implement them to define you
> own node type and handler. Your ExtensionHandler must implement all of
> the methods that are applicable to its node model.
>
> Register a script-defined extension handler with
> app.[[registerExtension()]{.underline}](#_bookmark47). You can access
> the global list of all registered extensions through
> app.[extensions](#_bookmark29).
>
> Your node-handling extension defines a node type. Your node types are
> identified by a Bridge URI prefix. You must associates your handler
> with at least one prefix, using
> app.[[registerPrefix()]{.underline}](#_bookmark51).
>
> When it needs to display a node of a type that is managed by this
> handler, Adobe Bridge uses the handler's makeModel() method to create
> an instance of [ExtensionModel
> Object](#extensionmodel-object), and associates it with
> the [ThumbnailObject](#thumbnail-object)
> that it creates for the node, through a [CacheElement
> Object](#cacheelement-object).
>
> Your model implementation allows you to create and update a set of
> script-defined properties in the [ThumbnailObject](#thumbnail-object)s for your nodes. The
> [ThumbnailObject](#thumbnail-object) has
> a property with the same name as the ExtensionHandler that manages it,
> which allows scripts to access the node data defined by the handler.
> Data managed by each model is kept in [InfosetObject](#infoset-object)s. Each [InfosetObject](#infoset-object) member corresponds to one
> Thumbnail property. To access a script-defined property value in a
> [ThumbnailObject](#thumbnail-object), use
> this format:

###### Code examples

> Thumbnail.handlerName.infosetName.memberName
>
> []{#\_bookmark294 .anchor}Extensions must support [[Core]{.underline}
> [infosets](#core-infosets) defined by Adobe Bridge, but
> can also add new properties. In order to define you own thumbnail
> properties for nodes of the type you define, define and register an
> [Infoset](#infoset-object) > [Object](#infoset-object) using
> app.[[registerInfoset()]{.underline}](#_bookmark49).
>
> **NOTE:** This object is designed to extend the node-handling behavior
> of Adobe Bridge itself, not the scripting functionality. The full
> range of methods are not available to scripts from the user-level
> [Thumbnail](#thumbnail-object) > [Object](#thumbnail-object).
>
> The sample code distributed with the Adobe Bridge SDK includes these
> code examples that demonstrate how to define node-handling extensions:
>
> **Node-handling extension examples in** _sdkInstall_/sdksamples/
>
> BasicExtensionHandler.jsx Shows how to create a basic node-handler,
> defining a minimal set of
>
> handler and model methods.

### ExtensionHandler object constructor

> To create a new object, use the new operator: new
> ExtensionHandler(_name_)
>
> _name_ String The name of this extension. Must be a valid JavaScript
> identifier (containing no colons or special characters, and beginning
> with a lowercase letter).

### ExtensionHandler properties

+-----------------------+--------------------+-----------------------+
| []{#\_bookmark299 | > Array of Infoset | > A collection of |
| .anchor}infosets | | > [ |
| | | [Infoset]{.underline} |
| | | > [Object](#infoset-object)s |
| | | > defining node data |
| | | > managed by this |
| | | > handler, reflected |
| | | > in handler-defined |
| | | > [T |
| | | humbnail]{.underline} |
| | | > [Object](#thumbnail-object) |
| | | > properties. |
| | | > |
| | | > Read only. Modify |
| | | > with |
| | | > app.[[regist |
| | | erInfoset()]{.underli |
| | | ne}](#_bookmark49)and |
| | | > app.[[unregi |
| | | sterInfoset()]{.under |
| | | line}](#_bookmark55). |
+=======================+====================+=======================+
| []{#\_bookmark300 | > Object | > New methods that |
| .anchor}methods | | > are defined on |
| | | > [[Thumbnail |
| | | > Object]{.underline} |
| | | ](#thumbnail-object)s |
| | | > that are managed by |
| | | > this handler. Each |
| | | > object property is |
| | | > a function |
| | | > definition; for |
| | | > example: |
| | | > |
| | | > ext.methods.fnName |
| | | > = function(arg1, |
| | | > arg2){_body_} |
| | | > |
| | | > Each method can be |
| | | > accessed at run |
| | | > time through |
| | | > |
| | | > Thumbnail.fnName(). |
+-----------------------+--------------------+-----------------------+
| name | > String | > The unique |
| | | > identifying name of |
| | | > this node-handling |
| | | > extension. Must be |
| | | > a valid JavaScript |
| | | > identifier |
| | | > (containing no |
| | | > colons or special |
| | | > characters, and |
| | | > beginning with a |
| | | > lowercase letter). |
| | | > |
| | | > Read only. |
+-----------------------+--------------------+-----------------------+
| prefixes | > Array of String | > A collection of |
| | | > lexical prefixes |
| | | > for Bridge URIs, |
| | | > which identify node |
| | | > types for which |
| | | > this handler |
| | | > supplies a model. |
| | | > |
| | | > Read only. Modify |
| | | > with |
| | | > app.[[regis |
| | | terPrefix()]{.underli |
| | | ne}](#_bookmark51)and |
| | | > app.[[unreg |
| | | isterPrefix()]{.under |
| | | line}](#_bookmark57). |
+-----------------------+--------------------+-----------------------+

### ExtensionHandler methods

> Your ExtensionHandler instance must implement all of the methods
> described here. Handler methods can be immediate or long-running:
>
> []{#\_bookmark303 .anchor}[[Immediate handler
> operations](#immediate-handler-operations) simply perform
> an operation and return when it is done. These functions must not take
> a significant amount of time; if they are slow, they will negatively
> affect Adobe Bridge browsing performance.
>
> [Long-running handler
> operations](#long-running-handler-operations) create and
> return Operator objects to perform time-intensive file-system
> operations that block the main thread. Adobe Bridge view code or your
> display code passes the object to
> app.[[enqueueOperation()]{.underline}](#_bookmark41) to initiate the
> action when appropriate.

#### Immediate handler operations

+----------------------------------+----------------------------------+
| getBridgeURIForPath() | > Convert a path string to a |
| | > canonical Bridge URI, that is, |
| _obj_.getBridgeURIForPath | > one that includes the |
| (_path_) | > node-type identifying prefix. |
| | > If the path is already in the |
| | > form of a canonical Bridge |
| | > URI, the method should simply |
| | > return it. If the path cannot |
| | > be parsed into a Bridge URI, |
| | > the method should return |
| | > undefined. |
| | |
| | Return the Bridge URI string for |
| | the path, or undefined if the |
| | path cannot be parsed. |
+==================================+==================================+
| > _path_ A string containing a | |
| > node path. | |
+----------------------------------+----------------------------------+
| []{#\_bookmark305 | > Execute an extension-defined |
| .anchor}getBridgeURIForSearch() | > search among Adobe Bridge |
| _obj_.getBridgeURIForSearch | > nodes of an extension-defined |
| (_scope, specification_) | > node type. |
| | > |
| | > The Find dialog calls this |
| | > method in response to a click |
| | > on **Find**, if the dialog has |
| | > been invoked for a node |
| | > handled by this extension, or |
| | > for a container that contains |
| | > a handled node type. |
| | > |
| | > Your method can store the |
| | > parameters such that they can |
| | > be retrieved by the |
| | > |
| | ExtensionModel.[[getSearchDetail |
| | s()]{.underline}](#_bookmark324) |
| | > method for the returned |
| | > container node, or that method |
| | > can recreate the specification |
| | > and target by some other |
| | > means. |
| | > |
| | > Return the search result, a |
| | > Bridge URI for a container |
| | > node that contains the |
| | > matching nodes. |
+----------------------------------+----------------------------------+
| > _scope_ A [[Thumbnail | |
| > Object] | |
| {.underline}](#thumbnail-object) | |
| > for the target node, which was | |
| > selected when the user invoked | |
| > the Find dialog. Your search | |
| > can be extended or limited by | |
| > the handler-defined scope | |
| > given in the search | |
| > specification. | |
| > | |
| > _specification_ The | |
| > [SearchSpecification | |
| > Object](#searchspecification-object) | |
| > that defines how to perform | |
| > the search. | |
| > | |
| > The Find dialog creates this | |
| > object from the user's | |
| > choices, which can include | |
| > choices added by your | |
| > handler's [SearchDefinition | |
| > Object](#searchdefinition-object). | |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| getSidecars() _obj_.getSidecars | > Retrieve existing sidecar |
| (_masters, possibleExtensions_, | > files for a set of nodes. A |
| _result_) | > sidecar file is a file used to |
| | > store information related to |
| | > another file, called the |
| | > master file. A sidecar has the |
| | > same base file name as its |
| | > master file, but a different |
| | > extension. It can contain |
| | > metadata (typically XMP), a |
| | > rendition of the master file |
| | > (such as a thumbnail version), |
| | > or represent some status |
| | > information of the master file |
| | > (such as whether it is in use |
| | > or locked). |
| | > |
| | > The handler should spawn a |
| | > thread to perform the |
| | > operation and return |
| | > immediately. The thread should |
| | > search for matching sidecar |
| | > files in the same container as |
| | > each master file, and set |
| | > result.masterAndSidecars to an |
| | > Array of JavaScript objects in |
| | > the format |
| | > |
| | > { master : Thumbnail, |
| | > |
| | > sidecars : Array of Thumbnail |
| | > } |
| | > |
| | > This array must correspond to |
| | > the original masters array, |
| | > setting the sidecars element |
| | > to undefined or an empty |
| | > Array, \[\], if no sidecar |
| | > files are found for a master |
| | > file. |
+==================================+==================================+
| > _masters_ Array of | |
| > [[Thumbnail]{.underline} | |
| > [Object](#thumbnail-object). | |
| > The set of nodes, children of | |
| > a single parent node handled | |
| > by this extension, for which | |
| > to find sidecar files. | |
| > | |
| > _possibleExtensions_ Array of | |
| > String. A list of file | |
| > extensions that are considered | |
| > sidecars. | |
| > | |
| > _result_ A JavaScript object | |
| > containing the result, set by | |
| > the spawned thread. | |
+----------------------------------+----------------------------------+
| []{#\_bookmark306 | > Create a model instance that |
| .anchor}makeModel() | > implements node handling. |
| | > Adobe Bridge calls this each |
| _obj_.MakeModel (_path_) | > time it needs to display a |
| | > handled node. |
| | > |
| | > Return the new |
| | > [ExtensionModel |
| | > Object](#extensionmodel-object). |
+----------------------------------+----------------------------------+
| > _path_ A string containing the | |
| > path for the node to be | |
| > displayed. | |
+----------------------------------+----------------------------------+

#### Long-running handler operations

> Implement these functions to create instances of the [Operator
> Class](#operator-class) which can perform the desired
> operation, and if needed, provide Adobe Bridge with information about
> the status and progress.
>
> Each function creates and returns a [ModalOperatorObject](#modaloperator-object) or
> [ProgressOperatorObject](#progressoperator-object) which can perform the
> operation in a separate thread, and, if needed, provide Adobe Bridge
> with information about the status of the background operation. Adobe
> Bridge calls app.[[enqueueOperation()]{.underline}](#_bookmark41) to
> initiate the action when appropriate. This in turn calls the
> [[start()]{.underline}](#_bookmark383) method defined for the returned
> Operator object.

+----------------------------------+----------------------------------+
| acquirePhysicalFiles() | > Create and return an operator |
| _obj_.acquirePhysicalFiles | > that acquires actual file data |
| (_sources_, _timeoutInMs_, | > for a set of placeholder |
| | > nodes. |
| > _showUi_, _message_, | > |
| > _recursionOption_) | > Return a [ModalOperator |
| | > Object](#modaloperator-object) |
| | > or [ProgressOperator |
| | > Object](#progressoperator-object). |
+==================================+==================================+
| > _sources_ An Array of | |
| > [[Thumbnail | |
| > Object] | |
| {.underline}](#thumbnail-object) | |
| > for the set of nodes to | |
| > operate on. | |
| > | |
| > _timeoutInMs_ Optional. A | |
| > number of microseconds after | |
| > which to abort the operation. | |
| > | |
| > Default is 0, meaning no | |
| > timeout. | |
| > | |
| > _showUi_ Optional. Whether to | |
| > show a user interface during | |
| > the operation, one of | |
| > | |
| > allowUi (the default) or | |
| > suppressUi. | |
| > | |
| > _message_ Optional. A display | |
| > string that describes this | |
| > operation. | |
| > | |
| > _recursionOption_ Optional. | |
| > Whether to perform the | |
| > operation recursively in | |
| > children of the source nodes, | |
| > one of doNotRecurse (the | |
| > default) or recurse. | |
+----------------------------------+----------------------------------+
| duplicate() _obj_.duplicate | > Create and return an operator |
| (_sources_, _timeoutInMs_, | > that duplicates a set of nodes |
| | > that are handled by this |
| > _showUi_, _message_) | > handler. |
| | > |
| | > Return a [ModalOperator |
| | > Object](#modaloperator-object) |
| | > or [ProgressOperator |
| | > Object](#progressoperator-object). |
+----------------------------------+----------------------------------+
| > _sources_ An Array of | |
| > [[Thumbnail | |
| > Object] | |
| {.underline}](#thumbnail-object) | |
| > for the set of nodes to | |
| > operate on. | |
| > | |
| > _timeoutInMs_ Optional. A | |
| > number of microseconds after | |
| > which to abort the operation. | |
| > | |
| > Default is 0, meaning no | |
| > timeout. | |
| > | |
| > _showUi_ Optional. Whether to | |
| > show a user interface during | |
| > the operation, one of | |
| > | |
| > allowUi (the default) or | |
| > suppressUi. | |
| > | |
| > _message_ Optional. A display | |
| > string that describes this | |
| > operation. | |
+----------------------------------+----------------------------------+
| moveToTrash() _obj_.moveToTrash | > Create and return an operator |
| (_sources_, _timeoutInMs_, | > that deletes a set of nodes, |
| | > marking the associated files |
| > _showUi_, _message_) | > for deletion on disc by moving |
| | > them to the system trash or |
| | > recycle bin. |
| | > |
| | > Return a [ModalOperator |
| | > Object](#modaloperator-object) |
| | > or [ProgressOperator |
| | > Object](#progressoperator-object). |
+----------------------------------+----------------------------------+
| > _sources_ An Array of | |
| > [[Thumbnail | |
| > Object] | |
| {.underline}](#thumbnail-object) | |
| > for the set of nodes to | |
| > operate on. | |
| > | |
| > _timeoutInMs_ Optional. A | |
| > number of microseconds after | |
| > which to abort the operation. | |
| > | |
| > Default is 0, meaning no | |
| > timeout. | |
| > | |
| > _showUi_ Optional. Whether to | |
| > show a user interface during | |
| > the operation, one of | |
| > | |
| > allowUi (the default) or | |
| > suppressUi. | |
| > | |
| > _message_ Optional. A display | |
| > string that describes this | |
| > operation. | |
+----------------------------------+----------------------------------+
| rotate() | > Create and return an operator |
| | > that sets the rotation setting |
| _obj_.rotate (_targets_, | > in metadata for a set of |
| _rotation_, _timeoutInMs_, | > thumbnails to the same value |
| _showUi_, _message_) | > for all. This does not rotate |
| | > the image bits. |
| | > |
| | > Return a [ModalOperator |
| | > Object](#modaloperator-object) |
| | > or [ProgressOperator |
| | > Object](#progressoperator-object). |
+----------------------------------+----------------------------------+
| > _targets_ An Array of | |
| > [Thumbnail | |
| > Object](#thumbnail-object), | |
| > the set of target thumbnails. | |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| > _rotation_ A Number, the | |
| > rotation angle in degrees. | |
| > Positive values rotate | |
| > clockwise, negative values | |
| > rotate counterclockwise. | |
| > Allowed values are -90, 0, 90, | |
| > 180, 270. | |
| > | |
| > _timeoutInMs_ Optional. A | |
| > number of microseconds after | |
| > which to abort the operation. | |
| | |
| Default is 0, meaning no | |
| timeout. | |
| | |
| > _showUi_ Optional. Whether to | |
| > show a user interface during | |
| > the operation, one of | |
| > | |
| > allowUi (the default) or | |
| > suppressUi. | |
| | |
| _message_ Optional. A display | |
| string that describes this | |
| operation. | |
+==================================+==================================+
| setLabels() _obj_.setLabels | > Create and return an operator |
| (_targets_, _labels_, | > that sets the labels for a set |
| _timeoutInMs_, _showUi_, | > of thumbnails. |
| _message_) | > |
| | > Return a [ModalOperator |
| | > Object](#modaloperator-object) |
| | > or [ProgressOperator |
| | > Object](#progressoperator-object). |
+----------------------------------+----------------------------------+
| > _targets_ An Array of | |
| > [Thumbnail | |
| > Object](#thumbnail-object), | |
| > the set of target thumbnails. | |
| > | |
| > _labels_ An Array of Strings, | |
| > the set of label values | |
| > corresponding to the target | |
| > thumbnails. See | |
| > Thumbnail.[lab | |
| el](#_bookmark258). | |
| > | |
| > _timeoutInMs_ Optional. A | |
| > number of microseconds after | |
| > which to abort the operation. | |
| > | |
| > Default is 0, meaning no | |
| > timeout. | |
| > | |
| > _showUi_ Optional. Whether to | |
| > show a user interface during | |
| > the operation, one of | |
| > | |
| > allowUi (the default) or | |
| > suppressUi. | |
| > | |
| > _message_ Optional. A display | |
| > string that describes this | |
| > operation. | |
+----------------------------------+----------------------------------+
| setRatings() _obj_.setRatings | > Create and return an operator |
| (_targets_, _ratings_, | > that sets the ratings for a |
| _timeoutInMs_, _showUi_, | > set of thumbnails. |
| _message_) | > |
| | > Return a [ModalOperator |
| | > Object](#modaloperator-object) |
| | > or [ProgressOperator |
| | > Object](#progressoperator-object). |
+----------------------------------+----------------------------------+
| > _targets_ An Array of | |
| > [Thumbnail | |
| > Object](#thumbnail-object), | |
| > the set of target thumbnails. | |
| > | |
| > _ratings_ An Array of Numbers, | |
| > the set of rating values | |
| > corresponding to the target | |
| > thumbnails. | |
| > | |
| > _timeoutInMs_ Optional. A | |
| > number of microseconds after | |
| > which to abort the operation. | |
| > | |
| > Default is 0, meaning no | |
| > timeout. | |
| > | |
| > _showUi_ Optional. Whether to | |
| > show a user interface during | |
| > the operation, one of | |
| > | |
| > allowUi (the default) or | |
| > suppressUi. | |
| > | |
| > _message_ Optional. A display | |
| > string that describes this | |
| > operation. | |
+----------------------------------+----------------------------------+
| setXmp() | > Create and return an operator |
| | > that embeds XMP file metadata |
| _obj_.setXmp (_targets_, | > packets in a set of files. |
| _xmpPackets_, _timeoutInMs_, | > |
| _showUi_, _message_) | > Return a [ModalOperator |
| | > Object](#modaloperator-object) |
| | > or [ProgressOperator |
| | > Object](#progressoperator-object). |
+----------------------------------+----------------------------------+
| > _targets_ An Array of Strings, | |
| > the set of file paths. | |
| > | |
| > _xmpPackets_ An Array of | |
| > Strings, the set of XMP | |
| > packets corresponding to the | |
| > target files. | |
| > | |
| > _timeoutInMs_ Optional. A | |
| > number of microseconds after | |
| > which to abort the operation. | |
| > | |
| > Default is 0, meaning no | |
| > timeout. | |
+----------------------------------+----------------------------------+

## ExtensionModel Object

> []{#\_bookmark312 .anchor}Supports the basic framework for Adobe Bridge
> node-handling extensions by tracking the connection between your
> display model and the file or page sources. To implement an extension,
> you must define the methods that handle nodes, as described here.
>
> []{#\_bookmark313 .anchor}When Adobe Bridge needs to display a handled
> node, it uses the [[makeModel()]{.underline}](#_bookmark306) method
> defined in the [ExtensionHandlerObject](#extensionhandler-object) to instantiate this
> object. It then creates a [CacheElement
> Object](#cacheelement-object) to contain the model object
> and associate it with the new [Thumbnail
> Object](#thumbnail-object) that it creates for the node.
>
> []{#\_bookmark314 .anchor}The ExtensionModel that your handler creates
> implements the actual node-handling methods that perform operations on
> a selected thumbnail for your node types. For details of how to
> implement a node-handling model, see the _Adobe Bridge JavaScript
> Guide_ and the code example in the SDK,
> _sdkInstall_/sdksamples/BasicExtensionHandler.jsx.
>
> The model can define private data needed for node handling, accessible
> through additional properties for the [[Thumbnail]{.underline}
> [Object](#thumbnail-object). Data managed by a model is
> kept in [Infoset Object](#infoset-object)s. Each data
> member corresponds to one script-defined Thumbnail property. To access
> a script-defined property value in a [ThumbnailObject](#thumbnail-object), use this format:
>
> Thumbnail.handlerName.infosetName.memberName

### ExtensionModel constructor

> Your [[makeModel()]{.underline}](#_bookmark306) method uses the new
> operator to create an object: new ExtensionModel(_path_)
>
> _path_ String The absolute path or fully-qualified URL for the source
> file or page to be displayed. Adobe Bridge passes the path to
> [[makeModel()]{.underline}](#_bookmark306) when it is creating a new
> [Thumbnail](#thumbnail-object) > [Object](#thumbnail-object) for a handled node.

### ExtensionModel properties

+----------------------------+----------+----------------------------+
| []{#\_bookmark317 | > String | > Stores private data |
| .anchor}privateData | | > associated with your |
| | | > node-handling model. |
| | | > Typically, you use it to |
| | | > store the parent |
| | | > [[CacheElement |
| | | > Object](#cacheelement-object), |
| | | > which is passed to your |
| | | > model's |
| | | > [[registerInterest()]{. |
| | | underline}](#_bookmark328) |
| | | > method. This in turn |
| | | > provides access to each |
| | | > [Infoset]{.underline} |
| | | > [Object](#infoset-object) |
| | | > that contains data |
| | | > managed by this model. |
| | | > |
| | | > This is the only way to |
| | | > store private data in |
| | | > this object. If you |
| | | > assign a value such as |
| | | > model.myProp=7, it will |
| | | > _not_ be available in |
| | | > the context of model |
| | | > functions. Within a |
| | | > model function, |
| | | > this.myProp will be |
| | | > undefined. You can, |
| | | > however, assign a value |
| | | > to |
| | | > model.privateData.myProp |
| | | > and access it through |
| | | > the this object. |
+----------------------------+----------+----------------------------+

### ExtensionModel methods

> []{#\_bookmark319 .anchor}Your ExtensionModel instance must implement
> the methods marked as required. Model methods can be immediate or
> long-running:
>
> [[Immediate]{.underline} [model]{.underline}
> [operations](#immediate-model-operations) simply perform
> an operation and return when it is done. These functions must not take
> a significant amount of time; if they are slow, they will negatively
> affect Adobe Bridge browsing performance.
>
> [Long-running modeloperations](#long-running-model-operations) create and
> return Operator objects to perform time-intensive file-system
> operations that block the main thread. Adobe Bridge view code or your
> display code passes the object to
> app.[[enqueueOperation()]{.underline}](#_bookmark41) to initiate the
> action when appropriate.

#### Immediate model operations

+----------------------------------+----------------------------------+
| addToDrag() | > Add this model object to the |
| | > platform-specific drag object. |
| _obj_. addToDrag | > |
| | > Return true on success. |
| (_pointerToOsDragObject_) | |
+==================================+==================================+
| > _pointerToOsDragObject_ | > A pointer to the |
| | > platform-specific drag object. |
+----------------------------------+----------------------------------+
| authenticate() | > Required. Handle any required |
| | > authentication for this node. |
| _obj_.authenticate () | > |
| | > Return undefined. |
+----------------------------------+----------------------------------+
| cancelRefresh() | > Cancel a background refresh |
| | > task started by a call to |
| _obj_. cancelRefresh | > [[refreshInfoset |
| (_infosetName_) | ()]{.underline}](#_bookmark327). |
| | > |
| | > Return undefined. |
+----------------------------------+----------------------------------+
| > _infosetName_ | > The name of the [Infoset |
| | > Object |
| | ](#infoset-object). |
+----------------------------------+----------------------------------+
| createNewContainer() | > Create a new container node in |
| | > this container node. If this |
| _obj_.createNewContainer | > node is not a container, do |
| (_name_) | > nothing. |
| | > |
| | > Return the URI string for the |
| | > new folder, or the [[Thumbnail |
| | > Object] |
| | {.underline}](#thumbnail-object) |
| | > for the new container node. |
+----------------------------------+----------------------------------+
| > _name_ | > Optional. The name string of |
| | > the new container node. |
| | > Default is \"New Folder\" in |
| | > Windows, \"untitled folder\" |
| | > in Mac OS. |
+----------------------------------+----------------------------------+
| []{#\_bookmark321 | > Rotate this node without |
| .anchor}doLosslessRotate() | > changing image data. |
| | > |
| _obj_.doLosslessRotate | > Return true if the operation |
| (_oriantation_) | > can be performed on this node, |
| | > false if it cannot. |
+----------------------------------+----------------------------------+
| > _orientation_ | > The rotation angle in degrees. |
| | > Positive values rotate |
| | > clockwise, negative values |
| | > rotate counterclockwise. |
| | > Allowed values are -90, 0, 90, |
| | > 180, 270. |
+----------------------------------+----------------------------------+
| exists() | > Required. Report whether this |
| | > node is valid according to |
| _obj_.exists () | > this model. |
| | > |
| | > Return true if this node is |
| | > valid, false otherwise. |
+----------------------------------+----------------------------------+
| getCacheStatus() | > Required. Report the cache |
| | > status of a node-data set for |
| _obj_. getCacheStatus (_infoset, | > this node. See [[CacheElement |
| cookie_) | > Object]{.u |
| | nderline}](#cacheelement-object) |
| | > and [CacheData |
| | > Object](#cachedata-object). |
| | > |
| | > Return the cache status |
| | > string. |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| > _infosetName_ The name of the | |
| > [Infoset | |
| > Object | |
| ](#infoset-object). | |
| > | |
| > _cookie_ A string buffer in | |
| > which to return the cache | |
| > status, one of: | |
| > | |
| > bad inProgress good unknown | |
+==================================+==================================+
| getDisplayName() | > Retrieve a localized display |
| | > name for this node. |
| _obj_.getDisplayName () | > |
| | > Return the display string. |
+----------------------------------+----------------------------------+
| []{#\_bookmark322 | > Create the full set of filter |
| .anchor}getFilterCriteria() | > criteria that can be applied |
| | > to this container node. These |
| _obj_. getFilterCriteria () | > filters appear in the Filter |
| | > palette when Adobe Bridge |
| | > displays the contents of this |
| | > container. |
| | > |
| | > Return an array of |
| | > [FilterDescription |
| | > Object](#filterdescription-object)s |
| | > for the complete set of |
| | > filters with which to populate |
| | > the Filter palette. |
+----------------------------------+----------------------------------+
| getParent() | > Retrieve the parent node of |
| | > this node. |
| _obj_.getParent () | > |
| | > Return the Bridge URI string |
| | > for the parent node. |
+----------------------------------+----------------------------------+
| getPhysicalFileName() | > Retrieve the full file name |
| | > for this node, including |
| _obj_.getPhysicalFileName () | > extensions. |
| | > |
| | > Return the file name string. |
+----------------------------------+----------------------------------+
| []{#\_bookmark323 | > Create a search definition |
| .anchor}getSearchDefinition() | > with which to populate the |
| | > Find dialog when it is invoked |
| _obj_.getSearchDefinition () | > for this container node. |
| | > |
| | > Return the |
| | > |
| | [SearchDefinition]{.underline} |
| | > [Object](#searchdefinition-object). |
+----------------------------------+----------------------------------+
| []{#\_bookmark324 | > Retrieve or recreate the |
| .anchor}getSearchDetails() | > search specification and |
| | > target node that were used to |
| _obj_.getSearchDetails () | > create this search-result |
| | > container node, when it was |
| | > created by the |
| | > Extensi |
| | onHandler.[[getBridgeURIForSearc |
| | h()]{.underline}](#_bookmark305) |
| | > method. |
| | > |
| | > Return a [SearchDetails |
| | > Object](#searchdetails-object). |
+----------------------------------+----------------------------------+
| []{#\_bookmark325 | > Create the full set of sorting |
| .anchor}getSortCriteria() | > criteria for member nodes of |
| | > this container node. Can |
| _obj_.getSortCriteria () | > construct an entirely new list |
| | > of criteria, or retrieve the |
| | > default set from |
| | > app.[defaultSortCrit |
| | eria](#_bookmark26) |
| | > and modify or append criteria, |
| | > or return the set unchanged. |
| | > |
| | > Return an array of |
| | > [SortCriterion]{.underline} |
| | > [Object](#sortcriterion-object)s. |
+----------------------------------+----------------------------------+
| []{#\_bookmark326 | > Retrieve the opaque XML code |
| .anchor}getUserSortOrder() | > representing a user-defined |
| | > sorting order for container |
| _obj_.getSortCriteria () | > nodes managed by this model, |
| | > as previously saved by the |
| | > [[setUserSortOrde |
| | r()]{.underline}](#_bookmark329) |
| | > method. |
| | > |
| | > The browser uses the returned |
| | > value to sort the displayed |
| | > nodes of this container node |
| | > (if it returns true for |
| | > [[supportsUserSortOrder( |
| | )]{.underline}](#_bookmark331)). |
| | > |
| | > Return a string containing the |
| | > XML code. |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| initialize() | > Required, a constructor for |
| | > this model instance. |
| _obj_.initialize () | > Initialize the model for this |
| | > node. Create any necessary |
| | > support data structures and |
| | > store them in this object. |
| | > |
| | > Adobe Bridge calls this after |
| | > creating the object with the |
| | > handler's |
| | > [[makeMode |
| | l()]{.underline}](#_bookmark306) |
| | > method, whenever it needs to |
| | > display a handled node. |
| | > |
| | > Return undefined. |
+==================================+==================================+
| lock() | > Make the file associated with |
| | > this node read-only. |
| _obj_.lock () | |
| | - In Windows, modify the |
| | > read-only file attribute. |
| | |
| | - In Mac OS, modify the Finder |
| | > "lock" attribute. Return |
| | > false. |
+----------------------------------+----------------------------------+
| needAuthentication() | > Report whether this node |
| | > requires authentication. |
| _obj_.needAuthentication () | > |
| | > Return true if the node |
| | > requires authentication, false |
| | > otherwise. |
+----------------------------------+----------------------------------+
| []{#\_bookmark327 | > Required. Start a background |
| .anchor}refreshInfoset() | > task with the specified |
| | > priority and processing cost, |
| _obj_. refreshInfoset (_infoset, | > to update the data in a |
| priority, cost, pageNumber_) | > node-data set for this node. |
| | > Adobe Bridge calls a model's |
| | > refresh method when it needs |
| | > data from a particular Infoset |
| | > for a particular view or |
| | > operation. |
| | > |
| | > Within this method, access |
| | > each data element in the |
| | > stored data cache, using this |
| | > format (assuming you have |
| | > stored the cache reference in |
| | > the privateData property): |
| | > |
| | > this.privateData.cac |
| | heElement._setName_._memberName_ |
| | |
| | - The operation should set |
| | > appropriate core data set |
| | > values, such as item and |
| | > itemContent capabilities, |
| | > to reflect which optional |
| | > model methods are |
| | > supported by this handler. |
| | > See [Core |
| | > infoset |
| | s](#core-infosets). |
| | |
| | - If the node is a container, |
| | > the operation must add its |
| | > child nodes to the core |
| | > children data set, using |
| | > Infoset.[[addChild |
| | ()]{.underline}](#_bookmark349). |
| | |
| | - The operation must set the |
| | > cache status of the |
| | > updated node-data set. See |
| | > [CacheData |
| | > Object](#cachedata-object). |
| | |
| | > Return undefined. |
+----------------------------------+----------------------------------+
| > _infosetName_ The name of the | |
| > [Infoset | |
| > Object | |
| ](#infoset-object). | |
| > | |
| > _priority_ Optional. The | |
| > priority to assign this | |
| > background task, one of low | |
| > (first-in, first-out queue), | |
| > normal (last-in, first-out | |
| > stack), or high (first-in, | |
| > first-out). High priority is | |
| > used for currently selected | |
| > nodes. | |
| > | |
| > _cost_ Optional. The desired | |
| > processing cost for this | |
| > background task, one of: | |
| > | |
| > lowCostEvenIfFail | |
| > guaranteedLow | |
| > lowCostEvenIfLowQuality | |
| > unlimited | |
| > | |
| > _pageNumber_ Optional. The | |
| > current page number for nodes | |
| > that represent multi-page | |
| > documents; for other node | |
| > types, it is ignored. Default | |
| > is 0. | |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| []{#\_bookmark328 | > Required. Notify this model |
| .anchor}registerInterest() | > object of the cache that |
| | > contains the model itself and |
| _obj_. registerInterest | > all its associated data. Your |
| (_cacheElement_) | > implementation must store the |
| | > cache object, and use it to |
| | > access the node data. |
| | > Typically, you store it in |
| | > this model's |
| | > [privateD |
| | ata](#_bookmark317) |
| | > property. |
| | > |
| | > Adobe Bridge instantiates the |
| | > [CacheElement]{.underline} |
| | > [Object](#cacheelement-object) |
| | > and passes it to this method |
| | > whenever it displays a handled |
| | > node. |
| | > |
| | > Return undefined. |
+==================================+==================================+
| > _cacheElement_ The name of the | |
| > [CacheElement | |
| > Object](#cacheelement-object). | |
+----------------------------------+----------------------------------+
| registerStructuralInterest() | > Notifies Adobe Bridge that the |
| _obj_. | > cache should be updated when |
| registerStructuralInterest | > changes occur in children of |
| (_cacheElement_) | > the displayed node. |
| | > |
| | > Return undefined. |
+----------------------------------+----------------------------------+
| > _cacheElement_ The name of the | |
| > [CacheElement | |
| > Object](#cacheelement-object). | |
+----------------------------------+----------------------------------+
| setName() | > Set the file name of this |
| | > node. Change the base name and |
| _obj_. setName (_newName_) | > extension, but not the path |
| | > name. |
| | > |
| | > Return the new URI string for |
| | > the node. |
+----------------------------------+----------------------------------+
| > _newName_ The new name string. | |
+----------------------------------+----------------------------------+
| []{#\_bookmark329 | > When the user sorts the |
| .anchor}setUserSortOrder() | > children of this container |
| | > node, the browser passes an |
| _obj_. setName (_inXML_) | > opaque string of XML code to |
| | > this function that represents |
| | > the user sort order (if this |
| | > container returns true for |
| | > [[supportsLosslessRotate( |
| | )]{.underline}](#_bookmark330)). |
| | > |
| | > The model is responsible for |
| | > saving it such that it can be |
| | > retrieved by |
| | > [[getUserSortOrder |
| | ()]{.underline}](#_bookmark326). |
| | > |
| | > Return true on success. |
+----------------------------------+----------------------------------+
| > _inXML_ A string containing | |
| > the XML code. | |
+----------------------------------+----------------------------------+
| []{#\_bookmark330 | > Report whether this model |
| .anchor}supportsLosslessRotate() | > supports rotation of an image |
| | > node without changing pixel |
| _obj_.supportsLosslessRotate () | > data. |
| | > |
| | > Return true if the model |
| | > supplies the |
| | > [[doLosslessRotat |
| | e()]{.underline}](#_bookmark321) |
| | > method. |
+----------------------------------+----------------------------------+
| []{#\_bookmark331 | > Report whether this model |
| .anchor}supportsUserSortOrder() | > supports user sorting of |
| | > displayed child nodes. |
| _obj_.supportsUserSortOrder () | > |
| | > Return true if this is a |
| | > container node, and the model |
| | > supplies |
| | > [[getUserSortOrde |
| | r()]{.underline}](#_bookmark326) |
| | > and |
| | > [[setUserSortOrde |
| | r()]{.underline}](#_bookmark329) |
| | > methods. |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| terminate() | > Required, a destructor for the |
| | > model instance. |
| _obj_.terminate () | |
| | - A complex node-handling |
| | > extension can use this to |
| | > clean up private data |
| | > created by the |
| | > initialization and |
| | > entirely managed by the |
| | > extension. |
| | |
| | - A purely script-based |
| | > node-handling extension |
| | > should simply return |
| | > without attempting to |
| | > clean up JavaScript data, |
| | > which is normally handled |
| | > by the JavaScript garbage |
| | > collector. |
| | |
| | > Return undefined. |
+==================================+==================================+
| unlock() | > Make the file associated with |
| | > this node read-write. |
| _obj_.unlock () | |
| | - In Windows, modify the |
| | > read-only file attribute. |
| | |
| | - In Mac OS, modify the Finder |
| | > "lock" attribute. Return |
| | > false. |
+----------------------------------+----------------------------------+
| unregisterInterest() _obj_. | > Required. Remove the |
| unregisterInterest | > association between this model |
| (_cacheElement_) | > and the cache element that |
| | > contains it. Your |
| | > implementation must remove the |
| | > stored reference to the cache |
| | > object, typically in the |
| | > model's privateData property. |
| | > |
| | > Return undefined. |
+----------------------------------+----------------------------------+
| > _cacheElement_ The name of the | |
| > [CacheElement | |
| > Object](#cacheelement-object). | |
+----------------------------------+----------------------------------+
| unregisterStructuralInterest() | > Removes the instruction to |
| | > update the associated cache |
| _obj_. | > when changes occur in children |
| unregisterStructuralInterest() | > of a displayed node. |
| | > |
| | > Return undefined. |
+----------------------------------+----------------------------------+
| verifyExternalChanges() | > Called when the user attempts |
| | > to view data in this model's |
| _obj_.verifyExternalChanges () | > children core Infoset, and its |
| | > cache status is good. |
| | > Typically occurs when an Adobe |
| | > Bridge view regains focus |
| | > after a period of inactivity. |
| | > The model can decide whether |
| | > to force a refresh or not. |
| | > |
| | > Return undefined. |
+----------------------------------+----------------------------------+
| wouldAcceptDrop() | > Report whether this node can |
| | > accept a drop of a specific |
| _obj_. wouldAcceptDrop | > set of nodes in a |
| | > drag-and-drop operation of a |
| (_type, sources, osDragRef_) | > particular type. |
| | > |
| | > Return false if the drop would |
| | > not be accepted by this node, |
| | > or one of the action type |
| | > strings (\"copy\" or \"move\") |
| | > if the drop of all of the |
| | > sources would be accepted. |
+----------------------------------+----------------------------------+
| > _type_ A string specifying the | |
| > type of drop requested, one | |
| > of: | |
| > | |
| > copy move | |
| > | |
| > _sources_ An array of path | |
| > strings for the nodes being | |
| > dragged. | |
| > | |
| > _osDragRef_ A pointer to a | |
| > platform-specific drag | |
| > structure containing the | |
| > source nodes. | |
+----------------------------------+----------------------------------+

#### Long-running model operations

> Implement these functions to create instances of the [Operator
> Class](#operator-class) which can perform the desired
> operation, and if needed, provide Adobe Bridge with information about
> the status and progress.
>
> Each function creates and returns a [ModalOperatorObject](#modaloperator-object) or
> [ProgressOperatorObject](#progressoperator-object) which can perform the
> operation in a separate thread, and, if needed, provide Adobe Bridge
> with information about the status of the background operation. Adobe
> Bridge calls app.[[enqueueOperation()]{.underline}](#_bookmark41) to
> initiate the action when appropriate. This in turn calls the
> [[start()]{.underline}](#_bookmark383) method defined for the returned
> Operator object.

+----------------------------------+----------------------------------+
| copyFrom() | > Create and return an operator |
| | > that copies a set of nodes |
| _obj_.copyFrom | > into this container, allowing |
| | > rename. |
| (_sources_, _timeoutInMs_, | |
+==================================+==================================+
| _showUi_, _message_, | > If this node is not a |
| | > container, the operator should |
| | > do nothing. |
+----------------------------------+----------------------------------+
| > _newNames_) | > Return a [ModalOperator |
| | > Object](#modaloperator-object) |
| | > or [ProgressOperator |
| | > Object](#progressoperator-object). |
+----------------------------------+----------------------------------+
| > _sources_ An Array of | |
| > [[Thumbnail | |
| > Object] | |
| {.underline}](#thumbnail-object) | |
| > for the set of nodes to | |
| > operate on. | |
| > | |
| > _timeoutInMs_ Optional. A | |
| > number of microseconds after | |
| > which to abort the operation. | |
| > Default is 0, meaning no | |
| > timeout. | |
| > | |
| > _showUi_ Optional. Whether to | |
| > show a user interface during | |
| > the operation, one of showUi | |
| > | |
| > (the default) or suppressUi. | |
| > | |
| > _message_ Optional. A display | |
| > string that describes this | |
| > operation. | |
| > | |
| > _newNames_ Optional. An array | |
| > of strings the same size as | |
| > the sources array with new | |
| > names to assign to the copies. | |
+----------------------------------+----------------------------------+
| eject() | > Create and return an operator |
| | > that unmounts a path. |
+----------------------------------+----------------------------------+
| _obj_.eject | > Return a [ModalOperator |
| | > Object](#modaloperator-object) |
| | > or [ProgressOperator |
| | > Object](#progressoperator-object). |
+----------------------------------+----------------------------------+
| _showUi_, _message_) | |
+----------------------------------+----------------------------------+
| > _path_ The path string. | |
| > | |
| > _timeoutInMs_ Optional. A | |
| > number of microseconds after | |
| > which to abort the operation. | |
| > Default is 0, meaning no | |
| > timeout. | |
| > | |
| > _showUi_ Optional. Whether to | |
| > show a user interface during | |
| > the operation, one of showUi | |
| > | |
| > (the default) or suppressUi. | |
| > | |
| > _message_ Optional. A display | |
| > string that describes this | |
| > operation. | |
+----------------------------------+----------------------------------+
| moveFrom() | > Create and return an operator |
| | > that moves a set of nodes into |
| _obj_.moveFrom | > this container, allowing |
| | > rename. |
| (_sources_, _timeoutInMs_, | |
+----------------------------------+----------------------------------+
| _showUi_, _message,_ | > If this node is not a |
| | > container, the operator should |
| | > do nothing. |
+----------------------------------+----------------------------------+
| > _newNames_) | > Return a [ModalOperator |
| | > Object](#modaloperator-object) |
| | > or [ProgressOperator |
| | > Object](#progressoperator-object). |
+----------------------------------+----------------------------------+
| > _sources_ An Array of | |
| > [[Thumbnail | |
| > Object] | |
| {.underline}](#thumbnail-object) | |
| > for the set of nodes to | |
| > operate on. | |
| > | |
| > _timeoutInMs_ Optional. A | |
| > number of microseconds after | |
| > which to abort the operation. | |
| > Default is 0, meaning no | |
| > timeout. | |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| > _showUi_ | > Optional. Whether to show a |
| > | > user interface during the |
| > _message newNames_ | > operation, one of showUi |
| | > |
| | > (the default) or suppressUi. |
| | > |
| | > Optional. A display string |
| | > that describes this operation. |
| | > |
| | > Optional. An array of strings |
| | > the same size as the sources |
| | > array with new names to assign |
| | > to the moved nodes. |
+==================================+==================================+
| resolveLink() | > Create and return an operator |
| | > that resolves the link path |
| _obj_.resolveLink (_sources_, | > for a set of nodes, |
| | > associating each node directly |
| > _timeoutInMs_, _showUi_, | > with its link target. |
+----------------------------------+----------------------------------+
| > _message_) | > **NOTE:** Adobe Bridge CS5 |
| | > does not support symbolic |
| | > links (symlinks) in Mac OS. |
+----------------------------------+----------------------------------+
| | > Return a [ModalOperator |
| | > Object](#modaloperator-object) |
| | > or [ProgressOperator |
| | > Object](#progressoperator-object). |
+----------------------------------+----------------------------------+
| > _sources_ An Array of | |
| > [[Thumbnail | |
| > Object] | |
| {.underline}](#thumbnail-object) | |
| > for the set of nodes to | |
| > operate on. | |
| > | |
| > _timeoutInMs_ Optional. A | |
| > number of microseconds after | |
| > which to abort the operation. | |
| > Default is 0, meaning no | |
| > timeout. | |
| > | |
| > _showUi_ Optional. Whether to | |
| > show a user interface during | |
| > the operation, one of showUi | |
| > | |
| > (the default) or suppressUi. | |
| > | |
| > _message_ Optional. A display | |
| > string that describes this | |
| > operation. | |
+----------------------------------+----------------------------------+

## FilterDescription Object

> []{#\_bookmark337 .anchor}This object provides programmatic control and
> customization of the Filter palette, which allows the user to organize
> and filter the display of thumbnails in the Content pane.
>
> Filters are applied to children of a container node when Adobe Bridge
> needs to display that container's contents in the Content pane, or
> display a list of children in a menu. A filter description identifies
> a metadata property (from embedded XMP metadata) or a node property
> (from a node-handler-defined [InfosetObject](#infoset-object)) to display in the Filter
> palette.
>
> The Filter palette displays each filter property, with a line under
> each property for each value it finds for that property in any child
> node. The filter description can provide a narrower list of allowed
> values to display for an XMP property, if the property has a closed
> value list.
>
> When the user selects a filter, a child node is displayed only if it
> contains the selected filter property and value.
>
> The list of filter objects that Adobe Bridge uses by default to
> populate the Filter palette is kept in
> app.[defaultFilterCriteria](#_bookmark25). When
> displaying a handled container node, Adobe Bridge builds the list of
> filters by calling the developer-defined
> [[getFilterCriteria()]{.underline}](#_bookmark322) method of the
> node's [ExtensionModel Object](#extensionmodel-object).
> Your implementation of this method can create these filter objects,
> and use them to replace, modify, or add to the default list.

### FilterDescription constructor

> To create a new object, use the new operator:
>
> new FilterDescription (_name_, _displayName_, _filterType_,
> _xmpNamespace_, _xmpProperty_, _closedValueList_\*);
>
> new FilterDescription (_name_, _displayName_, _filterType_,
> _infosetMember_, _closedValueList_\*);
>
> Parameters set the corresponding properties.

### FilterDescription properties

+-----------------+-----------------+--------------------------------+
| closedValueList | Array of String | > The set of allowed values |
| | | > for the XMP property, if it |
| | | > has a closed value list. In |
| | | > this case, the Filter |
| | | > palette does not count nodes |
| | | > that have no value for the |
| | | > property. You can cause it |
| | | > to do so by adding the empty |
| | | > string to this list. |
| | | > |
| | | > Empty for properties with |
| | | > open value types. In this |
| | | > case, the Filter palette |
| | | > displays all values found in |
| | | > nodes in the current scope. |
+=================+=================+================================+
| displayName | String | > Optional. A localized name |
| | | > for this filter, shown in |
| | | > the heading line for this |
| | | > filter in the Filter |
| | | > palette. If not supplied, |
| | | > the name value is used. |
+-----------------+-----------------+--------------------------------+

+---------------+---------+------------------------------------------+
| filterType | String | > The data type of filter-property |
| | | > value, used in sorting the list of |
| | | > values. String comparisons are |
| | | > case-insensitive. One of: |
| | | > |
| | | > date dimensions label number |
| | | > orientation rating string stringList |
+===============+=========+==========================================+
| infosetMember | String | > The name of the node property to use |
| | | > as a filter, as defined in the |
| | | > [InfosetMemberDescription |
| | | > Object](#infosetmemberdescription-object). |
| | | > |
| | | > **NOTE:** The filter property must be |
| | | > _either_ an XMP metadata property or |
| | | > an [Infoset |
| | | > Object](#infoset-object) |
| | | > node-data property; if both are |
| | | > defined, the XMP property takes |
| | | > precedence and the node-data property |
| | | > is ignored. |
+---------------+---------+------------------------------------------+
| isExclusive | Boolean | > When true, only one of the filter |
| | | > values can be set at a time. Selecting |
| | | > one value in the Filter palette |
| | | > automatically deselects other values. |
+---------------+---------+------------------------------------------+
| name | String | > The unique identifying name of the |
| | | > filter. If there is no displayName, |
| | | > this is shown in the heading line for |
| | | > this filter in the Filter palette. |
+---------------+---------+------------------------------------------+
| xmpNamespace | String | > The namespace of the XMP property used |
| | | > as a filter. |
+---------------+---------+------------------------------------------+
| xmpProperty | String | > The key name of the XMP property used |
| | | > as a filter. |
+---------------+---------+------------------------------------------+

## Infoset Object

> This object represents application-defined or script-defined data for
> Adobe Bridge nodes.

- For a script-defined node-handling extension, you can register an

  > Infoset object that defines a related set of script-defined
  > [ThumbnailObject](#thumbnail-object)
  > properties for handled nodes.

- Adobe Bridge-defined Infoset objects and their members are listed in
  > ['Core infosets' onpage
  > 132](#core-infosets).

> To declare the properties, create the Infoset object and associate it
> with your [ExtensionHandler
> Object](#extensionhandler-object) using
> app.[[registerInfoset()]{.underline}](#_bookmark49). The Infoset
> object is added to the list in the ExtensionHandler
> [infosets](#_bookmark299) property.
>
> An Infoset is a named set of data elements. Each member element has a
> name and type, defined by a [InfosetMemberDescriptionObject](#infosetmemberdescription-object). Each member
> name becomes a property of the containing Infoset, and you can access
> the data value, of the corresponding type, through that property.
>
> To access a script-defined property value in a
> [ThumbnailObject](#thumbnail-object), use
> this format:
>
> _ThumbnailObject.handlerName.infosetName.memberName_
>
> For example, to access a color value in myInfo in thumbnail t1, where
> the myInfo set is managed by myExtension, use:
>
> t1.myExtension.myInfo.color.

### Infoset object constructor

> Create the object with the new operator: new Infoset (_name_,
> _description_)
>
> Parameters set the corresponding properties (_name_ sets infosetName).

### Infoset properties

+-------------+--------------------------+--------------------------+
| cacheData | > CacheData | > The [CacheData |
| | | > Object](#cachedata-object) |
| | | > containing cache |
| | | > status for this set in |
| | | > the [CacheElement |
| | | > Object](#cacheelement-object) |
| | | > that collects all node |
| | | > data for this node. |
| | | > |
| | | > The status reflects |
| | | > whether any associated |
| | | > values have changed |
| | | > such that the set |
| | | > needs to be refreshed. |
| | | > Read/write. |
+=============+==========================+==========================+
| description | > Array of | > The |
| | > | > [[ |
| | InfosetMemberDescription | InfosetMemberDescription |
| | | > Object] |
| | | {.underline}](#infosetme |
| | | mberdescription-object)s |
| | | > containing the member |
| | | > names and data types |
| | | > of data values |
| | | > contained in this set. |
| | | > Read/write. |
+-------------+--------------------------+--------------------------+
| extension | > String | > The name of the |
| | | > [ExtensionHandler |
| | | > Object](# |
| | | extensionhandler-object) |
| | | > that manages this |
| | | > data. Available after |
| | | > this set has been |
| | | > registered with |
| | | > app. |
| | | [[registerInfoset()]{.un |
| | | derline}](#_bookmark49). |
| | | > Read only. |
+-------------+--------------------------+--------------------------+

+-------------------+---------------------+--------------------------+
| _memberValueName_ | > _memberValueType_ | > The |
| | | > Infos |
| | | etMemberDescription.name |
| | | > of each member is a |
| | | > property of the set. |
| | | > The property provides |
| | | > access to the data |
| | | > value, of the type |
| | | > specified by the |
| | | > corresponding |
| | | > [[ |
| | | InfosetMemberDescription |
| | | > Object] |
| | | {.underline}](#infosetme |
| | | mberdescription-object). |
| | | > |
| | | > Read only. |
+===================+=====================+==========================+
| infosetName | > String | > The name of this set. |
| | | > Must be a valid |
| | | > JavaScript identifier. |
| | | > This becomes a |
| | | > property of the |
| | | > [[ExtensionModel |
| | | > Object]{.underline}] |
| | | (#extensionmodel-object) |
| | | > for the managing |
| | | > extension. Read/write. |
+-------------------+---------------------+--------------------------+

### Infoset functions

+----------------------------------+----------------------------------+
| []{#\_bookmark349 | > Adds a child node to the core |
| .anchor}addChild() | > data set children. (See |
| | > [Co |
| _obj_.addChild | re](#core-infosets) |
| | > [[infosets |
| (_path, model, containerHint_) | ]{.underline}](#core-infosets).) |
| | > Use this in the model's |
| | > [[refreshInfose |
| | t()]{.underline}](#_bookmark327) |
| | > method to add any children of |
| | > a handled container node. For |
| | > example: |
| | > |
| | > myModel.refreshInfoset = |
| | > function( infosetName ) { if( |
| | > infosetName == "children" ) { |
| | > this.privateDat |
| | a.cacheElement.children.addChild |
| | > ( |
| | > |
| | > "brid |
| | ge:myNode:myChildNodeSource.ext" |
| | > ); |
| | > |
| | > } |
| | > |
| | > } |
+==================================+==================================+
| > _path model_ | > The Bridge URI (path and file |
| > | > name) of the child node. |
| > _containerHint_ | > |
| | > Optional. An |
| | > [ExtensionModel]{.underline} |
| | > [Object](#extensionmodel-object) |
| | > that manages the new child. |
| | > Can be undefined (the |
| | > default). |
| | > |
| | > Optional. Whether the new |
| | > child is a container, one of |
| | > \"container\" or |
| | > \"notContainer\" (the |
| | > default). Ignored if _model_ |
| | > is provided; otherwise, |
| | > controls which icon is used |
| | > for the child. |
+----------------------------------+----------------------------------+
| in | > Sets all members of this set |
| itializeMembersToDefaultValues() | > to the default value for the |
| | > data type: |
+----------------------------------+----------------------------------+
| _obj_. | > String: \"\" (empty string) |
| initializeMembersToDefaultValues | |
| () | |
+----------------------------------+----------------------------------+
| | > Boolean: false |
+----------------------------------+----------------------------------+
| | > Number: 0 |
+----------------------------------+----------------------------------+
| | > SizeInBytes: 0 |
+----------------------------------+----------------------------------+

### Core infosets

> Adobe Bridge defines a set of core node-data sets, represented by
> Infoset objects. The core node data must be updated as appropriate by
> all script-defined node-handling extensions, in order to support the
> default node-handling behavior of Adobe Bridge. The following table
> shows the names of the core data sets and their members.

+------------------+------------------------+------------------------+
| **Infoset name** | > **Member names** | |
+==================+========================+========================+
| immediate | > Contains mandatory | |
| | > node information, | |
| | > supplied at node | |
| | > creation. | |
+------------------+------------------------+------------------------+
| | > creationDate | > The creation date of |
| | | > the file or folder |
| | | > node as determined |
| | | > by the operating |
| | | > system. |
+------------------+------------------------+------------------------+
| | > displayPath | > The user-readable |
| | | > platform specific |
| | | > display path of the |
| | | > file or folder node. |
+------------------+------------------------+------------------------+
| | > fileUrl | > The URL for the file |
| | | > or folder node. |
+------------------+------------------------+------------------------+
| | > isApplication | > True if the node is |
| | | > an executable file. |
+------------------+------------------------+------------------------+
| | > isContainer | > True if the node is |
| | | > a container. |
+------------------+------------------------+------------------------+
| | > isDeleted | > True if the node has |
| | | > been marked for |
| | | > deletion (moved to |
| | | > the trash or recycle |
| | | > bin). |
+------------------+------------------------+------------------------+
| | > isHidden | > True if the file or |
| | | > folder for the node |
| | | > is hidden. |
+------------------+------------------------+------------------------+
| | > isLink | > True if the node is |
| | | > a shortcut or alias |
| | | > for a file or |
| | | > folder. |
+------------------+------------------------+------------------------+
| | > isPackage | > True if the node is |
| | | > a package in Mac OS. |
+------------------+------------------------+------------------------+
| | > modificationDate | > The modification |
| | | > date of the file or |
| | | > folder for the node |
| | | > as determined by the |
| | | > operating system. |
+------------------+------------------------+------------------------+
| | > name | > The name of the file |
| | | > or folder for the |
| | | > node. |
+------------------+------------------------+------------------------+
| | > size | > The node's file |
| | | > size. |
+------------------+------------------------+------------------------+
| | > sortIndex | > A string used to |
| | | > sort the node by |
| | | > name. |
+------------------+------------------------+------------------------+

+----------------------+----------------------+----------------------+
| **Infoset name** | > **Member names** | |
+======================+======================+======================+
| item | > Node information | |
| | > that can be | |
| | > determined without | |
| | > opening and | |
| | > inspecting the | |
| | > contents of the | |
| | > referenced file. | |
+----------------------+----------------------+----------------------+
| **item** | > canBeDragSource | > True if the node |
| _capabilities_ | | > can be the source |
| | | > of a drag-and-drop |
| | | > action. |
+----------------------+----------------------+----------------------+
| | > canBeDropTarget | > True if the node |
| | | > can be the target |
| | | > of a drag-and-drop |
| | | > action. |
+----------------------+----------------------+----------------------+
| | > c | > True if the node |
| | anCreateNewContainer | > supports creation |
| | | > of child container |
| | | > nodes. |
+----------------------+----------------------+----------------------+
| | > canCreateNewLink | > True if a link or |
| | | > alias can be |
| | | > created from this |
| | | > node. |
+----------------------+----------------------+----------------------+
| | > canDelete | > True if the node |
| | | > can be deleted |
| | | > (moved to the |
| | | > trash or recycle |
| | | > bin). |
+----------------------+----------------------+----------------------+
| | > canDuplicate | > True if the node |
| | | > can be duplicated. |
+----------------------+----------------------+----------------------+
| | > canEject | > True if the node |
| | | > represents |
| | | > removable media, |
| | | > such as a CD or |
| | | > network drive. |
+----------------------+----------------------+----------------------+
| | > canGetFileUrl | > True if the node |
| | | > can be accessed by |
| | | > the operating |
| | | > system through a |
| | | > file URL. |
+----------------------+----------------------+----------------------+
| | > canLock | > If the node is |
| | | > writable and |
| | | > canLock is true, |
| | | > the node can be |
| | | > locked/unlocked. |
| | | > In addition, the |
| | | > "Lock |
| | | > Item"/"Unlock |
| | | > Item" context menu |
| | | > is enabled. If |
| | | > users implement |
| | | > their own |
| | | > [ExtensionModel |
| | | > Objec |
| | | t](#ext |
| | | ensionmodel-object), |
| | | > they should set |
| | | > this property to |
| | | > true in the |
| | | > refreshInfoset() |
| | | > method if they |
| | | > want the current |
| | | > node to support |
| | | > lock |
| | | > functionality. |
+----------------------+----------------------+----------------------+
| | > canOpen | > True if the node |
| | | > can be opened and |
| | | > the "Open" menu is |
| | | > enabled. If users |
| | | > want the current |
| | | > node to support |
| | | > open |
| | | > functionality, |
| | | > this property |
| | | > should be set to |
| | | > true in the |
| | | > refreshInfoset() |
| | | > function of a |
| | | > user-defined |
| | | > [ExtensionMod |
| | | el](#ex |
| | | tensionmodel-object) |
| | | > [Objec |
| | | t](#ext |
| | | ensionmodel-object). |
+----------------------+----------------------+----------------------+
| | > canSearch | > True if the node |
| | | > supports search |
| | | > operations. |
+----------------------+----------------------+----------------------+
| | > canSetName | > True if the node |
| | | > can be renamed. |
+----------------------+----------------------+----------------------+

+----------------------+----------------------+----------------------+
| **Infoset name** | > **Member names** | |
+======================+======================+======================+
| **item** | > isEx | > True if the file |
| _descriptors_ | ternalEditInProgress | > for this node is |
| | | > open in another |
| | | > application. |
+----------------------+----------------------+----------------------+
| | > isLinkToContainer | > True if the node |
| | | > is a shortcut or |
| | | > alias that links |
| | | > to a container |
| | | > node. |
+----------------------+----------------------+----------------------+
| | > isLockedByUser | > True if the file |
| | | > or folder for this |
| | | > node is set as |
| | | > read-only. |
+----------------------+----------------------+----------------------+
| | > isNeverWritable | > True if this node |
| | | > is a volume that |
| | | > is never writable, |
| | | > such as a CD or |
| | | > disk image. |
+----------------------+----------------------+----------------------+
| | > isPhysicalFile | > True if this node |
| | | > is for a physical |
| | | > file or folder on |
| | | > disk. |
+----------------------+----------------------+----------------------+
| | > noWritePermission | > True if the |
| | | > current user does |
| | | > not have write |
| | | > permission for |
| | | > this node, |
| | | > regardless of |
| | | > whether it is |
| | | > generally |
| | | > writable. |
+----------------------+----------------------+----------------------+
| itemContent | > Node information | |
| | > that must be | |
| | > determined by | |
| | > opening the | |
| | > referenced file. | |
+----------------------+----------------------+----------------------+
| **itemContent** | > canDoCameraRaw | > True if the image |
| | | > file is in a |
| _capabilities_ | | > camera-raw format. |
+----------------------+----------------------+----------------------+
| | > canGetFullSize | > True if the node |
| | | > supports full-size |
| | | > previews. |
+----------------------+----------------------+----------------------+
| | > canGetPreview | > True if the file |
| | | > can be previewed. |
+----------------------+----------------------+----------------------+
| | > canGetQuickPreview | > True if the |
| | | > camera-raw image |
| | | > file contains a |
| | | > quick-preview |
| | | > image. |
+----------------------+----------------------+----------------------+
| | > canGetThumbnail | > True if the file |
| | | > contains a |
| | | > thumbnail image. |
+----------------------+----------------------+----------------------+
| | > canGetXmp | > True if the file |
| | | > contains embedded |
| | | > metadata. |
+----------------------+----------------------+----------------------+
| | > canLabelOrRate | > True if the node |
| | | > supports labeling |
| | | > and rating. |
+----------------------+----------------------+----------------------+
| | > canRotate | > True if the image |
| | | > file can be |
| | | > rotated. |
+----------------------+----------------------+----------------------+
| | > canSetXmp | > True if the file's |
| | | > embedded metadata |
| | | > is writable. |
+----------------------+----------------------+----------------------+

+------------------+------------------------+------------------------+
| **Infoset name** | > **Member names** | |
+==================+========================+========================+
| **itemContent** | > dynamicMediaType | > The file\'s dynamic |
| | | > media type. One of: |
| _descriptors_ | | |
| | | 0. (invalid) |
| | | |
| | | 1. (not a dynamic |
| | | > media file) 2 |
| | | > (QuickTime) |
| | | |
| | | > 3 (DirectShow) 4 |
| | | > (Animated GIF) 5 |
| | | > (Flash®) |
| | | > |
| | | > If an extension sets |
| | | > this to undefined |
| | | > and the cache status |
| | | > to good, Adobe |
| | | > Bridge determines |
| | | > the proper dynamic |
| | | > media type. |
+------------------+------------------------+------------------------+
| | > fileFormat | > For a file node, the |
| | | > file format string, |
| | | > such as "jpg". |
+------------------+------------------------+------------------------+
| | > hasSubContainers | > True if this |
| | | > container node can |
| | | > have child nodes |
| | | > that are also |
| | | > containers. |
+------------------+------------------------+------------------------+
| | > mimeType | > The MIME type for |
| | | > the node, if |
| | | > applicable, such as |
| | | > "image/jpeg". |
+------------------+------------------------+------------------------+
| | > pageCount | > The number of pages |
| | | > in the file, if |
| | | > applicable. |
+------------------+------------------------+------------------------+
| | > tooltip | > The node's tooltip |
| | | > string. |
+------------------+------------------------+------------------------+
| quickMetadata | > This is the | |
| | > authoritative source | |
| | > of displayed values, | |
| | > although the same | |
| | > properties are also | |
| | > kept in various | |
| | > other places. | |
+------------------+------------------------+------------------------+
| | > bitDepth | > For image files, the |
| | | > number of bits per |
| | | > pixel. |
+------------------+------------------------+------------------------+
| | > colorProfile | > For image files, the |
| | | > name of the color |
| | | > profile. |
+------------------+------------------------+------------------------+

+-----------------------+--------------------+-----------------------+
| **Infoset name** | > **Member names** | |
+=======================+====================+=======================+
| quickMetadata | > colorMode | > For image files, |
| | | > the color mode |
| (_cont'd)_ | | > used. One of: |
| | | > |
| | | > -1 (invalid) |
| | | > |
| | | > 0 (monochrome |
| | | > bitmap) 1 (gray |
| | | > scale) |
| | | > |
| | | > 2 (indexed) 3 (RGB) |
| | | |
| | | 4. (CMYK) |
| | | |
| | | 5. (HSL) |
| | | |
| | | 6. (HSB) |
| | | |
| | | 7. (multi-channel) 8 |
| | | > (duotone) |
| | | |
| | | `{=html} | | | | <!-- --> | | | |` |
| | | 9. (LAB) |
| | | |
| | | 10. (XYZ) |
+-----------------------+--------------------+-----------------------+
| | > hasCrop | > For camera-raw |
| | | > images, true if the |
| | | > image is cropped. |
+-----------------------+--------------------+-----------------------+
| | > hasRawSettings | > For camera-raw |
| | | > images, true if the |
| | | > file has saved |
| | | > settings. |
+-----------------------+--------------------+-----------------------+
| | > height | > For image files, |
| | | > the image\'s height |
| | | > in pixels. |
+-----------------------+--------------------+-----------------------+
| | > label | > The label string |
| | | > assigned to the |
| | | > file or folder, if |
| | | > any. |
+-----------------------+--------------------+-----------------------+
| | > rating | > The rating number |
| | | > assigned to the |
| | | > file or folder, if |
| | | > any. |
+-----------------------+--------------------+-----------------------+
| | > rotation | > For image files, |
| | | > the rotation value. |
| | | > One of 0, 90, 180, |
| | | > 270. |
+-----------------------+--------------------+-----------------------+
| | > stockPhotoStatus | > The Stock Photos |
| | | > status. One of: |
| | | |
| | | 0. (none) |
| | | |
| | | 1. (thumbnail search |
| | | > image) 2 (comp |
| | | > image) |
| | | |
| | | > 3 (purchased image) |
+-----------------------+--------------------+-----------------------+
| | > xResolution | > For image files, |
| | | > the horizontal |
| | | > resolution in |
| | | > pixels per inch |
| | | > (PPI). |
+-----------------------+--------------------+-----------------------+
| | > yResolution | > For image files, |
| | | > the vertical |
| | | > resolution in |
| | | > pixels per inch |
| | | > (PPI). |
+-----------------------+--------------------+-----------------------+
| | > width | > For image files, |
| | | > the image\'s width |
| | | > in pixels. |
+-----------------------+--------------------+-----------------------+
| []{#\_bookmark352 | > badges | > An array of [[Badge |
| .anchor}badges | | > Object](#badge-object)s |
| | | > representing the |
| | | > node's status |
| | | > icons. A node in |
| | | > the Content pane |
| | | > can have up to four |
| | | > badge icons. |
+-----------------------+--------------------+-----------------------+

+------------------+------------------------+------------------------+
| **Infoset name** | > **Member names** | |
+==================+========================+========================+
| cameraRaw | > rawSupportType | > Identifies the |
| | | > extent to which this |
| | | > file can be handled |
| | | > by the Camera Raw |
| | | > plug-in. One of: |
| | | |
| | | 0. (the file is of a |
| | | > type that is not |
| | | > handled by the |
| | | > plug-in) |
| | | |
| | | 1. (the file is in a |
| | | > camera-raw |
| | | > format) 2 (the |
| | | > file is in JPEG |
| | | > or TIFF format) |
+------------------+------------------------+------------------------+
| children | > children | > An Array of |
| | | > [Thumbnail |
| | | > Object](#thumbnail-object)s |
| | | > representing the |
| | | > child nodes of a |
| | | > container node. |
| | | > |
| | | > Container nodes must |
| | | > update their child |
| | | > node lists. |
+------------------+------------------------+------------------------+
| fullsize | > fullsize | > A [BitmapData |
| | | > Object](#bitmapdata-object) |
| | | > representing the |
| | | > pixels for the |
| | | > file\'s full-size |
| | | > preview thumbnail. |
+------------------+------------------------+------------------------+
| icon | > bitmap | > A [BitmapData |
| | | > Object](#bitmapdata-object) |
| | | > representing the |
| | | > pixels for the |
| | | > node's icon. |
+------------------+------------------------+------------------------+
| linktarget | > linkTarget | > A string containing |
| | | > the full path to the |
| | | > target, if this node |
| | | > is a link. |
+------------------+------------------------+------------------------+
| metadata | > metadata | > The metadata blob |
| | | > for the file, if |
| | | > applicable. |
+------------------+------------------------+------------------------+
| preview | > | > True if the file |
| | hasHighQualityPreview | > contains a |
| | | > high-quality preview |
| | | > image. |
+------------------+------------------------+------------------------+
| | > preview | > A [BitmapData |
| | | > Object](#bitmapdata-object) |
| | | > representing the |
| | | > pixels for the |
| | | > file\'s preview |
| | | > thumbnail image. |
+------------------+------------------------+------------------------+
| thumbnail | > h | > True if the file |
| | asHighQualityThumbnail | > contains a |
| | | > high-quality |
| | | > thumbnail image. |
+------------------+------------------------+------------------------+
| | > thumbnail | > A [BitmapData |
| | | > Object](#bitmapdata-object) |
| | | > representing the |
| | | > pixels for the |
| | | > file\'s thumbnail |
| | | > image. |
+------------------+------------------------+------------------------+

## InfosetMemberDescription Object

> Associates a data type with a single node-data value for Adobe Bridge
> nodes. Each node-data value is a member of an [Infoset
> Object](#infoset-object) associated with an
> [ExtensionHandlerObject](#extensionhandler-object).
>
> The name becomes a property of the parent [Infoset
> Object](#infoset-object), which provides access to a data
> value of this type. For example, to access a color value in myInfo in
> thumbnail t1, where the myInfo set is managed by myExtension, use:
>
> t1.myExtension.myInfo.color

### InfosetMemberDescription constructor

> Create the object with the new operator:
>
> new InfosetMemberDescription ( _name_, _type_ )
>
> The parameters set the corresponding properties.

### InfosetMemberDescription properties

+------+----------+--------------------------------------------------+
| name | > String | > The name of this value, which becomes a |
| | | > property of the parent [Infoset |
| | | > Object](#infoset-object). Must be |
| | | > a valid JavaScript identifier containing no |
| | | > colons or special symbols. |
| | | > |
| | | > Read/write. |
+======+==========+==================================================+
| type | > String | > The data type for values accessed through the |
| | | > name property of the parent |
| | | > [Infoset](#infoset-object) |
| | | > [Object](#infoset-object). |
| | | > Read/write. One of: |
| | | > |
| | | > Boolean String Integer Icon (32x32) |
| | | > |
| | | > BitmapData (a [BitmapData |
| | | > Object](#bitmapdata-object)) |
| | | > |
| | | > SizeInBytes Date |
| | | > |
| | | > Array (an array of _type_ for any of these |
| | | > types: nested arrays are not allowed) |
+------+----------+--------------------------------------------------+

## ModalOperator Object

> Encapsulates a synchronous operation. Performs a task that blocks the
> main thread, and provides its own user interface.
>
> See [OperatorClass](#operator-class) for
> basic properties and methods. For this object, the
> [[start()]{.underline}](#_bookmark383) method yields the main thread
> to the extension. The [[getType()]{.underline}](#_bookmark382) method
> should return modal.

### ModalOperator constructor

> To create a new object, use the new operator: new ModalOperator
> (_sources_, _target_)

+-------------+-------------------------------------------------------+
| > _type_ | > The operator type, "modal". |
+=============+=======================================================+
| > _sources_ | > An array of [Thumbnail |
| | > Object](#thumbnail-object)s that the |
| | > operation acts upon. |
+-------------+-------------------------------------------------------+
| > _target_ | > A target [Thumbnail |
| | > Object](#thumbnail-object) for the |
| | > operation. |
+-------------+-------------------------------------------------------+

## Operand Object

> For use in node searches. An array of these objects is kept in the
> [operands](#_bookmark411) property of a
> [SearchCriteria](#searchcriteria-object) > [Object](#searchcriteria-object). They are used to
> populate the right-side field in the line that corresponds to the
> criterion in the Find dialog (values to be compared against). If there
> is more than one, the field displays a drop-down list.

### Operand object constructor

> Create the object using the new operator:
>
> new Operand(valueName, displayName);
>
> Parameters set corresponding properties.

### Operand properties

+-------------+----------+-------------------------------------------+
| valueName | > String | > The operand value; that is, a possible |
| | | > value of the |
| | | > [ |
| | | [searchField](#_bookmark402) |
| | | > property of the [SearchCriteria |
| | | > Obje |
| | | ct](#searchcriteria-object). |
| | | > Read-write. |
+=============+==========+===========================================+
| displayName | > String | > Optional. The localized display name |
| | | > for the corresponding field in the Find |
| | | > dialog. If not supplied, the valueName |
| | | > is used. Read-write. |
+-------------+----------+-------------------------------------------+

## Operator Class

> When implementing a node-handling extension, you can use Operator
> objects to implement and monitor long-running operations, such as
> file-system interactions, or operations that require a user interface.
> An operation can be modal, blocking the main thread until it is
> complete, or it can spawn a background task that provides feedback and
> allows interaction through a Progress bar and other dialogs that Adobe
> Bridge provides.
>
> You define certain methods for a node-handler's [ExtensionHandler
> Object](#extensionhandler-object) and [ExtensionModel
> Object](#extensionmodel-object) to create and return an
> Operator object, which actually implements the operation. The model
> method returns immediately. See [Long-running handleroperations](#long-running-handler-operations) and
> [Long-runningmodel
> operations](#long-running-model-operations).
>
> []{#\_bookmark368 .anchor}The Operator class is a base class for two
> types of operator:

- [[ModalOperator Object](#modaloperator-object): Blocks

  > the main thread and must provide any desired user interface.

- [ProgressOperator Object](#progressoperator-object):
  > Spawns a background task that can perform operations
  > incrementally, while occasionally notifying Adobe Bridge of
  > changes that require an update to the Adobe Bridge-supplied UI.

> To start the operation, your node handler (or Adobe Bridge) passes the
> returned Operator object to
> app.[[enqueueOperation()]{.underline}](#_bookmark41). This in turn
> calls the [[start()]{.underline}](#_bookmark383) method defined in the
> object.

- For a ModalOperator, the start() method returns when the operation

  > is complete.

- For a ProgressOperator, your start() method should begin the
  > background task and return. Adobe Bridge displays the Progress bar
  > and resumes activity on the main thread. When the background task
  > notifies Adobe Bridge of a change by calling
  > app.[[operationChanged()]{.underline}](#_bookmark42), Adobe Bridge
  > queries the Operator object and updates the Adobe Bridge-supplied
  > user interface.

> You can use app.[[scheduleTask()]{.underline}](#_bookmark53) to
> schedule the execution of the operation, and make periodic progress
> updates. Note that Adobe Bridge does not update the UI for a
> ProgressOperator unless and until you call
> app.[[operationChanged()]{.underline}](#_bookmark42).
>
> The Operator class is a template; it does not implement any state or
> behavior. When creating an operator object, you must implement the
> interface described here, in order to perform the desired operation,
> and to provide Adobe Bridge with expected information about the
> progress and result of the operation.

### Operator common properties

+---------------------------+-----------+---------------------------+
| cancelRequested | > Boolean | > When true, the user has |
| | | > requested that the |
| | | > operation be canceled. |
+===========================+===========+===========================+
| []{#\_bookmark371 | > String | > The type of the current |
| .anchor}conflictType | | > file-system conflict |
| | | > encountered during the |
| | | > operation. One of: |
| | | > |
| | | > none |
| | | > |
| | | userConfirmationRequired |
| | | > fatal |
+---------------------------+-----------+---------------------------+

+-----------------------+-------------------+-----------------------+
| []{#\_bookmark372 | > String | > A string describing |
| .a | | > the current |
| nchor}conflictMessage | | > file-system |
| | | > conflict that |
| | | > prevents the |
| | | > operation from |
| | | > being performed. |
| | | > Can identify one of |
| | | > the preset Adobe |
| | | > Bridge error |
| | | > messages, or can be |
| | | > an arbitrary |
| | | > descriptive string. |
| | | > |
| | | > Preset messages are |
| | | > identified by the |
| | | > following string |
| | | > values: |
| | | > |
| | | > none deleteFile |
| | | > |
| | | > deleteMultipleFiles |
| | | > deleteReadOnlyFile |
| | | > moveReadOnlyFile |
| | | > readOnlyFileExists |
| | | > fileExists |
| | | > fileIsBusy |
| | | > targetFolderExists |
| | | > fatalErrorSameFile |
| | | > |
| | | fatalErrorSameFolder |
| | | > |
| | | > |
| | | fatalErrorMoveToChild |
| | | > fatalEr |
| | | rorSourceNotAvailable |
| | | > |
| | | fatalErrorStorageFull |
| | | > fatalEr |
| | | rorSourceAccessDenied |
| | | > fatalEr |
| | | rorTargetAccessDenied |
| | | > fatalErrorUnknown |
| | | > noXMPSupport |
| | | > |
| | | > undoDelete |
| | | > messageCustom |
+=======================+===================+=======================+
| description | > String | > A description of |
| | | > the operation, |
| | | > suitable for |
| | | > display. |
+-----------------------+-------------------+-----------------------+
| errorTarget | > Thumbnail | > When |
| | | > [[op |
| | | erationStatus](#_bookmark373) |
| | | > is inError, the |
| | | > problematic |
| | | > [[T |
| | | humbnail]{.underline} |
| | | > |
| | | [Object]{.underline} |
| | | ](#thumbnail-object). |
+-----------------------+-------------------+-----------------------+
| newNames | > Array of String | > When |
| | | > [sources](#_bookmark375) |
| | | > has a value, an |
| | | > array of the same |
| | | > length containing |
| | | > the new names to be |
| | | > assigned to the |
| | | > source |
| | | > [[T |
| | | humbnail]{.underline} |
| | | > |
| | | [Object]{.underline} |
| | | ](#thumbnail-object)s |
| | | > after they are |
| | | > transferred to the |
| | | > [target](#_bookmark376). |
+-----------------------+-------------------+-----------------------+
| []{#\_bookmark373 | > String | > The status of the |
| .a | | > operation with |
| nchor}operationStatus | | > respect to the |
| | | > immediate action. |
| | | > Read/write. One of: |
| | | > |
| | | > incomplete |
| | | > inCancellation |
| | | > inConflict inError |
| | | > succeeded cancelled |
| | | > failed |
+-----------------------+-------------------+-----------------------+
| percentageComplete | > Number | > How much of the |
| | | > operation has |
| | | > currently been |
| | | > completed, in a |
| | | > float value with |
| | | > the range \[0, 1\]. |
| | | > Read/write. Also |
| | | > returned by |
| | | > [[getPercenta |
| | | geComplete()]{.underl |
| | | ine}](#_bookmark379). |
+-----------------------+-------------------+-----------------------+

+----------------------+----------------------+----------------------+
| processingStatus | > String | > The current |
| | | > overall status of |
| | | > the operation with |
| | | > respect to Adobe |
| | | > Bridge; that is, |
| | | > whether the |
| | | > operation has |
| | | > begun, is still |
| | | > going on, has been |
| | | > paused by the |
| | | > user, or has |
| | | > finished. |
| | | > Read/write. Also |
| | | > returned by |
| | | > [[getProcessi |
| | | ngStatus()]{.underli |
| | | ne}](#_bookmark380). |
| | | > One of: |
| | | > |
| | | > notStarted |
| | | > inProgress |
| | | > awaitingResume |
| | | > completed |
+======================+======================+======================+
| progressMessage | > String | > A description of |
| | | > the current state |
| | | > of the operation, |
| | | > suitable for |
| | | > display. |
| | | > Read/write. Also |
| | | > returned by |
| | | > [[getProgres |
| | | sMessage()]{.underli |
| | | ne}](#_bookmark381). |
+----------------------+----------------------+----------------------+
| resolvePolicy | > String | > How to apply the |
| | | > |
| | | conflict-resolution |
| | | > method |
| | | > ([reso |
| | | lveMethod](#_bookmark374)). |
| | | > This is for the |
| | | > developer's |
| | | > information in a |
| | | > ModalOperator; |
| | | > Adobe Bridge does |
| | | > not check it. One |
| | | > of: |
| | | > |
| | | > app |
| | | lyForOneConflictOnly |
| | | > |
| | | applyToAllConflicts |
+----------------------+----------------------+----------------------+
| []{#\_bookmark374 | > String | > How to resolve |
| . | | > file-system |
| anchor}resolveMethod | | > conflicts. This is |
| | | > for the |
| | | > developer's |
| | | > information in a |
| | | > ModalOperator; |
| | | > Adobe Bridge does |
| | | > not check it. One |
| | | > of: |
| | | > |
| | | > abort noOverride |
| | | > override |
| | | > |
| | | > o |
| | | verrideConditionally |
+----------------------+----------------------+----------------------+
| result | > Object | > An optional result |
| | | > for an operation, |
| | | > such as the path |
| | | > that results from |
| | | > a |
| | | > |
| | | createNewContainer() |
| | | > operation. |
+----------------------+----------------------+----------------------+
| []{#\_bookmark375 | > Array of Thumbnail | > A set of |
| .anchor}sources | | > [[Th |
| | | umbnail]{.underline} |
| | | > [ |
| | | Object]{.underline}] |
| | | (#thumbnail-object)s |
| | | > that the operation |
| | | > acts upon. |
+----------------------+----------------------+----------------------+
| []{#\_bookmark376 | > Thumbnail | > A target |
| .anchor}target | | > [[Thumbnail |
| | | > |
| | | Object]{.underline} |
| | | ](#thumbnail-object) |
| | | > for the operation. |
+----------------------+----------------------+----------------------+
| timeout | > Number | > A number of |
| | | > milliseconds to |
| | | > wait before |
| | | > aborting the |
| | | > operation. Default |
| | | > is 0, meaning that |
| | | > the operation does |
| | | > not time out. |
+----------------------+----------------------+----------------------+

### Operator functions

+----------------------------------+----------------------------------+
| getConflictInfo() | > Implement a method that |
| | > returns a description of a |
| _obj_.getConflictInfo () | > file-system conflict that |
| | > prevents the operation from |
| | > being performed on the current |
| | > thumbnail. |
| | > |
| | > The returned string can |
| | > identify one of the preset |
| | > Adobe Bridge error messages, |
| | > or can be an arbitrary |
| | > descriptive string suitable |
| | > for display in a |
| | > conflict-resolution dialog. |
| | > Preset messages are identified |
| | > by the following string |
| | > values: |
| | > |
| | > none moveReadOnlyFile |
| | > targetFolderExists |
| | > readOnlyFileExists fileExists |
| | > fatalErrorSameFile |
| | > fatalErrorSameFolder |
| | > |
| | > fatalErrorMoveToChild |
| | > |
| | fatalErrorSourceFileNotAvailable |
| | > fatalErrorStorageFull |
| | > fatalErrorSourceAccessDenied |
| | > fatalErrorTargetAccessDenied |
| | > fatalErrorUnknown |
| | > |
| | > deleteFile deleteMultipleFiles |
| | > noXMPSupport fileIsBusy |
| | > undoDelete messageCustom |
+==================================+==================================+
| []{#\_bookmark379 | > Implement a method that |
| .anchor}getPercentageComplete() | > returns the percentage of the |
| | > operation that has currently |
| _obj_.getPercentageComplete () | > been completed, for use in |
| | > displaying the Progress |
| | > dialog. |
| | > |
| | > Adobe Bridge invokes this when |
| | > it needs to update the |
| | > Progress bar. |
| | > |
| | > Return a number in the range |
| | > \[0\...1\]. |
+----------------------------------+----------------------------------+
| getProcessedNodeCount() | > Implement a method that |
| | > returns the number of source |
| _obj_.getProcessedNodeCount () | > nodes that have been processed |
| | > so far. |
| | > |
| | > Return a number. |
+----------------------------------+----------------------------------+
| []{#\_bookmark380 | > Implement a method that |
| .anchor}getProcessingStatus() | > returns the current overall |
| | > status of the operation with |
| _obj_.getProcessingStatus () | > respect to Adobe Bridge; that |
| | > is, whether the operation has |
| | > begun, is still going on, has |
| | > been paused by the user, or |
| | > has finished. |
| | > |
| | > Return one of the following |
| | > string values: |
| | > |
| | > notStarted inProgress |
| | > awaitingResume completed |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| []{#\_bookmark381 | > Implement a method that |
| .anchor}getProgressMessage() | > returns a message suitable for |
| | > display in the Progress |
| _obj_.getProgressMessage () | > dialog. |
| | > |
| | > Return a string. |
+==================================+==================================+
| getTotalBytesTransferred() | > Implement a method that |
| _obj_.getTotalBytesTransferred | > returns the current number of |
| () | > bytes that have been |
| | > transferred to the target in |
| | > the course of this operation. |
| | > |
| | > Return a number. |
+----------------------------------+----------------------------------+
| getTotalNodeCount() | > Implement a method that |
| | > returns the total number of |
| _obj_.getTotalNodeCount () | > source nodes to be operated |
| | > on. |
| | > |
| | > Return a number. |
+----------------------------------+----------------------------------+
| []{#\_bookmark382 | > Implement a method that |
| .anchor}getType() | > returns the subclass type of |
| | > this operator. |
| _obj_.getType () | > |
| | > Return a string, one of: |
| | > |
| | > modal progress background |
| | > |
| | > progressBackground |
+----------------------------------+----------------------------------+
| resolveConflict() | > Implement a method that |
| _obj_.resolveConflict (_method, | > resolves a file-system |
| policy_) | > conflict, as identified by the |
| | > [conflictT |
| | ype](#_bookmark371) |
| | > and |
| | > [conflictMess |
| | age](#_bookmark372) |
| | > values. |
| | > |
| | > Adobe Bridge invokes this |
| | > after the user makes |
| | > selections in a |
| | > conflict-resolution dialog, |
| | > passing in the user's choices. |
| | > |
| | > Return undefined. |
+----------------------------------+----------------------------------+
| > _method_ How to resolve the | |
| > conflict. One of: | |
| > | |
| > **noOverride**---Do not | |
| > perform the current action, | |
| > but continue with the | |
| > operation. Corresponds to | |
| > **Skip** in the | |
| > conflict-resolution dialog. | |
| > **override**---Make another | |
| > attempt to perform the current | |
| > action. | |
| > | |
| > Corresponds to **Replace** in | |
| > the conflict-resolution | |
| > dialog. | |
| > | |
| **overrideConditionally**---Use | |
| > an extension-defined default | |
| > style of resolving the | |
| > conflict. Corresponds to | |
| > **Auto-resolve** in the | |
| > conflict-resolution dialog. | |
| > | |
| > **abort**---Does not perform | |
| > the action for the current | |
| > thumbnail, and terminates the | |
| > operation. Corresponds to | |
| > **Cancel** in the | |
| > conflict-resolution dialog. | |
| > | |
| > _policy_ How to apply the | |
| > conflict resolution method. | |
| > Corresponds to the checked | |
| > state of | |
| > | |
| > **Apply to all** in the | |
| > conflict-resolution dialog. | |
| > One of: | |
| > | |
| > **app | |
| lyForOneConflictOnly**---Resolve | |
| > as specified for the current | |
| > action, but request user input | |
| > again if the same type of | |
| > conflict occurs again. | |
| > * | |
| *applyToAllConflicts\*\*---Resolve | |
| > as specified for the current | |
| > action, then resolve with this | |
| > method again if the same type | |
| > of conflict occurs again. | |
+----------------------------------+----------------------------------+

+----------------------------------+----------------------------------+
| resume() | > Implement a method that |
| | > restarts the operation after |
| _obj_.resume () | > it has been stopped by user |
| | > interaction. |
| | > |
| | > Return true if the operation |
| | > has been successfully |
| | > restarted. |
+==================================+==================================+
| []{#\_bookmark383 .anchor}start() | > Implement a method that |
| | > initiates the operation. Adobe |
| _obj_.start () | > Bridge invokes this after the |
| | > operator has been enqueued. |
| | |
| | - For a modal operation, the |
| | > method should return when |
| | > the operation is complete. |
| | |
| | - For a non-modal operation, |
| | > the method should begin |
| | > the background task and |
| | > return. |
| | |
| | > Return undefined. |
+----------------------------------+----------------------------------+
| stop() | > Implement a method that |
| | > terminates the operation. |
| _obj_.stop () | > Adobe Bridge invokes this |
| | > after the operation has been |
| | > stopped by user interaction. |
| | > |
| | > Return undefined. |
+----------------------------------+----------------------------------+

## ProgressOperator Object

> Encapsulates an operation that performs a background task, while Adobe
> Bridge displays a Progress bar. It can do so incrementally,
> periodically notifying Adobe Bridge of the current status. See
> [Operator Class](#operator-class) for the inherited
> properties and methods.
>
> For this object, the [[getType()]{.underline}](#_bookmark382) method
> should return progress. The [[start()]{.underline}](#_bookmark383)
> method should spawn a thread to perform the operation and return
> immediately. Adobe Bridge displays a Progress bar, and resumes
> activity on the main thread.
>
> []{#\_bookmark387 .anchor}When the background thread updates the status
> in any way that affects the display, it must pass this object to
> app.[[operationChanged()]{.underline}](#_bookmark42). Adobe Bridge
> queries this object in order to update the Progress dialog or display
> the Adobe Bridge-supplied error handling or resolution conflict
> dialogs.

### ProgressOperator constructor

> To create a new object, use the new operator:
>
> new ProgressOperator (_type_, _sources_, _target_)

+-------------+-------------------------------------------------------+
| > _type_ | > The operator type, "progress". |
+=============+=======================================================+
| > _sources_ | > An array of [Thumbnail |
| | > Object](#thumbnail-object)s that the |
| | > operation acts upon. |
+-------------+-------------------------------------------------------+
| > _target_ | > A target [Thumbnail |
| | > Object](#thumbnail-object) for the |
| | > operation. |
+-------------+-------------------------------------------------------+

## Rank Object

> For use in node searches. A [SearchDefinitionObject](#searchdefinition-object) can limit the number
> of results to return, and, if results are limited, it can define a set
> of possible properties to use in ranking results. Adobe Bridge sorts
> result nodes by the value of the chosen rank property, and returns no
> more than the maximum number of result nodes with the highest rank
> values. When the result is displayed, the view sorts the nodes again
> using its sorting criteria.
>
> The attribute name and display name of a property used for ranking are
> encapsulated in a Rank object.
>
> An array of these objects kept in the
> [ranks](#_bookmark416) property of a
> [SearchDefinitionObject](#searchdefinition-object). They are used to
> populate the Rank field that corresponds to the definition in the Find
> dialog. If there is more than one, the field displays a drop-down
> list. The rank that the user selects becomes the
> [rankField](#_bookmark429) value in the
> [SearchSpecification
> Object](#searchspecification-object).

### Rank object constructor

> Create the object using the new operator: new Rank(_valueName_,
> _displayName_);
>
> Parameters set corresponding properties.

### Rank properties

+-------------+----------+-------------------------------------------+
| valueName | > String | > The property name for the ranking |
| | | > property. Read-write. |
+=============+==========+===========================================+
| displayName | > String | > Optional. The localized display name |
| | | > for the corresponding field in the Find |
| | | > dialog. If not supplied, the valueName |
| | | > is used. Read-write. |
+-------------+----------+-------------------------------------------+

## Scope Object

> Identifies a scope modifier to use in node searches among handled
> nodes. The modifier can expand or limit the scope of the search from
> the original target node. The scope value and usage is defined
> entirely by the [[getSearchDefinition()]{.underline}](#_bookmark323)
> method of the node's [ExtensionModel
> Object](#extensionmodel-object).
>
> An array of these objects, kept in the
> [scopeSpecifiers](#_bookmark417) property of a
> [SearchDefinition Object](#searchdefinition-object), is
> used to populate the Find dialog. The box displays a check box for
> each possible scope extension or limitation. When the user selects a
> scope, its name becomes a value of
> [scopeSpecifiers](#_bookmark430) in the resulting
> [SearchSpecification
> Object](#searchspecification-object) object.

### Scope object constructor

> Create the object using the new operator: new Scope(_valueName_,
> _displayName_);
>
> Parameters set corresponding properties.

### Scope properties

+-------------+----------+-------------------------------------------+
| valueName | > String | > The unique identifying name for the |
| | | > scope modifier. Read-write. |
+=============+==========+===========================================+
| displayName | > String | > Optional. The localized display name |
| | | > for the corresponding field in the Find |
| | | > dialog. If not supplied, the valueName |
| | | > is used. Read-write. |
+-------------+----------+-------------------------------------------+

## SearchCondition Object

> Defines a specific condition that must be met for a node to match a
> search. The Find dialog returns a [SearchSpecification
> Object](#searchspecification-object) for a specific
> search, which contains a list of these objects in the
> [conditionList](#_bookmark427) property; each object
> corresponds to the user's selection in one line of the Criteria box in
> the dialog. The
> SearchSpecification.[conjunction](#_bookmark428)
> controls whether all or any of the conditions must be met.
>
> Your node handler can define possible search criteria for your nodes
> by creating [SearchCriteria
> Object](#searchcriteria-object)s and passing them in the
> [SearchDefinition Object](#searchdefinition-object)
> created by the model's
> [[getSearchDefinition()]{.underline}](#_bookmark323) method.
>
> []{#\_bookmark399 .anchor}Each condition specifies a property
> associated with a node (the
> [searchField](#_bookmark402)), whose value is compared
> to a selected [operand](#_bookmark403) value, using a
> selected operator such as "equals." Operators are predefined. Some
> operators, such as "exists," do not require an operand.

### SearchCondition object constructor

> Create the object with the new operator:
>
> new SearchCondition(_searchField_, _operatorType_, _operand_);
>
> Parameters set corresponding properties.

### SearchCondition properties

+----------------------------+----------+----------------------------+
| []{#\_bookmark402 | > String | > The name of some |
| .anchor}searchField | | > property associated with |
| | | > the search node, |
| | | > typically a metadata |
| | | > property or a member of |
| | | > an [[Infoset |
| | | > Object](#infoset-object) |
| | | > associated with handled |
| | | > nodes. |
| | | > |
| | | > This corresponds to the |
| | | > left side of a line in |
| | | > the Criteria box of the |
| | | > Find dialog. Read/write. |
+============================+==========+============================+
| operatorType | > String | > The comparison operator |
| | | > for the search. This |
| | | > corresponds to the |
| | | > middle field of a line |
| | | > in the Criteria box of |
| | | > the Find dialog. |
| | | > |
| | | > Read/write. One of: |
| | | > |
| | | > exists doesNotExist |
| | | > equals notEquals less |
| | | > |
| | | > lessThanOrEqual greater |
| | | > greaterThanOrEqual |
| | | > contains doesNotContain |
| | | > startsWith endsWith |
+----------------------------+----------+----------------------------+
| []{#\_bookmark403 | > String | > The value to compare |
| .anchor}operand | | > against the value of the |
| | | > search field in each |
| | | > node. This corresponds |
| | | > to the right side of a |
| | | > line in the Criteria box |
| | | > of the Find dialog. |
| | | > Read/write. |
+----------------------------+----------+----------------------------+

## SearchCriteria Object

> []{#\_bookmark406 .anchor}Encapsulates one search criterion for a
> search among handled nodes. Your node handler can define possible
> search criteria for your nodes by creating these objects and passing
> them to Adobe Bridge in a [[SearchDefinition]{.underline}
> [Object](#searchdefinition-object), during the call to
> the [[getSearchDefinition()]{.underline}](#_bookmark323) method of the
> node's [ExtensionModelObject](#extensionmodel-object).
>
> Each object corresponds to one line in the Criteria box of the Find
> dialog.

- []{#bookmark407 .anchor}The left side is a property associated with

  > possible matching nodes, called the _search field_.

- The middle value is the comparison _operator_.

- The right side is the comparison value, or _operand_ (some
  > operators, such as "exists," do not require an operand).

> []{#\_bookmark408 .anchor}For each node in the scope, a search that
> uses a selected criterion matches the selected search-field value
> against the operand using the selected comparison operator. This
> object specifies the left and right sides. By default, all of the
> predefined operators are displayed for user selection. You can use
> this object to limit which of these operators are available for
> selection.
>
> The user's choices in the dialog are returned to Adobe Bridge in a set
> of a [[SearchCondition]{.underline}
> [Object](#searchcondition-object)s contained in a
> [SearchSpecificationObject](#searchspecification-object).

### SearchCriteria object constructor

> Create the object with the new operator:
>
> new SearchCriteria (_searchField_, _operandType_,
>
> \*_searchFieldDisplay_, \*_operands_);
>
> Parameters set corresponding properties.

### SearchCriteria properties

+-----------------------+--------------------+-----------------------+
| []{#\_bookmark411 | > Array of Operand | Optional. One or more |
| .anchor}operands | | [[Operand |
| | | Object](#operand-object)s |
| | | used to populate the |
| | | drop-down list for |
| | | the right-side field |
| | | of this line in the |
| | | Find dialog. This |
| | | allows you to specify |
| | | a closed list of |
| | | possible values to |
| | | match against in the |
| | | search field. |
+=======================+====================+=======================+
| operandType | > String | The data type of the |
| | | operand values. |
| | | Determines the |
| | | description that |
| | | appears in the |
| | | operand field in the |
| | | absence of a closed |
| | | list of operands. The |
| | | description is the |
| | | expected format for |
| | | Date values, |
| | | otherwise generally |
| | | \"Enter text\". |
| | | |
| | | One of: |
| | | |
| | | > String Number Float |
| | | > Date Boolean |
+-----------------------+--------------------+-----------------------+

+-----------------------+-------------------+-----------------------+
| o | > Array of String | Optional. A set of |
| peratorTypesToDisable | | predefined operator |
| | | strings that are |
| | | |
| | | _not_ displayed for |
| | | selection. Predefined |
| | | operators are: |
| | | |
| | | > exists doesNotExist |
| | | > equals doesNotEqual |
| | | > less |
| | | > lessThanOrEqual |
| | | > greater |
| | | > |
| | | > greaterThanOrEqual |
| | | > contains |
| | | > doesNotContain |
| | | > startsWith endsWith |
+=======================+===================+=======================+
| searchField | > String | A search field, the |
| | | name of some property |
| | | associated with the |
| | | search node, |
| | | typically a metadata |
| | | property or a member |
| | | of an [Infoset |
| | | Object](#infoset-object) |
| | | associated with |
| | | handled nodes. The |
| | | value of the selected |
| | | search field is |
| | | compared to the |
| | | selected operand, |
| | | using the selected |
| | | comparison operator. |
+-----------------------+-------------------+-----------------------+
| searchFieldDisplay | > String | Optional. A localized |
| | | display name for the |
| | | search field, |
| | | displayed in the Find |
| | | dialog. Default is |
| | | the searchField |
| | | value. |
+-----------------------+-------------------+-----------------------+
| searchFieldSort | > Boolean | Optional. When true, |
| | | search field display |
| | | names are sorted |
| | | alphabetically in the |
| | | Find dialog. Default |
| | | is false. |
+-----------------------+-------------------+-----------------------+

## SearchDefinition Object

> Provides a way for Adobe Bridge extensions to specify how the Find
> dialog should be populated for a search among handled nodes. It
> specifies possible search criteria, as well as result scope and
> ranking criteria.
>
> If the user invokes the Find dialog for a handled node, the dialog
> calls the model's [[getSearchDefinition()]{.underline}](#_bookmark323)
> method. Your node-handling extension must define this method to return
> a SearchDefinition object that can be used to populate Find dialog.
>
> When a user clicks Find in the Find dialog, Adobe Bridge uses the
> dialog selections to create a [SearchSpecification
> Object](#searchspecification-object), which, together
> with a target node, specifies a search.

### SearchDefinition object constructor

> Create the object with the new operator:

new SearchDefinition (_criteriaList_, _defaultResultsLimit_,

\*_ranks_, \*_scopeSpecifiers_);

> Parameters set corresponding properties.

### SearchDefinition properties

+----------------------+----------------------+----------------------+
| criteriaList | > Array of | > A collection of |
| | > SearchCriteria | > possible |
| | | > [SearchCriteria |
| | | > Objec |
| | | t](#sea |
| | | rchcriteria-object)s |
| | | > to use for this |
| | | > search, used to |
| | | > populate the |
| | | > Criteria box in |
| | | > the Find dialog. |
+======================+======================+======================+
| defaultResultsLimit | > Number | > If non-zero, the |
| | | > Find dialog offers |
| | | > choices to limit |
| | | > the result set to |
| | | > certain sizes, and |
| | | > the choice |
| | | > defaults to this |
| | | > value. |
+----------------------+----------------------+----------------------+
| []{#\_bookmark416 | > Array of Rank | > Optional, a set of |
| .anchor}ranks | | > [[Rank |
| | | > Object](#rank-object)s |
| | | > to use only if the |
| | | > search can limit |
| | | > results. |
| | | > Read-write. |
| | | > |
| | | > Used to populate |
| | | > the Rank list in |
| | | > the Results |
| | | > section of the |
| | | > Find dialog. |
+----------------------+----------------------+----------------------+
| []{#\_bookmark417 | > Array of Scope | > Optional, one or |
| .an | | > more [[Scope |
| chor}scopeSpecifiers | | > Object](#scope-object)s. |
| | | > Your search can |
| | | > use these to |
| | | > extend or limit |
| | | > the scope of the |
| | | > search. |
| | | > Read-write. |
| | | > |
| | | > The Results |
| | | > section of the |
| | | > Find dialog |
| | | > displays a check |
| | | > box for each scope |
| | | > modifier. |
+----------------------+----------------------+----------------------+

## SearchDetails Object

> An object that encapsulates information about how a search result node
> was generated by a
>
> node-handler's [[getBridgeURIForSearch()]{.underline}](#_bookmark305)
> method. Returned by an
> ExtensionModel.[[getSearchDetails()]{.underline}](#_bookmark324)
> method for a search-result node.

### SearchDetails object constructor

> Create the object with the new operator:
>
> new SearchDetails (_searchSpecification_, _searchTargetUri_);
>
> Parameters set corresponding properties.

### SearchDetails properties

+-----------------+-----------------------+------------------------+
| searchCriteria | > SearchSpecification | > A |
| | | > |
| | | [SearchSpecification |
| | | > Objec |
| | | t](#searc |
| | | hspecification-object) |
| | | > that was used to |
| | | > generate this search |
| | | > result. Read/write. |
+=================+=======================+========================+
| searchTargetUri | > String | > The Bridge URI for |
| | | > the search target |
| | | > node that was used |
| | | > to generate this |
| | | > search result. |
| | | > Read/write. |
+-----------------+-----------------------+------------------------+

## SearchSpecification Object

> Encapsulates a specific search among member nodes of a target
> container node. The object contains a set of conditions to be met in
> order for a node to match, and instructions for how to return matching
> nodes.
>
> Adobe Bridge creates this object from user selections in the Find
> dialog. For a search that involves handled nodes, Adobe Bridge passes
> the search specification to the handler's
> [[getBridgeURIForSearch()]{.underline}](#_bookmark305) method.
>
> Your handler can either save that object, or recreate one to return
> from the [[getSearchDetails()]{.underline}](#_bookmark324) model
> method of the search-result container node.

### SearchSpecification object constructor

> Create the object with the new operator:

new SearchSpecification (_conditionList_, _conjunction_,
_maximumResults_,

> _rankOrdering_, _rankField_, _scopeSpecifiers_);
>
> Parameters set corresponding properties.

### SearchSpecification properties

+----------------------+----------------------+----------------------+
| []{#\_bookmark427 | > Array of | > A collection of |
| . | > SearchCondition | > [[SearchCondition |
| anchor}conditionList | | > Object |
| | | ](#sear |
| | | chcondition-object)s |
| | | > to use for this |
| | | > search. Each |
| | | > object specifies a |
| | | > _search field_, |
| | | > which identifies a |
| | | > property |
| | | > associated with a |
| | | > node, a comparison |
| | | > operator, such as |
| | | > \"exists\" or |
| | | > \"equals\", and an |
| | | > _operand_, the |
| | | > value to compare |
| | | > with the search |
| | | > field value (if |
| | | > the operator |
| | | > requires a |
| | | > comparison value). |
+======================+======================+======================+
| []{#\_bookmark428 | > String | > The search |
| .anchor}conjunction | | > conjunction, and |
| | | > or or, as selected |
| | | > in the Find |
| | | > dialog. When it is |
| | | > and, all |
| | | > conditions must |
| | | > succeed for a node |
| | | > to match. When it |
| | | > is or, the success |
| | | > of any condition |
| | | > results in a |
| | | > match. |
+----------------------+----------------------+----------------------+
| maximumResults | > Number | > The maximum number |
| | | > of result nodes to |
| | | > return from the |
| | | > search. The search |
| | | > halts after this |
| | | > number of matches |
| | | > are found. |
+----------------------+----------------------+----------------------+
| rankOrdering | > String | > The ordering |
| | | > style, one of |
| | | > ascending (the |
| | | > default) or |
| | | > descending. |
+----------------------+----------------------+----------------------+
| []{#\_bookmark429 | > String | > The name of a |
| .anchor}rankField | | > [[Rank |
| | | > Object](#rank-object), |
| | | > as specified for a |
| | | > [[SearchDefinition |
| | | > Object] |
| | | {.underline}](#searc |
| | | hdefinition-object). |
| | | > |
| | | > If the number of |
| | | > results are |
| | | > limited, results |
| | | > are sorted on the |
| | | > named attribute |
| | | > value, and the |
| | | > maximum number of |
| | | > result nodes with |
| | | > the highest rank |
| | | > values are |
| | | > returned. |
| | | > |
| | | > The returned |
| | | > results are again |
| | | > sorted by the |
| | | > view's sorting |
| | | > criteria upon |
| | | > display. |
+----------------------+----------------------+----------------------+

+-----------------------+-------------------+-----------------------+
| []{#\_bookmark430 | > Array of String | > One or more [[Scope |
| .a | | > Object]{.under |
| nchor}scopeSpecifiers | | line}](#scope-object) |
| | | > names, as specified |
| | | > for a |
| | | > [SearchDefinition |
| | | > Objec |
| | | t](#sear |
| | | chdefinition-object). |
| | | > |
| | | > Each scope modifier |
| | | > can expand or limit |
| | | > the original scope |
| | | > defined by the |
| | | > target node. The |
| | | > scope value and |
| | | > usage is defined |
| | | > entirely by your |
| | | > [[getSearc |
| | | hDefinition()]{.under |
| | | line}](#_bookmark323) |
| | | > model method |
| | | > implementation. |
+-----------------------+-------------------+-----------------------+

## SortCriterion Object

> Provides a way for Adobe Bridge extensions to specify how handled
> nodes can be sorted. Sorting compares the values of a property
> associated with the displayed nodes. This object identifies that
> property, which can be in handler-defined node data (that is, defined
> in an [Infoset Object](#infoset-object)), or defined in
> embedded XMP metadata.
>
> When Adobe Bridge enters a container node, it calls the
> [[getSortCriteria()]{.underline}](#_bookmark325) method of the node's
> [ExtensionModelObject](#extensionmodel-object), which returns a list of
> these objects. The method can supply a completely new list, or can get
> the default list from
> app.[defaultSortCriteria](#_bookmark26) and modify it,
> append to it, or return it unchanged.
>
> You can apply a sorting criterion to currently displayed nodes by
> referencing a SortCriterion object from the
> Document.[sorts](#_bookmark88) property.

### SortCriterion object constructor

> Create the object with the new operator:
>
> new SortCriterion(_name_, _type_, _xmpNamespace_, _xmpUri_, \*_displayName_) new SortCriterion(_name_, _type_, _infosetMember_, \*_displayName_)
>
> Parameters set corresponding properties.

### SortCriterion properties

+----------------------------+----------+----------------------------+
| displayName | > String | > Optional. A localized |
| | | > display name for this |
| | | > sorting criterion. Used |
| | | > as a label for the Sort |
| | | > menu and Filter palette |
| | | > flyout menu. If not |
| | | > assigned, name is |
| | | > displayed. Read-write. |
+============================+==========+============================+
| infosetMember | > String | > The name of an |
| | | > [Infoset]{.underline} |
| | | > [Object](#infoset-object) |
| | | > and |
| | | > [InfosetMemb |
| | | erDescription]{.underline} |
| | | > [Ob |
| | | ject](#infose |
| | | tmemberdescription-object) |
| | | > by which to sort. |
| | | > Read/write. For example, |
| | | > \"mySet.color\". |
+----------------------------+----------+----------------------------+
| []{#\_bookmark436 | > String | > The unique identifying |
| .anchor}name | | > name of this sort |
| | | > criterion. The name can |
| | | > be: |
| | | > |
| | | > user name |
| | | > |
| | | > date-created |
| | | > date-modified label |
| | | > |
| | | > rating file-size |
| | | > |
| | | > document-kind keywords |
| | | > dimensions resolution |
| | | > color-profile |
+----------------------------+----------+----------------------------+

+----------------------------+----------+----------------------------+
| []{#\_bookmark437 | > String | > The data type of the |
| .anchor}type | | > criterion property. Read |
| | | > only. One of: |
| | | > |
| | | > string date number |
| | | > dimensions resolution |
| | | > |
| | | > colorProfile user |
+============================+==========+============================+
| xmpNamespace | > String | > The namespace portion of |
| | | > an XMP property by which |
| | | > to sort. Read/write. |
+----------------------------+----------+----------------------------+
| xmpUri | > String | > The URI key portion of |
| | | > an XMP property by which |
| | | > to sort. Read/write. |
+----------------------------+----------+----------------------------+

# External Communication Tools

> []{#\_bookmark440 .anchor}Adobe Bridge offers []{#\_bookmark441
> .anchor}the Web Access library, which supplies tools for communicating
> with other computers or the Internet using standard protocols. The Web
> Access library defines:

- The [[FtpConnection object](#ftpconnection-object),

  > which supports FTP and SFTP communication protocols.

- The [HttpConnectionobject](#httpconnection-object), which supports HTTP
  > and HTTPS communication protocols.

> Your script must load the platform-compiled Web Access library as an
> ExternalObject in order to use these objects. See ['Loading the Web
> Access library' on159](#loading-the-web-access-library).

## Loading the Web Access library

> To use the [FtpConnection object](#ftpconnection-object)
> or [HttpConnectionobject](#httpconnection-object), you must dynamically
> load the Web Access library into Adobe Bridge as an ExternalObject.
> This library is compiled as a shared library; a DLL in Windows, a
> bundle or framework in Mac OS.
>
> For example, use the following JavaScript code:
>
> if ( !ExternalObject.webaccesslib ) {
>
> ExternalObject.webaccesslib = new
> ExternalObject(\'lib:webaccesslib\');
>
> }
>
> The location of the compiled library files is determined by the
> operating system.

- []{#bookmark443 .anchor}In Windows, the DLLs reside in the

  > executable directory.

- In Mac OS, bundles and frameworks are loaded from the
  > \@executable/../Frameworks/ directory. Use the layout of bundles
  > and Frameworks from the shellframework sample application as a
  > template.

> For more information on loading compiled libraries into JavaScript,
> see the _JavaScript Tools Guide_.

## FtpConnection object

> []{#\_bookmark445 .anchor}This class supports the FTP and SFTP
> protocols for file transfer. The object allows you to send data to or
> receive data from an FTP server, synchronously or asynchronously.
>
> To use the FtpConnection object, you must load the Web Access library
> (webaccesslib) into JavaScript as an ExternalObject. See ["Loading
> the Web Access library"on page
> 159](#loading-the-web-access-library).

### Using File objects with the FtpConnection object

> []{#\_bookmark447 .anchor}Typically, you create a File object for use
> with your FtpConnection object. The
> [[get()]{.underline}](#_bookmark472) and
> [[put()]{.underline}](#_bookmark475) operations automatically open the
> file for read and write, respectively, if you have not done so
> explicitly. The default transfer mode is binary.

- To transfer binary files to the server, use code such as the
  > following:

**159**

> var file = new File(\'/c/Photo.jpg\') ;
>
> var ftp = new FtpConnection(\'ftp://server\') ;
> ftp.put(file,\'Photo.jpg\') ;
>
> ftp.close() ;
>
> file.close() ;

- Similarly, to transfer binary files from the server:

> var file = new File(\'/c/Photo.jpg\') ;
>
> var ftp = new FtpConnection(\'ftp://server\') ;
> ftp.get(\'Photo.jpg\',file) ;
>
> ftp.close() ;
>
> file.close() ;
>
> The operations do not automatically close the file. This allows you,
> for example, to use [[get()]{.underline}](#_bookmark472) to copy many
> files to a single file on your local file system. For example:
>
> var file = new File(\"/c/archive.bin\") ; ftp.get(\"a.txt\",file) ;
>
> ftp.get(\"c.txt\",file) ; file.close() ;
>
> Open files are eventually closed by the JavaScript garbage collector
> when there are no remaining
>
> JavaScript references.
>
> ExtendScript supports many file filters; see the _JavaScript Tools
> Guide_ for details.

### Synchronous and asynchronous operation

> []{#\_bookmark449 .anchor}Two properties of the FtpConnection,
> [[sync](#_bookmark467) and
> [async](#_bookmark458), control whether
> [[get()]{.underline}](#_bookmark472) and
> [[put()]{.underline}](#_bookmark475) operations are performed
> synchronously or asynchronously. The property values are tied
> together, and are mutually exclusive. You can set either one, and the
> other is automatically toggled to the opposite value.
>
> When the property [sync](#_bookmark467) is set to true
> (the default), the connection operation blocks the main thread. All
> operations must be completed before your script continues.

###### Example: synchronous operation (blocking)

> var ftp = new FtpConnection(\"ftp://localhost\") ; var file = new
> File(\"here.text\") ;
>
> // synchronous mode is the default ftp.get(\"remote.txt\",file) ;
>
> // the operation simply returns when complete file.close() ;
>
> ftp.close() ;
>
> When the property [sync](#_bookmark467) is set to false
> (or [async](#_bookmark458) set to true), the connection
> operation occurs in a background thread while your script continues to
> do other work. The background thread sets the property
> [isComplete](#_bookmark463) to true when the current
> operation has finished. If the operation times out,
> [isComplete](#_bookmark463) is set to true and
> [error](#_bookmark460) is set to
> FtpConnection.errorTimeout.
>
> Only a single connection to the FTP server is allowed; you cannot
> start two operations on the server at the same time. If you do attempt
> to do so, [error](#_bookmark460) is set to
> FtpConnection.errorCommandActive to indicate that the connection is
> waiting to complete a previous operation.
>
> You can define a callback function in the
> [onCallback](#_bookmark464) property, that checks the
> completion status of an asynchronous call, and closes the file and
> connection when it is done. Use the
> [[pump()]{.underline}](#_bookmark474) function to call that function
> periodically from the main thread. Typically, a callback function
> displays and updates a dialog that shows the progress, and allows the
> user to cancel an asynchronous operation before its completion; your
> callback can accomplish this using
> [[cancel()]{.underline}](#_bookmark470).

###### Example: asynchronous operation (non-blocking)

> var file = new File(\"here.text\") ; ftp.sync = false ; // set
> asynchronous mode
>
> // define callback to check status and close when complete
> ftp.onCallback = function(reason,p_log,total) {
>
> if ( this.isComplete ) { file.close();
>
> }
>
> }
>
> // the operation spawns a new thread and returns
> ftp.get(\"remote.txt\",file) ;
>
> // at some time and occasionally
>
> // update progress by calling ftp.onCallback() ftp.pump() ;

### FtpConnection object reference

> []{#\_bookmark453 .anchor}This section provides details of the
> FtpConnection object's properties and functions.

#### FtpConnection object constructor

> \[new\] FtpConnection ( \[_url_\] );

_url_ Optional. The URL to which to connect. The URL specifies the
protocol; for example:

> ftp://localhost sftp://localhost
>
> If not provided, you must set the object's url property.

#### FtpConnection object properties

+--------+---------+-------------------------------------------------+
| active | Boolean | > When true, the connection is active, not |
| | | > passive. Sets passive to false. See the FTP |
| | | > standard (RFC 959) for details. Read-write. |
+========+=========+=================================================+
| ascii | Boolean | > When true, the encoding used to transmit data |
| | | > is ASCII. Default is false. When set to true, |
| | | > sets binary to false. Read-write. |
+--------+---------+-------------------------------------------------+

+------------------------+-----------------+------------------------+
| []{#\_bookmark458 | > Boolean | > When true, the |
| .anchor}async | | > connection is |
| | | > asynchronous. |
| | | > Operations spawn a |
| | | > thread and return |
| | | > immediately to the |
| | | > main thread. The |
| | | > background thread |
| | | > sets isComplete to |
| | | > true when the |
| | | > current operation |
| | | > has finished. If the |
| | | > operation times out, |
| | | > isComplete is set to |
| | | > true and error is |
| | | > set to |
+========================+=================+========================+
| | | > errorTimeout. |
+------------------------+-----------------+------------------------+
| | | > Default is false. |
| | | > When set to true, |
| | | > sets sync to false. |
| | | > Read-write. |
+------------------------+-----------------+------------------------+
| binary | > Boolean | > When true, the |
| | | > encoding used to |
| | | > transmit data is |
| | | > binary. Default is |
| | | > true. When set to |
| | | > true, sets ascii to |
| | | > false. Read-write. |
+------------------------+-----------------+------------------------+
| cd | > String | > Sets the current |
| | | > directory when the |
| | | > connection is open. |
| | | > Default is |
| | | > |
| | | > undefined. |
| | | > Read-write. |
+------------------------+-----------------+------------------------+
| | | > Setting to a |
| | | > directory that does |
| | | > not exist causes a |
| | | > JavaScript error, |
| | | > and sets the error |
| | | > and errorString |
| | | > properties of the |
| | | > object. |
+------------------------+-----------------+------------------------+
| []{#\_bookmark459 | > Array of Date | > The dates of the |
| .anchor}dates | | > files in the current |
| | | > directory. Set by |
| | | > the |
| | | > [[ls()]{.unde |
| | | rline}](#_bookmark473) |
| | | > call. An array |
| | | > corresponding to the |
| | | > [files](#_bookmark461) |
| | | > array, where each |
| | | > member is a |
| | | > JavaScript Date |
| | | > object (as returned |
| | | > by |
| | | > [[date()]{.unde |
| | | rline}](#_bookmark471) |
| | | > for an individual |
| | | > file). Default is |
| | | > undefined. Read |
| | | > only. |
+------------------------+-----------------+------------------------+

> []{#\_bookmark460 .anchor}error Number The most recent error
> encountered in the course of connecting or
>
> executing the operation. All functions set this value before
> returning. A constant value, one of:
>
> FtpConnection.errorNoError FtpConnection.errorCommandActive
> FtpConnection.errorUnknownException FtpConnection.errorUnknown
> FtpConnection.errorOutOfMemory FtpConnection.errorCancelled
> FtpConnection.errorUnknownHost FtpConnection.errorConnectFailed
> FtpConnection.errorTimedOut FtpConnection.errorLoginFailed
> FtpConnection.errorProtocolError FtpConnection.errorUnknownProtocol
> FtpConnection.errorChannelOpen FtpConnection.errorChannelClosed
> FtpConnection.errorOperationPending FtpConnection.errorBadParameters
> FtpConnection.errorResourceExists
> FtpConnection.errorResourceDoesntExist
> FtpConnection.errorResourceInUse FtpConnection.errorAccessDenied
> FtpConnection.errorOutOfDisk FtpConnection.errorLocalIoError
> FtpConnection.errorRemoteIoError FtpConnection.errorNotEmpty
> FtpConnection.errorNotDirectory FtpConnection.errorNotFile
> FtpConnection.errorBadPathname FtpConnection.errorNotImplemented
> FtpConnection.errorNotLocked FtpConnection.errorLocked
> FtpConnection.errorMethodNotAllowed
> FtpConnection.errorResourceRedirected
>
> Default is errorNoError. Read only.
>
> errorString String A description of the most recent error encountered
> in the course of
>
> connecting or executing the operation. Default is "OK." Read only.
>
> []{#\_bookmark461 .anchor}files Array of String
>
> The files in the current directory. Set by the
> [[ls()]{.underline}](#_bookmark473) call. Default is undefined. Read
> only.

+-----------------------+-------------------+-----------------------+
| []{#\_bookmark462 | > Array of Number | > The access |
| .anchor}flags | | > permissions and |
| | | > types for the files |
| | | > in the current |
| | | > directory. Set by |
| | | > the |
| | | > [[ls()]{.under |
| | | line}](#_bookmark473) |
| | | > call. An array |
| | | > corresponding to |
| | | > the |
| | | > [files](#_bookmark461) |
| | | > array, where each |
| | | > member is a logical |
| | | > OR of these |
| | | > constant values: |
+=======================+===================+=======================+
| | | > FtpConnec |
| | | tion.flagOtherExecute |
+-----------------------+-------------------+-----------------------+
| | | > FtpConn |
| | | ection.flagOtherWrite |
+-----------------------+-------------------+-----------------------+
| | | > FtpCon |
| | | nection.flagOtherRead |
+-----------------------+-------------------+-----------------------+
| | | > FtpConnec |
| | | tion.flagGroupExecute |
+-----------------------+-------------------+-----------------------+
| | | > FtpConn |
| | | ection.flagGroupWrite |
+-----------------------+-------------------+-----------------------+
| | | > FtpCon |
| | | nection.flagGroupRead |
+-----------------------+-------------------+-----------------------+
| | | > FtpConnec |
| | | tion.flagOwnerExecute |
+-----------------------+-------------------+-----------------------+
| | | > FtpConn |
| | | ection.flagOwnerWrite |
+-----------------------+-------------------+-----------------------+
| | | > FtpCon |
| | | nection.flagOwnerRead |
+-----------------------+-------------------+-----------------------+
| | | > FtpCon |
| | | nection.flagDirectory |
+-----------------------+-------------------+-----------------------+
| | | > FtpC |
| | | onnection.flagSymLink |
+-----------------------+-------------------+-----------------------+
| | | > Default is |
| | | > undefined. Read |
| | | > only. |
+-----------------------+-------------------+-----------------------+
| []{#\_bookmark463 | > Boolean | > When true, the |
| .anchor}isComplete | | > operation is |
| | | > completed. See |
| | | > [["Syn |
| | | chronous]{.underline} |
| | | > [and]{.underline} |
| | | ](#synchronous-and-as |
| | | ynchronous-operation) |
| | | > [[asyn |
| | | chronous]{.underline} |
| | | > [operation" on page |
| | | > 160]{.underline}] |
| | | (#synchronous-and-asy |
| | | nchronous-operation). |
| | | > Default is true. |
| | | > Read only. |
+-----------------------+-------------------+-----------------------+
| isOpen | > Boolean | > When true, the |
| | | > connection to the |
| | | > FTP server is open. |
| | | > Default is false. |
| | | > Read only. |
+-----------------------+-------------------+-----------------------+
| []{#\_bookmark464 | > Function | > Optional. A |
| .anchor}onCallback | | > callback function |
| | | > to the connection |
| | | > thread for |
| | | > asynchronous mode. |
+-----------------------+-------------------+-----------------------+
| | | > The object stores |
| | | > progress messages |
| | | > from operation |
| | | > thread; to check on |
| | | > the progress, call |
| | | > [[pump()]{.under |
| | | line}](#_bookmark474) |
| | | > on the main thread. |
| | | > The pump() method |
| | | > invokes this |
| | | > function on each |
| | | > stored message, |
| | | > passing the |
| | | > operation status at |
| | | > that point. Within |
| | | > the call, you can |
| | | > use |
| | | > th |
| | | is.[[cancel()]{.under |
| | | line}](#_bookmark470) |
| | | > to halt the |
| | | > asynchronous |
| | | > operation. |
| | | > Read-write. |
+-----------------------+-------------------+-----------------------+
| | | > The function must |
| | | > return undefined, |
| | | > and take these |
| | | > arguments: |
+-----------------------+-------------------+-----------------------+
| | | > function(_ |
| | | reason,p_log,total_) |
| | | > { } |
+-----------------------+-------------------+-----------------------+

> _reason_: The type of progress message. One of:
>
> FtpConnection.reasonStart: The transfer started.
> FtpConnection.reasonComplete: The transfer is complete.
> FtpConnection.reasonFailed: The transfer failed.
>
> FtpConnection.reasonProgress: The transfer is in progress.
> FtpConnection.reasonLog: The operation generated a log message.
>
> _p_log_: Depends on the reason for the message: For a log message,
> the message string.
>
> For a progress message, the current number of bytes transferred.
>
> Otherwise, undefined.
>
> _total_: Depends on the reason for the message:
>
> For a progress message, the total number of bytes to be transferred.
>
> Otherwise undefined.

+-----------------------+-------------------+-----------------------+
| passive | > Boolean | > When true, the |
| | | > connection is |
| | | > passive, not |
| | | > active. See the FTP |
| | | > standard (RFC 959) |
| | | > for details. When |
| | | > set to true, sets |
| | | > active to false. |
| | | > Default is false. |
| | | > |
| | | > Read-write. |
+=======================+===================+=======================+
| password | > String | > The connection |
| | | > password for the |
| | | > FTP server. Set |
| | | > this to override |
| | | > the password given |
| | | > in the URL. Default |
| | | > is undefined. |
| | | > Read-write. |
+-----------------------+-------------------+-----------------------+
| proxy | > String | > Not used. |
+-----------------------+-------------------+-----------------------+
| []{#\_bookmark465 | > String | > The |
| .anchor}renamestyle | | > [[rename()]{.under |
| | | line}](#_bookmark476) |
| | | > function takes a |
| | | > source and |
| | | > destination path |
| | | > and file name, so |
| | | > that it can both |
| | | > move and rename the |
| | | > source object. You |
| | | > can normally |
| | | > specify the source |
| | | > and destination |
| | | > without a path or |
| | | > with a relative |
| | | > path (such as |
| | | > ../myfile.htm). The |
| | | > function interprets |
| | | > the path as |
| | | > relative to the |
| | | > current working |
| | | > directory. This |
| | | > typical case is |
| | | > handled by the |
| | | > default value for |
| | | > this property, |
| | | > \"style1\". |
+-----------------------+-------------------+-----------------------+
| | | > If you connect to |
| | | > an FTP server that |
| | | > cannot parse the |
| | | > \"..\" notation, |
| | | > change this value |
| | | > to \"style2\", and |
| | | > specify both source |
| | | > and destination |
| | | > with absolute |
| | | > paths. |
+-----------------------+-------------------+-----------------------+
| []{#\_bookmark466 | > Array of Number | > The sizes of the |
| .anchor}sizes | | > files in the |
| | | > current directory. |
| | | > Set by the |
| | | > [[ls()]{.under |
| | | line}](#_bookmark473) |
| | | > call. An array |
| | | > corresponding to |
| | | > the |
| | | > [files](#_bookmark461) |
| | | > array, where each |
| | | > member is a number |
| | | > of bytes. Default |
| | | > is undefined. Read |
| | | > only. |
+-----------------------+-------------------+-----------------------+
| []{#\_bookmark467 | > Boolean | > When true, the |
| .anchor}sync | | > connection is |
| | | > synchronous. |
| | | > Operations block |
| | | > the main thread and |
| | | > return when |
| | | > complete. Default |
| | | > is true. When set |
| | | > to true, sets async |
| | | > to false. |
| | | > Read-write. |
+-----------------------+-------------------+-----------------------+
| timeout | > Number | > An integer, the |
| | | > number of seconds |
| | | > to continue |
| | | > attempting the |
| | | > operation before |
| | | > completing with the |
| | | > error message |
| | | > errorTimeout. |
| | | > Default is 5. |
| | | > |
| | | > Read-write. |
+-----------------------+-------------------+-----------------------+
| url | > String | > The URL of the FTP |
| | | > server, and |
| | | > optionally the |
| | | > port, to which to |
| | | > connect. This |
| | | > includes the |
| | | > protocol (FTP or |
| | | > SFTP), and can |
| | | > include a login |
| | | > user name and |
| | | > password in this |
| | | > format: |
+-----------------------+-------------------+-----------------------+
| | | > \[s\]ftp://\[\[_us |
| | | ername_:\]_password_@ |
| | | \]_server_\[:_port_\] |
+-----------------------+-------------------+-----------------------+
| | | > This string must |
| | | > use escape |
| | | > sequences for |
| | | > special characters, |
| | | > such as %20 for |
| | | > space and %40 for |
| | | > @. |
+-----------------------+-------------------+-----------------------+
| | | > Default is |
| | | > undefined. |
| | | > Read-write. |
+-----------------------+-------------------+-----------------------+
| username | > String | > The connection user |
| | | > name for the FTP |
| | | > server. Set this to |
| | | > override the user |
| | | > name given in the |
| | | > URL. Default is |
| | | > undefined, for |
| | | > anonymous FTP. |
| | | > |
| | | > Read-write. |
+-----------------------+-------------------+-----------------------+

#### FtpConnection object functions

> All functions set the error property to indicate the status of the
> operation when completed (errorNoError on success).
>
> []{#\_bookmark470 .anchor}cancel()
>
> _ftpObj_.cancel ();
>
> Cancels the current operation, if it is being performed
> asynchronously. See ["Synchronous
> andpage
> 160](#synchronous-and-asynchronous-operation).
>
> Returns true on success.
>
> close()
>
> _ftpObj_.close ();
>
> Terminates the open connection. Deleting the object also closes the
> connection, but not until JavaScript garbage-collects the object. The
> connection might stay open longer than you wish if you do not close it
> explicitly. There are a limited number of open connections available;
> failing to close connections can make you unable to open a new one.
>
> Returns true if the connection was closed, false on I/O errors.
>
> chmod()
>
> _ftpObj_.chmod (_remote_\[, _flags_\]);
>
> _remote_ String. The name of the remote file-system object.
>
> _flags_ Optional. The new permissions. A logical OR of the
> [flags](#_bookmark462) constants. Changes the
> permissions and/or type of a file-system object on the FTP server.
> Returns true on success.
>
> cwd()
>
> _ftpObj_.cwd (_remote_);
>
> _remote_ String. The name of the remote directory. Changes the current
> directory on the FTP server.
>
> Returns true on success.
>
> []{#\_bookmark471 .anchor}date()
>
> _ftpObj_.date (_remote_);
>
> _remote_ String. The name of the remote file.
>
> Retrieves the date information for a file-system object on the FTP
> server.
>
> Returns an array of three JavaScript Date objects, for the creation,
> modification, and most recent access dates of the given file. If a
> date is unavailable, the corresponding array member is undefined. See
> also [dates](#_bookmark459).
>
> Returns false if all dates are unavailable; as when the file-system
> object does not exist, is a directory, or is a link that cannot be
> resolved.
>
> del()
>
> _ftpObj_.del (_remote_);
>
> _remote_ String. The name of the remote file-system object. Deletes a
> file-system object on the FTP server.
>
> Returns true on success.
>
> exists()
>
> _ftpObj_.exists (_remote_);
>
> _remote_ String. The name of the remote file-system object. Reports
> whether a file-system object exists on the FTP server.
>
> Returns true if the object exists on the server, false if it does not
> exist or is a link that cannot be resolved.
>
> []{#\_bookmark472 .anchor}get()
>
> _ftpObj_.get (_remote, file_);
>
> _remote_ String. The name of the remote file containing data to
> transfer.
>
> _file_ A File object, the local file in which to receive the data.
> Transfers date from a file on the FTP server to a local file.
>
> Returns true on success.
>
> isDir()
>
> _ftpObj_.isDir (_remote_);
>
> _remote_ String. The name of the remote file-system object. Reports
> whether a file-system object on the FTP server is a directory. Returns
> true if the file is a directory on the server, false otherwise.
>
> []{#\_bookmark473 .anchor}ls()
>
> _ftpObj_.ls ();
>
> Retrieves information about the current directory, and returns it in
> the [files](#_bookmark461),
> [dates](#_bookmark459),
> [sizes](#_bookmark466), and
> [flags](#_bookmark462) properties of this object.
>
> Returns true on success, false on I/O errors.
>
> mkdir()
>
> _ftpObj_.mkdir (_remote_);
>
> _remote_ String. The name of the new remote directory. Creates a
> directory on the FTP server.
>
> Returns true on success.
>
> open()
>
> _ftpObj_.open ();
>
> Opens the FTP connection explicitly. This in not typically needed;
> calling a function to perform an operation opens the connection if
> necessary.
>
> Returns true if the connection was successfully opened, false on I/O
> errors.
>
> []{#\_bookmark474 .anchor}pump()
>
> _ftpObj_.pump ();
>
> Executes the callback procedure defined in
> [onCallback](#_bookmark464) on all progress messages
> that have been received since the last call to this function.
>
> Use this function in the main thread to invoke the callback, in order
> to check on the progress of an asynchronous operation. It is not
> required, however; the asynchronous operation continues to progress on
> the spawned thread, whether or not you make this call.
>
> Returns true on success, false on I/O errors.
>
> []{#\_bookmark475 .anchor}put()
>
> _ftpObj_.get (_file, remote_\[, _putMode_\]);
>
> _file_ A File object, the local file containing data to transfer.
> _remote_ String. The name of the remote file in which to receive the
> data. _putMode_ Optional. The style of transfer, one of these
> constants:
>
> FtpConnection.putModeTruncateOrCreate (default) --- Allows creation of
> the target file, and truncates an existing file to the size of data
> written. Does not lock the target file.
>
> FtpConnection.putModeExclusive --- Locks the target file during the
> write operation.
>
> Transfers data from a local file to a file on the FTP server.
> Overwrites the target file, if it already exists. Returns true on
> success.
>
> []{#\_bookmark476 .anchor}rename()
>
> _ftpObj_.rename (_from, to_);
>
> _from_ String. The path and file name of the source object in the
> remote file system.
>
> _to_ String. The path and file name of the destination object in the
> remote file system.
>
> Moves and changes the name of a file-system object on the FTP server.
> The path can be absolute, or (in most cases) relative to the current
> working directory; see [renamestyle](#_bookmark465).
>
> Returns true on success.
>
> rmdir()
>
> _ftpObj_.rmdir (_remote_);
>
> _remote_ String. The name of the remote directory. Deletes a directory
> on the FTP server.
>
> Returns true on success.
>
> size()
>
> _ftpObj_.size (_remote_);
>
> _remote_ String. The name of the remote file-system object. Retrieves
> the size of a file-system object on the FTP server.
>
> Returns the number of bytes in the file, or -1 if there is no such
> file, or if the object is a directory or a link that cannot be
> resolved.

## HttpConnection object

> []{#\_bookmark478 .anchor}Supports the HTTP and HTTPS protocols for
> Internet communication. The object allows your script to open a
> connection to a remote computer that acts as an HTTP server, send an
> HTTP request, and receive the response.
>
> To use the HttpConnection object, you must load the Web Access library
> (webaccesslib) into JavaScript as an ExternalObject. See ["Loading
> the Web Access library"on page
> 159](#loading-the-web-access-library).
>
> The HttpConnection object can open only one connection to the
> internet. If you call [[execute()]{.underline}](#_bookmark512) before
> the current operation is complete
> ([status](#_bookmark506) is
> HttpConnection.statusCompleted), the current operation is terminated.

### Requests and responses

> []{#\_bookmark480 .anchor}The [[method](#_bookmark499)
> property of the HttpConnection object determines the type of
> operation: GET, PUT, POST, HEAD, or DELETE. The GET operation is the
> default.
>
> The [request](#_bookmark504) and
> [response](#_bookmark502) properties can contain File
> objects or strings.

- []{#bookmark481 .anchor}Request and response files

> The default encoding for both request and response files is BINARY;
> you can specify another encoding in the File object; see the
> _JavaScript Tools Guide_ for information on File- and Folder-supported
> encoding names. (The HttpConnection properties
> [requestencoding](#_bookmark505) and
> [responseencoding](#_bookmark503) affect only string
> values, not files.)
>
> If the file is not open, it will be opened for reading (for a request)
> or for writing (for a response). Request and response files are not
> closed automatically; when there are no remaining JavaScript
> references to a file, it is eventually closed by the garbage
> collector.

- Request and response strings

> When the request is a string, it is converted to binary as specified
> by the [requestencoding](#_bookmark505) value. The
> default encoding is UTF-8.
>
> When the server response is anything other than a file, it is
> converted to a string using the
> [responseencoding](#_bookmark503) value; the default is
> ASCII.

###### Getting a file

> var http = new
> HttpConnection(\"<http://www.clanmills.com/robin.shtml>\") ;
> http.response = new File(\"/c/temp/robin.shtml\") ;
>
> // Get is the default method http.execute() ; http.response.close() ;

###### Posting a string

> var http = new HttpConnection(\"<http://localhost/perlasp/wform.asp>\"
> ) ; http.request = \"Yourname=Fred Smith\" ;
>
> http.method = \"POST\"
>
> http.execute() ;

###### Adding request headers and printing response headers

> var http = new
> HttpConnection(\"<http://localhost/perlasp/httpvar.asp>\") ;
> http.requestheaders = \[\"MyHeader\" , \"MyValue\"\] ;
>
> http.execute() ;
>
> http.response = new File(\"/c/temp/dumpvars.txt\") ; var a =
> http.responseheaders ;
>
> for ( i = 0 ; i \< a.length/2 ; i++ ) { alert(a\[i\*2\] + \" =\> \" +
> a\[i\*2+1\]) ;
>
> }

### Asynchronous operations

> []{#\_bookmark484 .anchor}The HttpConnection object can operate
> asynchronously; when you set [[async](#_bookmark496) to
> true (or [sync](#_bookmark507) to false) the operation
> is performed in the background, while your script continues to do
> other work. However, the asynchronous behavior is not automatic. You
> must execute the [[pump()]{.underline}](#_bookmark513) method
> periodically to increment the progress of the operation, and
> periodically test the [status](#_bookmark506) and
> [lastread](#_bookmark498) properties. After the
> [status](#_bookmark506) is
> HttpConnection.statusCompleted, you must continue to call
> [[pump()]{.underline}](#_bookmark513) to transfer all bytes from the
> server to your object, until [lastread](#_bookmark498)
> is negative.

###### Blocking (synchronous use)

> var http = new HttpConnection(\"<http://someserver/index.html>\") ;
> http.response = new File(\"/c/index.html\") ;
>
> http.execute() ;

###### Not blocking (asynchronous call)

> var http = new HttpConnection(\"<http://some.website/file.html>\") ;
> http.async = true ; // or http.sync = false ;
>
> http.onCallback = function() { with ( this ) {
>
> if ( status == HttpConnection.statusComplete && http.lastread \< 0 ) {
> alert(\"done\") ;
>
> this.close() ;
>
> }
>
> }
>
> return HttpConnection.actionContinue ;
>
> }
>
> http.execute() ; // returns immediately
>
> //
>
> // . . . Somewhere and occasionally
>
> if ( http.status \<= HttpConnection.statusComplete && http.lastread
> \>= 0 ) http.pump() ;

### Authentication

> []{#\_bookmark488 .anchor}You can specify a user login name and
> password in the URL using the standard syntax:
>
> http://\[*username*:\]\[*password*@\]*server*\[:*port*\]/*path*?*querystring*
>
> Use an escape sequence for special characters, such as %20 for space
> and %40 for @.
>
> You can override the user name and password specified in the URL by
> setting the [[username](#_bookmark508) and
> [password](#_bookmark501) on the HttpConnection object.
>
> If the connection is challenged by the server and authentication is
> required, the operation invokes your
> [onAuthentication](#_bookmark500) callback function. You
> can use this set the [username](#_bookmark508) and
> [password](#_bookmark501) properties; you cannot use it
> to change the URL.

###### Authentication callback

> var http = new
> HttpConnection(\"[http://www.website.com](http://www.website.com/)\")
> ; http.onAuthentication= function (host,realm,isProxy,retries,
>
> currentUser,currentPassword) {
>
> alert (\"onHttpAuthentication CALLED\" + \\n + \"host = \" + host +
> \\n +
>
> \"realm = \" + realm + \\n + \"isProxy = \" + isProxy + \\n +
> \"retries = \" + retrie + \\n +
>
> \"currentUser = \" + currentUser + \\n + \"currentPassword = \" +
> currentPassword ) ;
>
> this.username = \"therealusername\" ; this.password = \"thepassword\"
> ;
>
> return HttpConnection.actionContinue ;
>
> }
>
> http.execute() ;

### HttpConnection object reference

> []{#\_bookmark491 .anchor}This section provides details of the
> HttpConnection object's properties and functions.

#### HttpConnection object constructor

> \[new\] HttpConnection ( \[_url_\] );

_url_ Optional. The URL to which to connect. The URL specifies the
protocol; for example:

> [http://localhost](http://localhost/) https://localhost
>
> If not provided, you must set the object's url property.

#### HttpConnection object properties

+----------------------------+---------+----------------------------+
| []{#\_bookmark496 | Boolean | > When true, the |
| .anchor}async | | > connection is |
| | | > asynchronous. Operations |
| | | > spawn a thread and |
| | | > return immediately to |
| | | > the main thread. The |
| | | > background thread sets |
| | | > isComplete to true when |
| | | > the current operation |
| | | > has finished. If the |
| | | > operation times out, |
| | | > isComplete is set to |
| | | > true and |
+============================+=========+============================+
| | | > error is set to |
| | | > errorTimeout. |
+----------------------------+---------+----------------------------+
| | | > Default is false. When |
| | | > set to true, sets sync |
| | | > to false. Read-write. |
+----------------------------+---------+----------------------------+
| chunked | Boolean | > When true, send the |
| | | > response using chunked |
| | | > encoding. Default is |
| | | > true. Read-write. |
+----------------------------+---------+----------------------------+

+---------------------------+-----------+---------------------------+
| bytesReceived | > Number | > The number of bytes |
| | | > received from the HTTP |
| | | > server. -1 when there |
| | | > is no connection. |
+===========================+===========+===========================+
| bytesSent | > Number | > The number of bytes |
| | | > transmitted to the HTTP |
| | | > server. -1 when there |
| | | > is no connection. |
+---------------------------+-----------+---------------------------+
| []{#\_bookmark497 | > Number | > The error status of the |
| .anchor}fault | | > connection. Read only. |
| | | > A constant value, one |
| | | > of: |
+---------------------------+-----------+---------------------------+
| | | > |
| | | HttpConnection.faultNone |
+---------------------------+-----------+---------------------------+
| | | > HttpConn |
| | | ection.faultUserCancelled |
+---------------------------+-----------+---------------------------+
| | | > HttpCon |
| | | nection.faultNoConnection |
+---------------------------+-----------+---------------------------+
| | | > HttpCon |
| | | nection.faultHostNotFound |
+---------------------------+-----------+---------------------------+
| | | > HttpC |
| | | onnection.faultNetTimeout |
+---------------------------+-----------+---------------------------+
| | | > HttpConn |
| | | ection.faultClientTimeout |
+---------------------------+-----------+---------------------------+
| | | > HttpCon |
| | | nection.faultMalformedUrl |
+---------------------------+-----------+---------------------------+
| | | > HttpConnec |
| | | tion.faultInvalidResponse |
+---------------------------+-----------+---------------------------+
| | | > HttpCon |
| | | nection.faultUnauthorized |
+---------------------------+-----------+---------------------------+
| | | > Http |
| | | Connection.faultRelocated |
+---------------------------+-----------+---------------------------+
| isOpen | > Boolean | > When true, the |
| | | > connection to the FTP |
| | | > server is open. Default |
| | | > is false. Read only. |
+---------------------------+-----------+---------------------------+
| []{#\_bookmark498 | > Number | > The number of bytes |
| .anchor}lastread | | > read from the HTTP |
| | | > server during the last |
| | | > call to |
| | | > [[pump()]{.un |
| | | derline}](#_bookmark513). |
| | | > Negative when execution |
| | | > is completely finished. |
| | | > Default is 0. Read |
| | | > only. |
+---------------------------+-----------+---------------------------+
| []{#\_bookmark499 | > String | > The HTTP method. |
| .anchor}method | | > Read-write. One of: |
+---------------------------+-----------+---------------------------+
| | | > GET (default) |
+---------------------------+-----------+---------------------------+
| | | > PUT |
+---------------------------+-----------+---------------------------+
| | | > HEAD |
+---------------------------+-----------+---------------------------+
| | | > POST |
+---------------------------+-----------+---------------------------+
| | | > DELETE |
+---------------------------+-----------+---------------------------+
| mime | > String | > The MIME type of the |
| | | > request. Default is |
| | | > text/html. Read-write. |
+---------------------------+-----------+---------------------------+
| network | > Number | > The network status of |
| | | > the connection. Read |
| | | > only. A constant value, |
| | | > one of: |
+---------------------------+-----------+---------------------------+
| | | > H |
| | | ttpConnection.networkIdle |
+---------------------------+-----------+---------------------------+
| | | > HttpCon |
| | | nection.networkConnecting |
+---------------------------+-----------+---------------------------+
| | | > HttpConnection.net |
| | | workSendingRequestHeaders |
+---------------------------+-----------+---------------------------+
| | | > HttpConnection. |
| | | networkSendingRequestBody |
+---------------------------+-----------+---------------------------+
| | | > HttpConnectio |
| | | n.networkAwaitingResponse |
+---------------------------+-----------+---------------------------+
| | | > HttpConnection.network |
| | | ReceiveingResponseHeaders |
+---------------------------+-----------+---------------------------+
| | | > HttpConnection.netw |
| | | orkReceiveingResponseBody |
+---------------------------+-----------+---------------------------+
| | | > HttpConnectio |
| | | n.networkResponseComplete |
+---------------------------+-----------+---------------------------+
| | | > HttpCo |
| | | nnection.networkProxyIdle |
+---------------------------+-----------+---------------------------+
| | | > HttpConnecti |
| | | on.networkProxyConnecting |
+---------------------------+-----------+---------------------------+
| | | > HttpConnect |
| | | ion.networkProxyConnected |
+---------------------------+-----------+---------------------------+

> []{#\_bookmark500 .anchor}onAuthentication Function Optional. A
> callback function invoked by the server if authentication
>
> fails using the username and password passed with the original URL.
> Use this method to override the username and password by setting
> this.[[username](#_bookmark508) and
> this.[password](#_bookmark501).
>
> The callback function takes these arguments:
>
> _host_: the server name string.
>
> _realm_: a string provided by the server. _isProxy_: true if the
> server is a proxy. _retries_: always 1
>
> _currentUser_: the user name string already presented to the server.
> _currentPassword_: the password string already presented to the
> server.
>
> The function should return HttpConnection.actionContinue.

+------------------------+------------------+------------------------+
| onCallback | > Function | > Optional. A callback |
| | | > function for the |
| | | > operation being |
| | | > executed. It is |
| | | > automatically |
| | | > invoked periodically |
| | | > during synchronous |
| | | > operations. For an |
| | | > asynchronous |
| | | > operation, each call |
| | | > to |
| | | > [[pump()]{.unde |
| | | rline}](#_bookmark513) |
| | | > invokes this |
| | | > function. |
| | | > Read-write. |
+========================+==================+========================+
| | | > You can use this |
| | | > function to monitor |
| | | > the progress and |
| | | > check the completion |
| | | > status in this |
| | | > object (the value of |
| | | > this in the |
| | | > function), in order |
| | | > to provide progress |
| | | > feedback in the user |
| | | > interface and allow |
| | | > cancellation of long |
| | | > operations. Use |
| | | > |
| | | this.[[close()]{.unde |
| | | rline}](#_bookmark511) |
| | | > in this function to |
| | | > halt the operation. |
+------------------------+------------------+------------------------+
| | | > The function takes |
| | | > no arguments. It |
| | | > should return |
| | | > HttpCon |
| | | nection.actionContinue |
| | | > or |
| | | > HttpCo |
| | | nnection.actionCancel. |
+------------------------+------------------+------------------------+
| []{#\_bookmark501 | > String | > The connection |
| .anchor}password | | > password for the |
| | | > HTTP server. Set |
| | | > this to override the |
| | | > password given in |
| | | > the URL. Default is |
| | | > undefined, for an |
| | | > unsecured or |
| | | > anonymous |
| | | > connection. |
| | | > Read-write. |
+------------------------+------------------+------------------------+
| proxy | > String | > The HTTP proxy |
| | | > server. A string |
| | | > containing an IP |
| | | > address and port, or |
| | | > the empty string to |
| | | > use the |
| | | > operating-system |
| | | > default, or |
| | | > undefined (the |
| | | > default) for no |
| | | > proxy server. |
| | | > Read-write. |
+------------------------+------------------+------------------------+
| redirect | > Number | > The maximum number |
| | | > of redirection tries |
| | | > for the request. |
+------------------------+------------------+------------------------+
| | | > If the server |
| | | > redirects the |
| | | > request to another |
| | | > server (returning a |
| | | > response status of |
| | | > 301 or 302), this |
| | | > connection resends |
| | | > the request to that |
| | | > server. If it |
| | | > redirects this |
| | | > number of times |
| | | > without success, it |
| | | > returns an error. |
+------------------------+------------------+------------------------+
| | | > Default is 5. |
| | | > Read-write. |
+------------------------+------------------+------------------------+
| []{#\_bookmark502 | > String or File | > The response to the |
| .anchor}response | | > request, received |
| | | > from the HTTP |
| | | > server. Read only. |
+------------------------+------------------+------------------------+
| []{#\_bookmark503 | > String | > The encoding to use |
| .a | | > in converting the |
| nchor}responseencoding | | > request to a string. |
| | | > Default is |
| | | > |
| | | > ascii. Read-write. |
+------------------------+------------------+------------------------+

+-----------------------+-------------------+-----------------------+
| responseheaders | > Array of String | > The response |
| | | > headers, an array |
| | | > of key-value pairs. |
| | | > Read only. |
+=======================+===================+=======================+
| responseStatus | > Number | > The response |
| | | > status, an HTTP |
| | | > Response code (such |
| | | > as 200 for OK, or |
| | | > 404 for "file not |
| | | > found") or -1 if no |
| | | > status has been |
| | | > received. Read |
| | | > only. |
+-----------------------+-------------------+-----------------------+
| []{#\_bookmark504 | > String or File | > The request to |
| .anchor}request | | > execute on the HTTP |
| | | > server. Read-write. |
+-----------------------+-------------------+-----------------------+
| []{#\_bookmark505 | > String | > The encoding to use |
| .a | | > in converting the |
| nchor}requestencoding | | > request string to |
| | | > binary. Default is |
| | | > utf8. Read-write. |
+-----------------------+-------------------+-----------------------+
| requestheaders | > Array of String | > The request |
| | | > headers, an array |
| | | > of key-value pairs. |
| | | > Read-write. |
+-----------------------+-------------------+-----------------------+
| snooze | > Number | > A number of |
| | | > milliseconds to |
| | | > wait before |
| | | > checking the |
| | | > completion status |
| | | > of synchronous |
| | | > operations. Default |
| | | > is 10. Read-write. |
+-----------------------+-------------------+-----------------------+
| []{#\_bookmark506 | > Number | > The execution |
| .anchor}status | | > status of the |
| | | > request. Read only. |
| | | > A constant value, |
| | | > one of: |
+-----------------------+-------------------+-----------------------+
| | | > Http |
| | | Connection.statusIdle |
+-----------------------+-------------------+-----------------------+
| | | > HttpCon |
| | | nection.statusRunning |
+-----------------------+-------------------+-----------------------+
| | | > HttpConne |
| | | ction.statusCompleted |
+-----------------------+-------------------+-----------------------+
| | | > HttpConne |
| | | ction.statusSuspended |
+-----------------------+-------------------+-----------------------+
| | | > HttpCo |
| | | nnection.statusFailed |
+-----------------------+-------------------+-----------------------+
| []{#\_bookmark507 | > Boolean | > When true, the |
| .anchor}sync | | > connection is |
| | | > synchronous. |
| | | > Operations block |
| | | > the main thread and |
| | | > return when |
| | | > complete. Default |
| | | > is true. When set |
| | | > to true, sets async |
| | | > to false. |
| | | > Read-write. |
+-----------------------+-------------------+-----------------------+
| timeout | > Number | > An integer, the |
| | | > number of seconds |
| | | > to continue |
| | | > attempting to make |
| | | > the connection |
| | | > before completing |
| | | > with the message |
| | | > faultNetTimeout. |
| | | > Default is 5. |
| | | > Read-write. |
+-----------------------+-------------------+-----------------------+
| url | > String | > The URL of the HTTP |
| | | > server, and |
| | | > optionally the |
| | | > port, to which to |
| | | > connect. This |
| | | > includes the |
| | | > protocol (HTTP or |
| | | > HTTPS), and can |
| | | > include a login |
| | | > user name and |
| | | > password in this |
| | | > format: |
+-----------------------+-------------------+-----------------------+
| | | > http\[s\]://\[\[_us |
| | | ername_:\]_password_@ |
| | | \]_server_\[:_port_\] |
+-----------------------+-------------------+-----------------------+
| | | > Default is |
| | | > undefined. |
| | | > Read-write. |
+-----------------------+-------------------+-----------------------+
| []{#\_bookmark508 | > String | > The connection user |
| .anchor}username | | > name for the HTTP |
| | | > server. Set this to |
| | | > override the user |
| | | > name given in the |
| | | > URL. Default is |
| | | > undefined, for an |
| | | > anonymous |
| | | > connection. |
| | | > Read-write. |
+-----------------------+-------------------+-----------------------+

#### HttpConnection object functions

> []{#\_bookmark511 .anchor}close()
>
> _httpObj_.close ();
>
> Terminates the open connection. Deleting the object also closes the
> connection, but not until JavaScript garbage-collects the object. The
> connection might stay open longer than you wish if you do not close it
> explicitly. There are a limited number of open connections available;
> failing to close connections can make you unable to open a new one.
>
> Returns true if the connection was closed, false on I/O errors.
>
> []{#\_bookmark512 .anchor}execute()
>
> _httpObj_.execute ();
>
> Opens a connection if necessary, executes the request on the HTTP
> server, and receives the response.
>
> Returns true on success, false on errors. Check
> [fault](#_bookmark497) for the error c ode.
>
> []{#\_bookmark513 .anchor}pump()
>
> _httpObj_.pump ();
>
> Increments the progress of an asynchronous connection. You must call
> this function periodically to advance the progress of an asynchronous
> operation.
>
> Executes the callback procedure defined in
> [onCallback](#_bookmark464), passing no arguments.
> Returns true on success, false on I/O errors.

# Index

##### A

> App object
>
> [about, 14](#_bookmark22) [functions, 17](#app-functions) [properties, 14](#app-properties)
>
> applications
>
> [Event object types, 49](#_bookmark115) [preferences, 86,](#preferences-object) [91](#preferencesdialog-object)
>
> asynchronous operations [FTP, 160](#_bookmark449)
>
> [HTTP, 171](#_bookmark484)
>
> [authentication, 171](#_bookmark488)

##### B

> background tasks [creating, 141](#_bookmark368)
>
> [monitoring progress, 147](#progressoperator-object) [badge icons, 110](#_bookmark278)
>
> base classes
>
> [Operator, 141](#_bookmark368) [Panelette, 83](#panelette-base-class)
>
> [bibliography, 8](#where-to-go-for-more-information)
>
> [binary files, transferring, 159](#_bookmark447) BitmapData object
>
> [about, 25](#_bookmark60) [constructors, 25](#bitmapdata-object-constructors) [functions, 27](#bitmapdata-functions) [properties, 26](#bitmapdata-properties)
>
> [Bridge menu commands, 64](#bridge-menu-items-mac-os-only) browser
> windows
>
> [adding tabbed palettes, 94](#tabbedpalette-object) [as document object, 31](#document-object)

##### C

> cache
>
> [collecting node data, 112](#_bookmark286) [status, 111](#_bookmark282)
>
> [CacheData object, 111](#cachedata-object) [CacheElement object, 112](#cacheelement-object) classes
>
> [MenuElement, 60](#menuelement-object) [Operand, 140](#operand-object) > [Operator, 141](#operator-class) [Panelette, 83](#panelette-base-class)
>
> [Color object, 30](#_bookmark68) colors
>
> [creating, 30](#_bookmark70) [editing, 25](#_bookmark60)
>
> commands
>
> [adding to menus, 60](#menuelement-object) [Bridge menu, 64](#bridge-menu-items-mac-os-only) [Content pane, 71,](#_bookmark184) > [72](#_bookmark188) [Edit menu, 65](#_bookmark173) [Favorites palette, 71,](#thumbnail-context-menu-submenus) [72](#_bookmark185) [File menu, 64](#_bookmark172)
>
> [Folders palette, 72](#_bookmark186) [Help menu, 69](#_bookmark179)
>
> [Keywords context menu, 75](#_bookmark189) [Label menu, 67](#_bookmark176)
>
> [menu identifiers, 63](#adobe-bridge-menu-and-command-identifiers) > [Palette context menu, 78](#metadata-object) [Stacks menu, 67](#_bookmark175) [submenu identifiers, 64](#menu-bar-submenu-and-command-identifiers) [Tools menu, 68](#_bookmark177)
>
> [View menu, 66](#_bookmark174) [Window menu, 69](#_bookmark178)
>
> communication [authentication, 171](#_bookmark488) [external tools, 159](#_bookmark440) [HTTP, 170](#_bookmark478)
>
> [comparison operator, 151](#bookmark407) Content pane
>
> [icons, 98](#_bookmark249)
>
> [menu commands, 71,](#_bookmark184) [72](#_bookmark188) [Context menu identifiers, 63](#_bookmark166) [conventions, typographic, 8](#typographical-conventions) core infosets
>
> [extension support, 113](#_bookmark294) [names and descriptions, 132](#core-infosets)

##### D

> data
>
> [associating types with node-data values, 138](#infosetmemberdescription-object) [defined for nodes, 130](#infoset-object)
>
> dialogs
>
> [Find, 140,](#operand-object) [153](#searchdefinition-object)
>
> [Preferences, 86,](#preferences-object) > [91](#preferencesdialog-object)
>
> [Document events, additional actions, 50](#document-events) Document
> object
>
> [about, 31](#document-object)

**177**

> [constructor, 31](#document-object-constructor) [functions, 43](#document-functions) [properties, 31](#document-properties)
>
> [documents, reference materials, 8](#where-to-go-for-more-information) > [dynamic text values, 84](#bookmark211)
>
> [thumbnail objects, 98](#thumbnail-object-constructor) [File menu commands, 64](#_bookmark172) File object
>
> [using with FtpConnection object, 159](#_bookmark447)
>
> files

##### E

> [Edit menu commands, 65](#_bookmark173) [equality operator, 99](#multiple-references-to-the-same-node) [equals operator, 150](#_bookmark399) Event object
>
> [about, 48](#event-object) [properties, 48](#event-properties) [types, 49](#event-object-types)
>
> events
>
> [application, 49](#app-events) [document, 50](#document-events)
>
> [in Preferences dialog, 91](#preferencesdialog-object) > [PreferencesDialog, 52](#preferencesdialog-events) [target objects, 48](#_bookmark106) [thumbnail, 51](#thumbnail-events)
>
> [types, 49](#event-object-types)
>
> [user interactions, 48](#event-object) example code
>
> [asynchronous operation, 161](#example-asynchronous-operation-non-blocking) [authentication callback, 172](#authentication-callback) [blocking and not blocking, 171](#blocking-synchronous-use) [HTTP requests, 170](#getting-a-file) > [metadata access, 78](#example-code)
>
> [node-handling extensions, 113](#code-examples) [SDK, 120](#_bookmark314)
>
> [synchronous operation, 160](#example-synchronous-operation-blocking) > [thumbnail creation, 98](#examples-of-thumbnail-creation)
>
> [exists operator, 150](#_bookmark399)
>
> [ExtendScript objects and utilities, 10](#bookmark15) ExtensionHandler
> object
>
> [about, 113](#extensionhandler-object) [constructor, 113](#extensionhandler-object-constructor) [methods, 114](#extensionhandler-methods) [properties, 114](#extensionhandler-properties)
>
> [ExtensionModel object, 120](#extensionmodel-object) extensions
>
> [implementing, 120](#_bookmark312) [node handling, 141](#operator-class) [node model, 113](#extensionhandler-object)

##### F

> [Favorites object, 54](#favorites-object) Favorites palette
>
> [navigation nodes, 54](#favorites-object) [thumbnail menu commands, 72](#_bookmark186)
>
> [metadata, 78](#metadata-object) [thumbnail objects, 98](#thumbnail-object) [transferring binary, 159](#_bookmark447)
>
> [FilterDescription object, 128](#filterdescription-object) [filters, customizing, 128](#_bookmark337) Find dialog
>
> [operand objects, 140](#operand-object) [populating, 153](#searchdefinition-object)
>
> [Flyout menu identifiers, 64](#_bookmark167)
>
> [Folders pane thumbnail menu commands, 71,](#_bookmark183) > [72](#_bookmark187) [folders, thumbnail objects, 98](#thumbnail-object)
>
> [fonts used in this guide, 8](#typographical-conventions)
>
> [framework, node-handling extensions, 120](#_bookmark312)
> FtpConnection object
>
> [about, 159](#_bookmark445) [constructor, 161](#ftpconnection-object-constructor) [functions, 166](#ftpconnection-object-functions) [properties, 161](#ftpconnection-object-properties) [reference, 161](#_bookmark453)
>
> [synchronous and asynchronous operations, 160](#_bookmark449)
>
> [using File objects, 159](#_bookmark447) [functions, global, 17](#app-functions)

##### G

> [global functions, 17](#app-functions) [global information, 14](#_bookmark22)

##### H

> handlers
>
> [immediate operations, 114](#_bookmark303) [long-running operations, 116](#long-running-handler-operations) [method types, 114](#_bookmark303)
>
> [Help menu commands, 69](#_bookmark179) HttpConnection object
>
> [about, 170](#_bookmark478)
>
> [asynchronous operations, 171](#_bookmark484) [authentication, 171](#_bookmark488) [constructor, 172](#httpconnection-object-constructor)
>
> [functions, 176](#httpconnection-object-functions) [properties, 172](#httpconnection-object-properties) [reference, 172](#_bookmark491)
>
> [requests and responses, 170](#_bookmark480)

##### I

> [IconListPanelette object, 57](#iconlistpanelette-object) identifiers
>
> [commands, 64](#menu-bar-submenu-and-command-identifiers) [menu, 63](#adobe-bridge-menu-and-command-identifiers)
>
> [identity operator, 99](#multiple-references-to-the-same-node) [image file metadata, 78](#metadata-object) [images, editing, 25](#_bookmark60) immediate operations
>
> [handler, 114](#_bookmark303) [model, 121](#_bookmark319)
>
> Infoset object
>
> [about, 130](#infoset-object) [constructor, 130](#infoset-object-constructor) [core infosets, 132](#core-infosets) > [functions, 131](#infoset-functions) [properties, 130](#infoset-properties)
>
> [InfosetMemberDescription object, 138](#infosetmemberdescription-object) InspectorPanel object
>
> [about, 58](#inspectorpanel-object) [constructor, 58](#inspectorpanel-constructor) [functions, 59](#inspectorpanel-functions) [properties, 58](#inspectorpanel-properties)

##### J

> JavaScript
>
> [additional resources, 8](#where-to-go-for-more-information) [equality operator, 99](#multiple-references-to-the-same-node) [inserting, 84](#bookmark212)
>
> [standards information URL, 9](#_bookmark10)

##### K

> [Keywords context menu commands, 75](#_bookmark189)

##### L

> [Label menu commands, 67](#_bookmark176) libraries
>
> [Web Access, 159](#_bookmark441) long-running operations
>
> [handler, 116](#long-running-handler-operations) [model, 126](#long-running-model-operations)

##### M

> Mac OS
>
> [compiled library files, 159](#bookmark443) [main thread, blocking, 141](#_bookmark368) [menubar menu identifiers, 63](#_bookmark164)
> MenuElement object
>
> [about, 60](#menuelement-object) [functions, 60](#menuelement-class-functions) [properties, 61](#menuelement-properties)
>
> menus
>
> [commands,](#_bookmark170) _See_ commands [extending, 60](#menuelement-object)
>
> [identifiers, 63](#adobe-bridge-menu-and-command-identifiers) Metadata
> object
>
> [about, 78](#metadata-object) [example code, 78](#example-code) > [functions, 80](#metadata-functions) [properties, 79](#metadata-properties)
>
> [metadata, organizing, 78](#_bookmark193) [modal operations, 141](#operator-class) [ModalOperator object, 139](#modaloperator-object) models
>
> [immediate operations, 121](#_bookmark319) [long-running operations, 126](#long-running-model-operations) [operation types, 121](#_bookmark319)
>
> [modifiers, scope, 149](#scope-object)

##### N

> [namespaces, 78](#_bookmark193) NavBar object
>
> [about, 81](#navbar-object) [functions, 82](#navbar-functions) > [properties, 81](#navbar-properties)
>
> [navigation bars, configuring, 81](#navbar-object) nodes
>
> [about, 98](#thumbnail-object) [displaying, 120](#_bookmark313)
>
> [extending capability, 108](#_bookmark275) [extending model, 113](#_bookmark292) [extension framework, 120](#_bookmark312) > [implementing extensions, 141](#operator-class) [multiple references, 99](#multiple-references-to-the-same-node) [scope modifier, 149](#scope-object)
>
> [search criteria, 151](#_bookmark408) [searches, 140,](#operand-object) [148](#rank-object) [sorting, 157](#sortcriterion-object)
>
> [target container, 155](#searchspecification-object)

##### O

> objects
>
> [App, 14](#_bookmark22) [application, 14](#_bookmark22) [BitmapData, 25](#_bookmark60) [CacheData, 111](#cachedata-object) [CacheElement, 112](#cacheelement-object) [color, 30](#_bookmark68) [Document, 31](#document-object)
>
> [DOM summary, 10](#_bookmark16) [Event, 48](#event-object) > [ExtensionHandler, 113](#extensionhandler-object) [ExtensionModel, 120](#extensionmodel-object) [Favorite, 54](#favorites-object) > [FilterDescription, 128](#filterdescription-object) [FtpConnection, 159](#_bookmark445) [HttpConnection, 170](#_bookmark478) > [IconListPanelette, 57](#iconlistpanelette-object) [Infoset, 130](#infoset-object)
>
> [InfosetMemberDescription, 138](#infosetmemberdescription-object) > [InspectorPanel, 58](#inspectorpanel-object) [MenuElement, 60](#menuelement-object)
>
> [menus and commands, 60](#menuelement-object) [Metadata, 78](#metadata-object) [ModalOperator, 139](#modaloperator-object) > [NavBar, 81](#navbar-object)
>
> [node handling, 108](#_bookmark275)
>
> [node handling summary, 108](#_bookmark276) [Operand, 140](#operand-object)
>
> [Operator, 141](#operator-class) [Preferences, 86](#preferences-object) [PreferencesDialog, 91](#preferencesdialog-object) [primary, 10](#_bookmark13) > [ProgressOperator, 147](#progressoperator-object) [Rank, 148](#rank-object)
>
> [Scope, 149](#scope-object) [SearchCondition, 150](#searchcondition-object) [SearchCriteria, 151](#searchcriteria-object) [SearchDefinition, 153](#searchdefinition-object) [SearchDetails, 154](#searchdetails-object) [SearchSpecification, 155](#searchspecification-object) [SortCriterion, 157](#sortcriterion-object) [TabbedPalette, 94](#tabbedpalette-object) > [targets, 48](#_bookmark106) [TextPanelette, 97](#textpanelette-object) [Thumbnail, 98](#thumbnail-object) > [ThumbnailPanelette, 107](#thumbnailpanelette-object)
>
> [Operand object, 140](#operand-object) operands
>
> [node searches, 140](#operand-object) [search criteria, 151](#bookmark407)
>
> operations
>
> [immediate handler, 114](#_bookmark303) [immediate model, 121](#_bookmark319) [long-running, 116](#long-running-handler-operations)
>
> [long-running model, 126](#long-running-model-operations) [modal, 141 monitoring, 141](#operator-class) [synchronous, 139](#modaloperator-object)
>
> [operations, synchronous and asynchronous, 160,](#_bookmark449) > [171](#_bookmark484)
>
> Operator class
>
> [about, 141](#operator-class) [functions, 144](#operator-functions) > [properties, 141](#operator-common-properties)
>
> [Operator object, 141](#operator-class) operators
>
> [comparison, 151](#bookmark407) [equality, 99](#multiple-references-to-the-same-node) [equals, 150](#_bookmark399) [exists, 150](#_bookmark399) [identity, 99](#multiple-references-to-the-same-node) [types, 141](#_bookmark368)

##### P

> [Palette context menu commands, 78](#metadata-object) Panelette base
> class
>
> [about, 83](#panelette-base-class)
>
> [IconListPanelette subclass, 57](#iconlistpanelette-object) panelettes
>
> [configuring, 83](#panelette-base-class) [text objects, 97](#_bookmark243) [thumbnails, 107](#thumbnailpanelette-object)
>
> [panels, thumbnail contextual information, 58](#inspectorpanel-object)
> pixels
>
> [color characteristics, 30](#_bookmark68) [manipulating, 25](#_bookmark60)
>
> preferences
>
> [accessing, 86](#preferences-object)
>
> [adding ScriptUI controls, 91](#preferencesdialog-object) [event properties, 52](#preferencesdialog-events)
>
> Preferences object [about, 86](#preferences-object) [functions, 90](#preferences-functions) [properties, 86](#preferences-properties)
>
> PreferencesDialog [events, 52](#preferencesdialog-events) [object, 91](#preferencesdialog-object)
>
> [ProgressOperator object, 147](#progressoperator-object)

##### R

> [Rank object, 148](#rank-object) [reference materials, 8](#where-to-go-for-more-information) [requests, HTTP, 170](#_bookmark478) responses
>
> [files vs. strings, 170](#bookmark481) [HTTP requests, 170](#_bookmark478)

##### S

> [Scope object, 149](#scope-object)
>
> [script-defined palettes, 94](#_bookmark233) ScriptUI
>
> [adding controls to dialogs, 91](#preferencesdialog-object) [objects, 10](#bookmark14)
>
> [SearchCondition object, 150](#searchcondition-object) [SearchCriteria object, 151](#searchcriteria-object) [SearchDefinition object, 153](#searchdefinition-object) [SearchDetails object, 154](#searchdetails-object) searches
>
> [conditions, 149](#scope-object) [criteria, 151](#searchcriteria-object) [defining criteria, 151](#_bookmark406) > [fields, 151](#bookmark407)
>
> [limiting results, 148](#rank-object) [populating Find dialog, 140,](#operand-object) [153](#searchdefinition-object) [ranking results, 148](#rank-object)
>
> [result node information, 154](#searchdetails-object) [scope modifier, 149](#scope-object)
>
> [target container nodes, 155](#searchspecification-object) > [SearchSpecification object, 155](#searchspecification-object) > [SortCriterion object, 157](#sortcriterion-object) [Stacks menu commands, 67](#_bookmark175) status
>
> [background tasks, 147](#_bookmark387) [cache, 111](#_bookmark282)
>
> [status icons, 110](#_bookmark278) [subpanels,](#_bookmark208) _See_
> panelettes [synchronous operations, 139](#modaloperator-object)
>
> [FTP, 160](#_bookmark449) [HTTP, 171](#not-blocking-asynchronous-call)
>
> [Toolbar menu identifiers, 63](#_bookmark165) [Tools menu commands, 68](#_bookmark177) [typographic conventions, 8](#typographical-conventions)

##### U

> [URLs, thumbnail objects, 98](#thumbnail-object)
>
> [user interaction events, creating, 48](#event-object) user interface
>
> [navigation bars, 81](#navbar-object)

##### V

> [View menu commands, 66](#_bookmark174)

##### W

> [Web Access library, 159](#_bookmark441) [Window menu commands, 69](#_bookmark178) Windows
>
> [compiled library files, 159](#bookmark443)

##### X

> [XMP metadata, accessing, 78](#metadata-object)

##### T

> TabbedPalette object [about, 94](#tabbedpalette-object) [constructor, 94](#tabbedpalette-constructor) [methods, 96](#tabbedpalette-object-methods) [properties, 95](#tabbedpalette-properties)
>
> [target container nodes, 155](#searchspecification-object) [target objects, 48](#_bookmark106) [TextPanelette object, 97](#textpanelette-object) [threads, blocking, 139](#modaloperator-object)
>
> [Thumbnail context menu commands, 71,](#thumbnail-context-menu-submenus) [72](#_bookmark185) Thumbnail
> object
>
> [about, 98](#thumbnail-object) [constructor, 98](#thumbnail-object-constructor) [functions, 103](#thumbnail-functions) [multiple references, 99](#multiple-references-to-the-same-node) [properties, 100](#thumbnail-properties)
>
> [ThumbnailPanelette object, 107](#thumbnailpanelette-object)
> thumbnails
>
> [adding to Favorites, 54](#favorites-object) [events, 51](#thumbnail-events)
>
> [metadata, 78](#metadata-object)
>
> [organizing and filtering, 128](#_bookmark337)
