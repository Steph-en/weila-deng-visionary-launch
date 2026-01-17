export interface TeamMember {
  id: string;
  name: string;
  title: string;
  department: string;
  bio: string;
  image?: string;
}

export interface Department {
  name: string;
  description: string;
  members: TeamMember[];
}

export const leadership: TeamMember[] = [
  {
    id: "ceo",
    name: "Executive Leadership",
    title: "Chief Executive Officer",
    department: "Executive",
    bio: "Leading Jakdam Group's strategic vision and operations across all business units with over 20 years of experience in construction and infrastructure development.",
  },
  {
    id: "coo",
    name: "Operations Director",
    title: "Chief Operations Officer",
    department: "Executive",
    bio: "Overseeing day-to-day operations and ensuring project delivery excellence across all construction and infrastructure projects.",
  },
  {
    id: "cfo",
    name: "Finance Director",
    title: "Chief Financial Officer",
    department: "Executive",
    bio: "Managing financial strategy, investments, and ensuring sustainable growth across all business divisions.",
  },
];

export const departments: Department[] = [
  {
    name: "Executive Management",
    description: "Strategic leadership and corporate governance",
    members: leadership,
  },
  {
    name: "Construction Division",
    description: "Building and infrastructure project management",
    members: [
      {
        id: "const-1",
        name: "Project Director",
        title: "Head of Construction",
        department: "Construction",
        bio: "Leading major building and infrastructure projects with expertise in commercial and residential developments.",
      },
      {
        id: "const-2",
        name: "Site Operations Manager",
        title: "Senior Project Manager",
        department: "Construction",
        bio: "Managing on-site construction operations and coordinating with technical teams.",
      },
    ],
  },
  {
    name: "Highway & Infrastructure",
    description: "Road and transportation infrastructure development",
    members: [
      {
        id: "highway-1",
        name: "Infrastructure Director",
        title: "Head of Highway Projects",
        department: "Highway",
        bio: "Specializing in highway construction, urban roads, and transportation infrastructure.",
      },
    ],
  },
  {
    name: "Water Resources",
    description: "Irrigation and water infrastructure solutions",
    members: [
      {
        id: "water-1",
        name: "Water Resources Director",
        title: "Head of Water Projects",
        department: "Water Resources",
        bio: "Expert in irrigation systems, reservoirs, and water infrastructure development.",
      },
    ],
  },
  {
    name: "Energy Division",
    description: "Sustainable energy and power infrastructure",
    members: [
      {
        id: "energy-1",
        name: "Energy Director",
        title: "Head of Energy Projects",
        department: "Energy",
        bio: "Leading sustainable energy initiatives and power infrastructure development.",
      },
    ],
  },
];

export const companyStats = {
  totalEmployees: 358,
  keyIndustries: 5,
  officeLocations: 6,
  majorProjects: 50,
};
