---
title: How to Use the API
sidebar_label: API
---

The API has its own user interface accessible from a web browser. This is an easy way to see resources, perform actions, and see the equivalent cURL or HTTP request & response. To access it:

_Rancher v2.6.4+_
1. Click on your user avatar in the upper right corner.
1. Click **Account & API Keys**.
1. Under the **API Keys** section, find the **API Endpoint** field and click the link. The link will look something like `https://<RANCHER_FQDN>/v3`, where `<RANCHER_FQDN>` is the fully qualified domain name of your Rancher deployment.

## Authentication

API requests must include authentication information. Authentication is done with HTTP basic authentication using API Keys. API keys can create new clusters and have access to multiple clusters via `/v3/clusters/`. Cluster and project roles apply to these keys and restrict what clusters and projects the account can see and what actions they can take.

By default, some cluster-level API tokens are generated with infinite time-to-live (`ttl=0`). In other words, API tokens with `ttl=0` never expire unless you invalidate them. For details on how to invalidate them, refer to the API tokens page.