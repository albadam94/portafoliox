import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const proyectosData = [
  {
    id: 1,
    title: 'Proyecto ASAVirtual',
    description: 'Diseño e implementación de las interfaces y contenidos de aprendizaje para agricultores de centroamerica, diseño de experiencias, learning experience, implementación en HTML y CSS',
    imageUrl: '/CoverB.svg',
    link: 'https://www.behance.net/gallery/188355743/Proyecto-ASAVirtual',
  },
  {
    id: 2,
    title: 'Bank Design Bancolombia',
    description: 'Diseño UX para mejorar la experiencia de usuario en personas de la tercera edad al usar la sucursal virtual de Bancolombia en su versión Web',
    imageUrl: '/Bancolombia.svg',
    link: 'https://www.behance.net/gallery/180569665/Bank-Design-2023-Bancolombia',
  },
  {
    id: 3,
    title: 'Fluity Fintech App',
    description: 'Diseño de una app Fintech para el manejo de finanzas personales, inversiones en criptomonedas, transferencias bancarias y pagos de servicios',
    imageUrl: '/PresentaciónSVG.svg',
    link: 'https://www.behance.net/gallery/218209629/Fluity-Fintech-App',
  },
  {
    id: 4,
    title: 'Diseño UI Tactiq Bizzell',
    description: 'Diseño UI de una landing page que ofrece soluciones innovadoras en gestión de personal, logística, comunicaciones en salud, consultoría estratégica y tecnología avanzada, diseñadas específicamente para agencias federales. diseñada en Figma',
    imageUrl: '/Ejercicios.svg',
    link: 'https://www.tactiq-bizzell.us/',
  },
  {
    id: 5,
    title: 'Ecommerce Tienda Cannabis',
    description: 'Diseño en Figma y desarrollo de un ecommerce en Wordpress usando elementor y woocommerce, alojado estaticamente en netlify',
    imageUrl: '/Cannabis.svg',
    link: 'https://medicalcannabis.netlify.app/',
  },
];

const Proyecto = ({ proyecto, index }) => {
  return (
   <motion.div
  initial={{ y: 50 + index * 20, scale: 0.9, opacity: 0 }}
  whileInView={{ y: 0, scale: 1, opacity: 1 }}
  viewport={{ once: false, amount: 0.3 }}
  transition={{ duration: 0.6, delay: index * 0.15 }}
  className="max-w-[820px] mx-auto p-10 bg-white rounded-3xl flex-col justify-start items-start gap-2.5 inline-flex font-['Geist'] relative"
  style={{
    zIndex: proyectosData.length - index,
    boxShadow:
      '0 1px 2px 0 rgba(60, 64, 67, 0.30), 0 1px 3px 1px rgba(60, 64, 67, 0.15)',
  }}
>

      <div className="flex flex-col items-start gap-6 md:flex-row">
        
        {/* Contenedor de imagen con aspect-ratio */}
        <div className="relative w-full md:w-[380px] aspect-[4/3] bg-white rounded-md overflow-hidden">
          <Image
            src={proyecto.imageUrl}
            alt={proyecto.title}
            fill
            className="object-contain md:object-cover rounded-md"
          />
        </div>

        <div className="p-7 md:p-4 flex flex-col gap-4 items-center md:items-start md:justify-center font-['Geist']">
          <h5 className="text-sky-400 text-lg md:text-xl font-medium leading-tight text-center md:text-left">
            {proyecto.title}
          </h5>

          <p className="md:w-80 text-Darkcharcoal md:text-base md:font-normal font-['Geist'] md:leading-tight px-2 text-center md:text-left">
            {proyecto.description}
          </p>

          <a
            className="w-[175px] h-[47px] md:p-6 bg-Darkcharcoal rounded-xl border border-Darkcharcoal justify-center items-center inline-flex mt-3 md:mt-4"
            href={proyecto.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <button className="text-sky-400 text-sm font-semibold leading-[10px]">
              VER PROYECTO
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProyectosList = () => {
  return (
    <div className="mt-14 flex flex-col gap-10 relative">
      {proyectosData.map((proyecto, index) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} index={index} />
      ))}
    </div>
  );
};

export default ProyectosList;
