---
title: Rebuilding ZIP files 
sidebar_label: Rebuilding ZIP files 
---


- ### Scenario-1 (Status 200)
All files are processed and the response returns a ZipFile with the sanitized files inside

- ### Scenario-2 (Status 207)
In this scenario the Zip file is processed, however some of the files inside could not be processed. Nevertheless the response will return a Zip file with the sanitized files
plus an `ErrorReport.html` for each file that could not be rebuild.

Example of the output from the `ErrorReport.html` is:

![image](https://user-images.githubusercontent.com/6232283/118471256-d8823c80-b707-11eb-81c8-9ae51204a387.png)

- ### Scenario-3 (Status GW_ERROR)
If a file exceeds the set limit for processing a zip file, the following error occurs.

![image](https://user-images.githubusercontent.com/60857664/118820823-e924e500-b8b6-11eb-8ff0-253a8750c800.png)
