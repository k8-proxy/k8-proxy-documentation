---
title: FileDrop Integration AWS
sidebar_label: FileDrop Integration AWS
---

## Architecture
![image](https://user-images.githubusercontent.com/60857664/115548813-2f7f2800-a2a8-11eb-8ba3-e7569db39fe0.png)


## Deploying Workload cluster AMI: GW Cloud SDK compliant kubernetes with File Drop

1. Navigate to AWS > AMIs

2. Search for the AMI with specific ID (make sure you are in the correct region)

3. Instance can be launched from AMIs or EC2 space
- From AMIs workspace click on specific AMI > Choose `Launch` 
    - Set instance type to `t3.2xlarge` (8CPUs and 32GB RAM)
    - Skip configuring instance details and adding the storage (that can be left default if not specified differently)
    - Add any tags if needed
    - Security Group: 
      - Create a new security group > Add Rule:
        - HTTP > Port 80 
        - HTTPS > Port 443 
        - Custom TCP > Port 8080
        - SSH > Port 22
    - Click on `Review and Launch`
    - Select `Create or use existing key pair` [Note: Your key pair is important for SSH]
 
 4. Give the instance ~10 minutes to initialize, then open your browser and access FileDrop UI on `http://<VM IP>`

 5. Launch FileDrop

![image](https://user-images.githubusercontent.com/70196799/116584746-f4b86800-a917-11eb-9191-28c0edc41c29.png)

 6. Management UI: To access Management UI in your hosts file add:
 
     ```
     <VM IP> management-ui.glasswall-icap.com and access it from your Browser https://management-ui.glasswall-icap.com/login
     ```


## How to use FileDrop

- You can find information on how to use File Drop [ here ](https://k8-proxy.github.io/k8-proxy-documentation/docs/products/filedrop/fd-howto).


## Deploying Service cluster (Monitoring cluster)

1. Navigate to AWS > AMIs

2. Search for the AMI with specific ID (make sure you are in the correct region)

3. Instance can be launched from AMIs or EC2 space
- From AMIs workspace click on specific AMI > Choose `Launch` 
    - Set instance type to `t3.xlarge` (8CPUs and 32GB RAM)
    - Skip configuring instance details and adding the storage (that can be left default if not specified differently)
    - Security Group: 
      - Create a new security group > Add Rule:
        - HTTP > Port 80 
        - HTTPS > Port 443 
        - SSH > Port 22
        - Custom TCP > Port 3000
        - Custom TCP > Port 5601
    - Click on `Review and Launch`
    - Select `Create or use existing key pair` [Note: Your key pair is important for SSH]
    - Wait for instance to be initialized (~10 minutes) and use public IP to access File Drop web interface

### Instructions to integrate Service Cluster and Workload Cluster of Complaint K8 Cloud SDK
1. Login to Workload cluster (GW SDK with Filedrop integrated deployed above) using SSH and navigate to `/home/ubuntu` and switch to root by `sudo su`

2. Verify presence of below files by issuing command `ls`

>     /home/ubuntu/monitoring-username.txt
>     /home/ubuntu/monitoring-password.txt
>     /home/ubuntu/logging-username.txt
>     /home/ubuntu/logging-password.txt
>     /home/ubuntu/service-cluster.txt
>     /home/ubuntu/service-cluster-ip.txt
>     /home/ubuntu/cluster.txt
>     /home/ubuntu/wc-coredns-configmap.yml
>     /home/ubuntu/setupscCluster.sh


3. In case you are missing `wc-coredns-configmap.yml`, `setupscCluster.sh` run: 
   ```
   wget https://raw.githubusercontent.com/k8-proxy/vmware-scripts/cs-api-ck8/packer/wc-coredns-configmap.yml
   wget https://raw.githubusercontent.com/k8-proxy/vmware-scripts/cs-api-ck8/packer/setupscCluster.sh
   ```

4. In case you are missing the rest of the files, also create and edit them (using vi/vim) with values as shown below

5. Update each text file with corresponding values:

```
    monitoring-username.txt - wcWriter
    monitoring-password.txt - <Add monitoring password>
    logging-username.txt - fluentd
    logging-password.txt - <Add logging password>
    service-cluster.txt - ops.default.compliantkuberetes
    service-cluster-ip.txt - <service-cluster-ip>
    cluster.txt - <Unique Identifier of workload instance> E.g., GWSDKWC01
```

6. Change permission of `setupscCluster.sh` by below command:

    `chmod +x setupscCluster.sh`

7. Execute setupscCluster by below command:

    `./setupscCluster.sh`

8. Wait for all commands to complete. Once completed, login to Grafana and Kibana in service cluster

   `http://<service-cluster-ip>:5601/ ` - Kibana   
    `http://<service-cluster-ip>:3000/`  - Grafana

    Username: `admin`
    Password: `Will be shared as part of delivery`
    
        - `http://<service-cluster-ip>:5601/  - Kibana`
    
![image](https://user-images.githubusercontent.com/70196799/116581348-86be7180-a914-11eb-9918-28bd100c49f7.png)
        
    - `http://<service-cluster-ip>:3000/  - Grafana`
    
![image](https://user-images.githubusercontent.com/70196799/116581366-8c1bbc00-a914-11eb-8efe-fd9131b67b62.png)

    Username: `admin`
    Password: `Will be shared as part of delivery`
    

## Validate deployment
- To check API health, from Browser access `<WC VM IP>/api/health` and verify its ok

    ![image](https://user-images.githubusercontent.com/70108899/116484783-179c3b00-a88a-11eb-9c79-c70e10847bed.png)
  
- To rebuild files, from Browser access Filedrop `<WC VM IP>` and select any file you want to rebuild 
- After file is rebuilt you will be able to download protected file along with XML report

    ![image](https://user-images.githubusercontent.com/70108899/116483290-13225300-a887-11eb-9187-2327fc559a47.png)
    
- On Managment UI `https://management-ui.glasswall-icap.com/analytics` you will be able to see statistics of rebuild files, your request history and modify policies

    ![image](https://user-images.githubusercontent.com/70108899/116484583-a8264b80-a889-11eb-8cdd-e06627ddf1e8.png)
    
- To see more details on traffic you are generating you can access Elastic or Grafana
- For Elastic from browser navigate to `http://<SC VM IP>:5601`
   - From settings choose `Discover` and select one of three options for logs (kubeaudit*, kubernetes* or other*)
   
        ![image](https://user-images.githubusercontent.com/70108899/116484905-53370500-a88a-11eb-8477-d55c1db73519.png)
        
   - From settings choose `Dashboard` and select one of two available or create custom one. This option will give you more of a grafical overview compared to `Discover`
   
        ![image](https://user-images.githubusercontent.com/70108899/116485151-cf314d00-a88a-11eb-99d7-b5a7e1d15a91.png)
     
- For Grafana from browser navigate to `http://<SC VM IP>:3000`

   - Click on `Search` and type `Kubernetes / Compute Resources / Namespace (Pods)` and select the dashboard from search result

        ![image](https://user-images.githubusercontent.com/64204445/116515131-85c41a80-a8e9-11eb-9d98-cf26f9b6f4e4.png)
        
   - Here you can switch between Workload clusters and also namespaces to see metrics
   
        ![image](https://user-images.githubusercontent.com/64204445/116515563-14d13280-a8ea-11eb-900b-58fe934cad07.png)


   - `ck8s-metrics` data set is added and you can use it when creating custom dashbords
  
        ![image](https://user-images.githubusercontent.com/70108899/116485399-65fe0980-a88b-11eb-84ba-0d4e7d77c379.png)
