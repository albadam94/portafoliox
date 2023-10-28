import React from 'react';
import Icons from './Icons';
import { faReact, faFigma } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="bg-stone-900 w-full py-4 mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4">
        <div className="text-white text-sm font-normal font-['Inter'] leading-tight md:mx-4 lg:mx-12 xl:mx-20">
          UXAlbadam Diseño-Desarrollo en {''}
          <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='fa-2x w-[289px] h-6 justify-start items-start gap-[29px] inline-flex'
              icon={faFigma}
              style={{ color: '#ffffff', height: '24px', width: '24px' }}
            />
          </a>
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className='fa-2x w-[289px] h-6 justify-start items-start gap-[29px] inline-flex'
              icon={faReact}
              style={{ color: '#ffffff', height: '24px', width: '24px' }}
            />
          </a>
        </div>
        <div className="flex justify-start items-start gap-4 mr-20 px-6">
          <Icons />
        </div>
      </div>
    </div>
  );
};

export default Footer;
