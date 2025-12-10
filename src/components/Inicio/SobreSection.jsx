import { ChevronRight } from "lucide-react";
import content from "../../data/inicio-content.json";

export const SobreSection = () => {
  const { sobreMi } = content;

  const handleNavigation = () => {
    window.location.href = sobreMi.buttonRoute;
  };

  return (
    <section id="sobre-mi" className="sobre-section">
      <div className="container">
        <div className="sobre-grid">
          <div className="sobre-text">
            <div className="section-badge">{sobreMi.badge}</div>
            <h2 className="section-title">{sobreMi.name}</h2>
            <p className="sobre-description">{sobreMi.description}</p>
            <p className="sobre-subdescription">{sobreMi.subdescription}</p>

            <button className="sobre-button" onClick={handleNavigation}>
              {sobreMi.buttonText} <ChevronRight size={16} />
            </button>
          </div>

          <div className="sobre-image">
            <div className="image-container">
              <img
                src={sobreMi.image || "/placeholder.svg"}
                alt="Dorina Hernández Palomino"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
