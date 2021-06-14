---
title: GW Desktop Integration
sidebar_label: GW Desktop Integration
---


## Integrate Glasswall Desktop App to GW SDK VM
In order to integrate Glasswall Desktop App, make sure both of the machines are on the same network subnet.

Ignore Step 1 to Step 3 If you are already using `OfflineDesktop.ova`

**Step 1:** Download Glasswall Desktop App from [here](https://github.com/k8-proxy/glasswall-desktop/releases/download/v1.0.5/glasswall-desktop-1.0.5.AppImage)

**Step 2:** Make the downloaded package as an executable by running below command.

`chmod a+x glasswall-desktop-1.0.5.AppImage
`

**Step 3:** Run below command to launch the desktop application

`./glasswall-desktop-1.0.5.AppImage
`

**Step 4:** Configure GW-SDK-VM endpoint in Glasswall Desktop App Setting

![image](https://user-images.githubusercontent.com/6232283/121910108-dd4e0680-cd2e-11eb-976b-6c7dc1f4f171.png)
**Example Value:**

```
REBUILD ENGINE URL = /api/rebuild/base64

REBUILD ANALYSIS URL = /api/Analyse/base64
```

Once you are done with the above setting, you are using GW-SDK-VM now with Glasswall Desktop App to process the files.

## GW Cloud SDK integration with GW Desktop video

[![Desktop Integration](https://img.youtube.com/vi/RIcSlZvcNC0/hqdefault.jpg)](https://www.youtube.com/watch?v=RIcSlZvcNC0)
