"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

// rgb(76, 181, 245) → funciona sobre fondo claro #FBFBFB
const DEFAULT_COLOR = "rgba(76, 181, 245, 0.35)"

const createRays = (count, cycle) => {
  if (count <= 0) return []
  return Array.from({ length: count }, (_, index) => {
    const left     = 8 + Math.random() * 84
    const rotate   = -28 + Math.random() * 56
    const width    = 160 + Math.random() * 160
    const swing    = 0.8 + Math.random() * 1.8
    const delay    = Math.random() * cycle
    const duration = cycle * (0.75 + Math.random() * 0.5)
    const intensity = 0.5 + Math.random() * 0.4
    return {
      id: `${index}-${Math.round(left * 10)}`,
      left, rotate, width, swing, delay, duration, intensity,
    }
  })
}

const Ray = ({ left, rotate, width, swing, delay, duration, intensity, color, blur, length }) => (
  <motion.div
    className="pointer-events-none absolute -top-[12%] origin-top rounded-full"
    style={{
      left: `${left}%`,
      width: `${width}px`,
      height: length,
      transform: "translateX(-50%)",
      background: `linear-gradient(to bottom, ${color}, transparent)`,
      filter: `blur(${blur}px)`,
      opacity: 0,
      // multiply funciona bien sobre fondo claro #FBFBFB
      mixBlendMode: "multiply",
    }}
    initial={{ rotate }}
    animate={{
      opacity: [0, intensity, 0],
      rotate: [rotate - swing, rotate + swing, rotate - swing],
    }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
      repeatDelay: duration * 0.1,
    }}
  />
)

export function LightRays({
  className = "",
  style = {},
  count = 7,
  color = DEFAULT_COLOR,
  blur = 36,
  speed = 14,
  length = "70vh",
  ...props
}) {
  const [rays, setRays] = useState([])
  const cycleDuration = Math.max(speed, 0.1)

  useEffect(() => {
    setRays(createRays(count, cycleDuration))
  }, [count, cycleDuration])

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] ${className}`}
      style={style}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Glow ambiental top-left */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-50"
          style={{
            background: `radial-gradient(circle at 20% 15%, ${color}, transparent 70%)`,
          }}
        />
        {/* Glow ambiental top-right */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(circle at 80% 10%, ${color}, transparent 75%)`,
          }}
        />
        {/* Rayos animados */}
        {rays.map((ray) => (
          <Ray
            key={ray.id}
            {...ray}
            color={color}
            blur={blur}
            length={length}
          />
        ))}
      </div>
    </div>
  )
}