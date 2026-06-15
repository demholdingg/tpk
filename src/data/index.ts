import type { Service, Project, NavLink } from "@/types";

// ==========================================
// TYPE DEFINITIONS
// ==========================================

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  video?: string;
  tag: string;
}

export interface Sector {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  href: string;
  relatedCategories: string[];
}

export interface FleetItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[];
  brandId?: string;
}

export interface Brand {
  id: string;
  name: string;
  logo: string;
  category: string;
}

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

export interface ProjectFull extends Project {
  year: string;
  location: string;
  client: string;
  description: string;
  tags: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  features: string[];
  application: string;
}

// ==========================================
// CONSTANT DATA
// ==========================================

export const NAV_LINKS: (NavLink & { children?: NavLink[] })[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [{ label: "Company Profile", href: "/about" }],
  },
  { label: "Fleet & Equipment", href: "/services" },
  { label: "Products", href: "/products" },
  { label: "Project Experience", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export const HOME_HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tag: "Premium Fleet",
    title: "Material Handling",
    subtitle: "Plum Mewah PM-5000",
    description:
      "Reliable solutions for forklift and warehousing needs with modern units and certified operators.",
    image: "/images/plummewah/pm-5000.png",
  },
  {
    id: 2,
    tag: "Heavy Operations",
    title: "Heavy Lifting",
    subtitle: "Solutions",
    description:
      "High-capacity crane fleet support for infrastructure, mining, and port operations.",
    image: "/images/liugong/liugong-b160c.jpg",
    video: "/video/crane.mp4",
  },
];

export const SERVICES: Service[] = [
  {
    id: "heavy-equipment",
    tag: "Supply & Rent",
    name: "Heavy Duty Equipment Rental",
    description:
      "Premium rental services for material handling machinery and construction equipment with certified operators.",
    image: "/images/plummewah/pm-5000.png",
    href: "/services/heavy-equipment",
  },
  {
    id: "lifting-solutions",
    tag: "Specialized",
    name: "Heavy Lifting & Rigging Solutions",
    description:
      "Expert management of high-capacity crane operations and complex rigging for major infrastructure and mining sectors.",
    image: "/images/zoomlion/zoomlion-quy260.png",
    href: "/services/heavy-equipment",
  },
  {
    id: "maintenance-services",
    tag: "Reliability",
    name: "Fleet Maintenance & Support",
    description:
      "Comprehensive technical support and preventive maintenance to ensure maximum uptime and safety for your heavy machinery fleet.",
    image: "/images/liugong/LiuGong922E.webp",
    href: "/services/maintenance-services",
  },
];

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "heavy-equipment",
    tag: "Supply & Rent",
    name: "Heavy Duty Equipment & Rent",
    tagline: "Heavy Duty Equipment & Rent",
    description:
      "We supply, rent, and operate a comprehensive fleet of heavy equipment and material handling machinery. With a team of certified operators and a 24/7 maintenance unit, we ensure your operations run without interruption, no matter the scale or location.",
    heroImage: "/images/heli/CPQ(Y)D15-20.webp",
    features: [
      {
        icon: "🚜",
        title: "Authorized Brand Partners",
        description:
          "We are official partners for Plum Mewah (Premium), Heli, EP Equipment (Li-ion), Liu Gong, and Zoomlion.",
      },
      {
        icon: "🏗️",
        title: "Specialized Unit Types",
        description:
          "Various unit types available ranging from Electric Forklifts, Reach Trucks, Excavators, to Crawler Cranes.",
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
        image: "/images/ep-equipment/EPF4.webp",
      },
      {
        name: "Crane Services",
        description:
          "Mobile and crawler crane services for heavy lifts in industrial, port, and construction environments.",
        image: "/images/zoomlion/zoomlion-quy150.webp",
      },
      {
        name: "Logistics & Rigging",
        description:
          "Heavy haul transportation, rigging, and load out services for oversized industrial equipment.",
        image: "/images/zoomlion/zoomlion-ztc250.webp",
      },
    ],
    relatedSlugs: ["maintenance-services"],
  },
];

export const ALL_PROJECTS: ProjectFull[] = [
  {
    id: "surabaya-port-forklift",
    category: "Equipment",
    name: "Surabaya Port Fleet",
    image: "/images/heli/CPQ(Y)D15-20.webp",
    href: "/portfolio/surabaya-port-forklift",
    year: "2023",
    location: "Surabaya, East Java",
    client: "PT Pelindo III",
    description:
      "Supply and long-term operation of 25-unit forklift fleet (3–10 ton) with certified operators for port container handling operations.",
    tags: ["Equipment", "Forklift", "Operations"],
  },
  {
    id: "crane-mining-kaltim",
    category: "Equipment",
    name: "Kaltim Mining Crane Ops",
    image: "/images/liugong/liugong-856h.jpg",
    href: "/portfolio/crane-mining-kaltim",
    year: "2024",
    location: "Kutai Kartanegara, East Kalimantan",
    client: "PT Berau Coal",
    description:
      "Provision of 3 units 250-ton crawler cranes with certified riggers for heavy module installation at open-pit coal mining facility.",
    tags: ["Equipment", "Crane", "Mining"],
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
    title: "Market Leader",
    description:
      "Recognized as a leading material handling equipment provider for Indonesian ports and mines.",
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
      "Supported by SIO/K3 certified mechanics and operators with high flying hours across various industrial sectors.",
  },
  {
    icon: "⚙️",
    title: "Operational Efficiency",
    description:
      "Optimal workflows ensure projects are completed on time without compromising on quality or safety.",
  },
];

export const SECTORS: Sector[] = [
  {
    id: "mining",
    title: "Mining",
    description:
      "Heavy fleet solutions for open-pit mining operations demanding high durability in extreme conditions.",
    image: "/images/liugong/8128h.jpg",
    icon: "⛏️",
    href: "/sectors/mining",
    relatedCategories: ["Excavator", "Crane", "Bulldozer"],
  },
  {
    id: "construction",
    title: "Construction & Infrastructure",
    description:
      "Crane and heavy equipment support for high-rise buildings, toll roads, and national strategic projects.",
    image: "/images/zoomlion/qtz160.jpg",
    icon: "🏗️",
    href: "/sectors/construction",
    relatedCategories: ["Crane", "Excavator", "Bulldozer", "Roller"],
  },
  {
    id: "logistics",
    title: "Logistics & Ports",
    description:
      "Loading-unloading optimization and warehouse efficiency with world-class forklift and reach truck lines.",
    image: "/images/ep/ep-equipment-electric-forklift.jpg",
    icon: "📦",
    href: "/sectors/logistics",
    relatedCategories: ["Forklift", "Warehouse", "Pallet"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing & FMCG",
    description:
      "Factory operational support with eco-friendly electric forklifts for precise and hygienic material handling.",
    image: "/images/heli/heli-cpcd30.jpg",
    icon: "🏭",
    href: "/sectors/manufacturing",
    relatedCategories: ["Electric Forklift", "Warehouse", "Pallet"],
  },
  {
    id: "agriculture",
    title: "Agriculture & Forestry",
    description:
      "Robust heavy machinery for land clearing, access road maintenance, and plantation logistics efficiency.",
    image: "/images/plummewah/pm-1500-mini-dumper.png",
    icon: "🌴",
    href: "/sectors/agriculture",
    relatedCategories: ["Excavator", "Bulldozer"],
  },
];

export const FOOTER_SERVICES = [
  {
    id: "footer-forklift",
    label: "Forklift Rental",
    href: "/services/heavy-equipment",
  },
  {
    id: "footer-crane",
    label: "Crane Solutions",
    href: "/services/heavy-equipment",
  },
  {
    id: "footer-container",
    label: "Container Handling",
    href: "/services/heavy-equipment",
  },
  {
    id: "footer-maintenance",
    label: "Maintenance Services",
    href: "/services/maintenance-services",
  },
];

export const FOOTER_COMPANY = [
  { id: "footer-about", label: "About Us", href: "/about" },
  { id: "footer-fleet", label: "Fleet Experience", href: "/portfolio" },
  { id: "footer-hse", label: "HSE Policy", href: "/about/hse" },
  { id: "footer-contact", label: "Contact Us", href: "/contact" },
];

export const PARTNER_BRANDS: Brand[] = [
  {
    id: "plum-mewah",
    name: "Plum Mewah",
    logo: "/images/logos/plum-mewah.png",
    category: "Premium Material Handling",
  },
  {
    id: "heli",
    name: "Heli",
    logo: "/images/logos/heli.png",
    category: "Forklift Specialist",
  },
  {
    id: "ep-equipment",
    name: "EP Equipment",
    logo: "/images/logos/ep.png",
    category: "Li-Ion Warehouse Tech",
  },
  {
    id: "liu-gong",
    name: "Liu Gong",
    logo: "/images/logos/liugong.png",
    category: "Heavy Construction",
  },
  {
    id: "zoomlion",
    name: "Zoomlion",
    logo: "/images/logos/zoomlion.png",
    category: "Cranes & Concrete",
  },
];

export const HEAVY_EQUIPMENT_FLEET: FleetItem[] = [
  // --- PLUM MEWAH SERIES ---
  {
    id: "pm-5000",
    name: "Plum Mewah PM-5000",
    brandId: "plum-mewah",
    category: "High-End Forklift",
    image: "/images/plummewah/pm-5000.png",
    description:
      "Premium forklift unit focusing on high durability and fuel efficiency for 24/7 operations.",
    specs: [
      { label: "Brand", value: "Plum Mewah" },
      { label: "Capacity", value: "5.0 Tons" },
      { label: "Power Source", value: "Diesel" },
      { label: "Transmission", value: "Automatic" },
    ],
  },
  {
    id: "pm-1500-mini-dumper",
    name: "Plum Mewah PM-1500 Mini Dumper",
    brandId: "plum-mewah",
    category: "Mini Dumper",
    image: "/images/plummewah/pm-1500.png",
    description:
      "Compact and efficient tipper-type mini dumper, ideal for small-scale construction projects and confined areas.",
    specs: [
      { label: "Engine", value: "KOOP 1100" },
      { label: "Engine Power", value: "9.5 KW (13 hp)" },
      { label: "Machine Weight", value: "920 kg" },
      { label: "Max Loading Weight", value: "1500 kg" },
      { label: "Machine Size", value: "2610mm(L) * 1370mm(W) * 1340mm(H)" },
      { label: "Container Size", value: "1710mm(L) * 1370mm(W) * 450mm(H)" },
      { label: "Gear", value: "3F+R" },
      { label: "Track", value: "3509050" },
      { label: "Speed", value: "8 km/h" },
      { label: "Climbing Angle", value: "35°" },
      { label: "Wading Depth", value: "550 mm" },
      { label: "Swampland Depth", value: "300 mm" },
    ],
  },
  {
    id: "pm-5000-crawler-dumper",
    name: "Plum Mewah PM-5000 5 Ton Crawler Dumper",
    brandId: "plum-mewah",
    category: "Crawler Dumper",
    image: "/images/plummewah/pd-5000tag.png",
    description:
      "High-performance 5-ton crawler dumper, suitable for heavy terrain and large-scale material transport.",
    specs: [
      { label: "Engine", value: "Diesel engine, Yunnei 490" },
      { label: "Engine Power", value: "50 hp" },
      { label: "Machine Weight", value: "2000 kg" },
      { label: "Max Loading Weight", value: "5000 kg" },
      { label: "Machine Size", value: "3600mm(L) * 1600mm(W) * 2200mm(H)" },
      { label: "Container Size", value: "2350mm(L) * 1650mm(W) * 1220mm(H)" },
      { label: "Gear", value: "YZ28 6F+2R" },
      { label: "Track", value: "C40090BS62" },
      { label: "Speed", value: "12 km/h" },
      { label: "Climbing Angle", value: "30°" },
      { label: "Wading Depth", value: "40 cm" },
      { label: "Swampland Depth", value: "40 cm" },
    ],
  },
  {
    id: "pm-5000ta-crawler-dumper-high-lift",
    name: "Plum Mewah PM-5000TA 5 Ton Crawler Dumper High Lift 2.5M",
    brandId: "plum-mewah",
    category: "Crawler Dumper (High Lift)",
    image: "/images/plummewah/pm-5000ta.png",
    description:
      "5-ton crawler dumper with high-lift capability up to 2.5 meters, ideal for moving materials to elevated locations.",
    specs: [
      { label: "Engine", value: "Diesel engine, Yunnei 490" },
      { label: "Engine Power", value: "50 hp" },
      { label: "Machine Weight", value: "2300 kg" },
      { label: "Max Loading Weight", value: "5000 kg" },
      { label: "Lift Weight", value: "4000 kg" },
      { label: "Machine Size", value: "3600mm(L) * 1600mm(W) * 2200mm(H)" },
      { label: "Container Size", value: "2350mm(L) * 1650mm(W) * 1220mm(H)" },
      { label: "Gear", value: "YZ28 6F+2R" },
      { label: "Lift Up Height", value: "2500 mm" },
      { label: "Track", value: "C40090BS62" },
      { label: "Speed", value: "12 km/h" },
      { label: "Climbing Angle", value: "30°" },
      { label: "Wading Depth", value: "40 cm" },
      { label: "Swampland Depth", value: "40 cm" },
    ],
  },
  {
    id: "pm-3500ta-crawler-dumper-high-lift",
    name: "Plum Mewah PM-3500TA High Lift 2.5M Crawler Dumper",
    brandId: "plum-mewah",
    category: "Crawler Dumper (High Lift)",
    image: "/images/plummewah/pm-3500ta.png",
    description:
      "3.5-ton crawler dumper with 2.5-meter high-lift feature, offering flexibility for various project needs.",
    specs: [
      { label: "Engine", value: "Diesel engine, Changfa 1130" },
      { label: "Engine Power", value: "30 hp" },
      { label: "Machine Weight", value: "2000 kg" },
      { label: "Max Loading Weight", value: "3500 kg" },
      { label: "Lift Weight", value: "3000 kg" },
      { label: "Machine Size", value: "3330mm(L) * 1600mm(W) * 2200mm(H)" },
      { label: "Container Size", value: "2170mm(L) * 1650mm(W) * 1220mm(H)" },
      { label: "Gear", value: "YZ21 6F+2R" },
      { label: "Lift Up Height", value: "2500 mm" },
      { label: "Track", value: "C40090BS56" },
      { label: "Speed", value: "10 km/h" },
      { label: "Climbing Angle", value: "30°" },
      { label: "Wading Depth", value: "40 cm" },
      { label: "Swampland Depth", value: "40 cm" },
    ],
  },
  {
    id: "pm-3500-crawler-dumper",
    name: "Plum Mewah PM-3500 Crawler Dumper Tipper Type",
    brandId: "plum-mewah",
    category: "Crawler Dumper",
    image: "/images/plummewah/pm-3500.png",
    description:
      "Robust 3.5-ton tipper-type crawler dumper, designed for efficient material transport in various terrain conditions.",
    specs: [
      { label: "Engine", value: "Diesel engine, Changfa 1130" },
      { label: "Engine Power", value: "30 hp" },
      { label: "Machine Weight", value: "1850 kg" },
      { label: "Max Loading Weight", value: "3500 kg" },
      { label: "Machine Size", value: "3330mm(L) * 1600mm(W) * 2200mm(H)" },
      { label: "Container Size", value: "2170mm(L) * 1650mm(W) * 1220mm(H)" },
      { label: "Gear", value: "YZ21 6F+2R" },
      { label: "Track", value: "C40090BS56" },
      { label: "Speed", value: "10 km/h" },
      { label: "Climbing Angle", value: "30°" },
      { label: "Wading Depth", value: "40 cm" },
      { label: "Swampland Depth", value: "40 cm" },
    ],
  },
  {
    id: "pd-5000tag-crawler-dumper-scissor-lift-crane",
    name: "Plum Mewah PD-5000TAG Crawler Dumper Scissor Lift (Crane Grab)",
    brandId: "plum-mewah",
    category: "Crawler Dumper (Scissor Lift)",
    image: "/images/plummewah/pd-5000tag.png",
    description:
      "Crawler dumper with scissor lift and crane grab, offering a multifunctional solution for material transport and handling.",
    specs: [
      {
        label: "Additional Features",
        value: "New support roller-Forged type, Parking brake",
      },
      { label: "Engine", value: "Diesel engine" },
      { label: "Engine Model", value: "CF490" },
      { label: "Power", value: "37 kw" },
      { label: "Machine Weight", value: "3050 kg" },
      { label: "Max Loading Weight", value: "3500 kg" },
      { label: "Machine Size", value: "4050mm(L) * 1650mm(W) * 2525mm(H)" },
      { label: "Container Size", value: "2040mm(L) * 1650mm(W) * 1255mm(H)" },
      { label: "Scissors Lift Height", value: "2350 mm" },
      { label: "Gear System", value: "GL 28" },
      { label: "Rubber Track Size", value: "C40090BS62" },
      { label: "Speed Forward", value: "4-12 km/h" },
      { label: "Speed Return", value: "1-3 km/h" },
      { label: "Climbing Angle", value: "35°" },
      { label: "Wading Depth", value: "400 mm" },
      { label: "Swampland Depth", value: "350 mm" },
      { label: "Ground Clearance", value: "320 mm" },
      { label: "Hydraulic Oil Pressure", value: "18 mPa" },
      { label: "Battery", value: "12v/80A*2" },
      { label: "Fuel Tank Capacity", value: "50 L" },
      { label: "Brake System", value: "Parking brake" },
    ],
  },
  {
    id: "pd-5000ta-crawler-dumper-scissor-lift",
    name: "Plum Mewah PD-5000TA 5 Ton Crawler Dumper Scissor Lift",
    brandId: "plum-mewah",
    category: "Crawler Dumper (Scissor Lift)",
    image: "/images/plummewah/pd-5000ta.png",
    description:
      "5-ton crawler dumper with scissor lift, equipped with the latest features for better operational efficiency and safety.",
    specs: [
      {
        label: "Latest Features",
        value:
          "New support roller-Forged type, Heightened cargo box, Parking Brake",
      },
      { label: "Engine", value: "Diesel engine, Changfa 490" },
      { label: "Engine Power", value: "50 hp" },
      { label: "Machine Weight", value: "2400 kg" },
      { label: "Max Loading Weight", value: "5000 kg" },
      { label: "Lift Weight", value: "4000 kg" },
      { label: "Machine Size", value: "3580mm(L) * 1650mm(W) * 2260mm(H)" },
      { label: "Container Size", value: "2350mm(L) * 1650mm(W) * 1260mm(H)" },
      { label: "Gear", value: "6F+2R" },
      { label: "Lift Up Height", value: "2400 mm" },
      { label: "Track", value: "C40090BS62" },
      { label: "Speed", value: "4-12 km/h" },
      { label: "Climbing Angle", value: "35°" },
      { label: "Wading Depth", value: "40 cm" },
      { label: "Swampland Depth", value: "40 cm" },
    ],
  },
  {
    id: "pd-3500ta-crawler-dumper-scissor-lift",
    name: "Plum Mewah PD-3500TA 3.5 Ton Crawler Dumper Scissor Lift",
    brandId: "plum-mewah",
    category: "Crawler Dumper (Scissor Lift)",
    image: "/images/plummewah/pd-3500ta.png",
    description:
      "3.5-ton crawler dumper with scissor lift, updated with new features to improve performance and reliability.",
    specs: [
      {
        label: "Latest Features",
        value:
          "New support roller-Forged type, Heightened cargo box, Parking Brake",
      },
      { label: "Engine", value: "Diesel engine, Changfa 1130" },
      { label: "Engine Power", value: "35 hp" },
      { label: "Machine Weight", value: "2100 kg" },
      { label: "Max Loading Weight", value: "3500 kg" },
      { label: "Lift Weight", value: "3000 kg" },
      { label: "Machine Size", value: "3200mm(L) * 1650mm(W) * 2260mm(H)" },
      { label: "Container Size", value: "2040mm(L) * 1650mm(W) * 1250mm(H)" },
      { label: "Gear", value: "6F+2R" },
      { label: "Lift Up Height", value: "2400 mm" },
      { label: "Track", value: "C40090BS56" },
      { label: "Speed", value: "3-8 km/h" },
      { label: "Climbing Angle", value: "35°" },
      { label: "Wading Depth", value: "40 cm" },
      { label: "Swampland Depth", value: "40 cm" },
    ],
  },
  {
    id: "pm-3000e",
    name: "Plum Mewah PM-3000E",
    brandId: "plum-mewah",
    category: "Electric Forklift",
    image: "/images/plummewah/pm-3500.png",
    description:
      "Premium electric forklift with intelligent control system for intensive indoor use.",
    specs: [
      { label: "Brand", value: "Plum Mewah" },
      { label: "Capacity", value: "3.0 Tons" },
      { label: "Power Source", value: "AC Electric Motor" },
      { label: "Feature", value: "Silent Operation" },
    ],
  },
  // --- HELI SERIES ---
  {
    id: "heli-cpcd30",
    name: "Heli CPCD30",
    brandId: "heli",
    category: "Forklift",
    image: "/images/heli/cpd30.jpg",
    description:
      "The industry standard reliable forklift, easy to maintain with widely available spare parts.",
    specs: [
      { label: "Brand", value: "Heli" },
      { label: "Capacity", value: "3.0 Tons" },
      { label: "Engine", value: "Isuzu C240" },
    ],
  },
  {
    id: "heli-cpcd35",
    name: "Heli CPCD35",
    brandId: "heli",
    category: "Diesel Forklift",
    image: "/images/heli/Cpcd35.webp",
    description:
      "3.5-ton capacity diesel forklift with powerful engine for heavy outdoor use.",
    specs: [
      { label: "Brand", value: "Heli" },
      { label: "Capacity", value: "3.5 Tons" },
      { label: "Engine", value: "Quanchai / Isuzu" },
      { label: "Transmission", value: "Torque Converter" },
    ],
  },
  {
    id: "heli-cpd25-li",
    name: "Heli CPD25 Lithium-Ion",
    brandId: "heli",
    category: "Electric Forklift",
    image: "/images/heli/CPD25.jpg",
    description:
      "Electric forklift with Lithium-Ion battery technology for high efficiency and maintenance-free operation.",
    specs: [
      { label: "Brand", value: "Heli" },
      { label: "Capacity", value: "2.5 Tons" },
      { label: "Battery", value: "Lithium-Ion 80V" },
      { label: "Motor", value: "AC Drive" },
    ],
  },
  {
    id: "heli-cqd16",
    name: "Heli CQD16 Reach Truck",
    brandId: "heli",
    category: "Warehouse Equipment",
    image: "/images/heli/CPQ(Y)D15-20.webp",
    description:
      "Optimal solution for high-rack warehousing with a very small turning radius.",
    specs: [
      { label: "Brand", value: "Heli" },
      { label: "Lift Height", value: "8.5 Meters" },
      { label: "Capacity", value: "1.6 Tons" },
    ],
  },
  // --- EP EQUIPMENT SERIES ---
  {
    id: "ep-efl252",
    name: "EP Equipment EFL252",
    brandId: "ep-equipment",
    category: "Electric Forklift",
    image: "/images/ep-equipment/ep-efl252.webp",
    description:
      "Advanced Li-ion innovation combining the power of a diesel forklift with electric efficiency.",
    specs: [
      { label: "Brand", value: "EP Equipment" },
      { label: "Battery", value: "80V/280Ah Li-ion" },
      { label: "Charging", value: "Fast Charging 2h" },
    ],
  },
  {
    id: "heli-h3c-cpqd1520",
    name: "Heli H3C Series CPQD15-20",
    brandId: "heli",
    category: "Tire Forklift",
    image: "/images/heli/heli-h3c-cpqd1520.webp",
    description:
      "Agile H3C series forklift with Kubota engine, designed for optimal performance in logistics areas with single tires.",
    specs: [
      { label: "Rated Capacity", value: "3,000 - 4,000 lbs" },
      { label: "Engine", value: "Kubota WG2503 (Gas/LPG)" },
      { label: "Travel Speed", value: "10.8 mph (Loaded)" },
      { label: "Overall Width", value: "42 inches" },
    ],
  },
  {
    id: "heli-h3c-cpqd4050",
    name: "Heli H3C Series CPQD40-50",
    brandId: "heli",
    category: "Tire Forklift",
    image: "/images/heli/CPYD40-50C.webp",
    description:
      "Heavy duty forklift with capacity up to 5 tons, equipped with intelligent transmission and vibration damping suspension system.",
    specs: [
      { label: "Load Capacity", value: "4,000 - 5,000 kg" },
      { label: "Fuel Type", value: "Petrol / LPG / Dual-Fuel" },
      { label: "Transmission", value: "Intelligent Gear System" },
      { label: "Max Speed", value: "16 - 19 km/h" },
    ],
  },
  {
    id: "heli-cpd3032c",
    name: "Heli CPD30-32C",
    brandId: "heli",
    category: "Electric Forklift",
    image: "/images/heli/CPD30-32C.jpg",
    description:
      "Standard electric forklift with heavy lifting capacity, equipped with dual oil disc brakes and hydraulic overload protection.",
    specs: [
      { label: "Capacity", value: "3.0 - 3.2 Tons" },
      { label: "Power Source", value: "Electric (Lead-Acid)" },
      { label: "Lift Height", value: "Up to 7,500 mm" },
      { label: "Brake", value: "Oil Disk Brakes" },
    ],
  },
  {
    id: "heli-qycd6080",
    name: "Heli G Series QYCD60-80",
    brandId: "heli",
    category: "Tow Tractor",
    image: "/images/heli/QYCD60-80.jpg",
    description:
      "High-performance diesel tow tractor for heavy environments like ports and mining areas.",
    specs: [
      { label: "Drawbar Pull", value: "60 kN - 80 kN" },
      { label: "Power Output", value: "118 kW" },
      { label: "Max Speed", value: "30 km/h" },
      { label: "Brake", value: "4-wheel Hydraulic" },
    ],
  },
  {
    id: "heli-cbd20j-b",
    name: "Heli CBD20J-B",
    brandId: "heli",
    category: "Electric Pallet Truck",
    image: "/images/heli/CBD20J-B.jpg",
    description:
      "Efficient electric walkie pallet truck for warehouse, logistics, and container loading operations.",
    specs: [
      { label: "Capacity", value: "2,000 kg" },
      { label: "Drive Type", value: "Walkie" },
      { label: "Turning Radius", value: "1415 mm" },
      { label: "Battery", value: "24V Lead Acid/Li-Ion" },
    ],
  },
  {
    id: "heli-cbs15j",
    name: "Heli CBS15J",
    brandId: "heli",
    category: "Semi-Electric Stacker",
    image: "/images/heli/CBS15J.webp",
    description:
      "Semi-electric stacker with manual drive and electric lift, ideal for light material handling in warehouses.",
    specs: [
      { label: "Capacity", value: "1,500 kg" },
      { label: "Lift Height", value: "1,600 - 3,500 mm" },
      { label: "Lift Motor", value: "1.5 kW DC" },
      { label: "Battery", value: "12V / 120Ah" },
    ],
  },
  // --- EP EQUIPMENT SERIES ---
  {
    id: "ep-efl302",
    name: "EP Equipment EFL302",
    brandId: "ep-equipment",
    category: "Electric Forklift",
    image: "/images/ep-equipment/EFL302.webp",
    description:
      "Next-generation Li-Ion electric forklift designed to replace conventional diesel units.",
    specs: [
      { label: "Brand", value: "EP Equipment" },
      { label: "Capacity", value: "3.0 Tons" },
      { label: "Battery", value: "80V/410Ah Li-Ion" },
      { label: "Gradeability", value: "15%" },
    ],
  },
  {
    id: "ep-f4",
    name: "EP F4 Li-ion Pallet Truck",
    brandId: "ep-equipment",
    category: "Pallet Jack",
    image: "/images/ep-equipment/EPF4.webp",
    description:
      "Highly agile electric pallet truck for loading and unloading in tight areas.",
    specs: [
      { label: "Brand", value: "EP Equipment" },
      { label: "Capacity", value: "1.5 Tons" },
      { label: "Battery", value: "24V/20Ah Li-ion" },
    ],
  },
  {
    id: "ep-ept20-15et",
    name: "EP EPT20-15ET",
    brandId: "ep-equipment",
    category: "Electric Pallet Truck",
    image: "/images/ep-equipment/ept2015et.webp",
    description:
      "Very popular electric pallet truck for warehousing applications with a highly compact design.",
    specs: [
      { label: "Brand", value: "EP Equipment" },
      { label: "Capacity", value: "1.5 Tons" },
      { label: "Drive Unit", value: "DC 0.65kW" },
      { label: "Turning Radius", value: "1350 mm" },
    ],
  },
  // --- LIU GONG SERIES ---
  {
    id: "liugong-922e",
    name: "Liu Gong 922E",
    brandId: "liu-gong",
    category: "Excavator",
    image: "/images/liugong/LiuGong922E.webp",
    description:
      "Next-generation excavator with enhanced hydraulic efficiency for heavy earthmoving tasks.",
    specs: [
      { label: "Brand", value: "Liu Gong" },
      { label: "Operating Weight", value: "22,000 kg" },
      { label: "Bucket", value: "1.1 m³" },
    ],
  },
  {
    id: "ep-cpd20l2",
    name: "EP Equipment CPD20L2",
    brandId: "ep-equipment",
    category: "Electric Forklift",
    image: "/images/ep-equipment/cpd2012_1.png",
    description:
      "Electric forklift with integrated Li-Ion chassis for more legroom and maximum energy efficiency.",
    specs: [
      { label: "Capacity", value: "2.0 Tons" },
      { label: "Battery", value: "48V/360Ah Li-Ion" },
      { label: "Turning Radius", value: "2120 mm" },
      { label: "Gradeability", value: "15%" },
    ],
  },
  {
    id: "ep-es12-12wa",
    name: "EP Equipment ES12-12WA",
    brandId: "ep-equipment",
    category: "Electric Stacker",
    image: "/images/ep-equipment/ep-es12-12wa.png",
    description:
      "Robust electric walkie stacker for pallet stacking in narrow warehouse aisles.",
    specs: [
      { label: "Capacity", value: "1.2 Tons" },
      { label: "Lift Height", value: "3,000 mm" },
      { label: "Battery", value: "24V/125Ah" },
      { label: "Service Weight", value: "520 kg" },
    ],
  },
  // --- LIU GONG SERIES ---
  {
    id: "liugong-856h",
    name: "Liu Gong 856H",
    brandId: "liu-gong",
    category: "Wheel Loader",
    image: "/images/liugong/liugong-856h.jpg",
    description:
      "Reliable wheel loader with optimal fuel efficiency for mining and quarry operations.",
    specs: [
      { label: "Brand", value: "Liu Gong" },
      { label: "Bucket Capacity", value: "3.0 - 4.5 m³" },
      { label: "Payload", value: "5,000 kg" },
      { label: "Engine", value: "Cummins" },
    ],
  },
  {
    id: "liugong-8128h",
    name: "Liu Gong 8128H",
    brandId: "liu-gong",
    category: "Wheel Loader",
    image: "/images/liugong/8128h.jpg",
    description:
      "Giant wheel loader for large-scale mining operations with extreme durability and pushing power.",
    specs: [
      { label: "Operating Weight", value: "51,000 kg" },
      { label: "Bucket Capacity", value: "7.0 m³" },
      { label: "Payload", value: "12,000 kg" },
      { label: "Engine", value: "Cummins QSX15" },
    ],
  },
  {
    id: "liugong-clg2030h",
    name: "Liu Gong CLG2030H",
    brandId: "liu-gong",
    category: "Forklift",
    image: "/images/liugong/liugong-clg2030h.png",
    description:
      "Economical yet robust H-series diesel forklift for logistics and general manufacturing needs.",
    specs: [
      { label: "Capacity", value: "3.0 Tons" },
      { label: "Engine", value: "Xinchai / Yanmar" },
      { label: "Lift Height", value: "3,000 mm" },
      { label: "Transmission", value: "Powershift" },
    ],
  },
  {
    id: "liugong-b160c",
    name: "Liu Gong B160C",
    brandId: "liu-gong",
    category: "Bulldozer",
    image: "/images/liugong/liugong-b160c.jpg",
    description:
      "Robust medium-class bulldozer for land clearing and infrastructure construction.",
    specs: [
      { label: "Brand", value: "Liu Gong" },
      { label: "Operating Weight", value: "17,000 kg" },
      { label: "Engine Power", value: "120 kW (160 hp)" },
      { label: "Blade Type", value: "Straight Tilt" },
    ],
  },
  // --- ZOOMLION SERIES ---
  {
    id: "zoomlion-quy150",
    name: "Zoomlion QUY150",
    brandId: "zoomlion",
    category: "Crawler Crane",
    image: "/images/zoomlion/zoomlion-quy150.webp",
    description:
      "Large-capacity crane for strategic infrastructure projects with high safety standards.",
    specs: [
      { label: "Brand", value: "Zoomlion" },
      { label: "Max Capacity", value: "150 Tons" },
      { label: "Main Boom", value: "80 Meters" },
    ],
  },
  {
    id: "zoomlion-ztc250",
    name: "Zoomlion ZTC250",
    brandId: "zoomlion",
    category: "Truck Crane",
    image: "/images/zoomlion/zoomlion-ztc250.webp",
    description:
      "Agile truck crane for urban construction work and rapid lifting.",
    specs: [
      { label: "Brand", value: "Zoomlion" },
      { label: "Max Capacity", value: "25 Tons" },
      { label: "Boom Length", value: "34 Meters" },
    ],
  },
  {
    id: "zoomlion-zat1500",
    name: "Zoomlion ZAT1500",
    brandId: "zoomlion",
    category: "All Terrain Crane",
    image: "/images/zoomlion/zoomlion-zat1500.webp",
    description:
      "High-performance all-terrain crane with 7-section boom for extreme vertical reach and high mobility.",
    specs: [
      { label: "Brand", value: "Zoomlion" },
      { label: "Max Capacity", value: "150 Tons" },
      { label: "Boom Length", value: "72 Meters" },
      { label: "Drive", value: "10 x 8 x 10" },
    ],
  },
  {
    id: "zoomlion-quy260",
    name: "Zoomlion QUY260",
    brandId: "zoomlion",
    category: "Crawler Crane",
    image: "/images/zoomlion/zoomlion-quy260.png",
    description:
      "Heavy-duty crawler crane specifically designed for wind energy installation and heavy steel structures on large-scale projects.",
    specs: [
      { label: "Brand", value: "Zoomlion" },
      { label: "Max Capacity", value: "260 Tons" },
      { label: "Main Boom", value: "95 Meters" },
      { label: "Engine", value: "Cummins QSL9" },
    ],
  },
];

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "forklift-solutions",
    name: "Industrial Forklift Solutions",
    slug: "forklift-solutions",
    description:
      "Complete range of world-class diesel and electric forklifts for high logistics efficiency in various industrial sectors.",
    image: "/images/heli/Electric_Reach_Truck_1.6-2_Tonne_CQD16-20.jpg",
    features: [
      "Certified Operators (SIO)",
      "Preventive Maintenance 24/7",
      "Genuine Spare Parts Supply",
    ],
    application: "Warehouses, Factories, Logistics Hubs",
  },
  {
    id: "heavy-lifting-crane",
    name: "Heavy Lifting & Crane Services",
    slug: "heavy-lifting-crane",
    description:
      "Heavy lifting solutions using crawler and truck cranes with capacities up to 500 tons for construction and infrastructure projects.",
    image: "/images/zoomlion/zoomlion-ztc250.webp",
    features: [
      "Advanced Rigging Plans",
      "High Safety Standards (K3)",
      "Versatile Fleet Selection",
    ],
    application: "Infrastructure, Mining, Ports, Oil & Gas",
  },
  {
    id: "earthmoving-machinery",
    name: "Earthmoving Machinery",
    slug: "earthmoving-machinery",
    description:
      "Robust excavators and bulldozers for large-scale land preparation, excavation, and earthmoving work.",
    image: "/images/liugong/LiuGong922E.webp",
    features: [
      "Fuel-Efficient Engines",
      "Heavy Duty Buckets",
      "Real-time GPS Tracking",
    ],
    application: "Land Clearing, Mining Operations, Road Construction",
  },
  {
    id: "warehouse-automation",
    name: "Li-Ion Warehouse Automation",
    slug: "warehouse-automation",
    description:
      "Latest electric warehouse units with Lithium-Ion technology from EP Equipment for clean and efficient warehouse operations.",
    image: "/images/ep-equipment/EPF4.webp",
    features: [
      "Fast Opportunity Charging",
      "Maintenance-Free Battery",
      "Compact Narrow-Aisle Design",
    ],
    application: "FMCG, Cold Storage, E-commerce Hubs",
  },
  {
    id: "port-container-handling",
    name: "Port & Container Handling",
    slug: "port-container-handling",
    description:
      "Specialized equipment for container terminal management, including reach stackers and heavy forklifts for smooth port logistics flow.",
    image: "/images/plummewah/pd-5000tag.png",
    features: [
      "High Load Stability",
      "Intelligent Control Systems",
      "24/7 On-site Technical Support",
    ],
    application: "Port Terminals, Inland Depots, ICD",
  },
  {
    id: "road-construction-fleet",
    name: "Road & Infrastructure Fleet",
    slug: "road-construction-fleet",
    description:
      "Quality line of compactors, rollers, and graders to ensure precise road compaction and leveling according to engineering standards.",
    image: "/images/heavyduty/bomac.jpg",
    features: [
      "High Compaction Force",
      "Operator Comfort Focused",
      "Durable Drum Systems",
    ],
    application: "Highways, Runways, Industrial Estates",
  },
  {
    id: "mining-quarry-solutions",
    name: "Mining & Quarry Solutions",
    slug: "mining-quarry-solutions",
    description:
      "Specialized heavy equipment for mining from Liu Gong and Zoomlion designed for extreme durability in open-pit terrain.",
    image: "/images/liugong/8128h.jpg",
    features: [
      "Reinforced Chassis",
      "Extreme Climate Durability",
      "Optimized Payload Capacity",
    ],
    application: "Open-pit Mines, Coal Mining, Quarries",
  },
];
