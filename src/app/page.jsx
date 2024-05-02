"use client"
import Icons from './components/Icons'
import Proyectos from './components/Proyectos'






export default function Home() {
  return (
    
    

      <div className='mx-4 md:mx-12 lg:mx-20 xl:mx-80 md:mb-10'>
          <div className="text-center md:mt-28">
          <h1 className="text-custom-blue Title text-4xl mb-3 mt-9 md:text-7xl font-bold  font-['Archivo'] md:mt-16 md:mb-6">Diseñador{""} <span className="UX">UX/UI</span><br></br>Frontend Developer</h1>
          <p className="text-Darkcharcoal text-base font-medium leading-15 leading-tight mb-2">Hola ✌️soy Brayan Albadam Diseñador multimedia y desarrollador frontend</p>
          <p className="text-Darkcharcoal text-base font-medium leading-15 leading-tight mb-4">Especializado en diseño de experiencia de usuario</p>
          <Icons />
          </div>
      
         <h1 id='Proyectos' className="text-custom-blue text-5xl font-semibold font-['Archivo'] leading-normal  text-center md:text-left md:mt-10 lg:mt-64 mt-20">Proyectos</h1>
          
      <Proyectos  className='mx-4 md:mx-12 lg:mx-20 xl:mx-80 mb-40 mt-10'/>
      {/*<Proyectos  className='mx-4 md:mx-12 lg:mx-20 xl:mx-80 '/>*/}
      
     


    







      </div> 
    
    
    
  )
}
