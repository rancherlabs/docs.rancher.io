---
title: Configure OpenLDAP
---

# OpenLDAP Configuration Reference

This section is intended to be used as a reference when setting up an OpenLDAP authentication provider in Rancher.

For further details on configuring OpenLDAP, refer to the [official documentation](https://www.openldap.org/doc/).

### Background: OpenLDAP Authentication Flow

1. When a user attempts to login with LDAP credentials, Rancher creates an initial bind to the LDAP server using a service account with permissions to search the directory and read user/group attributes.
1. Rancher then searches the directory for the user by using a search filter based on the provided username and configured attribute mappings.
1. Once the user has been found, they are authenticated with another LDAP bind request using the user’s DN and provided password.
1. Once authentication succeeded, Rancher then resolves the group memberships both from the membership attribute in the user’s object and by performing a group search based on the configured user mapping attribute.