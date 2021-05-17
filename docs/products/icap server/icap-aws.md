---
title: Deploying ICAP Server on AWS
sidebar_label: Deploying ICAP Server on AWS
---

## Installation video 
- Installation Video (OVA)

[![Installation Video (OVA)](https://img.youtube.com/vi/f5ETATR7eX4/hqdefault.jpg)](https://www.youtube.com/watch?v=f5ETATR7eX4&feature=youtu.be)

- Installation Video (AMI)

[![Installation Video (OVA)](https://img.youtube.com/vi/DUo-Qnw4ojE/hqdefault.jpg)](https://www.youtube.com/watch?v=DUo-Qnw4ojE&feature=youtu.be)

## Prerequisites 

- ICAP Server AMI ID or OVA
- Enable AWS Security Token Service (AWS STS) in the Region where you plan to use VM Import
- AWS CLI

## Setup AWS access

- Install [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) on your local machine

    - AWS CLI installation [Linux](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html):
        ```
        curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
        unzip awscliv2.zip
        sudo ./aws/install
        ```
    
    - AWS CLI installation [WIN](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html):
        ```
        - Download and install msi: https://awscli.amazonaws.com/AWSCLIV2.msi
        - To verify AWS CLI was installed succesufully open CMD and run: aws --version
        - Result should be like: aws-cli/2.1.1 Python/3.7.4 Windows/10 botocore/2.0.0
        ```

- [Setup AWS Console access](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html)
    - From CMD run: `aws configure` 
    - Enter the data for values as they pop up.
        ```
        example:
            AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE
            AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
            Default region name [None]: eu-west-1
            Default output format [None]: json
        ```
- If you have MFA token enabled for authentication to AWS account, you should [set up MFA token authenticate through AWS CLI](https://aws.amazon.com/premiumsupport/knowledge-center/authenticate-mfa-cli/).
    - Run: `aws sts get-session-token --serial-number arn-of-the-mfa-device --token-code code-from-token`
    - Replace arn-of-the-mfa-device with your username and AWS number and enter MFA code as code-from-token 
    - Then export the values
      ```
      export AWS_ACCESS_KEY_ID=<Value>
      export AWS_SECRET_ACCESS_KEY=<Value>
      export AWS_SESSION_TOKEN= <Value>
      ```

## Deploying ICAP Server OVA

- After downloading ICAP Server OVA, navigate to AWS S3 > Buckets > Create Bucket > Upload ICAP Server OVA
- In your local machine, run `aws configure`, specifying the region of where the bucket was created
- Create Service Role as instructed [here](https://docs.aws.amazon.com/vm-import/latest/userguide/vmie_prereqs.html#vmimport-role)
- Create a `containers.json` file as shown below:
  ```
  [
  {
    "Description": "My Server OVA",
    "Format": "ova",
    "UserBucket": {
        "S3Bucket": "my-import-bucket", 
        "S3Key": "vms/my-server-vm.ova" 
    }
  }]
  ```


- Run `aws ec2 import-image --description "My server disks" --disk-containers "file://PATH_TO_containers.json"`

- Monitor import by running 
```
aws ec2 describe-import-image-tasks --import-task-ids import-ami-ID
```
- Use final AMI ID you got and follow the steps in next section

## Deploying ICAP Server AMI

- Navigate to AWS > EC2 > Launch Instance > AMIs
- Search for the AMI with the specific ID
  - Instance Type: `t2.large`
  - Storage: 20 GB
  - Security Group: 
    - Create a new security group > Add Rule:
      - Custom TCP > Port 1344 [ICAP Client Connection]
      - SSH > Port 22 [SSH to ICAP Instance]
      - HTTPS > Port 443 [ICAP Management UI]
      - Custom TCP > 1345 [ICAP client connection over TLS]
      - Custom TCP > 7000 [Instance based health check metrics]

- Review & Launch
- Create or use existing key pair [**Note**: Your key pair is important for SSH]
- Once the instance is in running state, it takes around 5-10 minutes for all the services to be healthy

## Remove Internet Access From ICAP Server (Optional)

- EC2 > Navigate to your instance > Under your Instance Summary > Security
![security-tab](https://user-images.githubusercontent.com/60857664/108712705-d735df00-751f-11eb-9bdb-388cbf43a687.png)
- Security Details > Security Groups > Click on `sg-...` (your launch-wizard)
- Outbound rules tab > Edit outbound rules > Delete the outbound rule & save rules
![Screenshot from 2021-02-22 15-18-03](https://user-images.githubusercontent.com/60857664/108713672-36e0ba00-7521-11eb-93d1-e10246562216.png)


## Troubleshooting
- If the UI does not load, run `kubectl get pod -A` to check the status of pods
- If their status is not `ready`, in home directory run `./flush_iptables.sh`
- Then run `sudo systemctl restart k3s`
- Give it ~10 minutes before usage
- In case you see `metricbit` pod crashing, bare in mind, this will not impact the system setup. In case there is an elasticsearch in private network which can be connected by metricbeat, then the metricbeat pod will run fine, if there is no elasticsearch then it will keep crashing but without any impact. 
