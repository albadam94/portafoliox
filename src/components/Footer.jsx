import React from "react";

import Facebook from '../Icons/Facebook.svg'
import Instagram from '../Icons/Instagram.svg'
import Twitter from '../Icons/twitter.svg'
import Behance from '../Icons/Behance.svg'
import Github  from '../Icons/Git.svg'
import Linkedin from '../Icons/linkedin.svg'


export default function Footer() {
    return (
        <footer className="footer p-10 mt-10 text-center text-gray-200">
        <p className="text-left ml-1 leading-relaxed  md:ml-24">Diseño | Desarrollo: UXAlbadam</p>

<div className='flex float-right mb-1 justify-items-stretch '>
<a href="https://www.facebook.com/albadam94" target="_blank" rel="noopener noreferrer"><img className='ml-10 md:ml-24 hover:bg-teal-700 rounded-lg' src={Facebook} alt="facebook" /></a>
<a href="https://www.instagram.com/albadam94" target="_blank" rel="noopener noreferrer"><img className='ml-4 hover:bg-teal-700 rounded-lg ' src={Instagram} alt="instagram"/> </a>
<a href="https://www.twitter.com/albadam94" target="_blank" rel="noopener noreferrer"><img className='ml-4 hover:bg-teal-700 rounded-lg' src={Twitter} alt="twitter" /></a>
<a href="https://www.behance.net/brayanalbadam" target="_blank" rel="noopener noreferrer"><img className='ml-4 mt-2 hover:bg-teal-700 rounded-sm' src={Behance} alt="behance" /></a>
<a href="https://www.github.com/albadam94" target="_blank" rel="noopener noreferrer"><img className='ml-4 hover:bg-teal-700 rounded-lg' src={Github} alt="github" /></a>
<a href="https://www.linkedin.com/in/brayanalbadamvanegas/" target="_blank" rel="noopener noreferrer"><img className='ml-4 hover:bg-teal-700 rounded-lg' src={Linkedin} alt="linkedin" /></a>
</div> 
        </footer>
    );
    }