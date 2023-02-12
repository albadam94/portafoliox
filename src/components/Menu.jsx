import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";


export default function Menu ()  {
  return (
    <header className="p-12 shadow-lg">
    <nav class="">
  <div class="flex-1 min-w-0">
    <a href="/" class="flex items-center">
      <img className="h-12 ml-16 " src={logo} alt="Logo"/>
    </a>
<Link to="/" className="ml-16 text-gray-200 hover:text-teal-400"></Link>
    <svg className='h-12 absolute top-10 right-16  w-16' viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path stroke="#CCCCCC" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h22M5 16h22M5 24h22"></path> </g></svg>
   
  </div>
  
</nav>
    </header>
  )
}
