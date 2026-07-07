import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  title: 'Tailwind Basic',
  description: 'Dokumentasi dan Panduan Belajar Tailwind CSS dalam Bahasa Indonesia',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Cari',
            buttonAriaLabel: 'Cari'
          },
          modal: {
            noResultsText: 'Tidak ada hasil',
            resetButtonTitle: 'Hapus pencarian',
            footer: {
              selectText: 'Pilih',
              navigateText: 'Navigasi',
              closeText: 'Tutup'
            }
          }
        }
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Fundamental', link: '/fundamental/' },
      { text: 'Layout', link: '/layout/flexbox' },
      { text: 'Responsive', link: '/responsive/' },
      {
        text: 'Lanjutan',
        items: [
          { text: 'State & Interaction', link: '/interaction/' },
          { text: 'Effects & Dark Mode', link: '/effects/' },
          { text: 'Forms & Filters', link: '/forms/' },
          { text: 'Customization', link: '/customization/' }
        ]
      },
      {
        text: 'Praktik',
        items: [
          { text: 'Reusable Components', link: '/components/' },
          { text: 'Layout Projects', link: '/projects/' },
          { text: 'Roadmap Lengkap', link: '/spek' }
        ]
      }
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
      },
      {
        text: 'Tahap 7: Customization',
        collapsed: true,
        items: [
          { text: 'Theme Configuration', link: '/customization/' },
          { text: 'Plugins', link: '/customization/plugins' },
          { text: 'Custom Utility & Arbitrary', link: '/customization/arbitrary' }
        ]
      },
      {
        text: 'Tahap 8: Reusable Components',
        collapsed: true,
        items: [
          { text: 'Button, Badge & Alert', link: '/components/' },
          { text: 'Card & Modal', link: '/components/card-modal' },
          { text: 'Data Display', link: '/components/data-display' },
          { text: 'Navigation', link: '/components/navigation' }
        ]
      },
      {
        text: 'Tahap 9: Layout Projects',
        collapsed: true,
        items: [
          { text: 'Auth Pages (Login & Register)', link: '/projects/' },
          { text: 'Dashboard Admin', link: '/projects/dashboard' },
          { text: 'Landing Page', link: '/projects/landing-page' },
          { text: 'Blog Layout', link: '/projects/blog' },
          { text: 'E-Commerce Layout', link: '/projects/e-commerce' }
        ]
      },
      {
        text: 'Tahap 10: Best Practice',
        collapsed: true,
        items: [
          { text: 'Best Practice', link: '/best-practice/' }
        ]
      },
      {
        text: 'Tahap 11: Framework Integration',
        collapsed: true,
        items: [
          { text: 'Laravel, Vue.js & React', link: '/framework-integration/' }
        ]
      },
      {
        text: 'Referensi',
        collapsed: true,
        items: [
          { text: 'Roadmap Lengkap', link: '/spek' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/driyoagung/tailwind-basic' }
    ],
    editLink: {
      pattern: 'https://github.com/driyoagung/tailwind-basic/edit/main/docs',
      text: 'Edit halaman ini di GitHub'
    },
    lastUpdated: {
      text: 'Diperbarui'
    },
    outline: {
      label: 'Di halaman ini'
    },
    docFooter: {
      prev: 'Sebelumnya',
      next: 'Berikutnya'
    }
  }
})
