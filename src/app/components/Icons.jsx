import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeta, faInstagram, faBehance, faGithub, faLinkedin, faDribbble } from '@fortawesome/free-brands-svg-icons';

const Icons = () => {
  return (
    <div className="flex gap-5 justify-center items-center">
      {[ 
        { href: "https://www.facebook.com/Albadam94", icon: faMeta },
        { href: "https://www.instagram.com/albadam94", icon: faInstagram },
        { href: "https://www.behance.net/brayanalbadam", icon: faBehance },
        { href: "https://dribbble.com/Albadam94", icon: faDribbble },
        { href: "https://github.com/albadam94", icon: faGithub },
        { href: "https://www.linkedin.com/in/brayanalbadamvanegas", icon: faLinkedin }
      ].map((item, index) => (
        <a 
          key={index} 
          href={item.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative group"
        >
          <FontAwesomeIcon 
            icon={item.icon} 
            className="transition-transform duration-300 ease-in-out group-hover:scale-150"
            style={{ fontSize: '24px', color: 'rgba(76,181,245,0.4)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#4CB5F5'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(76,181,245,0.4)'}
          />
        </a>
      ))}
    </div>
  );
};

export default Icons;
