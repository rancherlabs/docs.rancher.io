---
title: Kubernetes Concepts
---

This page explains concepts related to Kubernetes that are important for understanding how Rancher works. The descriptions below provide a simplified overview of Kubernetes components. For more details, refer to the official documentation on [Kubernetes components](https://kubernetes.io/docs/concepts/overview/components/).

### About Docker

Docker is the container packaging and runtime standard. Developers build container images from Dockerfiles and distribute container images from Docker registries. [Docker Hub](https://hub.docker.com/) is the most popular public registry. Many organizations also set up private Docker registries. Docker is primarily used to manage containers on individual nodes.

### About Kubernetes

Kubernetes is the container cluster management standard. YAML files specify containers and other resources that form an application. Kubernetes performs functions such as scheduling, scaling, service discovery, health check, secret management, and configuration management.

### What is a Kubernetes Cluster?

A cluster is a group of computers that work together as a single system.

A Kubernetes Cluster is a cluster that uses the Kubernetes container-orchestration system to deploy, maintain, and scale Docker containers, allowing your organization to automate application operations.

## Roles for Nodes in Kubernetes Clusters

Each computing resource in a Kubernetes cluster is called a node. Nodes can be either bare-metal servers or virtual machines. Kubernetes classifies nodes into three types: etcd nodes, control plane nodes, and worker nodes.

A Kubernetes cluster consists of at least one etcd, controlplane, and worker node.

### etcd Nodes

Rancher uses etcd as a data store in both single node and high-availability installations. In Kubernetes, etcd is also a role for nodes that store the cluster state.

The state of a Kubernetes cluster is maintained in etcd. The etcd nodes run the etcd database.

The etcd database component is a distributed key-value store used as Kubernetes storage for all cluster data, such as cluster coordination and state management. It is recommended to run etcd on multiple nodes so that there’s always a backup available for failover.

Although you can run etcd on just one node, etcd requires a majority of nodes, a quorum, to agree on updates to the cluster state. The cluster should always contain enough healthy etcd nodes to form a quorum. For a cluster with n members, a quorum is (n/2)+1. For any odd-sized cluster, adding one node will always increase the number of nodes necessary for a quorum.

Three etcd nodes is generally sufficient for smaller clusters and five etcd nodes for large clusters.

### Controlplane Nodes

Controlplane nodes run the Kubernetes API server, scheduler, and controller manager. These nodes take care of routine tasks to ensure that your cluster maintains your configuration. Because all cluster data is stored on your etcd nodes, control plane nodes are stateless. You can run control plane on a single node, although three or more nodes are recommended for redundancy. Additionally, a single node can share the control plane and etcd roles.

### Worker Nodes

Each worker node runs the following:

Kubelets: An agent that monitors the state of the node, ensuring your containers are healthy.
Workloads: The containers and pods that hold your apps, as well as other types of deployments.

Worker nodes also run storage and networking drivers, and ingress controllers when required. You create as many worker nodes as necessary to run your workloads.