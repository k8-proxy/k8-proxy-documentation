---
title: Cloud SDK Security Architecture and Secure Deployment
sidebar_label: CloudSDK Secure Deployment
---

# Overview

GW Cloud SDK is a Kubernetes service that is added to ICAP infrastructure to provide access to
Glasswall Solutions file rebuild service through RESTful APIs.
GW Cloud SDK is implemented in compliant Kubernetes (see https://compliantkubernetes.io/) which
is a certified Kubernetes distribution.

Compliant Kubernetes is implemented in 2 clusters:

- A workload cluster, which hosts GW Cloud SDK (API)
- A service cluster, which hosts services for monitoring, logging and vulnerability management.
- For more information see here.

Glasswall is using DevSecOps principles to guide secure design at every stage of the ICAP project.
Vulnerability identification and remediation work is taking place for all key components to minimize
the risk of service interruption, or file compromise, either in transit, or during the CDR file rebuild
process.


# Security Principles 

Glasswall’s security posture for this project is governed by the following Core InfoSec principles:

1. No confidential data is recorded in the data analysis logs.
2. Each file Rebuild process is performed in its own new container. The container
    is provisioned for the process and destroyed once the process is complete. This will prevent
    lateral movement and further exploitation in case of an attack.
3. In case of a security breach, the Kubernetes clusters are stateless and can be destroyed and
    recreated on demand.
4. Movement of confidential files is heavily restricted to between the ICAP Service and File
    Storage.
5. Least privilege principle is applied all throughout the ICAP architecture - systems and
    components can communicate only where necessary for the functionality of the system.
6. Root user or Administrator user privileges is required for troubleshooting & maintenance but is
    not needed for the end user.

# Security Architecture Overview 

All technologies and platforms come with inherent risks that can surface as part of the development
process. Glasswall is aware of this and we have established processes to ensure products and systems
are being hardened to protect our solution and our customers. The security architecture is mainly
reflected in the principles above and in the architecture descriptions above. Furthermore, the security
architecture is composed of:


- No actions are carried out that could activate potentially malicious content of the file passing
through the system.
- The ICAP Request content is the only aspect of the received data from the client side that is
used as part of any calculations or processing by the ICAP service.
- The critical files reside in the Rebuilt and Original Store which are all in the same Kubernetes
cluster. These files are transitory, with a lifespan that extends only to the duration of the
processing transaction. Access to these Stores is restricted.
- Encryption is not enabled at rest by default, it can be depending on the cloud storage provider
- SSH access to the Workload cluster is disabled.
- Each file to be rebuilt is provided with a unique, random filename. This filename is used in both
the Original and Rebuilt store.
- The rebuilt files are in a separate storage (message in separate queue).
- Authentication and access control are implemented.
- Transport encryption is supported throughout the ICAP service (TLS v1.2+).
- To prevent escalation of privileges root user or administrator user are not required by
orchestrators, virtual machines, and/or container deliverables.
- FileDrop shall function properly with cloud-based virtual and native host-based Firewalls.
- Each service will have an associated Network Policy restricting it to communication with those
services it is supposed to communicate with.
- Monitoring and all utility components will be setup to avoid interfering with other workloads.


# Kubernetes Security 

We acknowledge that Kubernetes containers are not sandboxed entirely. Having said that every
Kubernetes container is destroyed after execution of a file through the pod. To ensure functionality


the Kubernetes API must be accessible from inside the cluster. Automounting of service tokens is
enabled: this is completely benign in a cluster with RBAC enabled since these tokens do not by
themselves allow any access to the API. Features enabled to ensure the security of the Kubernetes
clusters are

- Clusters are not multi-tenant.
- There is a default Pod Security Policy preventing privileged containers from running.
- Container images are run only from trusted sources to prevent malicious code from being run.
- Kubernetes vulnerabilities are being periodically monitored and addressed. To address the
[CVE-2020-8554](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-8554) that was reported in December 2020 we can say a risk assessment has been
done and deemed that the Risk Level is Low with a very unlikely possibility and Minor impact.
This vulnerability does not pose a significant threat to our architecture as our clusters are one-
tenant only, with access between clusters and to the internet restricted. IP whitelisting to
external IP addresses and event monitoring for the use of external IP addresses and is
recommended to the customer.
- Logging is enabled throughout the infrastructure.

# Threat Modelling

A threat model has been done on the ICAP service architecture. Based on the identified threats
embracing the STRIDE threat modelling methodology, multiple security controls have been
implemented.
To summarize:

- A dedicated request processing pod for each untrusted file.
- The creation of a logging service to mitigate the risk of log manipulation.
- Error messages & other transaction log content will not embed any file content.
- Error messages are restricted to benign metadata such as offsets.
- Avoidance of easily guessable filenames.
- Implementation of only the API functionality necessary to accept policy updates (regarding policy update service).
- File content is processed only in resource constrained environments to limit impacting concurrent processes.

    - The Transaction Query Service has authentication & access control in place.
    - Input validation is implemented for the Transaction Query Service: if the incorrect JSON is received, then the content won't be correctly deserialised into the class expected by the controller and this will block any further processing.
    - There is a store per cluster.
    - This change has reduced the attack service: access to the Transaction Event Store has been limited therefore no new threats have arisen from it.

Residual risks from this phase of work are formally accepted and mitigations to further reduce them are placed onto the product’s roadmap.

A specific security concern identified was also that a malware compromised pod could compromise the whole Rebuilt Store. To mitigate this, we limited the access of the pods to the Rebuilt Store.


# Security Testing 

At Glasswall we use:

- Software composition analysis with Dependabot.
- Static code analysis with Sonar Cloud & CodeQL.
- Container image scanning with Snyk.
- Web application vulnerability assessments with Burp Suite.
- A penetration test on the C# Cloud SDK API has been completed 25/05/2021. with no critical
vulnerabilities reported to present. A ful report will be available 27/05/2021.

Vulnerabilities are prioritized and remediated as per risk assessment. Components with known
vulnerabilities are being addressed.

# Encryption 

All web interfaces and client connections support TLS v1.2 and higher, using the encryption AES- 256
algorithm.

Connection between the workload cluster and the Web UI is managed. 

# Glasswall Analysis Report 

The Glasswall library operates in either Analysis or Protect mode:

- Analysis mode enables the content of files to be assessed with a report generated to summarize the non-conformances and potential threats.
- Protect mode addresses the issues that are identified, returning an updated document with the
remedies and sanitization changes necessary to remove any threat incorporated.

The following table is a file-type agnostic description of the data logged by Glasswall during document
analysis. The analysis report is produced in XML. The structure of the XML report is defined by the
Analysis Report XSD.

The Rebuild XML analysis report does not contain any confidential data as it is more of a physical
design of layout not the actual data. Below is a table with a list of the data handled in an exported XML
report structure.


| Analysis Report  | Description  | Nodes Included    | Data Classification |   
|--|--|--|--|
|gw:DocumentStatistics|Data for the document being analyzed|gw:DocumentSummary, gw:ContentManagementPolicy, gw:ContentGroups|Operational|
|gw:DocumentSummary |Provides the highest level of data in the analysis of the document.|gw:TotalSizeInBytes, gw:FileType,  gw:Version |Operational|
|gw:ContentManagementPolicy|Provides a snapshot of the relevant applied content management policy.|gw:ContentName, gw:ContentValue |Operational|
|gw:ContentGroups|Collection of gw:contentGroup nodes, group count attribute and ontentGroup nodes.|ContentGroup, Group count | Operational|
|gw:ContentGroup |A category of document element, or section of a document.|gw:BriefDescription |Operational|
|gw:ContentItems |A collection of gw:ContentItem nodes that log the checks associated with the enclosing gwContentGroup |itemCount records TechnicalDescription InstanceCount records TotalSizeInBytes AverageSizeInBytes MinSizeInBytes MaxSizeInBytes |Operational|
|gw:SanitisationItems |A collection of gw:SanitisationItem nodes that log any sanitization that is carried out within the enclosing gwContentGroup.|itemCount, gw:TechnicalDescription, gw:SanitisationId, gw:InstanceCount, TotalSizeInBytes, AverageSizeInBytes, MinSizeInBytes, MaxSizeInBytes | Operational|
|gw:RemedyItems |A collection of gw:RemedyItem nodes that logs any remedial work.|gw:TechnicalDescription, ItemCount, InstanceCount |Operational|
|gw:IssueItems |Collection of gw:IssueItem that log the checks associated with the enclosing gwContentGroup. |itemCount, gw:TechnicalDescription, IssueID, InstanceCount |Operational|
|gw:ExtractedItems |Collection of gw:ExtractedItem nodes.|itemCount,ExtractedItem |Operational|
|gw:ExtractedItem |Logs the details of each item extracted from the document. |gw:ExtractedImage |Operational|
|gw:ExternalData|Provided within the specification of the report to enable client applications to add document specific information to the report.|gw:MetaData, gw:MetaDataName, gw:MetaDataValue|Operational|




*Table 1 XML analysis report structure*

- For more information please click
[here](https://docs.glasswallsolutions.com/sdk/rebuild/Content/API/Glasswall-Analysis-Report.htm)
to see the XML Analysis Report documentation.

- For more information regarding Data Classification, please see section
[10.1](#_10.1_Data_Classification)

![image](https://user-images.githubusercontent.com/60857664/118844260-1da29c00-b8cb-11eb-8aa8-69c533aeda5a.png)


*Figure 1 XML Analysis Report Documentation Example*


# Data Classification 

| Handled Data  | Data type  | Data Description   | Data Classification |   
|--|--|--|--|
| Analysis Report|XML |Report summary of no-conformances and potential threats with an updated document with remedies and sanitization recommendations |Operational |
|Original store |Binary file content |File received for processing |Confidential / Critical  |
|Rebuilt store |Binary file content |Rebuild process output |Confidential / Critical|
|Adaption-request |AMQP messages (GUID, strings…) |Service bus, data passed in here  |Operational |
|Adaptation-outcome |AMQP messages (GUID, strings…) |Service bus, data passed in here  |Operational  |
|Transaction events |Logs |Provide Administrators with the ability to query the outcome of adaptation requests |Operational |




*Table 2 Data Classification*

## Data Classification Description 

**Critical** This classification label applies to the most sensitive business information that is intended for
use strictly within the organization. Its unauthorized disclosure could seriously and adversely impact
the business, its customers, its business partners, and its suppliers.

**Confidential** This classification label applies to less-sensitive business information that is intended for
use within the organization. Its unauthorized disclosure could adversely impact the business or its
customers, suppliers, business partners, or employees. Information that some people would consider
to be private is included in this classification.

**Operational** This classification label applies to essential operational data which is not classified as
sensitive.


# Secure Deployment 
Below demonstrates the steps to securely deploy GW Cloud SDK into AWS. Recommendations for
deployment on the workload cluster is to enable only Port 443, and close out all other ports.
It is recommended to deny public access to the ICAP Server, to avoid possible denial of service attacks.
Whitelisting only dedicated IPs and avoiding the use of is strongly recommended by the Glasswall
InfoSec Team. Using the SSH port 22 is recommended only for essential maintenance/troubleshooting.

Deployment on the monitoring cluster enables Grafana/Kibana default ports in automated
deployments. It is recommended to whitelist access to these ports from specific IPs. We recommend
using a central logging location (i.e. Elasticsearch) to enable the plug in of a SIEM (Security Information
and Event Management) service for security monitoring and alerting. If deployed into the Glasswall
AWS Environment DataDog will be used as a SIEM by the Glasswall InfoSec team, to detect possible
intrusions and security compromises.

Installed in front of the load balancer we highly recommend installing a WAF (Web Application
Firewall). This should be configured to block traffic to ports and offer protection against SQL
Injections, XSS, HTTP Floods, Scanners, Probes, Bots & Scrapers.

For AWS based deployments, we have a CloudFormation template which the preferred way to
integrate the service & workload clusters. Manual integration is suggested only in cases where CF
template cannot be used. Below details both manual and automated methods, along with validation.

Automated & Manual deployments will have the following configuration:


<table>
  <tr>
    <td>Service Name</td>
    <td>Port number</td>
    <td>Cluster</td>

  </tr>

  <tr>
    <td>HTTPS</td>
    <td>443</td>
    <td>Workload & Service Clusters</td>
  </tr>
  <tr>
    <td>Grafana</td>
    <td>3000</td>
    <td>Service Clusters</td>
  </tr>
  <tr>
    <td>Kibana</td>
    <td>5601</td>
    <td>Service Clusters</td>
  </tr>
  <tr>
    <td>API</td>
    <td>8080</td>
    <td>Workload Clusters</td>
  </tr>
  <tr>
    <td colspan="3">Deny All</td>
  </tr>
</table>

# Secure Deployment Summary


A summary of the recommendations for secure deployment into any cloud environment:

1. Use the automated deployment script where possible.
2. Keep only the necessary ports open (as recommended above).
3. Enforce whitelisting of only required IPs (do not use 0.0.0.0/0)
4. Use a WAF
5. Harden your cloud environment with security benchmarks (i.e. CIS). We recommend reviewing
    all the security settings in the account and ensuring that secure defaults have not been changed
    to less secure settings and that the most secure settings are used in areas that do not default to
    secure. This will help to identify and remediate weaknesses in the account's configuration and
    can be amended to cloud security standards.
6. Monitor the cloud environment for any security events with a SIEM

# Version History and Review

|Version: |Updated by: |Date:| Change:|
|--|--|--|--|
|V0.1 |Petra Vukmirovic |19. 05 .20 21| Initial Draft|
|V.0.2 |Chris Holman |20 .0 5 .2021 |Draft Reformatting, AWS Deployment Details|
|V1.0 |Chris Holman| 24.05.2021| WAF deployment details|
|V1.1 |Petra Vukmirovic |26 .0 5 .2021| New format adopted, full review, safe deployment summary|
|V1.2 |Chris Holman |26.05.2021| Reformatting, final review|
|V1. 3| Abbas Haidar |26 .0 5 .2021 |Formatting, final review|


# Glasswall InfoSec Team

|Name |Email| Role|
|--|--|--|
|Dinis Cruz |dcruz@glasswallsolutions.com |CISO|
|Abbas Haidar |ahaidar@glasswallsolutions.com |Head of IT and InfoSec|
|Petra Vukmirovic|pvukmirovic@glasswallsolutions.com |Cyber Security Engineer|
|Chris Holman |cholman@glasswallsolutions.com |Cyber Security Engineer|
