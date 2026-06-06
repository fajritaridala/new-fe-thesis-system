const GLOBAL_CONTENT = {
  navbar: {
    title: "Sipena.",
    icon: "Menu",
    labels: {
      heading: "Menu",
      back: "Tutup",
    },
    links: [
      { label: "Beranda", href: "/", icon: "House" },
      { label: "Layanan", href: "/service", icon: "Layers" },
      { label: "Verifikasi", href: "/verify", icon: "ShieldCheck" },
    ],
    login: {
      aria_label: "Submit",
      label: "Masuk",
      href: "#",
    },
  },
  footer: {
    about: {
      title: "Sipena.",
      description:
        "Sipena menghadirkan ujian TOEFL resmi dengan sertifikat digital berbasis blockchain, valid, transparan, dan bebas pemalsuan.",
    },
    links: {
      title: "Tautan Cepat",
      links: [
        { label: "Beranda", href: "/" },
        { label: "Layanan Ujian", href: "/service" },
        { label: "Verifikasi", href: "/verify" },
      ],
    },
    contact: {
      title: "Kontak",
      socials: [
        {
          icon: "Mail",
          label: "info@sipena.id",
          href: "mailto:info@sipena.id",
        },
        {
          icon: "MapPin",
          label: "UPA Bahasa UHO, Kendari, Sulawesi Tenggara",
          href: "#",
        },
      ],
    },
    copyright: {
      title: "Hak Cipta © 2025–2026 Sipena. Seluruh hak cipta dilindungi.",
      links: [
        { label: "Kebijakan Privasi", href: "#" },
        { label: "Syarat & Ketentuan", href: "#" },
      ],
    },
  },
} as const;

export default GLOBAL_CONTENT;
