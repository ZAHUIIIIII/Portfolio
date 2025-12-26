export interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  category: 'Full-Stack' | 'Mobile' | 'Backend' | 'Frontend' | 'UX/UI';
  tags: string[];
  metrics: string[];
  featured: boolean;
  duration: string;
  role: string;
  team: string;
  status: string;
  // ========================================
  // PROJECT IMAGES
  // ========================================
  // Put your project images in /public/images/projects/
  // Example: '/images/projects/netsphere.jpg'
  image?: string;
  // Optional: Add multiple screenshots
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    name: "NETSPHERE",
    tagline: "Full-Stack Social Networking Platform",
    description: "A comprehensive social networking platform built with the MERN stack, featuring real-time messaging, post sharing, and advanced user interactions.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO", "Express"],
    metrics: ["97 APIs", "99% Uptime", "100% Tests"],
    featured: true,
    duration: "12 months",
    role: "Full-Stack Developer",
    team: "Solo",
    status: "Deployed & Live",
    // Add your project image path here
    image: '/images/projects/fyp/Picture1.png',
    screenshots: [
      '/images/projects/fyp/Picture1.png',
      '/images/projects/fyp/2.png'
    ]
  },
  {
    id: 2,
    name: "Universal Yoga Apps",
    tagline: "Cross-Platform Yoga Studio Management",
    description: "A dual-platform solution consisting of an Android teacher app and React Native student app with real-time synchronization.",
    category: "Full-Stack",
    tags: ["Android", "React Native", "Firebase", "Java"],
    metrics: ["2 Apps", "Real-time Sync", "CRUD Complete"],
    featured: true,
    duration: "6 months",
    role: "Mobile Developer",
    team: "Solo",
    status: "Completed",
    image: '/images/projects/yoga/Picture1.png',
    screenshots: [
      '/images/projects/yoga/Picture1.png',
      '/images/projects/yoga/2.png',
      '/images/projects/yoga/3.png'
    ]
  },
  {
    id: 3,
    name: "Villa Booking Website",
    tagline: "SharePoint-Based Booking Platform",
    description: "An enterprise-grade villa booking system built on SharePoint with Power Apps integration and Azure deployment.",
    category: "UX/UI",
    tags: ["SharePoint", "Power Apps", "Azure", "JavaScript"],
    metrics: ["CMS", "SEO Optimized", "Multi-role"],
    featured: true,
    duration: "4 months",
    role: "SharePoint Developer",
    team: "Solo",
    status: "Deployed",
    image: '/images/projects/sharepoint/4.png',
    screenshots: [
      '/images/projects/sharepoint/Picture1.png',
      '/images/projects/sharepoint/2.png',
      '/images/projects/sharepoint/3.png',
      '/images/projects/sharepoint/4.png'
    ]
  },
  {
    id: 4,
    name: "URL Shortener",
    tagline: "RESTful URL Management Service",
    description: "A scalable URL shortening service with analytics, custom aliases, and comprehensive API documentation.",
    category: "Backend",
    tags: ["Node.js", "Express", "MongoDB", "Redis"],
    metrics: ["RESTful API", "Analytics", "Custom Aliases"],
    featured: false,
    duration: "2 months",
    role: "Backend Developer",
    team: "Solo",
    status: "Live",
    image: '/images/projects/url-shortener.jpg'
  },
  {
    id: 5,
    name: "Online Bookstore",
    tagline: "E-Commerce Platform with Admin Panel",
    description: "A full-featured online bookstore with user authentication, shopping cart, and comprehensive admin dashboard.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    metrics: ["Payment Integration", "Admin Panel", "Auth System"],
    featured: false,
    duration: "5 months",
    role: "Full-Stack Developer",
    team: "Solo",
    status: "Completed",
    image: '/images/projects/bookstore.jpg'
  },
  {
    id: 6,
    name: "MEVN CRUD System",
    tagline: "Vue-Based Task Management System",
    description: "A comprehensive CRUD application built with MongoDB, Express, Vue.js, and Node.js for efficient task management.",
    category: "Full-Stack",
    tags: ["Vue.js", "Node.js", "MongoDB", "Express"],
    metrics: ["Full CRUD", "Responsive UI", "API Integration"],
    featured: false,
    duration: "3 months",
    role: "Full-Stack Developer",
    team: "Solo",
    status: "Completed",
    image: '/images/projects/web 2/Picture1.png',
    screenshots: [
      '/images/projects/web 2/Picture1.png',
      '/images/projects/web 2/2.png'
    ]
  },
  {
    id: 7,
    name: "Motorbike Navigation App",
    tagline: "Android Navigation for Riders",
    description: "A specialized navigation app designed for motorbike riders with offline maps and route optimization.",
    category: "Mobile",
    tags: ["Android", "Java", "Google Maps API", "SQLite"],
    metrics: ["Offline Maps", "Route Optimization", "Real-time"],
    featured: false,
    duration: "4 months",
    role: "Android Developer",
    team: "Solo",
    status: "Completed",
    image: '/images/projects/axure/Picture1.png',
    screenshots: [
      '/images/projects/axure/Picture1.png',
      '/images/projects/axure/2.png',
      '/images/projects/axure/3.png',
      '/images/projects/axure/4.png',
      '/images/projects/axure/5.png',
      '/images/projects/axure/6.png'
    ]
  },
  {
    id: 8,
    name: "London Underground Analysis",
    tagline: "Data Analytics & Visualization System",
    description: "A data analytics project analyzing London Underground traffic patterns with interactive visualizations.",
    category: "Backend",
    tags: ["Python", "React", "D3.js", "Pandas"],
    metrics: ["Data Visualization", "Analytics", "Interactive"],
    featured: false,
    duration: "3 months",
    role: "Data Analyst",
    team: "Solo",
    status: "Completed",
    image: '/images/projects/visual/2.png',
    screenshots: [
      '/images/projects/visual/1.png',
      '/images/projects/visual/2.png'
    ]
  },
  {
    id: 9,
    name: "Requirements Management System",
    tagline: "Enterprise Project Management Tool",
    description: "A comprehensive requirements tracking and management system for enterprise software projects.",
    category: "Full-Stack",
    tags: ["React", "Node.js", "PostgreSQL", "Docker"],
    metrics: ["Project Tracking", "Collaboration", "Reporting"],
    featured: false,
    duration: "6 months",
    role: "Full-Stack Developer",
    team: "Team of 4",
    status: "In Development",
    image: '/images/projects/requirements-mgmt.jpg'
  }
];
