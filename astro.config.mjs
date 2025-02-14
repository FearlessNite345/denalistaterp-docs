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
					label: 'Information',
					items: [
						{ label: 'Terms of Service', link: 'information/tos' },
						{ label: 'Rules & Guidelines', link: 'information/rules' }
					]
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Keybinds & Commands', link: 'guides/keybinds' },
						{ label: 'wLauncher Installation', link: 'guides/launcher' }
					]
				}
			],
			pagination: false
		}),
	],
});
