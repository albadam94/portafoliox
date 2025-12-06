import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="menu mt-0 sticky top-0 z-50 p-4 bg-[#FBFBFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex">
              <Image
                className="h-12 w-16"
                src="/Logos/Logo.svg"
                alt="Logo"
                width={20}
                height={20}
              />
            </Link>
          </div>

          {/* Links principales - solo en desktop */}
          <div
            className="
              bg-Darkcharcoal py-3 px-6 rounded-3xl font-['Geist']
              hidden lg:flex justify-center items-center 
              space-x-9 ml-60
            "
          >
            <Link href="/" className="hover:text-custom-teal">
              Inicio
            </Link>

            <button
              className="hover:text-custom-teal"
              onClick={scrollToProjects}
            >
              Proyectos
            </button>

            <Link href="/acerca" className="hover:text-custom-teal">
              Acerca de mi
            </Link>
          </div>

          {/* Botones de acción - solo en desktop */}
          <div className="hidden lg:flex ml-6 space-x-6">
            <a href="mailto:brayanalbadam@gmail.com">
              <button className="text-white bg-Darkcharcoal px-3 py-2 text-sm font-semibold font-['Geist'] w-[110px] h-10 rounded-3xl border">
                Contacto
              </button>
            </a>

            <a
              href="https://drive.google.com/file/d/1OyqOQWaFNqTk0MlQ5NlPZFLWZciZO3px/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-cyan-500 bg-Darkcharcoal px-3 py-2 text-sm font-semibold font-['Geist'] w-36 h-10 rounded-3xl border">
                Descargar CV
              </button>
            </a>
          </div>

          {/* Botón hamburguesa - mobile/tablet */}
          <div className="lg:hidden ml-6">
            <button
              className="text-Darkcharcoal hover:text-custom-teal"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} className="h-6 w-6 fill" />
            </button>
          </div>
        </div>

        {/* Menú móvil/tablet */}
        {menuOpen && (
          <div className="block lg:hidden mt-2">
            <Link
              href="/"
              className="text-Darkcharcoal block mt-2 hover:text-custom-teal"
            >
              Inicio
            </Link>

            <button
              onClick={scrollToProjects}
              className="text-Darkcharcoal block mt-2 hover:text-custom-teal"
            >
              Proyectos
            </button>

            <Link
              href="/acerca"
              className="text-Darkcharcoal block mt-2 hover:text-custom-teal"
            >
              Acerca de mi
            </Link>

            <a
              href="mailto:brayanalbadam@gmail.com"
              className="text-Darkcharcoal block mt-2 hover:text-custom-teal"
            >
              Contacto
            </a>

            <a
              href="https://drive.google.com/file/d/1OyqOQWaFNqTk0MlQ5NlPZFLWZciZO3px/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 block mt-2 hover:text-teal-400"
            >
              Descargar CV
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
