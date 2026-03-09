"use client";
import React from "react";
import Icons from "./Icons";
import { faReact, faFigma } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="relative w-full mt-20 bg-[#F8F9FC]">
      <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row justify-between items-center gap-6">

        {/* Izquierda */}
        <div className="flex flex-col items-center lg:items-start gap-2">
          <span
            className="text-[#083040] font-bold font-['Geist']"
            style={{ fontSize: '24px', letterSpacing: '-1px' }}
          >
            Brayan Albadam
          </span>
          <div className="text-[#083040] text-sm font-normal font-['Geist'] flex items-center gap-3">
            <span>Diseñado en</span>
            <a
              href="https://www.figma.com/file/JkM0L29FITCtiedxzpqkxB/Portafolio-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FontAwesomeIcon
                icon={faFigma}
                className="text-[#083040] transition-transform duration-300 group-hover:scale-125 group-hover:text-[#FFD700]"
                style={{ fontSize: '22px' }}
              />
            </a>
            <span>Desarrollado en</span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FontAwesomeIcon
                icon={faReact}
                className="text-[#083040] transition-transform duration-300 group-hover:scale-125 group-hover:text-[#FFD700]"
                style={{ fontSize: '22px' }}
              />
            </a>
          </div>
          <span className="text-gray-400 text-xs font-['Geist']">
            © {new Date().getFullYear()} — Todos los derechos reservados
          </span>
        </div>

        {/* Derecha - Redes */}
        <div className="flex justify-center items-center gap-4">
          <Icons />
        </div>

      </div>
    </footer>
  );
};

export default Footer;