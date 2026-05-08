"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

// ── BorderGlow adaptado al portafolio ────────────────────────────────────────
function parseHSL(hslStr) {
  const match = hslStr.match(/([\d.]+)\s*([\d.]+)%?\s*([\d.]+)%?/);
  if (!match) return { h: 199, s: 89, l: 63 };
  return { h: parseFloat(match[1]), s: parseFloat(match[2]), l: parseFloat(match[3]) };
}

function buildBoxShadow(glowColor, intensity) {
  const { h, s, l } = parseHSL(glowColor);
  const base = `${h}deg ${s}% ${l}%`;
  const layers = [
    [0,0,0,1,100,true],[0,0,1,0,60,true],[0,0,3,0,50,true],
    [0,0,6,0,40,true],[0,0,15,0,30,true],[0,0,25,2,20,true],[0,0,50,2,10,true],
    [0,0,1,0,60,false],[0,0,3,0,50,false],[0,0,6,0,40,false],
    [0,0,15,0,30,false],[0,0,25,2,20,false],[0,0,50,2,10,false],
  ];
  return layers.map(([x,y,blur,spread,alpha,inset]) => {
    const a = Math.min(alpha * intensity, 100);
    return `${inset ? 'inset ' : ''}${x}px ${y}px ${blur}px ${spread}px hsl(${base} / ${a}%)`;
  }).join(', ');
}

function buildMeshGradients(colors) {
  const positions = ['80% 55%','69% 34%','8% 6%','41% 38%','86% 85%','82% 18%','51% 4%'];
  const map = [0,1,2,0,1,2,1];
  const gradients = positions.map((pos, i) =>
    `radial-gradient(at ${pos}, ${colors[Math.min(map[i], colors.length-1)]} 0px, transparent 50%)`
  );
  gradients.push(`linear-gradient(${colors[0]} 0 100%)`);
  return gradients;
}

const CVButton = ({ href, children }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [angle, setAngle] = useState(45);
  const [proximity, setProximity] = useState(0);

  const colors = ['#4CB5F5', '#083040', '#4CB5F5'];
  const glowColor = '199 89 63';
  const bgColor = '#ffffff';
  const borderRadius = 999;
  const glowRadius = 20;
  const coneSpread = 30;

  const getCenter = useCallback((el) => {
    const { width, height } = el.getBoundingClientRect();
    return [width / 2, height / 2];
  }, []);

  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const [cx, cy] = getCenter(el);
    const dx = x - cx, dy = y - cy;
    const kx = dx !== 0 ? cx / Math.abs(dx) : Infinity;
    const ky = dy !== 0 ? cy / Math.abs(dy) : Infinity;
    setProximity(Math.min(Math.max(1 / Math.min(kx, ky), 0), 1));
    const rad = Math.atan2(dy, dx);
    let deg = rad * (180 / Math.PI) + 90;
    if (deg < 0) deg += 360;
    setAngle(deg);
  }, [getCenter]);

  const edgeSensitivity = 20;
  const borderOpacity = hovered
    ? Math.max(0, (proximity * 100 - edgeSensitivity - 20) / (100 - edgeSensitivity - 20))
    : 0;
  const glowOpacity = hovered
    ? Math.max(0, (proximity * 100 - edgeSensitivity) / (100 - edgeSensitivity))
    : 0;

  const mesh = buildMeshGradients(colors);
  const borderBg = mesh.map(g => `${g} border-box`);
  const angleDeg = `${angle.toFixed(1)}deg`;

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerMove={handleMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => { setHovered(false); setProximity(0); }}
      className="relative grid isolate font-['Geist'] font-semibold text-sm"
      style={{
        height: '40px',
        padding: '0 20px',
        borderRadius: `${borderRadius}px`,
        background: bgColor,
        color: '#08090B',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid rgba(255,255,255,0.15)',
        transform: 'translate3d(0,0,0.01px)',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        transition: 'background 0.2s',
      }}
    >
      <div
        className="absolute inset-0 -z-[1]"
        style={{
          borderRadius: `${borderRadius}px`,
          border: '1px solid transparent',
          background: [
            `linear-gradient(${bgColor} 0 100%) padding-box`,
            'linear-gradient(rgb(255 255 255 / 0%) 0% 100%) border-box',
            ...borderBg,
          ].join(', '),
          opacity: borderOpacity,
          maskImage: `conic-gradient(from ${angleDeg} at center, black ${coneSpread}%, transparent ${coneSpread+15}%, transparent ${100-coneSpread-15}%, black ${100-coneSpread}%)`,
          WebkitMaskImage: `conic-gradient(from ${angleDeg} at center, black ${coneSpread}%, transparent ${coneSpread+15}%, transparent ${100-coneSpread-15}%, black ${100-coneSpread}%)`,
          transition: hovered ? 'opacity 0.25s ease-out' : 'opacity 0.75s ease-in-out',
        }}
      />

      <span
        className="absolute pointer-events-none z-[1]"
        style={{
          inset: `${-glowRadius}px`,
          borderRadius: `${borderRadius + glowRadius}px`,
          maskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
          WebkitMaskImage: `conic-gradient(from ${angleDeg} at center, black 2.5%, transparent 10%, transparent 90%, black 97.5%)`,
          opacity: glowOpacity,
          mixBlendMode: 'plus-lighter',
          transition: hovered ? 'opacity 0.25s ease-out' : 'opacity 0.75s ease-in-out',
        }}
      >
        <span
          className="absolute"
          style={{
            inset: `${glowRadius}px`,
            borderRadius: `${borderRadius}px`,
            boxShadow: buildBoxShadow(glowColor, 0.7),
          }}
        />
      </span>

      <span className="relative z-[2]">{children}</span>
    </a>
  );
};

const FlagUS = () => (
  <svg viewBox="0 0 32 32" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="circle-us">
      <circle cx="16" cy="16" r="16" />
    </clipPath>
    <g clipPath="url(#circle-us)">
      <rect width="32" height="32" fill="#B22234" />
      <rect y="2.46" width="32" height="2.46" fill="#fff" />
      <rect y="7.38" width="32" height="2.46" fill="#fff" />
      <rect y="12.31" width="32" height="2.46" fill="#fff" />
      <rect y="17.23" width="32" height="2.46" fill="#fff" />
      <rect y="22.15" width="32" height="2.46" fill="#fff" />
      <rect y="27.08" width="32" height="2.46" fill="#fff" />
      <rect width="13" height="17.23" fill="#3C3B6E" />
      {[...Array(5)].map((_, row) =>
        [...Array(row % 2 === 0 ? 6 : 5)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={(row % 2 === 0 ? 1.1 : 2.3) + col * 2.2}
            cy={1.5 + row * 3.1}
            r="0.7"
            fill="#fff"
          />
        ))
      )}
    </g>
  </svg>
);

const FlagCO = () => (
  <svg viewBox="0 0 32 32" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="circle-co">
      <circle cx="16" cy="16" r="16" />
    </clipPath>
    <g clipPath="url(#circle-co)">
      <rect width="32" height="32" fill="#CE1126" />
      <rect width="32" height="16" fill="#FCD116" />
      <rect y="16" width="32" height="8" fill="#003087" />
    </g>
  </svg>
);

const LangToggle = ({ lang, onToggle, size = "md" }) => {
  const [flipping, setFlipping] = useState(false);

  const handleClick = () => {
    setFlipping(true);
    setTimeout(() => {
      onToggle();
      setFlipping(false);
    }, 200);
  };

  const isEn = lang === "En";
  const btnSize = size === "sm" ? "36px" : "40px";
  const flagSize = size === "sm" ? "20px" : "22px";

  return (
    <button
      onClick={handleClick}
      aria-label="Cambiar idioma"
      title={isEn ? "Switch to Spanish" : "Switch to English"}
      style={{
        width: btnSize,
        height: btnSize,
        borderRadius: "50%",
        border: "2px solid rgba(255,255,255,0.12)",
        background: "rgba(255,255,255,0.05)",
        cursor: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "border-color 0.2s, background 0.2s",
        perspective: "600px",
        overflow: "hidden",
        flexShrink: 0,
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
        e.currentTarget.style.background = "rgba(255,255,255,0.1)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: flagSize,
          height: flagSize,
          transform: flipping ? "rotateY(90deg)" : "rotateY(0deg)",
          transition: "transform 0.2s ease-in-out",
        }}
      >
        {isEn ? <FlagUS /> : <FlagCO />}
      </div>
    </button>
  );
};

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations("nav");

  const isEn = locale === "en";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleLang = () => {
    const nextLocale = isEn ? "es" : "en";
    router.replace(pathname, { locale: nextLocale });
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("Proyectos");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/${locale}#Proyectos`;
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const linkClass = (href) =>
    pathname === href
      ? "px-4 py-2 rounded-2xl font-medium text-sm bg-white text-[#08090B] transition-all duration-200"
      : "px-4 py-2 rounded-2xl font-medium text-sm text-[#888888] hover:text-white transition-all duration-200";

  const plainLinkClass =
    "px-4 py-2 rounded-2xl font-medium text-sm text-[#888888] hover:text-white transition-all duration-200";

  return (
    <nav
      className="menu mt-0 sticky top-0 z-50 py-3 px-4"
      style={{
        backgroundColor: "#0C0C0E",
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14">

          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                className="h-10 w-14 brightness-0 invert"
                src="/Logos/Logo.svg"
                alt="Logo"
                width={56}
                height={40}
              />
            </Link>
          </div>

          <div className="hidden lg:flex justify-center items-center space-x-1 font-['Geist'] ml-auto mr-4">
            <Link href="/" className={linkClass("/")}>
              {t("inicio")}
            </Link>
            <button className={plainLinkClass} onClick={scrollToProjects}>
              {t("proyectos")}
            </button>
            <Link href="/acerca" className={linkClass("/acerca")}>
              {t("acerca")}
            </Link>
            <a href="mailto:brayanalbadam@gmail.com" className={plainLinkClass}>
              {t("contacto")}
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-3 font-['Geist']">
            <CVButton href="https://drive.google.com/file/d/1OyqOQWaFNqTk0MlQ5NlPZFLWZciZO3px/view?usp=sharing">
              {t("descargarCV")}
            </CVButton>

            <LangToggle lang={isEn ? "En" : "Es"} onToggle={toggleLang} size="md" />
          </div>

          <div className="lg:hidden flex items-center gap-3">
            <LangToggle lang={isEn ? "En" : "Es"} onToggle={toggleLang} size="sm" />
            <button
              className="text-[#c0c0c0] hover:text-white transition-colors duration-200 p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon
                icon={menuOpen ? faXmark : faBars}
                className="h-5 w-5"
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="block lg:hidden pb-4 font-['Geist']"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              paddingTop: "12px",
              marginTop: "8px",
            }}
          >
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className={`block mt-2 px-4 py-2 rounded-2xl text-sm transition-all ${
                pathname === "/"
                  ? "bg-white text-[#08090B] font-medium"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              {t("inicio")}
            </Link>

            <button
              onClick={scrollToProjects}
              className="block mt-2 px-4 py-2 rounded-2xl text-[#888888] hover:text-white transition-colors text-sm w-full text-left"
            >
              {t("proyectos")}
            </button>

            <Link
              href="/acerca"
              onClick={() => setMenuOpen(false)}
              className={`block mt-2 px-4 py-2 rounded-2xl text-sm transition-all ${
                pathname === "/acerca"
                  ? "bg-white text-[#08090B] font-medium"
                  : "text-[#888888] hover:text-white"
              }`}
            >
              {t("acerca")}
            </Link>

            <a
              href="mailto:brayanalbadam@gmail.com"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 px-4 py-2 rounded-2xl text-sm text-[#888888] hover:text-white transition-all"
            >
              {t("contacto")}
            </a>

            <CVButton href="https://drive.google.com/file/d/1OyqOQWaFNqTk0MlQ5NlPZFLWZciZO3px/view?usp=sharing">
              {t("descargarCV")}
            </CVButton>
          </div>
        )}
      </div>
    </nav>
  );
}