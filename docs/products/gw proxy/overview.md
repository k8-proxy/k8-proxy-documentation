---
title: GW Proxy
sidebar_label: GW Proxy
---

# Reverse Proxy setup (example)

These instructions are provided as an example to proxy a website.

## Requirements

- **Ubuntu LTS** (Tested on Ubuntu 20.04 LTS)*

- **Docker**

- **Docker compose**

- **Git**

> *WSL (Windows Subsystem Linux) is not supported

## Preparation

We needed to check the website requests to check domains of interest, (domains that should be proxied), which typically are:

- Website main domain and www subdomain (if applicable)

- Domains used in redirects between website pages (example: authentication redirections)

- Domains that hosts files that should be rebuilt against Glasswall rebuild engine

### Finding domains of interest

- Open a browser that included dev tools (i.e: **Mozilla Firefox**)

- Open dev tools and switch to **Network** tab (CTRL+SHIFT+E in **Firefox**)

- Visit target website main page, surf the website and try to download files while watching requested domains 

- Save domains in question to be used in configuration

### Configuration

Use [this configuration file](https://github.com/k8-proxy/k8-reverse-proxy/blob/master/stable-src/gwproxy.env) as an example

- `ROOT_DOMAIN`: Domain used by the proxy (example: www.gov.uk.glasswall-icap.com is proxying www.gov.uk) 

- `ALLOWED_DOMAINS` : Comma separated domains accepted by the proxy, typically this should be domains of interest with the `ROOT_DOMAIN` value appended

- `SQUID_IP` IP address of squid proxy, used by nginx, should be only changed on advanced usage of the docker image (example: Kubernetes)

- `SUBFILTER_ENV`: Space separated text substitution rules in response body, formatted as **match,replace**, used for URL rewriting as in **.gov.uk,.gov.uk.glasswall-icap.com**

- `ICAP_URL`: ICAP server endpoint. 

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
    git clone https://github.com/k8-proxy/gp-engineering-website
    wget https://github.com/filetrust/sdk-rebuild-eval/raw/master/libs/rebuild/linux/libglasswall.classic.so -O k8-reverse-proxy/stable-src/c-icap/Glasswall-Rebuild-SDK-Evaluation/Linux/Library/libglasswall.classic.so
    cp -rf gp-engineering-website/* k8-reverse-proxy/stable-src/
    cd k8-reverse-proxy/stable-src/
  ```

- Tweak `openssl.cnf` to include domains of interest in **alt_names** section & tweak the **ALLOWED_DOMAINS** & **SUBFILTER_ENV** in `gwproxy.env` 

- Generate new SSL credentials
  
  ```bash
    ./gencert.sh
    mv full.pem nginx/
  ```

- Start the deployment    
  
  ```bash
    docker-compose up -d --build
  ```
  
  You will need to use this command after every change to any of the configuration files **gwproxy.env**, **subfilter.sh**, **docker-compose.yaml**, if any.
  
  ## Client configuration

- Add hosts records to your client system hosts file (i.e **Windows**: C:\Windows\System32\drivers\etc\hosts - **Linux, macOS and Unix-like:** /etc/hosts) as follows:
  
  ```
  127.0.0.1 www.adarma.com.glasswall-icap.com adarma.com.glasswall-icap.com cdn1.adarma.com.glasswall-icap.com
  ```
  
  In case the machine running the project is not your local computer, replace **127.0.0.1** with the project host IP.
  
  Make sure that tcp ports **80** and **443** are reachable and not blocked by firewall.
  
  ## Setting up cert for proxied site
  - all domains from **ALLOWED_DOMAINS** should be added to DNS for this setup
      ```bash 
        docker-compose down
    ```
  - SSH into the instance for proxied site and run
      ```bash 
        sudo apt update
        sudo apt upgrade -y
        sudo apt-get install certbot python3-certbot-nginx -y
        sudo certbot certonly --nginx
    ```
  - add your email and registered domains as requested
  - when successful, the following will be generated:
         ``` 
        /etc/letsencrypt/live/www.adarma.com.glasswall-icap.com/fullchain.pem
        /etc/letsencrypt/live/www.adarma.com.glasswall-icap.com/privkey.pem
        ```
  - copy contents of these files to ```full.pem``` in the nginx folder (make sure private key's content is followed by contents of fullchain)

## Access the proxied site
  
  - **Local Setup**: You can access the proxied site by browsing [www.adarma.com.glasswall-icap.com](https://www.adarma.com.glasswall-icap.com) after adding `k8-reverse-proxy/stable-src/ca.pem` to your browser/system ssl trust store.
  - **DNS Setup**: You can now access the proxied site by browsing [www.adarma.com.glasswall-icap.com](https://www.adarma.com.glasswall-icap.com), where you can verify that a valid certificate has been setup.

## Demo videos for proxied websites

[![](http://img.youtube.com/vi/pDFHgD6EdOQ/0.jpg)](http://www.youtube.com/watch?v=pDFHgD6EdOQ "")

[![](http://img.youtube.com/vi/Y7cuplbEn8o/0.jpg)](http://www.youtube.com/watch?v=Y7cuplbEn8o "")

[![](http://img.youtube.com/vi/mdCaZRQmg5M/0.jpg)](http://www.youtube.com/watch?v=mdCaZRQmg5M "")
