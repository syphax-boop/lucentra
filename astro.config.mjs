import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lucentra.ltd',
  integrations: [sitemap()],
});
```

---

**File 3 — `public/robots.txt`** (create new file):
```
User-agent: *
Allow: /

Sitemap: https://lucentra.ltd/sitemap-index.xml