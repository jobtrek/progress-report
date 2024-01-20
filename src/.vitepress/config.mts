import { defineConfig } from 'vitepress'

const links = [
  { text: 'Languages', items: [
    { text: 'JavaScript', link: '#'},
  ]},
  { text: 'Projects', items: [
    { text: 'Project 1', link: '#'},
  ]},
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Update your title and description with user name
  title: "My Progress Report - Toto",
  description: "The training report outlines all the skills acquired during the CFC of computer scientist applications development.",
  cleanUrls: true,
  lang: 'en',
  base: "/progress-report/",
  lastUpdated: true,
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      ...links,
      { text: 'How to', link: '/how-to-use' }
    ],

    outline: [2,3],
    sidebar: [
      ...links,
      {
        text: 'Others',
        items: [
          { text: 'How to use', link: '/how-to-use'}
        ]
      }
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [
      // Replace link with yor own GitHub repo or github profile
      { icon: 'github', link: 'https://github.com/jobtrek/progress-report' }
    ],

    editLink: {
      // Change first part of path to your repo name
      pattern: 'https://github.com/jobtrek/progress-report/edit/main/src/:path',
      text: 'Edit this page on GitHub'
    }
  }
})
