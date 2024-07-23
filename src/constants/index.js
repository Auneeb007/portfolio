import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    mysql,
    jquery,
    bootstrap,
    tailwind,
    nodejs,
    git,
    figma,
    fullStack,
    php,
    reactJS,
    webDeveloper,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "JQuery",
      icon: jquery,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
  ];
  
  const experiences = [
    {
      title: "PHP Developer",
      company_name: "Zairone Solutions",
      icon: php,
      iconBg: "#383E56",
      date: "August 2020 - May 2021",
      points: [
        "Designed and Developed Projects using Html, CSS, Javascript.",
        "Used Bootstrap to maintain the responsiveness of the pages and websites.",
        "Managed website's storage solution using database",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Info tech",
      icon: webDeveloper,
      iconBg: "#383E56",
      date: "August 2021 - November 2021",
      points: [
        "Developed and Changed the websites of client's accordingly.",
        "Used Basic Html, CSS, Javascript and bootstrap to complete the project based tasks.",
        "Collaborated with colleagues and other teams to improve the user interface and to discuss better solutions.",
        "Providing milestones charts to manager was a daily task to maintain progress.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Fronus Solar Energies",
      icon: fullStack,
      iconBg: "#E6DEDD",
      date: "August 2023 - Present",
      points: [
        "Developed and Maintaining the Management system of company as a project based job.",
        "Used my basic knowledge of frontend and backend technologies to store maintain and export records accordingly.",
        "I used MySQL Database as a storage system to store and keep track of all incoming and outgoing records.",
        "Developed management system for customer support, service center, warehouse and the Management department.",
        "Added Charts and badged to keep realtime track of past and current records and to keep track of online and offline users.",
        "Improved useability and readability of the system from time to time by adding scanning functionality to directly insert and fetch the desired records using Bar and QR code respectively.",
        "Learned error handling to display errors according to user interactions.",
      ],
    },
    {
      title: "React JS Developer",
      company_name: "Fronus Solar Energies",
      icon: reactJS,
      iconBg: "#E6DEDD",
      date: "August 2023 - Present",
      points: [
        "Now I'm learning React JS, tailwind CSS and Node.JS to improve structures and responsiveness of my projects.",
        "Also understanding the new ways to use 3D objects in the websites.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };