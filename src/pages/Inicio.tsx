"use client";

import { useState, useEffect } from "react";
import { SurveyModal } from "../components/Inicio/SurveyModal";
import { HeroSection } from "../components/Inicio/HeroSection";
import { EsloganSection } from "../components/Inicio/EsloganSection";
import { SobreSection } from "../components/Inicio/SobreSection";
import { BanderasSection } from "../components/Inicio/BanderasSection";
import { AchievementsSection } from "../components/Inicio/AchievementsSection";
import { SocialSection } from "../components/Inicio/SocialSection";
import { VideosSection } from "../components/Inicio/VideosSection";
import { ParticipacionSection } from "../components/Inicio/ParticipacionSection";
import { Footer } from "../components/Inicio/Footer";
import "../styles/inicio.css";

const Inicio = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const handleResize = () => {
      clearTimeout(timeoutId!);
      timeoutId = setTimeout(() => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 150);
    };

    const handleOrientationChange = () => {
      setTimeout(() => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="inicio-container">
      <SurveyModal />
      <HeroSection />
      <EsloganSection />
      <SobreSection />
      <BanderasSection />
      <AchievementsSection />
      <SocialSection />
      <VideosSection />
      <ParticipacionSection />
      <Footer />
    </div>
  );
};

export default Inicio;
