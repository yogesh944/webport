import { Project, TeamMember } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Digital Brand Experience',
    slug: 'project-one',
    category: 'UX & Brand Design',
    description: 'A comprehensive digital brand experience designed to engage users and elevate the client\'s market presence through immersive storytelling and interaction.',
    client: 'Horizon Studios',
    year: '2023',
    services: 'UI/UX, Development, Animation',
    website: 'https://example.com',
    thumbnail: 'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heroImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5076531/pexels-photo-5076531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'The client needed to modernize their digital presence while maintaining their established brand identity, requiring a careful balance between innovation and tradition.',
    solution: 'We created a seamless digital experience that respects the brand heritage while introducing modern interaction patterns and responsive design principles.',
    nextProject: 'project-two'
  },
  {
    id: 2,
    title: 'E-Commerce Redesign',
    slug: 'project-two',
    category: 'E-Commerce & UX Design',
    description: 'A complete redesign of an e-commerce platform focused on improving user experience, increasing conversion rates, and streamlining the purchasing process.',
    client: 'Meridian Retail',
    year: '2023',
    services: 'UI/UX, Development, Strategy',
    website: 'https://example.com',
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heroImage: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/5076526/pexels-photo-5076526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5076521/pexels-photo-5076521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5076532/pexels-photo-5076532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'The existing platform had poor conversion rates and high cart abandonment due to a confusing user flow and outdated design patterns.',
    solution: 'We redesigned the entire purchase flow, focusing on mobile-first design principles and implementing a streamlined checkout process with fewer steps.',
    nextProject: 'project-three'
  },
  {
    id: 3,
    title: 'Interactive Museum Experience',
    slug: 'project-three',
    category: 'Interactive Design',
    description: 'An immersive digital installation for a contemporary art museum that allows visitors to interact with exhibits through augmented reality and motion sensing.',
    client: 'Modern Art Foundation',
    year: '2022',
    services: 'Interactive Design, Development, 3D',
    website: 'https://example.com',
    thumbnail: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heroImage: 'https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6177630/pexels-photo-6177630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6051221/pexels-photo-6051221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'Creating a technology-driven experience that enhances rather than distracts from the art, while being accessible to visitors of all technical abilities.',
    solution: 'We developed intuitive gesture controls and subtle AR overlays that provide context and interactivity without overwhelming the physical exhibits.',
    nextProject: 'project-four'
  },
  {
    id: 4,
    title: 'Financial Dashboard',
    slug: 'project-four',
    category: 'UI Design & Data Visualization',
    description: 'A comprehensive financial dashboard for investment professionals that presents complex data sets in an intuitive and actionable format.',
    client: 'Capital Insights',
    year: '2022',
    services: 'UI Design, Development, Data Viz',
    website: 'https://example.com',
    thumbnail: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    heroImage: 'https://images.pexels.com/photos/7681096/pexels-photo-7681096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/7681105/pexels-photo-7681105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8370437/pexels-photo-8370437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    challenge: 'Presenting vast amounts of financial data in a way that\'s both comprehensive and digestible, while accommodating real-time updates and varying user roles.',
    solution: 'We created a modular dashboard system with customizable widgets, intelligent data summaries, and visual patterns that highlight outliers and trends at a glance.',
    nextProject: 'project-one'
  }
];

export const team: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Creative Director',
    bio: 'With over 15 years of experience in digital design, Alex leads our creative vision and ensures all projects meet our high standards.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 2,
    name: 'Sarah Chen',
    role: 'Lead Developer',
    bio: 'Sarah specializes in front-end development and animation, crafting smooth interactions and immersive digital experiences.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 3,
    name: 'Jamie Wilson',
    role: 'UX Designer',
    bio: 'Jamie combines research and creativity to design intuitive user experiences that delight and engage audiences.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 4,
    name: 'Raj Patel',
    role: 'Technical Director',
    bio: 'Raj oversees our technical strategy and implementation, ensuring our projects are built with scalability and performance in mind.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 5,
    name: 'Emma Lewis',
    role: 'Project Manager',
    bio: 'Emma keeps our projects on track, coordinating between team members and clients to deliver exceptional results on time and on budget.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 6,
    name: 'David Kim',
    role: '3D Artist',
    bio: 'David creates stunning 3D visuals and animations that bring our digital experiences to life with depth and movement.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];