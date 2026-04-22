import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "PhemeHQ Engineering",
  tagline: "Engineering practices and standards",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://phemehq.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/engineering/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "phemehq", // Usually your GitHub org/user name.
  projectName: "engineering", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/phemehq/engineering/tree/main/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
          },
          editUrl: "https://github.com/phemehq/engineering/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/hero.png",
    colorMode: {
      respectPrefersColorScheme: false,
      disableSwitch: true,
      defaultMode: "light",
    },
    navbar: {
      title: "PhemeHQ Engineering",
      logo: {
        alt: "PhemeHQ",
        src: "img/hero.png",
      },
      items: [
        {
          href: "https://github.com/phemehq/engineering",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Architecture",
              to: "/docs/architecture",
            },
            {
              label: "Code Review",
              to: "/docs/code-review",
            },
            {
              label: "Code Style",
              to: "/docs/code-style",
            },
            {
              label: "DevOps",
              to: "/docs/devops",
            },
            {
              label: "Security",
              to: "/docs/security",
            },
            {
              label: "SRE",
              to: "/docs/sre",
            },
            {
              label: "Standards",
              to: "/docs/standards",
            },
            {
              label: "Terminology",
              to: "/docs/terminology",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/phemehq",
            },
            {
              label: "PEP 8 (Python)",
              href: "https://peps.python.org/pep-0008/",
            },
            {
              label: "Effective Go",
              href: "https://google.github.io/styleguide/go/",
            },
            {
              label: "TypeScript Style Guide",
              href: "https://google.github.io/styleguide/tsguide.html",
            },
          ],
        },
      ],
      copyright: `Licensed under <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
