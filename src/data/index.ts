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
      "Solusi terpercaya untuk kebutuhan forklift dan pergudangan dengan unit modern dan operator bersertifikat.",
    image: "/images/plummewah/pm-5000.png",
  },
  {
    id: 2,
    tag: "Heavy Operations",
    title: "Heavy Lifting",
    subtitle: "Solutions",
    description:
      "Dukungan armada crane kapasitas besar untuk proyek infrastruktur, pertambangan, dan operasional pelabuhan.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80",
    video: "/video/crane.mp4",
  },
  {
    id: 3,
    tag: "Technical Support",
    title: "Industrial",
    subtitle: "Maintenance",
    description:
      "Dukungan teknis 24/7 dan ketersediaan suku cadang asli untuk memastikan kesiapan armada alat berat Anda setiap saat.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80",
  },
];

export const SERVICES: Service[] = [
  {
    id: "heavy-equipment",
    tag: "Supply & Rent",
    name: "Heavy Duty Equipment Rental",
    description:
      "Premium rental services for material handling machinery and construction equipment with certified operators.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=75",
    href: "/services/heavy-equipment",
  },
  {
    id: "maintenance-services",
    tag: "Lifecycle",
    name: "Equipment Maintenance & Repair",
    description:
      "Specialized maintenance for heavy machinery to ensure maximum uptime and operational safety.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=75",
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
    heroImage:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80",
    features: [
      {
        icon: "🚜",
        title: "Authorized Brand Partners",
        description:
          "Kami adalah mitra resmi untuk Plum Mewah (Premium), Heli, EP Equipment (Li-ion), Liu Gong, dan Zoomlion.",
      },
      {
        icon: "🏗️",
        title: "Specialized Unit Types",
        description:
          "Tersedia berbagai jenis unit mulai dari Electric Forklift, Reach Truck, Excavator, hingga Crawler Crane.",
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
    relatedSlugs: ["maintenance-services"],
  },
];

export const ALL_PROJECTS: ProjectFull[] = [
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
      "Didukung oleh mekanik dan operator bersertifikat SIO/K3 dengan jam terbang tinggi di berbagai sektor industri.",
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
    title: "Pertambangan",
    description:
      "Solusi armada berat untuk operasional tambang terbuka (open-pit) yang menuntut durabilitas tinggi dalam kondisi ekstrem.",
    image: "/images/liugong/8128h.jpg",
    icon: "⛏️",
    href: "/sectors/mining",
    relatedCategories: ["Excavator", "Crane", "Bulldozer"],
  },
  {
    id: "construction",
    title: "Konstruksi & Infrastruktur",
    description:
      "Dukungan crane dan alat berat untuk pembangunan gedung bertingkat, jalan tol, dan proyek strategis nasional.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&q=80",
    icon: "🏗️",
    href: "/sectors/construction",
    relatedCategories: ["Crane", "Excavator", "Bulldozer", "Roller"],
  },
  {
    id: "logistics",
    title: "Logistik & Pelabuhan",
    description:
      "Optimasi bongkar muat dan efisiensi pergudangan dengan lini forklift dan reach truck kelas dunia.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    icon: "📦",
    href: "/sectors/logistics",
    relatedCategories: ["Forklift", "Warehouse", "Pallet"],
  },
  {
    id: "manufacturing",
    title: "Manufaktur & FMCG",
    description:
      "Dukungan operasional pabrik dengan forklift elektrik ramah lingkungan untuk penanganan material yang presisi dan higienis.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    icon: "🏭",
    href: "/sectors/manufacturing",
    relatedCategories: ["Electric Forklift", "Warehouse", "Pallet"],
  },
  {
    id: "agriculture",
    title: "Perkebunan & Kehutanan",
    description:
      "Alat berat tangguh untuk pembukaan lahan, perawatan jalan akses, dan efisiensi logistik hasil perkebunan.",
    image:
      "https://images.unsplash.com/photo-1594488310397-29307c87c08a?w=800&q=80",
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
    logo: "/logos/plum-mewah.png",
    category: "Premium Material Handling",
  },
  {
    id: "heli",
    name: "Heli",
    logo: "/logos/heli.png",
    category: "Forklift Specialist",
  },
  {
    id: "ep-equipment",
    name: "EP Equipment",
    logo: "/logos/ep.png",
    category: "Li-Ion Warehouse Tech",
  },
  {
    id: "liu-gong",
    name: "Liu Gong",
    logo: "/logos/liugong.png",
    category: "Heavy Construction",
  },
  {
    id: "zoomlion",
    name: "Zoomlion",
    logo: "/logos/zoomlion.png",
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
      "Unit forklift premium dengan fokus pada durabilitas tinggi dan efisiensi bahan bakar untuk operasional 24/7.",
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
      "Mini dumper tipe tipper yang ringkas dan efisien, ideal untuk proyek konstruksi skala kecil dan area terbatas.",
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
      "Crawler dumper 5 ton dengan performa tinggi, cocok untuk medan berat dan pengangkutan material dalam jumlah besar.",
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
      "Crawler dumper 5 ton dengan kemampuan angkat tinggi hingga 2.5 meter, ideal untuk pemindahan material ke tempat yang lebih tinggi.",
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
      "Crawler dumper 3.5 ton dengan fitur angkat tinggi 2.5 meter, menawarkan fleksibilitas untuk berbagai kebutuhan proyek.",
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
      "Crawler dumper 3.5 ton tipe tipper yang tangguh, dirancang untuk efisiensi pengangkutan material di berbagai kondisi medan.",
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
      "Crawler dumper dengan scissor lift dan crane grab, menawarkan solusi multifungsi untuk pengangkutan dan penanganan material.",
    specs: [
      {
        label: "Fitur Tambahan",
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
      "Crawler dumper 5 ton dengan scissor lift, dilengkapi fitur terbaru untuk efisiensi dan keamanan operasional yang lebih baik.",
    specs: [
      {
        label: "Fitur Terbaru",
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
      "Crawler dumper 3.5 ton dengan scissor lift, diperbarui dengan fitur-fitur baru untuk meningkatkan kinerja dan keandalan.",
    specs: [
      {
        label: "Fitur Terbaru",
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
      "Forklift elektrik premium dengan sistem kontrol cerdas untuk penggunaan indoor yang intensif.",
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
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
    description:
      "Forklift sejuta umat yang handal, mudah dalam perawatan, dan memiliki suku cadang yang melimpah.",
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
    image:
      "https://images.unsplash.com/photo-1512418490979-92798ccc1380?w=1600&q=80",
    description:
      "Forklift diesel kapasitas 3.5 ton dengan mesin bertenaga untuk penggunaan outdoor yang berat.",
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
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80",
    description:
      "Forklift elektrik dengan teknologi baterai Lithium-Ion untuk efisiensi tinggi dan bebas perawatan.",
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
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80",
    description:
      "Solusi optimal untuk pergudangan high-rack dengan radius putar yang sangat kecil.",
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
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80",
    description:
      "Inovasi Li-ion tercanggih yang menggabungkan kekuatan forklift diesel dengan efisiensi tenaga listrik.",
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
    image:
      "https://images.unsplash.com/photo-1512418490979-92798ccc1380?w=1600&q=80",
    description:
      "Forklift seri H3C yang lincah dengan mesin Kubota, dirancang untuk performa optimal di area logistik dengan ban tunggal.",
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
    image:
      "https://images.unsplash.com/photo-1580674271103-ca24214e66d2?w=1600&q=80",
    description:
      "Heavy duty forklift dengan kapasitas hingga 5 ton, dilengkapi transmisi cerdas dan sistem suspensi peredam getaran.",
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
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80",
    description:
      "Forklift elektrik standar dengan kapasitas angkat berat, dilengkapi rem cakram oli ganda dan perlindungan overload hidrolik.",
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
    image:
      "https://images.unsplash.com/photo-1516934024742-b461fba47600?w=1600&q=80",
    description:
      "Tow tractor diesel performa tinggi untuk lingkungan berat seperti pelabuhan dan area pertambangan.",
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
    image:
      "https://images.unsplash.com/photo-1580674271103-ca24214e66d2?w=1600&q=80",
    description:
      "Pallet truck elektrik walkie yang efisien untuk operasional gudang, logistik, dan pemuatan kontainer.",
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
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80",
    description:
      "Stacker semi-elektrik dengan penggerak manual dan angkat elektrik, ideal untuk penanganan material ringan di gudang.",
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
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
    description:
      "Forklift elektrik Li-Ion generasi terbaru yang dirancang untuk menggantikan unit diesel konvensional.",
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
    image:
      "https://images.unsplash.com/photo-1580674271103-ca24214e66d2?w=1600&q=80",
    description:
      "Pallet truck elektrik yang sangat lincah untuk bongkar muat di area sempit.",
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
    image:
      "https://images.unsplash.com/photo-1580674271103-ca24214e66d2?w=1600&q=80",
    description:
      "Pallet truck elektrik yang sangat populer untuk aplikasi pergudangan dengan desain yang sangat kompak.",
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
    image:
      "https://images.unsplash.com/photo-1581094651181-35942459ef62?w=1600&q=80",
    description:
      "Excavator generasi terbaru dengan efisiensi hidrolik yang ditingkatkan untuk pekerjaan tanah berat.",
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
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&q=80",
    description:
      "Forklift elektrik dengan sasis Li-Ion terintegrasi untuk ruang kaki yang lebih luas dan efisiensi energi maksimal.",
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
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80",
    description:
      "Stacker elektrik walkie yang tangguh untuk penumpukan palet di lorong gudang yang sempit.",
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
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1600&q=80",
    description:
      "Wheel loader handal dengan efisiensi bahan bakar optimal untuk operasional tambang dan kuari.",
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
      "Wheel loader raksasa untuk operasional pertambangan skala besar dengan durabilitas dan tenaga pendorong ekstrem.",
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
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
    description:
      "Forklift diesel seri H yang ekonomis namun tangguh untuk kebutuhan logistik dan manufaktur umum.",
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
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&q=80",
    description:
      "Bulldozer kelas menengah yang tangguh untuk penataan lahan dan konstruksi infrastruktur.",
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
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80",
    description:
      "Crane berkapasitas besar untuk proyek infrastruktur strategis dengan tingkat keamanan tinggi.",
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
    image:
      "https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=1600&q=80",
    description:
      "Truck crane lincah untuk pekerjaan konstruksi perkotaan dan pengangkatan cepat.",
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
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80",
    description:
      "All-terrain crane berperforma tinggi dengan 7-section boom untuk jangkauan vertikal ekstrem dan mobilitas tinggi.",
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
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=1600&q=80",
    description:
      "Heavy duty crawler crane yang dirancang khusus untuk instalasi energi angin dan struktur baja berat pada proyek skala besar.",
    specs: [
      { label: "Brand", value: "Zoomlion" },
      { label: "Max Capacity", value: "260 Tons" },
      { label: "Main Boom", value: "95 Meters" },
      { label: "Engine", value: "Cummins QSL9" },
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

export const PRODUCTS_DATA: ProductItem[] = [
  {
    id: "forklift-solutions",
    name: "Industrial Forklift Solutions",
    slug: "forklift-solutions",
    description:
      "Rangkaian lengkap forklift diesel dan elektrik kelas dunia untuk efisiensi logistik tinggi di berbagai sektor industri.",
    image:
      "https://images.unsplash.com/photo-1512418490979-92798ccc1380?w=1600&q=80",
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
      "Solusi pengangkatan beban berat menggunakan crawler dan truck crane dengan kapasitas hingga 500 ton untuk proyek konstruksi dan infrastruktur.",
    image:
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1600&q=80",
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
      "Excavator dan bulldozer tangguh untuk pekerjaan persiapan lahan, penggalian, dan pemindahan tanah dalam skala besar.",
    image:
      "https://images.unsplash.com/photo-1581094651181-35942459ef62?w=1600&q=80",
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
      "Unit warehouse elektrik dengan teknologi Lithium-Ion terbaru dari EP Equipment untuk operasional gudang yang bersih dan efisien.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80",
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
      "Peralatan khusus untuk manajemen terminal peti kemas, termasuk reach stacker dan heavy forklift untuk arus logistik pelabuhan yang lancar.",
    image:
      "https://images.unsplash.com/photo-1512418490979-92798ccc1380?w=1600&q=80",
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
      "Lini compactor, rollers, dan grader berkualitas untuk memastikan pemadatan dan perataan jalan yang presisi sesuai standar teknik.",
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
      "Alat berat khusus pertambangan dari Liu Gong dan Zoomlion yang dirancang untuk durabilitas ekstrem di medan terbuka.",
    image: "/images/liugong/8128h.jpg",
    features: [
      "Reinforced Chassis",
      "Extreme Climate Durability",
      "Optimized Payload Capacity",
    ],
    application: "Open-pit Mines, Coal Mining, Quarries",
  },
];
