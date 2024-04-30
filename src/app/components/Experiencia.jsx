import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

const Experiencia = () => {
  return (
    <>
      <h1 className="text-custom-blue text-5xl font-semibold leading-[56px] md:mx-auto lg:mx-20 xl:mx-36 font-['Archivo'] mt-10">Experiencia</h1>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 font-['Archivo'] mt-20">
          <Accordion isCompact className="flex flex-col p-4 border rounded-lg shadow-md mb-4">
            <AccordionItem className="font-medium"  key="1" title={<span style={{ color: '#083040' }}>Productor de audio</span>} subtitle="Radio Luna" aria-label="Productor de audio">
              <p className="text-sm text-Darkcharcoal font-normal">
                Grabación y edición de programas y comerciales<br />Radio Operador de la emisora afiliada a la cadena radial TODELAR
              </p>
            </AccordionItem>
            <AccordionItem className="font-medium"  key="2" title={<span style={{ color: '#083040' }}>Coordinador programa de opinión De Cuando Acá</span>} subtitle="Armonias del Palmar" aria-label="Coordinador programa de opinión De Cuando Acá">
              <p className="text-sm text-Darkcharcoal font-normal">
                Desempeñé la coordinación del programa de opinión en Radio, me encargué de editar las entrevistas, coordinar las notas para la emisión, también realicé la presentación del programa - Locución.
              </p>
            </AccordionItem>
            <AccordionItem className="font-medium"  key="3" title={<span style={{ color: '#083040' }}>Contratista comunicaciones Alcaldía de Palmira</span>} subtitle="Alcaldía de Palmira" aria-label="Contratista comunicaciones Alcaldía de Palmira">
              <p className="text-sm text-Darkcharcoal font-normal">
                Difusión de los planes y proyectos que adelantó la administración en un programa de radio | contrato 1473-2018
              </p>
            </AccordionItem>
            <AccordionItem className="font-medium"  key="4" title={<span style={{ color: '#083040' }}>UX Engineer</span>} subtitle="We Are Angular" aria-label="UX Engineer">
              <p className="text-sm text-Darkcharcoal font-normal">
                Diseño y desarrollo de landings page en Wordpress<br />
                Lideré la implementación Frontend de LMS en CANVAS para un proyecto de educación en agricultura para usuarios en países de San Salvador, Honduras y Guatemala; Diseño Experiencia de usuario UX, Obtención de datos con API y CSV, Creación de módulos, Registros CSV, implementación HTML y CSS.<br />
                Realicé pruebas de usabilidad con el equipo de Learning Experience para conocer la interactividad de los usuarios con la aplicación.<br />
                Realicé los diseños de UX Flow, UX Task, casos de uso del sistema PRM de aprendizaje y de cada uno de los cursos.<br />
                Brindé apoyo en el diseño UI y prototipado realizando modificaciones en las interfaces de los cursos e implementándolos en la aplicación mediante código HTML y CSS tanto para agricultores como Extensionistas.
              </p>
            </AccordionItem>
            <AccordionItem className="font-medium"  key="5" title={<span style={{ color: '#083040' }}>Project Manager</span>} subtitle="Ministerio de tecnologías de información y comunicaciones | Innpulsa | Universidad ICESI" aria-label="Project Manager">
              <p className="text-sm text-Darkcharcoal font-normal">
                Líder de proyecto Mid Level, encargado de gestionar las actividades necesarias que debían realizar los diseñadores y desarrolladores, para entregar en los tiempos establecidos los 74 productos mínimos viables que hicieron parte del Ciclo 2 del Proyecto Apps.Co- Fase Producto Digital.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Experiencia;
