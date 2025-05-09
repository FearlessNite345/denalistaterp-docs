// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightKbd from "starlight-kbd";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightHeadingBadges from "starlight-heading-badges";
import starlightMarkdownBlocks, { Aside, Draft } from 'starlight-markdown-blocks';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Fearless Roleplay",
      logo: {
        src: "./src/assets/frp.webp"
      },
      editLink: {
        baseUrl: "https://github.com/FearlessNite345/fearlessroleplay-docs/tree/main"
      },
      lastUpdated: true,
      plugins: [
        starlightKbd({
          types: [{ default: true, id: "windows", label: "Windows" }],
        }),
        // @ts-ignore
        starlightHeadingBadges(),
        // @ts-ignore
        starlightUtils({
          multiSidebar: {
            switcherStyle: "horizontalList",
          },
        }),
        starlightMarkdownBlocks({
          blocks: {
            idea: Aside({ label: "Idea", color: 'green', icon: '💡' }),
            warning: Aside({ label: "Warning", color: 'orange', icon: '⚠️' }),
            draft: Draft(),
          },
        }),
      ],
      sidebar: [
        {
          label: "Docs",
          items: [
            {
              label: "Welcome",
              items: [{ label: "Introduction", link: "docs/welcome/introduction" }],
            },
            {
              label: "Roleplay Server Information",
              items: [
                { label: "Terms of Service", link: "docs/information/tos" },
                { label: "Rules & Guidelines", link: "docs/information/rules" },
              ],
            },
            {
              label: "Undead Server Information",
              items: [{ label: "Undead Rules", link: "docs/undead/undead_rules" }],
            },
            {
              label: "Guides",
              items: [
                { label: "Keybinds & Commands", link: "docs/guides/keybinds" },
                { label: "wLaucnher Installation", link: "docs/guides/wlauncher" },
              ],
            },
            {
              label: "SOPs",
              items: [
                { label: "Law Enforcement SOP", link: "docs/sops/leo" },
                { label: "Emergency Medical Services SOP", link: "docs/sops/ems" },
                /*{ label: "Fire Department SOP", link: "docs/sops/fire" }, */
                /*{ label: "Towing SOP", link: "docs/sops/tow" }, */
              ],
            },
          ],
        },
        {
          label: "Penal Code",
          items: [{ label: "Penal Code", link: "penal_code/penal_code", badge: "Coming Soon" }],
        },
      ],
      pagination: false,
    }),
  ],
});
