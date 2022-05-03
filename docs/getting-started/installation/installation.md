---
title: Installation
---

# Installing/Upgrading Rancher

This section provides an overview of the architecture options of installing Rancher, describing advantages of each option.

## Terminology

In this section,

- The Rancher server manages and provisions Kubernetes clusters. You can interact with downstream Kubernetes clusters through the Rancher server’s user interface. The Rancher management server can be installed on any Kubernetes cluster, including hosted clusters, such as Amazon EKS clusters.
- RKE (Rancher Kubernetes Engine) is a certified Kubernetes distribution and CLI/library which creates and manages a Kubernetes cluster.
- K3s (Lightweight Kubernetes) is also a fully compliant Kubernetes distribution. It is newer than RKE, easier to use, and more lightweight, with a binary size of less than 100 MB.
- RKE2 is a fully conformant Kubernetes distribution that focuses on security and compliance within the U.S. Federal Government sector.

Note the restrictedAdmin Helm chart option available for the Rancher Server. When this option is set to true, the initial Rancher user has restricted access to the local Kubernetes cluster to prevent privilege escalation. For more information, see the section about the restricted-admin role.

## Overview of Installation Options

Rancher can be installed on these main architectures:

### High-availability Kubernetes Install with the Helm CLI

We recommend using Helm, a Kubernetes package manager, to install Rancher on multiple nodes on a dedicated Kubernetes cluster. For RKE clusters, three nodes are required to achieve a high-availability cluster. For K3s clusters, only two nodes are required.

### Automated Quickstart to Deploy Rancher on Amazon EKS

Rancher and Amazon Web Services collaborated on a quick start guide for deploying Rancher on an EKS Kubernetes cluster following AWS best practices. The deployment guide is here.

### Single-node Kubernetes Install

Rancher can be installed on a single-node Kubernetes cluster. In this case, the Rancher server doesn’t have high availability, which is important for running Rancher in production.

However, this option is useful if you want to save resources by using a single node in the short term, while preserving a high-availability migration path. In the future, you can add nodes to the cluster to get a high-availability Rancher server.