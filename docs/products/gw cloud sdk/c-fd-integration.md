---
title: FileDrop Integration ESXi
sidebar_label: FileDrop Integration ESXi
---


![image](https://user-images.githubusercontent.com/60857664/115526387-4154d100-a290-11eb-8876-357a22900a0d.png)

# Deploying compliant k8s Workload cluster OVA on ESXI

1.- Have the worker cluster OVA downloaded and login to Esxi server

2.- Deploy OVA on VMware ESXi
  - From left bar navigate to **Virtual machines**

  - From top bar on the right choose **Create / Register VM**

  - Choose **Deploy a virtual machine from OVF or OVA file**

  - Type VM name

  - Click on section **Click to select files or drag/drop** and select the downloaded OVA file

  - Select desired storage and optionally tweak VM configuration

  - In the **Deployment options** tab uncheck the box for **Power on automatically** and select the **Network mapping** that's connected to the Internet. 

    ![image](https://user-images.githubusercontent.com/58347752/116899315-b385c800-ac37-11eb-8b85-135456f543f8.png)

  - Finish deployment and wait for the upload to be completed.

  - Once VM is imported, click on the VM name and Click on Actions > Edit Settings > Increase the following (16GB RAM, 8 Cores, 50 GB disk)

![image](https://user-images.githubusercontent.com/64204445/115719302-96c8d500-a399-11eb-8d6e-c8a506ed22c7.png)



3.- Configure IP and credentials

  - Click on Console in top left corner and select "Open browser console"
  - Login to VM using provided credentials
  - Change network configuration by running network wizard:
```
wizard
```
  - Add IP, Gateway and DNS addresses
    - Note: Use bottom arrow to navigate through these 3 fields and tab to move to Submit button
    - Note: To set up your OVA without internet access, for DNS, enter the same IP as your VM IP.

![image](https://user-images.githubusercontent.com/58347752/116901724-90104c80-ac3a-11eb-8d8a-771cda996530.png)

- Important note: After the IP change wizard will return to the same window, navigate back to CMD by pressing Cancel
- If needed you can use wizard to change password by selecting Change password
- Verify that correct IP address is set by running `ip -4 a` and verifying IP for eth0

4.- Launch FileDrop

  - Give the VM ~10 minutes to initialize, then open your browser and access FileDrop UI on `http://<VM IP>`

![image](https://user-images.githubusercontent.com/64204445/115719738-03dc6a80-a39a-11eb-93d0-39597d65e6ee.png)





# Deploying compliant k8s Service cluster OVA on ESXI

1.- Have the Service cluster OVA downloaded and login to Esxi server

2.- Deploy OVA on VMware ESXi

  - From left bar navigate to **Virtual machines**

  - From top bar on the right choose **Create / Register VM**

  - Choose **Deploy a virtual machine from OVF or OVA file**

  - Type VM name

  - Click on section **Click to select files or drag/drop** and select the downloaded OVA file

  - Select desired storage and optionally tweak VM configuration

  - In the **Deployment options** tab uncheck the box for **Power on automatically** and select the **Network mapping** that's connected to the Internet. 

    ![image](https://user-images.githubusercontent.com/58347752/116899315-b385c800-ac37-11eb-8b85-135456f543f8.png)

  - Finish deployment and wait for the upload to be completed.

  - Once VM is imported, click on the VM name and Click on Actions > Edit Settings > Increase the following (32GB RAM, 8 Cores, 200 GB disk)

![image](https://user-images.githubusercontent.com/58347752/116900950-a10c8e00-ac39-11eb-9d90-6425c834deb1.png)



3.- Configure IP and credentials

  - Click on Console in top left corner and select "Open browser console"
  - Login to VM using provided credentials
  - Change network configuration by running network wizard:

```
wizard
```

  - Add IP, Gateway and DNS addresses
    - Note: Use bottom arrow to navigate through these 3 fields and tab to move to Submit button
    - Note: To set up your OVA without internet access, for DNS, enter the same IP as your VM IP.

![image](https://user-images.githubusercontent.com/58347752/116901724-90104c80-ac3a-11eb-8d8a-771cda996530.png)

- Important note: After the IP change wizard will return to the same window, navigate back to CMD by pressing Cancel
- If needed you can use wizard to change password by selecting Change password
- Verify that correct IP address is set by running `ip -4 a` and verifying IP for eth0



## Instruction to integrate Service Cluster and Workload Cluster of Complaint K8 Cloud SDK

### Prerequisites

- URL/ID of the Workflow cluster
- URL/ID of the Service cluster
- The following passwords (click [here](https://github.com/k8-proxy/cs-k8s-api/blob/main/Integration/Passwords-extraction.md) for instructions on how to extract the passwords)
  - Monitoring password
  - Logging password
  - Kibana password
  - Grafana password

### The following steps are needed to configure the workload cluster VM/s to send logs to service VM

- SSH to Workload Cluster VM and switch to root user `sudo su -` and change working directory `cd /home/ubuntu/`

- **Impotant Note**: Below commands will work only if executed as root user

- Verify presence of below files by issuing command `ls`

  ```
   /home/ubuntu/monitoring-username.txt
   /home/ubuntu/monitoring-password.txt
   /home/ubuntu/logging-username.txt
   /home/ubuntu/logging-password.txt
   /home/ubuntu/service-cluster.txt
   /home/ubuntu/service-cluster-ip.txt
   /home/ubuntu/cluster.txt
   /home/ubuntu/wc-coredns-configmap.yml
   /home/ubuntu/setupscCluster.sh
  ```

- In case you are missing `setupscCluster.sh` run: 

  ```
  wget https://raw.githubusercontent.com/k8-proxy/vmware-scripts/cs-api-ck8/packer/setupscCluster.sh
  ```

- In case you are missing the rest of the files also, create and edit them using commands below. **Note: Please replace placeholders**

 ```
  echo "wcWriter" > monitoring-username.txt
  echo "<Add monitoring password>" > monitoring-password.txt
  echo "fluentd" > logging-username.txt
  echo "<Add logging password>" > logging-password.txt
  echo "ops.default.compliantkuberetes" > service-cluster.txt
  echo "<service-cluster-ip>" > service-cluster-ip.txt
  echo "<Unique Identifier of workload instance E.g., GWSDKWC01>" > cluster.txt
 ```
- Currently the below files need to be manually configured using `vi/vim`:
 ```
 /home/ubuntu/service-cluster-ip.txt  #Add IP of service cluster
 /home/ubuntu/monitoring-password.txt #Add monitoring password
 /home/ubuntu/logging-password.txt    #Add logging password
 /home/ubuntu/cluster.txt             #Add Unique Identifier of workload instance E.g., GWSDKWC01
 
 ```

- Change permission of *setupscCluster.sh* running command: `chmod +x setupscCluster.sh`

- Execute *setupscCluster.sh* running command **NOTE: Make sure you run the following script as root user** : `./setupscCluster.sh`

- Wait for all commands to complete. Once completed, login to Grafana and Kibana using service cluster IP address on ports 5601 for grafana and port 3000 for kibana

  - `http://<service-cluster-ip>:5601` >> For Kibana

    ![image](https://user-images.githubusercontent.com/70108899/116088990-afd7cb80-a6a2-11eb-96bf-31d2898b910e.png)

    

  - `http://<service-cluster-ip>:3000` >> For grafana

    ![image](https://user-images.githubusercontent.com/70108899/116088330-0f81a700-a6a2-11eb-970a-a0a4fbbd4823.png)

  Username: `admin`
  Password: `Will be shared as part of delivery` or can be extracted from the secrets file mentioned above



## Testing workflow

- To check API health, from Browser access `<WC VM IP>/api/health` and verify its ok.

  

  ![image](https://user-images.githubusercontent.com/70108899/116484783-179c3b00-a88a-11eb-9c79-c70e10847bed.png)

  

- To rebuild files, from Browser access Filedrop `<WC VM IP>` and select any file you want to rebuild 

- After file is rebuilt you will be able to download protected file along with XML report

  ![image](https://user-images.githubusercontent.com/70108899/116483290-13225300-a887-11eb-9187-2327fc559a47.png)

  

- To access the management UI for the workload cluster, add the following  line to your hosts file.

  ```bash
  <WORKLOAD CLUSTER IP ADDRESS> management-ui.glasswall-icap.com  
  ```

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
