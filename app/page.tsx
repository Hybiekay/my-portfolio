"use client"
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { div } from "framer-motion/client";
import { Home, User, Code, Briefcase, Mail } from "lucide-react";
import { useState, useEffect } from "react";

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

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
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
    <main className="bg-gray-900 text-white pb-20">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      {/* Bottom Navigation */}
      <nav className="fixed bottom-4 left-0 right-0 mx-auto max-w-md px-4 z-50">
        <div className="bg-gray-800/80 backdrop-blur-lg rounded-full p-2 shadow-lg border border-gray-700">
          <div className="flex justify-around items-center">
            <NavLink
              href="#hero"
              icon={<Home size={20} />}
              label="Home"
              isActive={activeSection === "hero"}
            />
            <NavLink
              href="#about"
              icon={<User size={20} />}
              label="About"
              isActive={activeSection === "about"}
            />
            <NavLink
              href="#skills"
              icon={<Code size={20} />}
              label="Skills"
              isActive={activeSection === "skills"}
            />
            <NavLink
              href="#projects"
              icon={<Briefcase size={20} />}
              label="Work"
              isActive={activeSection === "projects"}
            />
            <NavLink
              href="#contact"
              icon={<Mail size={20} />}
              label="Contact"
              isActive={activeSection === "contact"}
            />
          </div>
        </div>
      </nav>
    </main>
  );
}

function NavLink({
  href,
  icon,
  label,
  isActive
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}) {
  return (
    <div className={`${isActive && "bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full"}`}>
      <a
        href={href}
        className={`flex flex-col items-center p-3 rounded-full transition-all group relative overflow-hidden ${isActive ? "text-white" : "text-gray-300 hover:text-white"
          }`}
      >
        {isActive && (
          <span className="  bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 rounded-full" />
        )}
        <span className={`relative z-10 ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
          {icon}
        </span>
        <span className={`text-xs mt-1 relative z-10 ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
          {label}
        </span>
      </a>
    </div>
  );
}