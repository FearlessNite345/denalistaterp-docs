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

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Fearless Roleplay",
      logo: {
        src: "./src/assets/frp.webp",
      },
      editLink: {
        baseUrl:
          "https://github.com/FearlessNite345/fearlessroleplay-docs/tree/main",
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
                { label: "Law Enforcement SOP", link: "docs/sops/leo" },
                {
                  label: "Emergency Medical Services SOP",
                  link: "docs/sops/ems",
                },
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
              label: "Section 1",
              items: [
                { label: "Resisting Arrest", link: "penal_code/section_1/1_1" },
                {
                  label: "Disobeying a Police Officer",
                  link: "penal_code/section_1/1_2",
                },
                { label: "Harassment", link: "penal_code/section_1/1_3" },
                {
                  label: "Reckless Endangerment",
                  link: "penal_code/section_1/1_4",
                },
                {
                  label: "Reckless Endangerment (if involving a deadly weapon)",
                  link: "penal_code/section_1/1_5",
                },
                { label: "Forgery", link: "penal_code/section_1/1_6" },
                { label: "Criminal Threats", link: "penal_code/section_1/1_7" },
                { label: "Identity Theft", link: "penal_code/section_1/1_8" },
                {
                  label: "Impersonating a Police Officer",
                  link: "penal_code/section_1/1_9",
                },
                {
                  label: "Aiding and Abetting / Accessory to Crime",
                  link: "penal_code/section_1/1_10",
                },
                { label: "Animal Cruelty", link: "penal_code/section_1/1_11" },
                { label: "Jailbreak", link: "penal_code/section_1/1_12" },
                {
                  label: "Escaping Custody",
                  link: "penal_code/section_1/1_13",
                },
                {
                  label: "Possession of Items Used In A Crime",
                  link: "penal_code/section_1/1_14",
                },
                {
                  label: "Disarming a Police Officer",
                  link: "penal_code/section_1/1_15",
                },
                { label: "Entrapment", link: "penal_code/section_1/1_16" },
                {
                  label: "Harboring a Fugitive",
                  link: "penal_code/section_1/1_17",
                },
                { label: "Capital Murder", link: "penal_code/section_1/1_18" },
                {
                  label: "Narcotic Induced Homicide",
                  link: "penal_code/section_1/1_19",
                },
              ],
              collapsed: true,
            },
            {
              label: "Section 2",
              items: [
                {
                  label: "First Degree Murder",
                  link: "penal_code/section_2/2_1",
                },
                { label: "Attempted Murder", link: "penal_code/section_2/2_2" },
                {
                  label: "Second Degree Murder",
                  link: "penal_code/section_2/2_3",
                },
                {
                  label: "Vehicular Manslaughter",
                  link: "penal_code/section_2/2_4",
                },
                {
                  label: "Involuntary Manslaughter",
                  link: "penal_code/section_2/2_5",
                },
                {
                  label: "Unlawful Imprisonment",
                  link: "penal_code/section_2/2_6",
                },
                { label: "Kidnapping", link: "penal_code/section_2/2_7" },
                { label: "Hostage Taking", link: "penal_code/section_2/2_8" },
                {
                  label: "Domestic Violence",
                  link: "penal_code/section_2/2_9",
                },
                { label: "Robbery", link: "penal_code/section_2/2_10" },
                { label: "Assault", link: "penal_code/section_2/2_11" },
                {
                  label: "Aggravated Assault",
                  link: "penal_code/section_2/2_12",
                },
                {
                  label: "Assault on a Police Officer",
                  link: "penal_code/section_2/2_13",
                },
                { label: "Inciting a Riot", link: "penal_code/section_2/2_14" },
                {
                  label: "Killing or Injuring a Police Animal",
                  link: "penal_code/section_2/2_15",
                },
                { label: "Armed Robbery", link: "penal_code/section_2/2_16" },
              ],
              collapsed: true,
            },
            {
              label: "Section 3",
              items: [
                {
                  label: "1st Degree Speeding (65mph+)",
                  link: "penal_code/section_3/3_1",
                },
                {
                  label: "2nd Degree Speeding (41-64mph)",
                  link: "penal_code/section_3/3_2",
                },
                {
                  label: "3rd Degree Speeding (1-40mph)",
                  link: "penal_code/section_3/3_3",
                },
                {
                  label: "Failure to Maintain Lane",
                  link: "penal_code/section_3/3_4",
                },
                { label: "Illegal Passing", link: "penal_code/section_3/3_5" },
                {
                  label: "Driving Under the Influence",
                  link: "penal_code/section_3/3_6",
                },
                {
                  label: "Failure to Obey Traffic Control Devices",
                  link: "penal_code/section_3/3_7",
                },
                {
                  label: "Driving the Wrong Way (on highway)",
                  link: "penal_code/section_3/3_8",
                },
                {
                  label: "Driving the Wrong Way",
                  link: "penal_code/section_3/3_9",
                },
                {
                  label: "Careless Driving",
                  link: "penal_code/section_3/3_10",
                },
                {
                  label: "Reckless Driving",
                  link: "penal_code/section_3/3_11",
                },
                {
                  label: "Illegal Street Competition, Stunting, or Exhibition",
                  link: "penal_code/section_3/3_12",
                },
                {
                  label:
                    "Failure to Yield or Move Over for an Emergency Vehicle",
                  link: "penal_code/section_3/3_13",
                },
                { label: "Tailgating", link: "penal_code/section_3/3_14" },
                {
                  label: "Driving w/o Headlights or Signals",
                  link: "penal_code/section_3/3_15",
                },
                {
                  label: "Improper or Missing Plates/Registration",
                  link: "penal_code/section_3/3_16",
                },
                {
                  label: "Unroadworthy Vehicle",
                  link: "penal_code/section_3/3_17",
                },
                {
                  label: "Overweight Limit",
                  link: "penal_code/section_3/3_18",
                },
                { label: "Illegal Parking", link: "penal_code/section_3/3_19" },
                {
                  label: "Evading an Officer",
                  link: "penal_code/section_3/3_20",
                },
                {
                  label: "Reckless Evading",
                  link: "penal_code/section_3/3_21",
                },
                {
                  label: "Hit and Run (with Injury/Death)",
                  link: "penal_code/section_3/3_22",
                },
                { label: "Hit and Run", link: "penal_code/section_3/3_23" },
                {
                  label: "Excessive Vehicle Noise",
                  link: "penal_code/section_3/3_24",
                },
                {
                  label: "Impeding Traffic",
                  link: "penal_code/section_3/3_25",
                },
                {
                  label: "Refusal to take a Sobriety Test",
                  link: "penal_code/section_3/3_26",
                },
                {
                  label: "Bicycle Lane Usage",
                  link: "penal_code/section_3/3_27",
                },
                {
                  label: "Open Container of Alcohol in Vehicle",
                  link: "penal_code/section_3/3_28",
                },
                {
                  label: "Nighttime Headlight Usage",
                  link: "penal_code/section_3/3_29",
                },
                {
                  label: "Non-Motor Vehicle on Highway",
                  link: "penal_code/section_3/3_30",
                },
                {
                  label: "Seatbelt Requirement",
                  link: "penal_code/section_3/3_31",
                },
                {
                  label: "Driving Without a Valid License",
                  link: "penal_code/section_3/3_32",
                },
              ],
              collapsed: true,
            },
            {
              label: "Section 4",
              items: [
                { label: "Soliciting", link: "penal_code/section_4/4_1" },
                {
                  label: "Solicitation of Criminal Activity",
                  link: "penal_code/section_4/4_2",
                },
                {
                  label: "Unlawful Assembly",
                  link: "penal_code/section_4/4_3",
                },
                { label: "Obstruction", link: "penal_code/section_4/4_4" },
                {
                  label: "Failure to Identify",
                  link: "penal_code/section_4/4_5",
                },
                { label: "Loitering", link: "penal_code/section_4/4_6" },
                { label: "False Reporting", link: "penal_code/section_4/4_7" },
                {
                  label: "Violation of Restraining Order",
                  link: "penal_code/section_4/4_8",
                },
                { label: "Conspiracy", link: "penal_code/section_4/4_9" },
                { label: "Bribery", link: "penal_code/section_4/4_10" },
                {
                  label: "Disturbing the Peace",
                  link: "penal_code/section_4/4_11",
                },
                {
                  label: "Drunk and Disorderly",
                  link: "penal_code/section_4/4_12",
                },
                {
                  label: "Public Intoxication",
                  link: "penal_code/section_4/4_13",
                },
                {
                  label: "Disorderly Conduct",
                  link: "penal_code/section_4/4_14",
                },
                {
                  label: "Anti-Stalking Law",
                  link: "penal_code/section_4/4_15",
                },
                { label: "Panhandling", link: "penal_code/section_4/4_16" },
                {
                  label: "Interference with Traffic Control Devices",
                  link: "penal_code/section_4/4_17",
                },
              ],
              collapsed: true,
            },
            {
              label: "Section 5",
              items: [
                { label: "Extortion", link: "penal_code/section_5/5_1" },
                { label: "Fraud", link: "penal_code/section_5/5_2" },
                {
                  label: "Conspiracy to Commit Fraud",
                  link: "penal_code/section_5/5_3",
                },
                { label: "Embezzlement", link: "penal_code/section_5/5_4" },
                { label: "Graft", link: "penal_code/section_5/5_5" },
                {
                  label: "Government Corruption",
                  link: "penal_code/section_5/5_6",
                },
              ],
              collapsed: true,
            },
            {
              label: "Section 6",
              items: [
                { label: "Petty Theft", link: "penal_code/section_6/6_1" },
                { label: "Grand Theft", link: "penal_code/section_6/6_2" },
                {
                  label: "Government Grand Larceny",
                  link: "penal_code/section_6/6_3",
                },
                { label: "Grand Theft Auto", link: "penal_code/section_6/6_4" },
                { label: "Burglary", link: "penal_code/section_6/6_5" },
                { label: "Trespassing", link: "penal_code/section_6/6_6" },
                { label: "Bank Robbery", link: "penal_code/section_6/6_7" },
                {
                  label: "Vandalism – Damages under $10,000",
                  link: "penal_code/section_6/6_8",
                },
                {
                  label: "Vandalism – Damages $10,000+ or Government Property",
                  link: "penal_code/section_6/6_9",
                },
                {
                  label: "Gaining Unauthorized Access to a System (Hacking)",
                  link: "penal_code/section_6/6_10",
                },
                { label: "Arson", link: "penal_code/section_6/6_11" },
                {
                  label: "Possession of Stolen Property",
                  link: "penal_code/section_6/6_12",
                },
                {
                  label: "Filming on Private Property",
                  link: "penal_code/section_6/6_13",
                },
                {
                  label: "Attempted Bank Robbery",
                  link: "penal_code/section_6/6_14",
                },
                { label: "Home Invasion", link: "penal_code/section_6/6_15" },
                {
                  label: "Possession Of Burglary Tools With Intent To Use",
                  link: "penal_code/section_6/6_16",
                },
              ],
              collapsed: true,
            },
            {
              label: "Section 7",
              items: [
                {
                  label: "Possession of Drug Paraphernalia",
                  link: "penal_code/section_7/7_1",
                },
                {
                  label: "Possession Of a Controlled Substances",
                  link: "penal_code/section_7/7_2",
                },
                {
                  label: "Sale of Controlled Substance",
                  link: "penal_code/section_7/7_3",
                },
                {
                  label:
                    "Possession of a Controlled Substance With Intent to Sell",
                  link: "penal_code/section_7/7_4",
                },
                {
                  label: "Unlawful Practice of Medicine",
                  link: "penal_code/section_7/7_5",
                },
                { label: "Littering", link: "penal_code/section_7/7_6" },
                {
                  label: "Urination or Defecation in Public",
                  link: "penal_code/section_7/7_7",
                },
                {
                  label:
                    "Manufacture or attempted manufacture of a controlled substance",
                  link: "penal_code/section_7/7_8",
                },
                { label: "Drug Smuggling", link: "penal_code/section_7/7_9" },
                {
                  label: "Drug Trafficking",
                  link: "penal_code/section_7/7_10",
                },
              ],
              collapsed: true,
            },
            {
              label: "Section 8",
              items: [
                {
                  label: "Possession of a Firearm Without a License",
                  link: "penal_code/section_8/8_1",
                },
                {
                  label: "Possession of a Firearm Under Influence",
                  link: "penal_code/section_8/8_2",
                },
                {
                  label: "Brandishing a Firearm or Deadly Weapon",
                  link: "penal_code/section_8/8_3",
                },
                {
                  label: "Criminal Use of Firearm",
                  link: "penal_code/section_8/8_4",
                },
                {
                  label: "Illegal Sale of Weapon",
                  link: "penal_code/section_8/8_5",
                },
                {
                  label: "Possession of a Firearm in a Restricted Area",
                  link: "penal_code/section_8/8_6",
                },
                {
                  label: "Possession of an Illegal Weapon",
                  link: "penal_code/section_8/8_7",
                },
                {
                  label: "Failure to Declare a Weapon",
                  link: "penal_code/section_8/8_8",
                },
                {
                  label: "Illegal Display of Weapons or Equipment",
                  link: "penal_code/section_8/8_9",
                },
                {
                  label: "Possession of Unregistered Firearm",
                  link: "penal_code/section_8/8_10",
                },
                {
                  label: "Felon in Possession of a Firearm",
                  link: "penal_code/section_8/8_11",
                },
                {
                  label:
                    "Possession of a Firearm during the Commission or Attempted Commission of a Felony",
                  link: "penal_code/section_8/8_12",
                },
              ],
              collapsed: true,
            },
            {
              label: "Section 9",
              items: [
                {
                  label: "Hunting without a License",
                  link: "penal_code/section_9/9_1",
                },
                { label: "Illegal Fishing", link: "penal_code/section_9/9_2" },
                { label: "Cruel Hunting", link: "penal_code/section_9/9_3" },
                { label: "Poaching", link: "penal_code/section_9/9_4" },
              ],
              collapsed: true,
            },
            {
              label: "Section 10",
              items: [
                {
                  label: "Boating Under the Influence",
                  link: "penal_code/section_10/10_1",
                },
                {
                  label: "Reckless Operation of a Vessel",
                  link: "penal_code/section_10/10_2",
                },
                {
                  label: "Boating Without License – No License Issued",
                  link: "penal_code/section_10/10_3",
                },
                {
                  label: "Boating Without License – Suspended License",
                  link: "penal_code/section_10/10_4",
                },
              ],
              collapsed: true,
            },
          ],
        },
      ],
      pagination: false,
    }),
  ],
});
