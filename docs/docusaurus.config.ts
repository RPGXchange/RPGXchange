import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "RPGXchange",
  tagline: "One format. Infinite adventures.",
  favicon: "img/branding/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "https://rpgxchange.github.io",
  baseUrl: "/RPGXchange/",
  organizationName: "RPGXchange",
  projectName: "RPGXchange",
  onBrokenLinks: "throw",
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
          breadcrumbs: true,
        },
        blog: {
          blogTitle: "Changelog",
          routeBasePath: "changelog",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "ignore",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/branding/social-card.png",
    metadata: [
      {
        name: "keywords",
        content:
          "RPGXchange, TTRPG, data interchange, specification, character data, virtual tabletop, VTT, D&D, Pathfinder, game data format, open format, game tools",
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: "RPGXchange",
      logo: {
        alt: "RPGXchange logo",
        src: "img/branding/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "specSidebar",
          position: "left",
          label: "Specification",
        },
        { to: "/changelog", label: "Changelog", position: "left" },
        {
          href: "https://github.com/RPGXchange/RPGXchange",
          position: "right",
          label: "GitHub",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Specification",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "YouTube (Whix100)",
              href: "https://youtube.com/whix100",
            },
            {
              label: "YouTube (DevThread)",
              href: "https://www.youtube.com/@dev-thread",
            },
            {
              label: "Twitch",
              href: "https://www.youtube.com/@dev-thread",
            },
            {
              label: "BlueSky",
              href: "https://bsky.app/profile/whix100.bsky.social",
            },
            {
              label: "Mastodon",
              href: "https://mastodon.social/@whix100",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/RPGXchange/RPGXchange",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Whix100. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
