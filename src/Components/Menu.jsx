import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../Images/Logo33.png';





export default function Menu( ){
    return(
 
        <div>
            
          
        
        <nav  className="navbar navbar-dark fixed-top">
        <div className="container-fluid">
        <NavLink className="navbar-brand" activeClass="active" to='/' ><img  src={Logo}alt="Logo" width="50" height="50" ></img> </NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="btn-info offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close btn-info  text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item ">
                  <NavLink className="nav-Link" activeClass="active" onClick to='/'>Inicio</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-Link" activeClass="active" onClick to='/#Quiensoy'>Quien Soy</NavLink>
                </li>
                  <li className="nav-item">
                  <NavLink className="nav-Link" activeClass="active" onClick to='/#Estudios'spy={true} smooth={true} offset={-70} duration={200} >Estudios</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-Link"activeClass="active" onClick to='/#Experiencia'spy={true} smooth={true} offset={-70} duration={200}>Experiencia</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-Link"activeClass="active" onClick to='/#contacto'>Contacto</NavLink>
                  </li>                  
                  <li className="nav-item">
                  <NavLink className="nav-Link"activeClass="active"  to="Portafolio">Portafolio</NavLink>
                  </li>
                  </ul>     
                 
               </div>              
          </div>
     </div>

                  
</nav>

</div>
    )
}