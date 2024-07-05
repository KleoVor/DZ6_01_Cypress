const laptopViewportConfig = {
  viewportWidth: 1366,
  viewportHeight: 768,
};

const tabletViewportConfig = {
  viewportWidth: 1024,
  viewportHeight: 768,
};

module.exports = {
  config: (on, config) => {
    const cfg =
      config.env.configFile === "tablet"
        ? tabletViewportConfig
        : laptopViewportConfig;

    return {
      ...cfg,
      e2e: {
        baseUrl: "http://localhost:3000",
        retries: 2,
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
      },
    };
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    retries: 2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
