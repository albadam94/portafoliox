import React from 'react';

const Habilidades = () => {
  const habilidades = [
    "Diseño UX/UI",
    "Wireframe",
    "Adobe Creative Cloud",
    "Investigación de usuarios",
    "Design Thinking",
    "Diseño de espacios",
    "Prototipado",
    "Diseño de producto",
    "Desarrollo Web",
  ];

  return (
    // He añadido 'max-w-7xl mx-auto px-6 md:px-12 lg:px-20' para que coincida con Quiensoy
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-16 md:mt-32 font-['Geist']">

      {/* Título - Ahora alineado con el margen del sitio */}
      <h1
        className="text-custom-blue font-bold mb-8 text-[40px] md:text-[48px]"
        style={{ letterSpacing: '-2px' }}
      >
        Habilidades
      </h1>

      {/* Contenedor de la cuadrícula */}
      <div className="w-full max-w-[900px] mx-auto mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-gray-200">
          {habilidades.map((habilidad, index) => (
            <div
              key={index}
              // He ajustado los bordes para que no se dupliquen (border-r y border-b)
              className="flex items-center justify-center py-8 px-6 border-r border-b border-gray-200 text-[#333333] font-semibold text-base text-center hover:bg-[#F2F2F2] transition-colors duration-200"
            >
              {habilidad}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Habilidades;