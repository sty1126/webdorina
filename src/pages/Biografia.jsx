"use client";

import { useState, useEffect } from "react";
import BiografiaHero from "../components/Biografia/BiografiaHero";
import FormacionAcademica from "../components/Biografia/FormacionAcademica";
import TrayectoriaProfesional from "../components/Biografia/TrayectoriaProfesional";
import DistincionesReconocimientos from "../components/Biografia/DistincionesReconocimientos";
import CarreraPolitica from "../components/Biografia/CarreraPolitica";
import Publicaciones from "../components/Biografia/Publicaciones";
import data from "../data/biografia-content.json";
import "../styles/biografia.css";

const Biografia = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".animate-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="biografia-container">
      <BiografiaHero data={data.perfil} />
      <FormacionAcademica
        data={data.formacionAcademica}
        galeria={data.galeriaFormacion}
      />
      <TrayectoriaProfesional data={data.trayectoriaProfesional} />
      <DistincionesReconocimientos data={data.distinciones} />
      <CarreraPolitica data={data.carreraPolitica} />
      <Publicaciones data={data.publicaciones} />
    </div>
  );
};

export default Biografia;
