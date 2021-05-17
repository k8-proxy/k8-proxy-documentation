---
title: SharePoint Server - Solution Deployment
sidebar_label: SharePoint Server - Solution Deployment
---


This section will outline how to go about installing Glasswall SharePoint solutions to your environment. Glasswall SharePoint solution is offered in 2 flavors. They are:

- **Glasswall - SharePoint Online - Solution** - [link](../online/sharepoint-online-solution-deployment.md)
- **Glasswall - SharePoint Server - Solution**


## Glasswall - SharePoint Server - Solution Deployment

### Overview

The Sharepoint Server plugin allows to delegate all download and uploads activities in the SharePoint User Interface to the GlassWall Rebuild engine. This keeps the all sharepoint documents safe.


### Installation Guide

#### Introduction 

This document provides the step-by-step installation guide. This installation procedure is for only SharePoint 2019 On Prem. The installation of Glasswall.FileHandler.wsp will activate several Feature within the SharePoint web and Central Administration. Below are the changes:


1. Web Application level Feature Activation.
![](../../../../static/img/docs/websites/sharepoint/server/install-1.png)

2. Central Administration Feature for Custom Settings
![](../../../../static/img/docs/websites/sharepoint/server/install-2.png)

3. Web level document library Event Receiver
![](../../../../static/img/docs/websites/sharepoint/server/install-3.png)


#### Download Software
1. Go to **GW GitHub Releases** page: [https://github.com/k8-proxy/gp-sharepoint-plugins/releases](https://github.com/k8-proxy/gp-sharepoint-plugins/releases).
2. Download the latest release of **GW SP Server Solution** - **GWSharePointSolution.zip**.
3. Unzip to a local folder. You will find a package **Glasswall.FileHandler.wsp** which needs to be deployed. You will also find install & removal PowerShell scripts which can be used.
 
#### Installation Files
The zip file GWSharePointSolution.zip contains below files for the installation
1. Glasswall.FileHandler.wsp
2. InstallFileHandler.ps1
3. RemoveFileHandler.ps1

#### Installation Steps 
1. RDP / Login to the SharePoint Server where the Central Administration is installed. In the multiple server farm environment login to the Application Server. The account used to login should be the farm Admin account and have local server administrator.
2. Copy the Glasswall release folder content to the server local folder. Ex: Downloads folder
3. With Administrator privileges, click on Start->Microsoft SharePoint 2019 Products->SharePoint 2019 Management Shell. This will open the PowerShell terminal for SharePoint 2019

![](../../../../static/img/docs/websites/sharepoint/server/install-4.png)

![](../../../../static/img/docs/websites/sharepoint/server/install-5.png)

4. In the command prompt navigate to the the location of the Glasswall release folder.

```   
Ex: cd C:\Users\USERNAME\Downloads\Glasswall.FileHandler
```

5. Type the file name `InstallFileHandler.ps1 <path of Glasswall.FileHandler.wsp>`  and press enter to install the wsp. This command will install and activate all the features.

![](../../../../static/img/docs/websites/sharepoint/server/SP-onpremInst.png)

6. If the error 'PSSECURITYEXCEPTION' occurs, then do as below:
    - With PowerShell, run `Get-ExecutionPolicy` and inssure that it is set correctly (not Restrected or Reserved). 
    - Use Bypass to bypass the policy to get things installed or AllSigned for quite a bit more secure. Run `Set-ExecutionPolicy AllSigned` and/or `Set-ExecutionPolicy Bypass -Scope Process`.
    - Click [here](https://go.microsoft.com/fwlink/?LinkID=135170) for more information.

7. After successful installation, the features will be activated.

#### Configuration
1. Navigate to Central Administration Site of your SharePoint by navigating to Start->Microsoft SharePoint 2019 Products->SharePoint 2019 Central Administration.
   - Note: If **Central Administration** cannot be started, make sure that SQL Server is running (navigate to Start > search for Services and in the list of services search the ones starting with SQL. Make sure they all have **running** status).
   - Starting **Central Administration** will open your Browser and load `http://sps2019-plugin/` URL
2. Once page is loaded, new section, in left bar menu, will be created called **Glasswall**. Click on Glasswall section.
3. Set the Glasswall GW Cloud SDK URL & Access Key. 
- NOTE: Add `/Rebuild/base64` in the end of the provided Glasswall GW Cloud SDK URL
5. Save the configuration.

#### Verify Solution
1. Navigate to your OnPrem Server SharePoint site/subsite/shared directory or oneDrive
2. Open any Document Library.
3. Select any file. 
4. Download the file.
5. The downloaded file will be rebuilt by Glasswall.
6. You can verify that file got rebuild by uploading file to `http://file-drop.co.uk`

#### Supported Browsers
- Edge, Chrome, Firefox, Brave, Opera (Mac & Windows)
- Safari (Mac)
  
#### Repository
- SharePoint Server - Solution : [https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Server/src](https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Server/src)

#### Resources
- [Plugin Brochure](https://github.com/k8-proxy/gp-sharepoint-plugins/blob/main/Server/doc/SharePointCloudPlugin-v1.pdf)

- [Watch the video](../../../../static/video/docs/websites/sharepoint/server/SharePoint-Server-Installation.mp4)
