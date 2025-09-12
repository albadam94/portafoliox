import React from 'react';
import Icons from './Icons';
import { faReact, faFigma } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="w-full py-2 mt-20 bg-neutral-50 shadow-2xl">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-4 gap-2 lg:gap-6">
        
        {/* Texto + Icons Figma/React */}
        <div className="text-custom-blue text-sm font-normal leading-tight font-['Geist'] flex flex-col items-center lg:flex-row lg:items-center lg:gap-4">
          <span className="mb-2 lg:mb-0">UX Albadam Diseño-Desarrollo en</span>
          <div className="flex gap-4 lg:gap-6">
            <a
              href="https://www.figma.com/file/JkM0L29FITCtiedxzpqkxB/Portafolio-2024?type=design&node-id=643-60&mode=design"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FontAwesomeIcon
                icon={faFigma}
                className="text-[#083040] transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:text-[#FFD700]"
                style={{ fontSize: '30px' }}
              />
            </a>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FontAwesomeIcon
                icon={faReact}
                className="text-[#083040] transition-transform duration-300 ease-in-out group-hover:scale-125 group-hover:text-[#FFD700]"
                style={{ fontSize: '30px' }}
              />
            </a>
          </div>
        </div>

        {/* Redes Sociales / Otros íconos */}
        <div className="flex justify-center items-center gap-4 mt-2 lg:mt-0">
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Footer;

