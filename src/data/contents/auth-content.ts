export const AUTH_CONTENT = {
  login: {
    title: "Masuk",
    description:
      "Silakan hubungkan dompet kripto Anda untuk melanjutkan akses ke sistem.",
    cta: {
      label: "Hubungkan MetaMask",
      href: "#",
      icon: "LogIn",
    },
    footer: "Butuh bantuan? Pelajari cara kerja dompet digital.",
  },
  register: {
    title: "Buat akun baru",
    description:
      "Lengkapi data diri Anda untuk mengakses layanan ujian TOEFL berbasis blockchain.",
    forms: [
      {
        id: "name",
        label: "Nama Lengkap",
        placeholder: "Masukan nama sesuai identitas resmi Anda",
        type: "text",
        required: true,
      },
      {
        id: "email",
        label: "Alamat Email",
        placeholder: "contoh@gmail.com",
        type: "email",
        required: true,
      },
      {
        id: "role-token",
        label: "Token Peran",
        placeholder: "Opsional",
        type: "text",
        required: false,
      },
    ],
    cta: {
      label: "Daftar Akun",
      ariaLabel: "Klik untuk mendaftar akun baru",
    },
  },
};
