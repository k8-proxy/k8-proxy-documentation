---
title: Check Logs for client IP of request
sidebar_label: Check Logs for client IP of request
---


## Method 1: Kibana
- Navigate to `http://service-cluster-ip:5601` for Kibana and log in.
- From settings choose `Discover`
- Change index pattern from `kubeaudit` to `kubernetes`

    ![image](https://user-images.githubusercontent.com/60857664/121914319-72063380-cd32-11eb-8321-b23f7af2f6a6.png)

- Under `Available Fields` > click on `kubernetes.namespace_name` > Top 5 Values > click on any `+` 

    ![image](https://user-images.githubusercontent.com/60857664/121915237-52bbd600-cd33-11eb-8d87-617c1544925a.png)

- This creates a filter on top > `Edit Filter` > Set `Value` to `ingress-nginx` > Save

    ![image](https://user-images.githubusercontent.com/60857664/121915407-7a12a300-cd33-11eb-947c-e7140ce5f8f8.png)

- Under `Available Fields` > click on `kubernetes.namespace_name` > Top 5 Values > click the `+` for `ingress-nginx-controller-mc885`

    ![image](https://user-images.githubusercontent.com/60857664/121915864-e7becf00-cd33-11eb-80fd-4d0192919980.png)


- Expand a request > scroll to `message` > First entry is the IP
    ![image](https://user-images.githubusercontent.com/60857664/121913742-f0160a80-cd31-11eb-9280-443f97d819db.png)


## Method 2: SSH 

- SSh into workload cluster
- Run:
    - `sudo kubectl get pods -n ingress-nginx`
    - `sudo kubectl logs -f -n ingress-nginx <pod name from above>`

![image](https://user-images.githubusercontent.com/60857664/121916892-d7f3ba80-cd34-11eb-9aae-bcf732054f35.png)