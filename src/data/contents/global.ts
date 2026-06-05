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
    left_section: {
      heading: "Simpeka",
      describe:
        "Platform tes TOEFL modern yang mengintegrasikan teknologi blockchain untuk memastikan keaslian dan keamanan sertifikat Anda.",
    },
    center_section: {
      heading: "Navigasi",
      links: [
        { name: "Beranda", link: "/" },
        { name: "Layanan", link: "/service" },
        { name: "Verifikasi", link: "/verify" },
      ],
    },
    right_section: {
      heading: "Kontak Kami",
      links: [
        { icon: "", to: "0401-3195241" },
        { icon: "", to: "+62 813-9295-5256" },
        { icon: "", to: "uptbahasa.unhalu@gmail.com" },
      ],
    },
    bottom_section: {
      heading: "Hak Cipta © 2025 Simpeka. Seluruh hak cipta dilindungi.",
      socials: [
        { icon: "", to: "" },
        { icon: "", to: "" },
      ],
    },
  },
} as const;

export default GLOBAL_CONTENT;
