"use client";
import { useState, useEffect } from "react";
import Icons from "./components/Icons";
import Proyectos from "./components/Proyectos";
import { LightRays } from "./components/LightRays";

const LINES = [
  "Hola ✌️ soy Brayan Albadam diseñador digital",
  "Especializado en diseño de experiencia de usuario",
];

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

function Cursor({ blink = false }) {
  return (
    <span
      className={`inline-block w-[2px] h-[1em] bg-current align-middle ml-[1px] ${
        blink ? "animate-blink" : ""
      }`}
    />
  );
}

export default function Home() {
  const { displayed, activeIndex, done } = useTypewriter(LINES, 45);

  return (
    <div>
      <div className="relative text-center font-['Geist'] overflow-hidden min-h-[580px] flex flex-col items-center justify-center w-full bg-[#FBFBFB]">

        <div className="absolute inset-0 pointer-events-none fade-mask-mesh z-0">
          <LightRays />
        </div>

        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div
            className="absolute -bottom-24 left-0 w-full h-80 z-20"
            style={{
              background:
                "linear-gradient(to top, #FBFBFB 10%, rgba(251, 251, 251, 0.7) 40%, transparent 100%)",
            }}
          />
        </div>

        <div className="relative z-20">
          <h1 className="text-custom-blue Title text-4xl mb-3 md:text-7xl font-bold md:mb-6">
            Product <span className="UX">Designer</span>
          </h1>

        <p className="text-Darkcharcoal text-base font-medium leading-tight mb-2">
          {displayed[0]}
          {activeIndex === 0 && !done && <Cursor />}
        </p>

        <p className="text-Darkcharcoal text-base font-medium leading-tight mb-4">
          {displayed[1]}
          {activeIndex === 1 && !done && <Cursor />}
        </p>

          <div className="flex justify-center items-center mt-10">
            <Icons />
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-12 lg:mx-20 md:mb-10">
        <Proyectos className="mb-40 mt-10" />
      </div>
    </div>
  );
}
