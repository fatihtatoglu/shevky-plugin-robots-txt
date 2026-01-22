# shevky-plugin-robots-txt

A simple Shevky plugin that generates `robots.txt`. It runs on the `dist:clean` hook, uses allow/disallow lists from the config, and adds a `Sitemap` line based on the site root URL.

## Features

- Automatically generates `robots.txt`
- Reads `Allow` and `Disallow` rules from config
- Writes `Sitemap` as `<site-url>/sitemap.xml`

## Installation

```bash
npm i shevky-plugin-robots-txt
```

## Usage

The example config below uses `identity.url`, `robots.allow`, and `robots.disallow`:

```json
// site.json (example)
{
  "identity": {
    "url": "https://example.com",
  },
  "robots": {
    "allow": ["/", "/blog/"],
    "disallow": ["/admin/", "/private/"],
  },
  "plugins": [
    "shevky-plugin-robots-txt",
  ],
};
```

Example generated `robots.txt` output:

```text
User-agent: *
Allow: /
Allow: /blog/
Disallow: /admin/
Disallow: /private/

Sitemap: https://example.com/sitemap.xml
```

## License

MIT
