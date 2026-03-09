import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

const Experiencia = () => {
  return (
    <>
      <h1
        className="text-custom-blue font-bold ml-5 md:mx-12 lg:mx-20 xl:mx-[-120px] font-['Geist'] mt-10"
        style={{ fontSize: '48px', letterSpacing: '-2px' }}
      >
        Experiencia
      </h1>

      <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <Accordion
          isCompact
          variant="light"
          className="flex flex-col gap-3 font-['Geist']"
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
            <p className="text-sm text-Darkcharcoal font-normal pb-4 leading-relaxed">
              Diseño y desarrollo de landings page e ecommerce en Wordpress.<br /><br />
              Lideré la implementación Frontend de un LMS en CANVAS para un proyecto de educación en agricultura para usuarios en países de San Salvador, Honduras y Guatemala; Diseño Experiencia de usuario UX, Obtención de datos con API y CSV, Creación de módulos, Registros CSV, implementación HTML y CSS.<br /><br />
              Realicé pruebas de usabilidad con el equipo de Learning Experience para conocer la interactividad de los usuarios con la aplicación.<br /><br />
              Realicé los diseños de UX Flow, UX Task, casos de uso del sistema PRM de aprendizaje y de cada uno de los cursos y brindé apoyo en el diseño UI en la creación de banners y demás elementos visuales.<br /><br />
              Brindé apoyo en el diseño UI y prototipado realizando modificaciones en las interfaces de los cursos e implementándolos en la aplicación mediante código HTML y CSS tanto para agricultores como Extensionistas en la plataforma de CANVAS LMS.
            </p>
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
            <p className="text-sm text-Darkcharcoal font-normal pb-4 leading-relaxed">
              Prestación de servicios en consultoría UX, diseño de experiencia de usuario, creación de marca para empresas, profesionales e instituciones, ayudando a escalar y comprender las necesidades de los usuarios mediante el diseño de productos y servicios digitales.<br /><br />
              Diseño de marca y de empaque Ecocomfort, empresa de productos para el hogar de fabricación artesanal.<br /><br />
              Diseño UX/UI de la app web Playme del sector entretenimiento de contenidos, Diseño de flujos, diseño UI, UI KIT, diseño de componentes, diseño de banners, diseño páginas de perfil, página de carga de contenidos, diseño de dashboard de estadísticas y pagos.{' '}
              <a
                href="https://playme.us"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 font-bold underline"
              >
                Proyecto playme.us
              </a>
            </p>
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
            <p className="text-sm text-Darkcharcoal font-normal pb-4 leading-relaxed">
              Realizar investigaciones de usuarios, pruebas de usabilidad y análisis de datos para comprender el comportamiento de la audiencia e informar las decisiones de diseño.<br /><br />
              Desarrollar perfiles de usuario, mapas de viaje y wireframes para garantizar una comprensión completa de las necesidades y comportamientos de los usuarios.<br /><br />
              Crear prototipos interactivos que articulen claramente el flujo y la funcionalidad de los productos digitales.<br /><br />
              Diseñar interfaces visualmente atractivas que se alineen con la identidad de la marca y los objetivos de marketing.<br /><br />
              Desarrollar sistemas de diseño, guías de estilo y bibliotecas de componentes para mantener la coherencia en todos los puntos de contacto digitales.<br /><br />
              Colaborar con los desarrolladores para garantizar que la integridad del diseño se mantenga durante la fase de desarrollo.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
};

export default Experiencia;