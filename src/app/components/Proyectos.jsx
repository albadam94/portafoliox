import React from 'react';
import Image from 'next/image';

const proyectosData = [
  {
    id: 1,
    title: 'La cerveceria',
    description: 'Diseño de una app que permita reservar espacios, productos y pagos QR de un Pub-bar',
    imageUrl: '/Lacerveceria.svg.svg',
    link: 'https://www.behance.net/gallery/176068785/La-Cerveceria-APP',
  },
  {
    id: 2,
    title: 'Bank Design Bancolombia',
    description: 'Diseño para mejorar la experiencia de usuario en personas de la tercera edad al usar la sucursal virtual en su versión Web',
    imageUrl: '/Bancolombia.svg',
    link: 'https://www.behance.net/gallery/180569665/Bank-Design-2023-Bancolombia',
  },
    {
        id: 3,
        title: 'Proyecto ASAVirtual',
        description: 'Diseño e implementación de las interfaces y contenidos de aprendizaje para agricultores de centroamerica, diseño de experiencias, learning experience, implementación en HTML y CSS',
        imageUrl: '/CoverB.svg',
        link: 'https://www.behance.net/gallery/188355743/Proyecto-ASAVirtual',
    },
    {
        id: 4,
        title: 'App Ejercicios',
        description:'Diseño de una aplicación de ejercicios en casa, el target son usuarios con disponibilidad de tiempo limitada Proyecto Diseño de experiencia de usuario y consumidor UX/CX Universidad SanBuenaventura ',
        imageUrl: '/Ejercicios.svg',
        link: 'https://www.behance.net/gallery/177325279/UX-App-Ejercicios-Universidad-SanBuenaventura',
    },

  
];

const Proyecto = ({ proyecto }) => {
  return (
    <div className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl dark:border-custom-teal mt-6">
      <Image
        className="object-cover w-full md:w-48 md:h-auto rounded-t-lg md:rounded-none md:rounded-l-lg "
        width={200}
        height={150}
        src={proyecto.imageUrl}
        alt={proyecto.title}
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="text-white text-sm font-semibold font-['Rubik'] leading-none">
          {proyecto.title}
        </h5>
        <p className="text-zinc-500 text-sm font-normal font-['Rubik'] leading-tight mt-3">
          {proyecto.description}
        </p>
        <a href={proyecto.link} rel="noopener noreferrer" target="_blank">
          <button className="mt-6 w-[105.17px] h-7 rounded-md border border-zinc-800 text-zinc-500 text-[10px] font-medium font-['Rubik'] uppercase leading-tight tracking-wide">
            VER PROYECTO
          </button>
        </a>
      </div>
    </div>
  );
};

const ProyectosList = () => {
  return (
    <div className="mt-6">
      {proyectosData.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </div>
  );
};

export default ProyectosList;

