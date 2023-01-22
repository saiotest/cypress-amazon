const { defineConfig } = require('cypress');

module.exports = defineConfig({
	viewportWidth: 1920,
	viewportHeight: 1080,
	retries: 0,
	watchForFileChanges: false,
	video: true,
	chromeWebSecurity: false,
	screenshotOnRunFailure: true,
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		baseUrl: "https://amazon.com"
	},
	env: {

	}
});
