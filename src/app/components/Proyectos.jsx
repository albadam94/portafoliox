"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const proyectosData = [
  {
    id: 1,
    title: "Proyecto ASAVirtual",
    description: "Diseño e implementación de las interfaces y contenidos de aprendizaje para agricultores de centroamerica, diseño de experiencias, learning experience, implementación en HTML y CSS",
    imageUrl: "/asavirtual.png",
    link: "https://www.behance.net/gallery/188355743/Proyecto-ASAVirtual",
  },
  {
    id: 2,
    title: "Bank Design Bancolombia",
    description: "Diseño UX para mejorar la experiencia de usuario en personas de la tercera edad al usar la sucursal virtual de Bancolombia en su versión Web",
    imageUrl: "/bancolombia.png",
    link: "https://www.behance.net/gallery/180569665/Bank-Design-2023-Bancolombia",
  },
  {
    id: 3,
    title: "Diseño UI integration social",
    description: "Diseño UI de un sitio web que ofrece servicios de comunicación todo-en-uno ayudando a las empresas a centralizar en un solo lugar la comunicación con clientes por SMS, correo, llamadas y redes sociales. Diseñada en Figma",
    imageUrl: "/integrationmockup.png",
    link: "https://integrationsocial.com/",
  },
  {
    id: 4,
    title: "Fluity Fintech App",
    description: "Diseño de una app Fintech para el manejo de finanzas personales, inversiones en criptomonedas, transferencias bancarias y pagos de servicios",
    imageUrl: "/fluity.png",
    link: "https://www.behance.net/gallery/218209629/Fluity-Fintech-App",
  },
  {
    id: 5,
    title: "Diseño UI Tactiq Bizzell",
    description: "Diseño UI de una landing page que ofrece soluciones innovadoras en gestión de personal, logística, comunicaciones en salud, consultoría estratégica y tecnología avanzada, diseñadas específicamente para agencias federales. Diseñada en Figma",
    imageUrl: "/tactiqbizell.png",
    link: "https://www.tactiq-bizzell.us/",
  },
  {
    id: 6,
    title: "Tripflow App",
    description: "Diseño en Figma de una app móvil para presupuestar viajes de forma fácil y rápida, permitiendo a los usuarios planificar sus gastos y actividades durante sus vacaciones.",
    imageUrl: "/tripflow.png",
    link: "https://www.figma.com/design/38ehOtnXgZLLJ9174nO7zA/Tripflow?node-id=0-1&t=zUwQK01bOi5oP1q9-1",
  },
  {
    id: 7,
    title: "NUÍ App",
    description: "Desarrollo de una landing en Wordpress para promocionar una app de gestión gastronomica",
    imageUrl: "/nui.png",
    link: "https://nuiapp.netlify.app/",
  },
];

const StackCard = ({ proyecto, index, total }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const isSvg = proyecto.imageUrl.endsWith(".svg");

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        y: translateY,
        zIndex: index + 1,
        // Espaciado dinámico para el efecto de apilado (Stacking)
        top: `${140 + index * 28}px`,
        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
      }}
      // Se mantiene el max-w-[820px] y el padding original solicitado
      className="sticky max-w-[820px] mx-auto p-8 bg-white rounded-3xl font-['Geist'] border border-gray-50"
    >
      <div className="flex flex-col items-start gap-6 md:flex-row md:gap-8">
        <div className="relative w-full md:w-[320px] lg:w-[380px] aspect-[4/3] bg-gray-50 rounded-2xl overflow-hidden flex-shrink-0">
          {isSvg ? (
            <img src={proyecto.imageUrl} alt={proyecto.title} className="object-contain w-full h-full" />
          ) : (
            <Image src={proyecto.imageUrl} alt={proyecto.title} fill className="object-cover" />
          )}
        </div>

        <div className="flex flex-col gap-4 items-center md:items-start justify-center flex-1 py-4">
          <span className="text-xs font-semibold text-gray-400 tracking-widest uppercase">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          {/* Mantengo el color sky-400 y el estilo original */}
          <h5 className="text-sky-400 text-xl md:text-2xl font-semibold leading-tight text-center md:text-left">
            {proyecto.title}
          </h5>
          <p className="text-Darkcharcoal font-normal leading-relaxed text-center md:text-left max-w-sm" style={{ fontSize: '14px' }}>
            {proyecto.description}
          </p>
          <a
            href={proyecto.link}
            rel="noopener noreferrer"
            target="_blank"
            className="mt-2 inline-flex items-center justify-center w-[175px] h-[47px] bg-[#323332] rounded-xl border border-[#323332] hover:bg-black transition-colors"
          >
            <span className="text-sky-400 text-sm font-semibold">Ver Proyecto</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProyectosList = () => {
  return (
    // Contenedor alineado con el resto de las secciones (max-w-7xl)
    <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
      
      {/* Título sticky con el fondo unificado #FBFBFB */}
      <div 
        id="Proyectos" 
        className="sticky top-20 z-50 py-10 mb-6" 
        style={{ backgroundColor: '#FBFBFB' }}
      >
        <h1
          className="text-custom-blue font-['Geist'] font-bold text-left"
          style={{ fontSize: '48px', letterSpacing: '-2px' }}
        >
          Proyectos
        </h1>
        <p
          className="text-Darkcharcoal font-['Geist'] text-left mt-2"
          style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-1px', opacity: 0.9 }}
        >
          Conoce algunos proyectos que he diseñado e implementado
        </p>
      </div>

      {/* Listado de Cards con espaciado para permitir el scroll final */}
      <div className="flex flex-col pb-5">
        {proyectosData.map((proyecto, index) => (
          <StackCard
            key={proyecto.id}
            proyecto={proyecto}
            index={index}
            total={proyectosData.length}
          />
        ))}
      </div>
    </div>
  );
};

export default ProyectosList;