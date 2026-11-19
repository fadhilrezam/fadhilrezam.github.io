/* =============================================================================
 * KONTEN PORTFOLIO — SATU-SATUNYA FILE YANG PERLU ANDA UBAH
 * -----------------------------------------------------------------------------
 * Cara pakai:
 *  - Setiap teks ditulis  { id: "...", en: "..." }  -> otomatis tampil sesuai bahasa.
 *  - Tambah / hapus item di dalam array, situs langsung menyesuaikan.
 *  - Tanggal periode cukup tulis teks bebas (mis. "Jun 2022 – Jun 2024").
 * =============================================================================
 */

const PORTFOLIO = {
  /* ---------------------------------------------------------------- profil */
  profile: {
    initials: "FR",
    name: "Fadhil Reza Maulana",
    roles: [
      { id: "Data & Analytics Professional", en: "Data & Analytics Professional" },
      { id: "Business Operations Specialist", en: "Business Operations Specialist" }
    ],
    tagline: {
      id: "Menggabungkan keahlian data teknis dengan pengetahuan operasional dan cost control untuk mengubah pertanyaan bisnis menjadi insight yang dapat ditindaklanjuti.",
      en: "Combining technical data skills with operational and cost-control knowledge to turn business questions into actionable insight."
    },
    location: "Bandung, Indonesia",
    email: "fadhilrezam@gmail.com",
    phone: "+62 81220261998",
    whatsapp: "6281220261998",
    links: [
      { label: "GitHub", url: "https://github.com/fadhilrezam", icon: "github" },
      { label: "LinkedIn", url: "https://linkedin.com/in/fadhil-reza-maulana", icon: "linkedin" },
      { label: "Email", url: "mailto:fadhilrezam@gmail.com", icon: "mail" }
    ]
  },

  aboutHeading: { id: "Latar Belakang", en: "Background" },
  statsHeading: { id: "Sekilas", en: "At a Glance" },

  /* ------------------------------------------------- background / tentang saya */
  about: {
    lead: {
      id: "Data professional dengan 2 tahun pengalaman di sektor perbankan dan fintech (real-time pipelines, dashboards, fraud detection, ML deployment), serta pengalaman praktis sejak 2025 dalam project budgeting (RAB), invoice reconciliation, dokumentasi tender, dan progress reporting. Menggabungkan keahlian data teknis dengan pengetahuan operasional dan cost control untuk mengubah pertanyaan bisnis menjadi analytics dan decision support.",
      en: "Data professional with 2 years of experience in banking and fintech (real-time pipelines, dashboards, fraud detection, ML deployment) and hands-on experience since 2025 in project budgeting (RAB), invoice reconciliation, tender documentation, and progress reporting. Combines technical data skills with operational and cost-control knowledge to turn business questions into analytics and decisions."
    },
    paragraphs: [],
    stats: [
      { value: "2+", label: { id: "Tahun pengalaman data", en: "Years of data experience" } },
      { value: "6%", label: { id: "Transaksi bulanan ditandai (AML)", en: "Monthly transactions flagged (AML)" } },
      { value: "50%", label: { id: "Latensi pengiriman data lebih rendah", en: "Lower data delivery latency" } },
      { value: "15-50", label: { id: "Kendaraan per siklus invoice", en: "Vehicles billed per cycle" } }
    ]
  },

  /* ------------------------------------------------- core strengths / keahlian */
  skillsHeading: { id: "Kekuatan Utama", en: "Core Strengths" },
  skills: [
    {
      group: { id: "Data Analytics & BI", en: "Data Analytics & BI" },
      items: [
        "SQL",
        "Python",
        "Streamlit",
        "Tableau"
      ]
    },
    {
      group: { id: "Data Engineering", en: "Data Engineering" },
      items: [
        "Kafka (Real-time Streaming)",
        "ETL / ELT Pipelines",
        "PostgreSQL",
        "MySQL",
        "Docker",
        "Git"
      ]
    },
    {
      group: { id: "ML dan AI", en: "ML and AI" },
      items: [
        "TigerGraph / GSQL",
        "AML Transaction Detection",
        "Scikit-learn",
        "TensorFlow",
        "MLflow",
        "Computer Vision",
        "Flask Deployment"
      ]
    },
    {
      group: { id: "Business Operations & Procurement", en: "Business Operations & Procurement" },
      items: [
        "RAB Cost Estimation",
        "Invoice-to-RAB Reconciliation",
        "Excel Automation",
        "Tender Documentation",
        "Contract Compliance",
        "Progress Reporting"
      ]
    }
  ],

  /* -------------------------------------------------------------- pengalaman */
  experienceHeading: { id: "Pengalaman Kerja", en: "Work Experience" },
  experience: [
    {
      company: "Private Contractor",
      role: { id: "Business Operation Specialist", en: "Business Operation Specialist" },
      period: "Aug 2025 – Present",
      location: "Bandung, Indonesia",
      status: { id: "Posisi Aktif", en: "Current Role" },
      scope: {
        id: "Dokumentasi tender, estimasi biaya (RAB/BOQ), rekonsiliasi invoice, dan pelaporan progres — dipercepat dengan otomatisasi Excel dan AI.",
        en: "Tender documentation, cost estimation (RAB/BOQ), invoice reconciliation, and progress reporting — accelerated with Excel automation and AI."
      },
      tags: ["Tender", "RAB", "BOQ", "Invoice Reconciliation", "Progress Reporting", "Excel Automation", "AI Workflow"],
      bullets: [
        {
          lead: { id: "Mengembangkan dan menyusun dokumen tender", en: "Develop and deliver tender documents" },
          id: "memastikan keselarasan penuh dengan kebutuhan dan spesifikasi proyek.",
          en: "ensuring full alignment with project requirements and specifications."
        },
        {
          lead: { id: "Membangun rincian volume pekerjaan (BOQ) dan estimasi biaya (RAB)", en: "Build detailed bills of quantities and cost estimates (RAB)" },
          id: "untuk pemeliharaan kendaraan.",
          en: "for vehicle maintenance."
        },
        {
          lead: { id: "Merancang alur kerja invoicing dan rekonsiliasi berbasis Excel (formula-driven, AI-assisted)", en: "Engineered an Excel-based invoicing and reconciliation workflow (formula-driven, AI-assisted)" },
          id: "untuk penagihan pemeliharaan kendaraan bermotor **15-50 unit (satu invoice per unit) per billing**, mempersingkat waktu proses dari **2-3 hari menjadi di bawah 1 hari** dengan error minimal.",
          en: "for motor vehicle maintenance billing of **15-50 vehicles (one invoice each) per billing**, cutting turnaround from **2-3 days to under 1 day** with minimal errors."
        },
        {
          lead: { id: "Memanfaatkan AI di seluruh pengembangan dokumen dan cross-checking", en: "Leverage AI across document development and cross-checking" },
          id: "untuk mempercepat delivery dan mengurangi error.",
          en: "to accelerate delivery and reduce errors."
        }
      ]
    },
    {
      company: "PT Bringin Inti Teknologi",
      role: { id: "Data Scientist", en: "Data Scientist" },
      period: "Jun 2022 – Jun 2024",
      location: "Jakarta, Indonesia",
      scope: {
        id: "Membangun pipeline data real-time, sistem deteksi fraud berbasis graph, dan dashboard analitik untuk sektor perbankan dan fintech.",
        en: "Built real-time data pipelines, graph-based fraud detection, and analytics dashboards for banking and fintech."
      },
      tags: ["Python", "SQL", "Kafka", "TigerGraph", "GSQL", "Streamlit"],
      bullets: [
        {
          lead: { id: "Membangun sistem deteksi money laundering", en: "Engineered a money laundering detection system" },
          id: "menggunakan TigerGraph dan GSQL, menandai sekitar **6% transaksi bulanan** sebagai fraudulent dan mendukung compliance reporting.",
          en: "using TigerGraph and GSQL, flagging approximately **6% of monthly transactions** as fraudulent and supporting compliance reporting."
        },
        {
          lead: { id: "Membangun pipeline data otomatis dengan Python, Kafka, dan SQL", en: "Built automated data pipelines using Python, Kafka, and SQL" },
          id: "menekan latensi pengiriman data hingga **50%** (dari 2 minggu menjadi 1 minggu).",
          en: "reducing data delivery latency by **50%** (from 2 weeks down to 1 week)."
        },
        {
          lead: { id: "Mengembangkan dashboard Streamlit real-time", en: "Developed real-time Streamlit dashboards" },
          id: "mengalirkan live market insights dan analitik akses pengguna kepada **3 stakeholder** berbeda.",
          en: "streaming live market insights and user access analytics to **3 different stakeholders**."
        }
      ]
    }
  ],

  /* ------------------------------------------------------------------ proyek */
  projectsHeading: { id: "Proyek Pilihan", en: "Featured Projects" },
  projectsSub: {
    id: "Beberapa sistem dan model yang saya bangun dari nol, mulai dari eksplorasi data hingga deployment.",
    en: "Systems and models I built from scratch, from data exploration all the way to deployment."
  },
  projects: [
    {
      title: "NVIDIA Stock Price Prediction",
      period: "Oct 2024 – Nov 2024",
      description: {
        id: "Solusi end-to-end untuk memprediksi harga saham NVIDIA menggunakan data historis, dengan MLflow untuk versioning model. Model dideploy memakai Streamlit dan dikontainisasi dengan Docker.",
        en: "An end-to-end solution for predicting NVIDIA stock prices from historical data, with MLflow for model versioning. Deployed via Streamlit for real-time predictions and containerized with Docker."
      },
      stack: ["Python", "MLflow", "Docker", "Flask", "Streamlit"],
      links: [
        { label: "GitHub", url: "https://github.com/fadhilrezam", icon: "github" },
        { label: "Demo", url: "https://github.com/fadhilrezam", icon: "external" }
      ]
    },
    {
      title: "Money Laundering Detection System",
      period: "Jun 2023 – Mar 2024",
      description: {
        id: "Sistem deteksi transaksi mencurigakan berbasis graph database TigerGraph menggunakan query language GSQL. Menandai sekitar 6% transaksi sebagai fraudulent setiap bulan dan menyajikan insight untuk pencegahan fraud.",
        en: "A graph-based suspicious transaction detection system using the TigerGraph graph database and GSQL. Flagging roughly 6% of transactions as fraudulent monthly and surfacing actionable insights for fraud prevention."
      },
      stack: ["TigerGraph", "GSQL", "Graph Database", "Python"],
      links: []
    },
    {
      title: "HomeSpot Reporting Dashboard",
      period: "Jan 2023 – Jan 2024",
      description: {
        id: "Dashboard reporting interaktif untuk melacak traffic website, engagement pengguna, dan aktivitas developer. Data disiapkan dengan SQL & Python, lalu dideploy sebagai aplikasi Streamlit.",
        en: "An interactive reporting dashboard tracking website traffic, user engagement, and developer activity. Data prepared with SQL and Python, deployed as a Streamlit app."
      },
      stack: ["SQL", "Python", "Streamlit"],
      links: []
    },
    {
      title: "Rice Plant Disease Detection",
      period: "2022",
      description: {
        id: "Aplikasi web untuk mendeteksi penyakit pada tanaman padi menggunakan TensorFlow, dengan prediksi real-time melalui antarmuka Streamlit.",
        en: "A web application detecting rice plant diseases using TensorFlow, with real-time predictions through a Streamlit interface."
      },
      stack: ["Python", "TensorFlow", "Streamlit", "Image Classification"],
      links: []
    },
    {
      title: "Airline Passenger Satisfaction",
      period: "2022",
      description: {
        id: "Model klasifikasi untuk memprediksi tingkat kepuasan penumpang pesawat menggunakan Gradient Boosting, dengan akurasi mencapai **95%**.",
        en: "A classification model predicting airline passenger satisfaction using Gradient Boosting, reaching **95% accuracy**."
      },
      stack: ["Python", "Scikit-learn", "Gradient Boosting"],
      links: []
    },
    {
      title: "Telco Customer Churn",
      period: "2022",
      description: {
        id: "Pemodelan churn pelanggan telekomunikasi menggunakan Artificial Neural Network (ANN) untuk mengidentifikasi pelanggan berisiko tinggi berhenti, dengan akurasi **74%**.",
        en: "Telecom customer churn modeling using an Artificial Neural Network (ANN) to identify high-risk customers, with **74% accuracy**."
      },
      stack: ["Python", "ANN", "TensorFlow", "Scikit-learn"],
      links: []
    }
  ],

  /* --------------------------------------------------------------- pendidikan */
  educationHeading: { id: "Pendidikan", en: "Education" },
  education: [
    {
      school: "Telkom University",
      location: "Bandung, Indonesia",
      degree: {
        id: "Bachelor of Telecommunication Engineering",
        en: "Bachelor of Telecommunication Engineering"
      },
      // TODO: isi tahun lulus bila ada, mis. "2016 – 2020"
      period: "",
      detail: { id: "Indeks Prestasi: 3.69", en: "GPA: 3.69" }
    }
  ],

  /* -------------------------------------------------------------- sertifikat */
  certHeading: { id: "Sertifikasi", en: "Certifications" },
  certifications: [
    { name: "TigerGraph Associate", issuer: "TigerGraph", year: "2023" },
    { name: "Data Science Professional", issuer: "IBM", year: "—" },
    { name: "Full Time Data Science", issuer: "Hacktiv8", year: "—" }
  ],

  /* ---------------------------------------------------------------- kontak */
  contactHeading: { id: "Mari Berkolaborasi", en: "Let's Work Together" },
  contactLead: {
    id: "Tersedia untuk peluang data analytics, data engineering, maupun business operations. Kirim pesan dan saya akan membalas dalam 1–2 hari kerja.",
    en: "Open to data analytics, data engineering, and business operations opportunities. Send a message and I'll get back to you within 1–2 business days."
  },

  /* --------------------------------------------------- label antarmuka (UI) */
  ui: {
    skip: { id: "Langsung ke konten utama", en: "Skip to main content" },
    nav: {
      home: { id: "Beranda", en: "Home" },
      about: { id: "Tentang", en: "About" },
      skills: { id: "Kekuatan", en: "Strengths" },
      experience: { id: "Pengalaman", en: "Experience" },
      projects: { id: "Proyek", en: "Projects" },
      education: { id: "Pendidikan", en: "Education" },
      contact: { id: "Kontak", en: "Contact" }
    },
    hero: {
      available: {
        id: "Terbuka untuk peluang baru",
        en: "Open to new opportunities"
      },
      ctaProject: { id: "Lihat Proyek", en: "View Projects" },
      ctaContact: { id: "Hubungi Saya", en: "Get in Touch" },
      scroll: { id: "gulir ke bawah", en: "scroll down" }
    },
    about: {
      downloadCv: { id: "Unduh CV", en: "Download CV" },
      emailMe: { id: "Kirim Email", en: "Send Email" }
    },
    contact: {
      name: { id: "Nama", en: "Name" },
      namePh: { id: "Nama lengkap Anda", en: "Your full name" },
      email: { id: "Email", en: "Email" },
      emailPh: { id: "nama@email.com", en: "name@email.com" },
      subject: { id: "Subjek", en: "Subject" },
      subjectPh: { id: "Tentang apa Anda menghubungi?", en: "What is this about?" },
      message: { id: "Pesan", en: "Message" },
      messagePh: { id: "Tulis pesan Anda di sini...", en: "Write your message here..." },
      submit: { id: "Kirim Pesan", en: "Send Message" },
      sending: { id: "Mengirim...", en: "Sending..." },
      success: {
        id: "Terima kasih! Pesan Anda sudah terkirim.",
        en: "Thank you! Your message has been sent."
      },
      error: {
        id: "Gagal mengirim pesan. Silakan coba lagi atau kirim langsung ke email saya.",
        en: "Failed to send. Please try again or email me directly."
      },
      required: {
        id: "Mohon lengkapi nama, email, dan pesan.",
        en: "Please fill in your name, email, and message."
      },
      fallback: {
        id: "Form belum dikonfigurasi — pesan Anda akan dibuka di aplikasi email.",
        en: "Form is not configured yet — your message will open in your email app."
      },
      orEmail: { id: "atau langsung kirim ke", en: "or email me at" },
      whatsapp: { id: "WhatsApp", en: "WhatsApp" },
      location: { id: "Lokasi", en: "Location" }
    },
    theme: {
      dark: { id: "mode gelap.", en: "dark mode." },
      light: { id: "mode terang.", en: "light mode." }
    },
    footer: {
      rights: { id: "Semua hak dilindungi.", en: "All rights reserved." },
      built: { id: "Dibangun dengan HTML, CSS & JavaScript.", en: "Built with HTML, CSS & JavaScript." }
    }
  }
};