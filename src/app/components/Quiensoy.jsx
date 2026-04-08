import React from 'react';
import Image from 'next/image';

const Quiensoy = () => {
  return (
    // Contenedor principal con márgenes controlados para consistencia visual
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-16 md:mt-24 mb-20 font-['Geist']">
      
      {/* Título - Manteniendo los 48px y el espaciado de letras del resto del sitio */}
      <h1 
        className="text-custom-blue font-bold mb-8 text-[40px] md:text-[48px]"
        style={{ letterSpacing: '-2px' }}
      >
        Acerca de mí
      </h1>

      {/* Grid: Imagen a la derecha en Desktop, arriba en Mobile (order-1) */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        
        {/* Bloque de Imagen - Prioridad en mobile con la proporción 3/4 para evitar cortes */}
        <div className="w-full lg:w-[400px] flex-shrink-0 order-1 lg:order-2">
          <div className="relative w-full aspect-[3/4] lg:aspect-auto lg:w-[400px] lg:h-[550px] overflow-hidden ">
            <Image
              src="/perfil.png"  
              alt="Brayan Albadam"
              fill
              className="object-cover object-top shadow-sm border border-gray-100" 
              priority
            />
          </div>
        </div>

        {/* Bloque de Texto - Ajustado con el nuevo contenido */}
        <div className="w-full lg:flex-1 text-Darkcharcoal font-normal leading-relaxed text-base space-y-6 order-2 lg:order-1">
          <p>
            Soy <span className="font-semibold text-custom-blue">Brayan Albadam</span>, diseñador digital con formación en la Universidad Politécnico Grancolombiano y certificaciones en UX por{' '}
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/DVYLRJ2VVTH5"
              className="text-sky-500 font-bold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google
            </a>{' '}
            y la Universidad San Buenaventura Cali, complementadas con estudios en desarrollo de aplicaciones web por la Universidad Industrial de Santander.
          </p>

          <p>
            Mi trabajo combina diseño y desarrollo: he construido identidades de marca para empresas y profesionales, desarrollado interfaces en WordPress y liderado la experiencia de usuario en una plataforma educativa en CANVAS LMS para agricultores de Centroamérica, donde el diseño fue clave para superar barreras de accesibilidad y adopción tecnológica.
          </p>

          <p>
            Como <span className="font-semibold text-custom-blue">Project Manager</span> en un proyecto con el Ministerio TIC, Apps.CO y la Universidad ICESI, coordiné los equipos de diseño y desarrollo para entregar 74 MVPs en el Ciclo 2 del Proyecto Apps.Co — Fase Producto Digital, cumpliendo tiempos y estándares de calidad.
          </p>

          <p>
            He sido semifinalista en el{' '}
            <a
              href="https://www.infobae.com/america/mexico/2021/04/13/como-va-la-convocatoria-para-crear-el-logotipo-del-aeropuerto-felipe-angeles-que-lanzo-simon-levy/"
              className="text-sky-500 font-bold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              concurso
            </a>{' '}
            de rediseño de marca del Aeropuerto Internacional Felipe Ángeles de México y participé en el reto Bank Design 2023 de Bancolombia, dos experiencias que pusieron a prueba mi criterio bajo presión real.
          </p>

          <p>
            Aplico Design Thinking para descubrir problemas reales, traducirlos en soluciones claras y construir experiencias que la gente realmente quiera usar.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Quiensoy;