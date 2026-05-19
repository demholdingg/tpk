import type { Service, Project, Stat, NavLink } from "@/types";

export interface FleetItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
}

export const NAV_LINKS: (NavLink & { children?: NavLink[] })[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Company Profile", href: "/about" },
      { label: "Facilities", href: "/about/facilities" },
      { label: "HSE / K3L", href: "/about/hse" },
      { label: "Partners & Clients", href: "/about/partners" },
      { label: "Testimonials", href: "/about/testimonials" },
    ],
  },

  { label: "Business Units", href: "/services" },
  {
    label: "Our Products",
    href: "/products",
    children: [
      {
        label: "Ground Mounted Solar Power",
        href: "/products/ground-mounted",
      },
      {
        label: "Industrial Rooftop Solar Power",
        href: "/products/industrial-rooftop",
      },
      {
        label: "Residential Rooftop Solar Power",
        href: "/products/residential-rooftop",
      },
      {
        label: "Solar Street Lighting",
        href: "/products/solar-street-lighting",
      },
      {
        label: "Solar Power for Telecommunication",
        href: "/products/solar-telecom",
      },
      { label: "Mini Hydro Power Plant", href: "/products/mini-hydro" },
      {
        label: "Solar Floating Power Plant",
        href: "/products/floating-solar",
      },
    ],
  },
  { label: "Experience", href: "/portfolio" },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "News", href: "/media/news" },
      { label: "SEI on Frame", href: "/media/frame" },
      { label: "E-Magazine", href: "/media/magazine" },
      { label: "Download Center", href: "/media/downloads" },
    ],
  },

  { label: "Contact", href: "/contact" },
];

export const HERO_STATS: Stat[] = [
  { value: "67.93 MWp", label: "Total Capacity" },
  { value: "17+", label: "Years Experience" },
  { value: "21,803", label: "Poles Installed" },
  { value: "40+", label: "Regions Covered" },
];

export const SERVICES: Service[] = [
  {
    id: "mechanical-electrical",
    tag: "M&E Engineering",
    name: "Mechanical & Electrical Engineering",
    description:
      "Installation of power systems, HVAC, and industrial-scale plumbing with high efficiency and strict safety standards.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75",
    href: "/services/mechanical-electrical",
  },
  {
    id: "industrial-engineering",
    tag: "Industrial",
    name: "Industrial Engineering",
    description:
      "Optimizing complex processes and systems through advanced structural design and industrial workflow management.",
    image:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=600&q=75",
    href: "/services/industrial-engineering",
  },
  {
    id: "network-infrastructure",
    tag: "Telecommunication",
    name: "Network Telecommunication Infrastructure",
    description:
      "Construction of telecommunication towers and integration of high-speed data network systems across Indonesia.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=75",
    href: "/services/network-infrastructure",
  },
  {
    id: "fiber-optic",
    tag: "Connectivity",
    name: "Telekomunikasi Fiber Optic",
    description:
      "End-to-end fiber optic solutions including backbone deployment, horizontal drilling (HDD), and last-mile integration.",
    image:
      "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=600&q=75",
    href: "/services/fiber-optic",
  },
  {
    id: "heavy-equipment",
    tag: "Supply & Rent",
    name: "Heavy Duty Equipment & Rent",
    description:
      "Supply and rental of material handling machinery and construction equipment with 24/7 maintenance support.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75",
    href: "/services/heavy-equipment",
  },
  {
    id: "power-automation",
    tag: "Power Systems",
    name: "Power Quality & Automation",
    description:
      "Advanced power quality analysis and industrial automation systems to enhance energy efficiency and operational control.",
    image:
      "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=600&q=75",
    href: "/services/power-automation",
  },
  {
    id: "maintenance-services",
    tag: "Lifecycle",
    name: "Project & Maintenance Services",
    description:
      "Comprehensive lifecycle support including preventive maintenance, corrective repairs, and technical project management.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=75",
    href: "/services/maintenance-services",
  },
  {
    id: "procurement-workshop",
    tag: "Procurement",
    name: "Workshop & Procurement",
    description:
      "Global sourcing of industrial components and in-house fabrication workshop for customized engineering parts.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=75",
    href: "/services/procurement-workshop",
  },
];

export interface ServiceDetail {
  slug: string;
  tag: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  features: { icon: string; title: string; description: string }[];
  specs: { label: string; value: string }[];
  subServices: { name: string; description: string; image: string }[];
  relatedSlugs: string[];
}

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "mechanical-electrical",
    tag: "M&E Engineering",
    name: "Mechanical & Electrical Engineering",
    tagline: "Supply, System & Services",
    description:
      "We provide end-to-end mechanical and electrical engineering solutions for industrial facilities, commercial buildings, and national infrastructure. From initial design through commissioning and long-term maintenance, our certified engineers deliver systems that meet international standards.",
    heroImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80",
    features: [
      {
        icon: "⚡",
        title: "Power Systems",
        description:
          "High and medium voltage distribution, transformer installation, and switchgear integration for industrial facilities.",
      },
      {
        icon: "🌡️",
        title: "HVAC Systems",
        description:
          "Design and installation of industrial HVAC systems optimized for energy efficiency and climate control.",
      },
      {
        icon: "🔧",
        title: "Plumbing & Piping",
        description:
          "Industrial-grade piping systems for water, gas, and process fluids with pressure testing and certification.",
      },
      {
        icon: "🛡️",
        title: "Safety Systems",
        description:
          "Fire detection, suppression systems, and emergency lighting compliant with NFPA and local standards.",
      },
    ],
    specs: [
      { label: "Voltage Range", value: "Up to 150 kV" },
      { label: "Standards", value: "SNI, IEC, NEMA, NFPA" },
      { label: "Team Size", value: "50+ Certified Engineers" },
      { label: "Project Duration", value: "1 month – 3 years" },
      { label: "Coverage", value: "Nationwide" },
      { label: "Certifications", value: "ISO 9001:2015" },
    ],
    subServices: [
      {
        name: "Generator Set (Genset)",
        description:
          "Supply, installation, commissioning, and maintenance of diesel and gas generator sets from 10 kVA to 2,500 kVA.",
        image:
          "https://images.unsplash.com/photo-1622127306211-0aa8319690a7?w=500&q=75",
      },
      {
        name: "Panel & Switchgear",
        description:
          "Low and medium voltage panel manufacturing, installation, and testing for industrial and commercial applications.",
        image:
          "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?w=500&q=75",
      },
      {
        name: "Building Automation",
        description:
          "Integrated BMS solutions for energy management, monitoring, and control of mechanical and electrical systems.",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=75",
      },
    ],
    relatedSlugs: ["industrial-engineering", "power-automation"],
  },
  {
    slug: "industrial-engineering",
    tag: "Industrial",
    name: "Industrial Engineering",
    tagline: "Process Optimization & Structural Design",
    description:
      "Our industrial engineering division focuses on the optimization of complex processes, systems, and organizations. We develop, improve, and implement integrated systems of people, money, knowledge, information, equipment, energy, and materials.",
    heroImage:
      "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=1400&q=80",
    features: [
      {
        icon: "🏗️",
        title: "Structural Design",
        description:
          "Advanced structural analysis and design for industrial plants and warehouses.",
      },
      {
        icon: "📈",
        title: "Process Improvement",
        description:
          "Streamlining industrial workflows to increase throughput and reduce operational waste.",
      },
    ],
    specs: [
      { label: "Software", value: "AutoCAD, SAP2000, Tekla" },
      { label: "Methodology", value: "Lean Six Sigma" },
      { label: "Compliance", value: "SNI, AISC, Eurocode" },
    ],
    subServices: [
      {
        name: "Warehouse Automation",
        description: "Integrating conveyors and automated storage systems.",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=75",
      },
    ],
    relatedSlugs: ["mechanical-electrical", "procurement-workshop"],
  },
  {
    slug: "network-infrastructure",
    tag: "Telecommunication",
    name: "Network Telecommunication Infrastructure",
    tagline: "Telecommunication Systems",
    description:
      "We design, build, and maintain telecommunication infrastructure that connects communities across Indonesia. From greenfield tower construction to fiber optic backbone deployment and active equipment integration, we deliver reliable, high-capacity networks built to last.",
    heroImage:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1400&q=80",
    features: [
      {
        icon: "📡",
        title: "Tower Construction",
        description:
          "Greenfield and rooftop tower construction — monopole, lattice, and guyed mast — with full civil and structural works.",
      },
      {
        icon: "🌐",
        title: "Fiber Optic Network",
        description:
          "End-to-end fiber optic deployment: trenching, cable laying, splicing, and OTDR testing for backbone and last-mile connectivity.",
      },
      {
        icon: "📶",
        title: "Active Equipment",
        description:
          "Integration of BTS, microwave, and transmission equipment from leading OEMs including Huawei, Ericsson, and Nokia.",
      },
      {
        icon: "🔒",
        title: "Network Security",
        description:
          "Implementation of secure network architectures with firewall, IDS/IPS, and end-to-end encryption solutions.",
      },
    ],
    specs: [
      { label: "Tower Height", value: "Up to 100 m" },
      { label: "Fiber Standards", value: "ITU-T G.652, G.657" },
      { label: "Frequency Bands", value: "700 MHz – 26 GHz" },
      { label: "Projects Delivered", value: "30+ Tower Sites" },
      { label: "Coverage", value: "Kalimantan, Sulawesi & Java" },
      { label: "Certifications", value: "KOMINFO Licensed" },
    ],
    subServices: [
      {
        name: "Fiber Optic (FTTH/FTTB)",
        description:
          "Last-mile fiber optic deployment for residential and business parks with passive optical network (PON) architecture.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=75",
      },
      {
        name: "Microwave Backhaul",
        description:
          "Point-to-point and point-to-multipoint microwave link design, installation, and commissioning for network backhaul.",
        image:
          "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=75",
      },
      {
        name: "Data Center Cabling",
        description:
          "Structured cabling solutions for data centers including copper, fiber, and cable management systems.",
        image:
          "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&q=75",
      },
    ],
    relatedSlugs: ["fiber-optic", "maintenance-services"],
  },
  {
    slug: "fiber-optic",
    tag: "Connectivity",
    name: "Telekomunikasi Fiber Optic",
    tagline: "High-Speed Connectivity",
    description:
      "Specialized fiber optic infrastructure services including long-haul backbone deployment, metro fiber networks, and FTTX solutions. We utilize the latest fusion splicing and testing technologies.",
    heroImage:
      "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=1400&q=80",
    features: [
      {
        icon: "🚜",
        title: "HDD Drilling",
        description:
          "Horizontal Directional Drilling for underground fiber placement without surface disruption.",
      },
      {
        icon: "🧵",
        title: "Splicing & Testing",
        description:
          "Precision fusion splicing and comprehensive OTDR/Power Meter testing.",
      },
    ],
    specs: [
      { label: "Cable Type", value: "Single Mode / Multi Mode" },
      { label: "Testing", value: "OTDR, iOLM, LSPM" },
      { label: "Equipment", value: "Fujikura, EXFO" },
    ],
    subServices: [
      {
        name: "FTTH Deployment",
        description: "Fiber to the Home rollouts for residential areas.",
        image:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=75",
      },
    ],
    relatedSlugs: ["network-infrastructure", "maintenance-services"],
  },
  {
    slug: "heavy-equipment",
    tag: "Supply & Rent",
    name: "Heavy Duty Equipment & Rent",
    tagline: "Heavy Duty Equipment & Rent",
    description:
      "We supply, rent, and operate a comprehensive fleet of heavy equipment and material handling machinery. With a team of certified operators and a 24/7 maintenance unit, we ensure your operations run without interruption, no matter the scale or location.",
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
    features: [
      {
        icon: "🏗️",
        title: "Forklift Fleet",
        description:
          "Electric, LPG, and diesel forklifts from 1.5 to 25 tons. Rental and long-term leasing available with trained operators.",
      },
      {
        icon: "🚜",
        title: "Construction Equipment",
        description:
          "Excavators, bulldozers, cranes, and compactors available for project-based rental with certified operators.",
      },
      {
        icon: "🔩",
        title: "Maintenance",
        description:
          "Planned preventive maintenance and on-call corrective maintenance to maximize equipment uptime and lifespan.",
      },
      {
        icon: "📋",
        title: "Project Management",
        description:
          "End-to-end project planning, resource allocation, scheduling, and progress reporting with dedicated PMs.",
      },
    ],
    specs: [
      { label: "Fleet Size", value: "100+ Units" },
      { label: "Forklift Range", value: "1.5 – 25 Ton" },
      { label: "Crane Capacity", value: "Up to 500 Ton" },
      { label: "Operator Cert.", value: "SIO / K3 Certified" },
      { label: "Availability", value: "24/7 On-Call" },
      { label: "Coverage", value: "Java, Kalimantan, Papua" },
    ],
    subServices: [
      {
        name: "Forklift Rental",
        description:
          "Short and long-term forklift rental with or without operator. All units undergo monthly safety inspections.",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=75",
      },
      {
        name: "Crane Services",
        description:
          "Mobile and crawler crane services for heavy lifts in industrial, port, and construction environments.",
        image:
          "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=500&q=75",
      },
      {
        name: "Logistics & Rigging",
        description:
          "Heavy haul transportation, rigging, and load out services for oversized industrial equipment.",
        image:
          "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=500&q=75",
      },
    ],
    relatedSlugs: ["procurement-workshop", "maintenance-services"],
  },
  {
    slug: "power-automation",
    tag: "Power Systems",
    name: "Power Quality & Automation",
    tagline: "Energy Efficiency & Control",
    description:
      "Ensuring optimal power performance through power quality harmonic analysis and implementing state-of-the-art automation systems for smart industrial operations.",
    heroImage:
      "https://images.unsplash.com/photo-1581094751159-0f49c0d60d3d?w=1400&q=80",
    features: [
      {
        icon: "📊",
        title: "Harmonic Analysis",
        description:
          "Detailed measurement and mitigation of power system harmonics.",
      },
      {
        icon: "🤖",
        title: "SCADA Systems",
        description:
          "Supervisory Control and Data Acquisition for real-time monitoring.",
      },
    ],
    specs: [
      { label: "Automation", value: "PLC, SCADA, HMI" },
      { label: "Analysis", value: "Harmonics, Power Factor" },
      { label: "Brands", value: "Schneider, Siemens, ABB" },
    ],
    subServices: [
      {
        name: "Smart Metering",
        description: "Implementation of IoT-based energy monitoring systems.",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=75",
      },
    ],
    relatedSlugs: ["mechanical-electrical", "industrial-engineering"],
  },
  {
    slug: "maintenance-services",
    tag: "Services",
    name: "Project & Maintenance Services",
    tagline: "Reliability & Longevity",
    description:
      "Dedicated to maintaining the integrity of your infrastructure. We offer comprehensive project management and maintenance services to ensure your systems operate at peak performance.",
    heroImage:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1400&q=80",
    features: [
      {
        icon: "🛠️",
        title: "Preventive Care",
        description:
          "Scheduled inspections to prevent costly equipment failures.",
      },
      {
        icon: "🚑",
        title: "Emergency Repair",
        description:
          "24/7 on-call technical support for critical system outages.",
      },
    ],
    specs: [
      { label: "Response Time", value: "< 4 Hours" },
      { label: "SLA", value: "Up to 99.9% Uptime" },
      { label: "Reporting", value: "Digital CMMS Integrated" },
    ],
    subServices: [
      {
        name: "Tower Maintenance",
        description: "Structural audits and painting for telecom towers.",
        image:
          "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&q=75",
      },
    ],
    relatedSlugs: ["network-infrastructure", "heavy-equipment"],
  },
  {
    slug: "procurement-workshop",
    tag: "Procurement",
    name: "Workshop & Procurement",
    tagline: "Sourcing & Fabrication",
    description:
      "Our integrated procurement and workshop division handles the sourcing of high-quality industrial materials and in-house fabrication of specialized engineering components.",
    heroImage:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1400&q=80",
    features: [
      {
        icon: "📦",
        title: "Global Sourcing",
        description:
          "Direct procurement links with international manufacturers.",
      },
      {
        icon: "⚒️",
        title: "Custom Fabrication",
        description:
          "Workshop capabilities for steel structures and custom panels.",
      },
    ],
    specs: [
      { label: "Workshop Area", value: "2,500 sqm" },
      { label: "Sourcing", value: "Global Logistics Network" },
      { label: "Fabrication", value: "CNC, Lathe, Welding" },
    ],
    subServices: [
      {
        name: "Material Supply",
        description: "Standard industrial components and raw material supply.",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&q=75",
      },
    ],
    relatedSlugs: ["industrial-engineering", "heavy-equipment"],
  },
];

export interface ProjectFull extends Project {
  year: string;
  location: string;
  client: string;
  description: string;
  tags: string[];
}

export const ALL_PROJECTS: ProjectFull[] = [
  {
    id: "palangka-raya-tower",
    category: "Telecom",
    name: "Palangka Raya Tower",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=75",
    href: "/portfolio/palangka-raya-tower",
    year: "2024",
    location: "Palangka Raya, Kalimantan Tengah",
    client: "PT Telkomsel",
    description:
      "Construction of 72m lattice telecommunication tower with full BTS installation and microwave backhaul integration.",
    tags: ["Telecom", "Tower", "BTS"],
  },
  {
    id: "central-kalianta-power",
    category: "Mechanical",
    name: "Central Kalianta Power Plant",
    image:
      "https://images.unsplash.com/photo-1542336391-ae2936d8efe4?w=600&q=75",
    href: "/portfolio/central-kalianta-power",
    year: "2023",
    location: "Kalimantan Tengah",
    client: "PT PLN (Persero)",
    description:
      "Complete mechanical and electrical installation for a 10 MW diesel power plant including switchgear, control panels, and auxiliary systems.",
    tags: ["Mechanical", "Electrical", "Power"],
  },
  {
    id: "region-network-center",
    category: "Network",
    name: "Region Network Center",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=75",
    href: "/portfolio/region-network-center",
    year: "2024",
    location: "Jakarta Selatan",
    client: "Kementerian Kominfo",
    description:
      "Design and deployment of regional network operations center with structured cabling, active equipment, and 24/7 monitoring systems.",
    tags: ["Network", "Data Center", "Telecom"],
  },
  {
    id: "surabaya-port-forklift",
    category: "Equipment",
    name: "Surabaya Port Fleet",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75",
    href: "/portfolio/surabaya-port-forklift",
    year: "2023",
    location: "Surabaya, Jawa Timur",
    client: "PT Pelindo III",
    description:
      "Supply and long-term operation of 25-unit forklift fleet (3–10 ton) with certified operators for port container handling operations.",
    tags: ["Equipment", "Forklift", "Operations"],
  },
  {
    id: "fiber-optic-balikpapan",
    category: "Network",
    name: "Balikpapan Fiber Backbone",
    image:
      "https://images.unsplash.com/photo-1601333144130-8cbb312386b6?w=600&q=75",
    href: "/portfolio/fiber-optic-balikpapan",
    year: "2022",
    location: "Balikpapan, Kalimantan Timur",
    client: "PT Indosat Ooredoo",
    description:
      "120 km fiber optic backbone installation across Balikpapan city with 48-core cable, splicing, and OTDR acceptance testing.",
    tags: ["Network", "Fiber Optic", "Infrastructure"],
  },
  {
    id: "hvac-hospital-jakarta",
    category: "Mechanical",
    name: "RSUD Jakarta HVAC System",
    image:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=600&q=75",
    href: "/portfolio/hvac-hospital-jakarta",
    year: "2023",
    location: "Jakarta Pusat",
    client: "Pemerintah DKI Jakarta",
    description:
      "Design, supply, and installation of hospital-grade HVAC system including AHU, chiller plant, and clean room pressurization for a 400-bed hospital.",
    tags: ["Mechanical", "HVAC", "Healthcare"],
  },
  {
    id: "crane-mining-kaltim",
    category: "Equipment",
    name: "Kaltim Mining Crane Ops",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=75",
    href: "/portfolio/crane-mining-kaltim",
    year: "2024",
    location: "Kutai Kartanegara, Kalimantan Timur",
    client: "PT Berau Coal",
    description:
      "Provision of 3 units 250-ton crawler cranes with certified riggers for heavy module installation at open-pit coal mining facility.",
    tags: ["Equipment", "Crane", "Mining"],
  },
  {
    id: "bts-sulawesi-rollout",
    category: "Telecom",
    name: "Sulawesi BTS Rollout",
    image:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=600&q=75",
    href: "/portfolio/bts-sulawesi-rollout",
    year: "2022",
    location: "Sulawesi Selatan",
    client: "PT XL Axiata",
    description:
      "Turnkey installation of 45 BTS sites across South Sulawesi including civil works, tower erection, equipment installation, and commissioning.",
    tags: ["Telecom", "BTS", "Tower"],
  },
];

export const PROJECTS: Project[] = ALL_PROJECTS.slice(0, 3);

export const MILESTONES = [
  {
    year: "2009",
    title: "Founded",
    description:
      "Established in Jakarta as a specialist mechanical electrical contractor for industrial clients.",
  },
  {
    year: "2012",
    title: "First Major Contract",
    description:
      "Awarded first PLN power plant project in Kalimantan, marking our expansion into large-scale infrastructure.",
  },
  {
    year: "2015",
    title: "Telecom Division",
    description:
      "Launched Network & Telecommunication division, entering the BTS and fiber optic market.",
  },
  {
    year: "2018",
    title: "ISO Certification",
    description:
      "Achieved ISO 9001:2015 certification, reinforcing our commitment to quality management.",
  },
  {
    year: "2020",
    title: "Heavy Equipment Div.",
    description:
      "Established Supply, System & Services division with a fleet of 50+ heavy equipment units.",
  },
  {
    year: "2024",
    title: "50+ Projects",
    description:
      "Completed over 50 major infrastructure projects across 12 provinces in Indonesia.",
  },
];

export const WHY_FEATURES = [
  {
    icon: "🎯",
    title: "Guaranteed Precision",
    description:
      "We apply strict QA/QC standards at every stage of execution to ensure zero defect results on every project.",
  },
  {
    icon: "🏆",
    title: "Licensed Experts",
    description:
      "Supported by experienced engineers holding national and international professional certifications.",
  },
  {
    icon: "⚙️",
    title: "Operational Efficiency",
    description:
      "Optimal workflows ensure projects are completed on time without compromising on quality or safety.",
  },
];

export const FOOTER_SERVICES = [
  { label: "M&E Engineering", href: "/services/mechanical-electrical" },
  { label: "Industrial Engineering", href: "/services/industrial-engineering" },
  { label: "Network Telecom", href: "/services/network-infrastructure" },
  { label: "Fiber Optic", href: "/services/fiber-optic" },
  { label: "Power & Automation", href: "/services/power-automation" },
  { label: "Equipment Rental", href: "/services/heavy-equipment" },
  { label: "Maintenance Services", href: "/services/maintenance-services" },
];

export const FOOTER_COMPANY = [
  { label: "About Us", href: "/about" }, // New link based on design.md
  { label: "Media", href: "/media" }, // New link based on design.md
  { label: "Careers", href: "/careers" },
  { label: "Portfolio", href: "/portfolio" }, // Renamed from 'Projects' for consistency
  { label: "Contact Support", href: "/contact" },
];

export const NEWS_ARTICLES = [
  {
    id: 1,
    date: "Oct 24, 2024",
    category: "Corporate",
    title: "Teknika Pesona Kahayan Expands Renewable Energy Division",
    excerpt:
      "Strengthening our commitment to sustainable infrastructure with new solar and hydro power initiatives across Eastern Indonesia.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=75",
  },
  {
    id: 2,
    date: "Sep 12, 2024",
    category: "Project Update",
    title: "Successful Commissioning of 72m Tower in Palangka Raya",
    excerpt:
      "Our telecom team successfully completed the structural and active equipment integration for the new regional connectivity hub.",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=75",
  },
  {
    id: 3,
    date: "Aug 05, 2024",
    category: "HSE",
    title: "Achieving 1 Million Safe Man-Hours Milestone",
    excerpt:
      "Safety remains our top priority. We are proud to announce another year of zero LTI (Lost Time Injury) across all project sites.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=75",
  },
];

export const DOWNLOAD_RESOURCES = [
  {
    title: "Company Profile 2024",
    type: "PDF",
    size: "4.2 MB",
  },
  {
    title: "Safety & HSE Guidelines",
    type: "PDF",
    size: "1.8 MB",
  },
  {
    title: "Annual Sustainability Report",
    type: "PDF",
    size: "3.5 MB",
  },
];

export const HEAVY_EQUIPMENT_FLEET: FleetItem[] = [
  {
    id: "forklift-mitsubishi-10t",
    name: "Mitsubishi FD100",
    category: "Forklift",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
    description:
      "High-performance diesel forklift optimized for heavy industrial port and warehouse operations.",
    specs: [
      { label: "Capacity", value: "10.0 Tons" },
      { label: "Load Center", value: "600 mm" },
      { label: "Engine", value: "Mitsubishi 6D16" },
      { label: "Lift Height", value: "3,000 mm" },
    ],
  },
  {
    id: "crane-sany-250t",
    name: "Sany SCC2500A",
    category: "Crawler Crane",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80",
    description:
      "Versatile crawler crane with excellent lifting capacity and stability for large-scale infrastructure projects.",
    specs: [
      { label: "Max Capacity", value: "250 Tons" },
      { label: "Main Boom", value: "18m - 86m" },
      { label: "Fixed Jib", value: "13m - 42m" },
      { label: "Engine Output", value: "242 kW" },
    ],
  },
  {
    id: "excavator-komatsu-pc200",
    name: "Komatsu PC200-8",
    category: "Excavator",
    image:
      "https://images.unsplash.com/photo-1581094651181-35942459ef62?w=1600&q=80",
    description:
      "The industry standard for reliability and efficiency in earthmoving and construction site preparation.",
    specs: [
      { label: "Bucket Capacity", value: "0.8 - 1.2 m³" },
      { label: "Operating Weight", value: "20,000 kg" },
      { label: "Max Digging Depth", value: "6,600 mm" },
      { label: "Travel Speed", value: "5.5 km/h" },
    ],
  },
  {
    id: "crane-tadano-50t",
    name: "Tadano GR-500EX",
    category: "Rough Terrain Crane",
    image:
      "https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=1600&q=80",
    description:
      "Compact and powerful rough terrain crane designed for high mobility and efficiency in tight construction sites.",
    specs: [
      { label: "Max Capacity", value: "50 Tons" },
      { label: "Max Boom", value: "34.7 m" },
      { label: "Max Radius", value: "31.0 m" },
      { label: "Drive", value: "4 x 4 x 4" },
    ],
  },
  {
    id: "bulldozer-cat-d6r",
    name: "Caterpillar D6R",
    category: "Bulldozer",
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80",
    description:
      "Robust track-type tractor built for heavy-duty earthmoving, land clearing, and site preparation.",
    specs: [
      { label: "Engine Power", value: "189 HP" },
      { label: "Operating Weight", value: "18,800 kg" },
      { label: "Blade Capacity", value: "3.8 - 5.6 m³" },
      { label: "Track Width", value: "610 mm" },
    ],
  },
  {
    id: "compactor-bomag-bw211",
    name: "Bomag BW 211 D-40",
    category: "Single Drum Roller",
    image: "/images/heavyduty/bomac.jpg",
    description:
      "High-performance soil compactor for medium to large-scale infrastructure projects.",
    specs: [
      { label: "Operating Weight", value: "10,000 kg" },
      { label: "Working Width", value: "2,130 mm" },
      { label: "Static Linear Load", value: "28.2 kg/cm" },
      { label: "Engine Power", value: "74 kW" },
    ],
  },
];

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
  application: string;
}

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "ground-mounted",
    name: "Ground Mounted Solar Power",
    slug: "ground-mounted",
    description:
      "Large-scale solar power systems installed on the ground, designed for high capacity to supply energy to the national grid or industrial areas.",
    image:
      "https://images.unsplash.com/photo-1508515053963-70c7cc39dfb5?w=800&q=80",
    features: [
      "High Scalability",
      "Tilt Angle Optimization",
      "Corrosion-Resistant Structure",
    ],
    application: "Utilities, Industrial Areas, Open Land",
  },
  {
    id: "industrial-rooftop",
    name: "Industrial Rooftop Solar Power",
    slug: "industrial-rooftop",
    description:
      "Solar energy solutions for factory and warehouse roofs, helping companies reduce operational costs and meet sustainability targets (ESG).",
    image:
      "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=800&q=80",
    features: [
      "Electricity Bill Savings",
      "Real-time Monitoring",
      "Zero Export System",
    ],
    application: "Factories, Warehouses, Commercial Buildings",
  },
  {
    id: "residential-rooftop",
    name: "Residential Rooftop Solar Power",
    slug: "residential-rooftop",
    description:
      "Premium solar panel systems for residences, empowering households to be energy independent with aesthetic installations.",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800&q=80",
    features: [
      "User Friendly",
      "Smart App Integration",
      "25-Year Performance Warranty",
    ],
    application: "Residences, Villas, Shop Houses",
  },
  {
    id: "solar-street-lighting",
    name: "Solar Street Lighting",
    slug: "solar-street-lighting",
    description:
      "Automatic solar-powered public street lighting that requires no grid cabling, highly efficient for urban and rural areas.",
    image:
      "https://images.unsplash.com/photo-1516934024742-b461fba47600?w=800&q=80",
    features: ["Automatic On/Off", "LiFePO4 Battery", "Fast Installation"],
    application: "Highways, Parks, Parking Areas",
  },
  {
    id: "solar-telecom",
    name: "Solar Power for Telecommunication",
    slug: "solar-telecom",
    description:
      "Standalone power supply systems for telecommunication towers (BTS) in remote locations, ensuring 24/7 connectivity without relying on fuel.",
    image:
      "https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&q=80",
    features: [
      "Hybrid System Ready",
      "High Reliability",
      "Remote Site Optimized",
    ],
    application: "BTS Towers, Repeaters, Remote Sensors",
  },
  {
    id: "mini-hydro",
    name: "Mini Hydro Power Plant",
    slug: "mini-hydro",
    description:
      "Small-scale hydroelectric power plants that utilize river flow to generate stable clean energy continuously.",
    image:
      "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?w=800&q=80",
    features: ["Base Load Energy", "Eco-Friendly", "Low Operational Costs"],
    application: "Rivers, Remote Villages",
  },
  {
    id: "floating-solar",
    name: "Solar Floating Power Plant",
    slug: "floating-solar",
    description:
      "Floating solar PV innovation on water surfaces (reservoirs or lakes), reducing water evaporation and increasing panel cooling efficiency.",
    image:
      "https://images.unsplash.com/photo-1559302995-f09fa9795646?w=800&q=80",
    features: [
      "Temperature Efficiency",
      "Land Scarcity Solution",
      "Water Conservation",
    ],
    application: "Reservoirs, Lakes, Dams",
  },
];
