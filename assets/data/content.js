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

  /* ------------------------------------------------- background / tentang saya */
  about: {
    lead: {
      id: "Data professional dengan 2 tahun pengalaman di sektor perbankan dan fintech (real-time pipelines, dashboards, fraud detection, ML deployment), serta pengalaman praktis sejak 2025 dalam project budgeting (RAB), invoice reconciliation, dokumentasi tender, dan progress reporting. Menggabungkan keahlian data teknis dengan pengetahuan operasional dan cost control untuk mengubah pertanyaan bisnis menjadi analytics dan decision support.",
      en: "Data professional with 2 years of experience in banking and fintech (real-time pipelines, dashboards, fraud detection, ML deployment) and hands-on experience since 2025 in project budgeting (RAB), invoice reconciliation, tender documentation, and progress reporting. Combines technical data skills with operational and cost-control knowledge to turn business questions into analytics and decision support."
    },
    paragraphs: [],
    stats: [
      { value: "2+", label: { id: "Tahun di bidang data", en: "Years in data" } },
      { value: "6%", label: { id: "Transaksi flagged (AML)", en: "Transactions flagged (AML)" } },
      { value: "40%", label: { id: "Pengurangan reporting manual", en: "Less manual reporting" } },
      { value: "3", label: { id: "Sertifikat profesional", en: "Professional certifications" } }
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
        "Tableau",
        "KPI Dashboards"
      ]
    },
    {
      group: { id: "Applied AI", en: "Applied AI" },
      items: [
        "ML & DL",
        "RAG",
        "Docker",
        "Deployment",
        "Database",
        "AML Transaction Detection",
        "Kafka (Real-time Streaming)",
        "ETL / ELT Pipelines"
      ]
    },
    {
      group: { id: "Business Operations & Procurement", en: "Business Operations & Procurement" },
      items: [
        "RAB Cost Estimation",
        "Invoice-to-RAB Reconciliation",
        "Excel Automation",
        "Tender Documentation",
        "Progress Reporting"
      ]
    }
  ],

  /* -------------------------------------------------------------- pengalaman */
  experienceHeading: { id: "Pengalaman Kerja", en: "Work Experience" },
  experience: [
    {
      company: "PT. Bringin Inti Teknologi",
      role: { id: "Data Scientist", en: "Data Scientist" },
      period: "Jun 2022 – Jun 2024",
      location: "Jakarta, Indonesia",
      scope: {
        id: "Membangun pipeline data real-time, sistem deteksi fraud berbasis graph, computer vision, dan dashboard analitik untuk perbankan dan fintech.",
        en: "Built real-time data pipelines, graph-based fraud detection, computer vision, and analytics dashboards for banking and fintech."
      },
      tags: ["Kafka", "TigerGraph", "YOLOv5", "Streamlit", "Docker"],
      bullets: [
        {
          lead: { id: "Membangun pipeline data end-to-end", en: "Built end-to-end data pipelines" },
          id: "untuk streaming dan pemrosesan data real-time menggunakan Python, Kafka, dan SQL, sehingga ingestion dan transformasi data berjalan otomatis untuk kebutuhan analitik.",
          en: "for real-time streaming and processing using Python, Kafka, and SQL databases, enabling automated data ingestion and transformation for analytics workloads."
        },
        {
          lead: { id: "Mengembangkan dashboard interaktif", en: "Developed interactive dashboards" },
          id: "dengan Python dan Streamlit untuk memantau aktivitas mesin dan pengguna secara real-time, menyajikan insight yang dapat ditindaklanjuti bagi stakeholder di 3 unit bisnis.",
          en: "with Python and Streamlit to monitor machine and user activity in real time, delivering actionable insights to stakeholders across 3 business units."
        },
        {
          lead: { id: "Membangun sistem deteksi money laundering berbasis graph database TigerGraph", en: "Engineered a graph-based money laundering detection system" },
          id: "dengan query language GSQL, menandai sekitar **6% transaksi** sebagai transaksi mencurigakan setiap bulan untuk keperluan compliance reporting.",
          en: "using the TigerGraph graph database and GSQL, flagging approximately **6% of transactions** as suspicious monthly to support compliance reporting."
        },
        {
          lead: { id: "Mengimplementasikan solusi computer vision", en: "Implemented computer vision solutions" },
          id: "untuk object detection, face recognition, dan liveness detection menggunakan deep learning (YOLOv5, TensorFlow) yang meningkatkan akurasi verifikasi identitas.",
          en: "for object detection, face recognition, and liveness detection using deep learning algorithms (YOLOv5, TensorFlow), improving identity verification accuracy."
        },
        {
          lead: { id: "Berkomunikasi dengan tim lintas fungsi", en: "Collaborated with cross-functional teams" },
          id: "(Product, Engineering, Risk) untuk menentukan kebutuhan data dan menerjemahkan masalah bisnis menjadi solusi analitik.",
          en: "(Product, Engineering, Risk) to define data requirements and translate business problems into analytical solutions."
        },
        {
          lead: { id: "Deploy model machine learning ke production", en: "Deployed machine learning models to production" },
          id: "menggunakan Flask dan Docker agar konsisten di seluruh environment.",
          en: "using Flask and Docker, ensuring consistent deployment across environments."
        },
        {
          lead: { id: "Membangun pipeline reporting otomatis", en: "Created automated reporting pipelines" },
          id: "yang mengurangi beban reporting manual sekitar **40%**.",
          en: "that reduced manual reporting effort by approximately **40%**."
        }
      ]
    },
    {
      company: "Private Contractor",
      role: { id: "Business Operation Specialist", en: "Business Operation Specialist" },
      period: "Aug 2025 – Present",
      location: "Bandung, Indonesia",
      status: { id: "Posisi Aktif", en: "Current Role" },
      scope: {
        id: "Administrasi bisnis penuh untuk proyek konstruksi dan mining: dokumen tender, estimasi biaya, administrasi kontrak, penagihan, dan rekonsiliasi invoice dengan otomatisasi Excel dan AI.",
        en: "Full business administration for construction and mining projects: tender documentation, cost estimation, contract administration, invoicing, and invoice reconciliation with Excel automation and AI."
      },
      tags: ["RAB", "BOQ", "Tender", "E-Katalog", "Contract Admin", "Excel Automation", "AI Workflow"],
      bullets: [
        {
          lead: { id: "Mengembangkan dan menyusun dokumen tender", en: "Develop and deliver tender documents" },
          id: "memastikan keselarasan penuh dengan kebutuhan dan spesifikasi proyek.",
          en: "ensuring full alignment with project requirements and specifications."
        },
        {
          lead: { id: "Membangun rincian volume pekerjaan (BOQ) dan estimasi biaya proyek (RAB)", en: "Build detailed bills of quantities and cost estimates (RAB)" },
          id: "untuk sektor konstruksi.",
          en: "for construction projects."
        },
        {
          lead: { id: "Mengelola kontrak", en: "Administer contracts" },
          id: "mengalokasikan volume pekerjaan ke milestone pembayaran dan menyusun laporan progres yang menjadi dasar penagihan (invoicing) klien.",
          en: "allocating work volumes across payment milestones and producing progress reports that drive client invoicing."
        },
        {
          lead: { id: "Merekonsiliasi invoice terhadap estimasi biaya", en: "Reconcile invoices against cost estimates" },
          id: "untuk mengontrol deviasi dan memastikan akurasi penagihan.",
          en: "to control deviations and ensure billing accuracy."
        },
        {
          lead: { id: "Merancang alur kerja invoicing dan rekonsiliasi berbasis Excel (formula-driven, AI-assisted)", en: "Engineered an Excel-based invoicing and reconciliation workflow (formula-driven, AI-assisted)" },
          id: "untuk penagihan pemeliharaan kendaraan bermotor **15-50 unit per billing**, mempersingkat waktu proses dari **2-3 hari menjadi di bawah 1 hari** dengan error minimal.",
          en: "for motor vehicle maintenance billing of **15-50 vehicles (one invoice each) per billing**, cutting turnaround from **2-3 days to under 1 day** with minimal errors."
        },
        {
          lead: { id: "Memanfaatkan AI di seluruh siklus pengembangan dokumen dan cross-checking", en: "Leverage AI across document development and cross-checking" },
          id: "untuk mempercepat delivery dan mengurangi error.",
          en: "to accelerate delivery and reduce errors."
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
      category: { id: "Machine Learning", en: "Machine Learning" },
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
      category: { id: "Fraud Detection", en: "Fraud Detection" },
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
      category: { id: "Dashboard", en: "Dashboard" },
      description: {
        id: "Dashboard reporting interaktif untuk melacak traffic website, engagement pengguna, dan aktivitas developer. Data disiapkan dengan SQL & Python, lalu dideploy sebagai aplikasi Streamlit.",
        en: "An interactive reporting dashboard tracking website traffic, user engagement, and developer activity. Data prepared with SQL and Python, deployed as a Streamlit app."
      },
      stack: ["SQL", "Python", "Streamlit"],
      links: []
    },
    {
      title: "Rice Plant Malnutrition & Disease Detection",
      period: "Jan 2022",
      category: { id: "Computer Vision", en: "Computer Vision" },
      description: {
        id: "Aplikasi web untuk mendeteksi penyakit dan kekurangan nutrisi pada tanaman padi menggunakan TensorFlow, dengan prediksi real-time melalui antarmuka Streamlit.",
        en: "A web application detecting rice plant diseases and nutrient deficiencies using TensorFlow, with real-time predictions through a Streamlit interface."
      },
      stack: ["Python", "TensorFlow", "Streamlit", "Image Classification"],
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
      detail: { id: "Indeks Prestasi: 3.68", en: "GPA: 3.68" }
    }
  ],

  /* -------------------------------------------------------------- sertifikat */
  certHeading: { id: "Sertifikasi", en: "Certifications" },
  certifications: [
    { name: "TigerGraph Associate Certification", issuer: "TigerGraph", year: "2023" },
    { name: "Data Science Professional Certificate", issuer: "IBM", year: "—" },
    { name: "Full Time Data Science Certificate", issuer: "Hacktiv8", year: "—" }
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
      formTitle: { id: "Kirim pesan", en: "Send a message" },
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
      fallback: {
        id: "Form belum dikonfigurasi — pesan Anda akan dibuka di aplikasi email.",
        en: "Form is not configured yet — your message will open in your email app."
      },
      orEmail: { id: "atau langsung kirim ke", en: "or email me at" }
    },
    footer: {
      rights: { id: "Semua hak dilindungi.", en: "All rights reserved." },
      built: { id: "Dibangun dengan HTML, CSS & JavaScript.", en: "Built with HTML, CSS & JavaScript." }
    }
  }
};