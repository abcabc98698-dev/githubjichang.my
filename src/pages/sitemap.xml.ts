import type { APIRoute } from "astro";

/**
 * Technical SEO: Primary sitemap.xml fallback endpoint
 * Returns a standard sitemap index pointing to the Astro generated sub-sitemap.
 */
export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ? site.href.replace(/\/$/, "") : "https://githubjichang.my";
  const now = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${siteUrl}/sitemap-0.xml</loc>
    <lastmod>${now}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
