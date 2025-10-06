// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightKbd from "starlight-kbd";
import starlightUtils from "@lorenzo_lewis/starlight-utils";
import starlightHeadingBadges from "starlight-heading-badges";
import starlightMarkdownBlocks, {
  Aside,
  Draft,
} from "starlight-markdown-blocks";
import starlightThemeGalaxy from "starlight-theme-galaxy";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Denali State Roleplay",
      logo: {
        src: "./src/assets/dsrp_logo.png",
      },
      editLink: {
        baseUrl:
          "https://github.com/FearlessNite345/denalistaterp-docs/tree/main",
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
            idea: Aside({ label: "Idea", color: "green", icon: "💡" }),
            warning: Aside({ label: "Warning", color: "orange", icon: "⚠️" }),
            draft: Draft(),
          },
        }),
        starlightThemeGalaxy(),
      ],
      sidebar: [
        {
          label: "Docs",
          items: [
            {
              label: "Welcome",
              items: [
                { label: "Introduction", link: "docs/welcome/introduction" },
              ],
            },
            {
              label: "Roleplay Server Information",
              items: [
                { label: "Terms of Service", link: "docs/information/tos" },
                { label: "Rules & Guidelines", link: "docs/information/rules" },
              ],
            },
            {
              label: "Helpful Information",
              items: [
                {
                  label: "CIV Quick Reference",
                  link: "docs/helpful_information/civ_quick_reference",
                },
                {
                  label: "LEO Quick Reference",
                  link: "docs/helpful_information/leo_quick_reference",
                },
                /* { label: "Fire & Rescue Quick Reference", link: "docs/helpful_information/fire_rescue_quick_reference" }, */
              ],
            },
            {
              label: "Guides",
              items: [
                { label: "Keybinds & Commands", link: "docs/guides/keybinds" },
                {
                  label: "wLaucnher Installation",
                  link: "docs/guides/wlauncher",
                },
              ],
            },
            {
              label: "SOPs",
              items: [
                {
                  label: "Law Enforcement SOP",
                  link: "docs/sops/leo",
                  attrs: {"aria-busy": 'true'}
                },
                /*                 {
                  label: "Emergency Medical Services SOP",
                  link: "docs/sops/ems",
                }, */
                /*{ label: "Fire Department SOP", link: "docs/sops/fire" }, */
                /*{ label: "Towing SOP", link: "docs/sops/tow" }, */
              ],
            },
          ],
        },
        {
          label: "Penal Code",
          items: [
            {
              label: "Section 100",
              autogenerate: { directory: "penal_code/Section 100" },
              collapsed: true,
            },
            {
              label: "Section 200",
              autogenerate: { directory: "penal_code/Section 200" },
              collapsed: true,
            },
            {
              label: "Section 300",
              autogenerate: { directory: "penal_code/Section 300" },
              collapsed: true,
            },
            {
              label: "Section 400",
              autogenerate: { directory: "penal_code/Section 400" },
              collapsed: true,
            },
            {
              label: "Section 500",
              autogenerate: { directory: "penal_code/Section 500" },
              collapsed: true,
            },
            {
              label: "Section 600",
              autogenerate: { directory: "penal_code/Section 600" },
              collapsed: true,
            },
            {
              label: "Section 700",
              autogenerate: { directory: "penal_code/Section 700" },
              collapsed: true,
            },
            {
              label: "Section 800",
              autogenerate: { directory: "penal_code/Section 800" },
              collapsed: true,
            },
            {
              label: "Section 900",
              autogenerate: { directory: "penal_code/Section 900" },
              collapsed: true,
            },
          ],
        },
      ],
      pagination: false,
    }),
  ],
});
