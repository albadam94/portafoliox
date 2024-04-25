// Importaciones necesarias
"use client"
import { Archivo } from 'next/font/google';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';
import { ScrollShadow } from '@nextui-org/scroll-shadow';
import Menu from './components/Menu';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import CustomCursor from './components/CustomCursor';

// Configuración de la fuente (suponiendo que Archivo es una fuente de Google Fonts)
const Font = Archivo({ subsets: ['latin'] });

// Objeto de metadatos para el encabezado del documento
const metadata = {
  title: 'UX Albadam',
  description: 'Albadam UX/UI Designer -Desarrollador Frontend, diseño web, UX/UI, Social Media',
  author: 'Brayan Albadam Vanegas',
  replyTo: 'brayanalbadam@gmail.com',
  refresh: '0; url=https://uxalbadam.com',
  keywords: 'Diseño grafico,Diseño UX/UI, Programación, Desarrollo de Software, Identidad Visual, Logotipos, Frontend',
  revisitAfter: '5 days',
  robots: 'ALL',
  'google-site-verification': 'Y0E6OuCeDeetuG8_FSbCEDuPLGl7K8_tDB-w0GyxEJA',
};

// Función de componente RootLayout
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Configuración de metadatos */}
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="reply-to" content={metadata.replyTo} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta name="google-site-verification" content={metadata['google-site-verification']} />
      </head>
      <body className={Font.className}>
        {/* Componentes principales del layout */}
        <Menu />
        <NextUIProvider>
          <CustomCursor />
          {/* La clase 'lg:h-[1450px]' ajusta la altura en dispositivos grandes, asegúrate de necesitar esta clase */}
          <ScrollShadow hideScrollBar className="lg:h-[1450px]">
            {children}
            <ScrollToTopButton />
          </ScrollShadow>
        </NextUIProvider>
        <Footer />
      </body>
    </html>
  );
}
