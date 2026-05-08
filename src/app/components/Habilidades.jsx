"use client";
import { memo, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

// ── Split en caracteres ──────────────────────────────────────────────────────
const splitChars = (text) => {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const seg = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(seg.segment(text), ({ segment }) => segment);
  }
  return Array.from(text);
};

// ── Carácter con flip 3D ─────────────────────────────────────────────────────
const CharBox = memo(({ char, hovered, delay }) => (
  <span
    className="inline-block relative overflow-hidden"
    style={{ height: "1.1em", verticalAlign: "bottom" }}
  >

    <span
      className="inline-block transition-all duration-300"
      style={{
        transform: hovered ? "translateY(-110%)" : "translateY(0)",
        transitionDelay: `${delay}ms`,
        color: hovered ? "#4CB5F5" : "#9CA3AF",
        display: "inline-block",
        transformOrigin: "top center",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
    
    <span
      className="absolute inset-0 inline-block transition-all duration-300"
      style={{
        transform: hovered ? "translateY(0)" : "translateY(110%)",
        transitionDelay: `${delay}ms`,
        color: "#4CB5F5",
        display: "inline-block",
        transformOrigin: "bottom center",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </span>
  </span>
));
CharBox.displayName = "CharBox";

// ── Skill individual ─────────────────────────────────────────────────────────
const SkillItem = ({ name }) => {
  const [hovered, setHovered] = useState(false);
  const chars = useMemo(() => splitChars(name), [name]);

  return (
    <div
      className="flex justify-end cursor-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        className="font-['Geist'] font-bold inline-flex flex-wrap justify-end"
        style={{
          fontSize: "clamp(20px, 3.5vw, 48px)",
          letterSpacing: "-1px",
          lineHeight: 1.15,
        }}
      >
        {chars.map((char, i) => (
          <CharBox key={i} char={char} hovered={hovered} delay={i * 18} />
        ))}
      </span>
    </div>
  );
};


// ── Habilidades ──────────────────────────────────────────────────────────────
const habilidades = [
  "Diseño UX/UI",
  "Investigación de usuarios",
  "Prototipado",
  "Wireframe",
  "Design Thinking",
  "Diseño de producto",
  "Adobe Creative Cloud",
  "Diseño de espacios",
  "Desarrollo Web",
];

export default function Habilidades() {
  const t = useTranslations("habilidades");
  const habilidades = t.raw("items");

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-24 font-['Geist']">

      <h2
        className="font-bold mb-16"
        style={{ fontSize: "clamp(28px, 3vw, 48px)", letterSpacing: "-1px", color: "#ffffff" }}
      >
        {t("titulo")}
      </h2>

      

        <div className="flex-1 flex flex-col justify-center gap-1">
          {habilidades.map((skill) => (
            <SkillItem key={skill} name={skill} />
          ))}
        </div>

      
    </section>
  );
}