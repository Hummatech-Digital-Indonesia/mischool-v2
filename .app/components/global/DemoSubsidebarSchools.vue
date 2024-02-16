<script setup lang="ts">
const navigation = [
  {
    name: 'Home',
    children: [
      {
        name: 'Dokumentasi',
        icon: 'ph:house',
        to: '/dokumentasi/sekolah/home/dokumentasi',
      },
      {
        name: 'Kop Surat',
        icon: 'ph:envelope-simple-light',
        to: '/dokumentasi/sekolah/home/kop-surat',
      },
      {
        name: 'Pegawai/Staff',
        icon: 'mdi:account-school-outline',
        to: '/dokumentasi/sekolah/home/pegawai',
      },
      {
        name: 'Guru',
        icon: 'mdi:account-school-outline',
        to: '/dokumentasi/sekolah/home/guru',
      },
    ],
  },
  {
    divider: true,
  },
  {
    name: 'Kesiswaan',
    children: [
      {
        name: 'Siswa',
        icon: 'ph:student',
        to: '/dokumentasi/sekolah/kesiswaan/siswa',
      },
      {
        name: 'Ekstrakurikuler',
        icon: 'ph:person-simple-run-light',
        to: '/dokumentasi/sekolah/kesiswaan/Ekstrakurikuler',
      },
      {
        name: 'Wali Murid',
        icon: 'ph:person-simple-light',
        to: '/dokumentasi/sekolah/kesiswaan/wali-murid',
      },
    ],
  },
  {
    name: 'Kurikulum',
    children: [
      {
        name: 'Kelas',
        icon: 'ph:chalkboard-simple',
        to: '/dokumentasi/sekolah/kurikulum/kelas',
      },
      {
        name: 'Tingkatan Kelas',
        icon: 'ph:activity-light',
        to: '/dokumentasi/sekolah/kurikulum/tingkatan-kelas',
      },
      {
        name: 'Semester',
        icon: 'ph:bookmarks',
        to: '/dokumentasi/sekolah/kurikulum/semester',
      },
      {
        name: 'Mata Pelajaran',
        icon: 'ph:book',
        to: '/dokumentasi/sekolah/kurikulum/mata-pelajaran',
      },
      {
        name: 'Jam Pelajaran',
        icon: 'ph:clock',
        to: '/dokumentasi/sekolah/kurikulum/jam-pelajaran',
      },
      {
        name: 'Bobot Nilai',
        icon: 'tabler:weight',
        to: '/dokumentasi/sekolah/kurikulum/bobot-nilai',
      },
      {
        name: 'Kelompok Pelajaran',
        icon: 'tabler:books',
        to: '/dokumentasi/sekolah/kurikulum/kelompok-pelajaran',
      },
      {
        name: 'Setting Deskripsi',
        icon: 'tabler:settings',
        to: '/dokumentasi/sekolah/kurikulum/setting-deskripsi',
      },
      {
        name: 'Karakter',
        icon: 'tabler:heart',
        to: '/dokumentasi/sekolah/kurikulum/karakter',
      },
      {
        name: 'Cetak Rapor',
        icon: 'tabler:printer',
        to: '/dokumentasi/sekolah/kurikulum/cetak-rapor',
      },
    ],
  },
  {
    name: 'Absensi',
    children: [
      {
        name: 'Registrasi RFID',
        icon: 'tabler:cards',
        to: '/dokumentasi/sekolah/absensi/registrasi-rfid',
      },
      {
        name: 'Setting Jam',
        icon: 'tabler:clock-cog',
        to: '/dokumentasi/sekolah/absensi/setting-jam',
      },
      {
        name: 'Kehadiran',
        icon: 'tabler:checkup-list',
        to: '/dokumentasi/sekolah/absensi/kehadiran',
      },
      {
        name: 'Jurnal',
        icon: 'tabler:align-box-right-stretch',
        to: '/dokumentasi/sekolah/absensi/jurnal',
      },
    ],
  },
  {
    name: 'Pelanggaran',
    children: [
      {
        name: 'Pelanggaran',
        icon: 'tabler:barrier-block',
        to: '/dokumentasi/sekolah/pelanggaran',
      },
    ],
  },
  {
    name: 'Buku Tamu',
    children: [
      {
        name: 'Buku Tamu',
        icon: 'ph:address-book',
        to: '/dokumentasi/sekolah/buku-tamu',
      },
    ],
  },
  {
    name: 'Ujian',
    children: [
      {
        name: 'Ujian',
        icon: 'mdi:folder-cog',
        to: '/dokumentasi/sekolah/tambah-ujian',
      },
      {
        name: 'Ujian Berlangsung',
        icon: 'mdi:folder-clock-outline',
        to: '/dokumentasi/sekolah/ujian/ujian-berlangsung',
      },
      {
        name: 'Ujian Selesai',
        icon: 'mdi:folder-check-outline',
        to: '/dokumentasi/sekolah/ujian/ujian-selesai',
      },
      {
        name: 'Bank Soal',
        icon: 'mdi:folder-file',
        to: '/dokumentasi/sekolah/ujian/bank-soal',
      },
    ],
  },
  {
    name: 'Tambah Akun',
    children: [
      {
        name: 'Tambah Akun',
        icon: 'ph:user-plus',
        to: '/dokumentasi/sekolah/tambah-akun',
      },
    ],
  },
  {
    name: 'Paket Fitur',
    children: [
      {
        name: 'Fitur',
        icon: 'mdi:package-variant-closed',
        to: '/dokumentasi/sekolah/fitur',
      },
      {
        name: 'Paket Anda',
        icon: 'mdi:package-variant-closed-check',
        to: '/dokumentasi/sekolah/fitur/paket-anda',
      },
      {
        name: 'History',
        icon: 'ph:list-bullets-thin',
        to: '/dokumentasi/sekolah/fitur/history',
      },
      {
        name: 'Pesanan Anda',
        icon: 'ph:package-thin',
        to: '/dokumentasi/sekolah/fitur/pesanan-saya',
      },
    ],
  },
]
</script>

<template>
  <TairoSubsidebar>
    <template #header>
      <TairoSubsidebarHeader />
    </template>

    <TairoSubsidebarMenu :navigation="navigation" />
  </TairoSubsidebar>
</template>
