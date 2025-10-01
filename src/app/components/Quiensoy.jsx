import React from 'react';
import Image from 'next/image';
import Perfil from 'public/perfil.png';

const Quiensoy = () => {
  return (
    <div className="mt-14 md:mt-10 lg:mt-10 xl:mt-64 font-['Geist']">
      <h1 className="text-custom-blue text-5xl font-semibold leading-[56px] md:mx-12 lg:mx-20 ml-5 xl:mx-[-120px]">
        Acerca de mí
      </h1>

      <div>
        <Image
          src={Perfil}
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
          Soy Brayan Albadam, estudiante de diseño digital de la Universidad Politécnico Grancolombiano, certificado profesionalmente en diseño de experiencia de usuario por{' '}
          <a
            href="https://www.coursera.org/account/accomplishments/specialization/certificate/DVYLRJ2VVTH5"
            className="text-sky-400 font-bold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google
          </a>{' '}
          y en diseño de experiencia de usuario y consumidor por la Universidad San Buenaventura Cali, también estoy certificado en desarrollo frontend por la Universidad Industrial de Santander.
        </p>

        <p>
          En el ámbito del diseño, he creado marcas para pequeñas y medianas empresas, así como para profesionales de diversas disciplinas.
        </p>

        <p>
          Me desempeñé como desarrollador frontend en WordPress y como diseñador UX y desarrollador en la implementación de una plataforma educativa en CANVAS LMS, dirigida a agricultores de Centroamérica, donde la experiencia de usuario fue un factor fundamental, aplicando habilidades en diseño de experiencias y desarrollo frontend.
        </p>

        <p>
          También trabajé como Project Manager en un proyecto con el Ministerio TIC, Apps.CO y la Universidad ICESI, donde me encargué de gestionar las actividades necesarias de los equipos de diseño y desarrollo para entregar a tiempo los 74 productos mínimos viables que hicieron parte del Ciclo 2 del Proyecto Apps.Co - Fase Producto Digital.
        </p>

        <p>
          Además, fui seleccionado como semifinalista en el{' '}
          <a
            href="https://www.infobae.com/america/mexico/2021/04/13/como-va-la-convocatoria-para-crear-el-logotipo-del-aeropuerto-felipe-angeles-que-lanzo-simon-levy/"
            className="text-sky-400 font-bold underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            concurso
          </a>{' '}
          de rediseño de la marca del Aeropuerto Felipe Ángeles de México y participé en el reto de diseño de experiencia de usuario de Bancolombia Bank Design 2023.
        </p>

        <p>
          A lo largo de mi carrera, he cultivado habilidades en la creación de conceptos de diseño, investigación de usuarios y establecimiento de marcos de productos mediante el uso de prototipos basados en la metodología Design Thinking.
        </p>

        <p>
          Con enfoque centrado en el usuario, diseño las experiencias más increíbles para los usuarios.
        </p>
      </div>
    </div>
  );
};

export default Quiensoy;
