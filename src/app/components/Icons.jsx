import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMeta, faInstagram, faBehance, faXTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Icons = () => {
  return (
    <div className="w-[289px] h-6 justify-start items-start gap-[29px] inline-flex mt-5">
      <a   href="https://www.facebook.com/Albadam94" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon  icon={faMeta} className="fa-2x" style={{ color: '#ffffff',height:'24', width:'24',hover:'#16BCCB'}} />
      </a>
      <a href="https://www.instagram.com/albadam94" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faInstagram} className="fa-2x"style={{ color: '#ffffff',height:'24', width:'24' }} />
      </a>
      <a href="https://www.behance.net/brayanalbadam" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faBehance} className="fa-2x"  style={{ color: '#ffffff',height:'24', width:'24' }} />
      </a>
      <a href="https://twitter.com/Albadam94" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faXTwitter}className="fa-2x"  style={{ color: '#ffffff',height:'24', width:'24'}} />
      </a>
      <a href="https://github.com/albadam94" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faGithub}className="fa-2x"   style={{ color: '#ffffff',height:'24', width:'24' }} />
      </a>
      <a href="https://www.linkedin.com/in/brayanalbadamvanegas" target="_blank" rel="noopener noreferrer" >
        <FontAwesomeIcon icon={faLinkedin} className="fa-2x"  style={{ color: '#ffffff',height:'24', width:'24' }} />
      </a>
    </div>
  );
};

export default Icons;
