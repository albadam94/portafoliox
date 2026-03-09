"use client"
import Icons from './components/Icons'
import Proyectos from './components/Proyectos'






export default function Home() {
  return (
    
    
      <div className=' mx-4    md:mx-12  lg:mx-20  md:mb-10'>
       

          <div className="text-center md:mt-28 font-['Geist']">
          
          <h1 className="text-custom-blue Title text-4xl mb-3 mt-9 md:text-7xl font-bold    md:mt-16 md:mb-6">Product{""} <span className="UX">Designer</span><br></br></h1>          
          <p className="text-Darkcharcoal text-base font-medium leading-15 leading-tight mb-2">Hola ✌️soy Brayan Albadam diseñador digital</p>
          <p className="text-Darkcharcoal text-base font-medium leading-15 leading-tight mb-4">Especializado en diseño de experiencia de usuario</p>
          <div className="flex justify-center items-center mt-10">
          <Icons />
          </div>
          </div>
      
    <h1 
          id='Proyectos' 
          className="text-custom-blue font-['Geist'] font-bold text-center md:text-left md:mt-5 lg:mt-64 mt-20"
          style={{ fontSize: '48px', letterSpacing: '-1px' }}
        >
          Proyectos
        </h1>
            <p 
              className="text-Darkcharcoal font-['Geist'] text-center md:text-left mt-2"
              style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-1px' }}
            >
              Conoce algunos proyectos que he diseñado e implementado
            </p>
      <Proyectos  className='mx-4 md:mx-12 lg:mx-20 xl:mx-80 mb-40 mt-10 md:mt-10'/>
      {/*<Proyecto  className='mx-4 md:mx-12 lg:mx-20 xl:mx-80 '/>*/}
      
    


      </div> 
    
    
    
  )
}
