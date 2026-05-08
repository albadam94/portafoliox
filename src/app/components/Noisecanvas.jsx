"use client";
import { useEffect, useRef } from "react";

export default function NoiseCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let frameCount = 0;

    const resize = () => {
      // Resolución reducida para performance — CSS lo escala al 100%
      canvas.width = Math.ceil(window.innerWidth / 2);
      canvas.height = Math.ceil(window.innerHeight / 2);
    };

    const generateNoise = () => {
      const { width, height } = canvas;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i]     = value;  // R
        data[i + 1] = value;  // G
        data[i + 2] = value;  // B
        data[i + 3] = 28;     // Alpha
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      frameCount++;
      // Actualiza cada 2 frames (~30fps) para look más orgánico y menos CPU
      if (frameCount % 2 === 0) {
        generateNoise();
      }
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9998,
        opacity: 0.10,
        mixBlendMode: "screen",
        imageRendering: "pixelated",
      }}
      aria-hidden="true"
    />
  );
}