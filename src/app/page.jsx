"use client"
import Icons from './components/Icons'
import Proyectos from './components/Proyectos'
import AntigravityCanvas from './components/AntigravityCanvas'

export default function Home() {
  return (
    <div>
      {/* Header SIN márgenes para que el canvas ocupe todo el ancho */}
      <div className="relative text-center font-['Geist'] overflow-hidden min-h-[500px] flex flex-col items-center justify-center mt-5 md:mt-10 w-full">
        <AntigravityCanvas />

        <div className="relative z-10">
          <h1 className="text-custom-blue Title text-4xl mb-3 md:text-7xl font-bold md:mb-6">
            Product <span className="UX">Designer</span>
          </h1>
          <p className="text-Darkcharcoal text-base font-medium leading-tight mb-2">
            Hola ✌️ soy Brayan Albadam diseñador digital
          </p>
          <p className="text-Darkcharcoal text-base font-medium leading-tight mb-4">
            Especializado en diseño de experiencia de usuario
          </p>
          <div className="flex justify-center items-center mt-10">
            <Icons />
          </div>
        </div>
      </div>

      {/* El resto CON márgenes */}
      <div className='mx-4 md:mx-12 lg:mx-20 md:mb-10'>
        <Proyectos className='mb-40 mt-10' />
      </div>
    </div>
  )
}