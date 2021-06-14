---
title: Compliant Kubernetes
sidebar_label: Compliant Kubernetes
---

* This document is prepared from compliant kubernetes official documentation [website](https://compliantkubernetes.io/) for the sake of simplifying compliant kubernetes and demonstrating its capabilities.

# [Overview](https://compliantkubernetes.io/)
# [Kubernetes API](https://compliantkubernetes.io/user-guide/kubernetes-api/)

# [Architecture](https://compliantkubernetes.io/#architecture)


# Features

# Service Cluster

## [Elasticsearch/Kibana](https://compliantkubernetes.io/user-guide/elasticsearch/)

## [Prometheus/Grafana](https://compliantkubernetes.io/user-guide/prometheus/)

# [Backups](https://compliantkubernetes.io/operator-manual/disaster-recovery/)


# Glasswall ICAP Adaptation Service on Compliant Kubernetes

**Added features:**
- Ingress controller (Nginx)
- Policy enforcement ([OPA](https://open-policy-agent.github.io/gatekeeper/website/docs/))
- Log collector/forwarder (Fluentd)
- Metrics collection and monitoring ([Prometheus](https://prometheus.io/)/Grafana)
- Intrusion detection and breach reporting ([Falco](https://falco.org/))
- Certificate management ([Cert-manager](https://cert-manager.io/))
- Centralized logging Service ([Elasticsearch](https://opendistro.github.io/for-elasticsearch/)/Kibana)

**To be added features:**
- Metrics collection and monitoring ([Prometheus](https://prometheus.io/)/Grafana)
    - Activate alerting using [Prometheus AlertManger](https://grafana.com/grafana/plugins/camptocamp-prometheus-alertmanager-datasource/) 
    - Custom grafana dashboards 
- Backup/restore Service ([Velero](https://velero.io/))
    - Only for Service cluster resources as workload cluster are single node disposable clusters
- Elasticsearch and Influxdb backup to s3 bucket as part of [disaster recovery](https://compliantkubernetes.io/operator-manual/disaster-recovery/).
- Container registry, including vulnerability scanning ([Harbor](https://goharbor.io/))
- Single sign-on Service ([Dex](https://dexidp.io/))
- Regulate [use of credentials](https://compliantkubernetes.io/operator-manual/credentials/). 




