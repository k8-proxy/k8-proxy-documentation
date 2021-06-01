---
title: Python/PHP/JS Code Sample
sidebar_label: Python/PHP/JS Code Sample
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'PHP', value: 'php'},
    {label: 'JavaScript', value:'js'},
  ]}>
  <TabItem value="python">

# Python

The following code snippets are examples of calling the GW Cloud SDK using Python. The requests library is used to execute calls to the API.

## api/rebuild/base64
In this example, files are loaded from the OS and a request with the content type of 'application/json' is formed. The request is then sent to the API using the POST method. 
The rebuilt file is returned as Base64, decoded by the client and written to disk.

```
import base64
import requests


url = "https://<host>:<port>/api/rebuild/base64"

""" rebuild a single file using the base64 endpoint.
allow (0) review comments in microsoft word files """

# open a local file
with open("data/doc/embedded_images_12kb.docx", "rb") as f:
    # convert from bytes to str of base64 string
    base64_string_input = base64.b64encode(f.read()).decode()

# send post request to /base64 endpoint, returns base64 encoded bytes
response = requests.post(
    url=url,
    json={
        "Base64": base64_string_input
    }
)

# convert base64 encoded bytes to string
base64_string_output = response.content.decode()

# metadata has been removed, ensure base64 strings are different
assert base64_string_input != base64_string_output

# decode base64 string to bytes
sanitised_file_bytes = base64.b64decode(base64_string_output)

# write file locally
with open("data/doc/embedded_images_12kb_gwsanitised.docx", "wb") as f:
```

## api/rebuild/file

In this example, the contents of the raw file are uploaded in a body with a content type of 'multipart/form-data'.

The rebuilt file contents are returned to the client and written to disk.


```
import json
import os
import requests

url = "https://<host>:<port>/api/rebuild/file"

""" rebuild all files in the "data" directory, writing to a new "data_gwsanitised" directory with the same folder structure.
disallow (2) excel files that contain macros and don't write them to the new directory.
allow (0) internal and external hyperlinks found in word documents, but sanitise other content
sanitise (1, default) and write all other files. """
directory = "data"
for root, dirs, files in os.walk(directory):
    for file_ in files:
        # create input and out file file paths
        input_file = os.path.join(root, file_)
        output_file = os.path.join(f"{directory}_gwsanitised", os.path.relpath(input_file, directory))
        with open(input_file, "rb") as f:
            # send post request
            response = requests.post(
                url=url,
                files=[("file", f)],
                headers={                    
                    "accept": "application/octet-stream"
                }
            )
        if response.status_code == 200 and response.content:
            # glasswall successfully sanitised this file, write it to the new directory
            os.makedirs(os.path.dirname(output_file), exist_ok=True)
            with open(output_file, "wb") as f:
                f.write(response.content)
```


## api/rebuild/zipfile

In this example, the contents of the zip file are uploaded in a body with a content type of 'application/zip'.

The rebuilt file contents are returned to the client and written to disk.


```
import json
import os
import requests

url = "https://<host>:<port>/api/rebuild/zipfile"

""" rebuild all files in the "data" directory, writing to a new "data_gwsanitised" directory with the same folder structure.
disallow (2) excel files that contain macros and don't write them to the new directory.
allow (0) internal and external hyperlinks found in word documents, but sanitise other content
sanitise (1, default) and write all other files. """
directory = "data"
for root, dirs, files in os.walk(directory):
    for file_ in files:
        # create input and out file file paths
        input_file = os.path.join(root, file_)
        output_file = os.path.join(f"{directory}_gwsanitised", os.path.relpath(input_file, directory))
        with open(input_file, "rb") as f:
            # send post request
            response = requests.post(
                url=url,
                files=[("file", f)],
                headers={     
                    "content-type":"application/zip",               
                    "accept": "application/octet-stream"
                }
            )
        if response.status_code == 200 and response.content:
            # glasswall successfully sanitised this file, write it to the new directory
            os.makedirs(os.path.dirname(output_file), exist_ok=True)
            with open(output_file, "wb") as f:
                f.write(response.content)
```

  </TabItem>

  <TabItem value="php">

  # PHP

The following code snippets are examples of calling the GW Cloud SDK using php. The requests library is used to execute calls to the API.

## api/rebuild/base64 using php
In this example, files are loaded from the OS and a request with the content type of 'application/json' is formed. The request is then sent to the API using the POST method.

The rebuilt file is returned as Base64, decoded by the client and written to disk.

```
<?php
$jwt_token = "YOUR_JWT_TOKEN";
url = "https://<host>:<port>/api/rebuild/base64"
// local file
$Input_File = 'YOUR/INPUT/FILE.docx';
$output_file_path = "YOUR/OUTPUT/FILE.docx";
// convert base64 encoded bytes to string
$base64 = base64_encode(file_get_contents($Input_File));
$data = [
    'Base64' => $base64
   ];
$json_data = json_encode($data);
// create  context 
$context = stream_context_create([
    'http' => [
        'method' => 'POST',
        'header' => "Authorization: " . $jwt_token . "\r\n" .
            "Content-type: application/json\r\n" .
            "Accept: application/json\r\n" .
            "Connection: close\r\n" .
            "Content-length: " . strlen($json_data) . "\r\n",
        'content' => $json_data
    ],

]);
//Send a file to Glasswall's GW Cloud SDK  endpoint, returns base64 encoded bytes
$response = file_get_contents($url, false, $context);
if ($response === false) {
    exit("Unable to get data at $url");
}
//decode base64 string to bytes
$base64_string_output = base64_decode($response);
//save file to local
if (file_put_contents($output_file_path, $base64_string_output)) {
    echo "File downloaded successfully";
} else {
    echo "File downloading failed.";
}
```


  </TabItem>

  <TabItem value="js">


# JavaScript

 The following code snippets are examples of calling the GW Cloud SDK using JavaScript. The requests library is used to execute calls to the API.

## Process File

In this example, files are loaded from the OS and a request with the content type of ‘application/json’ is formed. The request is then sent to the API using the POST method.
The rebuilt file is returned as a file, decoded by the client and written to disk.

```const fs = require('fs');
const request = require('request');

const apiUrl = 'https://<host>:<port>/api/rebuild/file';
const inputFilePath = './data/gw.pdf';
const cleanFilePath = './data/clean.pdf';

const processFile = async () => {
    return new Promise(function (resolve, reject) {
        const options = {
            method: "POST",
            url: apiUrl,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            formData: {
                "file": fs.createReadStream(inputFilePath)
            },
            encoding: null
        };

        request(options, function (err, res, response) {
            if (!err && res.statusCode == 200) {
                fs.writeFileSync(cleanFilePath, response);
                resolve(true);
            } else {
                reject(err);
            }
        });
    });
}

module.exports = { processFile };
```
## Process Zip

In this example, files are loaded from the OS and a request with the content type of ‘application/json’ is formed. The request is then sent to the API using the POST method.
The rebuilt file is returned as zip file, decoded by the client and written to disk.
```
const fs = require('fs');
const request = require('request');

const apiUrl = 'https://<host>:<port>/api/rebuild/zipfile';
const inputFilePath = './data/gw.zip';
const cleanFilePath = './data/clean.zip';

const processZip = async () => {
    return new Promise(function (resolve, reject) {
        const options = {
            method: "POST",
            url: apiUrl,
            headers: {
                "Content-Type": "multipart/form-data"
            },
            formData: {
                "file": fs.createReadStream(inputFilePath)
            },
            encoding: null
        };

        request(options, function (err, res, response) {
            if (!err && res.statusCode == 200) {
                fs.writeFileSync(cleanFilePath, response);
                resolve(true);
            } else {
                reject(err);
            }
        });
    });
}

module.exports = { processZip };
```
## Process Base64

In this example, files are loaded from the OS and a request with the content type of ‘application/json’ is formed. The request is then sent to the API using the POST method.
The rebuilt file is returned as Base64, decoded by the client and written to disk.

```
const fs = require('fs');
const request = require('request');

const apiUrl = 'https://<host>:<port>/api/rebuild/base64';
const inputFilePath = './data/gw.pdf';
const cleanFilePath = './data/clean.pdf';

const processBase64 = async () => {
    return new Promise(function (resolve, reject) {
        const contents = fs.readFileSync(inputFilePath, { encoding: 'base64' });
        const options = {
            method: "POST",
            url: apiUrl,
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                base64: contents
            },
            json: true
        };

        request(options, function (err, res, response) {
            if (!err && res.statusCode == 200) {
                fs.writeFileSync(cleanFilePath, response, { encoding: 'base64' });
                resolve(true);
            } else {
                reject(err);
            }
        });
    });
}

module.exports = { processBase64 };
```

  </TabItem>

</Tabs>

# Limitations of GW Cloud SDK with CK8s setup

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

