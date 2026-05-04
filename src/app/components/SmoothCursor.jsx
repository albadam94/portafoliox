"use client";
import { useEffect, useRef } from "react";

const SmoothCursor = () => {
  const ringRef = useRef(null);
  const ballRef = useRef(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const ballOffset = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const ring = ringRef.current;
    const ball = ballRef.current;
    if (!ring || !ball) return;

    const RING_R = 16;   // radio del círculo exterior
    const BALL_R = 3.5;  // radio de la bolita
    const MAX_OFFSET = RING_R - BALL_R - 1; // límite: bolita no sale del anillo

    const lerp = (a, b, t) => a + (b - a) * t;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      const prevX = ringPos.current.x;
      const prevY = ringPos.current.y;

      // Anillo sigue al cursor con lerp
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.12);

      // Velocidad del anillo = dirección del movimiento
      const vx = ringPos.current.x - prevX;
      const vy = ringPos.current.y - prevY;

      // La bolita se desplaza en la dirección del movimiento (inercia)
      let tx = vx * 12;
      let ty = vy * 12;

      // Clamp: bolita no sale del anillo
      const dist = Math.sqrt(tx * tx + ty * ty);
      if (dist > MAX_OFFSET) {
        tx = (tx / dist) * MAX_OFFSET;
        ty = (ty / dist) * MAX_OFFSET;
      }

      // Suavizar posición de la bolita
      ballOffset.current.x = lerp(ballOffset.current.x, tx, 0.1);
      ballOffset.current.y = lerp(ballOffset.current.y, ty, 0.1);

      // Aplicar posición del anillo
      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;

      // Mover la bolita dentro del SVG
      ball.setAttribute("cx", ballOffset.current.x.toFixed(2));
      ball.setAttribute("cy", ballOffset.current.y.toFixed(2));

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ willChange: "transform" }}
    >
      <svg
        width="40"
        height="40"
        viewBox="-20 -20 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Anillo exterior */}
        <circle
          cx="0"
          cy="0"
          r={16}
          stroke="#083040"
          strokeWidth="1.5"
        />
        {/* Bolita interior que rueda */}
        <circle
          ref={ballRef}
          cx="0"
          cy="0"
          r={3.5}
          fill="#083040"
        />
      </svg>
    </div>
  );
};

export default SmoothCursor;