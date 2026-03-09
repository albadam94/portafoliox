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
    <div className="mt-16 md:mt-32 px-4 font-['Geist']">

      <h1
        className="text-custom-blue font-bold ml-5 md:mx-12 lg:mx-20 xl:mx-[-120px]"
        style={{ fontSize: '48px', letterSpacing: '-2px' }}
      >
        Habilidades
      </h1>

      <div className="w-full max-w-[800px] mx-auto mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3">
          {habilidades.map((habilidad, index) => (
            <div
              key={index}
              className="flex items-center justify-center py-8 px-6 border border-gray-200 text-[#333333] font-semibold text-base text-center hover:bg-[#F2F2F2] transition-colors duration-200"
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