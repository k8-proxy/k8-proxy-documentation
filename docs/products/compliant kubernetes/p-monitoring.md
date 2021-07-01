---
title: Check Logs for client IP of request
sidebar_label: Monitoring
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

- Under `Available Fields` > click on `kubernetes.pod_name` > Top 5 Values > click the `+` for `ingress-nginx-controller-#####`

    ![image](https://user-images.githubusercontent.com/60857664/121915864-e7becf00-cd33-11eb-80fd-4d0192919980.png)


- Expand a request > scroll to `message` > First entry is the client IP



## Method 2: SSH 

- SSh into workload cluster
- Run:
    - `sudo kubectl get pods -n ingress-nginx`
    - `sudo kubectl logs -f -n ingress-nginx ingress-nginx-controller-#####`

- First entry is the client IP