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
      },
      {
        text: 'Tahap 3: Responsive Design',
        collapsed: false,
        items: [
          { text: 'Utilities & Breakpoints', link: '/responsive/' },
          { text: 'Container & Centering', link: '/responsive/container' },
          { text: 'Responsive Layout', link: '/responsive/layout' }
        ]
      },
      {
        text: 'Tahap 4: State & Interaction',
        collapsed: false,
        items: [
          { text: 'Basic State (Hover, Focus)', link: '/interaction/' },
          { text: 'Advanced (Group & Peer)', link: '/interaction/group-peer' }
        ]
      },
      {
        text: 'Tahap 5: Effects & Dark Mode',
        collapsed: false,
        items: [
          { text: 'Transitions', link: '/effects/' },
          { text: 'Transform', link: '/effects/transform' },
          { text: 'Keyframe Animations', link: '/effects/animation' },
          { text: 'Dark Mode', link: '/effects/dark-mode' }
        ]
      },
      {
        text: 'Tahap 6: Forms & Filters',
        collapsed: false,
        items: [
          { text: 'Form Styling', link: '/forms/' },
          { text: 'Filters & Blur', link: '/filters/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
