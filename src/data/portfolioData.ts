export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  challenges: string;
  solutions: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  tag: string;
  icon: string;
  experience: string;
  description: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  deliverables: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ebenezer A.A Sam",
    initials: "EAS",
    tagline: "IT / Software Developer",
    availability: "Available for freelance projects & full-time roles",
    heroTitle: "Building fast, reliable web applications and intelligent systems.",
    heroDescription:
      "I’m an IT and software developer based in Accra, Ghana. I design and build modern digital experiences, robust full-stack applications, and practical AI integrations that solve real-world problems.",
    location: "Accra, Ghana (Available for remote work worldwide)",
    email: "buggybigsam@gmail.com",
    phone: "0244203222",
    whatsapp: "https://wa.me/233244203222",
    github: "https://github.com/Buggybigsam",
    linkedin: "https://www.linkedin.com/in/sam-ebenezer-6115b540b/",
    instagram: "https://www.instagram.com/buggy_bigsam?stkn=MTB5bmwwd2JwZ3poMg%3D%3D&utm_source=qr",
    snapchat: "https://snapchat.com/t/O2P7Amd8",
    profileImage: "/images/ebenezer-sam.png",
    stats: [
      { label: "Production Projects", value: 12, suffix: "+" },
      { label: "Technologies Used", value: 18, suffix: "+" },
      { label: "Years Coding", value: 4, suffix: "+" },
      { label: "Client Satisfaction", value: 100, suffix: "%" },
    ],
  },

  about: {
    headline: "Writing clean, maintainable code and designing thoughtful user interfaces.",
    bio: [
      "I started my programming journey with a simple curiosity: how do computers turn logic and data into experiences that millions of people rely on every day? Over the last 4+ years, that curiosity has turned into building production web platforms, custom management software, and computer vision systems.",
      "My core philosophy is grounded in simplicity, performance, and empathy for the end user. I prefer writing code that is easy to read, test, and maintain over clever abstractions. When I'm not writing code, I explore new advancements in machine learning, study design systems, and contribute to developer communities.",
    ],
    philosophies: [
      {
        title: "Clean, Maintainable Code",
        desc: "Writing readable, well-structured TypeScript and Python that my future self and teammates can easily build upon.",
      },
      {
        title: "Speed & User Experience",
        desc: "Optimizing page load times, database queries, and UI responsiveness so apps feel instant on every device.",
      },
      {
        title: "Practical Problem Solving",
        desc: "Choosing the right tool for the job. Not chasing trends, but selecting proven technologies that deliver tangible business value.",
      },
      {
        title: "Craft & Detail",
        desc: "Paying close attention to spacing, accessible contrast, smooth transitions, and reliable edge-case handling.",
      },
    ],
    passions: [
      "Modern Web Applications (Next.js & React)",
      "Computer Vision & Face Recognition",
      "REST & GraphQL API Architecture",
      "Database Modeling & Performance Tuning",
    ],
  },

  skills: {
    frontend: [
      {
        name: "React 19 & Next.js",
        tag: "Core Framework",
        icon: "Atom",
        experience: "3+ years",
        description: "App Router, Server Components, SSR/SSG, and responsive state management.",
      },
      {
        name: "TypeScript",
        tag: "Language",
        icon: "Cpu",
        experience: "3+ years",
        description: "Strict type safety, interfaces, generics, and refactoring with confidence.",
      },
      {
        name: "Tailwind CSS",
        tag: "Styling",
        icon: "Layers",
        experience: "3+ years",
        description: "Component design systems, responsive layouts, dark modes, and micro-interactions.",
      },
      {
        name: "JavaScript (ES6+)",
        tag: "Core",
        icon: "FileCode",
        experience: "4+ years",
        description: "Asynchronous programming, event loops, DOM APIs, and performance profiling.",
      },
      {
        name: "HTML5 & Modern CSS",
        tag: "Foundations",
        icon: "Code2",
        experience: "4+ years",
        description: "Semantic markup, accessibility (a11y), flexbox, grid, and CSS animations.",
      },
      {
        name: "Framer Motion",
        tag: "Motion Design",
        icon: "Sparkles",
        experience: "2+ years",
        description: "Purposeful page transitions, layout animations, and spring physics.",
      },
    ],
    backend: [
      {
        name: "Node.js & Express",
        tag: "Runtime",
        icon: "Server",
        experience: "3+ years",
        description: "RESTful microservices, middleware pipelines, authentication, and error handling.",
      },
      {
        name: "PostgreSQL & Prisma",
        tag: "Relational DB",
        icon: "Database",
        experience: "3+ years",
        description: "Schema design, relational indexes, transactions, and type-safe ORM migrations.",
      },
      {
        name: "Python & FastAPI",
        tag: "Microservices",
        icon: "Terminal",
        experience: "2+ years",
        description: "High-performance asynchronous APIs for AI models and data pipelines.",
      },
      {
        name: "MongoDB & NoSQL",
        tag: "Document Store",
        icon: "FileSpreadsheet",
        experience: "2+ years",
        description: "Flexible document schemas, aggregation pipelines, and caching layers.",
      },
      {
        name: "Auth & Security",
        tag: "Authentication",
        icon: "ShieldCheck",
        experience: "3+ years",
        description: "OAuth 2.0, JWT tokens, session cookies, and role-based access control.",
      },
      {
        name: "API Integration",
        tag: "Protocols",
        icon: "Share2",
        experience: "3+ years",
        description: "Payment gateways (Stripe, Paystack), Google Maps, webhooks, and third-party APIs.",
      },
    ],
    tools: [
      {
        name: "Git & GitHub",
        tag: "Version Control",
        icon: "GitBranch",
        experience: "4+ years",
        description: "Branching strategies, pull requests, code reviews, and GitHub Actions CI/CD.",
      },
      {
        name: "VS Code & Neovim",
        tag: "Development",
        icon: "Binary",
        experience: "4+ years",
        description: "Optimized developer workflow, debugging, shortcuts, and linting configurations.",
      },
      {
        name: "Docker",
        tag: "Containers",
        icon: "Box",
        experience: "2+ years",
        description: "Containerizing services, multi-stage builds, and reproducible dev environments.",
      },
      {
        name: "Figma",
        tag: "Design",
        icon: "LayoutTemplate",
        experience: "3+ years",
        description: "Wireframing, high-fidelity UI design, component libraries, and developer handoff.",
      },
      {
        name: "Postman",
        tag: "API Testing",
        icon: "Send",
        experience: "3+ years",
        description: "Automated endpoint tests, environment variables, and mock servers.",
      },
    ],
    other: [
      {
        name: "UI/UX Design",
        tag: "Product Design",
        icon: "Compass",
        experience: "3+ years",
        description: "Crafting intuitive user journeys, accessibility testing, and typography hierarchy.",
      },
      {
        name: "AI & Computer Vision",
        tag: "Applied ML",
        icon: "Bot",
        experience: "2+ years",
        description: "Face recognition pipelines, OpenCV integration, and OpenAI LLM agent tools.",
      },
      {
        name: "System Architecture",
        tag: "Architecture",
        icon: "Network",
        experience: "3+ years",
        description: "Designing scalable architectures, database normalization, and caching strategies.",
      },
      {
        name: "Database Design",
        tag: "Data Engineering",
        icon: "Workflow",
        experience: "3+ years",
        description: "Entity-relationship modeling, constraints, indexing, and query optimization.",
      },
    ],
  },

  projects: [
    {
      id: "craftconnect",
      title: "CraftConnect",
      subtitle: "Location-Based Artisan Discovery & Appointment Platform",
      category: "Full-Stack",
      image: "/images/craftconnect.png",
      shortDescription:
        "A practical web application connecting clients with verified local Ghanaian artisans. Features real-time location mapping, direct appointment booking, secure payments, and customer dashboards.",
      fullDescription:
        "CraftConnect addresses a real everyday challenge: finding reliable, vetted artisans for household repairs and skilled services. Built with Next.js, PostgreSQL, and Google Maps, clients can search artisans by proximity, review past job ratings, pick an available calendar slot, and pay securely.",
      features: [
        "Interactive Map with Live Artisan Geolocation",
        "Two Dedicated Portals: Customer Booking & Artisan Management",
        "Real-Time Schedule Availability & Conflict Prevention",
        "Secure Escrow Payments with Clear Earning Statements",
        "Customer Review System and Dispute Resolution Flow",
        "Fully Mobile-Responsive Progressive Web Experience",
      ],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Google Maps API", "Prisma", "Stripe"],
      challenges:
        "Ensuring rapid map rendering and accurate geolocation distance filtering when searching across dense neighborhoods with hundreds of artisans.",
      solutions:
        "Used geospatial coordinate indexing and bounding box queries on the database layer to return nearby artisans in under 35ms without taxing the client browser.",
      liveUrl: "https://github.com/Buggybigsam/CraftConnect",
      githubUrl: "https://github.com/Buggybigsam/CraftConnect",
      featured: true,
    },
    {
      id: "face-attendance",
      title: "Face Recognition Attendance System",
      subtitle: "Automated Biometric Verification & Audit Suite",
      category: "AI & Systems",
      image: "/images/face-attendance.jpg",
      shortDescription:
        "An automated attendance tracking platform using computer vision for quick facial verification, liveness checks, and instant administrative attendance records.",
      fullDescription:
        "Created to eliminate manual roll calls and proxy attendance in schools and offices. The application pairs a web-based administrative dashboard with a Python camera feed. Using OpenCV and deep-learning facial embeddings, registered students or employees are recognized in under a second with timestamped logs automatically stored in a relational database.",
      features: [
        "Fast Face Detection & Biometric Landmark Verification",
        "Passive Anti-Spoofing Checks to Prevent Photo Replay Attacks",
        "Student & Personnel Registry Management with Batch Uploads",
        "Automated Real-Time Daily Attendance Logging",
        "Administrative Dashboard with Department Attendance Rates",
        "Exportable PDF and CSV Reports for Administration",
      ],
      technologies: ["Python", "FastAPI", "OpenCV", "PyTorch", "React", "Next.js", "PostgreSQL", "Docker"],
      challenges:
        "Handling varying lighting conditions and accidental double-scans when groups of people walked past the verification camera.",
      solutions:
        "Implemented adaptive histogram equalization for lighting balance and a 3-second debounce window per identity to ensure one clean scan per session.",
      liveUrl: "https://github.com/Buggybigsam",
      githubUrl: "https://github.com/Buggybigsam",
      featured: true,
    },
    {
      id: "neural-cloud",
      title: "AI Analytics & Workflow Tool",
      subtitle: "Visual Pipeline Builder for Model Tasks & Data",
      category: "AI & Full-Stack",
      image: "/images/neural-cloud.jpg",
      shortDescription:
        "A visual dashboard tool for orchestrating multi-step AI tasks, managing data preprocessing, and monitoring model response latency in real time.",
      fullDescription:
        "A developer-friendly workspace to assemble and test AI workflows without writing boilerplate code each time. Users can connect data inputs, select models, configure prompts, and inspect output streams with live latency tracking and error handling.",
      features: [
        "Visual Node-Based Canvas for Workflow Assembly",
        "Connectors for OpenAI, Anthropic, and Local Python Models",
        "Real-Time Response Streaming via WebSockets",
        "Latency, Token Usage, and Error Monitoring",
        "Exportable Workflow Configurations as JSON",
      ],
      technologies: ["Next.js", "TypeScript", "React Flow", "Tailwind CSS", "Python", "FastAPI", "WebSockets"],
      challenges:
        "Handling long-running model queries without freezing the user interface or dropping active connections.",
      solutions:
        "Used asynchronous server-sent events (SSE) and worker queues to stream tokens smoothly to the frontend as they generate.",
      liveUrl: "https://sainttechsolutions.github.io/",
      githubUrl: "https://github.com/Buggybigsam",
      featured: true,
    },
    {
      id: "cloud-fintech",
      title: "Transaction & Payment Gateway Hub",
      subtitle: "High-Reliability Multi-Currency Processing Dashboard",
      category: "Systems & Backend",
      image: "/images/cloud-fintech.jpg",
      shortDescription:
        "A financial transaction monitoring system with real-time settlement telemetry, automated reconciliation, and multi-currency conversion.",
      fullDescription:
        "A reliable backend service and management dashboard designed to process and audit cross-currency transactions. Built with strict idempotency and audit logs, it gives finance teams immediate visibility into payment gateway health and settlement statuses.",
      features: [
        "Double-Entry Transaction Ledger with Audit Logs",
        "Real-Time Gateway Status & Settlement Monitoring",
        "Automated Reconciliation Between Bank Feeds and App Records",
        "Multi-Currency Support with Dynamic FX Updates",
        "Role-Based Security for Finance and Engineering Teams",
      ],
      technologies: ["Node.js", "TypeScript", "Next.js", "PostgreSQL", "Redis", "Tailwind CSS", "Docker"],
      challenges:
        "Preventing duplicate charges during network drops or repeated user clicks on checkout buttons.",
      solutions:
        "Enforced unique client-side idempotency keys backed by atomic Redis lock leases before initiating payment gateway charges.",
      liveUrl: "https://github.com/Buggybigsam",
      githubUrl: "https://github.com/Buggybigsam",
      featured: true,
    },
  ],

  experience: [
    {
      period: "2024 — Present",
      role: "Software Developer & Systems Lead",
      organization: "Saint Tech Solutions / Independent Tech Lab",
      location: "Accra, Ghana (Remote)",
      description:
        "Leading the development of client web applications, custom management systems, and computer vision projects.",
      highlights: [
        "Built and deployed the Face Recognition Attendance System, cutting check-in time to under 1 second.",
        "Engineered the full-stack Smart Booking platform connecting hundreds of artisans with local clients.",
        "Established automated deployment workflows and testing suites, reducing release bugs significantly.",
      ],
      technologies: ["Next.js", "TypeScript", "Node.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
    },
    {
      period: "2023 — 2024",
      role: "Full-Stack Developer",
      organization: "Enterprise Solutions & Digital Consult",
      location: "Hybrid / Accra",
      description:
        "Developed responsive web applications, created REST APIs, and improved database query speeds for client portals.",
      highlights: [
        "Delivered 6 client web applications on schedule using React, Next.js, and Tailwind CSS.",
        "Integrated payment gateways (Paystack, Stripe) and third-party SMS/email notification APIs.",
        "Restructured relational database schemas and added indexes, speeding up dashboard queries by 40%.",
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "Node.js", "MongoDB", "PostgreSQL"],
    },
    {
      period: "2022 — 2023",
      role: "Frontend & UI Developer",
      organization: "Tech Innovators Studio",
      location: "Accra, Ghana",
      description:
        "Turned Figma designs into responsive, accessible code with smooth interactions and fast page loads.",
      highlights: [
        "Translated high-fidelity Figma prototypes into reusable component libraries.",
        "Ensured cross-browser compatibility and mobile responsiveness on all shipped interfaces.",
        "Collaborated with project managers to refine user flows and eliminate usability friction.",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Figma", "Git"],
    },
    {
      period: "2020 — 2022",
      role: "Computer Science Student & Junior Developer",
      organization: "Foundational Learning & Projects",
      location: "Ghana",
      description:
        "Completed rigorous coursework in algorithms, data structures, relational databases, and modern software engineering.",
      highlights: [
        "Built foundational projects in C++, Python, and JavaScript including inventory tools and web scrapers.",
        "Participated in regional hackathons and active developer meetups.",
      ],
      technologies: ["Python", "Java", "SQL", "JavaScript", "Git"],
    },
  ],

  services: [
    {
      id: "web-dev",
      title: "Web Application Development",
      shortDesc: "Fast, responsive web applications built with Next.js, React, and TypeScript.",
      fullDesc:
        "I build modern web apps that load fast, look sharp on all screen sizes, and are easy to maintain. From landing pages to complex SaaS products.",
      icon: "Globe",
      deliverables: ["Custom Next.js & React Apps", "Server-Side Rendering & SEO", "Clean Component Architecture", "Mobile-First Responsive Layouts"],
    },
    {
      id: "full-stack",
      title: "Full-Stack Development",
      shortDesc: "Complete web applications with frontend interfaces, backend APIs, and databases.",
      fullDesc:
        "End-to-end implementation where the frontend and backend work together seamlessly. Clean APIs, secure authentication, and reliable databases.",
      icon: "Layers",
      deliverables: ["REST & GraphQL APIs", "PostgreSQL & MongoDB Databases", "Secure Auth (JWT / OAuth)", "Third-Party Service Integration"],
    },
    {
      id: "system-dev",
      title: "Custom Management Systems",
      shortDesc: "Internal portals, administrative dashboards, and booking tools tailored to your workflow.",
      fullDesc:
        "Custom software built around how your organization works. Replace messy spreadsheets with organized dashboards, audit logs, and clear reporting.",
      icon: "Cpu",
      deliverables: ["Administrative Portals", "Booking & Scheduling Engines", "Financial & Inventory Tracking", "Role-Based User Permissions"],
    },
    {
      id: "ai-integration",
      title: "Practical AI & Computer Vision",
      shortDesc: "Integrating facial recognition, intelligent data extraction, or LLM tools into your app.",
      fullDesc:
        "Applying machine learning where it actually helps users save time. From touchless face recognition check-ins to AI-powered data workflows.",
      icon: "Bot",
      deliverables: ["Face Recognition & Biometrics", "OpenAI & LLM Integration", "Image & Document Processing", "Fast Python/FastAPI Microservices"],
    },
    {
      id: "ui-ux",
      title: "UI/UX & Design Systems",
      shortDesc: "Intuitive, clean interfaces designed in Figma and coded with precision in Tailwind CSS.",
      fullDesc:
        "Bridging the gap between design and engineering. Clean visual hierarchy, consistent typography, accessible colors, and thoughtful interactions.",
      icon: "Layout",
      deliverables: ["Figma Wireframes & Prototypes", "Reusable Tailwind Component Sets", "Responsive Design Implementation", "Accessibility & Usability Audits"],
    },
    {
      id: "api-database",
      title: "API & Database Engineering",
      shortDesc: "High-performance database modeling, query tuning, and stable API endpoints.",
      fullDesc:
        "Designing the engine behind your product so it stays fast as user counts grow. Clean database schemas, proper indexing, and resilient endpoints.",
      icon: "Database",
      deliverables: ["Relational Database Schemas", "Query Optimization & Indexing", "Webhook & Payment Gateways", "Automated Testing & Documentation"],
    },
  ],
};
