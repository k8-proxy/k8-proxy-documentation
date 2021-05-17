---
title: How to use ICAP Server
sidebar_label: How to use ICAP Server
---

## Docker Setup
- Ensure you have docker installed (on local or server, anywhere you would like to run and process the files), by running `docker --version`
- In your working directory, create 2 folders: `input` & `output`, where `input` has your (rebuild supported) testing files
- From your cmd run:
```
docker run -v <localfolderinput>:/opt -v <localfolderoutput>:/home glasswallsolutions/c-icap-client:manual-v1 -s 'gw_rebuild' -i <icap-endpoint> -f '/opt/<filename>' -o /home/<outputfilename> -v
```
where:

```
<localfolderinput> : local path to the folder containing the file to send e.g. c:/input
<localfolderoutput> : local path to the folder where the rebuilt file will be written e.g. c:/output
<icap-endpoint> : DNS or IP of the ICAP endpoint e.g. icap.exampleurl.com
<filename> : the name of the file to rebuild residing in the input folder e.g. test.pdf
<outputfilename> : the name of the rebuilt file to be written to the output folder e.g. rebuilt.pdf
```

Example:
```
docker run -v $(pwd)/input:/opt -v $(pwd)/output:/home glasswallsolutions/c-icap-client:manual-v1 -s 'gw_rebuild' -i 91.109.25.80 -f '/opt/sample.pdf' -o /home/out.pdf -v
```

- **Note**: Output files should be always named differently.
- **Note**: In case you get `403 forbidden` while running above command, please give the system few more minutes (so the pods can stabilized) and try again. 

## ICAP management UI
### Demo

[![Installation Video (OVA)](https://img.youtube.com/vi/ywXF1RPurao/hqdefault.jpg)](https://www.youtube.com/watch?v=ywXF1RPurao&feature=youtu.be)

### Setting Up ICAP UI DNS
- To access ICAP server management UI, a DNS entry needs to be added. Update your local hosts file 
     - **Linux/MAC**: `sudo nano /etc/hosts` and add your ICAP Server IP next to `management-ui.glasswall-icap.com`, which is the default DNS.
       ```
       Example:
       54.194.56.16 management-ui.glasswall-icap.com
       ```
     - **WIN**: open hosts file in C:\Windows\System32\drivers\etc and add the line as per example above

- From your browser navigate to `https://management-ui.glasswall-icap.com`




### Optional step, only if the DNS wants to be updated for the Management UI
- SSH into your ICAP Server and run the following command:

```````
kubectl -n management-ui patch ing management-ui --type=json -p='[{"op": "replace", "path": "/spec/rules/0/host", "value":"_newhost.com_"}]'
```````
After the DNS `"value"` has been updated, follow the first 2 steps in setting up ICAP UI DNS.




### Using ICAP UI
- All the requests sent to the ICAP server can be found in "REQUEST HISTORY"
- Content management flags can be viewed and updated under "POLICY". These flags can be used to configure if a particular content needs to be sanitized or disallowed based on each file type.
- **For more details on how to use the ICAP management UI, refer to document: ICAP User Guide**


![ICAP UI](https://user-images.githubusercontent.com/60857664/108355024-edc3f980-71f2-11eb-926e-b3865749a43c.png)

## ICAP Health check service
- Each ICAP server comes with inbuilt health service which will evaluate health status of server. Information of health status can be accessed at `http://ICAP_Server_IP:7000/status`. This endpoint can be used by services such as load balancers to monitor health status and route traffic accordingly. 

Sample Healthcheck response:
Healthy Server:
```
HTTP Status Code: 200
Response Body: {"message":"Status OK","instanceId":"i-00e661ddf9010ab9f","publicIp":"54.154.66.6"}
```
Unhealthy Server:
```
HTTP Status Code: 503
Response Body: {"message":"status Fail"}

```

## Logs of ICAP services

- To check the running pods, ssh to the instance/vm and run below commands:
  
  ```
  > kubectl -n icap-adaptation get pods
    NAME                                                    READY   STATUS      RESTARTS   AGE
    svclb-icap-svc-host-zjnqz                               0/2     Pending     0          59m
    adaptation-icap-adaptation-event-api-6fc4845b9f-jm2mf   1/1     Running     1          59m
    policy-update-service-cccfb4bdf-j2mn2                   1/1     Running     1          59m
    svclb-frontend-icap-lb-lwv5b                            2/2     Running     2          59m
    rabbitmq-controller-52bkm                               1/1     Running     1          59m
    icap-service-877f948d-4hbr8                             2/2     Running     0          59m
    adaptation-service-b8676f949-8lftm                      1/1     Running     7          59m
    archive-adaptation-service-54b4d9d9d-zblp7              1/1     Running     7          59m
    event-submission-service-cbc687dfb-t8ftl                1/1     Running     7          59m
    pod-janitor-1611852840-kcxkm                            0/1     Completed   0          55s
  ```
- To check the logs of a pod, for example `icap-service-877f948d-4hbr8`, run below command:
  ```
  kubectl -n icap-adaptation logs -f icap-service-877f948d-4hbr8 icap-service
  ```

