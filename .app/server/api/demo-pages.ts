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
        name: 'Dashboard Sekolah',
        preview: {
          title: 'Dashboard Sekolah',
          description: 'Halaman Dashboard Sekolah.',
          categories: ['school'],
          isDashboard: 1,
          src: '/img/screens/school/1.png',
          // order: 1,
          // params: { id: '1' },
        },
      },
      {
        name: 'Halaman Absensi',
        preview: {
          title: 'Registrasi RFID Siswa',
          description: 'Halaman Registrasi RFID Siswa.',
          categories: ['Absensi'],
          isDashboard: 0,
          src: '/img/screens/absensi/1.png',
          // order: 1,
          // params: { id: '1' },
        },
      },
      {
        name: 'Halaman Absensi1',
        preview: {
          title: 'Registrasi RFID Guru',
          description: 'Halaman Registrasi RFID Guru.',
          categories: ['Absensi'],
          isDashboard: 0,
          src: '/img/screens/absensi/2.png',
          // order: 1,
          // params: { id: '1' },
        },
      },
      {
        name: 'Halaman Absensi2',
        preview: {
          title: 'Set Jam Masuk dan Jam Pulang Siswa',
          description: 'Halaman Set Jam Masuk dan Jam Pulang Siswa.',
          categories: ['Absensi'],
          isDashboard: 0,
          src: '/img/screens/absensi/3.png',
          // order: 1,
          // params: { id: '1' },
        },
      },
      {
        name: 'Halaman Absensi3',
        preview: {
          title: 'Set Jam Masuk dan Jam Pulang Guru',
          description: 'Halaman Set Jam Masuk dan Jam Pulang Guru.',
          categories: ['Absensi'],
          isDashboard: 0,
          src: '/img/screens/absensi/4.png',
          // order: 1,
          // params: { id: '1' },
        },
      },
      {
        name: 'Halaman Absensi4',
        preview: {
          title: 'Presensi Siswa',
          description: 'Halaman Presensi Siswa.',
          categories: ['Absensi'],
          isDashboard: 0,
          src: '/img/screens/absensi/5.png',
          // order: 1,
          // params: { id: '1' },
        },
      },
      {
        name: 'Halaman Absensi6',
        preview: {
          title: 'Presensi Guru',
          description: 'Halaman Presensi Guru.',
          categories: ['Absensi'],
          isDashboard: 0,
          src: '/img/screens/absensi/6.png',
          // order: 1,
          // params: { id: '1' },
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
      {
        name: 'E-Learning',
        preview: {
          title: 'Halaman E-Learning',
          description: 'Learn more about us.',
          categories: ['E-Learning'],
          isDashboard: 1,
          src: '/img/screens/dashboards-personal-2.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
    ]

    return demoPages
  }
})

