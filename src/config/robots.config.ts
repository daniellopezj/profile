export default [
  { UserAgent: '*' },
  { Allow: '/' },
  { BlankLine: true },
  { Comment: 'Host' },
  { Host: process.env.BASE_URL || 'http://localhost:3000' },
  { BlankLine: true },
  { Comment: 'Sitemap' },
  { Sitemap: `${process.env.BASE_URL || 'http://localhost:3000'}/sitemap.xml` },
];
