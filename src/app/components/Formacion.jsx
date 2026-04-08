import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

const Formacion = () => {
  return (
    // Contenedor unificado con el resto del sitio
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-20 md:mt-32 font-['Geist']">
      
      {/* Título alineado al margen, sin márgenes negativos */}
      <h1
        className="text-custom-blue font-bold mb-10 text-[40px] md:text-[48px]"
        style={{ letterSpacing: '-2px' }}
      >
        Educación
      </h1>

      {/* Contenedor del Accordion centrado */}
      <div className="max-w-[900px] mx-auto mt-10">
        <Accordion
          isCompact
          variant="light"
          className="flex flex-col gap-3"
          // Quitamos padding lateral interno para que el texto aproveche el espacio
          itemClasses={{
            base: "px-0",
            title: "w-full",
            trigger: "py-4",
          }}
        >
          <AccordionItem
            key="1"
            aria-label="Profesional en Diseño Digital"
            title={
              <div className="flex flex-col">
                <span className="text-[#083040] font-semibold text-base">Profesional en Diseño Digital</span>
                <span className="text-gray-400 text-xs font-normal mt-0.5">Universidad Politécnico GranColombiano</span>
              </div>
            }
          >
            <p className="text-sm text-Darkcharcoal font-normal pb-4 leading-relaxed">
              Diseñador interactivo: Diseño de interfaces digitales y experiencia de usuario • Diseñador publicitario • Director de arte y creativo: Creación de campañas publicitarias y estrategias de comunicación visual • Ilustrador digital: Creación de ilustraciones y gráficos digitales • Coordinador áreas de diseño: Gestión y coordinación de equipos de diseño
            </p>
          </AccordionItem>

          <AccordionItem
            key="2"
            aria-label="Tecnólogo producción multimedia"
            title={
              <div className="flex flex-col">
                <span className="text-[#083040] font-semibold text-base">Tecnólogo producción multimedia</span>
                <span className="text-gray-400 text-xs font-normal mt-0.5">SENA</span>
              </div>
            }
          >
            <p className="text-sm text-Darkcharcoal font-normal pb-4 leading-relaxed">
              Desarrollador de multimedia (offline y online) • Diseñador gráfico digital • Ilustrador • Diseñador UX/UI • Webmaster • Editor de audio y video • Asesor de sistemas multimediales • Director de proyectos multimediales
            </p>
          </AccordionItem>

          <AccordionItem
            key="3"
            aria-label="Diplomado programación"
            title={
              <div className="flex flex-col">
                <span className="text-[#083040] font-semibold text-base">Diplomado programación, Desarrollo de software con énfasis en aplicaciones web</span>
                <span className="text-gray-400 text-xs font-normal mt-0.5">Universidad Industrial de Santander</span>
              </div>
            }
          >
            <p className="text-sm text-Darkcharcoal font-normal pb-4 leading-relaxed">
              Diplomado de programación en Python con framework Django, desarrollo de aplicaciones web en HTML, CSS, React, creación de arquitectura en diagramas UML, bases de datos.
            </p>
          </AccordionItem>

          <AccordionItem
            key="4"
            aria-label="Certificado UX Google"
            title={
              <div className="flex flex-col">
                <span className="text-[#083040] font-semibold text-base">Certificado profesional diseño de experiencia de usuario UX Google</span>
                <span className="text-gray-400 text-xs font-normal mt-0.5">Coursera — Google</span>
              </div>
            }
          >
            <p className="text-sm text-Darkcharcoal font-normal pb-4 leading-relaxed">
              Seguir el proceso de diseño: empatizar con las y los usuarios, definir dificultades, sugerir soluciones, crear prototipos, probar diseños e iterar. Aplicar conceptos básicos de UX, como el diseño centrado en las y los usuarios, en la accesibilidad y en la equidad. Planificar estudios de investigación, realizar entrevistas y estudios de usabilidad y síntesis de resultados de investigación.
            </p>
          </AccordionItem>

          <AccordionItem
            key="5"
            aria-label="Diseño UX-CX"
            title={
              <div className="flex flex-col">
                <span className="text-[#083040] font-semibold text-base">Diseño de experiencia de usuario y consumidor UX-CX</span>
                <span className="text-gray-400 text-xs font-normal mt-0.5">Universidad San Buenaventura</span>
              </div>
            }
          >
            <p className="text-sm text-Darkcharcoal font-normal pb-4 leading-relaxed">
              Creación de productos digitales que permitan una buena experiencia del usuario teniendo en cuenta aspectos de experiencia del lado del cliente para satisfacer necesidades desde el diseño aplicando metodologías como el design thinking.
            </p>
          </AccordionItem>

          <AccordionItem
            key="6"
            aria-label="Ver más"
            title={
              <div className="flex flex-col">
                <span className="text-[#083040] font-semibold text-base">Ver más</span>
                <span className="text-gray-400 text-xs font-normal mt-0.5">Otros estudios y certificaciones</span>
              </div>
            }
          >
            <p className="text-sm text-Darkcharcoal font-normal pb-4 leading-relaxed">
              Otros estudios en producción de imágenes digitales, marketing digital, administración de comunidades en línea, desarrollo web, comercio electrónico, aplicación de metodologías SCRUM para proyectos de software.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Formacion;