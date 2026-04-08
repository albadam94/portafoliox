import React from 'react';
import Image from 'next/image';

const SkillItem = ({ logoSrc, title }) => {
  return (
    // He mantenido la estructura de flex-col para mobile y flex-row para desktop para mejor legibilidad, pero sin cambiar colores.
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 py-10 px-4 hover:bg-[#F2F2F2] transition-colors duration-200 cursor-default border-r border-b border-gray-200">
      {/* CORRECCIÓN AQUÍ: Eliminadas las clases grayscale y grayscale-0 */}
      <Image src={logoSrc} width={28} height={28} alt={title} />
      <span className="text-[#333333] text-base font-semibold font-['Geist'] text-center">{title}</span>
    </div>
  );
};

const Stack = () => {
  return (
    // Contenedor unificado con el resto del sitio (max-w-7xl, mx-auto, px-6...)
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-20 md:mt-32 font-['Geist']">
      
      {/* Título alineado correctamente, sin márgenes negativos */}
      <h1
        className="text-custom-blue font-bold mb-10 text-[40px] md:text-[48px]"
        style={{ letterSpacing: '-2px' }}
      >
        Stack
      </h1>

      <div className="w-full max-w-[1000px] mx-auto mt-10">
        {/* Contenedor con borde superior e izquierdo para cerrar la rejilla con líneas de 1px */}
        <div className="border-t border-l border-gray-200">
          
          {/* Fila 1 - 5 items en desktop, 2 en mobile */}
          <div className="grid grid-cols-2 md:grid-cols-5">
            <SkillItem logoSrc="/Logos/Figma.svg" title="Figma" />
            <SkillItem logoSrc="/Logos/Ilustrator.svg" title="Illustrator" />
            <SkillItem logoSrc="/Logos/Photoshop.svg" title="Photoshop" />
            <SkillItem logoSrc="/Logos/iconHTML.svg" title="HTML" />
            <SkillItem logoSrc="/Logos/iconCSS.svg" title="CSS3" />
          </div>

          {/* Fila 2 - 4 items en desktop, 2 en mobile */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            <SkillItem logoSrc="/Logos/iconReact.svg" title="React" />
            <SkillItem logoSrc="/Logos/Wordpress.svg" title="Wordpress" />
            <SkillItem logoSrc="/Logos/Trello.svg" title="Trello" />
            <SkillItem logoSrc="/Logos/Github.svg" title="Github" />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Stack;