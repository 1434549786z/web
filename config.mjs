// config.mjs
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My VitePress Site',
  description: 'A documentation site built with VitePress.',
  themeConfig: {
    nav: [{ text: 'Home', link: '/' }],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/intro' }
        ]
      }
    ]
  }
})