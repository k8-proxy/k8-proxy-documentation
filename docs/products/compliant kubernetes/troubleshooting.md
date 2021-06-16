---
title: Troubleshooting
sidebar_label: Troubleshooting
---

## Access pods logs 

* After logging into a running node using ssh, make sure to switch to root user using `sudo su -` command.

  Use `kubectl get pods -A` to list all running pods in all name spaces

![image](https://user-images.githubusercontent.com/58347752/122148537-f05df500-ce5a-11eb-8120-05aba011864d.png)



* Or `kubectl get pods -n <NAMESPACE>` to show pods status of a specific namespace. **NOTE:** please replace the place holder with a valid namespace.
  for example `kubectl get pods -n icap-adaptation` 

![image](https://user-images.githubusercontent.com/58347752/122148800-59456d00-ce5b-11eb-984a-dbf5eaf4cc41.png)



* Use command `kubectl describe pod <POD NAME> -n <NAMESPACE>` to show details and events for a specific pod, **NOTE:** please replace the place holders with valid pod name and namespace.

  for example `kubectl describe pod rebuild-api-569f46c74-x7wv9 -n icap-adaptation`

  ![image](https://user-images.githubusercontent.com/58347752/122149170-f0aac000-ce5b-11eb-804d-b9714185ec6b.png)



* To see all logs for a pods use command `kubectl logs <POD NAME> -n <NAMESPACE>` . **NOTE:** please replace the place holders with  valid pod name and namespace.

  for example `kubectl logs rebuild-api-569f46c74-x7wv9 -n icap-adaptation | head` 

  Note u can pip your command output using head,tail or less for easier browsing

  ![image](https://user-images.githubusercontent.com/58347752/122149580-93633e80-ce5c-11eb-8f37-968cc8847892.png)



* To replace a corrupted pod use command `kubectl delete pod <POD NAME> -n <Namespace>` . **NOTE:** please replace the place holders with  valid pod name and namespace.
  for example `kubectl delete pod falco-4rm7l -n falco` , after the pod is deleted it will be relaunched.


## Steps to Identify reason of rebuilt failure

1. Login to Kibana and navigate to Kubernetes index
2. Search "`GW_FAILED`" in required time range
In message field, we can find id of file...something like: `Returning 'GW_FAILED' Outcome for f9e0dc38-0a00-4a8e-93e9-b3e055d1836e`
3. Copy the id and search using id "`f9e0dc38-0a00-4a8e-93e9-b3e055d1836e`"
4. Focus on `message ` filed of logs with fileid 
5.  One can find reason of failure of rebuilt. e.g., `Filetype Detected: Unknown`
