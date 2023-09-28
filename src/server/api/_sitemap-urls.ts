import { projects } from '~/data/Projects.data';

export default defineEventHandler(async () => {
  return projects.map((p) => {
    return { loc: `projects/${p.slug}`, lastmod: new Date().toISOString() };
  });
});
