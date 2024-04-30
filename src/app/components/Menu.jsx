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
    <nav className='menu mt-0 sticky top-0 z-50 p-4 shadow-md bg-inherit'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <Link href='/' legacyBehavior>
              <a className='flex'>
                <Image
                  className='h-12 w-16'
                  src='/Logos/Logo.svg'
                  alt='Logo'
                  width={20}
                  height={20}
                />
              </a>
            </Link>
          </div>
          <div className="bg-Darkcharcoal py-3 px-10 rounded-3xl md:items-center hidden sm:block sm:ml-6 md:ml-60 items-center space-x-6 sm:space-x-9 font-['Archivo']" >
            <Link href='/' legacyBehavior>
              <a className='hover:text-custom-teal'>Inicio</a>
            </Link>
            <button className='hover:text-custom-teal' onClick={scrollToProjects} legacyBehavior>
              Proyectos
            </button>
            <Link href='/acerca' legacyBehavior>
              <a className='hover:text-custom-teal'>Acerca de mi</a>
            </Link>
          </div>

          <div className='hidden sm:block sm:ml-6 space-x-4'>
            <a href='mailto:brayanalbadam@gmail.com' legacyBehavior>
              <button className="text-white bg-Darkcharcoal px-3 py-3 text-sm font-semibold font-['Archivo'] leading-none w-[110.23px] h-10 rounded-3xl border ">
                Contacto
              </button>
            </a>
            <a
              legacyBehavior
              href='https://drive.google.com/file/d/1p_3yPSe-I-E2Am3uqp6ArPC-0zS5vsOI/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className="text-cyan-500 bg-Darkcharcoal py-3  text-sm font-semibold font-['Archivo'] leading-none w-[110.23px] h-10 md:w-36 rounded-3xl border  mr-4">
                Descargar CV
              </button>
            </a>
          </div>

          <div className='sm:hidden ml-6'>
            <button className='text-Darkcharcoal hover:text-custom-teal' onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} className='h-6 w-6 fill' />
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className='block sm:hidden mt-2'>
            <Link href='/' legacyBehavior>
              <a className='text-Darkcharcoal block mt-2 sm:inline-block sm:mt-0 hover:text-custom-teal'>
                Inicio
              </a>
            </Link>
            <Link href='/#Proyectos' legacyBehavior>
              <a className='text-Darkcharcoal block mt-2 sm:inline-block sm:mt-0 hover:text-custom-teal'>
                Proyectos
              </a>
            </Link>
            <Link href='/acerca' legacyBehavior>
              <a className='text-Darkcharcoal block mt-2 sm:inline-block sm:mt-0 hover:text-custom-teal'>
                Acerca de mi
              </a>
            </Link>
            <a href='mailto:brayanalbadam@gmail.com' legacyBehavior>
              <a className='text-Darkcharcoal block mt-2 sm:inline-block sm:mt-0 hover:text-custom-teal'>
                Contacto
              </a>
            </a>
            <a
              legacyBehavior
              href='https://drive.google.com/file/d/1p_3yPSe-I-E2Am3uqp6ArPC-0zS5vsOI/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
            >
              <a className='text-cyan-500 block mt-2 sm:inline-block sm:mt-0 hover:text-teal-400'>
                Descargar CV
              </a>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}