import React from 'react';
import Image from 'next/image';

const proyectosData = [
  {
    id: 1,
    
    title: 'Proyecto ASAVirtual',
    description: 'Diseño e implementación de las interfaces y contenidos de aprendizaje para agricultores de centroamerica, diseño de experiencias, learning experience, implementación en HTML y CSS',
    imageUrl: '/CoverB.svg',
    link: 'https://www.behance.net/gallery/188355743/Proyecto-ASAVirtual',
  },
  {
    id: 2,
    title: 'Bank Design Bancolombia',
    description: 'Diseño UX para mejorar la experiencia de usuario en personas de la tercera edad al usar la sucursal virtual de Bancolombia en su versión Web',
    imageUrl: '/Bancolombia.svg',
    link: 'https://www.behance.net/gallery/180569665/Bank-Design-2023-Bancolombia',
  },
    {
        id: 3,
        title: 'La cerveceria',
        description: 'Diseño de una app que permita reservar espacios, productos y realizar pagos QR en un Pub-bar',
        imageUrl: '/Lacerveceria.svg.svg',
        link: 'https://www.behance.net/gallery/176068785/La-Cerveceria-APP',
       
    },
    {
        id: 4,
        title: 'Ecommerce',
        description:'Desarrollo de E-commerce de Guitarras en React-Vite y estilos con tailwind CSS  ',
        imageUrl: '/Ejercicios.svg',
        link: 'https://guitarplay.netlify.app/',
    },
    {
      id: 5,
      title: 'Ecommerce Tienda Cannabis',
      description:'Diseño en Figma y desarrollo de un ecommerce en Wordpress usando elementor y woocommerce, alojado estaticamente en netlify ',
      imageUrl: '/Cannabis.svg',
      link: 'https://medicalcannabis.netlify.app/',
  },

  
];

const Proyecto = ({ proyecto }) => {
    return (
        
         
      <div className="max-w-[820px] md:h-[460px] mx-auto px-4 md:px-10  md:py-[82px] bg-white rounded-3xl shadow flex-col justify-start items-start gap-2.5 inline-flex font-Archivo mb-10">
        <div className="flex flex-col items-start gap-4 md:flex-row">
         
          <div className="w-full md:w-[370px] h-[296px] object-cover relative bg-white rounded-md">
            <Image
              className="max-w-full md:w-full h-full object-contain md:h-full rounded-md"
              src={proyecto.imageUrl}
              alt={proyecto.title}
              layout="fill"
              objectFit="cover"
            />
          </div>
  
          
          <div className="p-7 md:p-4 flex flex-col md:gap-6 items-center md:justify-center">

          
            <h5 className="text-sky-400 text-lg md:text-xl font-medium leading-tight text-center md:text-left">
              {proyecto.title}
            </h5>
  
           
            <p className="md:w-80 text-Darkcharcoal md:text-base md:font-normal font-['Archivo'] md:leading-tight px-2">
              {proyecto.description}
            </p>
  
            
            <a
              className="w-[175px] h-[47px] md:p-6 bg-Darkcharcoal rounded-xl border border-Darkcharcoal justify-center items-center gap-[50px] inline-flex mt-6 md:mt-10"
              href={proyecto.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              <button className="text-sky-400 text-sm font-semibold leading-[10px]">
                VER PROYECTO
              </button>
            </a>
          </div>
        </div>
      </div>
    
    );
  };

const ProyectosList = () => {
  return (
    <div className="mt-14">
      {proyectosData.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </div>
  );
};

export default ProyectosList;
