"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("Proyectos");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#Proyectos";
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkClass = (href) =>
    `px-4 py-2 rounded-2xl text-[#083040] font-medium transition-colors duration-200 ${
      pathname === href ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"
    }`;

  return (
    <nav
      className="menu mt-0 sticky top-0 z-50 p-4"
      style={{
       backgroundColor: "rgba(251, 251, 251, 0.85)", 
      backdropFilter: "blur(12px)",
       WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                className="h-12 w-16"
                src="/Logos/Logo.svg"
                alt="Logo"
                width={64} // Valor más realista para h-12 w-16
                height={48}
              />
            </Link>
          </div>

          {/* Links desktop */}
          <div className="hidden lg:flex justify-center items-center space-x-2 ml-60 font-['Geist']">
            <Link href="/" className={linkClass("/")}>
              Inicio
            </Link>

            <button
              className="px-4 py-2 rounded-2xl text-[#083040] font-medium hover:bg-[#F2F2F2] transition-colors duration-200"
              onClick={scrollToProjects}
            >
              Proyectos
            </button>

            <Link href="/acerca" className={linkClass("/acerca")}>
              Acerca de mi
            </Link>
          </div>

          {/* Botones desktop */}
          <div className="hidden lg:flex ml-6 space-x-4 font-['Geist']">
            <a 
              href="mailto:brayanalbadam@gmail.com"
              className="flex items-center justify-center text-white bg-[#323332] px-4 py-2 text-sm font-semibold w-[110px] h-10 rounded-3xl"
            >
              Contacto
            </a>

            {/* ERROR CORREGIDO AQUÍ: Se añadió la etiqueta <a> de apertura */}
            <a
              href="https://drive.google.com/file/d/1OyqOQWaFNqTk0MlQ5NlPZFLWZciZO3px/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-cyan-500 bg-[#083040] px-4 py-2 text-sm font-semibold w-36 h-10 rounded-3xl"
            >
              Descargar CV
            </a>
          </div>

          {/* Hamburguesa mobile */}
          <div className="lg:hidden ml-6">
            <button
              className="text-[#083040] hover:text-cyan-500"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Menú mobile */}
        {menuOpen && (
          <div className="block lg:hidden mt-2 font-['Geist']">
            <Link
              href="/"
              className={`block mt-2 px-4 py-2 rounded-2xl ${
                pathname === "/" ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"
              } text-[#083040]`}
            >
              Inicio
            </Link>

            <button
              onClick={scrollToProjects}
              className="block mt-2 px-4 py-2 rounded-2xl text-[#083040] hover:bg-[#F2F2F2] w-full text-left"
            >
              Proyectos
            </button>

            <Link
              href="/acerca"
              className={`block mt-2 px-4 py-2 rounded-2xl ${
                pathname === "/acerca" ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"
              } text-[#083040]`}
            >
              Acerca de mi
            </Link>

            <a 
              href="mailto:brayanalbadam@gmail.com" 
              className="flex items-center justify-center mt-2 text-white bg-[#323332] px-4 py-2 text-sm font-semibold w-full h-10 rounded-3xl"
            >
              Contacto
            </a>

          
            <a
              href="https://drive.google.com/file/d/1OyqOQWaFNqTk0MlQ5NlPZFLWZciZO3px/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mt-2 text-cyan-500 bg-[#083040] px-4 py-2 text-sm font-semibold w-full h-10 rounded-3xl"
            >
              Descargar CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}