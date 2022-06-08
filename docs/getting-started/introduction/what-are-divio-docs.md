---
title: What Are Divio Docs?
---

The [Divio documentation system](https://documentation.divio.com/) is a software documentation paradigm that is based on functionality and the premise that the best documentation is specific, concise, and, useful. Divio consists of four main categories: [tutorials](#tutorials), [how-to-guides](#how-to-guides), [reference guides](#reference-guides), and [explanations](#explanations).

Rancher docs employ the above categories but also add additional categories to assist its users: [getting started](#getting-started), [integrations in Rancher](#integrations-in-rancher), [FAQ](#faq), [Troubleshooting](#troubleshooting), and the ability to [contribute to Rancher](#contribute-to-rancher). These additional sections will enhance the user experience by providing Rancher-specific context to getting Rancher up and running quickly, answer frequently-encountered questions or problems, and to provide the opportunity to constantly improve our open-sourced docs by providing a means to contribute to them.

- [Getting Started](#getting-started)
- [Tutorials](#tutorials)
- [How-to Guides](#how-to-guides)
- [Reference Guides](#reference-guides)
- [Explanations](#explanations)
- [Overlapping of Categories](#overlapping-of-categories)
- [New Structure Goals](#new-structure-goals)
- [Other Docs Categories](#other-docs-categories)
    - [Integrations in Rancher](#integrations-in-rancher)
    - [FAQ](FAQ)
    - [Troubleshooting](#troubleshooting)
    - [Contribute to Rancher](#contribute-to-rancher)


## Getting Started

One of the most critical sections for many software documentation users is arguably the "Getting Started" section. Often users simply want to be able to begin working as soon as possible without additional detailed or explanatory information as well. For these users, we have a getting started section that includes an introductory overview of the Rancher Manager product, quick start guides, and guides to install and upgrade Rancher.

The goal of this section is to be able to assist users in deploying Rancher and workloads and to install or upgrade Rancher quickly and effectively.

Some example docs that are integral to getting started would be [understanding installation requirements](https://rancher.com/docs/rancher/v2.6/en/installation/requirements/) and [understanding resource options to run Rancher](https://rancher.com/docs/rancher/v2.6/en/installation/resources/).

## Tutorials

Tutorials describe practical steps for users to follow in order to complete some concrete action. Tutorials are known as "learning-oriented" docs in which users learn by "doing".

Tutorials are designed to guide beginners, or the everyday users of a product, through a series of steps to learn how to do something. The goal is that the user will be able to learn how to complete tasks by using easy-to-follow, meaningful, and repeatable directions. Good tutorials should assist new and existing users to do work to then get the promised results immediately.

It should be noted that tutorials do not provide detailed explanations on "why" something is done; the impetus is placed upon "how" to do some task. 

The average Rancher user has a level of technical skill that is above the level of "beginner"; however, the new Rancher tutorials are designed to help new, or beginner, users as well as the seasoned Rancher customer equally. This is accomplished by using a combination of high-level and technical language to introduce topics and guide the user through general tasks that are essential for every Rancher user to know.

A good example of a Rancher tutorial can be found [here](https://rancher.com/docs/rancher/v2.6/en/installation/resources/k8s-tutorials/infrastructure-tutorials/infra-for-ha/).

## How-to Guides

How-to guides are similar to [Tutorials](#tutorials) in that they also serve to describe practical steps for users to accomplish some task. How-to guides are "problem-oriented" docs in which users learn how to answer questions or solve problems. The major difference is that how-to guides are geared toward more experienced or advanced users who have more technical needs from their documentation. These users already have an understanding of Rancher and its functions and need additional guidance to complete some more complex task.

How-to guides also provide a series of detailed steps that will guide the experienced user to achieve a practical goal. Rancher users who will utilize how-to guides already know what they should achieve but just need help to learn how; conversely, tutorials teach the user both what they should know and how to achieve those results. 

It should be noted that how-to guides, like tutorials, do not provide detailed explanations or discussions. How-to guides focus on the action of guiding users through repeatable, effective steps.

A good example of a Rancher how-to guide can be found [here](https://rancher.com/docs/rancher/v2.6/en/cluster-admin/volumes-and-storage/provisioning-new-storage/).

## Reference Guides

Reference guides are technical descriptions of processes or products that users can study. Reference guides are designed to be "information-oriented" and their primary function is to describe.

These docs may also include some usage steps in the course of description; however, their purpose is not to explain concepts nor to outline steps to achieve tasks. 

The users who utilize reference guides are knowledgeable with the Rancher product as well as how to use it. They will benefit from detailed descriptions of something to be used when needing to refer to specifics of usage.

Good examples of Rancher reference guides would be [the Rancher Manager architecture](https://rancher.com/docs/rancher/v2.6/en/overview/architecture/) and [cluster configuration guides](https://rancher.com/docs/rancher/v2.6/en/cluster-admin/editing-clusters/).

## Explanations

Explanation docs are concerned primarily with providing theoretical knowledge for the "why" behind a task or a topic. Explanations are "understanding-oriented" in nature and will clarify a topic in order to broaden the user's knowledge. In this section, users can find additional context and background, alternatives or even opinions on topics, and often historical reasons, constraints, and insights into why a process works the way that it does.

Explanatory docs do not instruct the user how to do something, as in tutorials and how-to guides, nor do they give detailed descriptions as references do. Explanations serve to give substance and background on both simple and complex topics.

For our new docs, we are working to build up this section as most of our previous documentation was process-oriented rather than discussion-oriented. 

Good examples of Rancher explanatory documentation might be knowledge-based articles, [blogs](https://www.suse.com/c/rancherblog/[), and even [recorded knowledge-transfer sessions](https://web.microsoftstream.com/group/a3942832-550c-46fc-8e77-411621bf4473).

## Overlapping of Categories?

You may have noticed that within the confines of each category - tutorials, how-to guides, references, and explanations - there is some overlap. This is true because the flow of information is fluid, and so often docs will include data that may fall under more than one category.

Consider the following diagram:

![](/img/divio-quadrants.png)

Each "quadrant" has features in common to those that surround it:

- Tutorials and how-to guides both describe practical steps
- How-to guides and reference guides both address solving problems we encounter during working or coding
- Reference guides and explanations both focus on theoretical knowledge
- Tutorials and explanations both help users during the learning phase rather than while working

Although there is the tendency for these docs to overlap somewhat, if we keep in mind the four primary functions of each and work to make those distinct, then the documentation will be much clearer and useful for the user.

## New Structure Goals

Our previous Rancher documentation focused on individual features and topics; the new Divio paradigm prioritizes function and cohesion. 

Because the previous docs structure was not based on the Divio paradigm, not every doc as it is written currently will fall neatly into tutorials or references, for example. Some docs may include elements of all of the above categories in fact. 

As such, we have worked to move our existing documentation into the new paradigm based on each doc's alignment into each quadrant's discrete function. Moving forward, we will be rewriting and reshaping our docs as needed to more closely align with the Divio structure, purpose, and its design concepts. 

Ultimately, the finished product will much more cohesively and effectively assist our users by emphasizing functionality over individual topic or feature-based docs.

## Other Docs Categories

### Integrations in Rancher

Over time, Rancher has accrued several products and projects that have been integrated into the Rancher UI. To assist users in learning more about these integrations as well as how they function in the Rancher UI, this section has been dedicated to them. 

These docs are geared toward both new and existing Rancher users and provide detailed descriptions of the products as well as how they work within the Rancher UI. The purpose of these docs is to provide users what the product is and does, how it works at a high level, some prodecural steps to installing and using the product, and why it enhances the Rancher user experience.

Examples of some of these integrations are [Harvester](https://rancher.com/docs/rancher/v2.6/en/virtualization-admin/) and [NeuVector](https://rancher.com/docs/rancher/v2.6/en/neuvector-integration/). 

### FAQ

Our [FAQ](https://rancher.com/docs/rancher/v2.6/en/faq/) section is designed to answer the questions our users have been most often asking about Rancher v2.x. The nature of these questions may be technical or non-technical.

We work to continually add to and enhance this section; check back frequently for updates.

### Troubleshooting

The [troubleshooting section](https://rancher.com/docs/rancher/v2.6/en/troubleshooting/) is designed to help both new and existing Rancher users to troubleshoot known issues that they may encounter when using Rancher.

We work to continually add to and enhance this section; check back frequently for updates.

### Contribute to Rancher

The Rancher Manager documentation is always a work-in-progress; the docs work best when being constantly examined, updated, and improved upon. To do this more effectively, we call upon the community to assist us.

This [section](https://rancher.com/docs/rancher/v2.6/en/contributing/) will instruct users on the repositories used for Rancher, how to build the repositories, and what information is needed when filing an issue or creating a pull request. 

We review all contributions frequently and will provide feedback to contributors promptly.