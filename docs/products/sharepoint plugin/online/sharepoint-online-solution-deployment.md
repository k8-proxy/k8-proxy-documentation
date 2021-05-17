---
title: Sharepoint Online Solution Deployment
sidebar_label: Sharepoint Online Solution Deployment
---

This section will outline how to go about installing Glasswall SharePoint solutions to your environment. Glasswall SharePoint solution is offered in 2 flavors. They are:

- **Glasswall - SharePoint Online - Solution**
- **Glasswall - SharePoint Server - Solution** - [link](https://k8-proxy.github.io/k8-proxy-documentation/docs/products/sharepoint%20plugin/server/sharepoint-server-solution-deployment)

## Glasswall - SharePoint Online - Solution Deployment

GW SPO solution consists of the following components:
- **GW SPO Extension**
- **GW FileHandler Web App**

Both components need to be deployed to your environments (M365 + Azure) as described below.

### Prerequsites

- You have setup your Microsoft account (M365 + Azure).
- You have setup [Azure subscription](https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/create-subscription).
- **Note**: You can use 30-day free trial option by setting up account following [steps](https://signup.microsoft.com/Signup?OfferId=B07A1127-DE83-4a6d-9F85-2C104BDAE8B4&dl=ENTERPRISEPACK&culture=en-US&country=US&ali=1). This will setup both Sharepoint and Azure account, accessible on:
    - **Sharepoint**: `https://<yourTenant>.sharepoint.com/`
    - **Azure**: `https://portal.azure.com/`

### GW SPO Extension Deployment 
Following are the steps to deploy GW SPO Extension:

#### 1. Download Software
1. Go to **GW GitHub Releases** page: [https://github.com/k8-proxy/gp-sharepoint-plugins/releases](https://github.com/k8-proxy/gp-sharepoint-plugins/releases).
2. Download the latest release of **GW SPO Extension** - **GWO365FileHandlerExtension.zip**.
3. Unzip to a local folder. You will find a package "glasswall-hide-download-ext.sppkg" which needs to be deployed.

#### 2. Create App Catalog Site
1. Go to the **SharePoint Admin Center** by entering the following URL in your browser: **https://{tenant}-admin.sharepoint.com**, where {tenant} is string next to your domain (ex. `glasswall@share.onmicrosoft.com`, {tenant} is `share`)
2. In the left sidebar, select **More features**.
3. Locate the section **Apps** and select **Open**.
4. On the **Apps** page, select **App Catalog**.
5. Select **OK** to create a new app catalog site.
6. On the next page, enter the following details:
  1. **Title**: Enter **App Catalog**.
  2. **Web Site Address suffix**: Enter your preferred suffix (at the empty field at the end of the line) for the app catalog; for example: **apps**.
  3. **Administrator**: Enter your **username**, and then select to **Check Names** and resolve the username.
  4. Select **OK** to create the app catalog site.
7. SharePoint creates the app catalog site, and you can see its progress in the SharePoint admin center.
8. Click [here](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant#create-app-catalog-site) for more info.

#### 3. Deploy Package to App Catalog Site
1. Open your tenant's **app catalog site** (i.e. https://{tenant}.sharepoint.com/sites/apps).
2. Click on **Apps for SharePoint** on Left Navigation Menu.
3. Click on **Upload**. Browse and select **glasswall-hide-download-ext.sppkg** package downloaded at earlier step from your local drive.
4. Check **Make this solution available to all sites in the organization** and click on **Deploy** to deploy the solution tenant-wide.
5. Verify deployment ended without any issues (check the last column in the table on the current page). In case there were errors, delete uploaded package and try again.

#### 4. Verify Solution
1. Navigate to SharePoint Online (O365) Site.
2. Open any Document Library (make sure you have some files uploaded there).
3. Select any file (click on the checkbox) and then in the toolbar, you will not see the default 'Download' button anymore.

#### Repository
- GW SPO Extension: [https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall-hide-download-ext](https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall-hide-download-ext)  


### GW FileHandler Web App Deployment
Following are the steps to deploy GW FileHandler web app:

#### 1. Download Software
1. Go to GW GitHub releases page: [https://github.com/k8-proxy/gp-sharepoint-plugins/releases](https://github.com/k8-proxy/gp-sharepoint-plugins/releases).
2. Download the latest release of GW FileHandler web app - GWO365FileHandlerWebApp.zip.
3. Unzip to a local folder. 

#### 2. Create FileHandler Web App
1. Go to your [Azure Portal](https://portal.azure.com/).
2. Create a resource group. For r.g. rg-glasswallfilehandler-prod
3. Create a new web app with appropriate plan by selecting resource group created in step 2, clicking on `Add` button in top toolbar and selecting `Web App` from the list.
4. For runtime stack choose `.Net 5`
5. Carefully select proper plan. For test, you can go with `Free sku and size`, last option.
6. Example name for web app can be: **app-glasswallfilehandler-prod**. Once the web app is created, make a note of the URI. For e.g. https://app-glasswallfilehandler-prod.azurewebsites.net

#### 3. Register a new application

The following steps will allow you to register your file handler application.
To register a new application with Azure Active Directory, log into your [**Azure Portal**](https://portal.azure.com).

1. Navigate to the **Azure Active Directory** module.
2. Select **App registrations** and click **New application registration**.
   1. Type the name of your file handler application. For e.g. **GlasswallFileHandlerApp**
   2. Ensure **Application Type** is set to **Web app / API**
   3. Enter a sign-on URL for your application. This will be `https://app-glasswallfilehandler-prod.azurewebsites.net`.
   4. Click **Create** to create the app.
3. After the app has been created successfully, from Azure Active Directory, left side menu choose **App registrations** and select the app (created in step 2) from the list of applications.
4. Make a note of **Application ID** for the app you registered. 
5. Make a note of the **Object ID** for this application, since you will need this later to register the file handler manifest.
6. Configure the application settings for this sample:
   1. Select **Authentication** from left bar, choose to **Add platform**, select **web** and add **Redirect URIs** as the one setup in 2.3 (e.g. `https://app-glasswallfilehandler-prod.azurewebsites.net/signin-oidc`) is added.
   2. Select **API Permissions**, click to **Add a permission**, choose **Microsoft Graph** and select **Deligated permissions**. Under **Files** find the permission **Have full access to all files user can access** and check the box next to it, then click **Select**, and then **Done**.
   3. Under **API Permissions**, click **Grant Admin Consent** button, to grant access for above permission.
   4. Select **Ceriticates and Secrets** and choose to add **New Client Secret** by entering a description for the key, selecting a duration, and then click **Save**. Make a note of the `Client Value` and `Client ID` displayed, since it will only be displayed once.
7. From Azure Active Directory, left side menu choose **Enterprise application** and select the app (created in step 2) from the list of applications.
   1. From the left side menu select **Properties**
   2. Set **Enabled for users to sign-in?** to `Yes`
   3. Set **Visible to users?** to `Yes`
   4. Click **Save** in top bar menu


#### 4. Register the file handler manifest

- After registering your app with Azure Active Directory, you can upload the file handler manifest information into the application.
1. Select **Manifest** from left menu
2. In displayed editor under **Addins** add below file handler manifest (make sure to change url to correspond to the one you added and add new ID by generating random GUID) and Save

```
[
    {
        "id": "<Enter New GUID here>",
        "type": "FileHandler",
        "properties": [
            { "key": "version","value": "2"},
            { "key": "appIcon", "value": "{\"svg\":\"<Enter application icon here>\" }"},
            { "key": "actions", "value": "[{\"type\":\"custom\",\"url\":\"https://app-glasswallfilehandler-prod.azurewebsites.net/filehandler/download\",\"displayName\": \"Download (Glasswall)\",\"shortDisplayName\": \"Download (Glasswall)\", \"availableOn\":{\"file\":{\"extensions\":[\"*\"]}}}]"}
        ]
    }
]
```

- For detailed instructions on how to upload the file handler manifest, see [Registering file handlers](https://docs.microsoft.com/en-us/onedrive/developer/file-handlers/register-manually).


#### 5. Update FileHandler Application Settings
Following application settings of FileHandler web app configuration needs to be updated.
- Navigate to **App Service** and choose web app you created in previous steps. 
- Select **Configuration** from left bar menu and click **New application settings** button in top bar.
- Add below values (ex. `Name` is `AzureAd:ClientId`, `Value` is `client ID from step 3.7`
1. AzureAd:ClientId - Client Id of the App registered with Azure Active Directory 
2. AzureAd:ClientSecret - Client Secret created in App registered with Azure Active Directory 
3. AzureAd:Domain - Domain of your O365 subscription. For e.g. glasswall.onmicrosoft.com.
4. AzureAd:TenantId - Tenant id of your Azure Active Directory tenant.  
5. Glasswall:BaseUrl - Base url of your Glasswall GW Cloud SDK endpoint. Make sure you are using valid URL.
6. Glasswall:ApiKey - Api Key to access the Glasswall GW Cloud SDK (can be found [here](https://glasswall-store.com/products/glasswall-rebuild-cloud-in-shared-cloud-environment?variant=33739907006604)).

#### 6. Deploy FileHandler Code
1. Navigate to local folder where GWO365FileHandlerWebApp.zip was downloaded (from [FileHandler release](https://github.com/k8-proxy/gp-sharepoint-plugins/releases)).
2. Make sure you have **az cli** install on your workstation.
3. Deploy the code to your Azure Web App by following instructions from [here](https://docs.microsoft.com/en-us/azure/app-service/deploy-run-package) or based on example below (make sure to add corresponding values for resource-group, app name and path to fileHandler).

```
az login
az webapp deployment source config-zip --resource-group <group-name> --name <app-name> --src /path/to/<filename>.zip
```
#### 7. Verify Solution

1. Clean cache
    - File handlers are cached locally in the browser and on the server. These caches have a timeout of 24 hours, meaning it can take up to 48 hours for updates to a File Handler manifest to appear for users. More details about this can be found [here](https://docs.microsoft.com/en-us/onedrive/developer/file-handlers/reset-cache?view=odsp-graph-online).
    - In case you want to test your changes in less then 24h, you will need to clean cache. While being authenticate to your sharepoint account in new tab, run: `https://{tenant}-my.sharepoint.com/_api/v2.0/drive/apps?forceRefresh=1`
    - Navigate to your sharepoint `https://{tenant}.sharepoint.com/` and from dev console, clean local and session storage cache.
    - Navigate to your oneDrive `https://{tenant}-my.sharepoint.com/` and from dev console, clean local and session storage cache.
    - Close your Browser.
    - Open your Browser again and access your Sharepoint (e.g. `https://{tenant}.sharepoint.com/`).
    - In the new tab run `https://{tenant}-my.sharepoint.com/_api/v2.0/drive/apps`.
    - Make sure as an output you get your addins content.
    
```
{"@odata.context":"https://{tenant}.sharepoint.com/_api/v2.0/$metadata#driveApps","value":[{"application":{"id":"  <APPID>","displayName":"GlasswallFileHandlerApp"},"fileHandler":{"appIcon":{"png1x":"https://glasswallsolutions.com/wp-content/uploads/2020/05/File-Drop-700.png"},"fileTypeDisplayName":"Glasswall(.NETFW)","fileTypeIcon":{"png1x":"https://glasswallsolutions.com/wp-content/uploads/2020/05/File-Drop-700.png"},"fileTypeIconUrl":"https://glasswallsolutions.com/wp-content/uploads/2020/05/File-Drop-700.png","version":2},"hidden":false,"id":"<GUID>"}]}
```
   
2. Navigate back to SharePoint Online (O365) Site.
3. Open any Document Library.
4. Select any file. 
5. Verify custom Download button is present. 
6. Download the file.
   - In case you are not able to **Download** file, verify that correct Glasswall Rebuild URL and GW Cloud SDK are set in section 5.
8. Verify that downloaded file is rebuilt by Glasswall (you can upload file to `https://file-drop.co.uk` and verify it comes clean).
   - If the file is not rebuild correctly, the issue has to do with Glasswall Rebuild rather than solution provided.


#### Supported Browsers
- Edge, Chrome, Firefox, Brave, Opera (Mac & Windows)
- Safari (Mac)

#### Repository
- File Handler: [https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall.o365.filehandler/Net5](https://github.com/k8-proxy/gp-sharepoint-plugins/tree/main/Online/glasswall.o365.filehandler/Net5).

#### Deployment Video

[![Installation Video (OVA)](https://img.youtube.com/vi/yaBPLn9ISSg/hqdefault.jpg)](https://www.youtube.com/watch?v=eg7StJR8yuU&ab_channel=GlasswallEngineering)

