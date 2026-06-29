import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: 'Tailwind Basic',
  description: 'Dokumentasi dan Panduan Belajar Tailwind CSS',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Fundamental', link: '/fundamental/' }
    ],
    sidebar: [
      {
        text: 'Tahap 1: Fundamental',
        collapsed: false,
        items: [
          { text: 'Pengenalan Tailwind', link: '/fundamental/' },
          { text: 'Spacing & Sizing', link: '/fundamental/spacing-sizing' },
          { text: 'Typography & Colors', link: '/fundamental/typography-colors' },
          { text: 'Border & Shadow', link: '/fundamental/border-shadow' },
          { text: 'Background', link: '/fundamental/background' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
