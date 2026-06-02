import { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Primuna Dress Shopping",
    description:
      "A demo e-commerce platform for fashion products with product browsing, cart management, and checkout features.",

    about:
      "Primuna Dress Shopping is a demo fashion e-commerce application created to simulate a real online clothing store. Users can browse products, filter items by category, add products to a cart, and view product details. The project focuses on building a responsive shopping interface and managing product data efficiently.",

    duration: "4 Weeks (Demo Project)",

    tools: [
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "REST API",
      "Git & GitHub",
    ],

    learning:
      "This demo project helped me understand how to build an e-commerce structure using the MERN stack. I practiced state management using Redux, API integration between frontend and backend, and building responsive UI components using Tailwind CSS.",

    tags: ["React", "Redux", "Node.js", "MongoDB", "Tailwind"],

    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1470&auto=format&fit=crop",

    link: "#",
    github: "https://github.com/shibly5365",

    initialViews: 1240,
    initialLikes: 342,
    status: "Coming Soon",
    showDemo: false,
    showDetails: false,
  },

  {
    id: 2,
    title: "MediConnect Healthcare Platform",

    description:
      "A production-ready healthcare management platform featuring appointment scheduling, patient records, Google authentication, real-time chat, video consultations, and Redis-powered performance optimization.",

    about:
      "MediConnect Healthcare Platform is a production-ready healthcare management system designed to streamline hospital operations. The platform enables patients, doctors, and administrators to manage appointments, medical records, and consultations through a centralized dashboard. Key features include secure authentication using JWT and Google OAuth, real-time messaging powered by Socket.IO, video consultations using WebRTC, advanced state management with Redux and Zustand, and Redis caching for improved performance and scalability. The system was built with a focus on security, responsiveness, and seamless user experience.",

    duration: "6 Weeks",

    tools: [
      "React",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MySQL",
      "Socket.IO",
      "WebRTC",
      "Redis",
      "JWT Authentication",
      "Google OAuth",
      "REST API",
      "Git",
      "GitHub",
    ],

    learning:
      "This project provided hands-on experience in building a production-level healthcare platform. I implemented secure authentication using JWT and Google OAuth, managed complex application state with Redux and Zustand, developed responsive user interfaces using Tailwind CSS, integrated real-time communication with Socket.IO, built peer-to-peer video consultations using WebRTC, and optimized performance through Redis caching. I also improved my skills in REST API development, MySQL database management, scalable backend architecture, and full-stack application deployment.",

    tags: [
      "React",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MySQL",
      "Socket.IO",
      "WebRTC",
      "Redis",
      "Google OAuth",
    ],

    image:
      "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?q=80&w=1470&auto=format&fit=crop",

    link: "https://hospital-front-end-delta.vercel.app/",
    github: "https://github.com/shibly5365/HospitalFrontEnd",

    initialViews: 956,
    initialLikes: 215,

    status: "Completed",
    showDemo: true,
    showDetails: true,
  },

  {
    id: 3,
    title: "Restaurant SaaS & CRM",
    description:
      "A demo SaaS platform for restaurant management including order tracking and customer relationship tools.",

    about:
      "Restaurant SaaS & CRM is a demo application designed to demonstrate how restaurants can manage orders, inventory, and customer data using a centralized dashboard. The system focuses on providing a scalable SaaS-style architecture for restaurant businesses.",

    duration: "8 Weeks (Group Project)",

    tools: [
      "React",
      "Node.js",
      "PostgreSQL",
      "SaaS Architecture",
      "REST API",
      "Tailwind CSS",
    ],

    learning:
      "Through this demo project I explored SaaS application structure, backend service design, database relationships using PostgreSQL, and building modular React components.",

    tags: ["React", "Node.js", "PostgreSQL", "SaaS"],

    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1470&auto=format&fit=crop",

    link: "#",
    github: "https://github.com/shibly5365",

    initialViews: 2300,
    initialLikes: 567,
    status: "Ongoing",
    showDemo: false,
    showDetails: false,
  },
];
