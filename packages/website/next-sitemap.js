module.exports = {
  siteUrl: `https://www.gianlucasantambrogio.com`,
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies:
      process.env.NEXT_PUBLIC_STAGE === "production"
        ? [{ userAgent: "*", allow: "/" }]
        : [{ userAgent: "*", disallow: "/" }],
  },
  priority: 0.1,
  transform: async (config, path) => {
    let transformations = {};
    if (path === "/") {
      transformations = {
        priority: 1,
      };
    }
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      ...transformations,
    };
  },
};
