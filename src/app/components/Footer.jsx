"use client";
import React from "react";
import Icons from "./Icons";
import { faReact, faFigma } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer
      className="relative w-full mt-20"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        backgroundColor: "rgba(12,12,14,0.95)",
      }}
    >
      <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row justify-between items-center gap-6">

        {/* Izquierda */}
        <div className="flex flex-col items-center lg:items-start gap-2">
          <span
            className="font-bold font-['Geist']"
            style={{ fontSize: "24px", letterSpacing: "-1px", color: "#f0f0f0" }}
          >
            Brayan Albadam
          </span>
          <div
            className="text-sm font-normal font-['Geist'] flex items-center gap-3"
            style={{ color: "#666666" }}
          >
            <span>{t("disenado")}</span>
            <a
              href="https://www.figma.com/file/JkM0L29FITCtiedxzpqkxB/Portafolio-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FontAwesomeIcon
                icon={faFigma}
                className="transition-transform duration-300 group-hover:scale-125 group-hover:text-[#FFD700]"
                 style={{ fontSize: '24px', color: 'rgba(76,181,245,0.4)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#4CB5F5'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(76,181,245,0.4)'}
              />
            </a>
            <span>{t("desarrollado")}</span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FontAwesomeIcon
                icon={faReact}
                className="transition-transform duration-300 group-hover:scale-125 group-hover:text-[#FFD700]"
                 style={{ fontSize: '24px', color: 'rgba(76,181,245,0.4)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#4CB5F5'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(76,181,245,0.4)'}
          />
            </a>
          </div>
          <span className="text-xs font-['Geist']" style={{ color: "#444444" }}>
            © {new Date().getFullYear()} — {t("derechos")}
          </span>
        </div>

        <div className="flex justify-center items-center gap-4">
          <Icons />
        </div>

      </div>
    </footer>
  );
};

export default Footer;