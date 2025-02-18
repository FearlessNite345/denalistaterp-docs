// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Fearless Roleplay Docs',
			lastUpdated: true,
			sidebar: [
				{
					label: 'Welcome',
					items: [
						{ label: 'Introduction', link: 'welcome/introduction' }
					]
				},
				{
					label: 'Roleplay Server Information',
					items: [
						{ label: 'Terms of Service', link: 'information/tos' },
						{ label: 'Rules & Guidelines', link: 'information/rules' }
					]
				},
				{
					label: 'Undead Server Information',
					items: [
						{ label: 'Undead Rules', link: 'undead/undead_rules' }
					]
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Keybinds & Commands', link: 'guides/keybinds' },
						{ label: 'wLauncher Installation', link: 'guides/launcher' }
					]
				},
				{
					label: 'SOPs',
					items: [
						{ label: 'Civillian', link: 'sops/civ' },
						{ label: 'LEO', link: 'sops/leo' }
					]
				}
			],
			pagination: false
		}),
	],
});
