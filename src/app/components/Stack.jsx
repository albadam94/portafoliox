import React from 'react';
import Image from 'next/image';

const SkillItem = ({ logoSrc, title }) => {
  return (
    <div className="flex items-center justify-center gap-3 py-10 px-6 hover:bg-[#F2F2F2] transition-colors duration-200 cursor-default border border-gray-200">
      <Image src={logoSrc} width={28} height={28} alt={title} />
      <span className="text-[#333333] text-base font-semibold font-['Geist']">{title}</span>
    </div>
  );
};

const Stack = () => {
  return (
    <div className="px-4 font-['Geist']">
      <h1
        className="text-custom-blue font-bold ml-5 md:mx-12 lg:mx-20 xl:mx-[-120px] mt-20 md:mt-10"
        style={{ fontSize: '48px', letterSpacing: '-2px' }}
      >
        Stack
      </h1>

      <div className="w-full max-w-[900px] mx-auto mt-10">
        {/* Fila 1 - 5 items */}
        <div className="grid grid-cols-2 md:grid-cols-5">
          <SkillItem logoSrc="/Logos/Figma.svg" title="Figma" />
          <SkillItem logoSrc="/Logos/Ilustrator.svg" title="Illustrator" />
          <SkillItem logoSrc="/Logos/Photoshop.svg" title="Photoshop" />
          <SkillItem logoSrc="/Logos/iconHTML.svg" title="HTML" />
          <SkillItem logoSrc="/Logos/iconCSS.svg" title="CSS3" />
        </div>

        {/* Fila 2 - 4 items */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          <SkillItem logoSrc="/Logos/iconReact.svg" title="React" />
          <SkillItem logoSrc="/Logos/Wordpress.svg" title="Wordpress" />
          <SkillItem logoSrc="/Logos/Trello.svg" title="Trello" />
          <SkillItem logoSrc="/Logos/Github.svg" title="Github" />
        </div>
      </div>
    </div>
  );
};

export default Stack;