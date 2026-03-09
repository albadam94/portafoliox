"use client";
import { useEffect, useRef } from "react";

const AntigravityCanvas = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef(null);
  const currentRingPos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const PARTICLE_COUNT = 80;
    const PARTICLE_ROWS = 25;

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      angle: Math.random() * Math.PI * 2,
      row: Math.floor(Math.random() * PARTICLE_ROWS),
      opacity: Math.random() * 0.9 + 0.1,
      size: Math.random() * 1.5 + 1,
      speed: (Math.random() - 0.5) * 0.003,
    }));

    // Mouse en coordenadas NORMALIZADAS del viewport completo
    const onMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    const onMouseLeave = () => {
      mouseRef.current = null;
    };

    // Escuchar en window, no en canvas, para capturar todo el viewport
    window.addEventListener("pointermove", onMouseMove);
    window.addEventListener("pointerleave", onMouseLeave);

    let time = 0;
    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      time += 0.006;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Target: mouse o centro
      const target = mouseRef.current || { x: 0.5, y: 0.5 };

      // Lerp muy lento = simula transition: 3s ease del original
      currentRingPos.current.x = lerp(currentRingPos.current.x, target.x, 0.012);
      currentRingPos.current.y = lerp(currentRingPos.current.y, target.y, 0.012);

      // Convertir posición normalizada a píxeles del canvas
      const cx = currentRingPos.current.x * canvas.width;
      const cy = currentRingPos.current.y * canvas.height;

      // Radio oscilando 150–250 como en CSS: ring 6s ease-in-out infinite alternate
      const ringRadius = 200 + Math.sin(time * 0.35) * 50;
      const ringThickness = 60;

      particles.forEach((p) => {
        p.angle += p.speed;

        const radialOffset = ((p.row / PARTICLE_ROWS) - 0.5) * ringThickness;
        const r = ringRadius + radialOffset;

        const x = cx + Math.cos(p.angle) * r;
        const y = cy + Math.sin(p.angle) * r;

        // Parpadeo ocasional
        if (Math.random() < 0.004) {
          p.opacity = Math.random() * 0.9 + 0.1;
        }

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(8, 48, 64, ${p.opacity})`; // #083040
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMouseMove);
      window.removeEventListener("pointerleave", onMouseLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default AntigravityCanvas;