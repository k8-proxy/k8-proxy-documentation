---
title: How to use File Drop
sidebar_label: How to use File Drop
---

### Demo Video

[![Installation Video (OVA)](https://img.youtube.com/vi/2KIMP-qdxac/hqdefault.jpg)](https://www.youtube.com/watch?v=2KIMP-qdxac&feature=youtu.be)

### How To Use File Drop

- From a web browser, navigate to the VM IP address 
    (i.e: `http://<VM IP>/`) 
    and access the project UI
- Drop any file and wait until the file gets processed
- Report can be downloaded in XML format
- Rebuilt (clean) file can be downloaded. 



![image](https://user-images.githubusercontent.com/60857664/115734125-be17a600-a389-11eb-84c0-2a87ede17cc8.png)


## Rebuilding ZIP files with Compliant Kubernetes

- ### Scenario-1 (Status 200)
All files are processed and the response returns a ZipFile with the sanitized files inside

- ### Scenario-2 (Status 207)
In this scenario the Zip file is processed, however some of the files inside it could not be processed. Nevertheless the response will return a Zip file with the sanitized files
plus an `ErrorReport.html` for each file that could not be rebuilded.

Example of the output of the `ErrorReport.html` is:

![image](https://user-images.githubusercontent.com/6232283/118471256-d8823c80-b707-11eb-81c8-9ae51204a387.png)

- ### Scenario-3 (Status GW_ERROR)
If a file exceeds the set limit for processing a zip file, the following error occurs.

![image](https://user-images.githubusercontent.com/60857664/118820823-e924e500-b8b6-11eb-8ff0-253a8750c800.png)
