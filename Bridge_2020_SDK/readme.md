# Welcome

Welcome to the Adobe Bridge 2020 Software Development Kit
_____________________________________________________________________________

This readme contains the latest information for the Adobe Bridge 2020 SDK. The 
information applies to Adobe Bridge 2020. It has the following sections:

    [Introduction](#1-introduction)
    [SDK content overview](#2-sdk-content-overview)
    [Development environment](#3-development-environment)
    [Running snippets](#4-running-snippets)
    [Known issues in the SDK](#5-known-issues-in-the-sdk)
    [Adobe Solutions Network](#6-adobe-solutions-network)

## 1. Introduction

The SDK provides information and examples for the Adobe Bridge 2020 scripting 
and extensibility interface. The Bridge 2020 SDK can be downloaded from the
following URL: http://www.adobe.com/devnet/bridge/

There are a range of code snippets (names begin with Snp) and more elaborate
samples that illustrate how to work with the Adobe Bridge scripting interface, 
both in JavaScript and how to expose your C/C++ code to scripting in Adobe
Bridge.

The SDK includes documentation for each snippet/sample, as well as how to run
each snippet/sample. 

The Adobe Bridge JavaScript Reference and JavaScript Guide are provided as
resources for development. These have been updated for the Bridge release.


## 2. SDK content overview

The SDK supplies these files:

- `<sdkInstall>/sdksamples/javascript`: JavaScript code snippets and sample 
  scripts which exercise the scripting interface of Adobe Bridge 2020. To 
  execute the snippets and samples, open them in the ExtendScript Toolkit and 
  run them against the target of Bridge 2020.
  
- `<sdkInstall>/sdksamples/cpp`: Sample project files, source code and sample 
  scripts for building and loading an external object
  
- `<sdkInstall>/docs`: Documentation resources such as the Adobe Bridge JavaScript 
  Guide (2020) and the Adobe Bridge JavaScript Reference (2020).


## 3. Development environment


To execute the sample JavaScript code provided, the ExtendScript Toolkit (ESTK) 
development environment is required. The ESTK is an IDE with a source-level 
debugger for ExtendScript, a JavaScript implementation from Adobe. The ESTK is 
installed with Creative Suite 2020 and point products in Creative Suite 2020. It 
is recommended that you obtain the latest release of the ESTK.

From the ESTK, you can execute the JavaScript snippets and sample scripts. To 
do so, you must set the target scripting engine to "Bridge 2020". The examples 
have a file extension of .jsx. Start up Adobe Bridge 2020 and open a .jsx file 
from within the ESTK, then inspect the list of targets in the drop-down list at 
the top.

Many of the snippets create output to the JavaScript console in ESTK; you 
should execute all the snippets from the context of the ESTK. If a snippet 
fails to execute because its preconditions are not met, you will typically find 
some trace information in the JavaScript console in the ESTK that tells you 
what the requirements are for the snippet to run.

Some C++ samples demonstrate creating external objects that can be invoked from 
JavaScript. To compile them, you need to use the compiler tools for the 
platform: Microsoft Visual Studio 2017 version 15.5.7 for Windows and XCode 9.3 for Mac OS.


## 4. Running snippets/ samples


 1. Start Adobe Bridge 2020.
 2. Start the ExtendScript Toolkit.
 3. From the ExtendScript Toolkit, open the .jsx file that you want to run.
 4. In the "Targets" drop-down list, select Bridge 2020/Main Engine.
 5. Check the snippet/sample documentation; for some snippets, you may need to 
    select a thumbnail in Adobe Bridge before running the code.
 6. Return to the ExtendScript Toolkit and run the snippet/sample using the
    Run button (rightward-pointing triangle) above the Editor window.


## 5. Known issues in the SDK


The following are issues in this release:

- There are some issues with inter-application messaging through the BridgeTalk 
  object. Adobe Bridge 2020 uses BridgeTalk 2.0, which is not compatible with 
  BridgeTalk 1.0 (used with CS2). Any sample scripts demonstrating 
  inter-application messaging will not work as expected with CS2 products. You 
  must use Adobe Photoshop 2020/Adobe InDesign 2020 for some snippets whose names 
  begin with SnpSend... For best results, use the same suite versions.
  
- If you have ESTK 1.0 (from CS2) installed, double-clicking any JSX file in
  Finder or Windows Explorer may open that tool. You cannot use a previous 
  version of the ESTK to execute scripts against Adobe Bridge 2020.

- Some javascript samples in the Adobe Bridge CS4 SDK package are no longer 
  available for Adobe Bridge 2020. For example: "SnpAddHTMLNavBar.jsx", 
  "SnpCreateHTMLDialog.jsx", "SnpPassObjectToHTML.jsx" and 
  "SnpShowHTMLInContent.jsx".


## 6. Adobe Partner Connection


To learn more about the Adobe Partner Connection Programs, go to:

http://www.adobe.com/partners

or contact one of the following locations:

In the USA or Canada, contact:

Adobe Partner Connection
3601 SW Murray Boulevard, Suite 200
Beaverton, OR 97005
Phone: 800 685.3510
Fax: 800 955.1610
Membership questions email: partners@adobe.com

In Europe, the Middle East or Africa, contact:

Adobe Partner Connection
Postbus 20623
1001 NP Amsterdam
The Netherlands
Phone: +31 20 582 0850
Fax: +31 20 582 0851
Membership questions email: europartners@adobe.com
 

In South America or Asia-Pacific, contact:

Adobe Partner Connection
45th Floor,
One San Miguel Avenue Building San Miguel Avenue,
Corner Shaw Boulevard,
Ortigas Center Pasig City, Metro Manila 1600 Philippines 
Phone +63 2 636 8450 
Fax +63 2 636 8534 
Membership questions email: apacpartners@adobe.com
 

In Japan, contact:

> Adobe Partner Connection
> Adobe Systems Co., Ltd.
> Sumitomo Fudousan
> Shinjuku Oak Tower
> 6-8-1 Nishi-Shinjuku, Shinjuku-ku
> Tokyo, 163-6016 Japan
> Phone: +81-3-5740-2620
> Fax: +81-3-5740-2621
> Membership questions email: japanpartner@adobe.com

_____________________________________________________________________________

Copyright 2017 Adobe Systems Incorporated. All rights reserved.

Adobe and Flash are registered trademarks or trademarks of Adobe Systems 
Incorporated in the United States and/or other countries. Windows is either 
a registered trademark or a trademark of Microsoft Corporation in the United 
States and/or other countries. Macintosh is a trademark of Apple Computer, 
Inc., registered in the United States and other countries. 

_____________________________________________________________________________







