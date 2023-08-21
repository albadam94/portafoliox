import Link from 'next/link'
import Image from 'next/image'




export default function Menu () {
    return (
      <header className='menu mt-5 sticky  z-5  p-10'>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" legacyBehavior>
                <a className="flex">
                  <Image
                    className="h-16 w-16"
                    src='/Logo.svg'
                    alt="Logo"
                    width={100}
                    height={100}
                    />
                </a>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6 ml-6">
              <div className=" space-x-5  content-end"> {/* Cambio aquí: añadido 'items-center' */}
                <Link href="/" legacyBehavior>
                  <a className="hover:text-teal-400">Inicio</a>
                </Link>
                <Link href="#Proyectos" legacyBehavior>
                  <a className=" hover:text-teal-400">Proyectos</a>
                </Link>
                <Link href="/quiensoy" legacyBehavior>
                  <a className=" hover:text-teal-400 ">Quién Soy</a>
                </Link>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <Link href="/contacto" legacyBehavior>
                <button
                  className="bg-cyan-950 text-white px-4 py-2 rounded-md hover:bg-opacity-80"
                >
                  Contacto
                </button>
              </Link>
              <Link href="/ruta-a-tu-cv" legacyBehavior>
                <button
                  className="bg-cyan-950 text-white px-4 py-2 rounded-md hover:bg-opacity-80 ml-4 "
                >
                  CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
    )
}