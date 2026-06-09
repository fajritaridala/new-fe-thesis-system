export const HOME_CONTENT = {
  hero: {
    title: "UPA Bahasa, Universitas Halu Oleo Kendari",
    headline: "Sistem informasi pelayanan bahasa",
    description:
      "Daftar, ikuti ujian, dan terima sertifikat digital anti-palsu langsung di jaringan blockchain, semua dalam satu platform.",
    cta: [
      {
        href: "/service",
        label: "Daftar Ujian Sekarang",
        icon: "ArrowUpRight",
        variant: "default",
      },
      {
        href: "#workflow",
        label: "Lihat Cara Kerjanya",
        icon: "ArrowRight",
        variant: "outline",
      },
    ],
  },
  about: {
    title: "Mengapa Sipena?",
    heading: "Standar baru validitas sertifikat",
    describe:
      "Sipena mengintegrasikan teknologi Blockchain dan Smart Contract untuk menghadirkan ekosistem yang sepenuhnya transparan, otomatis, dan bebas dari risiko pemalsuan.",
    cards: [
      {
        icon: "FingerprintPattern",
        color: "text-primary",
        title: "Keamanan Permanen",
        describe:
          "Sertifikat diterbitkan langsung ke jaringan blockchain terdesentralisasi. Permanen dan tidak bisa diubah.",
      },
      {
        icon: "Zap",
        color: "text-warning",
        title: "Otomatisasi Penuh",
        describe:
          "Smart contract memproses verifikasi skor secara mandiri. Bebas birokrasi dan intervensi pihak ketiga.",
      },
      {
        icon: "ScanQrCode",
        color: "text-info",
        title: "Validasi Instan",
        describe:
          "Pihak mana pun dapat memverifikasi keaslian sertifikat secara real-time, cukup dengan satu tautan.",
      },
    ],
  },
  workflow: {
    title: "Alur Kerja",
    heading: "Mekanisme Ujian Hingga Penerbitan Sertifikat",
    describe:
      "Dari pendaftaran daring hingga sertifikat blockchain prosesnya transparan, cepat, dan tanpa antrian.",
    timelines: [
      {
        title: "Pendaftaran & Validasi",
        description:
          "Registrasi akun dan pilih jadwal ujian Anda. Verifikasi identitas selesai sepenuhnya secara daring.",
      },
      {
        title: "Pelaksanaan Ujian",
        description:
          "Ikuti ujian TOEFL secara langsung di UPT Bahasa UHO sesuai jadwal yang sudah Anda pilih saat pendaftaran.",
      },
      {
        title: "Penerbitan On-Chain",
        description:
          "Smart contract mencetak sertifikat digital Anda ke blockchain. Transparan, otomatis, dan absolut.",
      },
    ],
  },
  action: {
    tag: "Mulai Hari Ini",
    headline: "Satu Ujian. Sertifikat yang Berlaku Selamanya.",
    describe:
      "Bergabunglah bersama mahasiswa UHO yang sudah membuktikan kemampuan bahasa mereka dengan sertifikat digital yang tak tergoyahkan. Daftar sekarang proses hanya butuh 2 menit.",
    cta: {
      href: "#",
      label: "Mulai Ujian Sekarang",
      icon: "ArrowUpRight",
    },
  },
} as const;
