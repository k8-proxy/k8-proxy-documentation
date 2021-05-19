---
title: Limitations of GW Cloud SDK with CK8s setup
sidebar_label: Limitations
---


## Workload Cluster 
- We support 5 concurrent sessions when rebuilding files. 
- This POC is for low traffic only.
- We dont support content management flag setting from API

## Filedrop
- Filedrop does not support zip files in UI.

# Management UI
- Management UI policies are configured per workload cluster.
- No https access.
- Management UI doesnt have Allow option

# Service Cluster
- Current limitation is that we don’t have a process to update the service cluster IP. We will have to manually patch to update new service cluster
- Grafana - no alerts pre-configured
- Grafana and Elastic does not have https access.
- No method to force update passwords of grafana and kibana. Customer has to manually change it.
Infrastructure
- No auto scaling configured on load Balancer. Need manual configuration of number of worker instances
- Certificates configuration is manually done. 
- If there is any new updates/improvements come from GW Cloud SDK API, we need to provide some update scripts and documentation. Or we can destroy the workload cluster and create a new one. 
- If the update comes from CK8s, we will provide an updated AMI in Cloud formation configuration which can be used to create a new workload cluster. 

