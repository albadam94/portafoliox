import "../globals.css";
import { getMessages } from "next-intl/server";
import { ScrollShadow } from "@nextui-org/scroll-shadow";
import Providers from "../components/Providers";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import ClientScrollToTop from "../ClientScrollToTop";
import SmoothCursor from "../components/SmoothCursor.jsx";
import Noisecanvas from "../components/Noisecanvas.jsx";

const DOMAIN = "https://www.brayanalbadam.com";

const seoEs = {
  title: "Brayan Albadam — Product Designer",
  description: "Diseñador digital especializado en UX/UI, Product Design y desarrollo frontend. Creo experiencias digitales de principio a fin.",
  keywords: "Product Designer, Diseño UX/UI, Diseñador UX, Desarrollo de software, Identidad Visual, Logotipos, Diseño web, Diseño de aplicaciones móviles, Diseño de experiencia de usuario, Diseño de interfaz de usuario, Prototipado, Investigación de usuarios, Arquitectura de la información, Usabilidad, Accesibilidad, Diseño centrado en el usuario, Estrategia de diseño, Diseño de interacción, Diseño visual, Figma, Adobe XD, Sketch, InVision, Diseño responsive",
};

const seoEn = {
  title: "Brayan Albadam — Product Designer",
  description: "Digital designer specialized in UX/UI, Product Design and frontend development. I create end-to-end digital experiences.",
  keywords: "Product Designer, UX/UI Design, UX Designer, Software Development, Visual Identity, Logos, Web Design, Mobile App Design, User Experience Design, User Interface Design, Prototyping, User Research, Information Architecture, Usability, Accessibility, User-Centered Design, Design Strategy, Interaction Design, Visual Design, Figma, Adobe XD, Responsive Design",
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Brayan Albadam",
  jobTitle: "Product Designer",
  url: DOMAIN,
  email: "brayanalbadam@gmail.com",
  sameAs: [
    "https://www.linkedin.com/in/brayanalbadamvanegas",
    "https://www.behance.net/brayanalbadam",
    "https://github.com/albadam94",
    "https://dribbble.com/Albadam94",
  ],
  knowsAbout: ["UX Design", "UI Design", "Product Design", "Frontend Development", "Figma"],
  nationality: "Colombian",
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();
  const seo = locale === "en" ? seoEn : seoEs;
  const canonicalUrl = locale === "es" ? DOMAIN : `${DOMAIN}/en`;

  return (
    <html lang={locale}>
      <head>
        <title>{seo.title}</title>
        <meta name="title" content={seo.title} />
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
        <meta name="author" content="Brayan Albadam Vanegas" />
        <meta name="reply-to" content="brayanalbadam@gmail.com" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content={locale === "en" ? "English" : "Spanish"} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="google-site-verification" content="yDuTKeFjMkJauhbe6vtW82XEOiCm3_Fc6pnDHP45QGs" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={`${DOMAIN}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Brayan Albadam — Product Designer" />
        <meta property="og:site_name" content="Brayan Albadam" />
        <meta property="og:locale" content={locale === "en" ? "en_US" : "es_CO"} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={canonicalUrl} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={`${DOMAIN}/og-image.png`} />
        <meta name="twitter:creator" content="@albadam94" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />

        <link rel="icon" href="/Favicons/Favicon.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/Favicons/Favicon.png?v=2" />

        <link rel="alternate" hrefLang="es" href={DOMAIN} />
        <link rel="alternate" hrefLang="en" href={`${DOMAIN}/en`} />
        <link rel="alternate" hrefLang="x-default" href={DOMAIN} />
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