const PLUGIN = {
  name: "shevky-robots-txt",
  version: "0.0.1",
  hooks: {
    "dist:clean": async function (ctx, services) {
      const _cfg = ctx.config;
      const base = _cfg.identity.url.replace(/\/+$/, "");
      const allowList = _cfg.robots.allow;
      const disallowList = _cfg.robots.disallow;

      const lines = ["User-agent: *"];

      allowList.forEach((path) => {
        if (typeof path === "string" && path.trim().length > 0) {
          lines.push(`Allow: ${path.trim()}`);
        }
      });

      disallowList.forEach((path) => {
        if (typeof path === "string" && path.trim().length > 0) {
          lines.push(`Disallow: ${path.trim()}`);
        }
      });

      lines.push("");
      lines.push(`Sitemap: ${base}/sitemap.xml`);
      lines.push("");

      const payload = lines.join("\n");

      await services.write("robots.txt", payload, {});
    },
  },
};

export default PLUGIN;
