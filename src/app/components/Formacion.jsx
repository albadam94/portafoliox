import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";

const Formacion = () => {
  return (
    <>
    <h1 className="text-custom-blue text-5xl font-semibold leading-[56px] md:mx-auto lg:mx-20 xl:mx-36 font-['Archivo'] mt-10 ">Educación</h1>
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 font-['Archivo'] mt-20">
        <Accordion isCompact className="flex flex-col p-4 border rounded-lg shadow-md mb-4">
        <AccordionItem className="font-medium"  key="1" title={<span style={{ color: '#083040' }}>Comunicación social</span>}subtitle="UNAD Proceso de homologación" aria-label="Comunicación social">
            <p className="text-sm text-Darkcharcoal font-normal">
            Comunicador Social, Jefe de Prensa y/o Consultor en organizaciones estatales como alcaldías, departamentos y diferentes dependencias, organizaciones del sector privado y organizaciones no gubernamentales-ONG.
            • Productor de Medios de comunicación (radio, prensa, TV, multimedia, fotografía). • Diseñador gestor o mediador en proyectos como: medios comunitarios; proyectos de desarrollo social; medios masivos; educación; periodismo ciudadano; investigación social, cultural y comunicacional; estrategias de comunicación en organizaciones; gestión cultural, y política pública. • Gestor de contenidos digitales. •Gestor de prácticas comunicativas y ciudadanas digitales: generación de contenidos y productos convergentes, diseño e implementación de estrategias y narrativas transmedia e hipermedia, competencias digitales, alfabetización en prácticas digitales ciudadanas, diseño de redes informáticas comunitarias. 
            </p>
          </AccordionItem>
          <AccordionItem className="font-medium"  key="1" title={<span style={{ color: '#083040' }}>Tecnólogo producción multimedia</span>}subtitle="SENA" aria-label="Tecnólogo en producción multimedia">
            <p className="text-sm text-Darkcharcoal font-normal">
              Desarrollador de multimedia (offline y online) • Diseñador gráfico digital • Ilustrador • Diseñador UX/UI • Webmaster • Editor de audio y video • Asesor de sistemas multimediales • Director de proyectos multimediales
            </p>
          </AccordionItem>
          <AccordionItem className="font-medium"  key="2" title={<span style={{ color: '#083040' }}>Diplomado programación, Desarrollo de software con énfasis en aplicaciones web</span>} subtitle="Universidad Industrial de Santander" aria-label="Diplomado programación, Desarrollo de software con énfasis en aplicaciones web">
            <p className="text-sm text-Darkcharcoal font-normal">
              Diplomado de programación en Python con framework Django, desarrollo de aplicaciones web en HTML, CSS, React, creación de arquitectura en diagramas UML, bases de datos.
            </p>
          </AccordionItem>
          <AccordionItem className="font-medium"  key="3" title={<span style={{ color: '#083040' }}>Certificado profesional diseño de experiencia de usuario UX Google</span>}subtitle="Coursera-Google" aria-label="Certificado profesional diseño de experiencia de usuario UX Google">
            <p className="text-sm text-Darkcharcoal font-normal">
              Seguir el proceso de diseño: empatizar con las y los usuarios, definir dificultades, sugerir soluciones, crear prototipos, probar diseños e iterar. Aplicar conceptos básicos de UX, como el diseño centrado en las y los usuarios, en la accesibilidad y en la equidad. Planificar estudios de investigación, realizar entrevistas y estudios de usabilidad y síntesis de resultados de investigación.
            </p>
          </AccordionItem>
          <AccordionItem className="font-medium"  key="4" title={<span style={{ color: '#083040' }}>Diseño de experiencia de usuario y consumidor UX-CX</span>}subtitle="Universidad San Buenaventura" aria-label="Diseño de experiencia de usuario y consumidor UX-CX">
            <p className="text-sm text-Darkcharcoal font-normal">
              Creación de productos digitales que permitan una buena experiencia del usuario teniendo en cuenta aspectos de experiencia del lado del cliente para satisfacer necesidades desde el diseño aplicando metodologías como el design thinking.
            </p>
          </AccordionItem>
          <AccordionItem className="font-medium" key="5" title={<span style={{ color: '#083040'  }}>Ver más</span>} aria-label="Ver más">
            <p className="text-sm text-Darkcharcoal font-normal">
              Otros estudios en producción de imágenes digitales, marketing digital, administración de comunidades en línea, desarrollo web, comercio electrónico, aplicación de metodologías SCRUM para proyectos de software.
            </p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
    </>
  );
}

export default Formacion;

