import React from 'react';
import Image from 'next/image';


const SkillItem = ({ logoSrc, title, description }) => {
    
  return (
    <div className="flex justify-start items-start gap-[35px]">
      <div className="w-[242px] px-[19px] py-2.5 bg-white rounded-xl shadow flex flex-col justify-start items-start gap-2.5">
        <div className="flex items-center gap-5">
          <Image src={logoSrc} width={25} height={25} alt={title} />
          <div className="flex flex-col justify-start items-start gap-1">
            <div className="text-zinc-800 text-base font-medium font-archivo leading-[22px]">{title}</div>
            <div className="text-zinc-800 text-xs font-normal font-archivo leading-[14px]">{description}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stack = () => {
  return (
    <div className="w-full max-w-[800px] mx-auto mt-10 px-10 py-10 md:px-6 md:py-8 bg-white rounded-3xl shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-Darkcharcoal font-medium font-archivo">

        
        <SkillItem logoSrc="/Logos/Figma.svg" title="Figma" description="Diseño de interfaces"/>
        <SkillItem logoSrc="/Logos/Ilustrator.svg" title="Adobe Illustrator" description="Ilustración" />
        <SkillItem logoSrc="/Logos/Photoshop.svg" title="Adobe Photoshop" description="Diseño Gráfico"/>
        <SkillItem logoSrc="/Logos/iconHTML.svg" title="HTML" description="Desarrollo web"/>
        <SkillItem logoSrc="/Logos/iconCSS.svg" title="CSS3" description="Estilo Visual"/>
        <SkillItem logoSrc="/Logos/iconReact.svg" title="React" description="Desarrollo Frontend"/>
        <SkillItem logoSrc="/Logos/Wordpress.svg" title="Wordpress" description="Diseño Web"/>
        <SkillItem logoSrc="/Logos/Trello.svg" title="Trello" description="Gestión de Proyectos"/>
        <SkillItem logoSrc="/Logos/Github.svg" title="Github" description="Repositorio Desarrollo"/>
        
      </div>
    </div>
  );
};

export default Stack;
