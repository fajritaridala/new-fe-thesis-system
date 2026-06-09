export const SCHEDULE_CONTENT = {
  register: {
    title: "Formulir pendaftara TOEFL",
    description:
      "Lengkapi data diri Anda secara valid untuk mengamankan kursi ujian.",
    forms: [
      {
        id: "name",
        label: "Nama Lengkap",
        placeholder: "Masukan nama lengkap sesuai kartu identitas",
        type: "text",
      },
      {
        id: "birth_date",
        label: "Tanggal Lahir",
        placeholder: "",
        type: "date",
      },
      {
        id: "gender",
        label: "Jenis Kelamin",
        placeholder: "Pilih jenis kelamin",
        type: "select",
        options: ["laki-laki", "perempuan"],
      },
      {
        id: "email",
        label: "Alamat Email",
        placeholder: "contoh@gmail.com",
        type: "email",
      },
      {
        id: "phone_number",
        label: "Nomor WhatsApp",
        placeholder: "08xxxxxxxxx",
        type: "tel",
      },
      {
        id: "nim",
        label: "Nomor Induk Mahasiswa",
        placeholder: "contoh: F1G121005",
        type: "text",
      },
      {
        id: "faculty",
        label: "Fakultas",
        placeholder: "Pilih fakultas",
        type: "select",
      },
      {
        id: "study_program",
        label: "Program Studi",
        placeholder: "Masukan program studi",
        type: "text",
      },
      {
        id: "payment_date",
        label: "Tanggal Pembayaran",
        placeholder: "",
        type: "date",
      },
      {
        id: "payment_proof",
        label: "Bukti Pembayaran",
        placeholder: "",
        type: "file",
      },
    ],
    cta: {
      label: "Amankan Jadwal Ujian",
      type: "submit",
    },
  },
} as const;
