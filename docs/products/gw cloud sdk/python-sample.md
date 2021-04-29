---
title: Python/PHP Code Sample
sidebar_label: Python/PHP Code Sample
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'PHP', value: 'php'},
  ]}>
  <TabItem value="python">

# Python

The following code snippets are examples of calling the Rebuild API using Python. The requests library is used to execute calls to the API.

## api/rebuild/base64
​In this example files are loaded from the OS and a request with the content type of 'application/json' is formed. The request is then sent to the API using the POST method. The JSON body also contains the content management flags.

The rebuilt file is returned as Base64, decoded by the client and written to disk.

```
import base64
import requests
​
​
url = "https://<host>:<port>/api/rebuild/base64"
​
""" rebuild a single file using the base64 endpoint.
allow (0) review comments in microsoft word files """
​
# open a local file
with open("data/doc/embedded_images_12kb.docx", "rb") as f:
    # convert from bytes to str of base64 string
    base64_string_input = base64.b64encode(f.read()).decode()
​
# send post request to /base64 endpoint, returns base64 encoded bytes
response = requests.post(
    url=url,
    json={
        "Base64": base64_string_input,
        "ContentManagementFlags": {
            "WordContentManagement": {
                "ReviewComments": 0,
            }
        }
    }
)
​
# convert base64 encoded bytes to string
base64_string_output = response.content.decode()
​
# metadata has been removed, base64 strings differ
assert base64_string_input != base64_string_output
​
# decode base64 string to bytes
sanitised_file_bytes = base64.b64decode(base64_string_output)
​
# write file locally
with open("data/doc/embedded_images_12kb_gwsanitised.docx", "wb") as f:
```

## api/rebuild/file

In this example the contents of the raw file are uploaded in a body with a content type of 'multipart/form-data'. The content management flags are serialised and sent as part of the form.

The rebuilt file contents are returned to the client and written to disk.


```
import json
import os
import requests
​
url = "https://<host>:<port>/api/rebuild/file"
​
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
                },
                data={
                    "contentManagementFlagJson": json.dumps({
                        "ExcelContentManagement": {
                            "Macros": 2,
                        },
                        "WordContentManagement": {
                            "InternalHyperlinks": 0,
                            "ExternalHyperlinks": 0,
                            "EmbeddedFiles": 1,
                            "EmbeddedImages": 1,
                        }
                    })
                }
            )
        if response.status_code == 200 and response.content:
            # glasswall successfully sanitised this file, write it to the new directory
            os.makedirs(os.path.dirname(output_file), exist_ok=True)
            with open(output_file, "wb") as f:
                f.write(response.content)
```


## api/rebuild/zipfile

In this example the contents of the zip file are uploaded in a body with a content type of 'application/zip'.

The rebuilt file contents are returned to the client and written to disk.


```
import json
import os
import requests
​
url = "https://<host>:<port>/api/rebuild/zipfile"
​
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

The following code snippets are examples of calling the Rebuild API using php. The requests library is used to execute calls to the API.

## api/rebuild/base64 using php
​In this example files are loaded from the OS and a request with the content type of 'application/json' is formed. The request is then sent to the API using the POST method. The JSON body also contains the content management flags.

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
    'Base64' => $base64,
    'ContentManagementFlags' => [
        'WordContentManagement' => [
            'ReviewComments' => '0'
        ],
    ]
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
//Send a file to Glasswall's Rebuild API  endpoint, returns base64 encoded bytes
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

</Tabs>


