"use client"
import { Archivo} from 'next/font/google'
import './globals.css'
import {NextUIProvider} from "@nextui-org/react";
import {ScrollShadow} from "@nextui-org/scroll-shadow";
import Menu from './components/Menu';
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import CustomCursor from './components/CustomCursor'

const Font = Archivo({ subsets: [ "latin"] })

const metadata = {
  title: 'UX Albadam',
 description: 'Albadam Ux-Engineer - Diseñador UX/UI-Desarrollador Frontend, diseño web, UX/UI, Social Media',
 additionalMetaTags: [
 { name: 'AUTHOR', content: 'Brayan Albadam Vanegas' },
 { name: 'REPLY-TO', content: 'brayanalbadam@gmail.com' },
 { rel: 'made', href: 'mailto:brayanalbadam@gmail.com' },
 { 'http-equiv': 'refresh', content: '0; url=https://uxalbadam.com' },
 { name: 'DESCRIPTION', content: 'Albadam Ux-Engineer - Diseñador UX/UI-Desarrollador Frontend, diseño web, UX/UI, Social Media' },
 { name: 'KEYWORDS', content: 'Diseño grafico,Diseño,UX/UI,Programación,Desarrollo de Software,Identidad Visual,Logotipos, Frontend' },
 { name: 'Revisit-after', content: '5 days' },
 { name: 'robots', content: 'ALL' },
 { name: 'google-site-verification', content: 'Y0E6OuCeDeetuG8_FSbCEDuPLGl7K8_tDB-w0GyxEJA' },
 { name: 'robots', content: 'index, follow' }
]
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
    
      
      <body className={Font.className}>

        <Menu/>
      <NextUIProvider>
      <CustomCursor /> 
          <ScrollShadow hideScrollBar className=' lg:h-[1450px]'>
            {children}
            <ScrollToTopButton/>
            </ScrollShadow>
            <ScrollToTopButton/>
      </NextUIProvider>

      <Footer/>
      </body>
    </html>
  )
}
