/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://chang-poker.com ', // 替换为你的实际域名
  generateRobotsTxt: true,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://chang-poker.com /sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404'], // 排除的页面
}
