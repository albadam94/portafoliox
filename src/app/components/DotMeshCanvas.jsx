"use client";
import { useEffect, useRef } from "react";

const SPACING = 36;
const DOT_R = 1.4;
const INFLUENCE = 110;
const MAX_SHIFT = 18;
const DOT_BASE_ALPHA = 0.28;
const DOT_HOVER_ALPHA = 0.85;

const DotMeshCanvas = () => {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const dotsRef = useRef([]);
  const dimsRef = useRef({ W: 0, H: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      const W = rect.width;
      const H = rect.height;
      dimsRef.current = { W, H };
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);

      const cols = Math.ceil(W / SPACING) + 2;
      const rows = Math.ceil(H / SPACING) + 2;
      dotsRef.current = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dotsRef.current.push({
            ox: (c - 0.5) * SPACING,
            oy: (r - 0.5) * SPACING,
            x: (c - 0.5) * SPACING,
            y: (r - 0.5) * SPACING,
            alpha: DOT_BASE_ALPHA,
          });
        }
      }
    };

    const draw = () => {
      const { W, H } = dimsRef.current;
      ctx.clearRect(0, 0, W, H);

      const { x: mx, y: my } = mouseRef.current;

      for (const d of dotsRef.current) {
        const dx = mx - d.ox;
        const dy = my - d.oy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const t = Math.max(0, 1 - dist / INFLUENCE);
        const ease = t * t * (3 - 2 * t);

        const targetX = d.ox - (dx / (dist + 1)) * MAX_SHIFT * ease;
        const targetY = d.oy - (dy / (dist + 1)) * MAX_SHIFT * ease;

        d.x += (targetX - d.x) * 0.12;
        d.y += (targetY - d.y) * 0.12;
        d.alpha +=
          (DOT_BASE_ALPHA + (DOT_HOVER_ALPHA - DOT_BASE_ALPHA) * ease - d.alpha) * 0.1;

        ctx.beginPath();
        ctx.arc(d.x, d.y, DOT_R + ease * 0.8, 0, Math.PI * 2);
        // Siempre oscuro — la página siempre es blanca
        ctx.fillStyle = `rgba(15,23,42,${d.alpha.toFixed(3)})`;
        ctx.fill();
      }

      if (mx > 0 && mx < W) {
        const grd = ctx.createRadialGradient(mx, my, 0, mx, my, 52);
        grd.addColorStop(0, "rgba(15,23,42,0.06)");
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(mx, my, 52, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    const onTouchMove = (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    };

    const ro = new ResizeObserver(() => {
      cancelAnimationFrame(rafRef.current);
      setup();
      draw();
    });
    ro.observe(canvas);

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });

    setup();
    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
      canvas.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
    />
  );
};

export default DotMeshCanvas;
 