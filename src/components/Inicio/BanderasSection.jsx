import { useState, useEffect } from "react";
import { getSocialIcons } from "../../utils/iconUtils";
import content from "../../data/inicio-content.json";

export const BanderasSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { banderas } = content;
  const socialIcons = getSocialIcons();

  useEffect(() => {
    setIsVisible(true);
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="banderas-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Nuestras Banderas Políticas</div>
          <h2 className="section-title white">
            Ejes que guían el trabajo legislativo
          </h2>
          <p className="section-subtitle">y social de Dorina Hernández</p>
        </div>

        <div className="banderas-grid">
          {banderas.map((flag, index) => {
            const IconComponent = socialIcons[flag.icon];
            return (
              <div
                key={index}
                className="bandera-card"
                style={{
                  "--flag-color": flag.color,
                  "--delay": `${index * 0.1}s`,
                }}
              >
                <div className="bandera-icon">
                  <IconComponent size={isMobile ? 24 : 28} color="white" />
                </div>
                <h3 className="bandera-title">{flag.title}</h3>
                <p className="bandera-description">{flag.description}</p>
                <button className="bandera-button">Ver más</button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
