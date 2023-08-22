"use client"

import React from 'react';
import Image from 'next/image';
import Swiper from '../components/carousel';
import Accordion from '../components/accordion';
import Experiencia from '../components/aexperiencia';
import ScrollToTopButton from '../components/ScrollToTopButton';

const QuienSoyPage = () => {
    return (
        <main>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 mt-16">
       
            <h1 className="ux2 text-4xl sm:text-5xl md:text-8xl font-bold">Hi 👋</h1>
            <Image
          className="ml-24 mr-20 mt-5 float-right md:mt-8 w-60 m my-8 md:w-18 xl:w-96 border-teal-500 border-4 rounded-3xl"
          src="/Perfil.png"
          width={431}
          height={539}
          alt="Fotoperfil"
        />
            
            <div className="text-left md:text-left lg:text-left md:flex md:justify-left">
  <p className="text-base md:text-xs lg:text-base mt-6 mb-24 font-medium">
    Soy Brayan Albadam, diseñador multimedia y desarrollador frontend del <br/>
    diplomado Misión TIC 2022, y certificado profesionalmente en diseño de<br/>
     experiencia de usuario por Google.<br/><br/>

    En el ámbito del diseño, he creado marcas para pequeñas y medianas<br/>
    empresas, así como para profesionales de diversas disciplinas. He trabajado<br/>
    como desarrollador frontend en WordPress y como líder en la<br/>
    implementación de una plataforma educativa en CANVAS, dirigida a usuarios<br/>
    en Centroamérica, donde he aplicado mis habilidades en Diseño UX y <br/>desarrollo frontend.
    <br/><br/>

    Además, tuve el honor de ser seleccionado como semifinalista en el <br/>
    concurso de rediseño de la marca del Aeropuerto Felipe Ángeles de México.
    <br/><br/>

    Anteriormente, adquirí valiosa experiencia en medios de comunicación, <br/>
    incluyendo radio y televisión, donde participé en aspectos técnicos<br/>
    audiovisuales. Mi trayectoria incluye emisoras como Todelar Palmira,<br/>
    HopeRadio Colombia y Armonías del Palmar de RCN Radio. Tengo<br/>
    experiencia en comunicación digital y social media.
    <br/><br/>
        
    A lo largo de mi carrera, he cultivado habilidades en la creación de conceptos<br/>
    visionarios, investigación de usuarios y establecimiento de marcos de<br/>
    productos mediante el uso de prototipos. Con una actitud positiva y una<br/>
    mentalidad enfocada en el crecimiento, siempre estoy en búsqueda de<br/>
    oportunidades para ampliar mis conocimientos y habilidades como diseñador.
  </p>
</div>

        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 mt-5">
        <h1 className="ux2 text-4xl sm:text-5xl md:text-8xl font-bold">Habilidades</h1>
        <div className="h-56 grid grid-cols-3 gap-4 content-evenly font-medium text-base">
                <div>Diseño UX</div>
                <div>Wireframing</div>
                <div>Adobe Creative Cloud</div>
                <div>Investigación de usuarios</div>
                <div>Design Thinking</div>
                <div>Autocad</div>
                <div>Prototipado</div>
                <div>Diseño de producto</div>
                <div>Sketchup</div>
</div>
                <Swiper/>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 mt-16">
        <h1 className="ux2 text-4xl sm:text-5xl md:text-8xl font-bold">Formación Academica</h1>

       
        </div>
        <Accordion/>
        <h1 className="ux2 text-4xl sm:text-5xl md:text-8xl font-bold max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 mt-16">Experiencia</h1>
        <Experiencia/>
        <ScrollToTopButton/>
        </main>
    )
    }
    export default QuienSoyPage;