import type { Service, Project, NavLink } from "@/types";

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

export interface Sector {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: string;
  href: string;
  relatedCategories: string[];
}

export const NAV_LINKS: (NavLink & { children?: NavLink[] })[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "Company Profile", href: "/about" },
      { label: "Workshop & Facilities", href: "/about/facilities" },
      { label: "HSE / K3L", href: "/about/hse" },
      { label: "Partners & Clients", href: "/about/partners" },
    ],
  },
  { label: "Fleet & Equipment", href: "/services" },
  { label: "Project Experience", href: "/portfolio" },
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

export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  video?: string;
  tag: string;
}

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

export interface ProjectFull extends Project {
  year: string;
  location: string;
  client: string;
  description: string;
  tags: string[];
}

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
