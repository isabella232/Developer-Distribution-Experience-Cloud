/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix:
    process.env.PATH_PREFIX || "/developer-distribution/experience-cloud/docs/",
  siteMetadata: {
    pages: [
      {
        path: "/developer-distribution/creative-cloud/",
        title: "Developer Distribution",
      },
      {
        path: "guides/index.md",
        title: "Documentation",
      },
      {
        title: "Support",
        path: "support/index.md",
      },
    ],
    subPages: [
      {
        path: "guides/index.md",
        title: "Developer Distribution",
        pages: [          
          {
            path: "guides/getting_started.md",
            title: "Getting Started",
          },          
          {          
            path: "guides/zxp/distribution.md",
            title: "What's new",
          },
          {
            title: "Submission",
            path: "guides/submission/overview.md",
            pages: [
              {
                path: "guides/submission/app_builder_submission.md",
                title: "App Builder ISV",
              },
              {
                path: "guides/submission/service_to_service.md",
                title: "Software Integrations",
              },             
            ],
          },
          {
            path: "guides/branding_guidelines.md",
            title: "Adobe Branding Guidelines",
          },
          {
            path: "guides/discoverandmanage.md",
            title: "Discover and Manage",
          },
          {
            title: "Custom Configurations",
            path: "guides/custom_configurations.md",
          },
        ],
      },
    ],
  },
  plugins: [`@adobe/gatsby-theme-aio`],
};
