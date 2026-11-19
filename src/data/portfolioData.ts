export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  timeline: string;
  status: string;
  summary: string;
  tags: string[];
  metrics: { label: string; value: string; change?: string }[];
  problemStatement: string;
  solutionOverview: string;
  architectureHighlights: {
    title: string;
    description: string;
  }[];
  coreFeatures: {
    title: string;
    description: string;
    iconName: string;
  }[];
  techStack: {
    category: string;
    technologies: string[];
  }[];
  keyChallengesSolved: {
    challenge: string;
    solution: string;
  }[];
  resultsAndImpact: string[];
  mockupTheme: {
    badgeColor: string;
    accentColor: string;
  };
}

export const portfolioConfig = {
  profile: {
    name: "Suhail Shabbir Shaikh",
    shortName: "Suhail",
    title: "Full-Stack Developer & Software Consultant",
    tagline: "Architecting high-scale web platforms, intelligent workflows, and reliable cloud solutions.",
    bio: "I partner with startups and established enterprises to turn complex operational workflows into intuitive, resilient digital products. From real-time telemetry pipelines to high-conversion booking engines, I build end-to-end solutions that drive measurable business outcomes.",
    location: "Germany / India (Available Worldwide Remote)",
    yearsExperience: "5+ Years",
    projectsDelivered: "15+",
    availabilityStatus: "Open for New Client Projects",
    phone: "+49 15215484759",
    secondaryPhone: "+91 9130661137",
    whatsapp: "https://wa.me/4915215484759?text=Hi%20Suhail,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    whatsappIndia: "https://wa.me/919130661137?text=Hi%20Suhail,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    links: {
      email: "suhailshaikh9130@gmail.com",
      github: "https://github.com/SuhailShabbirShaikh",
      linkedin: "https://www.linkedin.com/in/suhail-shaikh-dev",
      twitter: "https://twitter.com",
      calBooking: "https://cal.com",
    },
  },
  services: [
    {
      title: "Full-Stack Web Development",
      description: "Modern, responsive, and performance-tuned web applications built with Next.js, React, and TypeScript. Optimized for SEO, user experience, and conversion.",
      deliverables: ["Custom Web Apps", "Admin Dashboards", "Progressive Web Apps (PWAs)", "Design System Implementation"],
    },
    {
      title: "Scalable API & Backend Systems",
      description: "High-throughput REST and GraphQL APIs, event-driven pipelines, real-time WebSockets, and secure microservices built with Node.js, Python, and PostgreSQL.",
      deliverables: ["Microservices & REST APIs", "Database Design & Optimization", "Authentication & RBAC", "Real-time Telemetry & WebSockets"],
    },
    {
      title: "Product MVP & Modernization",
      description: "Fast-track your product from wireframe to production. Refactoring legacy codebases, migrating architectures, and scaling systems for sudden traffic surges.",
      deliverables: ["Rapid 0-to-1 MVP Delivery", "Cloud Migration (AWS/Vercel)", "Performance Audits & Optimization", "Technical Due Diligence"],
    },
    {
      title: "Third-Party & Payment Integrations",
      description: "Seamless connections to payment processors (Stripe, PayPal, regional gateways), mapping providers (Google Maps, Mapbox), and external CRMs.",
      deliverables: ["Payment Gateway Orchestration", "Geolocation & Mapping APIs", "Automated Billing & Invoicing", "Webhooks & Third-party Sync"],
    },
  ],
  skills: {
    frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "HTML5 / CSS3"],
    backend: ["Node.js", "Express", "Python / FastAPI", "RESTful APIs", "GraphQL", "WebSockets", "Microservices"],
    databases: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "Mongoose", "Supabase"],
    cloudDevOps: ["AWS (EC2, S3, RDS)", "Docker", "Vercel", "CI/CD Pipelines", "Git / GitHub", "Nginx"],
    specialized: ["Real-time GPS Tracking", "Mapbox & Google Maps SDK", "Stripe & Multi-currency Payments", "System Architecture"],
  },
  caseStudies: [
    {
      slug: "fleet-management",
      title: "FleetSync: Intelligent Fleet & Telemetry Platform",
      subtitle: "Real-time vehicle tracking, dispatch orchestration, and automated maintenance intelligence for logistics fleets.",
      client: "Logistics Enterprise",
      role: "Lead Full-Stack Architect & Developer",
      timeline: "4 Months",
      status: "In Production",
      summary: "A unified operations hub processing thousands of live GPS signals per minute, reducing fuel wastage by 18% and cutting idle dispatch response time down to under 30 seconds.",
      tags: ["Real-time GPS", "Next.js", "Node.js", "WebSockets", "PostgreSQL", "Mapbox GL", "Redis"],
      metrics: [
        { label: "Fuel Cost Reduction", value: "18.4%", change: "Direct Operational Savings" },
        { label: "Dispatch Latency", value: "< 30s", change: "From 6+ mins prior" },
        { label: "Uptime Reliability", value: "99.95%", change: "High Availability SLA" },
        { label: "Live Active Vehicles", value: "1,200+", change: "Concurrent Tracking" },
      ],
      problemStatement:
        "The client was managing a distributed fleet of over 1,200 commercial vehicles using fragmented phone dispatch, outdated OBD GPS loggers, and spreadsheet maintenance logs. Dispatchers faced 5-10 minute delays in finding the nearest driver, while lack of route compliance monitoring led to excess fuel burn and missed customer delivery windows.",
      solutionOverview:
        "Engineered an end-to-end fleet command center featuring an interactive live map with sub-second position updates, geo-fencing trip detection, automated dispatch routing based on real-time traffic, and predictive maintenance schedules triggered by odometer and engine error codes.",
      architectureHighlights: [
        {
          title: "High-Frequency Ingestion Pipeline",
          description: "WebSocket and MQTT ingest cluster backed by Redis pub/sub to buffer and sanitize 3,000+ incoming telemetry packets/sec before batch-persisting to time-partitioned PostgreSQL tables.",
        },
        {
          title: "Low-Latency Geospatial Rendering",
          description: "Vector tile mapping powered by Mapbox GL and Deck.gl, rendering hundreds of live vehicles, historic route playback trails, and dynamic heatmaps without UI stutter.",
        },
        {
          title: "Intelligent Dispatch & Geofencing",
          description: "Automated geofence entry/exit event evaluation executing inside Node.js microservices with spatial indexing (PostGIS), alerting dispatchers within 200ms.",
        },
      ],
      coreFeatures: [
        {
          title: "Live Interactive Map & Route Playback",
          description: "Real-time vehicle locations, speed indicators, engine status, and second-by-second historical route replay with speed limit infraction markers.",
          iconName: "MapPin",
        },
        {
          title: "Smart Dispatch & Driver Assignment",
          description: "Algorithmic job allocation matching jobs to the closest available driver based on live traffic, vehicle capacity, and driver duty hours.",
          iconName: "Compass",
        },
        {
          title: "Vehicle Health & Maintenance Alerts",
          description: "Automated inspection checklists, odometer-based service reminders, and instant alerts for check-engine DTC diagnostics and battery drops.",
          iconName: "ShieldAlert",
        },
        {
          title: "Driver Performance & Fuel Analytics",
          description: "Comprehensive driver scorecards measuring harsh acceleration, sudden braking, excessive idling, and route deviation with downloadable PDF audits.",
          iconName: "BarChart3",
        },
      ],
      techStack: [
        {
          category: "Frontend & Dashboard",
          technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Mapbox GL JS", "Lucide React", "Recharts"],
        },
        {
          category: "Backend & Streaming",
          technologies: ["Node.js", "Express", "Socket.io", "Redis Pub/Sub", "BullMQ Worker Queues"],
        },
        {
          category: "Database & Spatial Storage",
          technologies: ["PostgreSQL", "PostGIS", "TimescaleDB extension", "Prisma ORM"],
        },
        {
          category: "Infrastructure & Security",
          technologies: ["Docker", "AWS EC2", "AWS S3", "Nginx Reverse Proxy", "JWT & RBAC"],
        },
      ],
      keyChallengesSolved: [
        {
          challenge: "Preventing Browser Performance Degradation with 1,000+ Real-Time Markers",
          solution: "Implemented client-side spatial clustering and delta-only WebSocket payloads, so the map only renders updates for visible viewport vehicles and bundles state updates every 500ms.",
        },
        {
          challenge: "Handling GPS Signal Dropout in Remote Regions",
          solution: "Built an offline edge cache on the onboard hardware logger that buffers coordinates with accurate UTC timestamps and bursts them to the server once cellular connection is restored, automatically backfilling trip logs without gap artifacts.",
        },
      ],
      resultsAndImpact: [
        "Eliminated manual phone call dispatching, reducing average order-to-dispatch time from 6 minutes to under 30 seconds.",
        "Saved an estimated $42,000 in monthly fuel costs across the fleet through idling detection and route optimization.",
        "Delivered 100% on-time maintenance compliance, reducing unexpected vehicle breakdowns by 34%.",
      ],
      mockupTheme: {
        badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        accentColor: "emerald",
      },
    },
    {
      slug: "ummat-hajj-umrah",
      title: "Ummat: Digital Hajj & Umrah Pilgrimage Platform",
      subtitle: "End-to-end pilgrim booking portal, verified package marketplace, and guided journey companion system.",
      client: "Travel & Religious Tourism Enterprise",
      role: "Lead Full-Stack Consultant & Solution Architect",
      timeline: "5 Months",
      status: "In Production",
      summary: "A modern digital pilgrimage platform connecting thousands of pilgrims with verified tour operators, multi-currency payment workflows, and real-time itinerary coordinators.",
      tags: ["Booking Engine", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe Multi-Currency", "Mobile First"],
      metrics: [
        { label: "Bookings Processed", value: "3,500+", change: "Pilgrim Packages Sold" },
        { label: "Booking Completion Rate", value: "94.2%", change: "+28% vs. Legacy Forms" },
        { label: "Average Order Value", value: "$3,800", change: "Multi-currency checkout" },
        { label: "Agency Onboarding", value: "45+", change: "Certified Operators" },
      ],
      problemStatement:
        "Planning a Hajj or Umrah journey involves complex logistics: visa compliance, hotel bookings across Makkah and Madinah, private vs. bus ground transportation, and sacred site ziyarat tours. Pilgrims faced fragmented offline travel agents, opaque pricing, and clunky wire transfer payments, while agency operators struggled with manual paperwork and disorganized passenger manifests.",
      solutionOverview:
        "Architected a transparent, trustworthy web platform that allows pilgrims to explore curated and verified packages, customize hotel proximity to the Haram, book family groups with document upload for visa verification, and pay securely in local currencies. Also provided an agency admin portal to manage flight groups, room allocations, and bus manifests.",
      architectureHighlights: [
        {
          title: "Multi-Stage Dynamic Booking Engine",
          description: "Engineered a stateful step-by-step checkout flow handling complex inventory checks (room sharing types: quadruple, triple, double), visa document attachments, and optional ziarat add-ons.",
        },
        {
          title: "Secure Multi-Currency Payment Gateway",
          description: "Integrated Stripe and localized regional payment providers with split-payment milestones (initial deposit + remaining balance pre-travel) and automated invoice generation.",
        },
        {
          title: "Operator Portal & Manifest Generator",
          description: "Role-based agency portal with instant PDF and Excel passenger manifest generation compliant with Ministry of Hajj travel regulatory requirements.",
        },
      ],
      coreFeatures: [
        {
          title: "Curated Package Marketplace",
          description: "Interactive package comparison with filters for proximity to the Haram (walking distance), 5-star vs economy accommodation, airlines, and guided scholars.",
          iconName: "Search",
        },
        {
          title: "Pilgrim Passport & Document Vault",
          description: "Secure, encrypted cloud storage for passport scans, vaccination records, and visa status tracking with automated validation checks.",
          iconName: "FileCheck",
        },
        {
          title: "Interactive Day-by-Day Itinerary",
          description: "Visual roadmap of the pilgrimage: departure, Miqat, Tawaf schedules, Mina/Arafat days, and guided religious lectures with dual Hijri-Gregorian calendars.",
          iconName: "Calendar",
        },
        {
          title: "Multi-Language & WhatsApp Notifications",
          description: "Localized interface (English & Arabic) with automated WhatsApp and SMS trip updates, departure reminders, and group leader broadcast channels.",
          iconName: "MessageSquare",
        },
      ],
      techStack: [
        {
          category: "Frontend & Booking UI",
          technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide React"],
        },
        {
          category: "Backend & Booking Services",
          technologies: ["Node.js", "Express", "REST APIs", "Prisma ORM", "Stripe API", "SendGrid / Twilio"],
        },
        {
          category: "Database & Document Storage",
          technologies: ["PostgreSQL", "AWS S3 (Encrypted Document Vault)", "Redis Session Store"],
        },
        {
          category: "Compliance & Security",
          technologies: ["AES-256 Data Encryption", "Role-Based Access Control", "Automated PDF Manifest Engine"],
        },
      ],
      keyChallengesSolved: [
        {
          challenge: "Dynamic Room Occupancy & Multi-Pax Booking Complexity",
          solution: "Designed a flexible inventory locking engine that prevents overbooking during peak seasons (Ramadan and Hajj) and dynamically adjusts per-person pricing based on room sharing preferences (Single, Double, Triple, Quad).",
        },
        {
          challenge: "Trust and High-Ticket Online Payment Friction",
          solution: "Implemented phased milestone deposits (20% deposit to lock hotel slots, remaining balance 30 days prior) with transparent fee disclosures, resulting in a 94% checkout completion rate.",
        },
      ],
      resultsAndImpact: [
        "Enabled agency operators to manage over 3,500 pilgrims without a single overbooking or room allocation error.",
        "Increased agency customer conversion by 28% compared to their legacy manual telephone/paper reservation system.",
        "Shortened pilgrim document submission and visa approval turnaround time from 9 days down to 48 hours.",
      ],
      mockupTheme: {
        badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        accentColor: "blue",
      },
    },
  ],
  testimonials: [
    {
      quote: "Suhail's technical leadership on our fleet telemetry system was exceptional. He delivered a real-time dashboard that handles our 1,200+ vehicles without lag, directly reducing our fuel costs by 18%. Highly recommended for complex engineering.",
      author: "Director of Operations",
      company: "Logistics & Fleet Client",
    },
    {
      quote: "Transforming our Hajj & Umrah booking process seemed daunting until Suhail built our platform. The dynamic multi-room engine and secure payments elevated our customer trust and allowed us to scale bookings 3x this season.",
      author: "Managing Director",
      company: "Religious Tourism Agency",
    },
  ],
  workingProcess: [
    {
      step: "01",
      title: "Discovery & Architecture",
      description: "Deep dive into your business objectives, technical constraints, data schemas, and user flows to design an airtight roadmap.",
    },
    {
      step: "02",
      title: "Agile 0-to-1 Development",
      description: "Fast-paced, iterative sprints with bi-weekly milestone demos, clean code practices, and transparent communication.",
    },
    {
      step: "03",
      title: "Rigorous Testing & Optimization",
      description: "Stress testing, security hardening, database query tuning, and cross-device visual polish before production rollout.",
    },
    {
      step: "04",
      title: "Deployment & Knowledge Transfer",
      description: "Seamless launch to cloud infrastructure (Vercel/AWS), CI/CD automation, and thorough handover documentation for your team.",
    },
  ],
};
