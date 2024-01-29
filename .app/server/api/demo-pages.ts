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
      //Dashboard Not Fitur
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
        name: 'Dashboard Guru',
        preview: {
          title: 'Dashboard Guru',
          description: 'Halaman Dashboard Guru.',
          categories: ['teacher'],
          isDashboard: 1,
          src: '/img/screens/teacher/e-learning/1.png',
          // order: 1,
          // params: { id: '1' },
        },
      },
      {
        name: 'Dashboard Siswa',
        preview: {
          title: 'Dashboard Siswa',
          description: 'Halaman Dashboard Siswa.',
          categories: ['student'],
          isDashboard: 1,
          src: '/img/screens/student/e-learning/1.png',
          // order: 1,
          // params: { id: '1' },
        },
      },

      //Absensi
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

      //E-learning Student
      {
        name: 'Dashboard E-learning Siswa',
        preview: {
          title: 'Dashboard E-learning Siswa',
          description: 'Halaman Dashboard E-learning Siswa',
          categories: ['E-Learning'],
          isDashboard: 1,
          src: '/img/screens/student/e-learning/2.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning7',
        preview: {
          title: 'Kelas',
          description: 'Halaman Kelas',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/student/e-learning/3.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning8',
        preview: {
          title: 'Daftar Tugas Siswa',
          description: 'Halaman Daftar Tugas Siswa',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/student/e-learning/4.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning9',
        preview: {
          title: 'Detail Kelas Siswa',
          description: 'Halaman Detail Kelas Siswa',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/student/e-learning/5.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning10',
        preview: {
          title: 'Pertemuan Siswa',
          description: 'Halaman Pertemuan Siswa',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/student/e-learning/6.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning11',
        preview: {
          title: 'Semua Siswa di Kelas',
          description: 'Halaman Semua Siswa di Kelas',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/student/e-learning/7.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning12',
        preview: {
          title: 'Detail Pertemuan Siswa',
          description: 'Halaman Detail Pertemuan Siswa',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/student/e-learning/8.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning13',
        preview: {
          title: 'Detail Tugas Siswa',
          description: 'Halaman Detail Tugas Siswa',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/student/e-learning/8.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning13',
        preview: {
          title: 'Detail Tugas Siswa',
          description: 'Halaman Detail Tugas Siswa',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/student/e-learning/10.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning14',
        preview: {
          title: 'Forum',
          description: 'Halaman Forum',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/student/e-learning/11.png',
          // order: 2,
          // params: { id: '2' },
        },
      },

      //E-learning Teacher
      {
        name: 'Dashboard E-learning Guru',
        preview: {
          title: 'Dashboard E-learning Guru',
          description: 'Halaman Dashboard E-learning Guru',
          categories: ['E-Learning'],
          isDashboard: 1,
          src: '/img/screens/teacher/e-learning/2.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning1',
        preview: {
          title: 'Daftar Kelas',
          description: 'Halaman Daftar Kelas dan Mata Pelajaran yang Diajar',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/teacher/e-learning/3.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning2',
        preview: {
          title: 'Daftar Tugas Guru',
          description: 'Halaman Daftar Tugas Guru',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/teacher/e-learning/4.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning3',
        preview: {
          title: 'Detail Kelas Guru',
          description: 'Halaman Detail Kelas Guru',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/teacher/e-learning/5.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning5',
        preview: {
          title: 'Detail Pertemuan guru',
          description: 'Halaman Detail Pertemuan guru',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/teacher/e-learning/6.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'E-Learning6',
        preview: {
          title: 'Detail Tugas Guru',
          description: 'Halaman Detail Tugas Guru',
          categories: ['E-Learning'],
          isDashboard: 0,
          src: '/img/screens/teacher/e-learning/6.png',
          // order: 2,
          // params: { id: '2' },
        },
      },

       //report
       {
        name: 'report',
        preview: {
          title: 'Input Nilai Guru',
          description: 'Halaman Input Nilai Guru',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/teacher/report/1.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report1',
        preview: {
          title: 'Deskrisi Karakter',
          description: 'Halaman Deskrisi Karakter',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/teacher/report/2.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report2',
        preview: {
          title: 'Input Nilai Keagamaan',
          description: 'Halaman Input Nilai Keagamaan',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/teacher/report/3.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report3',
        preview: {
          title: 'Detail Input Nilai',
          description: 'Halaman Detail Input Nilai',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/teacher/report/4.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report4',
        preview: {
          title: 'Detail Kelas Input Deskripsi Karakter',
          description: 'Halaman Detail Kelas Input Deskripsi Karakter',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/teacher/report/6.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report5',
        preview: {
          title: 'Detail Kelas Input Keagamaan',
          description: 'Halaman Detail Kelas Input Keagamaan',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/teacher/report/7.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report6',
        preview: {
          title: 'Detail Mata Pelajaran Input Keagamaan',
          description: 'Halaman Detail Mata Pelajaran Input Keagamaan',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/teacher/report/8.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report7',
        preview: {
          title: 'Input Nilai Karakter',
          description: 'Halaman Input Nilai Karakter',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/teacher/report/9.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report8',
        preview: {
          title: 'Input Karakter',
          description: 'Halaman Input Karakter',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/school/report/14.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report9',
        preview: {
          title: 'Input Bobot Nilai',
          description: 'Halaman Input Bobot Nilai',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/school/report/15.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report10',
        preview: {
          title: 'Input Kelompok Mata Pelajaran',
          description: 'Halaman Input Kelompok Mata Pelajaran',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/school/report/16.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report11',
        preview: {
          title: 'Input Setting Deskripsi',
          description: 'Halaman Input Setting Deskripsi',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/school/report/17.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report12',
        preview: {
          title: 'Detail Input Setting Deskripsi',
          description: 'Halaman Detail Input Setting Deskripsi',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/school/report/23.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report13',
        preview: {
          title: 'Input Setting Deskripsi Rapor Merdeka',
          description: 'Halaman Input Setting Deskripsi Rapor Merdeka',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/school/report/20.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report14',
        preview: {
          title: 'Daftar Kelas Cetak Rapor',
          description: 'Halaman Daftar Kelas Cetak Rapor',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/school/report/21.png',
          // order: 2,
          // params: { id: '2' },
        },
      },
      {
        name: 'report15',
        preview: {
          title: 'Cetak Rapor',
          description: 'Halaman Cetak Rapor',
          categories: ['Rapor'],
          isDashboard: 0,
          src: '/img/screens/school/report/22.png',
          // order: 2,
          // params: { id: '2' },
        },
      },

      
    ]

    return demoPages
  }
})

