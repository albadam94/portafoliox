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

    const RING_R = 16;
    const BALL_R = 3.5;
    const MAX_OFFSET = RING_R - BALL_R - 1;

    const lerp = (a, b, t) => a + (b - a) * t;

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      const prevX = ringPos.current.x;
      const prevY = ringPos.current.y;

      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.12);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.12);

      const vx = ringPos.current.x - prevX;
      const vy = ringPos.current.y - prevY;

      let tx = vx * 12;
      let ty = vy * 12;

      const dist = Math.sqrt(tx * tx + ty * ty);
      if (dist > MAX_OFFSET) {
        tx = (tx / dist) * MAX_OFFSET;
        ty = (ty / dist) * MAX_OFFSET;
      }

      ballOffset.current.x = lerp(ballOffset.current.x, tx, 0.1);
      ballOffset.current.y = lerp(ballOffset.current.y, ty, 0.1);

      ring.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;

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
          stroke="#4CB5F5"
          strokeWidth="1.5"
          strokeOpacity="0.8"
        />
        {/* Bolita interior */}
        <circle
          ref={ballRef}
          cx="0"
          cy="0"
          r={3.5}
          fill="#4CB5F5"
        />
      </svg>
    </div>
  );
};

export default SmoothCursor;