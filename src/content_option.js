import image1 from "./assets/images/portfolio/Screenshot 2025-02-22 101259.png";
import image2 from "./assets/images/portfolio/Screenshot 2025-02-22 101625.png";
import image3 from "./assets/images/portfolio/Screenshot 2025-02-22 101746.png";
import image4 from "./assets/images/portfolio/Screenshot 2025-02-22 101817.png";
import image5 from "./assets/images/portfolio/Screenshot 2025-02-22 101908.png";
import image6 from "./assets/images/portfolio/Screenshot 2025-02-22 102022.png";
import image7 from "./assets/images/portfolio/Screenshot 2025-02-22 102042.png";
import image8 from "./assets/images/portfolio/Screenshot 2025-02-22 102154.png";
import image9 from "./assets/images/portfolio/Screenshot 2025-02-22 102208.png";
import image10 from "./assets/images/portfolio/Screenshot 2025-02-22 102647.png";
import image11 from "./assets/images/portfolio/Screenshot 2025-02-22 103454.png";
import image12 from "./assets/images/portfolio/project-ecom.jpg";
import image13 from "./assets/images/portfolio/project-erp.jpg";
import image14 from "./assets/images/portfolio/project-ml-summarizer.jpg";
import image15 from "./assets/images/portfolio/project-portfolio-builder.jpg";
import image16 from "./assets/images/portfolio/project-ticket-booking.jpg";



const logotext = "Nikhil Jayaprakash";
const meta = {
    title: "Nikhil JP",
    description: "hii",
};

const introdata = {
    title: "I’m Nikhil Jayaprakash",
    animated: {
        first: "Developer",
        second: "MCA Graduate",
        third: "Learning new technologies",
    },
    description: "Hiii I'm Nikhil Jayaprakash, This is my personal website",
    your_img_url: "https://images.unsplash.com/photo-1688763768172-517149891a20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
};

const dataabout = {
    title: "About Myself",
    aboutme: "Greetings! I'm Nikhil Jayaprakash, a dedicated professional hailing from Kerala. With a Bachelor's degree in Computer Applications (BCA) and prior experience as an Associate System Analyst at Envestnet Yodlee, I am currently pursuing my MCA. Throughout my journey, I have been involved in diverse projects, showcasing my passion for web development and a steadfast commitment to delivering outstanding outcomes. I am constantly eager to enhance my skill set and stay up-to-date with the latest advancements in the industry.",
};
const worktimeline = [{
        jobtitle: "Associate System Analyst",
        where: <a href="https://www.yodlee.com/" target="_blank" style={{ textDecoration: "none" }} rel="noopener noreferrer">Envestnet|Yodlee</a>,
        date: "2021-2022",
    },
    {
        jobtitle: "Junior Developer[Internship]",
        where: "ABARNA COLOURS",
        date: "2023",
    },
    
];

const academics = [{
    jobtitle: "Master of Computer Applications[MCA]",
    where: <a href="https://ceconline.edu/" target="_blank" style={{ textDecoration: "none" }} rel="noopener noreferrer">College of Engineering Chengannur[CEC]</a>,
    date: "2022-24",
},
{
    jobtitle: "Bachelor of Computer Applications[BCA]",
    where: <a href="https://www.naipunnyacollege.ac.in/" target="_blank" style={{ textDecoration: "none" }} rel="noopener noreferrer">Naipunnya School of Management[NSM]</a>,
    date: "2018-21",
},

];
//

const skills = [
    {
      name: "React",
      value: 90,
    },
    {
      name: "Node.js",
      value: 85,
    },
    {
      name: "JavaScript",
      value: 80,
    },
    {
      name: "Python",
      value: 60,
    },
    {
      name: "Flask",
      value: 55,
    },
    {
      name: "PHP",
      value: 75,
    },
    {
      name: "Git",
      value: 70,
    },
  ];
  
  
const services = [{
        title: "Fundamentals of Digital Marketing - Google Digital Garage",
        description: "provides a comprehensive understanding of key digital marketing concepts, strategies, and tools, empowering individuals to enhance their online marketing skills and drive business growth in the digital landscape",
    },
    {
        title: "Google Analytics Certification - Skillshop ",
        description: "Expertise in web analytics and gain insights into user behavior, website performance, and marketing effectiveness using Google Analytics.",
    },
    {
        title: "Cloud Computing - NPTEL - IIT Karagpur",
        description: "Certified in Cloud Computing by NPTEL - IIT Kharagpur, gaining expertise in the principles and practices of cloud computing technologies",
    },
    {
        title: "Database Management System - NPTEL - IIT Kharagpur",
        description: "DBMS - NPTEL - IIT Kharagpur: A comprehensive certification program offered by IIT Kharagpur through NPTEL, providing in-depth knowledge and practical skills in Database Management Systems (DBMS)",
    },
    {
        title: "Python+Android - RISS Technologies",
        description: "Gained a deep understanding of Python programming language and its application in building Android applications",
    },
    {
        title: "EF SET - EF Education First",
        description: "EF SET (EF Standard English Test) is a globally recognized English language certification that assesses an individual's proficiency in the English language",
    },
    {
        title: "EnglishScore Core Skills Test - British Council ",
        description: "EnglishScore Core Skills Test - British Council: Certified proficiency assessment for English language skills conducted by the British Council.",
    },
];

const dataportfolio = [
    {
        img: image14,
        description: "Text Summarizer - Generate abstract of any given content",
        link: "https://github.com/nikhilljpskj/Astray-TS",
    },
    {
        img: image16,
        description: "Bus Ticket Booking System",
        link: "https://github.com/nikhilljpskj/Wind-Ridge",
    },
    {
        img: image1,
        description: "Personal Portfolio Website",
        link: "https://nikhiljp.in/",
    },
    {
        img: image12,
        description: "E-Commerce Website",
        link: "https://github.com/nikhilljpskj/PSP-Ecom",
    },
    {
        img: image2,
        description: "Portfolio Website - II",
        link: "https://akhiljp.in/",
    },
    {
        img: image13,
        description: "ERP-Project Management System",
        link: "https://github.com/nikhilljpskj/Management-System",
    },
    {
        img: image8,
        description: "E-Commerce Website using Shopify",
        link: "http://sumitpeercollections.com/",
    },
    {
        img: image9,
        description: "Gym-based Website using WordPress",
        link: "http://fitnet.in/",
    },
    {
        img: image5,
        description: "3D Construction Scanning Website using React & Node.js",
        link: "https://real3dspacescan.com/",
    },
    {
        img: image3,
        description: "Sales Tracking & Patient Management System using PHP & HTML",
        link: "https://daya-life-science-red.vercel.app/",
    },
    {
        img: image6,
        description: "Hospital Management System with Website using React & Node.js",
        link: "https://cm-hospital.vercel.app/",
    },
    {
        img: image7,
        description: "Organization Website with Registration & CMS, Booking & Registration Management System using HTML, PHP & JavaScript",
        link: "https://keralacongress.org.in/",
    },
    {
        img: image4,
        description: "Website for a Technical Organization using React",
        link: "https://redeemer-eta.vercel.app/",
    },
    {
        img: image11,
        description: "Website for a Startup using React & Tailwind",
        link: "https://www.falkenridge.com/",
    },
    {
        img: image10, // Change this to an actual image
        description: "Newsletter Creating AI-based Application using React, Node & TypeScript",
        link: "https://4bcd92bd-af2b-4fee-91ae-c4bc510c5c9a-00-1hg8tno2vh4s1.pike.replit.dev/",
    },
];

const contactConfig = {
    YOUR_EMAIL: "nikhiljp.skj@gmail.com",
    YOUR_FONE: <a href="tel:89216 52221">(+91)89216 52221</a>,
    description: "Please feel free to reach out to me through the provided contact form or via given mail.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_0gokyc9",
    YOUR_TEMPLATE_ID: "template_xg4ofcq",
    YOUR_USER_ID: "sw3m_njKZmzIJcI6B",
};

const socialprofils = {
    github: "https://github.com/nikhilljpskj",
    facebook: "https://www.facebook.com/nikhil.kodumon",
    linkedin: "https://www.linkedin.com/in/nikhil-prakash-069ab0171/",
    twitter: "https://twitter.com/nikhiljp6?t=LooC615CePucbi_3naY66g&s=09",
    whatsapp: "https://wa.me/918921652221?Hey!",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    academics,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};