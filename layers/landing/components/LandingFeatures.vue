<!-- eslint-disable prettier-vue/prettier -->
<template>
  <div class="dark:bg-muted-900 bg-white py-24">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="mb-12 max-w-2xl">
        <BaseText
          class="text-primary-500 mb-2 text-[0.65rem] uppercase tracking-wider"
          >Fitur</BaseText
        >
        <BaseHeading
          as="h2"
          size="4xl"
          weight="light"
          lead="tight"
          class="text-muted-800 mx-auto mb-4 dark:text-white"
        >
          Fitur Fitur AcsSchool
        </BaseHeading>
        <BaseParagraph
          size="lg"
          class="text-muted-500 dark:text-muted-100 mx-auto mb-4"
        >
          AcsSchool menghadirkan 6 fitur penting yang dirancang untuk
          meningkatkan pengalaman pendidikan Anda.
        </BaseParagraph>
      </div>
      <div class="ltablet:grid-cols-3 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <LandingFeaturesTile
          title="E-Learning"
          icon="mdi:book-open-page-variant"
        >
          Kegiatan belajar mengajar di sekolah jadi lebih efektif dan efisien
          melalui fitur e-learning. Siswa dapat membaca materi dan mengumpulkan
          tugas berupa gambar, link atau file dimanapun kapanpun.
        </LandingFeaturesTile>
        <LandingFeaturesTile
          title="Ujian"
          icon="material-symbols:contract-edit-outline"
        >
          Dengan fitur ini, guru dapat membuat soal ujian. Untuk soal pilihan
          ganda akan ternilai secara otomatis. Dan siswa dapat melaksanakan
          ujian dimanapun kapanpun sesuai kebijakan sekolah. sekolah juga dapat
          mendeteksi siswa yang curang saat ujian.
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Absensi" icon="bi:person-check-fill">
          Catat kehadiran siswa dengan kartu pelajar berbasis RFID. Guru, siswa,
          dan wali murid dapat memantau kehadiran siswa secara real-time melalui
          web dan aplikasi mobile. termasuk dengan Catatan Kehadiran guru dan
          karyawan dengan RFID
        </LandingFeaturesTile>
        <LandingFeaturesTile title="Pelanggaran" icon="mdi:flag-variant">
          Setiap pelanggaran tata tertib siswa seperti keterlambatan,
          ketidakhadiran, merokok, dan pelanggaran lain, semuanya tercatat
          secara real-time dan akan terlaporkan pada rapor. Informasi
          pelanggaran ini memudahkan sekolah dalam membina dan menindaktegas
          siswa.
        </LandingFeaturesTile>
        <LandingFeaturesTile
          title="Buku Tamu"
          icon="carbon:license-third-party"
        >
          Setiap ada kunjungan tamu ke sekolah, tamu tinggal scan QRCode di
          sekolah dan langsung mengisikan form buku tamu. Dengan fitur ini,
          sekolah dapat melihat informasi tamu/ instansi yang sering berkunjung
          di sekolah.
        </LandingFeaturesTile>
        <LandingFeaturesTile
          title="Rapor"
          icon="fluent:clipboard-bullet-list-rtl-20-regular"
        >
          Mencatat informasi penilaian siswa secara real-time yang terintegrasi
          dengan nilai tugas, UTS, UAS, pelanggaran, kehadiran, dan perilaku
          siswa. Guru, siswa, dan wali murid dapat memantau hasil belajar siswa
          melalui web dan aplikasi mobile.
        </LandingFeaturesTile>
      </div>
    </div>
  </div>
</template>
