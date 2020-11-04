---
title: Sharepoint Self-Hosted Manual Install
sidebar_label: Manual Install
---


## Version: Sharepoint 2019
## Topology: Single Server Farm
## Target: Azure VM

# Steps

1. Launch and attempt to set up Sharepoint Product Configuration Wizard:
![step 1](../../../../static/img/docs/websites/sharepoint/self-hosted/manual-install-1.png)

2. We need to enable server level feature, AD Domain Services,

![step 2](../../../../static/img/docs/websites/sharepoint/self-hosted/manual-install-2.png)

![step 3](../../../../static/img/docs/websites/sharepoint/self-hosted/manual-install-3.png)

3. Next go to AD DS → select the the new Server

![step 4](../../../../static/img/docs/websites/sharepoint/self-hosted/manual-install-4.png)

4. Select action → Promote this server to a domain controller.

![step 5](../../../../static/img/docs/websites/sharepoint/self-hosted/manual-install-5.png)

5. Provide a root domain name and password and proceed.

Server will restart at the end of set up, after the restart there will be a long process of setting up Group Police Client, we should wait for it to finish itself. Once all finished, you will see AD DS up and live:

![step 6](../../../../static/img/docs/websites/sharepoint/self-hosted/manual-install-6.png)

6. Let’s re-launch Sharepoint Product Configuration Wizard:

![step 7](../../../../static/img/docs/websites/sharepoint/self-hosted/manual-install-7.png)

![step 8](../../../../static/img/docs/websites/sharepoint/self-hosted/manual-install-8.png)

![step 9](../../../../static/img/docs/websites/sharepoint/self-hosted/manual-install-9.png)

7. Setup Complete

