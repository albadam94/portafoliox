import Link from "next/link";

export default function NotFound() {
    return (
        <main>
        <div>
            <h1>404</h1>
            <p>Lo siento, no he encontrado la página que buscas.</p>
            <Link href="/" legacyBehavior>
            <a>Volver al inicio</a>
            </Link>
        </div>
        </main>
    );
    }