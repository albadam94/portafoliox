"use client";
import React, { useEffect, useRef, useCallback } from "react";
import Icons from "./Icons";
import { faReact, faFigma } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FlickeringGrid = ({ squareSize = 4, gridGap = 4, flickerChance = 0.01, color = "#083040", maxOpacity = 0.10 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const squaresRef = useRef([]);

  const setupGrid = useCallback((canvas) => {
    const cols = Math.floor(canvas.width / (squareSize + gridGap));
    const rows = Math.floor(canvas.height / (squareSize + gridGap));
    squaresRef.current = Array.from({ length: cols * rows }, () => ({
      opacity: Math.random() * maxOpacity,
    }));
    return { cols, rows };
  }, [squareSize, gridGap, maxOpacity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      setupGrid(canvas);
    };

    resize();
    window.addEventListener("resize", resize);

    const { cols } = setupGrid(canvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      squaresRef.current.forEach((sq, i) => {
        if (Math.random() < flickerChance) {
          sq.opacity = Math.random() * maxOpacity;
        }
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = col * (squareSize + gridGap);
        const y = row * (squareSize + gridGap);
        ctx.fillStyle = color;
        ctx.globalAlpha = sq.opacity;
        ctx.fillRect(x, y, squareSize, squareSize);
      });
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationRef.current);
    };
  }, [setupGrid, flickerChance, squareSize, gridGap, color, maxOpacity]);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

const Footer = () => {
  return (
    <footer className="relative w-full mt-20 bg-[#F8F9FC] overflow-hidden">
      <FlickeringGrid />

      {/* Difuminado superior */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-6 py-10 flex flex-col lg:flex-row justify-between items-center gap-6">

        {/* Izquierda */}
        <div className="flex flex-col items-center lg:items-start gap-2">
          <span
            className="text-[#083040] font-bold font-['Geist']"
            style={{ fontSize: '24px', letterSpacing: '-1px' }}
          >
            Brayan Albadam
          </span>
          <div className="text-[#083040] text-sm font-normal font-['Geist'] flex items-center gap-3">
            <span>Diseñado en</span>
            <a
              href="https://www.figma.com/file/JkM0L29FITCtiedxzpqkxB/Portafolio-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FontAwesomeIcon
                icon={faFigma}
                className="text-[#083040] transition-transform duration-300 group-hover:scale-125 group-hover:text-[#FFD700]"
                style={{ fontSize: '22px' }}
              />
            </a>
            <span>Desarrollado en</span>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <FontAwesomeIcon
                icon={faReact}
                className="text-[#083040] transition-transform duration-300 group-hover:scale-125 group-hover:text-[#FFD700]"
                style={{ fontSize: '22px' }}
              />
            </a>
          </div>
          <span className="text-gray-400 text-xs font-['Geist']">
            © {new Date().getFullYear()} — Todos los derechos reservados
          </span>
        </div>

        {/* Derecha - Redes */}
        <div className="flex justify-center items-center gap-4">
          <Icons />
        </div>

      </div>
    </footer>
  );
};

export default Footer;