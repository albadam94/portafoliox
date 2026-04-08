import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

const Experiencia = () => {
  return (
    // Contenedor unificado con el resto del sitio (max-w-7xl, px-6...)
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-20 md:mt-32 font-['Geist']">
      
      {/* Título alineado al margen, sin márgenes negativos */}
      <h1
        className="text-custom-blue font-bold mb-10 text-[40px] md:text-[48px]"
        style={{ letterSpacing: '-2px' }}
      >
        Experiencia
      </h1>

      {/* Contenedor del Accordion centrado con max-w-[900px] para consistencia */}
      <div className="max-w-[900px] mx-auto mt-10">
        <Accordion
          isCompact
          variant="light"
          className="flex flex-col gap-3"
          itemClasses={{
            base: "px-0",
            title: "w-full",
            trigger: "py-4",
          }}
        >
          <AccordionItem
            key="1"
            aria-label="UX Engineer"
            title={
              <div className="flex flex-col py-1">
                <span className="text-[#083040] font-semibold text-base">Diseñador UX/UI — Desarrollador Frontend</span>
                <span className="text-gray-400 text-xs font-normal mt-0.5">We Are Angular</span>
              </div>
            }
          >
            <div className="text-sm text-Darkcharcoal font-normal pb-4 leading-relaxed space-y-4">
              <p>Diseño y desarrollo de landings page e ecommerce en Wordpress.</p>
              <p>
                Lideré la implementación Frontend de un LMS en CANVAS para un proyecto de educación en agricultura para usuarios en países de San Salvador, Honduras y Guatemala; Diseño Experiencia de usuario UX, Obtención de datos con API y CSV, Creación de módulos, Registros CSV, implementación HTML y CSS.
              </p>
              <p>
                Realicé pruebas de usabilidad con el equipo de Learning Experience para conocer la interactividad de los usuarios con la aplicación.
              </p>
              <p>
                Realicé los diseños de UX Flow, UX Task, casos de uso del sistema PRM de aprendizaje y de cada uno de los cursos y brindé apoyo en el diseño UI en la creación de banners y demás elementos visuales.
              </p>
            </div>
          </AccordionItem>

          <AccordionItem
            key="2"
            aria-label="Project Manager"
            title={
              <div className="flex flex-col py-1">
                <span className="text-[#083040] font-semibold text-base">Project Manager</span>
                <span className="text-gray-400 text-xs font-normal mt-0.5">Ministerio TIC | Innpulsa | Universidad ICESI</span>
              </div>
            }
          >
            <p className="text-sm text-Darkcharcoal font-normal pb-4 leading-relaxed">
              Líder de proyecto Mid Level, encargado de gestionar las actividades necesarias que debían realizar los diseñadores y desarrolladores, para entregar en los tiempos establecidos los 74 productos mínimos viables que hicieron parte del Ciclo 2 del Proyecto Apps.Co — Fase Producto Digital.
            </p>
          </AccordionItem>

          <AccordionItem
            key="3"
            aria-label="Freelance"
            title={
              <div className="flex flex-col py-1">
                <span className="text-[#083040] font-semibold text-base">Freelance</span>
                <span className="text-gray-400 text-xs font-normal mt-0.5">Independiente</span>
              </div>
            }
          >
            <div className="text-sm text-Darkcharcoal font-normal pb-4 leading-relaxed space-y-4">
              <p>
                Prestación de servicios en consultoría UX, diseño de experiencia de usuario, creación de marca para empresas, profesionales e instituciones, ayudando a escalar y comprender las necesidades de los usuarios mediante el diseño de productos y servicios digitales.
              </p>
              <p>
                Diseño de marca y de empaque Ecocomfort, empresa de productos para el hogar de fabricación artesanal.
              </p>
              <p>
                Diseño UX/UI de la app web Playme del sector entretenimiento de contenidos. Diseño de flujos, UI KIT, componentes, dashboard de estadísticas y pagos.{" "}
                <a
                  href="https://playme.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-500 font-bold underline hover:text-sky-600 transition-colors"
                >
                  Proyecto playme.us
                </a>
              </p>
            </div>
          </AccordionItem>

          <AccordionItem
            key="4"
            aria-label="Product Designer"
            title={
              <div className="flex flex-col py-1">
                <span className="text-[#083040] font-semibold text-base">Product Designer</span>
                <span className="text-gray-400 text-xs font-normal mt-0.5">Innovative MOJO</span>
              </div>
            }
          >
            <div className="text-sm text-Darkcharcoal font-normal pb-4 leading-relaxed space-y-4">
              <p>Realizar investigaciones de usuarios, pruebas de usabilidad y análisis de datos para comprender el comportamiento de la audiencia e informar las decisiones de diseño.</p>
              <p>Desarrollar perfiles de usuario, mapas de viaje y wireframes para garantizar una comprensión completa de las necesidades y comportamientos de los usuarios.</p>
              <p>Crear prototipos interactivos que articulen claramente el flujo y la funcionalidad de los productos digitales.</p>
              <p>Desarrollar sistemas de diseño, guías de estilo y bibliotecas de componentes para mantener la coherencia en todos los puntos de contacto digitales.</p>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Experiencia;