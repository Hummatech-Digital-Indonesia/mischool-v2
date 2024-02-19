/**
 * This file is used to configure the app
 *
 * If you have the "Cannot find name 'defineAppConfig'.ts(2304)" error
 * update the root tsconfig.json file to include the following:
 *
 *  "extends": "./.app/.nuxt/tsconfig.json"
 *
 */

export default defineAppConfig({
  nuxtIcon: {},
  nui: {
    defaultShapes: {},
  },
  tairo: {
    title: 'Mischool',
    panels: [
      {
        name: 'activity',
        position: 'right',
        component: 'DemoPanelActivity',
      },
      {
        name: 'search',
        position: 'left',
        component: 'DemoPanelSearch',
      },
      {
        name: 'task',
        position: 'right',
        component: 'DemoPanelTask',
      },
    ],
    error: {
      logo: {
        component: 'img',
        props: {
          src: '/img/illustrations/system/404-1.svg',
          class: 'relative z-20 w-full max-w-lg mx-auto',
        },
      },
    },
    sidebar: {
      toolbar: {
        showNavBurger: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              disableTransitions: true,
            },
          },
          {
            component: 'DemoToolbarLanguage',
          },
          {
            component: 'DemoToolbarNotifications',
          },
          {
            component: 'DemoToolbarActivity',
          },
          {
            component: 'DemoToolbarAccountMenu',
          },
        ],
      },
      circularMenu: {
        enabled: true,
        tools: [
          {
            component: 'DemoThemeToggle',
            props: {
              class: 'ms-auto',
              disableTransitions: true,
              inverted: true,
            },
          },
          {
            component: 'DemoCircularMenuLanguage',
          },
          {
            component: 'DemoCircularMenuNotifications',
          },
          {
            component: 'DemoCircularMenuActivity',
          },
        ],
      },
      navigation: {
        logo: {
          component: 'TairoLogo',
          props: { class: 'text-primary-600 h-10' },
        },
        items: [
          {
            title: 'Home',
            icon: { name: 'ic:outline-home', class: 'w-5 h-5' },
            subsidebar: { component: 'DemoSubsidebarHome' },
            activePath: '/docs',
          },
          {
            title: 'Sekolah',
            icon: { name: 'material-symbols:menu-book', class: 'w-5 h-5' },
            subsidebar: { component: 'DemoSubsidebarSchools' },
            activePath: '/dokumentasi/sekolah',
          },
          {
            title: 'Siswa',
            icon: { name: 'ph:graduation-cap-bold', class: 'w-5 h-5' },
            subsidebar: { component: 'DemoSubSidebarStudent' },
            activePath: '/dokumentasi/siswa',
          },
          {
            title: 'Guru',
            icon: { name: 'mdi:account-school-outline', class: 'w-5 h-5' },
            subsidebar: { component: 'DemoSubSidebarTeachers' },
            activePath: '/dokumentasi/guru',
          },
          {
            title: 'Staff',
            icon: { name: 'mdi:account-tie-hat-outline', class: 'w-5 h-5' },
            subsidebar: { component: 'DemoSubSidebarStaff' },
            activePath: '/dokumentasi/staff',
          },
          {
            title: 'Customize',
            icon: { name: 'ph:drop-half-bottom-duotone', class: 'w-5 h-5' },
            click: () => {
              const isOpen = useState('switcher-open', () => false)
              isOpen.value = true
            },
            position: 'end',
          },
          {
            title: 'Search',
            icon: { name: 'ph:magnifying-glass-duotone', class: 'w-5 h-5' },
            click: () => {
              const isOpen = useState('search-open', () => false)
              isOpen.value = true
            },
            position: 'end',
          },
        ],
      },
    },
  },
})
