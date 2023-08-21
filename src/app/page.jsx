import React from "react"
import Image from "next/image"

export default function Home() {
  return (
    <main>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 mt-16">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">Hi 👋 I am</h1>
  <h1 className="ux2 text-4xl sm:text-5xl md:text-8xl font-bold">Brayan Albadam</h1>
  <h1 className="ux text-4xl sm:text-5xl md:text-8xl font-bold">UX Engineer</h1><br/>
  <h2 className="md:text-xl font-semibold text-xs ">Diseñador multimedia y desarrollador Frontend<br/>
  especializado en diseño de experiencia de usuario</h2>
  <br/>
  <div className="flex  justify-stretch ">
  <a href="https://www.facebook.com/Albadam94" target="_blank" rel="noopener noreferrer" className="mr-2">
    <Image src="/IcFacebook.svg" width={30} height={30} quality={100} alt="IconoFacebook" />
  </a>
  <a href="https://www.instagram.com/albadam94/" target="_blank" rel="noopener noreferrer" className="mr-2">
    <Image src="/IcInstagram.svg" width={30} height={30} quality={100} alt="IconoInstagram" />
  </a>
  <a href="https://twitter.com/Albadam94" target="_blank" rel="noopener noreferrer" className="mr-2">
    <Image src="/IcX.svg" width={30} height={30} quality={30} alt="IconoTwitter" />
  </a>
  <a href="https://www.behance.net/brayanalbadam" target="_blank" rel="noopener noreferrer" className="mr-2 mt-1">
    <Image src="/IcBehance.svg" width={30} height={50} quality={30} alt="IconoBehance" />
  </a>
  <a href="https://github.com/albadam94" target="_blank" rel="noopener noreferrer" className="mr-2">
    <Image src="/IcGithub.svg" width={30} height={30} quality={100} alt="IconoGithub" />
  </a>
  <a href="https://www.linkedin.com/in/brayanalbadamvanegas/" target="_blank" rel="noopener noreferrer" className="mr-2">
    <Image src="/IcLinkedin.svg" width={30} height={30} quality={100} alt="IconoLinkedin" />
  </a>
</div>
</div>

<h1 className="ux2 text-4xl sm:text-5xl md:text-8xl font-bold max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 mt-32">Proyectos</h1>

    </main>
  )
}
