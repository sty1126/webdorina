import { MessageSquare, Send } from "lucide-react";
import content from "../../data/inicio-content.json";

export const ParticipacionSection = () => {
  const { participacion } = content;

  const handleNavigation = () => {
    window.location.href = "/contacto";
  };

  return (
    <section className="participacion-section">
      <div className="container">
        <div className="participacion-content">
          <h2 className="participacion-title">{participacion.title}</h2>
          <p className="participacion-description">
            {participacion.description}
          </p>

          <div className="participacion-card">
            <div className="participacion-header">
              <MessageSquare size={32} color="white" />
              <h3 className="participacion-subtitle">
                {participacion.cardTitle}
              </h3>
            </div>

            <p className="participacion-text">{participacion.cardText}</p>

            <button className="participacion-button" onClick={handleNavigation}>
              <Send size={20} />
              {participacion.buttonText}
            </button>

            <p className="participacion-disclaimer">
              {participacion.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
