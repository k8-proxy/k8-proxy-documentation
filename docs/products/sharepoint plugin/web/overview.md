---
title: Sharepoint Online Overview
sidebar_label: Overview
---

see [Development Websites Dashboard for details](https://github.com/k8-proxy/k8-proxy-documentation/blob/f903ef2fd3f2b274300a2c75e9f2377af7bf3eca/docs/dashboards/websites/development.md)


# Reverse proxy configuration for saaspoc1.sharepoint.com

## Requirements

- **Ubuntu LTS** (Tested on Ubuntu 18.04 LTS)*

- **Docker**

- **Docker compose**

- **Git**

> *WSL (Windows Subsystem Linux) is not supported

## Preparation

This project doesn't apply URL rewriting
We needed to check the website requests to check domains of interest, (domains that should be proxied), which typically are:

- Website main domain and www subdomain (if applicable)

- Domains used in redirects between website pages (example: authentication redirections)

- Domains that hosts files that should be rebuilt against Glasswall rebuild engine

### Finding domains of interest

- Open a browser that included dev tools (i.e : **Mozilla Firefox**)

- Open dev tools and switch to **Network** tab (CTRL+SHIFT+E in **Firefox**)

- Visit target website main page, surf the website and try to download files while watching requested domains 

- Save domains in question to be used in configuration

### Configuration

Tweak **gwproxy.env** according to our configuration (a pre-configured file already included in the repository). This is a variables definition example: 

- `ROOT_DOMAIN`: the domain appended to the original website domain, typically: glasswall-icap.com
- `ALLOWED_DOMAINS` : Comma separated domains accepted by the proxy, typically this should be domains of interest (figured out in the previous step) with the `ROOT_DOMAIN` value appended
- `ICAP_URL` : the URL of the ICAP server either running on a docker on the same machine or through a load-balancer server.
- `SQUID_IP` IP address of squid proxy, used by nginx, should be only changed on advanced usage of the docker image (example: Kubernetes)
- `SUBFILTER_ENV`: Space separated text substitution rules in response body, formatted as **match,replace** used for URL rewriting as in **.gov.uk,.gov.uk.glasswall-icap.com**, but since this project doesn't apply URL rewriting, it will be an empty string. 

## Installation

- Execute the following to install the dependencies mentioned above
  
  ```bash
    sudo apt install -y curl git
    curl https://get.docker.com | bash -
    sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    sudo usermod -aG docker $(whoami)
  ```
  
  You need to logout and re-login after this step

- Prepare the repositories
  
  ```bash
    git clone --recursive https://github.com/k8-proxy/k8-reverse-proxy
    git clone https://github.com/k8-proxy/gp-sharepoint
    wget https://github.com/filetrust/sdk-rebuild-eval/raw/master/libs/rebuild/linux/libglasswall.classic.so -O k8-reverse-proxy/stable-src/c-icap/Glasswall-Rebuild-SDK-Evaluation/Linux/Library/libglasswall.classic.so
    cp -rf gp-sharepoint/* k8-reverse-proxy/stable-src/
    cd k8-reverse-proxy/stable-src/
  ```

- Tweak `openssl.cnf` to include domains of interest in **alt_names** section (by default, this file is pre-configured in the repository).

- Generate new SSL credentials
  
  ```bash
    ./gencert.sh
    mv full.pem nginx/
  ```

- Start the deployment    
  
  ```bash
    docker-compose up -d --build
  ```
  
  From now on, you will need to use this command after every change to any of the configuration files **gwproxy.env**, ***subfilter.sh***, **docker-compose.yaml**, if any.
  
  ## Troubleshooting

  Check if docker service is active   
  
  ```bash
    systemctl status docker
  ```
  
  Check if containers are up and running (not Restarting...)
  
  ```bash
  docker-compose ps
  ```
  
  If squid or nginx is not started correctly, then configuration parameters in `gwproxy.env` has been modified, execute:
  
  ```bash
  docker-compose up -d --force-recreate
  ```
  
  
  
  ## Client configuration
  
- Add hosts records to your client system hosts file (i.e **Windows**: C:\Windows\System32\drivers\etc\hosts - **Linux, macOS and Unix-like:** /etc/hosts) as follows:
  
  ```
  127.0.0.1 saaspoc1.sharepoint.com saaspoc1-my.sharepoint.com ukc-word-edit.officeapps.live.com ukc-excel.officeapps.live.com  ukc-powerpoint.officeapps.live.com 
  ```
  
  In case you are using a client other than machine running the project, replace **127.0.0.1** with the project host machine IP.
  
  Make sure that tcp ports **80** and **443** are reachable and not blocked by firewall.
  
  * Move ***k8-reverse-proxy/stable-src/ca.pem*** to your client machine and add it to your browser/system ssl trust store.
  
  ## Access the proxied site
  
  You can access the proxied site by browsing [saaspoc1.sharepoint.com](https://saaspoc1.sharepoint.com) .

...
