// En tu archivo de página (página.js)
"use client";
import Icons from "./components/Icons";
import Proyectos from "./components/Proyectos";
import DotMeshCanvas from "./components/DotMeshCanvas";

export default function Home() {
  return (
    <div>
      {/* Header — Ocupa 100vw, los puntos se renderizan detrás del menú */}
      <div className="relative text-center font-['Geist'] overflow-hidden min-h-[580px] flex flex-col items-center justify-center w-full bg-[#FBFBFB]">
        
        {/* CORRECCIÓN: Contenedor para aplicar la máscara de desvanecimiento */}
        <div className="absolute inset-0 pointer-events-none fade-mask-mesh z-0">
          <DotMeshCanvas />
        0</div>

        {/* Degradados de luz — Ahora desvanecidos con la máscara de puntos */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          {/* El degradado superior ya no es necesario gracias a la máscara de puntos */}
          
          {/* Degradado inferior con una transición más sutil */}
          <div
            className="absolute -bottom-24 left-0 w-full h-80 z-20"
            style={{
              background:
                "linear-gradient(to top, #FBFBFB 10%, rgba(251, 251, 251, 0.7) 40%, transparent 100%)",
            }}
          />
        </div>

        {/* Contenido principal sobre los puntos */}
        <div className="relative z-20">
          <h1 className="text-custom-blue Title text-4xl mb-3 md:text-7xl font-bold md:mb-6">
            Product <span className="UX">Designer</span>
          </h1>
          <p className="text-Darkcharcoal text-base font-medium leading-tight mb-2">
            Hola ✌️ soy Brayan Albadam diseñador digital
          </p>
          <p className="text-Darkcharcoal text-base font-medium leading-tight mb-4">
            Especializado en diseño de experiencia de usuario
          </p>
          <div className="flex justify-center items-center mt-10">
            <Icons />
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-12 lg:mx-20 md:mb-10">
        <Proyectos className="mb-40 mt-10" />
      </div>
    </div>
  );
}