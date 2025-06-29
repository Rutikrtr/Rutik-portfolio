import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with 1.6 years of hands-on experience in building secure, scalable, and high-performance web applications. Skilled in the MERN stack and Next.js, I have developed and deployed complex systems like billing, restaurant, and banking platforms. My technical strengths include ReactJS, Next.js, Node.js, MySQL, and MongoDB. I thrive in dynamic environments, solving real-world problems through clean, efficient code and thoughtful architecture.`;

export const ABOUT_TEXT = `I am a dedicated full stack developer with a strong foundation in MERN stack and Next.js, and a proven track record of delivering end-to-end web solutions. My experience includes building billing software, restaurant management systems, and banking applications using React, Next.js, Node.js, Express, MySQL, and MongoDB. I currently work at SN Mastermind Software Pvt. Ltd. as an Associate Software Developer, where I focus on developing scalable web apps and optimizing backend systems. Beyond development, I enjoy exploring new technologies, contributing to open-source projects, and constantly challenging myself to grow as a developer.`;


export const PROJECTS = [
  {
    title: "EarthMovers Billing Software",
    image: project1,
    description:
      "A comprehensive billing software tailored for vehicle-based businesses like JCB, Hyva, and Trucks, featuring customized rate modules and automated invoice generation.",
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Feasitation Restaurant Management System",
    image: project2,
    description:
      "An end-to-end restaurant management platform with multi-role access (Superadmin, Manager, Staff), email notifications via Nodemailer, and operational control dashboards.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Nodemailer"],
  },
  {
    title: "Gym Management Software",
    image: project3,
    description:
      "A CRM solution for gyms with membership management, onboarding flows, and an admin dashboard for operational control.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "BachatWin Financial Tracker",
    image: project4,
    description:
      "A personal finance management tool with real-time analytics, JWT-based authentication, and secure backend with MySQL integration.",
    technologies: ["React", "Node.js", "Express", "MySQL", "JWT"],
  },
];


export const CONTACT = {
  address: "Kharadi , Pune",
  phoneNo: "+91 9130690366 ",
  email: "rutikshingote4325@gmail.com",
};
