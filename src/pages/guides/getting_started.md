---
keywords:
  - Experience Cloud
  - Marketplace
  - Exchange
  - Distribution
  - Extensibility
  - SDK
  - Developer Tooling
  - UXP
  - Photoshop
  - XD
  - Plugin
  - JavaScript
  - Developer Console
  - Experience Cloud Desktop
  - FastSpring
title: Getting Started
description: This is the getting started page
---

# Getting Started

This getting started guide introduces key areas of the [Adobe Developer Distribution portal](/distribute/home) to help developers begin distributing apps quickly and easily. The Adobe Developer Distribution portal enables quick publishing  of a **listing** for the app on two Experience Cloud Marketplace. The Experience Cloud desktop app Marketplace and Adobe Exchange in these three easy steps:

1. Add the public profile.
2. Create a **listing** to represent the app with metadata, the packaged app, and a **version**.
3. Submit a **listing** for approval to be published immediately or at a specific future date.

<InlineAlert slots="text" variant="help"/>

A **listing** is what users see on a Marketplace. It contains metadata to describe each app and how to use it, along with a specific **version** of the app to be installed by the Experience Cloud desktop app. For more details on these concepts and how they are used in the distribution of apps, see the [Glossary](./glossary.md).

## Overview

The following section will provide a brief overview of each view in the [Adobe Developer Distribution portal](/distribute/home) to help you get started using it quickly. This applies to both App Builder and service-to-service applications. 

## Home

The home page is where developers create their public profile and create a new listing for their app. "Quick start" links to create a new listing and edit/view a public profile can be found here. The "Get Started" box helps reminds developers that a profile must be created and submitted before any app can be submitted for approval.

![Screenshot of the home page without any created plugins](../images/DD_Home_first_time_user_sm.jpg)

As listings are created, up to three of the most recent will be shown for quick view and access. As listings are published, an "Insights" summary table will replace the "Get Started" box. To manage more than three listings, choose the **All listings** link or the **Listings** tab in the nav bar to go to the "Your Listings" page.

![Screenshot of the home page with links to three plugins](../images/DD_Home_returning_user.png)

## Creating a Listing

This is the listing Details screen, where the app will be created and submitted. Listing details and a new version together must be submitted together for the first listing. After publishing, the requestor can submit an update to the listing details or a new version independently from each other. 

![Screenshot of the home page with links to three plugins](../images/AppBuild_1Create_a_New_Listing_Blank.png)

Chose a listing type, the last box is for software integrations.

![Screenshot of the home page with links to three plugins](../images/AppBuild_2Choose_Listing_Type.png)

Once a listing is created, metadata can be entered from the listing details screen.

![Screenshot of the home page with links to three plugins](../images/AppBuild_3Review_and_Edit_Listing.png)

**New Submission** - Once the app has been built, tested, and packaged (using App Builder in the Adobe Developer Distribution portal), create the listing for the Marketplace. Executing the command "Distribute" will take you the Developer Console to create a listing for the app. 

![Screenshot of the home page with links to three plugins](../images/AppBuild_4General_Tab.png)

This is the landing page to create a submission. Note the following times: 

1. The navigation panel on the left confirms that this is the Listing Details screen.
2. The requestor's role and organization name are listed in the upper right-hand corner. If any profile details need to be edited, click the "Edit Public Profile" tab.
3. The menu at the top of the screen indicates the listing status, the platform, the last modified date, and the APP ID.

The listig details for the app are ready to be added now. 

### Listing Details

Submit the app builder new listing metadata in multiple tabs: General, Icons, Media, Products, Tags, and Services. All mandatory fields are marked with an asterisk. The General tab has Application name, a short description (subtitle), a long description, and support email.  Be sure to save a draft if you navigate away from the page.

![Screenshot of the home page with links to three plugins](../images/AppBuild_4General_Tab.png)

The icons tab requires three different icon sizes for each integration as well as a Featured image for featuring an integration.

![Screenshot of the home page with links to three plugins](../images/AppBuild_5Icons.png)

You can use 4-10 screenshots to describe the integration. Up to 10 documents (such as white papers) can be uploaded.

![Screenshot of the home page with links to three plugins](../images/AppBuild_6Screenshots.png)

The Products tab is for choosing which Adobe Experience Cloud products are required and/or optional for a software integration.

![Screenshot of the home page with links to three plugins](../images/AppBuild_7Products_Tab.png)

Categories and tags help customers discover and filter/sort software integrations published on the Experience Cloud Exchange Marketplace.

![Screenshot of the home page with links to three plugins](../images/AppBuild_8Categories_Tab.png)

The Services tab is for entering an optional End-User License Agreement and installation instructions.  Instruction templates are available for some Experience Cloud products.  An optional software revision number, release notes and supported languages can also be provided on the Services Tab.

![Screenshot of the home page with links to three plugins](../images/AppBuild_9Services_Tab.png)

When all of the listing details have been added and the mandatory fields are complete, the Preview and Submit button will be enableed. Click the button. Then, the marketplace preview from the submission modal or checklist will appear. Once a note is provided to a reviewer, the Submit for review button will be available.

![Screenshot of the home page with links to three plugins](../images/AppBuild_10Preview_and_Submit.png)

After the listing is submitted, a confirmation message appears on the listing overview screen. Note the status of the Listing changes from draft to “In review."

![Screenshot of the home page with links to three plugins](../images/AppBuild_11Confirmation_Message.png)

The developer will be notified by email when the listing has been approved and published on the marketplace. Listing details can be edited on a published listing. Metadata edits are highlighted by a yellow outline and the status has an edit suffix.  Edits can be submitted for review and will take effect immediately upon approval. Note the edit suffix on the submission modal and the fact that Delayed publishing is disabled for metadata changes to a published listing.

![Screenshot of the home page with links to three plugins](../images/AppBuild_12Edit_Submission.png)

### Reviewing A Submission

When an application has been submitted for review, an Adobe administrator will review the application details. 

![Screenshot of the home page with links to three plugins](../images/AppBuild_13ReviewsSubmission.png)

If all the information is complete and the requirements are met, the reviewer will approve the submission. 

![Screenshot of the home page with links to three plugins](../images/AppBuild_14ConfirmApproval.png)

The status of the submission will show a green "APPROVED" button. 

![Screenshot of the home page with links to three plugins](../images/AppBuilder_15ApproveForExchange.png)

### Revision

NOTE from CHANTA: Martin, I'm not sure what content to add here. Is there where instructions go for the developer to edit a listing? 


### Manage Screen 

CHANTA: Still working on this section-PROBABLY need to add the admin steps from Veronica's screenshots. 

To check the status of a submission, go to the Manage tab and look to see if there is an approval message near the bottom of the screen. Then follow the instructions to add a new environment to start installing the application. If it is approved, the following notification will appear: 

CHANTA: ADD SCREENSHOT OF APPBUILDER App_Approval HERE. 

If it is not approved or it is in pending status, the following notification will appear: 

CHANTA: ADD SCREENSHOT HERE. 

Once the new environment has been created, click the blue Deploy tab. CHANTA: I DON'T KNOW IF THIS IS CORRECT. 

CHANTA: ADD SCREENSHOT OF APPBUILDER Deploy HERE. 

