import React from 'react';
import Image from 'next/image';
import { useTranslations } from "next-intl";

const SkillItem = ({ logoSrc, title }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-3 py-10 px-4 transition-colors duration-200 cursor-none group">
      <Image
        src={logoSrc}
        width={28}
        height={28}
        alt={title}
        className="brightness-0 invert opacity-40 group-hover:opacity-100 transition-opacity duration-200"
        style={{ filter: "brightness(0) saturate(100%) invert(67%) sepia(60%) saturate(500%) hue-rotate(175deg) brightness(100%) contrast(95%)" }}
      />
      <span
        className="text-base font-semibold font-['Geist'] text-center transition-colors duration-200"
        style={{ color: "#9CA3AF" }}
      >
        {title}
      </span>
    </div>
  );
};

const Stack = () => {
  const t = useTranslations("stack");
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-20 md:mt-12 font-['Geist']">

      <h1
        className="font-bold mb-10"
        style={{ fontSize: "clamp(36px, 5vw, 48px)", letterSpacing: "-2px", color: "#ffffff" }}
      >
        {t("titulo")}
      </h1>

      <div className="w-full max-w-[1000px] mx-auto mt-10">

    
        <div className="grid grid-cols-2 md:grid-cols-5">
          <SkillItem logoSrc="/Logos/Figma.svg" title="Figma" />
          <SkillItem logoSrc="/Logos/Ilustrator.svg" title="Illustrator" />
          <SkillItem logoSrc="/Logos/Photoshop.svg" title="Photoshop" />
          <SkillItem logoSrc="/Logos/iconHTML.svg" title="HTML" />
          <SkillItem logoSrc="/Logos/iconCSS.svg" title="CSS3" />
        </div>

       
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