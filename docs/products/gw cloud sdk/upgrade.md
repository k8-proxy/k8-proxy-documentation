---
title: Upgrading cs-api in an existing deployment
sidebar_label: Upgrading cs-api in an existing deployment
---


# Instructions

- SSH into Worker Cluster 
- Run:
    - `sudo su`
    - `git clone -b main https://github.com/k8-proxy/cs-k8s-api && cd cs-k8s-api`
- Example Result:

    ```
    Release "rebuild-api" has been upgraded. Happy Helming!
    NAME: rebuild-api
    LAST DEPLOYED: Tue Jun  8 11:23:12 2021
    NAMESPACE: icap-adaptation
    STATUS: deployed
    REVISION: 4
    TEST SUITE: None
    ```