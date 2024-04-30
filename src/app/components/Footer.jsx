import React from 'react';
import Icons from './Icons';
import { faReact, faFigma } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className=" w-full py-4 mt-20 bg-neutral-50 shadow-2xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <div className="text-custom-blue text-sm font-normal leading-tight md:mx-4 lg:mx-12 xl:mx-20 font-['Archivo']">
          UX Albadam Diseño-Desarrollo en {''}
          <a href="https://www.figma.com/file/JkM0L29FITCtiedxzpqkxB/Portafolio-2024?type=design&node-id=643-60&mode=design" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='fa-2x w-[289px] h-6 justify-start items-start gap-[29px] inline-flex'
              icon={faFigma}
              style={{ color: '#083040', height: '24px', width: '24px' }}
            />
          </a>
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='fa-2x w-[289px] h-6 justify-start items-start gap-[29px] inline-flex'
              icon={faReact}
              style={{ color: '#083040', height: '24px', width: '24px' }}
            />
          </a>
        </div>
        <div className="md:flex md:justify-center md:items-center md:gap-4 md:mr-20 md:px-6">
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
