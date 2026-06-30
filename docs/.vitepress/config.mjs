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
      },
      {
        text: 'Tahap 2: Layout',
        collapsed: false,
        items: [
          { text: 'Display, Position, & Z-Index', link: '/layout/display-position' },
          { text: 'Flexbox', link: '/layout/flexbox' },
          { text: 'Grid Layout', link: '/layout/grid' },
          { text: 'Overflow & Object Fit', link: '/layout/overflow-object' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
