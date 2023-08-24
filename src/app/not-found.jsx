import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
    <main>
        <div>
            <h1 className="ux2 flex justify-center text-4xl sm:text-5xl md:text-8xl font-bold max-w-7xl mx-auto px-4 sm:px-6 lg:px-9 mt-16">404</h1>
            <Image src="/Lumalee.svg" alt="Lumalee" width={500} height={200} className="mx-auto mb-5"/>
            <p className="flex justify-center mb-6 font-semibold">Oh oh parece que te has perdido solo queda el dulce alivio de que te quedes sin internet</p>
            <Link href="/" legacyBehavior>
                
            <div class="flex justify-center">
                 <button class="bg-blue-950 hover:bg-teal-300 text-white font-semibold py-2 px-4 rounded mb-44">
                        Volver al inicio
                 </button>
            </div>
         </Link>
        </div>
        </main>
        
    );
    }