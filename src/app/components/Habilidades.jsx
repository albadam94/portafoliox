import React from 'react';




const Habilidades = () => {
  return (
    <div className="mt-16 md:mt-32 px-4">

      <h1 className="text-custom-blue text-5xl font-semibold leading-[56px] md:mx-auto lg:mx-20 xl:mx-36 font-['Archivo'] mt-10 ">Habilidades</h1>

      <div className="w-full max-w-[800px] mx-auto mt-10 px-6 py-8 bg-white rounded-3xl shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-Darkcharcoal font-medium font-['Archivo']">
          <div className="border p-4 rounded-lg">Diseño UX/UI</div>
          <div className="border p-4 rounded-lg">Wireframe</div>
          <div className="border p-4 rounded-lg">Adobe Creative Cloud</div>
          <div className="border p-4 rounded-lg">Investigación de usuarios</div>
          <div className="border p-4 rounded-lg">Design Thinking</div>
          <div className="border p-4 rounded-lg">Diseño de espacios</div>
          <div className="border p-4 rounded-lg">Prototipado</div>
          <div className="border p-4 rounded-lg">Diseño de producto</div>
          <div className="border p-4 rounded-lg">Desarrollo Web</div>
        </div>
      </div>

      <h1 className="text-custom-blue text-5xl font-semibold leading-[56px] md:mx-auto lg:mx-20 xl:mx-36 font-['Archivo'] mt-20 md:mt-10 ">Stack</h1>
    </div>
  );
};

export default Habilidades;