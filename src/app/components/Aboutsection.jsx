"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";

const TITLE_TEXT =
  "Realizo diseños multidisciplinarios que combina estrategia, diseño y desarrollo para ofrecer soluciones integrales de principio a fin.";

const PARA_LINES = [
  "Lo hago de 3 maneras:",
  "Trabajando con clientes para crear sistemas y soluciones que resuelvan sus desafíos,",
  "Desarrollando proyectos internos enfocados en construir productos que la gente quiera,",
  "Y dirigiendo iniciativas que reúnen a los diseñadores y desarrolladores más brillantes.",
];

const Word = ({ text, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-[3px] inline-block">
      <span style={{ color: "#9CA3AF", opacity: 0.08 }}>{text}</span>
      <motion.span
        style={{ opacity, color: "#9CA3AF" }}
        className="absolute inset-0"
      >
        {text}
      </motion.span>
    </span>
  );
};

const TextReveal = ({ text, progress, scrollStart, scrollEnd, style }) => {
  if (!text || typeof text !== "string") return null;
  const words = text.trim().split(/\s+/);
  const rangeSize = scrollEnd - scrollStart;

  return (
    <span className="flex flex-wrap" style={style}>
      {words.map((word, i) => {
        const start = scrollStart + (i / words.length) * rangeSize;
        const end = start + rangeSize / words.length;
        return (
          <Word key={i} text={word} progress={progress} range={[start, end]} />
        );
      })}
    </span>
  );
};

export default function AboutSection() {
  const sectionRef = useRef(null);
  const t = useTranslations("about");

  const PARA_LINES = [
    t("linea1"),
    t("linea2"),
    t("linea3"),
    t("linea4"),
  ];

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const titleStyle = {
    fontSize: "clamp(32px, 5vw, 56px)",
    letterSpacing: "-1px",
    lineHeight: 1.2,
  };

  const paraStyle = {
    fontSize: "clamp(15px, 1.8vw, 24px)",
    letterSpacing: "-1px",
    lineHeight: 1.7,
  };

  return (
    <div ref={sectionRef} className="relative z-20 h-[200vh]">
      <div
        className="sticky top-0 w-full flex items-center"
        style={{ height: "100vh", backgroundColor: "#0C0C0E" }}
      >
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24">

          <p className="font-['Geist'] font-bold mb-10">
            <TextReveal
              text={t("titulo")}
              progress={scrollYProgress}
              scrollStart={0.05}
              scrollEnd={0.55}
              style={titleStyle}
            />
          </p>

          <div className="font-['Geist'] font-normal flex flex-col gap-1">
            {PARA_LINES.map((line, i) => {
              const segmentSize = (0.9 - 0.45) / PARA_LINES.length;
              const start = 0.45 + i * segmentSize;
              const end = start + segmentSize;
              return (
                <div key={i}>
                  <TextReveal
                    text={line}
                    progress={scrollYProgress}
                    scrollStart={start}
                    scrollEnd={end}
                    style={paraStyle}
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}