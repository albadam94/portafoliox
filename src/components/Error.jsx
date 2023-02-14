import React from 'react'
import emoji from '../images/Emoji.png'

import Footer from './Footer'
const Error = () => {
  return (
    <div>
      
      <div className='h-screen w-full flex flex-col justify-center items-center'>
      <img className=' justify-center items-center h-80 ' src={emoji} alt="error 404" />
      <h1 className='text-9xl font-extrabold text-teal-400 tracking-widest' > 404</h1>
      <p className='text-4xl text-gray-400 text-left ml-10 py-20 mt-1' >No se encontró la página</p>
      </div>
      <Footer />
    </div>
  )
}

export default Error