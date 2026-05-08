"use client";
import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useTranslations } from "next-intl";

const Experiencia = () => {
  const t = useTranslations("experiencia");
  const items = t.raw("items");

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-20 md:mt-32 font-['Geist']">
      <h1
        className="font-bold mb-10"
        style={{ fontSize: "clamp(36px, 5vw, 48px)", letterSpacing: "-2px", color: "#ffffff" }}
      >
        {t("titulo")}
      </h1>

      <div className="max-w-[900px] mx-auto mt-10">
        <Accordion
          isCompact
          variant="light"
          className="flex flex-col gap-3"
          itemClasses={{
            base: "px-0",
            title: "w-full",
            trigger: "py-4",
          }}
        >
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              aria-label={item.titulo}
              title={
                <div className="flex flex-col py-1">
                  <span className="font-semibold text-base" style={{ color: "#4CB5F5" }}>
                    {item.titulo}
                  </span>
                  <span className="text-xs font-normal mt-0.5" style={{ color: "#9CA3AF" }}>
                    {item.empresa}
                  </span>
                </div>
              }
            >
              <div className="text-sm font-normal pb-4 leading-relaxed space-y-4" style={{ color: "#9CA3AF" }}>
                {item.descripcion.map((parrafo, i) => (
                  <p key={i}>
                    {/* Link especial para Playme */}
                    {parrafo.includes("Playme") || parrafo.includes("playme") ? (
                      <>
                        {parrafo.split(/playme\.us|Playme web app/i)[0]}
                        {parrafo.toLowerCase().includes("playme web app") ? (
                          <>
                            <span>Playme web app</span>
                            {parrafo.split(/Playme web app/i)[1]?.replace("playme.us", "")}
                            {" "}<a
                              href="https://playme.us"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-bold underline transition-colors duration-200"
                              style={{ color: "#4CB5F5" }}
                              onMouseEnter={e => e.currentTarget.style.color = "#FFD700"}
                              onMouseLeave={e => e.currentTarget.style.color = "#4CB5F5"}
                            >
                              playme.us
                            </a>
                          </>
                        ) : (
                          <a
                            href="https://playme.us"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline transition-colors duration-200"
                            style={{ color: "#4CB5F5" }}
                            onMouseEnter={e => e.currentTarget.style.color = "#FFD700"}
                            onMouseLeave={e => e.currentTarget.style.color = "#4CB5F5"}
                          >
                            playme.us
                          </a>
                        )}
                      </>
                    ) : (
                      parrafo
                    )}
                  </p>
                ))}
              </div>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Experiencia;