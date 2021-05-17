---
title: Deploying ICAP Server on ESXI & Virtualbox
sidebar_label: Deploying ICAP Server on ESXI & Virtualbox
---

## Installation video 

[![Installation Video (OVA)](https://img.youtube.com/vi/fEPJvVb0y-o/hqdefault.jpg)](https://www.youtube.com/watch?v=fEPJvVb0y-o&feature=youtu.be)

### Deploying ICAP Server OVA on ESXI
From VMWare ESXi console or VMware workstation:
- Select **Virtual machines** > **Create / Register VM** > **Deploy a virtual machine from OVF or  OVA file**
- Browse and import ICAP Server OVA (downloaded from S3 bucket) 
- Before importing, uncheck the box for `Power on automatically`
- Click on Actions > Edit Settings > Increase the following (8GB RAM, 4 Cores, and 20 GB disk)
- Wait for the import to finish
- Once VM is imported, click on the VM name

**Note**: If using the ESXI01 Server, please make sure your network adapter is set to VMs
- Start the VM and login with provided credentials
- Run `/usr/local/bin/wizard` 
   - Configure Network > Change IP, Gateway, and DNS (navigate using up down buttons, then tab to go to submit)
     - **Note**: To set up your OVA **without internet access**, for `DNS`, enter the same IP as your VM IP
   - Give the VM ~10 minutes before jumping to usage
   - Configure Password > Type new password 


### Deploying ICAP Server OVA on VirtualBox

- Download ICAP Server OVA
- Open VirtualBox and Import downloaded OVA minimum (8GB RAM, 2 Cores, and 20 GB disk)
    - To increase disk size, `Ctrl+D` > Pick your ICAP-Server VM > Properties > Increase size
    - Give the VM ~10 minutes before jumping to usage

## Troubleshooting
- If the UI does not load, run `kubectl get pod -A` to check the status of pods
- If their status is not `ready`, in home directory run `./flush_iptables.sh`
- Then run `sudo systemctl restart k3s`
- Give it ~10 minutes before usage
- In case you see `metricbit` pod crashing, bare in mind, this will not impact the system setup. In case there is an elasticsearch in private network which can be connected by metricbeat, then the metricbeat pod will run fine, if there is no elasticsearch then it will keep crashing but without any impact. 
  
