export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Nexus Analytics Dashboard',
    category: 'Web Application',
    description: 'Real-time analytics platform with predictive insights and customizable widgets.',
    longDescription:
      'A comprehensive analytics dashboard built for enterprise teams. Features real-time data streaming, predictive ML models, drag-and-drop widget customization, and multi-tenant architecture. Handles 2M+ data points daily with sub-100ms query response times.',
    image: 'https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Pulse Fitness App',
    category: 'Mobile Application',
    description: 'Cross-platform fitness tracker with AI coaching and social challenges.',
    longDescription:
      'A fitness application that combines workout tracking, AI-powered coaching, and social features. Includes exercise recognition via camera, personalized training plans, nutrition tracking, and gamified challenges. Built with React Native and a Node.js backend.',
    image: 'https://images.pexels.com/photos/38639/mockup-psd-ipad-iphone-38639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React Native', 'Node.js', 'TensorFlow', 'Firebase'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'ShopSphere E-Commerce',
    category: 'E-Commerce',
    description: 'Headless e-commerce platform with AR product previews and instant checkout.',
    longDescription:
      'A modern headless commerce solution featuring AR product visualization, one-click checkout, inventory management, and a powerful admin dashboard. Supports 50k+ products with advanced filtering, personalized recommendations, and Stripe integration.',
    image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Next.js', 'Stripe', 'Prisma', 'Three.js', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Aurora Brand Studio',
    category: 'Branding & Design',
    description: 'Brand identity system with dynamic logo generation and design token management.',
    longDescription:
      'A complete brand identity platform that allows teams to manage design tokens, generate logo variations, and maintain brand consistency across all touchpoints. Includes a Figma plugin, asset library, and automated brand guideline generation.',
    image: 'https://images.pexels.com/photos/7598007/pexels-photo-7598007.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Figma API', 'React', 'Node.js', 'Canvas API'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'DataFlow Visualization',
    category: 'Data Visualization',
    description: 'Interactive data flow diagrams with real-time collaboration and version control.',
    longDescription:
      'A collaborative data visualization tool for engineering teams. Features real-time multi-user editing, version history, custom node creation, and export to multiple formats. Built with React Flow, WebRTC for collaboration, and a GraphQL backend.',
    image: 'https://images.pexels.com/photos/27141313/pexels-photo-27141313.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['React Flow', 'GraphQL', 'WebRTC', 'Yjs'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Commerce Insights',
    category: 'Analytics',
    description: 'Sales analytics tool with cohort analysis and revenue forecasting.',
    longDescription:
      'A specialized analytics platform for e-commerce businesses. Provides cohort analysis, LTV prediction, revenue forecasting, and churn detection. Integrates with Shopify, WooCommerce, and custom data sources. Features automated report generation and Slack alerts.',
    image: 'https://images.pexels.com/photos/10020092/pexels-photo-10020092.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tags: ['Vue.js', 'Python', 'Pandas', 'Chart.js'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export const services: Service[] = [
  {
    icon: 'Code',
    title: 'Web Development',
    description: 'Building fast, accessible, and scalable web applications with modern frameworks and best practices.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps with native performance, offline support, and delightful user experiences.',
  },
  {
    icon: 'Palette',
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful interfaces backed by user research and design systems.',
  },
  {
    icon: 'BarChart3',
    title: 'Data Visualization',
    description: 'Turning complex data into clear, interactive visualizations that drive informed decisions.',
  },
  {
    icon: 'Cloud',
    title: 'Cloud Architecture',
    description: 'Designing resilient, cost-effective cloud infrastructure with automated deployment pipelines.',
  },
  {
    icon: 'Zap',
    title: 'Performance Optimization',
    description: 'Auditing and optimizing applications for speed, Core Web Vitals, and smooth user experiences.',
  },
];

export const skills: Skill[] = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 92, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
  { name: 'React Native', level: 85, category: 'Mobile' },
  { name: 'Node.js / Express', level: 88, category: 'Backend' },
  { name: 'PostgreSQL / Prisma', level: 85, category: 'Backend' },
  { name: 'GraphQL', level: 80, category: 'Backend' },
  { name: 'AWS / Docker', level: 78, category: 'DevOps' },
  { name: 'Figma', level: 82, category: 'Design' },
  { name: 'D3.js / Chart.js', level: 75, category: 'Data' },
];

export const experiences: Experience[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Quantum Labs',
    period: '2023 — Present',
    description: 'Leading the frontend architecture for a next-generation analytics platform used by 50k+ users.',
    achievements: [
      'Reduced bundle size by 40% through code splitting and tree shaking',
      'Implemented a design system adopted across 6 product teams',
      'Mentored 4 junior engineers and established frontend best practices',
    ],
  },
  {
    role: 'Full-Stack Developer',
    company: 'Brightwave Studio',
    period: '2021 — 2023',
    description: 'Built and maintained client projects spanning e-commerce, SaaS, and mobile applications.',
    achievements: [
      'Delivered 15+ production projects with 98% client satisfaction',
      'Created a reusable component library saving 200+ dev hours',
      'Optimized Lighthouse scores to 95+ across all client projects',
    ],
  },
  {
    role: 'Frontend Developer',
    company: 'PixelForge Agency',
    period: '2019 — 2021',
    description: 'Developed responsive websites and interactive experiences for brands and startups.',
    achievements: [
      'Built 30+ marketing sites with smooth animations and micro-interactions',
      'Introduced automated testing reducing production bugs by 60%',
      'Collaborated with designers to implement pixel-perfect UIs',
    ],
  },
];

export const education: Education[] = [
  {
    degree: 'B.Sc. Computer Science',
    institution: 'University of Technology',
    period: '2015 — 2019',
    description: 'Graduated with honors. Specialized in human-computer interaction and software engineering. President of the Web Development Society.',
  },
  {
    degree: 'Advanced React Certification',
    institution: 'Frontend Masters',
    period: '2020',
    description: 'Completed an intensive program covering advanced React patterns, performance optimization, and testing strategies.',
  },
];

export const certificates: Certificate[] = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'March 2024',
    credentialId: 'AWS-SAA-2024-0892',
  },
  {
    title: 'Professional Cloud Developer',
    issuer: 'Google Cloud',
    date: 'November 2023',
    credentialId: 'GCP-PCD-2023-4521',
  },
  {
    title: 'Meta Frontend Developer',
    issuer: 'Meta / Coursera',
    date: 'June 2023',
    credentialId: 'META-FD-2023-7745',
  },
  {
    title: 'Scrum Master Certification',
    issuer: 'Scrum Alliance',
    date: 'February 2022',
    credentialId: 'CSM-2022-3398',
  },
];

export const timeline: TimelineEvent[] = [
  { year: '2024', title: 'Tech Speaker', description: 'Delivered a talk on "Design Systems at Scale" at ReactConf.' },
  { year: '2023', title: 'Open Source Contributor', description: 'Contributed to 12 open-source projects with 500+ GitHub stars.' },
  { year: '2022', title: 'Hackathon Winner', description: 'Won 1st place at the Global AI Hackathon with a vision-assist app.' },
  { year: '2021', title: 'Community Builder', description: 'Founded a local developer meetup with 500+ active members.' },
  { year: '2020', title: 'Published Author', description: 'Published "Modern Web Animations" on Medium with 100k+ reads.' },
  { year: '2019', title: 'First Job', description: 'Started professional career at PixelForge Agency.' },
];
