import { useState, useEffect } from "react";
import CulturaHero from "../components/Cultura/CulturaHero";
import PatrimonialContext from "../components/Cultura/PatrimonialContext";
import CulturaViva from "../components/Cultura/CulturaViva";
import TierraYCultura from "../components/Cultura/TierraYCultura";
import culturaData from "../data/cultura-content.json";
import "../styles/cultura.css";

const Cultura = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);

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
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        paddingTop: "80px",
        overflowX: "hidden",
        fontFamily:
          "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <CulturaHero isVisible={isVisible} data={culturaData} />
      <PatrimonialContext data={culturaData} />
      <CulturaViva data={culturaData} />
      <TierraYCultura data={culturaData} />
    </div>
  );
};

export default Cultura;
