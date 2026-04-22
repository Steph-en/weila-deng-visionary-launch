export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'announcement' | 'project-update' | 'industry-insight';
  date: string;
  author?: string;
  readTime: string;
  featured: boolean;
  image?: string;
  images?: string[];
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'chad-strengthening-solar-lighting',
    title: 'Chad is considering strengthening solar lighting.',
    excerpt: 'The Minister of Water and Energy, Basali Kanabe Marcelin: Thursday, April 09, 2026, in N\'Djamena, received a delegation from the Chinese Suiming Group specialised in solar energy, headed by its Director General Weila Deng , and with the participation of a number of ministry officials.',
    content: 'The meeting came within the framework of a call for offers for the supply of 2,0000 solar-powered street lighting lamps, where the company reviewed its experience, especially in the implementation of major street lighting projects in sub-Saharan Africa, in addition to owning a factory specialised in high-quality solar energy equipment. The Minister expressed his satisfaction with the level of the offer, praising the proposed technical specifications, and stressing the continuation of consultations with the technical teams to study opportunities for cooperation and promote the use of clean energy in the country.',
    category: 'announcement',
    date: '2026-04-09',
    author: 'Jakdam Communications',
    readTime: '4 min read',
    featured: true,
    image: 'src/assets/PHOTO-2026-04-10-18-18-38.jpg'
  },
  {
    id: 'maritime-headquarters-completion',
    title: 'Jakdam Group Completes Ghana Maritime Authority Headquarters',
    excerpt: 'The state-of-the-art facility represents a major milestone in our construction portfolio, featuring cutting-edge sustainable design.',
    content: 'Jakdam Group proudly announces the successful completion of the Ghana Maritime Authority Headquarters in Tema. This landmark project showcases our commitment to excellence in construction and sustainable building practices.',
    category: 'announcement',
    date: '2026-01-10',
    author: 'Jakdam Communications',
    readTime: '4 min read',
    featured: true,
    image: 'src/assets/projects/maritime-interior.jpg'
  },
  {
    id: 'esp-heights-milestone',
    title: 'ESP Heights Residential Tower Reaches 80% Completion',
    excerpt: 'Construction progress on the luxury 12-story residential development continues ahead of schedule.',
    content: 'The ESP Heights project in Accra has reached a significant milestone with 80% of construction now complete. The luxury residential tower will offer premium living spaces with panoramic city views.',
    category: 'project-update',
    date: '2026-01-05',
    author: 'Project Management Team',
    readTime: '3 min read',
    featured: true,
    image: 'src/assets/projects/esp-heights.jpg'
  },
  {
    id: 'sustainable-construction-trends',
    title: 'Sustainable Construction: Trends Shaping West Africa\'s Future',
    excerpt: 'An analysis of emerging green building practices and their implementation in regional infrastructure projects.',
    content: 'As climate considerations become increasingly important, Jakdam Group is at the forefront of implementing sustainable construction practices across all our projects.',
    category: 'industry-insight',
    date: '2025-12-28',
    author: 'Engineering Division',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 'highway-infrastructure-award',
    title: 'Jakdam Group Receives Excellence Award for Highway Infrastructure',
    excerpt: 'Recognition for outstanding contribution to national road network development and engineering innovation.',
    content: 'We are honored to receive the National Infrastructure Excellence Award for our highway construction projects, recognizing our commitment to quality and innovation.',
    category: 'announcement',
    date: '2025-12-20',
    author: 'Jakdam Communications',
    readTime: '3 min read',
    featured: false,
  },
  {
    id: 'irrigation-project-impact',
    title: 'Water Resources Project Transforms Agricultural Productivity',
    excerpt: 'Our irrigation infrastructure has enabled year-round farming for over 5,000 hectares of farmland.',
    content: 'The recently completed irrigation project in the Northern Region has revolutionized agricultural practices, providing reliable water access to farming communities.',
    category: 'project-update',
    date: '2025-12-15',
    author: 'Community Relations',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 'affordable-housing-initiative',
    title: 'Jakdam Group Expands Affordable Housing Initiative',
    excerpt: 'New partnership aims to deliver 1,000 quality housing units to address urban housing needs.',
    content: 'In collaboration with government agencies, Jakdam Group is expanding its affordable housing program to provide quality homes for middle-income families.',
    category: 'announcement',
    date: '2025-12-08',
    author: 'Jakdam Communications',
    readTime: '4 min read',
    featured: false,
  },
];

export const newsCategories = [
  { value: 'all', label: 'All News' },
  { value: 'announcement', label: 'Announcements' },
  { value: 'project-update', label: 'Project Updates' },
  { value: 'industry-insight', label: 'Industry Insights' },
];
