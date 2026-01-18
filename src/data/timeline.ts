export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: 'founding' | 'milestone' | 'expansion' | 'award';
}

export const timelineEvents: TimelineEvent[] = [
  {
    year: '2000',
    title: 'Company Founded',
    description: 'Jakdam Group established as a small construction firm in Accra, Ghana with a vision to transform infrastructure development.',
    category: 'founding',
  },
  {
    year: '2003',
    title: 'First Major Contract',
    description: 'Secured first government contract for residential housing development, marking the beginning of our public sector partnerships.',
    category: 'milestone',
  },
  {
    year: '2006',
    title: 'Highway Division Launched',
    description: 'Expanded operations to include highway and road infrastructure, responding to national development needs.',
    category: 'expansion',
  },
  {
    year: '2009',
    title: 'ISO Certification Achieved',
    description: 'Received ISO 9001 certification for quality management systems, establishing industry-leading standards.',
    category: 'award',
  },
  {
    year: '2012',
    title: 'Water Resources Division',
    description: 'Launched dedicated water resources and irrigation division to support agricultural development across Ghana.',
    category: 'expansion',
  },
  {
    year: '2015',
    title: 'Regional Expansion',
    description: 'Extended operations to neighboring West African countries, establishing presence in Nigeria and Côte d\'Ivoire.',
    category: 'expansion',
  },
  {
    year: '2018',
    title: 'Excellence Award',
    description: 'Received National Construction Excellence Award for outstanding contribution to infrastructure development.',
    category: 'award',
  },
  {
    year: '2020',
    title: '50th Project Milestone',
    description: 'Completed 50th major construction project, demonstrating two decades of sustained growth and excellence.',
    category: 'milestone',
  },
  {
    year: '2023',
    title: 'Sustainable Construction Initiative',
    description: 'Launched green building initiative, committing to sustainable construction practices across all projects.',
    category: 'milestone',
  },
  {
    year: '2025',
    title: 'Maritime Authority HQ Completed',
    description: 'Delivered the Ghana Maritime Authority Headquarters, one of our most prestigious projects to date.',
    category: 'milestone',
  },
];
