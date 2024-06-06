import React from 'react';
import Image from 'next/image';
import Perfil from 'public/Perfil.png';

const Quiensoy = () => {
  return (
    <div>
      <div className="mt-14 md:mt-10 lg:mt-10 xl:mt-64 ">
        <h1 className="text-custom-blue text-5xl font-semibold font-['Archivo'] leading-[56px] md:mx-12 lg:mx-20 xl:mx-36 ml-5">
          Acerca de mi
        </h1>

        <div className="">
          <Image src={Perfil} alt="Brayan Albadam" width={400} height={400} className="float-right ml-24 mr-1 mt-5 sm:mr-20 shadow border-2 lg:w-96 w-screen mb-9"/>
        </div>

        <div className="text-Darkcharcoal font-normal font-['Archivo'] leading-normal xl:mx-36 mt-10 md:mb-10 ml-4 mr-2">
          <div>
            Soy Brayan Albadam, diseñador multimedia y desarrollador frontend de la Universidad industrial de
            Santander. Certificado profesionalmente en diseño de experiencia de usuario por{' '}
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/DVYLRJ2VVTH5"
              className="text-sky-400 font-bold underline" target="_blank" rel="noopener noreferrer" >
              Google
            </a>{' '}
            y diseño de experiencia de usuario y consumidor de la Universidad San Buenaventura Calí.
            <br />
            <br />
            En el ámbito del diseño, he creado marcas para pequeñas y medianas empresas, así como para profesionales de diversas disciplinas.
            <br />
            <br />
            Me desempeñé como desarrollador frontend en WordPress y como UX Engineer en la implementación de una plataforma educativa en CANVAS, dirigida a agricultores de Centroamérica, donde la experiencia de usuario fue factor fundamental, aplicando habilidades en diseño de experiencias y desarrollo Frontend.
            <br />
            <br />
            También me desempeñé como Project Manager en un proyecto con el Ministerio TIC, AppsCO y la Universidad ICESI. Me encargué de gestionar las actividades necesarias que debían realizar los diseñadores y desarrolladores para ser entregados en los tiempos
            establecidos los 74 productos mínimos viables que hicieron parte del Ciclo 2 del Proyecto Apps.Co- Fase Producto Digital.
            <br />
            <br />
            Además, fui seleccionado como semifinalista en el{' '}
            <a
              href="https://www.infobae.com/america/mexico/2021/04/13/como-va-la-convocatoria-para-crear-el-logotipo-del-aeropuerto-felipe-angeles-que-lanzo-simon-levy/"
              className="text-sky-400 font-bold underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              concurso
            </a>{' '}
            de rediseño de la marca del Aeropuerto Felipe Ángeles de México y también participé en el reto de diseño de experiencia de usuario de Bancolombia Bank Design 2023.
            <br />
            <br />
            Anteriormente, adquirí valiosa experiencia en medios de comunicación, incluyendo radio y televisión, donde participé en aspectos técnicos audiovisuales. Mi trayectoria incluye emisoras como Todelar Palmira, HopeRadio Colombia y Armonías del Palmar de RCN Radio.
            <br />
            <br />
            Tengo experiencia en comunicación digital y social media. A lo largo de mi carrera, he cultivado habilidades en la creación de conceptos de diseño, investigación de usuarios y establecimiento de marcos de productos mediante el uso de prototipos basado en la metodología Design Thinking.
            <br />
            <br />
            Con enfoque centrado en el usuario, diseño las experiencias más increíbles para los usuarios.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiensoy;
