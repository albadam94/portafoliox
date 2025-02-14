import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeta, faInstagram, faBehance, faGithub, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';

const Icons = () => {
  return (
    <div className="flex gap-5 mt-5 justify-center items-end relative h-20">
      {[ 
        { href: "https://www.facebook.com/Albadam94", icon: faMeta },
        { href: "https://www.instagram.com/albadam94", icon: faInstagram },
        { href: "https://www.behance.net/brayanalbadam", icon: faBehance },
        { href: "https://dribbble.com/Albadam94", icon: faDribbble },
        { href: "https://github.com/albadam94", icon: faGithub },
        { href: "https://www.linkedin.com/in/brayanalbadamvanegas", icon: faLinkedin }
      ].map((item, index) => (
        <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="relative group">
          <FontAwesomeIcon 
            icon={item.icon} 
            className="text-[#083040] transition-transform duration-300 ease-in-out group-hover:scale-150 group-hover:text-[#FFD700]"
            style={{ fontSize: '24px' }}
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-2 bg-[#FFD700] rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out" />
        </a>
      ))}
    </div>
  );
};

export default Icons;
