---
title: Linux Desktop OVA Import to ESXi
sidebar_label: Linux Desktop OVA Import to ESXi
---
## Linux Desktop OVA Import

- Download OVA file from S3

- From the controller (or from whatever the machine you have exported the OVA file to), access the ESXi server 

- Register a new VM and choose to be deployed from OVA or OVF file option

- Upload the OVA file and then finish the installation with default configuration

- Wait the upload to be done and you are good to go.

- By default, you should change password of username glasswall and configure network when VM start, please follow to change it

- Linux Desktop VM is now ready to be used