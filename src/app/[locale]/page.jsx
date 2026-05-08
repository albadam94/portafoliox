"use client";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Icons from "../components/Icons";
import Proyectos from "../components/Proyectos";
import AboutSection from "../components/AboutSection";
import Silk from "../components/Silk";

function useTypewriter(lines, speed = 55) {
  const [displayed, setDisplayed] = useState(lines.map(() => ""));
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    const currentLine = lines[lineIndex];

    if (charIndex < currentLine.length) {
      const t = setTimeout(() => {
        setDisplayed(prev => {
          const next = [...prev];
          next[lineIndex] = currentLine.slice(0, charIndex + 1);
          return next;
        });
        setCharIndex(c => c + 1);
      }, speed);
      return () => clearTimeout(t);
    }

    if (lineIndex < lines.length - 1) {
      const t = setTimeout(() => {
        setLineIndex(i => i + 1);
        setCharIndex(0);
      }, 400);
      return () => clearTimeout(t);
    }

    setDone(true);
  }, [lineIndex, charIndex, done]);

  return { displayed, activeIndex: lineIndex, done };
}

function Cursor() {
  return (
    <span className="inline-block w-[2px] h-[1em] bg-current align-middle ml-[1px]" />
  );
}

export default function Home() {
  const t = useTranslations("hero");
  const LINES = [t("linea1"), t("linea2")];
  const { displayed, activeIndex, done } = useTypewriter(LINES, 45);

  return (
    <div className="relative">

      <div className="sticky top-0 z-10 font-['Geist'] overflow-hidden min-h-[580px] flex flex-col justify-center w-full">

        <div className="absolute inset-0 z-0">
          <Silk />
        </div>

        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div
            className="absolute -bottom-24 left-0 w-full h-80 z-20"
            style={{
              background: "linear-gradient(to top, #0C0C0E 10%, rgba(12,12,14,0.7) 40%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <h1
            className="text-custom-blue font-bold mb-4"
            style={{ fontSize: "clamp(48px, 8vw, 80px)", letterSpacing: "-2px", lineHeight: 1.05 }}
          >
            {t("titulo").split(" ")[0]} <span className="UX">{t("titulo").split(" ")[1]}</span>
          </h1>

          <p
            className="text-[#a0a0a0] font-medium mb-1"
            style={{ fontSize: "clamp(16px, 2.5vw, 24px)", letterSpacing: "-0.5px" }}
          >
            {displayed[0]}
            {activeIndex === 0 && !done && <Cursor />}
          </p>

          <p
            className="text-[#a0a0a0] font-medium mb-4"
            style={{ fontSize: "clamp(16px, 2.5vw, 24px)", letterSpacing: "-0.5px" }}
          >
            {displayed[1]}
            {activeIndex === 1 && !done && <Cursor />}
          </p>

          <div className="flex items-center mt-8">
            <Icons />
          </div>
        </div>
      </div>

      <AboutSection />

      <div className="relative z-30 w-full">
        <Proyectos />
      </div>

    </div>
  );
}