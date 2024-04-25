'use client'
import React from 'react'
import { Accordion, AccordionItem } from "@nextui-org/react";

const Formacion = () => {
  return (
    <div>
      <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-semibold leading-[56px] md:mx-12 lg:mx-20 xl:mx-80 mt-10 font-['Archivo']">
        Formación <span className="text-custom-teal">Académica</span>
      </h1>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20  ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-['Archivo'] ">

          <Accordion isCompact className="flex flex-col h-full p-4 border rounded-lg mb-4 ">
            <AccordionItem className=" text-white  font-medium" key="1 " aria-label="Tecnólogo en producción multimedia" title={<span style={{ color: '#16BDCA' }}>Tecnólogo en producción multimedia</span>}>
              <p className="text-sm text-white font-normal">Desarrollador de multimedia (offline y online) • Diseñador gráfico digital • Ilustrador • Diseñador UX/UI • Webmaster • Editor de audio y video • Asesor de sistemas multimediales • Director de proyectos multimediales</p>
            </AccordionItem>
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="2" aria-label="Diplomado programación, Desarrollo de software con énfasis en aplicaciones web Misión TIC | Universidad Industrial de Santander" title={<span style={{ color: '#16BDCA' }}>Diplomado programación, Desarrollo de software con enfasis en aplicaciones web Misión TIC | Universidad Industrial de Santander</span>}>
              <p className="text-sm text-white font-normal">Diplomado de programación en Python con framework Django, desarrollo de aplicaciones web en HTML, CSS, React, creación de arquitectura en diagramas UML, bases de datos.</p>
            </AccordionItem>
          </Accordion>

          <Accordion isCompact className="flex flex-col h-full p-4 border rounded-lg shadow-md text-lg font-medium mb-4">
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="1" aria-label="Certificado profesional Google UX Design" title={<span style={{ color: '#16BDCA' }}>Certificado profesional Google UX Design</span>}>
              <p className="text-sm text-white font-normal">Desarrollar UX personas, historias de usuario y User journeys - Realizar estudios de usabilidad-Crear bocetos y prototipos-
              Probar e iterar diseños</p>
            </AccordionItem>
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="2" aria-label="Diseño de experiencia de usuario y consumidor UX-CX | Universidad San Buenaventura"  title={<span style={{ color: '#16BDCA' }}>Diseño de experiencia de usuario y consumidor UX-CX | Universidad San Buenaventura</span>}>
              <p className="text-sm text-white font-normal">Creación de productos digitales que permitan una buena experiencia del usuario teniendo en cuenta aspectos de experiencia del lado del cliente para satisfacer necesidades desde el diseño aplicando metodologías como el design thinking.</p>
            </AccordionItem>
          </Accordion>

          <Accordion isCompact className="flex flex-col h-full p-4 border rounded-lg shadow-md text-lg font-medium mb-4">
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="1" aria-label="Curso comunidades digitales administración de interacciones en línea | MINTIC" title={<span style={{ color: '#16BDCA' }}>Curso comunidades digitales administración de interacciones en linea | MINTIC</span>}>
              <p className="text-sm text-white font-normal">Construir y administrar comunidades en línea, fomentando la participación activa y el compromiso de los miembros a través de plataformas digitales. Temas como moderación, comunicación efectiva, resolución de conflictos y mantenimiento de ambientes positivos en línea.</p>
            </AccordionItem>
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="2" aria-label="Certificación periodismo ciudadano recursos para la comunicación digital | AppsCO" title={<span style={{ color: '#16BDCA' }}>Certificación periodismo ciudadano recursos para la comunicación digital | AppsCO</span>}>
              <p className="text-sm text-white font-normal">Utilizar plataformas y aplicaciones para recopilar, compartir y distribuir información de manera ética y profesional.<br/> Abarcar temas como la verificación de fuentes, la narración digital, el uso de redes sociales y la creación de contenido multimedia</p>
            </AccordionItem>
          </Accordion>

          <Accordion isCompact className="flex flex-col h-full p-4 border rounded-lg shadow-md text-lg font-medium mb-4">
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="1" aria-label="Curso introducción al marketing digital | Platzi-AppsCo" title={<span style={{ color: '#16BDCA' }}>Curso introduccion al marketing digital | Platzi-AppsCo</span>}>
              <p className="text-sm text-white font-normal">Fundamentos esenciales del marketing en el entorno digital. Conceptos básicos de estrategias digitales, incluyendo el uso efectivo de redes sociales, publicidad en línea, SEO (Optimización de Motores de Búsqueda) y analítica web.
                Comprensión sólida de las tácticas de marketing en línea y cómo aplicarlas para aumentar la visibilidad, el compromiso y el impacto de una marca o negocio en el mundo digital.</p>
            </AccordionItem>
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="2" aria-label="Producción de imágenes digitales | SENA" title={<span style={{ color: '#16BDCA' }}>Producción de imagenes digitales | SENA</span>}>
              <p className="text-sm text-white font-normal">Habilidades necesarias para crear y editar imágenes de manera efectiva en entornos digitales. Uso de herramientas de diseño gráfico, técnicas de edición de imágenes, manipulación de elementos visuales y la creación de contenido gráfico atractivo.</p>
            </AccordionItem>
          </Accordion>

          <Accordion isCompact className="flex flex-col h-full p-4 border rounded-lg shadow-md text-lg font-medium mb-4">
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="1" aria-label="Curso marketing digital IAB Spain | Google Activate" title={<span style={{ color: '#16BDCA' }}>Curso marketing digital IAB Spain | Google Activate</span>}>
              <p className="text-sm text-white font-normal">Conceptos y técnicas fundamentales del marketing en línea, comprensión integral de las estrategias digitales, incluyendo aspectos como publicidad en línea, SEO, SEM, analítica web y gestión de redes sociales.
                Planificar y ejecutar campañas de marketing en línea efectivas, con un enfoque en la optimización y el impacto medible.</p>
            </AccordionItem>
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="2" aria-label="Curso Desarrollo WEB | Google Activate" title={<span style={{ color: '#16BDCA' }}>Curso Desarrollo WEB | Google Activate</span>}>
              <p className="text-sm text-white font-normal">Conocimientos en lenguajes de programación como HTML, CSS, así como también sobre diseño de páginas web, responsive design y buenas prácticas de desarrollo.
                Construir y mantener sitios web atractivos y optimizados que se adapten a las necesidades y expectativas de los usuarios.</p>
            </AccordionItem>
          </Accordion>

          <Accordion isCompact className="flex flex-col h-full p-4 border rounded-lg shadow-md text-lg font-medium mb-4">
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="1" aria-label="Certificación Autocad 2D: Aplicación de herramientas intermedias para proyectos CAD | SENA" title={<span style={{ color: '#16BDCA' }}>Certificación Autocad 2D: Aplicación de herramientas intermedias para proyectos CAD | SENA</span>}>
              <p className="text-sm text-white font-normal">Habilidades en el uso de AutoCAD para proyectos de diseño asistido por computadora en dos dimensiones. Utilizar herramientas intermedias dentro del software AutoCAD, crear y modificar diseños con mayor precisión y eficiencia.
                creación de bloques y atributos, el uso avanzado de capas y estilos de trazado, la organización de dibujos complejos y la aplicación de comandos avanzados para agilizar el proceso de diseño</p>
            </AccordionItem>
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="2" aria-label="Modelado 3D con sketchUp | SENA" title={<span style={{ color: '#16BDCA' }}>Modelado 3D con sketchUp | SENA</span>}>
              <p className="text-sm text-white font-normal">Utilizar las herramientas y técnicas necesarias para construir modelos en 3D de manera eficiente y efectiva.<br/> Abarcar aspectos como la creación y manipulación de formas tridimensionales, la aplicación de texturas y materiales, la organización de componentes y grupos, y la generación de visualizaciones realistas.</p>
            </AccordionItem>
          </Accordion>

          <Accordion isCompact className="flex flex-col h-full p-4 border rounded-lg shadow-md text-lg font-medium mb-4">
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="1" aria-label="Comercio Electrónico | Google Activate" title={<span style={{ color: '#16BDCA' }}>Comercio Electrónico | Google Activate</span>}>
              <p className="text-sm text-white font-normal">Fundamentos y estrategias clave relacionadas con el mundo del comercio electrónico. Planificación de una tienda en línea, la gestión de inventario, la optimización de la experiencia del usuario, las estrategias de marketing digital, los métodos de pago electrónicos y la atención al cliente en línea.</p>
            </AccordionItem>
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="2" aria-label="Técnicas de comunicación a nivel administrativo | SENA" title={<span style={{ color: '#16BDCA' }}>Técnicas de comunicación a nivel administrativo | SENA</span>}>
              <p className="text-sm text-white font-normal">Estrategias y técnicas para mejorar la comunicación tanto interna como externa en un entorno administrativo. Esto incluye habilidades de redacción, presentación oral, manejo de conflictos, escucha activa y manejo de situaciones de comunicación desafiantes</p>
            </AccordionItem>
          </Accordion>

          <Accordion isCompact className="flex flex-col h-full p-4 border rounded-lg shadow-md text-lg font-medium mb-4 text-white">
            <AccordionItem className="text-xl font-medium mb-2 text-white" key="1" aria-label="Aplicación del marco de trabajo SCRUM para proyectos de desarrollo de software | SENA" title={<span style={{ color: '#16BDCA' }}>Aplicación del marco de trabajo SCRUM para proyectos de desarrollo de software | SENA</span>}>
              <p className="text-sm text-white font-normal">Utilizar el marco de trabajo ágil SCRUM para gestionar proyectos de desarrollo de software de manera efectiva.
                Conceptos como la planificación de sprint, la creación y manejo de backlog, la realización de reuniones diarias de seguimiento y la evaluación continua para mejorar la productividad y la calidad del desarrollo.
                Abordar temas como la asignación de roles y responsabilidades en un equipo SCRUM, la comunicación efectiva entre miembros del equipo y la adaptación ágil a los cambios en el proceso de desarrollo.</p>
            </AccordionItem>
          </Accordion>

        </div>
      </div>
    </div>
  );
}

export default Formacion;
