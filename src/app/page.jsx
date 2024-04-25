"use client"
import Icons from './components/Icons'
import Proyectos from './components/Proyectos'






export default function Home() {
  return (
    
    

      <div className='mx-4 md:mx-12 lg:mx-20 xl:mx-80'>
          <div className="mt-14 md:mt-20 lg:mt-32 xl:mt-64 font-['Archivo'] ">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-5xl  font-semibold ">Hola!! 👋 Soy Brayan</h1>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-5xl font-semibold leading-[56px]">UX/UI <span className="text-custom-teal">Designer</span></h1>
          <p className="text-white text-base md:text-lg lg:text-xl xl:text-base font-medium leading-normal mt-5">Diseñador multimedia y desarrollador Frontend<br></br> Especializado en diseño de experiencia de usuario</p>
          <Icons />
      </div>
      <h1 id='Proyectos' className="text-custom-teal text-5xl font-semibold font-['Archivo'] leading-normal md:mt-24 lg:mt-32 xl:mt-160">Proyectos</h1>

      <Proyectos  className='mx-4 md:mx-12 lg:mx-20 xl:mx-80'/>


    







      </div> 
    
    
    
  )
}
