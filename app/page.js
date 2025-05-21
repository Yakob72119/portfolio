'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Typewriter from 'typewriter-effect';
import { AnimatePresence, motion, LazyMotion, domAnimation } from 'framer-motion'
import BackToTopButton from './../components/BackToButton'; // adjust the path if different
import { useTheme } from 'next-themes'
import { Sun,Moon,ArrowRight,Download,Github,Linkedin,X,Mail,Instagram,Send,Server, Database, Settings2, MessageCircle, Phone, ChevronDown, MapPin} from 'lucide-react';
import { ArrowRight as  ArrowRighttabler } from 'tabler-icons-react';

export default function HomePage() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navItems = ['Home', 'Skills', 'Resume', 'Projects', 'Contact'];

    useEffect(() => {
    setMounted(true)
  }, [])



useEffect(() => {
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => observer.observe(section));
  return () => sections.forEach((section) => observer.unobserve(section));
}, []);


function SocialIcon({ href, color, children }) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:scale-110 transition"
        style={{
          boxShadow: `0 0 10px ${color}`,
        }}
      >
        {children}
      </a>
    );
}

const skills = [
  {
    category: "Backend Development Using",
    icon: <Server size={32} />,
    items: [
      { name: "Node.js", icon: "/experties/node-js-svgrepo-com.svg" },
      { name: "ASP.NET", icon: "/experties/aspnet-svgrepo-com.svg" },
    ],
  },
  {
    category: "Database",
    icon: <Database size={32} />,
    items: [
      { name: "MongoDB", icon: "/experties/mongo-svgrepo-com.svg" },
      { name: "PostgreSQL", icon: "/experties/postgresql-svgrepo-com.svg" },
    ],
  },
  {
    category: "DevOps & Automation",
    icon: <Settings2 size={32} />,
    items: [
      { name: "Docker", icon: "/experties/docker-svgrepo-com.svg" },
      { name: "CI/CD", icon: "/experties/ci-cd-svgrepo-com.svg" },
    ],
  },
];

const techStack = [
  { name: "Next.js", icon: "/experties/nextjs-svgrepo-com.svg" },
  { name: "RESTful APIs", icon: "/experties/rest-api-svgrepo-com.svg" },
  { name: "PostgreSQL", icon: "/experties/postgresql-svgrepo-com.svg" },
  { name: "MongoDB", icon: "/experties/mongo-svgrepo-com.svg" },
  { name: "Docker", icon: "/experties/docker-svgrepo-com.svg" },
  { name: "CI/CD", icon: "/experties/ci-cd-svgrepo-com.svg" },
  { name: "Java", icon: "/experties/java-svgrepo-com.svg" },
  { name: "C#", icon: "/experties/csharp-svgrepo-com.svg" },
  { name: "Tailwind CSS", icon: "/experties/tailwind-svgrepo-com.svg" },
  { name: "Express.js", icon: "/experties/express-svgrepo-com.svg" },
];


const experiences = [
  {
    date: "October 2024 - Present",
    title: "Full-stack Developer",
    location: "Nile Technology Solution, Addis Ababa, Ethiopia",
    description: [
      "Oversee and lead the project development team to ensure timely delivery of software solutions.",
      "Design, develop, and maintain various internal and external projects.",
      "Recommended and consulted with clients including regional government institutions and private companies.",
      "Developed business proposals and pitched ideas to investors and company CEOs."
    ],
    side: "left",
    emoji: "💼"
  },
  {
    date: "August 2024 - Present",
    title: "Full-Stack Developer",
    location: "NDS Trading Opportunity Hub, Jigjiga, Ethiopia",
    description: [
      "Designed and developed the company web app, including a payment system and real-time chat functionality.",
      "Worked closely with the regional government and Jigjiga University to improve data storage practices and digitize manual processes."
    ],
    side: "right",
    emoji: "🧠"
  },
  {
    date: "February 2024 - June 2024",
    title: "Software Engineering Intern",
    location: "Harari People Regional State Innovation and Technology Agency",
    description: [
      "Collaborated with the development team to oversee and contribute to various software projects (Private and Regional government institutions).",
      "Gathered and analyzed requirements to design, develop, and maintain internal and external systems.",
      "Worked closely with stakeholders, including regional government institutions, to align projects with their operational needs."
    ],
    side: "left",
    emoji: "🛠️"
  },
  {
    date: "July 2024 - Present",
    title: "Co-Founder & Lead Developer",
    location: "Erasen Lewas (Self-Initiated Project)",
    description: [
      "Designed the entire system architecture, handling full backend development and contributing to one-third of the frontend.",
      "Integrated Chapa as a secure payment gateway, allowing students to purchase high-quality exam materials at an affordable price.",
      "Established a teacher onboarding process, where educators submit their CVs for review by the platform's staff before being approved to sell content.",
      "Led staff organization and operational management, ensuring seamless coordination between teachers, students, and the platform."
    ],
    side: "right",
    emoji: "🚀"
  },
  {
    date: "January 2022 - January 2023",
    title: "Freelance Web Developer",
    location: "Self-Employed",
    description: [
      "Designed and developed multiple business websites for vendors, enhancing their online presence and customer engagement.",
      "Recommended and consulted with clients in how to enhance their digital presence."
    ],
    side: "left",
    emoji: "🌐"
  }
];

const education = [
  {
    date: "September 2020 - July 2024",
    title: "Bachelor Degree",
    location: "Collage of Computing and Informatics, Department of Software Engineering, Haramaya University, Harar, Ethiopia",
    description: [
      "CGPA: 3.78",
      "Exit: 70"
    ],
    side: "left",
    emoji: "🎓"
  },
  {
    date: "October 2024 - Present",
    title: "Volunteer Student Coordinator & Tutor",
    location: "Haramaya University, Harar Campus",
    description: [
      "Provided tutoring sessions, empowering 20+ students, many of whom successes in the exit exam.",
      "Organized and facilitated study sessions, ensuring a structured and effective learning experience.",
      "Opened a Telegram group called \"Code Chat\" to foster peer-to-peer learning and discussions on software engineering topics.",
      "Gained valuable experience in event coordination, mentorship, and community engagement."
    ],
    side: "right",
    emoji: "🤝"
  }
];



const [activeTab, setActiveTab] = useState("experience");
const renderCards = (data) => {
  return data.map((item, index) => {
    const isLeft = item.side === "left";

    return (
      <motion.div
        key={index}
        className={`relative w-full flex ${isLeft ? "justify-start" : "justify-end"} py-6 group`}
        initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Desktop side info */}
        {!isLeft && (
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[220px] -ml-[130px] hidden md:block z-10 text-right">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">📅 {item.date}</p>
            <h4 className="text-base font-semibold text-black dark:text-white leading-tight">{item.emoji} {item.title}</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">📍 {item.location}</p>
          </div>
        )}

        {/* Glowing Card */}
        <div
          className={`relative bg-gray-100 dark:bg-[#0a132b] text-black dark:text-white shadow-md rounded-lg p-6 w-[300px] md:w-[440px] transition-all duration-300 hover:shadow-blue-500/40 dark:hover:shadow-blue-500/40 hover:shadow-2xl border border-gray-300 dark:border-white/10 z-10
            ${isLeft ? "mr-[25px]" : "ml-[25px]"}`}
        >
          {/* Glow layer */}
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 z-[-1]" />

          {/* Timeline dot */}
          <div className={`absolute top-3 ${isLeft ? "right-[-25px]" : "left-[-25px]"} w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600`} />

          {/* Mobile side info */}
          <div className="md:hidden mb-4 space-y-1">
            <p className="text-xs text-gray-600 dark:text-gray-400">📅 {item.date}</p>
            <h4 className="text-base font-semibold text-black dark:text-white leading-tight">{item.emoji} {item.title}</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">📍 {item.location}</p>
          </div>

          {/* Description bullet points */}
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-3 text-justify">
            {item.description.map((point, i) => (
              <li
                key={i}
                className="before:content-['•'] before:text-transparent before:bg-clip-text before:bg-gradient-to-r before:from-blue-600 before:to-purple-600 before:mr-2 before:text-xl before:align-middle"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop side info for left-aligned cards */}
        {isLeft && (
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[220px] ml-[130px] hidden md:block z-10 text-left">
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">📅 {item.date}</p>
            <h4 className="text-base font-semibold text-black dark:text-white leading-tight">{item.emoji} {item.title}</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400">📍 {item.location}</p>
          </div>
        )}
      </motion.div>
    );
  });
};


                           {/*  project section */}
 const filters = ['All', 'Web Development', 'Mobile Application'];

const projects = [
  {
    title: 'Erasen Lewaq',
    type: 'Web App',
    description: 'It is  is an advanced and streamlined web application designed to assist students in efficiently preparing for their exit exams. It offers a complete assessment system featuring practice tests, performance analytics, and personalized feedback to help users identify strengths and areas for improvement.',
    image: '/erasenlewaq.png',
    category: 'Web Development',
    link: 'https://github.com/Yakob72119/Erasen-Lewaq',
    badge: 'Systtem design and Backend',
    client: 'Open source',
    technologies: ['React',' Node.js', 'SCSS','MongoDB'],
  },
  {
    title: 'Beqalalu tele',
    type: 'Mobile',
    description: 'It is a modern mobile application that transforms traditional USSD-based telecom services into a seamless, user-friendly app experience. It integrates core features like balance checks, airtime transfers, data purchases, and service subscriptions—making telecom tasks faster, easier, and more accessible for users.',
    image: '/beqalalu.jpg',
    category: 'Mobile Application',
    link: 'https://github.com/Lintu94/Project',
    badge: 'Mobile',
    client: 'Open Source',
    technologies: ['Java'],
  },
  {
    title: 'Nds',
    type: 'web App',
    description: 'It is a dynamic web application built for a company to showcase its services and connect with users in real-time. It features a built-in live chat system, Chapa payment integration for seamless donations, and a comprehensive admin dashboard for managing users, content, and analytics. The platform is designed for both engagement and operational efficiency.',
    image: '/nds.jpg',
    category: 'Web Development',
    link: 'https://github.com/Yakob72119/Nds_Project',
    badge: 'Full Stack',
    client: 'Open Source',
    technologies: ['React ',' Node.js','MongoDB','Tailwind'],
  },
   {
    title: 'My Health App',
    type: 'Mobile App',
    description: 'It is an Android-based first aid guidance system designed to provide life-saving support in emergency situations. It offers a rich set of features including educational videos, detailed descriptions in two languages, and a map-based system to locate the nearest hospitals. The app can automatically send your location to selected individuals or pre-registered clinics, and it also includes a section that debunks common first aid myths with verified truths, promoting accurate response practices.',
    image: '/android.jpg',
    category: 'Mobile Application',
    link: 'https://github.com/Lintu94/Project',
    badge: 'Mobile',
    client: 'Open Source',
    technologies: ['Java', 'Android Studio', 'Firebase'],
  },
     {
    title: 'Hinta Attendance',
    type: 'Web App',
    description: 'It is a local network-based web application designed to streamline workplace attendance tracking. It features online attendance logging, an automated report generator, and a salary reduction calculator based on employee presence. The system also flags late comers by monitoring sign-in times, making it a powerful tool for improving punctuality and managing workforce efficiency.',
    image: '/harar.jpg',
    category: 'Web Development',
    link: '#',
    badge: 'Full Stack',
    client: 'Private Client',
    technologies: ['React Native', 'Firebase', 'Expo', 'Tailwind'],
  },
  // Add more projects here...
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  hover: { scale: 1.05, boxShadow: '0 8px 20px rgba(0,0,0,0.12)' },
};

const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);



                                {/** contact */}

      const form = useRef();
      const [loading, setLoading] = useState(false);
      const [done, setDone] = useState(false);
    
      const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
    
        emailjs
          .sendForm(
            'service_8rf7vmn',       // 🔁 Replace with your actual service ID
            'template_wdqcivt',      // 🔁 Replace with your template ID
            form.current,
            'Y1jui-a0gMx7cyw66'        // 🔁 Replace with your public key
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true);
              setLoading(false);
              form.current.reset();
            },
            (error) => {
              console.error(error.text);
              setLoading(false);
            }
          );
      };
      



  return (
  
    <div className="scroll-smooth font-sans bg-gradient-to-br from-white to-blue-50 dark:from-black dark:to-gray-900 min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <LazyMotion features={domAnimation}>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/20 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image src="/nl.png" alt="Logo" width={60} height={60} className="rounded-full" />
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                Portfolio
              </h1>
            </div>

            {/* Nav Links (Desktop) */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const sectionId = item.toLowerCase()
                return (
                  <a
                    key={item}
                    href={`#${sectionId}`}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      activeSection === sectionId
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                  >
                    {item}
                  </a>
                )
              })}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center gap-4">
              {/* Dark Mode Toggle (Desktop Only) */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="hidden md:inline-flex p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                  aria-label="Toggle dark mode"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={theme}
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {theme === 'dark' ? (
                        <Sun className="w-5 h-5 text-gray-300" />
                      ) : (
                        <Moon className="w-5 h-5 text-gray-700" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6 text-gray-700 dark:text-gray-300"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-16 px-4 py-4 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-lg z-40 relative">
          <div className="space-y-2">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase()
              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    activeSection === sectionId
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item}
                </a>
              )
            })}

            {/* Dark Mode Toggle Button in Mobile Menu */}
            {mounted && (
              <button
                onClick={() => {
                  setTheme(theme === 'dark' ? 'light' : 'dark')
                  setMenuOpen(false)
                }}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={theme}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </motion.div>
                </AnimatePresence>
                {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </button>
            )}
          </div>
        </div>
      )}
    </LazyMotion>





                                                {/** HOME SECTION */}
       <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-24 pt-32 pb-20"
    >
        {/* Animated Background Blob */}
        <div className="absolute top-0 left-[-100px] w-[400px] h-[400px] bg-gradient-to-tr from-purple-400 to-blue-500 rounded-full opacity-30 blur-3xl animate-[pulse_3s_ease-in-out_infinite] z-0" />

      {/* Avatar Image */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-shrink-0 mb-12 md:mb-0 md:mr-36 md:pl-40"
      >
        <div className="w-56 h-56 rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 p-[3px] shadow-lg hover:scale-105 transition-transform duration-300">
          <div className="w-full h-full rounded-full overflow-hidden bg-black dark:bg-white">
            <Image
              src="/profile.JPG"
              alt="Profile"
              width={224}
              height={224}
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Text Info */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-xl w-full md:pr-8 text-center md:text-left"
      >
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
          👋 Hello, I&apos;m
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-black dark:text-white">
          Yakob{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Beshahwered
          </span>
        </h1>
        <h2 className="text-2xl text-gray-700 dark:text-gray-300 mt-2">
          Full Stack Developer
        </h2>
     <div className="text-gray-600 dark:text-gray-400 mt-4 text-lg">
  I specialize in building robust, scalable, and accessible back-end software solutions.{" "}
  <span className="inline text-blue-600 dark:text-blue-400 font-semibold">
    <Typewriter
      options={{
        strings: [
          "Next.js",
          "RESTful APIs",
          "PostgreSQL",
          "MongoDB",
          "Docker",
          "CI/CD",
          "Java",
          "C#",
          "Tailwind CSS",
          "Express.js",
        ],
        autoStart: true,
        loop: true,
        delay: 50,
        deleteSpeed: 30,
        pauseFor: 1200,
        cursor: "|",
      }}
    />
  </span>
</div>


        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap items-center gap-4 mt-6"
        >
          <a
            href="#contact"
            className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-md flex items-center gap-2 hover:opacity-80 transition"
          >
            Contact Me <ArrowRight size={16} />
          </a>
          <a
            href="/Yakob_Beshahwered_CV.pdf"
            download
            className="bg-white text-black dark:bg-black dark:text-white border border-gray-300 dark:border-gray-700 px-5 py-2 rounded-md flex items-center gap-2 hover:opacity-80 transition"
          >
            Download CV <Download size={16} />
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-4 mt-6 justify-center md:justify-start"
        >
          <SocialIcon href="https://github.com/Yakob72119" color="rgba(59,130,246,0.6)">
            <Github className="w-5 h-5 text-black dark:text-white" />
          </SocialIcon>
          <SocialIcon href="https://www.instagram.com/yakobesha" color="rgba(225,48,108,0.6)">
            <Instagram className="w-5 h-5 text-black dark:text-white" />
          </SocialIcon>
          <SocialIcon href="https://t.me/beshahyakob51" color="rgba(0,136,204,0.6)">
            <Send className="w-5 h-5 text-black dark:text-white" />
          </SocialIcon>
          <SocialIcon href="https://linkedin.com/in/yakobesha" color="rgba(10,102,194,0.6)">
            <Linkedin className="w-5 h-5 text-black dark:text-white" />
          </SocialIcon>
          <SocialIcon href="https://twitter.com/yakobesha" color="rgba(29,161,242,0.6)">
            <X className="w-5 h-5 text-black dark:text-white" />
          </SocialIcon>
        </motion.div>
      </motion.div>

       {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 hidden md:block animate-bounce z-10">
        <ChevronDown className="w-6 h-6 text-blue-500 mx-auto" />
      </div> 
    </section>

 
 
                         {/* Skills Section */}
<section
  id="skills"
  className="py-20 px-4 bg-white dark:bg-black scroll-mt-20 relative overflow-hidden"
>
  <div className="relative z-10 max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-14">
      <p className="inline-block px-3 py-1 bg-blue-600/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 rounded-full text-sm tracking-widest font-semibold">
        MY EXPERTISE
      </p>
      <h2 className="text-4xl font-bold mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
        Technical Skills
      </h2>
    </div>

    {/* Skill Categories */}
    <div className="grid md:grid-cols-3 gap-8">
      {skills.map((group, i) => (
        <div
          key={i}
          className="bg-gray-100 dark:bg-[#0a132b] border border-gray-300 dark:border-white/10 rounded-2xl p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:shadow-blue-500/20 dark:hover:shadow-blue-500/20 hover:-translate-y-1"
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="bg-blue-600/10 p-3 rounded-full border border-blue-500/30">
              {group.icon}
            </div>
            <h3 className="text-xl font-semibold text-black dark:text-white">{group.category}</h3>
          </div>

          <ul className="space-y-4">
            {group.items.map((item, j) => (
              <li key={j} className="flex items-center gap-3">
                <Image src={item.icon} alt={item.name} width={28} height={28} />
                <span className="text-base text-gray-700 dark:text-gray-300">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* Tech Stack Highlights */}
    <div className="mt-20">
      <h3 className="text-2xl font-semibold text-center text-black dark:text-white mb-8">
        Tech Stack Highlights
      </h3>
      <div className="flex flex-wrap justify-center gap-4">
        {techStack.map((tech, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-[#0a132b] border border-gray-300 dark:border-white/10 backdrop-blur-md rounded-xl shadow-md p-4 w-28 sm:w-32 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-blue-500/20 dark:hover:shadow-blue-500/20"
          >
            <Image src={tech.icon} alt={tech.name} width={32} height={32} />
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center mt-2">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Call-to-Action Button */}
    <div className="mt-16 text-center">
      <a
        href="#contact"
        className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold px-8 py-3 rounded-full shadow-xl hover:scale-105 transition-transform duration-300"
      >
        <MessageCircle size={24} className="mr-2" />
        Let&apos;s Discuss Your Project
      </a>
    </div>
  </div>
</section>



      {/* Resume Section */}


      <section id="resume"
      className="bg-white dark:bg-black">
  <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 py-16 md:px-8">
    {/* Header */}
    <div className="text-center mb-12">

      <h2 className="text-center text-3xl font-bold mb-12">
      <span className="px-3 py-1 bg-blue-600/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 rounded-full text-sm tracking-widest">
      My Journey
      </span>
      <br />
      <span className="text-4xl mt-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
      Resume
      </span>
    </h2>

      {/* Tab Buttons */}
      <div className="mt-6 flex justify-center gap-4 flex-wrap">
        <button
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition duration-300 ${
            activeTab === "experience"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-black dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Work Experience
        </button>
        <button
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition duration-300 ${
            activeTab === "education"
              ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:text-black dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
          }`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
      </div>
    </div>

    {/* Timeline */}
    <div className="relative max-w-4xl mx-auto">
      {/* Center Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600 opacity-30" />

      {/* Cards */}
      <div className="relative flex flex-col gap-12 z-10">
        {activeTab === "experience"
          ? renderCards(experiences)
          : renderCards(education)}
      </div>
    </div>
  </div>
  {/* Download CV CTA */}
{/* Resume CTA Section */}
<section className="bg-white dark:bg-black py-12 px-4">
  <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
    <div>
      <h3 className="text-white text-xl md:text-2xl font-bold">
        Want the full <span className="text-white/90 italic">résumé</span>?
      </h3>
      <p className="text-white/80 text-sm md:text-base mt-1">
        Download my detailed CV for a complete overview of my experience.
      </p>
    </div>
    <a
      href="/Yakob_Beshahwered_CV.pdf"
      download
      className="bg-white text-blue-600 hover:text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:shadow-lg transition-all duration-300 inline-flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v6m0 0l-3-3m3 3l3-3m0-5a4 4 0 10-8 0 4 4 0 008 0z"
        />
      </svg>
      Download CV
    </a>
  </div>
</section>

</section>



      {/** project section */}
  <section
      id="projects"
      className="py-20 px-4 bg-white dark:bg-black scroll-mt-20 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <h2 className="text-center text-3xl font-bold mb-12">
          <span className="px-3 py-1 bg-blue-600/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 rounded-full text-sm tracking-widest">
            MY WORK
          </span>
          <br />
          <span className="text-4xl mt-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Latest Project
          </span>
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {filters.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 backdrop-blur-lg border border-gray-300 dark:border-white/10 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md shadow-blue-500/30'
                  : 'bg-gray-200 text-gray-800 hover:text-black hover:border-blue-600/40 dark:bg-[#0a132b] dark:text-gray-400 dark:hover:text-white dark:hover:border-blue-600/40'
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category === 'Mobile Application' ? 'Mobile Apps' : category}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeFilter}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title + index}
                className="bg-gray-100 dark:bg-[#0a132b] rounded-xl overflow-hidden border border-gray-300 dark:border-white/10 backdrop-blur-lg transition-all duration-300 relative group cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
                whileHover="hover"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-lg z-0" />

                <div className="relative z-10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-52 object-cover rounded-t-xl"
                  />
                  <div className="p-5 text-left">
                    <h3 className="text-xl font-semibold mb-2 text-black dark:text-white flex items-center justify-between">
                      {project.title}
                      <span className="px-2 py-1 bg-purple-600/80 text-xs rounded-full">
                        {project.badge}
                      </span>
                    </h3>
                    <p className="text-sm text-gray-700 dark:text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 hover:underline"
                    >
                      View Details <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal Popup */}
    {selectedProject && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 overflow-y-auto">
    <div className="bg-white dark:bg-[#0a132b] p-6 rounded-lg shadow-xl w-[90%] max-w-xl relative max-h-[90vh] overflow-y-auto">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
        onClick={() => setSelectedProject(null)}
      >
        ✕
      </button>
      <Image
        src={selectedProject.image}
        alt={selectedProject.title}
        width={800}
        height={288}
        className="w-full h-72 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-bold mb-2 text-black dark:text-white">
        {selectedProject.title}
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">{selectedProject.description}</p>
      <p className="text-sm text-gray-600 dark:text-gray-500 mb-1">
        <strong>Category:</strong> {selectedProject.category}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-500 mb-4">
        <strong>Badge:</strong> {selectedProject.badge}
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {selectedProject.technologies.map((tech, i) => (
          <span
            key={i}
            className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-end">
        {selectedProject.client === 'Private Client' ? (
          <span className="text-sm text-gray-500 italic">Private Project</span>
        ) : (
          <a
            href={selectedProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
          >
            <Github size={18} /> View on GitHub
          </a>
        )}
      </div>
    </div>
  </div>
)}

    </section>

        {/* Contact Section */} 

<section id="contact"
  className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 py-20">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
    <div className="text-center mb-16">

<h2 className="text-center text-3xl font-bold mb-12">
  <span className="px-3 py-1 bg-blue-600/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 rounded-full text-sm tracking-widest">
  Get In Touch
  </span>
  <br />
  <span className="text-4xl mt-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
  Contact Me
  </span>
</h2>

  <p className="text-gray-700 dark:text-gray-400 mt-4 text-lg">
    Have a project in mind or want to discuss potential opportunities?
    Let&apos;s build something amazing together.
  </p>
</div></div>

    <div className="grid md:grid-cols-[1fr_1.5fr] gap-10">
      {/* Left Info Panel */}
      <div className="bg-gray-100 dark:bg-[#0E1A33] rounded-2xl p-8 shadow-xl border border-gray-300 dark:border-blue-900 backdrop-blur-md space-y-6">
        <div>
          <h4 className="text-2xl font-semibold text-black dark:text-white mb-2">Location</h4>
          <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
            <MapPin size={20} /> <span>Addis Ababa, Ethiopia</span>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-black dark:text-white mb-2">Email</h4>
          <div className="flex items-center gap-3 text-blue-700 dark:text-blue-400">
            <Mail size={20} />
            <a href="mailto:beshayakob72119@gmail.com" className="hover:underline">beshayakob72119@gmail.com</a>
          </div>
        </div>

        <div>
          <h4 className="text-2xl font-semibold text-black dark:text-white mb-2">Follow Me</h4>
          <div className="flex gap-4 text-gray-700 dark:text-gray-400">
            <a href="https://github.com/Yakob72119" className="hover:text-black dark:hover:text-white transition-transform hover:scale-110"><Github size={22} /></a>
            <a href="https://linkedin.com/in/yakobesha" className="hover:text-black dark:hover:text-white transition-transform hover:scale-110"><Linkedin size={22} /></a>
            <a href="https://twitter.com/yakobesha" className="hover:text-black dark:hover:text-white transition-transform hover:scale-110"><X size={22} /></a>
            <a href="https://t.me/beshahyakob51" className="hover:text-black dark:hover:text-white transition-transform hover:scale-110"><Send size={22} /></a>
            <a href="https://www.instagram.com/yakobesha" className="hover:text-black dark:hover:text-white transition-transform hover:scale-110"><Instagram size={22} /></a>
          </div>
        </div>

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.16034697482!2d38.74415903718901!3d9.03010279647688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8533d701de75%3A0xb136b3d378d381b7!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1715766000000!5m2!1sen!2set"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-100 dark:bg-[#0E1A33] rounded-2xl p-8 shadow-xl border border-gray-300 dark:border-purple-900 backdrop-blur-md">
         <h4 className="text-2xl  font-semibold  mt-3 inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
     Send a message
        </h4>
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-[#1E293B] dark:text-white dark:placeholder-gray-500"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-[#1E293B] dark:text-white dark:placeholder-gray-500"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-[#1E293B] dark:text-white dark:placeholder-gray-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Your message..."
              rows={5}
              className="w-full p-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 dark:bg-[#1E293B] dark:text-white dark:placeholder-gray-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full text-center font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 text-white py-3 rounded-lg transition"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {done && (
            <p className="text-green-600 dark:text-green-400 text-sm mt-2">Message sent successfully ✅</p>
          )}
        </form>
      </div>
    </div>
  </div>
</section>
{/* Footer Section */}
<section className="bg-gradient-to-t from-gray-100 via-white to-gray-100 text-gray-700 dark:from-black dark:via-zinc-900 dark:to-black dark:text-gray-300 pt-16 pb-10 border-t border-blue-600/20 relative z-50 overflow-hidden">
  <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 blur-3xl opacity-30 animate-pulse">
    <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-600 via-purple-500 to-purple-500" />
  </div>

  <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">

    {/* Name / Brand */}
    <div className="text-center md:text-left animate-fade-in-up">
      <h2 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600  tracking-widest uppercase">
        Yakob Beshahwered
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 max-w-xs md:max-w-sm">
        Crafting clean, elegant, and performant web experiences for the future.
      </p>
    </div>

    {/* Social Icons */}
  {/* Social Icons */}
<div className="flex gap-6 animate-fade-in-up delay-200">
  {/* Telegram */}
  <a
    href="ttps://t.me/beshahyakob51"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white transition-transform duration-300 hover:scale-125"
    aria-label="Telegram"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M21.426 3.073a1.498 1.498 0 0 0-1.784-.3L3.652 10.796a1.5 1.5 0 0 0 .021 2.77l3.837 1.27 1.862 5.84a.75.75 0 0 0 1.337.202l2.16-3.141 3.984 2.958a1.5 1.5 0 0 0 2.45-1.425L22.478 4.74a1.502 1.502 0 0 0-1.05-1.668zM9.328 14.463l-.3-3.2 7.045-4.787-7.342 8.012z"/>
    </svg>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/yakobesha"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white transition-transform duration-300 hover:scale-125"
    aria-label="Instagram"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.38 2.12a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"/>
    </svg>
  </a>

  {/* Twitter */}
  <a
    href="https://twitter.com/yakobesha"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white transition-transform duration-300 hover:scale-125"
    aria-label="Twitter"
  >
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.98-2.48 9.14 9.14 0 0 1-2.91 1.11 4.52 4.52 0 0 0-7.69 4.13 12.84 12.84 0 0 1-9.32-4.73 4.52 4.52 0 0 0 1.4 6.05 4.44 4.44 0 0 1-2.05-.56v.06a4.51 4.51 0 0 0 3.63 4.42 4.49 4.49 0 0 1-2.04.08 4.52 4.52 0 0 0 4.21 3.15A9.07 9.07 0 0 1 2 18.59a12.83 12.83 0 0 0 6.95 2.04c8.35 0 12.92-6.92 12.92-12.92 0-.2 0-.41-.01-.61A9.22 9.22 0 0 0 23 3z"/>
    </svg>
  </a>
</div>
  </div>

  {/* Copyright */}

        <div className="relative mt-10 text-center text-xs text-gray-600 dark:text-gray-500 animate-fade-in-up delay-500">
          © 2025 Yakob Beshahwered. All rights reserved.
        </div>
  

  {/* Custom Animations */}
  <style jsx>{`
    @keyframes fade-in-up {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-in-up {
      animation: fade-in-up 0.8s ease-out both;
    }
    .delay-200 {
      animation-delay: 0.2s;
    }
    .delay-500 {
      animation-delay: 0.5s;
    }
  `}</style>
</section>
  <BackToTopButton />
    </div>
    
    
  );
}
