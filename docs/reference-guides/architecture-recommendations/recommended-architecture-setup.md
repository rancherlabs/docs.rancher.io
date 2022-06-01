---
title: Recommended Architecture Setup
---

## Separation of Rancher and User Clusters

A user cluster is a downstream Kubernetes cluster that runs your apps and services.

If you have a Docker installation of Rancher, the node running the Rancher server should be separate from your downstream clusters.

If Rancher is intended to manage downstream Kubernetes clusters, the Kubernetes cluster that the Rancher server runs on should also be separate from the downstream user clusters.

## Why HA is Better for Rancher in Production

We recommend installing the Rancher server on a high-availability Kubernetes cluster, primarily because it protects the Rancher server data. In a high-availability installation, a load balancer serves as the single point of contact for clients, distributing network traffic across multiple servers in the cluster and helping to prevent any one server from becoming a point of failure.

We don’t recommend installing Rancher in a single Docker container, because if the node goes down, there is no copy of the cluster data available on other nodes and you could lose the data on your Rancher server.

### K3s Kubernetes Cluster Installations

One option for the underlying Kubernetes cluster is to use K3s Kubernetes. K3s is Rancher’s CNCF certified Kubernetes distribution. It is easy to install and uses half the memory of Kubernetes, all in a binary of less than 100 MB. Another advantage of K3s is that it allows an external datastore to hold the cluster data, allowing the K3s server nodes to be treated as ephemeral.

### RKE Kubernetes Cluster Installations

In an RKE installation, the cluster data is replicated on each of three etcd nodes in the cluster, providing redundancy and data duplication in case one of the nodes fails.

## Recommended Load Balancer Configuration for Kubernetes Installations

We recommend the following configurations for the load balancer and Ingress controllers:

- The DNS for Rancher should resolve to a Layer 4 load balancer (TCP).
- The Load Balancer should forward port TCP/80 and TCP/443 to all 3 nodes in the Kubernetes cluster.
- The Ingress controller will redirect HTTP to HTTPS and terminate SSL/TLS on port TCP/443.
- The Ingress controller will forward traffic to port TCP/80 on the pod in the Rancher deployment.
