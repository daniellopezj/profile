export default [
  { UserAgent: '*' },
  { Allow: '/' },
  { BlankLine: true },
  { Comment: 'Host' },
  { Host: process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000' },
  { BlankLine: true },
  { Comment: 'Sitemap' },
  {
    Sitemap: `${
      process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'
    }/sitemap.xml`,
  },
];
