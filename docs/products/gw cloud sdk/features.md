---
title: v3.0 vs v2.0 Features
sidebar_label: v3.0 vs v2.0 Features
---

## Possible messages

```
UNPROCESSABLE,
CLEAN,
CLEANED,
INTERNAL_ERROR,
EXPIRED
```

### UNPROCESSABLE

You will see UNPROCESSABLE when the file is not supported from the engine or the engine can't rebuild it.

![image](https://user-images.githubusercontent.com/60857664/123620628-bbfb1900-d80a-11eb-9da7-78648f43d0f6.png)

### EXPIRED

You will see the `EXPIRED` when the GW Engine license has expired.

### INTERNAL_ERROR

You will see the INTERNAL_ERROR when there was an error in Minio-ICAP processing.

### CLEANED

You will see CLEANED when file is rebuild successfully
![image](https://user-images.githubusercontent.com/60857664/123620936-04b2d200-d80b-11eb-9be2-a5a6a5021516.png)

### CLEAN
This means that file is already clean

## Jaeger


**Jaeger** is open source software for **tracing** transactions between distributed services. It's used for monitoring and troubleshooting complex microservices environments.
Integration of Jaeger, helps us to have some visualizations and be able to detect issues.

You can access Jaeger in `<vm ip>:9001`


Select `GWFileProcess` from the dropDown menu in Service

![image](https://user-images.githubusercontent.com/60857664/123621417-7723b200-d80b-11eb-9bf1-69100246f24c.png)

You will be able to see the traces of the traffic in the UI

![image](https://user-images.githubusercontent.com/60857664/123621561-a508f680-d80b-11eb-9b12-e160d0e46c98.png)

Selecting one of the traces you will see a more detailed view of the processes

![image](https://user-images.githubusercontent.com/60857664/123621671-c1a52e80-d80b-11eb-8ea3-eb47a4122712.png)

You can use Trace Timeline


![image](https://user-images.githubusercontent.com/60857664/123621720-cd90f080-d80b-11eb-956a-46ce1ea9740d.png)

Or a trace Graph

![image](https://user-images.githubusercontent.com/60857664/123621880-f2856380-d80b-11eb-8049-245b9a4f7697.png)

Or a Trace Statistics

![image](https://user-images.githubusercontent.com/60857664/123621998-0a5ce780-d80c-11eb-838b-e80438cabf9f.png)

Or a trace JSON file
