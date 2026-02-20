import maritimeAuthority from "@/assets/projects/maritime-authority.jpg";
import maritimeProgress from "@/assets/projects/maritime-progress.jpg";
import maritimeInterior from "@/assets/projects/maritime-interior.jpg";
import espHeights from "@/assets/projects/esp-heights.jpg";
import AA1 from "@/assets/projects/aa3436.jpg";
import AA2 from "@/assets/projects/aa3278.jpg";
import AA3 from "@/assets/projects/aa3570.jpg";
import AA4 from "@/assets/projects/aa3781.jpg";
import AA5 from "@/assets/projects/aa3909.jpg";
import AA6 from "@/assets/projects/aa378.jpg";
import affordableHousing from "@/assets/projects/affordable-housing.jpg";
import housingAerial from "@/assets/projects/housing-aerial.jpg";
import highwayConstruction from "@/assets/projects/highway-construction.jpg";
import highwayProgress1 from "@/assets/projects/highway-progress1.jpg";
import highwayProgress2 from "@/assets/projects/highway-progress2.jpg";
import highwayProgress3 from "@/assets/projects/highway-progress3.jpg";
import highwayProgress4 from "@/assets/projects/highway-progress4.jpg";
import irrigationProject from "@/assets/projects/irrigation-project.jpg";
import irrigationCanal1 from "@/assets/projects/irrigation-canal1.jpg";
import irrigationCanal2 from "@/assets/projects/irrigation-canal2.jpg";
import irrigationCanal3 from "@/assets/projects/irrigation-canal3.jpg";
import irrigationCanal4 from "@/assets/projects/irrigation-canal4.jpg";
import residentialApartments from "@/assets/projects/residential-apartments.jpg";
import residentialApartments2 from "@/assets/projects/residential-apartments2.jpg";

export interface Project {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  location: string;
  // region: string;
  image: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  specifications?: {
    label: string;
    value: string;
  }[];
  gallery: string[];
  year?: string;
  client?: string;
  status: "Completed" | "In Progress" | "Planned";
  impactMetrics?: {
    label: string;
    value: string;
  }[];
}

// export const regions = [
//   { slug: "all", label: "All Regions" },
//   { slug: "greater-accra", label: "Greater Accra" },
//   { slug: "ashanti", label: "Ashanti" },
//   { slug: "eastern", label: "Eastern" },
//   { slug: "various", label: "Various/Multi-Region" },
// ];

export const categories = [
  { slug: "all", label: "All Projects" },
  { slug: "commercial", label: "Commercial" },
  { slug: "residential", label: "Residential" },
  { slug: "highway", label: "Highway" },
  { slug: "water-resources", label: "Water Resources" },
  { slug: "energy", label: "Energy" },
];

export const featuredProjects: Project[] = [
  {
    id: "ghana-maritime-authority",
    title: "Ghana Maritime Authority Head Office",
    category: "Commercial Building",
    categorySlug: "commercial",
    location: "Accra, Ghana",
    // region: "greater-accra",
    image: maritimeAuthority,
    description: "A landmark office complex serving as the headquarters for Ghana's maritime regulatory body.",
    fullDescription: "The Ghana Maritime Authority Head Office stands as a testament to modern African architecture and Jakdam Group's commitment to excellence. This landmark office complex serves as the headquarters for Ghana's maritime regulatory body, featuring state-of-the-art facilities, sustainable design principles, and a commanding presence in Accra's business district. The building incorporates advanced energy-efficient systems and provides a world-class working environment for maritime professionals.",
    highlights: [
      "State-of-the-art maritime operations center",
      "Sustainable building design with energy-efficient systems",
      "Modern conference and training facilities",
      "Commanding architectural presence in Accra",
      "Advanced security and communication infrastructure",
    ],
    specifications: [
      { label: "Total Area", value: "15,000 sqm" },
      { label: "Floors", value: "8 Stories" },
      { label: "Parking Spaces", value: "200+" },
      { label: "Completion", value: "2022" },
    ],
    gallery: [maritimeAuthority, maritimeProgress, maritimeInterior],
    year: "2022",
    client: "Ghana Maritime Authority",
    status: "Completed",
    impactMetrics: [
      { label: "Jobs Created", value: "200+" },
      { label: "Area Developed", value: "15,000 sqm" },
    ],
  },
  {
    id: "esp-heights",
    title: "ESP Heights I & II",
    category: "Residential Tower",
    categorySlug: "residential",
    location: "Accra, Ghana",
    image: espHeights,
    description: "Premium high-rise residential towers offering luxury living spaces with modern amenities.",
    fullDescription: "ESP Heights I & II represent the pinnacle of luxury residential living in Accra. These twin towers offer discerning residents an unparalleled lifestyle experience with panoramic city views, premium finishes, and world-class amenities. Each unit is thoughtfully designed to maximize space and natural light, while common areas include a rooftop infinity pool, fitness center, and landscaped gardens.",
    highlights: [
      "Twin tower luxury residential development",
      "Panoramic views of Accra cityscape",
      "Rooftop infinity pool and sky lounge",
      "24/7 concierge and security services",
      "Premium finishes and smart home technology",
    ],
    specifications: [
      { label: "Total Units", value: "120 Apartments" },
      { label: "Floors", value: "24 Stories each" },
      { label: "Unit Sizes", value: "1-4 Bedrooms" },
      { label: "Amenities", value: "Pool, Gym, Spa" },
    ],
    gallery: [AA5, AA1, AA2, AA3, AA4, AA6],
    year: "2021",
    client: "Private Development",
    status: "Completed",
    impactMetrics: [
      { label: "Units Delivered", value: "120" },
      { label: "Residents Housed", value: "400+" },
    ],
  },
  {
    id: "affordable-housing-64",
    title: "64 Unit Affordable Housing Project",
    category: "Residential Development",
    categorySlug: "residential",
    location: "Ghana",
    image: affordableHousing,
    description: "A comprehensive housing initiative providing quality homes for Ghanaian families.",
    fullDescription: "This 64-unit affordable housing project demonstrates Jakdam Group's commitment to addressing Ghana's housing needs. The development provides quality, modern homes at accessible price points, enabling more Ghanaian families to achieve homeownership. Each unit features durable construction, functional layouts, and access to community amenities including playgrounds and green spaces.",
    highlights: [
      "64 quality residential units",
      "Affordable pricing for Ghanaian families",
      "Community playgrounds and green spaces",
      "Durable, low-maintenance construction",
      "Integrated water and power infrastructure",
    ],
    specifications: [
      { label: "Total Units", value: "64 Homes" },
      { label: "Unit Types", value: "2-3 Bedrooms" },
      { label: "Land Area", value: "5 Hectares" },
      { label: "Community Features", value: "Parks, Shops" },
    ],
    gallery: [affordableHousing, housingAerial],
    year: "2020",
    client: "Government of Ghana",
    status: "Completed",
    impactMetrics: [
      { label: "Families Housed", value: "64" },
      { label: "Community Size", value: "250+" },
    ],
  },
  {
    id: "brofoyedur-akenkansu-highway",
    title: "Brofoyedur – Akenkansu Highway",
    category: "Highway Construction",
    categorySlug: "highway",
    location: "Ghana",
    image: highwayConstruction,
    description: "Major highway infrastructure connecting communities and enabling economic growth.",
    fullDescription: "The Brofoyedur – Akenkansu Highway is a critical infrastructure project that enhances connectivity between rural communities and urban centers. This multi-lane highway features modern engineering standards, proper drainage systems, and safety features. The project significantly reduces travel times and transportation costs, unlocking economic opportunities for communities along the corridor.",
    highlights: [
      "Multi-lane modern highway design",
      "Advanced drainage and flood control systems",
      "Safety barriers and road marking systems",
      "Bridges and culvert infrastructure",
      "Community access roads integration",
    ],
    specifications: [
      { label: "Length", value: "45 Kilometers" },
      { label: "Lanes", value: "4 Lanes" },
      { label: "Bridges", value: "3 Major Bridges" },
      { label: "Design Speed", value: "100 km/h" },
    ],
    gallery: [highwayProgress1, highwayProgress2, highwayProgress3, highwayProgress4],
    year: "2023",
    client: "Ministry of Roads & Highways",
    status: "Completed",
    impactMetrics: [
      { label: "Communities Connected", value: "12" },
      { label: "Travel Time Reduced", value: "60%" },
    ],
  },
  {
    id: "kpong-irrigation",
    title: "Kpong Left Bank Irrigation Project",
    category: "Water Resources",
    categorySlug: "water-resources",
    location: "Kpong, Ghana",
    image: irrigationProject,
    description: "Large-scale irrigation infrastructure supporting agricultural development in the region.",
    fullDescription: "The Kpong Left Bank Irrigation Project is a transformative agricultural infrastructure initiative that brings reliable water access to thousands of hectares of farmland. The project includes a comprehensive network of canals, pumping stations, and distribution systems that enable year-round farming and significantly boost agricultural productivity in the region.",
    highlights: [
      "Large-scale irrigation network",
      "Modern pumping station infrastructure",
      "Automated water distribution systems",
      "Flood control and drainage networks",
      "Agricultural training facilities",
    ],
    specifications: [
      { label: "Coverage Area", value: "3,000 Hectares" },
      { label: "Canal Length", value: "120 Kilometers" },
      { label: "Pump Capacity", value: "5,000 m³/hour" },
      { label: "Beneficiaries", value: "10,000+ Farmers" },
    ],
    gallery: [irrigationCanal2, irrigationCanal3, irrigationCanal1, irrigationCanal4],
    year: "2019",
    client: "Ghana Irrigation Development Authority",
    status: "Completed",
    impactMetrics: [
      { label: "Farmers Benefited", value: "10,000+" },
      { label: "Productivity Gain", value: "40%" },
    ],
  },
  {
    id: "residential-apartments",
    title: "Completed Residential Apartments",
    category: "Residential Complex",
    categorySlug: "residential",
    location: "Various Locations",
    image: residentialApartments,
    description: "Multiple residential apartment complexes delivering quality housing solutions.",
    fullDescription: "Jakdam Group has delivered multiple residential apartment complexes across Ghana, each designed to meet the diverse housing needs of urban populations. These developments feature modern architectural design, quality construction materials, and thoughtful amenities that enhance residents' quality of life.",
    highlights: [
      "Multiple locations across Ghana",
      "Modern architectural design",
      "Quality construction standards",
      "Community-focused amenities",
      "Efficient space utilization",
    ],
    specifications: [
      { label: "Total Units", value: "200+ Apartments" },
      { label: "Locations", value: "5 Cities" },
      { label: "Unit Types", value: "Studio to 4BR" },
      { label: "Occupancy Rate", value: "95%" },
    ],
    gallery: [residentialApartments, residentialApartments2],
    year: "2018-2023",
    client: "Various Private Clients",
    status: "Completed",
    impactMetrics: [
      { label: "Total Units", value: "200+" },
      { label: "Occupancy Rate", value: "95%" },
    ],
  },
];

export const keyAreas = [
  {
    slug: "construction",
    title: "Construction",
    description: "Sky scrapers, residential buildings, and infrastructure projects",
  },
  {
    slug: "automobile",
    title: "Automobile",
    description: "Vehicle sales, maintenance, and fleet management services",
  },
  {
    slug: "interior",
    title: "Interior Design & Décor",
    description: "Premium interior design and decoration services",
  },
  {
    slug: "energy",
    title: "Energy",
    description: "Sustainable energy solutions and power infrastructure",
  },
  {
    slug: "concrete",
    title: "Concrete Production",
    description: "High-quality concrete manufacturing and supply",
  },
];

export const notableBuildings = [
  "Ghana Maritime Authority Head Office",
  "ESP Heights I & II",
  "12 Unit Armed Forces Housing",
  "President's Infrastructure Initiatives - Nkoranza North",
  "Olives Apartment",
  "Lawra Secondary School Assembly Hall",
  "Wa Secondary School Girls Dormitory",
  "10 Executive Town Houses - Ministry of Works",
];

export const highwayProjects = [
  "Brofoyedur – Akenkansu Highway",
  "Assin Manso – Essiam Highway",
  "Buokrom Estate Urban Roads",
  "Assin Dompim – Twifo Praso Highway",
];

export const waterProjects = [
  "Kpong Left Bank Irrigation Project",
  "Reservoir Projects",
  "Hydroelectric Power Stations",
  "River Regulation Works",
  "Tunneling Projects",
  "Pressure Piping Infrastructure",
];
