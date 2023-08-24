'use client'
import React from 'react'
import './globals.css'
import { Plus_Jakarta_Sans} from 'next/font/google'
import Menu from './components/menu'
import Footer from './components/footer'
import {NextUIProvider} from '@nextui-org/react'






export const metadata = {
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

const Jakarta= Plus_Jakarta_Sans({
  weights: [400,500,600, 700],
  styles: ['normal', 'italic'],
  subsets: ['latin-ext'],

})

export default function RootLayout({ children }) {
  return (
   
    <html lang="en">
    
      <body className={Jakarta.className}>
       
     
       
        <Menu/>
        <NextUIProvider>
        {children}
       
    
      </NextUIProvider>
    
        <Footer />


      
     
      </body>
      
    </html>
   
  
  )
}
