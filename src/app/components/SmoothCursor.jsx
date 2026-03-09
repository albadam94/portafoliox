"use client";
import { useEffect, useRef } from "react";

const SmoothCursor = () => {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const currentAngle = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      const dx = posRef.current.x - currentPos.current.x;
      const dy = posRef.current.y - currentPos.current.y;

      currentPos.current.x = lerp(currentPos.current.x, posRef.current.x, 0.1);
      currentPos.current.y = lerp(currentPos.current.y, posRef.current.y, 0.1);

      // Rotar según dirección de movimiento
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        const angleDiff = ((targetAngle - currentAngle.current + 540) % 360) - 180;
        currentAngle.current += angleDiff * 0.12;
      }

      cursor.style.transform = `
        translate(${currentPos.current.x}px, ${currentPos.current.y}px)
        translate(-50%, -50%)
        rotate(${currentAngle.current}deg)
      `;

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
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ willChange: "transform" }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2L4 20L12 16L20 20L12 2Z"
          fill="#083040"
          stroke="#083040"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default SmoothCursor;