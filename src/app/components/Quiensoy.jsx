import React from 'react';
import Image from 'next/image';

const Quiensoy = () => {
  return (
    <div className="mt-14 md:mt-10 lg:mt-10 xl:mt-64 font-['Geist']">
      <h1 
        className="text-custom-blue font-bold md:mx-12 lg:mx-20 ml-5 xl:mx-[-120px]"
        style={{ fontSize: '48px', letterSpacing: '-2px' }}
      >
        Acerca de mí
      </h1>

      <div>
        <Image
          src="/perfil.png"  
          alt="Brayan Albadam"
          width={400}
          height={400}
          className="block mx-auto mt-5 sm:mt-3 shadow border-2 
          w-3/4 sm:w-1/2 md:w-1/3 lg:w-96 max-w-xs sm:max-w-sm md:max-w-[500px] lg:max-w-96 xl:max-w-lg 
          sm:relative sm:top-0 md:relative md:top-0 lg:float-right lg:ml-7 lg:mt-5 lg:sm:mr-[-10rem] lg:mb-10"
        />
      </div>

      <div className="text-Darkcharcoal font-normal leading-relaxed xl:mx-[-120px] mt-10 md:mb-10 ml-4 mr-2 space-y-6">
        <p>
          Soy Brayan Albadam, diseñador digital con formación en la Universidad Politécnico Grancolombiano y certificaciones en UX por{' '}
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/DVYLRJ2VVTH5"
            className="text-sky-400 font-bold underline"
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
          Como Project Manager en un proyecto con el Ministerio TIC, Apps.CO y la Universidad ICESI, coordiné los equipos de diseño y desarrollo para entregar 74 MVPs en el Ciclo 2 del Proyecto Apps.Co — Fase Producto Digital, cumpliendo tiempos y estándares de calidad.
        </p>

        <p>
          He sido semifinalista en el{' '}
          <a
            href="https://www.infobae.com/america/mexico/2021/04/13/como-va-la-convocatoria-para-crear-el-logotipo-del-aeropuerto-felipe-angeles-que-lanzo-simon-levy/"
            className="text-sky-400 font-bold underline"
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
  );
};

export default Quiensoy;