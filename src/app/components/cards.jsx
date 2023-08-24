import React from "react"
import Image from "next/image"

export default function Cards() {
    return (
        <div class="grid-cols-1 sm:grid md:grid-cols-2 mt-20">
  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-teal-200  sm:shrink-0 sm:grow sm:basis-0">
    <a href="https://www.behance.net/gallery/176068785/La-Cerveceria-APP" target="_blank" rel="noopener noreferrer">
      <Image
        class="rounded-t-lg"
        src="/Lacerveceria.svg"
        width={800  }
        height={400}
        alt="Diseño app la cerveceria" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl  leading-tight dark:text-cyan-950 font-semibold">
        La cerveceria
      </h5>
      <p class="mb-4 text-base text-cyan-950 dark:text-cyan-950">
        Diseño de una app para una cerveceria artesanal, los usuarios pueden solicitar<br/>
        sus productos y hacer reservas.
      </p>
    </div>
  </div>
  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-teal-200 sm:shrink-0 sm:grow sm:basis-0">
    <a href="https://www.behance.net/gallery/176885333/Lets-Design-Caso-de-Estudio "target="_blank" rel="noopener noreferrer ">
      <Image 
        class="rounded-t-lg bg-white"
        src="/Letdesign.svg"
        width={750}
        height={400}
        alt="Diseño sitio web de aprendizaje" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl  leading-tight dark:text-cyan-950 font-semibold">
       Let´s Design
      </h5>
      <p class="mb-4 text-base text-cyan-950 dark:text-cyan-950">
        Es una app web que permite a usuarios de bajos recursos<br/>
        aprender sobre diseño de manera gratuita.
      </p>
    </div>
  </div>
  <div
    class="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-teal-200 sm:shrink-0 sm:grow sm:basis-0">
    <a href="https://www.behance.net/gallery/171112919/DonarAPP" target="_blank" rel="noopener noreferrer ">
      <Image
        class="rounded-t-lg"
        src="/Donar.svg"
        width={800}
        height={100}
        alt="DonarAPP aplicacion de donaciones" />
    </a>
    <div class="p-6">
      <h5
        class="mb-2 text-xl  leading-tight text-neutral-800 dark:text-cyan-950 font-semibold">
        DonarApp
      </h5>
      <p class="mb-8 text-base text-cyan-950 dark:text-cyan-950">
        Diseño de una aplicación mobile que permita a los usuarios realizar donaciones<br/>
        a diferentes fundaciones.
      </p>
    </div>
  </div>
  <div
    class="mx-3 mt-6 mb-48 flex flex-col self-start rounded-lg  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-teal-200 sm:shrink-0 sm:grow sm:basis-0">
    <a href="https://www.behance.net/gallery/177325279/UX-App-Ejercicios-Universidad-SanBuenaventura"  target="_blank" rel="noopener noreferrer ">
      <Image className="bg-white rounded-t-lg"
        src="/AppEjercicios.svg"
        width={750}
        height={100}
        alt="App Ejercicios" />
    </a>
    <div class="p-6">
      <h5
        class="mb-0 text-xl  leading-tight text-neutral-800 dark:text-cyan-950 font-semibold">
        App Ejercicios
      </h5>
      <p class="mb-0 text-base text-cyan-950 dark:text-cyan-950">
        Diseño de una aplicación que permita a los usuarios seleccionar los ejercicios<br/>
        acorde a la categoria y tiempo que deseen.
      </p>
    </div>
  </div>
</div>

    )
}