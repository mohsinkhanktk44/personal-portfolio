import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
    {
    title: "Full-Stack Developer",
    location: "Focus IT Services, Islamabad",
    description:
      "My responsibilities included translating design concepts into responsive and visually compelling user interfaces, ensuring a seamless user experience.Collaborating closely with cross-functional teams, I consistently delivered high-quality.",
    icon: React.createElement(FaReact),
    date: " Dec 2023- present",
  },
   {
    title: "Front-End Developer",
    location: "AlimcoSoft PVT Limited, Islamabad",
    description:
      "As a Front-End Developer at Alimcosoft pvt Limited, I was instrumental in shaping exceptional user interfaces for various projects. Leveraging React.js and Next.js, I led the design and implementation of visually stunning interfaces that enhanced user engagement",
    icon: React.createElement(FaReact),
    date: "Oct 2022 - Nov 2023",
  },
  {
    title: "Front end developer",
    location: "Rohtas Marketing pvt limited, Islamabad",
    description:
      'As a Front-End Developer in my first professional role at Rohtas Marketing pvt limited, I specialized in creating sleek user interfaces using Tailwind CSS.Despite being in the early stages of my career, I quickly gained proficiency in integrating REST APIs for efficient data interaction within applications..',
    icon: React.createElement(FaReact),
    date: "March 2021 - Sept 2022",
  },
 

] as const;

export const projectsData = [
  {
    title: "Foodil",
    description:
      "Developed Foodil, an e-commerce site for Buyers, Sellers, and Guests. Implemented Buyer Flow for registration, browsing, cart, and orders. Sellers manage products. Admin oversees users, products, and orders. Utilized React.js, Tailwind CSS, HTML, and Redux for responsive design.",
    tags: ["React", "Next.js", "Graphql Apis", "Tailwind", "Typescript"],
    imageUrl: "/foodil.png",
  },
    {
    title: "Word Analytics",
    description:
      "Delivery management platform with driver assignment,map-based location selection, routing, order tracking, and driver/order details using React Leaflet maps.",
    tags: ["React", "Next.js", "Javascript", "Tailwind", "Redux tool kit"],
    imageUrl: "/",
  },
  {
    title: "Tracker",
    description:
      "A versatile time tracking system with admin, employee, and manager modules. Admin oversees user management, time tracking, document exchange, salary slip generation, and announcements.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux tool kit"],
    imageUrl: "/admintracker.png",
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "StoryBook",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Redux tool kit",
  "GraphQL",
  "Apollo Client",

] as const;
