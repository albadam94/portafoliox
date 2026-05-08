"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

const getMobileImageUrl = (webUrl) => {
  return webUrl.replace("web.webp", "mobile.webp");
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

const ProjectCard = ({ proyecto, index, verProyecto }) => {
  const cardRef = useRef(null);
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  // Parallax muy suave — imagen tiene margen suficiente para no chocar
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  const imageUrl = isMobile
    ? getMobileImageUrl(proyecto.imageUrl)
    : proyecto.imageUrl;

  return (
    <div
      ref={cardRef}
      className="sticky top-0 overflow-hidden"
      style={{
        height: "100vh",
        width: "100vw",
        zIndex: index + 1,
        marginLeft: "calc(-50vw + 50%)",
      }}
    >
      {/* Imagen con margen generoso para absorber el parallax sin chocar */}
      <motion.div
        className="absolute inset-x-0 w-full"
        style={{
          y: imageY,
          height: "130%",
          top: "-15%",
        }}
      >
        <Image
          src={imageUrl}
          alt={proyecto.title}
          fill
          sizes="100vw"
          quality={90}
          className="object-cover"
          style={{ objectPosition: "center center" }}
          priority={index < 3}
        />
      </motion.div>

      {/* Gradiente izquierda — más oscuro en mobile para legibilidad */}
      <div
        className="absolute inset-0"
        style={{
          background: isMobile
            ? "linear-gradient(to right, rgba(8,9,11,0.98) 0%, rgba(8,9,11,0.95) 30%, rgba(8,9,11,0.80) 55%, rgba(8,9,11,0.50) 75%, rgba(8,9,11,0.20) 100%)"
            : [
                "linear-gradient(to right,",
                "  rgba(8,9,11,0.97) 0%,",
                "  rgba(8,9,11,0.90) 20%,",
                "  rgba(8,9,11,0.70) 38%,",
                "  rgba(8,9,11,0.30) 55%,",
                "  rgba(8,9,11,0.05) 72%,",
                "  transparent 85%",
                ")",
              ].join(""),
        }}
      />

      {/* Gradiente arriba/abajo */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "linear-gradient(to bottom,",
            "  rgba(8,9,11,0.50) 0%,",
            "  transparent 20%,",
            "  transparent 75%,",
            "  rgba(8,9,11,0.70) 100%",
            ")",
          ].join(""),
        }}
      />

      {/* Contenido */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 lg:px-24"
        style={{ y: contentY }}
      >
        <div className="max-w-md">

          <h2
            className="font-['Geist'] font-bold mb-3"
            style={{
              fontSize: "clamp(20px, 3.5vw, 40px)",
              letterSpacing: "-0.5px",
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            {proyecto.title}
          </h2>

          <p
            className="font-['Geist'] font-normal mb-5"
            style={{
              fontSize: "clamp(12px, 1.2vw, 15px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.75)",
            }}
          >
            {proyecto.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-7">
            {proyecto.tags.map((tag, i) => (
              <span
                key={i}
                className="font-['Geist'] font-medium"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "24px",
                  minWidth: "110px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  borderRadius: "8px",
                  backgroundColor: "#9CA3AF",
                  color: "#0C0C0E",
                  fontSize: "11px",
                  letterSpacing: "0.01em",
                  whiteSpace: "nowrap",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={proyecto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center font-['Geist'] font-semibold transition-all duration-200 hover:bg-gray-100"
            style={{
              fontSize: "14px",
              height: "46px",
              paddingLeft: "28px",
              paddingRight: "28px",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              color: "#08090B",
            }}
          >
            {verProyecto}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

const ProyectosList = () => {
  const t = useTranslations("proyectos");
  const proyectosData = t.raw("items");

  return (
    <div className="relative w-full overflow-x-hidden">

      <div
        id="Proyectos"
        className="sticky top-0 z-50 px-8 sm:px-16 lg:px-24 py-8"
        style={{ backgroundColor: "#0C0C0E" }}
      >
        <h1
          className="font-['Geist'] font-bold mt-8"
          style={{ fontSize: "clamp(32px, 5vw, 48px)", letterSpacing: "-2px", color: "#FFFFFF" }}
        >
          {t("titulo")}
        </h1>
        <p
          className="font-['Geist'] mt-1"
          style={{ fontSize: "clamp(14px, 1.5vw, 18px)", fontWeight: 600, letterSpacing: "-1px", color: "#9CA3AF" }}
        >
          {t("subtitulo")}
        </p>
      </div>

      <div className="relative">
        {proyectosData.map((proyecto, index) => (
          <ProjectCard
            key={index}
            proyecto={proyecto}
            index={index}
            verProyecto={t("verProyecto")}
          />
        ))}
      </div>

    </div>
  );
};

export default ProyectosList;