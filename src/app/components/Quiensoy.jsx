"use client";
import React from 'react';
import Image from 'next/image';
import { useTranslations } from "next-intl";

const Quiensoy = () => {
  const t = useTranslations("quiensoy");
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mt-16 md:mt-24 mb-20 font-['Geist']">

      <h1
        className="font-bold mb-12"
        style={{ fontSize: "clamp(36px, 5vw, 48px)", letterSpacing: "-2px", color: "#ffffff" }}
      >
        {t("titulo")}
      </h1>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

        <div className="w-full lg:w-[360px] flex-shrink-0 order-1 lg:order-2">
          <div
            className="relative w-full overflow-hidden rounded-2xl"
            style={{
              aspectRatio: "3/4",
              maxHeight: "520px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <Image
              src="/perfil.png"
              alt="Brayan Albadam"
              fill
              className="object-cover object-top"
              priority
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{
                background: "linear-gradient(to bottom, transparent 60%, rgba(12,12,14,0.4) 100%)",
              }}
            />
          </div>
        </div>

        <div className="w-full lg:flex-1 order-2 lg:order-1 space-y-6">

          <p className="leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
            {t("p1").split("Brayan Albadam")[0]}
            <span className="font-semibold" style={{ color: "#4CB5F5" }}>Brayan Albadam</span>
            {t("p1").split("Brayan Albadam")[1]?.split("Google")[0]}
            <a
              href="https://www.coursera.org/account/accomplishments/specialization/certificate/DVYLRJ2VVTH5"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 transition-colors duration-200"
              style={{ color: "#4CB5F5" }}
              onMouseEnter={e => e.currentTarget.style.color = "#FFD700"}
              onMouseLeave={e => e.currentTarget.style.color = "#4CB5F5"}
            >
              Google
            </a>
            {t("p1").split("Google")[1]}
          </p>

          <p className="leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
            {t("p2")}
          </p>

          <p className="leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
            {t("p3").split("Project Manager")[0]}
            <span className="font-semibold" style={{ color: "#4CB5F5" }}>Project Manager</span>
            {t("p3").split("Project Manager")[1]}
          </p>

          <p className="leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
            {t("p4").split("concurso")[0]}
            <a
              href="https://www.infobae.com/america/mexico/2021/04/13/como-va-la-convocatoria-para-crear-el-logotipo-del-aeropuerto-felipe-angeles-que-lanzo-simon-levy/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 transition-colors duration-200"
              style={{ color: "#4CB5F5" }}
              onMouseEnter={e => e.currentTarget.style.color = "#FFD700"}
              onMouseLeave={e => e.currentTarget.style.color = "#4CB5F5"}
            >
              {t("p4").includes("concurso") ? "concurso" : "contest"}
            </a>
            {t("p4").split(t("p4").includes("concurso") ? "concurso" : "contest")[1]}
          </p>

          <p className="leading-relaxed text-base" style={{ color: "#9CA3AF" }}>
            {t("p5")}
          </p>

          {/* Divider */}
          <div
            className="w-full h-px mt-8"
            style={{ background: "rgba(255,255,255,0.06)" }}
          /> 
          </div>

        </div>
      </div>
  );
};

export default Quiensoy;