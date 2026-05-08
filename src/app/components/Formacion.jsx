"use client";
import React from 'react';
import { Accordion, AccordionItem } from "@nextui-org/react";
import { useTranslations } from "next-intl";

const Formacion = () => {
  const t = useTranslations("educacion");
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
                <div className="flex flex-col">
                  <span className="font-semibold text-base" style={{ color: "#4CB5F5" }}>
                    {item.titulo}
                  </span>
                  <span className="text-xs font-normal mt-0.5" style={{ color: "#9CA3AF" }}>
                    {item.institucion}
                  </span>
                </div>
              }
            >
              <p className="text-sm font-normal pb-4 leading-relaxed" style={{ color: "#9CA3AF" }}>
                {item.descripcion}
              </p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Formacion;