"use client";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Homes() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Ademola ibukunoluwa | CodeWithHybiekay | Flutter Developer & Fullstack Engineer</title>
        <meta
          name="description"
          content="Hi, I'm Ademola ibukunoluwa, (Hybiekay) — Flutter Developer, Fullstack Engineer & Instructor. Learn coding, Flutter, and modern app development with tutorials and real-world projects."
        />
        <meta
          name="keywords"
          content="Flutter, Dart, Fullstack Developer, Portfolio, CodeWithHybiekay, Ibukunoluwa Ademola, Coding Tutorials"
        />
        <meta name="author" content="Ibukunoluwa Ademola" />
        <meta property="og:title" content="CodeWithHybiekay | Flutter Developer" />
        <meta
          property="og:description"
          content="Learn coding with Hybiekay — Flutter, Node.js, and more."
        />
        <meta property="og:url" content="https://ibukunoluwa.ademola.ng" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://ibukunoluwa.ademola.ng/preview.jpg" />
        <meta property="og:profile" content="https://www.linkedin.com/in/ademola-ibukunoluwa-572b77253" />
        <link rel="canonical" href="https://ibukunoluwa.ademola.ng" />

      </Head>
      <main className="bg-gray-900 text-white pb-28">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

        {/* Bottom Nav */}
        <nav className="fixed bottom-4 inset-x-0 z-50 flex justify-center">
          <div className="bg-gray-800/80 backdrop-blur-md border border-gray-700 px-4 py-2 rounded-full flex gap-4 shadow-xl">
            <NavLink
              href="#hero"
              label="Home"
              icon={<Home size={20} />}
              isActive={activeSection === "hero"}
            />
            <NavLink
              href="#about"
              label="About"
              icon={<User size={20} />}
              isActive={activeSection === "about"}
            />
            <NavLink
              href="#skills"
              label="Skills"
              icon={<Code size={20} />}
              isActive={activeSection === "skills"}
            />
            <NavLink
              href="#projects"
              label="Work"
              icon={<Briefcase size={20} />}
              isActive={activeSection === "projects"}
            />
            <NavLink
              href="#contact"
              label="Contact"
              icon={<Mail size={20} />}
              isActive={activeSection === "contact"}
            />
          </div>
        </nav>
      </main>
    </>
  );
}

function NavLink({
  href,
  icon,
  label,
  isActive,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}) {
  return (
    <motion.a
      href={href}
      className={`relative flex flex-col items-center justify-center px-3 py-2 transition-all rounded-full group ${isActive ? "text-white" : "text-gray-400 hover:text-white"
        }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {isActive && (
        <motion.span
          layoutId="activeGlow"
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full blur-sm opacity-40"
        />
      )}
      <span className="relative z-10">{icon}</span>
      <span className="text-[10px] mt-1 relative z-10">{label}</span>
    </motion.a>
  );
}
