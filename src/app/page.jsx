import React from "react";
import Image from "next/image";
import Cards from "./components/cards";
import ScrollToTopButton from "./components/ScrollToTopButton";

const socialLinks = [
  { url: "https://www.facebook.com/Albadam94", icon: "/IcFacebook.svg", alt: "Facebook" },
  { url: "https://www.instagram.com/albadam94/", icon: "/IcInstagram.svg", alt: "Instagram" },
  { url: "https://twitter.com/Albadam94", icon: "/IcX.svg", alt: "Twitter" },
  { url: "https://www.behance.net/brayanalbadam", icon: "/IcBehance.svg", alt: "Behance" },
  { url: "https://github.com/albadam94", icon: "/IcGithub.svg", alt: "GitHub" },
  { url: "https://www.linkedin.com/in/brayanalbadamvanegas/", icon: "/IcLinkedin.svg", alt: "LinkedIn" },
];


const HomePage = () => {
  return (
    <main>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 md:mt-40 mt-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Hi 👋 I am</h2>
        <h1 className="ux2 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold">Brayan Albadam</h1>
        <h1 className="ux text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mt-3">UX Engineer</h1>
        <p className="md:text-xl font-semibold text-xs mt-5">
          Diseñador multimedia y desarrollador Frontend<br />
          especializado en diseño de experiencia de usuario
        </p>
        <div className="flex justify-stretch mt-3">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`mr-2 ${link.alt === "Behance" ? "mt-1" : ""}`}
            >
              <Image src={link.icon} width={30} height={30} quality={100} alt={link.alt} />
            </a>
          ))}
        </div>
      </div>

      <h1 id="Proyectos" className="ux2 text-4xl sm:text-5xl md:text-8xl font-bold max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 md:mt-32 mt-10">Proyectos</h1>

      <Cards />
      <ScrollToTopButton />
    </main>
  );
};

export default HomePage;
