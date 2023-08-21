import React from "react"
import Image from "next/image"

export default function Footer() {
    return (
        <div>
        <footer class="footer justify-stretch">
            <p className="text-cyan-50 max-w-7xl mx-auto px-2 sm:px-6 lg:px-9 mt-12">Diseño-Desarrollo: UX Albadam
            <br/>Desarrollado en NextJS-Tailwind CSS | Deployment Netlify
            </p>
        <div className="flex justify-end mr-24 max-w-sm mx-auto px-2 sm:px-6 lg:px-16  ">
  <a href="https://www.facebook.com/Albadam94" target="_blank" rel="noopener noreferrer" className="mr-2">
    <Image src="/BlancoFacebook.svg" width={30} height={30} quality={100} alt="IconoFacebook" />
  </a>
  <a href="https://www.instagram.com/albadam94/" target="_blank" rel="noopener noreferrer" className="mr-2">
    <Image src="/BlancoInstagram.svg" width={30} height={30} quality={100} alt="IconoInstagram" />
  </a>
  <a href="https://twitter.com/Albadam94" target="_blank" rel="noopener noreferrer" className="mr-2">
    <Image src="/BlancoX.svg" width={30} height={30} quality={30} alt="IconoTwitter" />
  </a>
  <a href="https://www.behance.net/brayanalbadam" target="_blank" rel="noopener noreferrer" className="mr-2 mt-1">
    <Image src="/BlancoBH.svg" width={30} height={50} quality={30} alt="IconoBehance" />
  </a>
  <a href="https://github.com/albadam94" target="_blank" rel="noopener noreferrer" className="mr-2">
    <Image src="/BlancoGit.svg" width={30} height={30} quality={100} alt="IconoGithub" />
  </a>
  <a href="https://www.linkedin.com/in/brayanalbadamvanegas/" target="_blank" rel="noopener noreferrer" className="mr-2">
    <Image src="/BlancoLinkedin.svg" width={30} height={30} quality={100} alt="IconoLinkedin" />
  </a>
</div>
              
            
        </footer>
        </div>
    ) 
}