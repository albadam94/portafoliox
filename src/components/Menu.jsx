
import { NavLink} from "react-router-dom";


import logo from "../images/logo.png";



  const Menu = () => {



  return (
    <header className="sticky  z-20 top-0 p-12 shadow-lg ">
  
   <nav class="px-2  py-2">
  <div class="container flex flex-wrap items-center justify-between mx-">
    <a href="/" class="flex items-center">
    <img className="h-12 ml-16 " src={logo} alt="Logo"/>
    </a>
    <button class="hamburger" type="button"/>
    <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="true" 
   >
      <span class="sr-only"></span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    
    <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
      <ul class="flex flex-col p-1 text-teal-300 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800  dark:border-gray-700">
        <li>
          <NavLink exact  activeclass='active' onClick to="/" class=" text-white md:bg-transparent  md:p-0 md:dark:text-white dark:bg-gray-600 md:dark:bg-transparent" aria-current="page">Inicio</NavLink>
        </li>
 
 

        <li >
          <NavLink activeclass='active' onClick  to='/#quiensoy'  className="text-white block py-2 pl-2 pr-4 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
           md:hover:text-teal-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-gray md:dark:hover:bg-transparent" >Quien soy</NavLink>
        </li>
        <li>
          <NavLink activeclass='active' onClick to="/#estudios" className=" text-white block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
           md:hover:text-teal-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Estudios</NavLink>
        </li>
        <li>
          <NavLink activeclass='active'  onClick to="/#experiencia" className=" text-white block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
           md:hover:text-teal-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Experiencia</NavLink>
        </li>
        <li>
          <NavLink activeclass='active' onClick to={"/#contacto"} className=" text-white block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
           md:hover:text-teal-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >Contacto</NavLink>
        </li>
        <li>
          <NavLink to="/portafolio" className=" text-white block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0
           md:hover:text-teal-600 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Portafolio</NavLink>
        </li>
      </ul>
      </div>
      </div>
</nav>




    </header>
    
  )
}

export default Menu