---
title: Endpoints
sidebar_label: Endpoints
---

## Glasswall File Rebuild Product API (Swagger)
https://cloud-sdk.glasswallsolutions.com/swagger/index.html

## Endpoints available

| API Endpoint | Method | Description | 
|------|---------|---------    |
|/api/health    | GET |  This endpoint is to check the health of the system|
|/api/rebuild/file    | POST |  Rebuilds a file using its binary data       |
|/api/rebuild/base64   | POST | Rebuilds a file using the Base64 encoded representation |
|/api/rebuild/zipfile | POST | Rebuilds a zip file using its binary data|
|/api/rebuild/protectedzipfile|POST|Rebuilds a protected zip file using its binary data and password|
|/api/analyse/base64|POST|Analyse a file using the Base64 encoded representation|
|/api/analyse/file|POST|Analyse a file using it's binary data|
|/api/analyse/xmlreport|GET|Returns a xml report file using its FileId|
|/api/analyse/rebuild-zip-from-base64|POST|Returns a zip file with all available data using the Base64 encoded representation|
|/api/analyse/rebuild-zip-from-file|POST| Returns a zip file with all available data using its binary data|
|/api/SDK/rebuild-zip-from-base64|POST|Returns a zip file with all available data using the Base64 encoded representation|
|/api/SDK/rebuild-zip-from-file|POST|  Returns a zip file with all available data using its binary data|
|/api/filetypedetection/base64|POST| Detect a file type and other information using the Base64 encoded representation|
|/api/detail/version|GET| Return the versions of the API and SDK engine|

