import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { getSocialIcons } from "../../utils/iconUtils";
import content from "../../data/inicio-content.json";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
  });

  const isMobile = screenSize.width < 768;

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsVisible(true);
  }, []);

  useEffect(() => {
    let timeoutId = null;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenSize({ width: window.innerWidth });
      }, 150);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  const { hero, socialMedia } = content;
  const socialIcons = getSocialIcons();

  const handleNavigation = (route) => {
    window.location.href = route;
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img
          src={hero.backgroundImage || "/placeholder.svg"}
          alt="Fondo"
          className="hero-bg-image"
        />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-title-container">
            <img
              src={hero.titleImage || "/placeholder.svg"}
              alt="Dorina Hernández"
              className="hero-title-image"
            />
          </div>

          <div className="hero-buttons">
            {hero.buttons.map((button, index) => (
              <button
                key={index}
                className={`hero-button ${button.type}`}
                onClick={() => handleNavigation(button.route)}
              >
                {button.text} <ChevronRight size={16} />
              </button>
            ))}
          </div>

          <div className="hero-social">
            {socialMedia.map((social, index) => {
              const IconComponent = socialIcons[social.icon];
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ "--social-color": social.color }}
                >
                  <IconComponent size={isMobile ? 20 : 18} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-container">
            <img
              src={isMobile ? hero.dorinaMobileImage : hero.dorinaDesktopImage}
              alt="Dorina Hernández"
              className="hero-dorina-image"
            />
          </div>
        </div>
      </div>

      <div className="colombia-flag" />
    </section>
  );
};
