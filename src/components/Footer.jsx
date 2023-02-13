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
        <p className="text-left ml-1 leading-relaxed  md:ml-24">Diseño | Desarrollo: Albadam Diseñador Multimedia</p>

<div className='flex float-right mb-1 justify-items-stretch '>
        <img className=' hover:bg-teal-400 bg-repeat-round' src={Facebook} alt="facebook" />
        <img className='ml-4  hover:bg-teal-400' src={Instagram} alt="instagram" />
        <img className='ml-4  hover:bg-teal-400' src={Twitter} alt="twitter" />
        <img className='ml-4  hover:bg-teal-400' src={Behance} alt="behance" />
        <img className='ml-4  hover:bg-teal-400' src={Github} alt="github" />
        <img className='ml-4  hover:bg-teal-400' src={Linkedin} alt="linkedin" />
</div> 
        </footer>
    );
    }