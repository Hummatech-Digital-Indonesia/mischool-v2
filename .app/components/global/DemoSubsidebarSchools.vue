<script setup lang="ts">
const navigation = [
  {
    name: 'Home',
    children: [
      {
        name: 'Dokumentasi',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/home',
      },
      {
        name: 'Kop Surat',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/home/kop-surat',
      },
      {
        name: 'Pegawai',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/home/pegawai',
      },
      {
        name: 'Guru',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/home/guru',
      },
    ],
  },
  // {
  //   divider: true,
  // },
  {
    name: 'Kesiswaan',
    children: [
      {
        name: 'Siswa',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/kesiswaan/siswa',
      },
      {
        name: 'Ekstrakurikuler',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/kesiswaan/Ekstrakurikuler',
      },
      {
        name: 'Wali Murid',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/kesiswaan/wali-murid',
      },
    ],
  },
  {
    name: 'Kurikulum',
    children: [
      {
        name: 'Kelas',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/kurikulum/kelas',
      },
      {
        name: 'Tingkatan Kelas',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/kurikulum/tingkatan-kelas',
      },
      {
        name: 'Semester',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/kurikulum/semester',
      },
      {
        name: 'Mata Pelajaran',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/kurikulum/mata-pelajaran',
      },
      {
        name: 'Jam Pelajaran',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/kurikulum/jam-pelajaran',
      },
      {
        name: 'Bobot Nilai',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/kurikulum/bobot-nilai',
      },
      {
        name: 'Kelompok Pelajaran',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/kurikulum/kelompok-pelajaran',
      },
      {
        name: 'Setting Deskripsi',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/kurikulum/setting-deskripsi',
      },
      {
        name: 'Karakter',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/kurikulum/karakter',
      },
      {
        name: 'Cetak Rapor',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/kurikulum/cetak-rapor',
      },
    ],
  },
  {
    name: 'Absensi',
    children: [
      {
        name: 'Registrasi RFID',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/absensi/registrasi-rfid',
      },
      {
        name: 'Setting Jam',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/absensi/setting-jam',
      },
      {
        name: 'Kehadiran',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/absensi/kehadiran',
      },
      {
        name: 'Jurnal',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/absensi/jurnal',
      },
    ],
  },
  {
    name: 'Pelanggaran',
    children: [
      {
        name: 'Pelanggaran',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/pelanggaran',
      },
    ],
  },
  {
    name: 'Ujian',
    children: [
      {
        name: 'Ujian',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/ujian',
      },
      {
        name: 'Ujian Berlangsung',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/ujian/ujian-berlangsung',
      },
      {
        name: 'Ujian Selesai',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/ujian/ujian-selesai',
      },
      {
        name: 'Bank Soal',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/ujian/bank-soal',
      },
    ],
  },
  {
    name: 'Tambah Akun',
    children: [
      {
        name: 'Tambah Akun',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/tambah-akun',
      },
    ],
  },
  {
    name: 'Fitur',
    children: [
      {
        name: 'Fitur',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/fitur',
      },
      {
        name: 'Paket Anda',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/fitur/paket-anda',
      },
      {
        name: 'History',
        icon: 'ph:list-checks',
        to: '/dokumentasi/sekolah/fitur/history',
      },
      {
        name: 'Pesanan Anda',
        icon: 'ph:list-checks',
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
