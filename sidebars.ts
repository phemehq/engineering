import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "architecture",
    {
      type: "category",
      label: "Code Review",
      items: [
        "code-review",
        "code-review-comments",
        "code-review-pushback",
        "code-review-speed",
      ],
      collapsed: false,
    },
    "code-style",
    "devops",
    "security",
    "sre",
    "standards",
    "terminology",
  ],
};

export default sidebars;
