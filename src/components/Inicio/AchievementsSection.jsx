import { useState, useEffect } from "react";
import { getSocialIcons } from "../../utils/iconUtils";
import content from "../../data/inicio-content.json";

export const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { achievements } = content;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="achievements-section">
      <div className="achievements-decorations">
        <div className="achievement-decoration-1" />
        <div className="achievement-decoration-2" />
      </div>

      <div className="container">
        <div className="section-header">
          <div className="section-badge">Mi Compromiso</div>
          <h2 className="section-title white">
            Compromiso con{" "}
            <span className="highlight">Palenque y Colombia</span>
          </h2>
          <p className="section-subtitle">
            Representando con orgullo las raíces afrocolombianas
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="achievement-card"
              style={{
                "--achievement-color": achievement.color,
                "--delay": `${index * 0.1}s`,
              }}
            >
              <div className="achievement-content">
                <div className="achievement-image">
                  <img
                    src={achievement.image || "/placeholder.svg"}
                    alt={achievement.title}
                    className="achievement-img"
                  />
                </div>
                <div className="achievement-text">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <p className="achievement-description">
                    {achievement.description}
                  </p>
                </div>
              </div>
              <div className="achievement-border" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
