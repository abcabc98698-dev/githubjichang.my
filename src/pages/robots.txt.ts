import type { APIRoute } from "astro";

/**
 * Technical SEO: Global robots policy for githubjichang.my
 * Authoritative, crawl-friendly robots.txt explicitly permitting major search engine spiders.
 */
export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ? site.href.replace(/\/$/, "") : "https://githubjichang.my";
  const sitemapIndexUrl = `${siteUrl}/sitemap-index.xml`;
  const sitemapXmlUrl = `${siteUrl}/sitemap.xml`;

  const content = [
    "# Technical SEO: Global robots policy for githubjichang.my",
    "User-agent: *",
    "Allow: /",
    "Disallow: /404",
    "",
    "# Search engine specific crawl rules",
    "User-agent: Googlebot",
    "Allow: /",
    "",
    "User-agent: bingbot",
    "Allow: /",
    "",
    "User-agent: Baiduspider",
    "Allow: /",
    "",
    "User-agent: yisouspider",
    "Allow: /",
    "",
    `Sitemap: ${sitemapIndexUrl}`,
    `Sitemap: ${sitemapXmlUrl}`,
    "",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
