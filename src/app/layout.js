"use client";

import { Archivo } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CustomCursor from "./components/CustomCursor";
import { TracingBeam } from "./components/TracingBeam";

const Font = Archivo({ subsets: ["latin"] });

const metadata = {
  title: "Brayan Albadam-Product Designer",
  description: "Brayan Albadam UX/UI Designer, Product Designer, Diseño web, UX/UI",
  author: "Brayan Albadam Vanegas",
  replyTo: "brayanalbadam@gmail.com",
  keywords:
    "Product Designer, Diseño UX/UI, Diseñador UX, Desarrollo de software, Identidad Visual, Logotipos, Diseño web, Diseño de aplicaciones móviles, Diseño de experiencia de usuario, Diseño de interfaz de usuario, Prototipado, Investigación de usuarios, Arquitectura de la información, Usabilidad, Accesibilidad, Diseño centrado en el usuario, Estrategia de diseño, Diseño de interacción, Diseño visual, Herramientas de diseño, Figma, Adobe XD, Sketch, InVision, Diseño responsive",
  revisitAfter: "5 days",
  robots: "ALL",
  "google-site-verification": "yDuTKeFjMkJauhbe6vtW82XEOiCm3_Fc6pnDHP45QGs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="reply-to" content={metadata.replyTo} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta
          name="google-site-verification"
          content={metadata["google-site-verification"]}
        />
      </head>
      <body className={Font.className}>
        <NextUIProvider>
          <Menu />
          <CustomCursor />

          <TracingBeam>
            {children}
          </TracingBeam>

          <ScrollToTopButton />
          <ScrollShadow />
          <Footer />
        </NextUIProvider>
      </body>
    </html>
  );
}
