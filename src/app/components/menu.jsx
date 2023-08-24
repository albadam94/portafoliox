"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('Proyectos');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className='menu mt-0 sticky top-0 z-50 p-4 shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
       
        <div className='flex justify-between items-center h-16'>
          
          <div className='flex-shrink-0 flex items-center'>
            
            <Link href='/' legacyBehavior>
              <a className='flex'>
                <Image
                  className='h-16 w-16'
                  src='/Logo.svg'
                  alt='Logo'
                  width={100}
                  height={100}
                />
              </a>
            </Link>
          </div>
          <div className='hidden sm:block sm:ml-6 ml-6 items-center space-x-3 sm:space-x-6'>
            <Link href='/' legacyBehavior>
              <a className='hover:text-teal-400'>Inicio</a>
            </Link>
            <button className='hover:text-teal-400' onClick={scrollToProjects}>
              Proyectos
            </button>
            <Link href='/quiensoy' legacyBehavior>
              <a className='hover:text-teal-400'>Quién Soy</a>
            </Link>
          </div>
          <div className='hidden sm:block sm:ml-6'>
            <a href='mailto:brayanalbadam@gmail.com' legacyBehavior>
              <button className='bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-opacity-80'>
                Contacto
              </button>
            </a>
            <a
              legacyBehavior
              href='https://drive.google.com/file/d/1p_3yPSe-I-E2Am3uqp6ArPC-0zS5vsOI/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='bg-blue-950 text-white px-4 py-2 rounded-md hover:bg-opacity-80 ml-2'>
                CV
              </button>
            </a>
          </div>
          <div className='sm:hidden ml-6'>
            <button className='text-blue-900 hover:text-gray-900' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} className='h-6 w-6 fill' />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className='block sm:hidden mt-2'>
            <Link href='/' legacyBehavior>
              <a className='block mt-2 sm:inline-block sm:mt-0 hover:text-teal-400'>
                Inicio
              </a>
            </Link>
            <Link href='/#Proyectos' legacyBehavior>
              <a className='block mt-2 sm:inline-block sm:mt-0 hover:text-teal-400'>
                Proyectos
              </a>
            </Link>
            <Link href='/quiensoy' legacyBehavior>
              <a className='block mt-2 sm:inline-block sm:mt-0 hover:text-teal-400'>
                Quién Soy
              </a>
            </Link>
            <a href='mailto:brayanalbadam@gmail.com' legacyBehavior>
              <a className='block mt-2 sm:inline-block sm:mt-0 hover:text-teal-400'>
                Contacto
              </a>
            </a>
            <a
              legacyBehavior
              href='https://drive.google.com/file/d/1p_3yPSe-I-E2Am3uqp6ArPC-0zS5vsOI/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <a className='block mt-2 sm:inline-block sm:mt-0 hover:text-teal-400'>
                CV
              </a>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
