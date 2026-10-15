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
      tags: ["Kafka", "TigerGraph", "YOLOv5", "Streamlit", "Docker"],
      bullets: [
        {
          id: "Membangun dan meng-deploy pipeline data end-to-end untuk streaming dan pemrosesan data real-time menggunakan Python, Kafka, dan SQL, sehingga ingestion dan transformasi data berjalan otomatis untuk kebutuhan analitik.",
          en: "Built and deployed end-to-end data pipelines for real-time streaming and processing using Python, Kafka, and SQL databases, enabling automated data ingestion and transformation for analytics workloads."
        },
        {
          id: "Mengembangkan dashboard interaktif dengan Python dan Streamlit untuk memantau aktivitas mesin dan pengguna secara real-time, menyajikan insight yang dapat ditindaklanjuti bagi stakeholder di 3 unit bisnis.",
          en: "Developed and maintained interactive dashboards using Python and Streamlit to monitor machine and user activity in real time, delivering actionable insights to stakeholders across 3 business units."
        },
        {
          id: "Membangun sistem deteksi money laundering berbasis graph database TigerGraph dengan query language GSQL, menandai sekitar 6% transaksi sebagai transaksi mencurigakan setiap bulan untuk keperluan compliance reporting.",
          en: "Engineered a money laundering detection system using the TigerGraph graph database and GSQL, flagging approximately 6% of total transactions as suspicious monthly to support compliance reporting."
        },
        {
          id: "Mengimplementasikan solusi computer vision untuk object detection, face recognition, dan liveness detection menggunakan deep learning (YOLOv5, TensorFlow) yang meningkatkan akurasi verifikasi identitas.",
          en: "Implemented computer vision solutions for object detection, face recognition, and liveness detection using deep learning algorithms (YOLOv5, TensorFlow), improving identity verification accuracy."
        },
        {
          id: "Berkomunikasi dengan tim lintas fungsi (Product, Engineering, Risk) untuk menentukan kebutuhan data dan menerjemahkan masalah bisnis menjadi solusi analitik.",
          en: "Collaborated with cross-functional teams (Product, Engineering, Risk) to define data requirements and translate business problems into analytical solutions."
        },
        {
          id: "Deploy model machine learning ke production menggunakan Flask dan Docker agar konsisten di seluruh environment.",
          en: "Deployed machine learning models to production using Flask and Docker, ensuring consistent deployment across environments."
        },
        {
          id: "Membangun pipeline reporting otomatis yang mengurangi beban reporting manual sekitar 40%.",
          en: "Created automated reporting pipelines that reduced manual reporting effort by approximately 40%."
        }
      ]
    },
    {
      company: "Private Contractor",
      role: { id: "Business Operation Specialist", en: "Business Operation Specialist" },
      period: "Aug 2025 – Present",
      location: "Bandung, Indonesia",
      tags: ["RAB", "Invoice Reconciliation", "Tender", "E-Katalog", "Progress Reporting"],
      bullets: [
        {
          id: "Menyusun dan memelihara rencana anggaran biaya (RAB) proyek serta memantau pengeluaran harian agar tetap sesuai batasan anggaran.",
          en: "Design and maintain project budget plans (RAB) and track daily expenses to ensure adherence to budget constraints."
        },
        {
          id: "Melakukan rekonsiliasi invoice terhadap RAB agar penggunaan dana terdokumentasi dan dapat diaudit.",
          en: "Reconcile invoices against the RAB so fund usage stays documented and auditable."
        },
        {
          id: "Menyiapkan dan merapikan dokumen teknis serta administratif untuk proses tender, termasuk input item jasa ke dalam sistem E-Katalog.",
          en: "Prepare and organize technical and administrative documentation for tender processes, including entering service items into the E-Katalog system."
        },
        {
          id: "Menggabungkan laporan progres harian dari beberapa site ke dalam satu dashboard agar mudah dipantau stakeholder.",
          en: "Consolidate daily progress reports from multiple sites into a unified dashboard for stakeholder visibility."
        },
        {
          id: "Mengelola dokumen proyek secara menyeluruh, termasuk dokumen penagihan dan kelengkapan berkas kontrak.",
          en: "Manage end-to-end project documentation, including billing documents and contract file compliance."
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