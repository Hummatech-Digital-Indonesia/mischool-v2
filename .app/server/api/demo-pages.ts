import type { RouteRecordName } from 'vue-router'
export default defineEventHandler(async (event) => {
  interface Pages {
    name?: RouteRecordName
    preview?: {
      title: string
      description: string
      categories?: string[]
      isDashboard?: number
      src: string
      order?: number
      params?: Record<string, string>
    }
  }

  return await getPages()

  function getPages(): any {
    const demoPages: Pages[] = [
      {
        name: 'Absensi',
        preview: {
          title: 'Halaman Absensi',
          description: 'This is the home page.',
          categories: ['Absensi'],
          isDashboard: 1,
          src: '/img/screens/dashboards-personal-1.png',
          order: 1,
          params: { id: '1' },
        },
      },
      {
        name: 'E-Learning',
        preview: {
          title: 'Halaman E-Learning',
          description: 'Learn more about us.',
          categories: ['E-Learning'],
          isDashboard: 1,
          src: '/img/screens/dashboards-personal-2.png',
          order: 2,
          params: { id: '2' },
        },
      },
    ]

    return demoPages
  }
})
