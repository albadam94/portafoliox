import "../globals.css";
import { getMessages } from "next-intl/server";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import Providers from "../components/Providers";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import ClientScrollToTop from "../ClientScrollToTop";
import SmoothCursor from "../components/SmoothCursor.jsx";
import Noisecanvas from "../components/Noisecanvas.jsx";

const metadata = {
  title: "Brayan Albadam-Product Designer",
  description: "Brayan Albadam UX/UI Designer, Product Designer, Diseño web, UX/UI",
  author: "Brayan Albadam Vanegas",
  replyTo: "brayanalbadam@gmail.com",
  keywords: "Product Designer, Diseño UX/UI, Diseñador UX, Desarrollo de software, Identidad Visual, Logotipos, Diseño web, Diseño de aplicaciones móviles, Diseño de experiencia de usuario, Diseño de interfaz de usuario, Prototipado, Investigación de usuarios, Arquitectura de la información, Usabilidad, Accesibilidad, Diseño centrado en el usuario, Estrategia de diseño, Diseño de interacción, Diseño visual, Herramientas de diseño, Figma, Adobe XD, Sketch, InVision, Diseño responsive",
  revisitAfter: "5 days",
  robots: "ALL",
  "google-site-verification": "yDuTKeFjMkJauhbe6vtW82XEOiCm3_Fc6pnDHP45QGs",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <title>{metadata.title}</title>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="author" content={metadata.author} />
        <meta name="reply-to" content={metadata.replyTo} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta name="google-site-verification" content={metadata["google-site-verification"]} />
        <link rel="icon" href="/favicons/Favicon.png" sizes="32x32" type="image/png" />
      </head>
      <body suppressHydrationWarning={true}>
        <Providers messages={messages} locale={locale}>
          <Noisecanvas />
          <Menu />
          <SmoothCursor />
          <div className="relative h-full w-full">
            {children}
          </div>
          <ClientScrollToTop />
          <ScrollShadow />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}