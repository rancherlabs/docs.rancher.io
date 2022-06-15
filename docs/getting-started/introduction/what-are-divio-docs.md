---
title: What Are Divio Docs?
---

The [Divio documentation system](https://documentation.divio.com/) is a software documentation paradigm that is based on functionality and the premise that the best documentation is specific, concise, and useful. Divio traditionally consists of four main categories: tutorials, how-to guides, reference guides, and explanations. 

In our docs, we have used this guideline to craft a unique set of docs which include [getting started](../../getting-started.md), [how-to guides](../../how-to-guides.md) (including [new](../../pages-for-subheaders/new-user-guides.md) and [advanced user guides](../../pages-for-subheaders/advanced-user-guides.md)), [reference guides](../../reference-guides.md), an [FAQ section](../../faq.md), [troubleshooting tips](../../troubleshooting.md), and the ability to [contribute to Rancher](../../contribute-to-rancher.md). 

- [Getting Started](#getting-started)
- [How-to Guides](#how-to-guides)
    - [New User Guides](#new-user-guides)
    - [Advanced User Guides](#advanced-user-guides)
- [Reference Guides](#reference-guides)
    - [Integrations in Rancher](#integrations-in-rancher)
- [Other Docs Categories](#other-docs-categories)
    - [FAQ](#faq)
    - [Troubleshooting](#troubleshooting)
    - [Contribute to Rancher](#contribute-to-rancher)
- [Overlapping of Categories](#overlapping-of-categories)
- [New Structure Goals](#new-structure-goals)


## Getting Started

One of the most critical sections for many software documentation users is arguably the "Getting Started" section. Often users simply want to be able to begin working as soon as possible without additional detailed or explanatory information as well. For these users, we have a getting started section that includes an introductory overview of the Rancher Manager product, quick start guides, and guides to install and upgrade Rancher.

The goal of this section is to be able to assist users in deploying Rancher and workloads and to install or upgrade Rancher quickly and effectively.

Some example docs that are integral to getting started would be [understanding installation requirements](../../pages-for-subheaders/installation-requirements.md) and [understanding resource options to run Rancher](../../pages-for-subheaders/resources.md).

## How-to Guides

How-to guides serve to describe practical steps for users to accomplish some task. In Rancher, we break down how-to guides further into [new user guides](#new-user-guides) and [advanced user guides](#advanced-user-guides).

### New User Guides 

New user guides, also known as tutorials, describe practical steps for users to follow in order to complete some concrete action. These docs are known as "learning-oriented" docs in which users learn by "doing".

The new user guides are designed to guide beginners, or the everyday users of Rancher, through a series of steps to learn how to do something. The goal is that the user will be able to learn how to complete tasks by using easy-to-follow, meaningful, and repeatable directions. These guides will assist users to do work to then get the promised results immediately.

The average Rancher user has a level of technical skill that is above the level of "beginner"; however, the new user guides are designed to help new, or beginner, users as well as the seasoned Rancher customer equally. This is accomplished by using a combination of high-level and technical language to introduce topics and guide the user through general tasks that are essential for every Rancher user to know.

A good example of a new user guide can be found [here](../../how-to-guides/new-user-guides/kubernetes-resources-setup/workloads-and-pods/deploy-workloads.md).

### Advanced User Guides

Advanced user guides are "problem-oriented" docs in which users learn how to answer questions or solve problems. The major difference between these and the new user guides is that these guides are geared toward more experienced or advanced users who have more technical needs from their documentation. These users already have an understanding of Rancher and its functions. They know what they need to accomplish; they just need additional guidance to complete some more complex task they they have encountered while working.

It should be noted that neither new user guides nor advanced user guides provide detailed explanations or discussions (these kinds of docs belong elsewhere). How-to guides focus on the action of guiding users through repeatable, effective steps to learn new skills, master some task, or overcome some problem.

A good example of an advanced user guide can be found [here](../../how-to-guides/advanced-user-guides/manage-clusters/create-kubernetes-persistent-storage/manage-persistent-storage/dynamically-provision-new-storage.md).

## Reference Guides

Reference guides are technical descriptions of processes or products that users can study. Reference guides are designed to be "information-oriented" and their primary function is to describe.

These docs may also include some usage steps in the course of description; however, their purpose is not to explain concepts nor to outline steps to achieve tasks. 

The users who utilize reference guides are knowledgeable with the Rancher product as well as how to use it. They will benefit from detailed descriptions of something to be used when needing to refer to specifics of usage.

Good examples of Rancher reference guides would be the [Rancher Manager architecture](../../pages-for-subheaders/rancher-manager-architecture.md) and [cluster configuration guides](../../pages-for-subheaders/cluster-configuration.md).

### Integrations in Rancher

Over time, Rancher has accrued several products and projects that have been integrated into the Rancher UI. To assist users in learning more about these [integrations](../../pages-for-subheaders/integrations-in-rancher.md), this subsection has been added under **references**. 

Examples of some of these integrations are [Harvester](../../reference-guides/integrations-in-rancher/harvester.md) and [NeuVector](../../reference-guides/integrations-in-rancher/neuvector.md). 

## Other Docs Categories

### FAQ

Our [FAQ](../../faq.md) section is designed to answer the questions our users have been most often asking about Rancher v2.x. The nature of these questions may be technical or non-technical.

We work to continually add to and enhance this section; check back frequently for updates.

### Troubleshooting

The [troubleshooting section](../../troubleshooting.md) is designed to help both new and existing Rancher users to troubleshoot known issues that they may encounter when using Rancher.

We work to continually add to and enhance this section; check back frequently for updates.

### Contribute to Rancher

The Rancher Manager documentation is always a work-in-progress; the docs work best when being constantly examined, updated, and improved upon. To do this more effectively, we call upon the community to assist us.

This [contributing to Rancher section](../../contribute-to-rancher.md) will instruct users on the repositories used for Rancher, how to build the repositories, and what information is needed when filing an issue or creating a pull request. 

We review all contributions frequently and will provide feedback to contributors promptly.

## Overlapping of Categories

You may have noticed that within the confines of each category - new user guides, advanced user guides, references - there is some overlap. This is true because the flow of information is fluid, and so often docs will include data that could logically fall under more than one category.

Consider the following diagram from Divio. Each "quadrant" has features in common to those that surround it:

![](/img/divio-quadrants.png)


Although there is the tendency for our docs to overlap somewhat, if we keep in mind the primary functions of each category and work to make those distinct, then the documentation will be much clearer and useful for users.

## New Structure Goals

Our previous Rancher documentation focused on individual features and topics; the new Divio paradigm prioritizes function and cohesion. 

Because the previous docs structure was not based on the Divio paradigm, not every doc as it is written currently will fall neatly into a user guide or a reference, for example. Some docs may include elements of several kind of documentation functions.

As such, we have worked to move our existing documentation into the new paradigm based on each doc's function. Moving forward, we will be creating, rewriting, and reshaping our docs as needed to more closely align with the Divio structure, purpose, and its design concepts. 

Ultimately, the finished product will much more cohesively and effectively assist our users by emphasizing functionality over individual topic or feature-based docs.