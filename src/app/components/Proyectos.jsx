"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

const ProjectCard = ({ proyecto, index, verProyecto }) => {
  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start start", "end start"],
  });

  // Imagen más alta y margen generoso para evitar el golpe
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  // Contenido se mueve muy sutilmente
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

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
      {/* Imagen con mayor altura y margen negativo para absorber el parallax */}
      <motion.div
        className="absolute inset-x-0 w-full"
        style={{
          y: imageY,
          height: "140%",
          top: "-20%",
        }}
      >
        <Image
          src={proyecto.imageUrl}
          alt={proyecto.title}
          fill
          sizes="100vw"
          quality={95}
          className="object-cover"
          style={{ objectPosition: "center center" }}
          priority={index < 3}
        />
      </motion.div>

      {/* Gradiente izquierda */}
      <div
        className="absolute inset-0"
        style={{
          background: [
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
            "  rgba(8,9,11,0.35) 0%,",
            "  transparent 15%,",
            "  transparent 80%,",
            "  rgba(8,9,11,0.50) 100%",
            ")",
          ].join(""),
        }}
      />

      <motion.div
        className="absolute inset-0 flex flex-col justify-center px-10 sm:px-16 lg:px-24"
        style={{ y: contentY }}
      >
        <div className="max-w-md">

          <h2
            className="font-['Geist'] font-bold mb-3"
            style={{
              fontSize: "clamp(22px, 3.5vw, 40px)",
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
              fontSize: "clamp(13px, 1.2vw, 15px)",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.65)",
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
              fontSize: "13px",
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
        className="sticky top-0 z-50 px-10 sm:px-16 lg:px-24 py-8"
        style={{ backgroundColor: "#0C0C0E" }}
      >
        <h1
          className="font-['Geist'] font-bold mt-8"
          style={{ fontSize: "48px", letterSpacing: "-2px", color: "#FFFFFF" }}
        >
          {t("titulo")}
        </h1>
        <p
          className="font-['Geist'] mt-1"
          style={{ fontSize: "18px", fontWeight: 600, letterSpacing: "-1px", color: "#9CA3AF" }}
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