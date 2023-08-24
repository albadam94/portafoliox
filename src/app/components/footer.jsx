import React from "react";
import Image from "next/image";

const socialLinks = [
  { url: "https://www.facebook.com/Albadam94", icon: "/BlancoFacebook.svg", alt: "Facebook" },
  { url: "https://www.instagram.com/albadam94/", icon: "/BlancoInstagram.svg", alt: "Instagram" },
  { url: "https://twitter.com/Albadam94", icon: "/BlancoX.svg", alt: "Twitter" },
  { url: "https://www.behance.net/brayanalbadam", icon: "/BlancoBH.svg", alt: "Behance" },
  { url: "https://github.com/albadam94", icon: "/BlancoGit.svg", alt: "GitHub" },
  { url: "https://www.linkedin.com/in/brayanalbadamvanegas/", icon: "/BlancoLinkedin.svg", alt: "LinkedIn" },
];

export default function Footer() {
  return (
    <div>
      <footer className="footer justify-stretch">
        <div className="flex items-center justify-between max-w-7xl mx-auto px-2 sm:px-6 lg:px-9 mt-12">
          <p className="text-cyan-50">
            Diseño-Desarrollo: UX Albadam
            <br />
            Desarrollado en NextJS-Tailwind CSS | Deployment Netlify
          </p>
          <div className="flex sm:hidden">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mr-2 ${link.alt === "Behance" ? "mt-1" : ""}`}
              >
                <Image
                  src={link.icon}
                  width={30}
                  height={link.alt === "Behance" ? 50 : 30}
                  quality={100}
                  alt={link.alt}
                />
              </a>
            ))}
          </div>
          <div className="hidden sm:flex">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mr-2 ${link.alt === "Behance" ? "mt-1" : ""}`}
              >
                <Image
                  src={link.icon}
                  width={30}
                  height={link.alt === "Behance" ? 50 : 30}
                  quality={100}
                  alt={link.alt}
                />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}