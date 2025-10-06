"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  X,
  Scale,
  GraduationCap,
  BookOpenCheck,
  Users,
  MessageSquare,
  Send,
  HandHeart,
  Heart,
} from "lucide-react";

const Inicio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSurveyModal, setShowSurveyModal] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });
  const navigate = useNavigate();

  // Mejorar detección de dispositivos móviles
  const isMobile = screenSize.width < 768;
  const isTablet = screenSize.width >= 768 && screenSize.width < 1024;
  const isSmallMobile = screenSize.width < 480;
  const isTinyMobile = screenSize.width < 360;

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    setIsVisible(true);
    const modalTimer = setTimeout(() => {
      setShowSurveyModal(true);
    }, 1500);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => {
      clearInterval(interval);
      clearTimeout(modalTimer); // Clear the modal timer
    };
  }, []);

  // Detectar cambios de tamaño de pantalla con debounce
  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 150);
    };

    // Detectar orientación en móviles
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
      clearTimeout(timeoutId);
    };
  }, []);

  const achievements = [
    {
      image: "media/representandoPalenque-inicio.png?height=120&width=120",
      title: "Representando Palenque",
      description: "Defendiendo los derechos de la comunidad afrocolombiana",
      color: "#569638",
    },
    {
      image: "media/compromisoSocial-inicio.jpeg?height=120&width=120",
      title: "Compromiso Social",
      description: "Trabajando por la equidad y la justicia social",
      color: "#f9b91d",
    },
    {
      image: "media/liderazgo-inicio.jpeg?height=120&width=120",
      title: "Liderazgo",
      description: "Experiencia comprobada en gestión pública",
      color: "#129ba5",
    },
  ];
  const politicalFlags = [
    {
      icon: Scale,
      title: "Justicia Étnico‑Racial",
      description:
        "Promoviendo la equidad y el reconocimiento de los derechos de las comunidades afrocolombianas.",
      color: "#5a9bb8", // azul medio
    },
    {
      icon: MapPin,
      title: "Territorio y Autonomía",
      description:
        "Defendiendo el territorio ancestral y el derecho de las comunidades a decidir sobre su tierra.",
      color: "#0dc1d3", // cian
    },
    {
      icon: GraduationCap,
      title: "Educación y Juventud Afro",
      description:
        "Promoviendo educación inclusiva y el liderazgo juvenil desde la identidad afrocolombiana.",
      color: "#f9b91d", // amarillo institucional
    },
    {
      icon: BookOpenCheck,
      title: "Cultura y Memoria",
      description:
        "Preservando la lengua, tradiciones y memoria del pueblo palenquero y afrodescendiente.",
      color: "#f9b91d", // azul oscuro
    },
    {
      icon: Users,
      title: "Participación Comunitaria",
      description:
        "Impulsando la participación directa de las comunidades en la construcción de políticas públicas.",
      color: "#569638", // verde institucional
    },
    {
      icon: HandHeart,
      title: "Mujer Negra y Liderazgo",
      description:
        "Empoderando a las mujeres negras y visibilizando sus luchas en todos los espacios sociales y políticos.",
      color: "#8e44ad", // morado fuerte
    },
  ];

  const videos = [
    {
      title: "Frente a Frente",
      description: "Cámara de Representantes",
      videoId: "U1N-QPqgQuY",
    },
    {
      title: "Soy porque Somos es un reconocimiento a la lucha afro",
      description: "W Radio Colombia",
      videoId: "KRDlE6PIBWE",
    },
    {
      title: "Algunos logros legislativos del 2022",
      description: "Cha Dorina",
      videoId: "SivSNzUD2qc",
    },
    {
      title: "Entre-Vistas con Alma de País",
      description: "Presidencia de la República",
      videoId: "RJ-jOuB1grs",
    },
    {
      title: "Pido la palabra",
      description: "Canal Congreso Colombia",
      videoId: "tFKjlfyGIU4",
    },
    {
      title: "Rueda de Prensa",
      description: "Canal Congreso Colombia",
      videoId: "e9me2bDYXz4",
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      color: "#1877F2",
      url: "https://web.facebook.com/chadorinahe",
    },
    {
      icon: X,
      color: "#000000",
      url: "https://x.com/chadorinah?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    },
    {
      icon: Instagram,
      color: "#E4405F",
      url: "https://www.instagram.com/chadorinah/?hl=es",
    },
    {
      icon: Youtube,
      color: "#FF0000",
      url: "https://www.youtube.com/@chadorina3864",
    },
  ];

  return (
    <div className="inicio-container">
      {showSurveyModal && (
        <div
          className="modal-overlay"
          onClick={() => setShowSurveyModal(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <Heart size={48} color="white" fill="white" />
            </div>

            <h2 className="modal-title">
              ¡Haz parte de nuestra Red del Corazón del Pueblo!
            </h2>

            <p className="modal-description">
              Te invito a hacer parte de esta Red del Corazón del Pueblo, un
              espacio vivo donde caminamos juntos para transformar realidades.
              Tu voz es fundamental para construir el futuro que soñamos.
            </p>

            <a
              href="https://docs.google.com/forms/d/1qc2i9cjAug1U_rpUBnjmGfAPN-12epUEJR5Um_8weA4/viewform?edit_requested=true"
              target="_blank"
              rel="noopener noreferrer"
              className="modal-button"
            >
              Llenar Encuesta
              <ChevronRight size={20} />
            </a>

            <button
              className="modal-skip"
              onClick={() => setShowSurveyModal(false)}
            >
              Ahora no
            </button>
          </div>
        </div>
      )}

      {/* Hero Section - Reconstruido con elementos separados */}
      <section className="hero-section">
        {/* Fondo azul */}
        <div className="hero-background">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fondo-inicio-ZXaKQLrAMLFN07GncBLsPMuvZ83Lu5.png"
            alt="Fondo"
            className="hero-bg-image"
          />
        </div>

        {/* Overlay para mejorar contraste */}
        <div className="hero-overlay" />

        {/* Contenido del hero */}
        <div className="hero-content">
          {/* Lado izquierdo - Título */}
          <div className="hero-left">
            <div className="hero-title-container">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/titulo-inicio-ZKwLttdqh0QNHp51trtLDNLmK9SCuq.png"
                alt="Dorina Hernández"
                className="hero-title-image"
              />
            </div>

            {/* Botones */}
            <div className="hero-buttons">
              <button
                className="hero-button primary"
                onClick={() => navigate("/biografia")}
              >
                Conoce mi trabajo <ChevronRight size={16} />
              </button>

              <button
                className="hero-button secondary"
                onClick={() => navigate("/propuestas")}
              >
                Ver propuestas
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="hero-social">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  style={{ "--social-color": social.color }}
                >
                  <social.icon size={isMobile ? 20 : 18} />
                </a>
              ))}
            </div>
          </div>

          {/* Lado derecho - Imagen de Dorina */}
          <div className="hero-right">
            <div className="hero-image-container">
              <img
                src={
                  isMobile
                    ? "media/dorina-inicio-mobile.png"
                    : "media/dorina-inicio.png"
                }
                alt="Dorina Hernández"
                className="hero-dorina-image"
              />
            </div>
          </div>
        </div>

        {/* Colombian Flag Line */}
        <div className="colombia-flag" />
      </section>

      {/* Eslogan Section */}
      <section className="eslogan-section">
        <div className="container">
          <h2 className="eslogan-title">"Representando la voz de Palenque"</h2>
        </div>
      </section>

      {/* Sobre la Representante Section */}
      <section id="sobre-mi" className="sobre-section">
        <div className="container">
          <div className="sobre-grid">
            <div className="sobre-text">
              <div className="section-badge">Sobre la Representante</div>

              <h2 className="section-title">Dorina Hernández Palomino</h2>

              <p className="sobre-description">
                Representante a la Cámara por Bolívar, líder palenquera
                comprometida con la defensa de los derechos étnicos y el
                desarrollo territorial. Con sede de trabajo en Bogotá y una
                trayectoria sólida en gestión pública y liderazgo comunitario.
              </p>

              <p className="sobre-subdescription">
                Trabajando incansablemente por la equidad, la justicia social y
                el reconocimiento de las comunidades afrocolombianas en el
                Congreso de la República.
              </p>

              <button
                className="sobre-button"
                onClick={() => navigate("/biografia")}
              >
                Ver biografía completa <ChevronRight size={16} />
              </button>
            </div>

            <div className="sobre-image">
              <div className="image-container">
                <img
                  src="media/sobremi-inicio.jpg?height=500&width=400"
                  alt="Dorina Hernández Palomino"
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banderas Políticas Section */}
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
            {politicalFlags.map((flag, index) => (
              <div
                key={index}
                className="bandera-card"
                style={{
                  "--flag-color": flag.color,
                  "--delay": `${index * 0.1}s`,
                }}
              >
                <div className="bandera-icon">
                  <flag.icon size={isMobile ? 24 : 28} color="white" />
                </div>

                <h3 className="bandera-title">{flag.title}</h3>
                <p className="bandera-description">{flag.description}</p>

                <button className="bandera-button">Ver más</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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

      {/* Social Media Section */}
      <section className="social-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title white">Sígueme en Redes Sociales</h2>
            <p className="section-subtitle">
              Mantente al día con mi trabajo y propuestas
            </p>
          </div>

          <div className="social-grid">
            {/* Facebook Embed */}
            <div className="social-card">
              <div className="social-header">
                <Facebook size={20} style={{ color: "#1877F2" }} />
                <h3 className="social-title">Facebook</h3>
              </div>
              <div className="social-embed">
                <iframe
                  src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fphoto.php%3Ffbid%3D10021079351332977%26set%3Da.2588583361249317%26type%3D3&show_text=true&width=500"
                  width="100%"
                  height="100%"
                  style={{
                    border: "none",
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                />
              </div>
            </div>

            {/* Instagram Embed */}
            <div className="social-card">
              <div className="social-header">
                <Instagram size={20} style={{ color: "#E4405F" }} />
                <h3 className="social-title">Instagram</h3>
              </div>
              <div className="social-embed">
                <div className="instagram-placeholder">
                  <div className="instagram-content">
                    <div className="instagram-header">
                      <div className="instagram-avatar" />
                      <div className="instagram-info">
                        <div className="instagram-username" />
                        <div className="instagram-location" />
                      </div>
                    </div>
                    <div className="instagram-image" />
                    <div className="instagram-actions">
                      <Instagram size={24} style={{ color: "#E4405F" }} />
                      <span>Ver en Instagram</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="videos-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Videos Destacados</div>
            <h2 className="section-title white">Mi Trabajo en el Congreso</h2>
            <p className="section-subtitle">
              Conoce más sobre mis propuestas y gestiones
            </p>
          </div>

          <div className="videos-grid">
            {videos.map((video, index) => (
              <div key={index} className="video-card">
                <div className="video-embed">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="video-info">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-link"
                  >
                    <h3 className="video-title">{video.title}</h3>
                  </a>
                  <p className="video-description">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Participación Section */}
      <section className="participacion-section">
        <div className="container">
          <div className="participacion-content">
            <h2 className="participacion-title">
              Haz parte del proyecto político de Dorina
            </h2>
            <p className="participacion-description">
              Comparte tus ideas y propuestas. Tu voz es importante para
              construir un futuro mejor para nuestras comunidades.
            </p>

            <div className="participacion-card">
              <div className="participacion-header">
                <MessageSquare size={isMobile ? 28 : 32} color="white" />
                <h3 className="participacion-subtitle">
                  Tu participación cuenta
                </h3>
              </div>

              <p className="participacion-text">
                Queremos escuchar tus propuestas, inquietudes y sugerencias.
                Juntos podemos trabajar por el desarrollo de nuestros
                territorios.
              </p>

              <button
                className="participacion-button"
                onClick={() => navigate("/contacto")}
              >
                <Send size={20} />
                Enviar propuesta
              </button>

              <p className="participacion-disclaimer">
                Tu información será tratada confidencialmente de acuerdo con
                nuestra política de privacidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Contact Info */}
            <div className="footer-section">
              <h3 className="footer-title">Contacto</h3>
              <div className="footer-links">
                <div className="footer-link">
                  <Mail size={16} style={{ color: "#f9b91d" }} />
                  <span>contacto@dorinahernandez.com</span>
                </div>
                <div className="footer-link">
                  <Phone size={16} style={{ color: "#f9b91d" }} />
                  <span>+57 (5) 123-4567</span>
                </div>
                <div className="footer-link">
                  <MapPin size={16} style={{ color: "#f9b91d" }} />
                  <span>Bogotá, Colombia</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="footer-section">
              <h3 className="footer-title">Redes Sociales</h3>
              <div className="footer-social">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                    style={{ "--social-color": social.color }}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="footer-section">
              <h3 className="footer-title">Legal</h3>
              <div className="footer-links">
                {[
                  "Aviso Legal",
                  "Política de Privacidad",
                  "Términos y Condiciones",
                ].map((item, index) => (
                  <a key={index} href="#" className="footer-legal-link">
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-copyright">
            <p>
              © {new Date().getFullYear()} Dorina Hernández Palomino. Todos los
              derechos reservados.
              <br />
              <span className="footer-highlight">
                Representando con orgullo a San Basilio de Palenque 🇨🇴
              </span>
            </p>
          </div>
        </div>

        {/* Colombian Flag */}
        <div className="footer-flag" />
      </footer>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

        .inicio-container {
          width: 100vw;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          padding-top: ${isSmallMobile ? "60px" : isMobile ? "70px" : "80px"};
          overflow-x: hidden;
          position: relative;
          font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          box-sizing: border-box;
        }

        * {
          box-sizing: border-box;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0
            ${isTinyMobile
              ? "8px"
              : isSmallMobile
              ? "12px"
              : isMobile
              ? "16px"
              : isTablet
              ? "32px"
              : "48px"};
          width: 100%;
          box-sizing: border-box;
        }

        /* Survey Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: flex-start; /* Changed from center to flex-start to position at top */
          justify-content: center; /* Ensuring horizontal centering */
          z-index: 999999; /* Increased z-index even more to ensure it's on top */
          padding: ${isMobile ? "1rem" : "2rem"};
          padding-top: ${isMobile
            ? "2rem"
            : "3rem"}; /* Added extra top padding */
          animation: fadeIn 0.3s ease-out;
        }

        .modal-content {
          background: linear-gradient(135deg, #569638 0%, #569638 100%);
          border-radius: 20px;
          padding: ${isMobile ? "2rem 1.5rem" : "3rem 2.5rem"};
          max-width: 500px;
          width: calc(100% - 2rem); /* Changed to calc to account for padding */
          position: relative;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideUp 0.4s ease-out;
          text-align: center;
          border: 2px solid rgba(255, 255, 255, 0.2);
          margin: 0 auto; /* Added margin auto to ensure centering */
        }

        /* Removed modal-close button styles completely */

        .modal-icon {
          width: 80px;
          height: 80px;
          background: rgba(249, 185, 29, 0.9);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          box-shadow: 0 8px 20px rgba(249, 185, 29, 0.4);
          animation: pulse 2s ease-in-out infinite;
        }

        .modal-title {
          font-size: ${isMobile ? "1.5rem" : "1.8rem"};
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .modal-description {
          font-size: ${isMobile ? "1rem" : "1.1rem"};
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .modal-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: #f9b91d;
          color: white;
          padding: ${isMobile ? "14px 28px" : "16px 32px"};
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: ${isMobile ? "1rem" : "1.1rem"};
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(249, 185, 29, 0.4);
          border: none;
          cursor: pointer;
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
        }

        .modal-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(249, 185, 29, 0.5);
          background: #ffc940;
        }

        .modal-skip {
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: ${isMobile ? "0.9rem" : "1rem"};
          cursor: pointer;
          margin-top: 1rem;
          padding: 8px;
          transition: all 0.3s ease;
        }

        .modal-skip:hover {
          color: white;
          text-decoration: underline;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        /* Hero Section - Optimizado para mejor proporción */
        .hero-section {
          min-height: ${isSmallMobile ? "65vh" : isMobile ? "70vh" : "75vh"};
          max-height: ${isMobile ? "80vh" : "85vh"};
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 100%;
          padding: 0;
          margin: 0;
          z-index: 1;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .hero-bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.1);
          z-index: 1;
        }

        .hero-content {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: ${isMobile ? "2rem 1rem 3rem" : "2rem 2rem"};
          display: grid;
          grid-template-columns: ${isMobile ? "1fr" : "1fr 1fr"};
          gap: ${isMobile ? "1.5rem" : "0.5rem"};
          align-items: center;
          position: relative;
          z-index: 2;
          height: 100%;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: ${isMobile ? "center" : "flex-start"};
          justify-content: center;
          text-align: ${isMobile ? "center" : "left"};
          order: ${isMobile ? "2" : "1"};
          z-index: 3;
        }

        .hero-title-container {
          margin-bottom: ${isMobile ? "1.5rem" : "2rem"};
          transform: ${isVisible ? "translateX(0)" : "translateX(-50px)"};
          opacity: ${isVisible ? 1 : 0};
          transition: all 1s ease-out;
        }

        .hero-title-image {
          width: ${isTinyMobile
            ? "280px"
            : isSmallMobile
            ? "320px"
            : isMobile
            ? "380px"
            : "600px"};
          height: auto;
          max-width: 100%;
          filter: drop-shadow(0 6px 12px rgba(0, 0, 0, 0.3));
        }

        .hero-right {
          display: flex;
          align-items: center;
          justify-content: ${isMobile ? "center" : "flex-end"};
          order: ${isMobile ? "1" : "2"};
          transform: ${isVisible ? "translateX(0)" : "translateX(50px)"};
          opacity: ${isVisible ? 1 : 0};
          transition: all 1s ease-out 0.3s;
          height: 100%;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .hero-image-container {
          position: relative;
          width: 100%;
          height: ${isMobile ? "500px" : "600px"};
          max-width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: ${isMobile ? "center" : "flex-end"};
        }

        .hero-dorina-image {
          width: 130%;
          height: 130%;
          object-fit: cover;
          object-position: 20% center;
          filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
          transform: none;
          max-width: none;
          max-height: 100%;
        }

        .hero-buttons {
          display: flex;
          gap: ${isMobile ? "12px" : "15px"};
          margin-bottom: 20px;
          flex-wrap: wrap;
          justify-content: ${isMobile ? "center" : "flex-start"};
          width: 100%;
          align-items: center;
          transform: ${isVisible ? "translateY(0)" : "translateY(30px)"};
          opacity: ${isVisible ? 1 : 0};
          transition: all 1s ease-out 0.6s;
        }

        .hero-button {
          padding: ${isMobile ? "12px 18px" : "12px 24px"};
          border-radius: 25px;
          border: none;
          font-size: ${isMobile ? "13px" : "14px"};
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          white-space: nowrap;
          text-decoration: none;
          min-height: ${isMobile ? "44px" : "auto"};
        }

        .hero-button.primary {
          background: linear-gradient(135deg, #f9b91d, #f9b91d);
          color: white;
          box-shadow: 0 6px 20px rgba(249, 185, 29, 0.4);
        }

        .hero-button.primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 25px rgba(249, 185, 29, 0.5);
        }

        .hero-button.secondary {
          background: white;
          color: #24354b;
          border: 2px solid #24354b;
          box-shadow: 0 4px 15px rgba(36, 53, 75, 0.2);
        }

        .hero-button.secondary:hover {
          background: #24354b;
          color: white;
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 6px 18px rgba(36, 53, 75, 0.4);
        }

        .hero-social {
          display: flex;
          gap: ${isMobile ? "10px" : "10px"};
          flex-wrap: wrap;
          justify-content: ${isMobile ? "center" : "flex-start"};
          width: 100%;
          align-items: center;
          transform: ${isVisible ? "translateY(0)" : "translateY(30px)"};
          opacity: ${isVisible ? 1 : 0};
          transition: all 1s ease-out 0.9s;
          margin-bottom: ${isMobile ? "2rem" : "0"};
          padding-bottom: ${isMobile ? "1rem" : "0"};
        }

        .social-icon {
          width: ${isMobile ? "40px" : "40px"};
          height: ${isMobile ? "40px" : "40px"};
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
          text-decoration: none;
        }

        .social-icon:hover {
          background: var(--social-color);
          color: white;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 6px 20px
            color-mix(in srgb, var(--social-color) 40%, transparent);
        }

        .colombia-flag {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(
            90deg,
            #ffcd00 0%,
            #ffcd00 50%,
            #003087 50%,
            #003087 75%,
            #ce1126 75%,
            #ce1126 100%
          );
          z-index: 3;
        }

        /* Eslogan Section */
        .eslogan-section {
          padding: ${isMobile ? "1.5rem 0" : "2rem 0"};
          background: linear-gradient(135deg, #f9b91d, #f9b91d);
          text-align: center;
        }

        .eslogan-title {
          font-size: ${isTinyMobile
            ? "1.3rem"
            : isSmallMobile
            ? "1.4rem"
            : isMobile
            ? "1.5rem"
            : "clamp(1.5rem, 3vw, 2.5rem)"};
          font-weight: 700;
          color: white;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          line-height: 1.3;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Common Section Styles */
        .section-badge {
          display: inline-block;
          background: #0dc1d3;
          color: white;
          padding: ${isMobile ? "6px 16px" : "8px 20px"};
          border-radius: 6px;
          font-size: ${isMobile ? "11px" : "12px"};
          font-weight: 700;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .section-title {
          font-size: ${isTinyMobile
            ? "1.5rem"
            : isSmallMobile
            ? "1.6rem"
            : isMobile
            ? "1.8rem"
            : "clamp(2rem, 4vw, 3rem)"};
          font-weight: 700;
          color: #24354b;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .section-title.white {
          color: white;
        }

        .section-subtitle {
          font-size: ${isMobile ? "1rem" : "clamp(1rem, 2vw, 1.2rem)"};
          color: rgba(255, 255, 255, 0.8);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
          font-weight: 400;
        }

        .section-header {
          text-align: center;
          margin-bottom: ${isMobile ? "2rem" : "3rem"};
        }

        /* Sobre Section */
        .sobre-section {
          padding: ${isMobile ? "2rem 0" : "4rem 0"};
          background: #f8fafc;
        }

        .sobre-grid {
          display: grid;
          grid-template-columns: ${isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(400px, 1fr))"};
          gap: ${isMobile ? "2rem" : "3rem"};
          align-items: center;
        }

        .sobre-text {
          order: ${isMobile ? 2 : 1};
        }

        .sobre-description {
          font-size: ${isMobile ? "1rem" : "1.1rem"};
          color: #4a5568;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .sobre-subdescription {
          font-size: ${isMobile ? "0.9rem" : "1rem"};
          color: #718096;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .sobre-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #24354b;
          color: white;
          padding: ${isMobile ? "14px 20px" : "12px 24px"};
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          font-size: ${isMobile ? "14px" : "16px"};
          min-height: ${isMobile ? "44px" : "auto"};
          border: none;
          cursor: pointer;
        }

        .sobre-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(36, 53, 75, 0.3);
        }

        .sobre-image {
          position: relative;
          order: ${isMobile ? 1 : 2};
        }

        .image-container {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .profile-image {
          width: 100%;
          height: ${isMobile ? "300px" : "500px"};
          object-fit: cover;
        }

        /* Banderas Section */
        .banderas-section {
          padding: ${isMobile ? "2rem 0" : "4rem 0"};
          background: #24354b;
          width: 100%;
          overflow-x: hidden;
        }

        .banderas-grid {
          display: grid;
          grid-template-columns: ${isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(280px, 1fr))"};
          gap: ${isMobile ? "1.5rem" : "2rem"};
          width: 100%;
          max-width: 100%;
        }

        .bandera-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: ${isMobile ? "1.5rem 1rem" : "2rem"};
          text-align: center;
          transition: all 0.3s ease;
          transform: ${isVisible ? "translateY(0)" : "translateY(30px)"};
          opacity: ${isVisible ? 1 : 0};
          transition-delay: var(--delay);
          width: 100%;
          max-width: 100%;
          box-sizing: border-box;
        }

        .bandera-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.08);
        }

        .bandera-icon {
          width: ${isMobile ? "56px" : "64px"};
          height: ${isMobile ? "56px" : "64px"};
          border-radius: 50%;
          background: var(--flag-color);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .bandera-title {
          font-size: ${isMobile ? "1.1rem" : "1.3rem"};
          font-weight: 600;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.3;
        }

        .bandera-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: ${isMobile ? "0.9rem" : "1rem"};
        }

        .bandera-button {
          background: color-mix(in srgb, var(--flag-color) 20%, transparent);
          color: var(--flag-color);
          border: 1px solid
            color-mix(in srgb, var(--flag-color) 40%, transparent);
          padding: ${isMobile ? "10px 18px" : "8px 16px"};
          border-radius: 6px;
          font-size: ${isMobile ? "13px" : "14px"};
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          min-height: ${isMobile ? "40px" : "auto"};
        }

        .bandera-button:hover {
          background: var(--flag-color);
          color: white;
        }

        /* Achievements Section */
        .achievements-section {
          padding: ${isMobile ? "2rem 0" : "3rem 0"};
          width: 100%;
          background: linear-gradient(
            135deg,
            #24354b 0%,
            #24354b 50%,
            #24354b 100%
          );
          position: relative;
          overflow: hidden;
        }

        .achievements-decorations {
          display: ${isMobile ? "none" : "block"};
        }

        .achievement-decoration-1 {
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(
            circle,
            rgba(86, 150, 56, 0.08) 0%,
            transparent 70%
          );
          border-radius: 50%;
        }

        .achievement-decoration-2 {
          position: absolute;
          bottom: -30%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(
            circle,
            rgba(249, 185, 29, 0.05) 0%,
            transparent 70%
          );
          border-radius: 50%;
        }

        .achievements-grid {
          display: grid;
          grid-template-columns: ${isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(320px, 1fr))"};
          gap: ${isMobile ? "1rem" : "1.5rem"};
          width: 100%;
          position: relative;
          z-index: 2;
        }

        .achievement-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: ${isMobile ? "1.5rem 1rem" : "2rem 1.5rem"};
          text-align: left;
          transition: all 0.3s ease;
          transform: ${isVisible ? "translateY(0)" : "translateY(30px)"};
          opacity: ${isVisible ? 1 : 0};
          transition-delay: var(--delay);
          position: relative;
          overflow: hidden;
        }

        .achievement-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.08);
          border-color: color-mix(
            in srgb,
            var(--achievement-color) 30%,
            transparent
          );
        }

        .achievement-content {
          display: flex;
          align-items: flex-start;
          gap: ${isMobile ? "0.75rem" : "1rem"};
          flex-direction: ${isMobile ? "column" : "row"};
          text-align: ${isMobile ? "center" : "left"};
        }

        .achievement-image {
          width: ${isMobile ? "120px" : "150px"};
          height: ${isMobile ? "120px" : "150px"};
          border-radius: 8px;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid
            color-mix(in srgb, var(--achievement-color) 30%, transparent);
          margin: ${isMobile ? "0 auto 1rem" : "0"};
        }

        .achievement-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .achievement-text {
          flex: 1;
        }

        .achievement-title {
          font-size: ${isMobile ? "1.1rem" : "1.2rem"};
          font-weight: 600;
          color: white;
          margin-bottom: 0.5rem;
          line-height: 1.3;
        }

        .achievement-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          font-size: ${isMobile ? "0.9rem" : "0.95rem"};
          margin: 0;
        }

        .achievement-border {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--achievement-color);
          opacity: 0.6;
        }

        .highlight {
          background: linear-gradient(135deg, #f9b91d, #f9b91d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Social Section */
        .social-section {
          background: linear-gradient(135deg, #129ba5 0%, #129ba5 100%);
          padding: ${isMobile ? "2rem 0" : "3rem 0"};
          width: 100%;
        }

        .social-grid {
          display: grid;
          grid-template-columns: ${isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(300px, 1fr))"};
          gap: ${isMobile ? "1.5rem" : "2rem"};
          width: 100%;
        }

        .social-card {
          background: white;
          border-radius: 12px;
          padding: ${isMobile ? "1rem" : "1.5rem"};
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
        }

        .social-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 1rem;
        }

        .social-title {
          color: #129ba5;
          margin: 0;
          font-size: ${isMobile ? "0.9rem" : "1rem"};
          font-weight: 600;
        }

        .social-embed {
          width: 100%;
          height: ${isMobile ? "250px" : "300px"};
          border: none;
          overflow: hidden;
          border-radius: 8px;
        }

        .instagram-placeholder {
          width: 100%;
          height: 100%;
          background: #f8f9fa;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .instagram-content {
          text-align: center;
          padding: 2rem;
        }

        .instagram-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1rem;
        }

        .instagram-avatar {
          width: 40px;
          height: 40px;
          background: #e2e8f0;
          border-radius: 50%;
        }

        .instagram-info {
          flex: 1;
        }

        .instagram-username {
          height: 14px;
          background: #e2e8f0;
          border-radius: 4px;
          margin-bottom: 6px;
          width: 100px;
        }

        .instagram-location {
          height: 14px;
          background: #e2e8f0;
          border-radius: 4px;
          width: 60px;
        }

        .instagram-image {
          width: 100%;
          height: 200px;
          background: #e2e8f0;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .instagram-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: #e4405f;
          font-weight: 600;
        }

        /* Videos Section */
        .videos-section {
          padding: ${isMobile ? "2rem 0" : "3rem 0"};
          width: 100%;
          background: linear-gradient(135deg, #24354b 0%, #24354b 100%);
        }

        .videos-grid {
          display: grid;
          grid-template-columns: ${isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(300px, 1fr))"};
          gap: ${isMobile ? "1rem" : "1.5rem"};
          width: 100%;
        }

        .video-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .video-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
        }

        .video-embed {
          position: relative;
          aspect-ratio: 16/9;
          background: #000;
        }

        .video-info {
          padding: ${isMobile ? "0.75rem" : "1rem"};
          text-align: center;
        }

        .video-link {
          text-decoration: none;
        }

        .video-title {
          font-size: ${isMobile ? "0.95rem" : "1.05rem"};
          font-weight: 600;
          color: #f9b91d;
          margin-bottom: 0.75rem;
          text-align: center;
          line-height: 1.3;
        }

        .video-description {
          font-size: ${isMobile ? "0.8rem" : "0.9rem"};
          color: #64748b;
          margin: 0;
          line-height: 1.4;
          text-align: center;
        }

        /* Participación Section */
        .participacion-section {
          padding: ${isMobile ? "2rem 0" : "4rem 0"};
          background: #569638;
        }

        .participacion-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 0 ${isMobile ? "1rem" : "2rem"};
        }

        .participacion-title {
          font-size: ${isTinyMobile
            ? "1.5rem"
            : isSmallMobile
            ? "1.6rem"
            : isMobile
            ? "1.8rem"
            : "clamp(2rem, 4vw, 3rem)"};
          font-weight: 700;
          color: white;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .participacion-description {
          font-size: ${isMobile ? "1rem" : "1.2rem"};
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .participacion-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: ${isMobile ? "2rem 1.5rem" : "2.5rem"};
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .participacion-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 1.5rem;
          flex-direction: ${isMobile ? "column" : "row"};
        }

        .participacion-subtitle {
          font-size: ${isMobile ? "1.3rem" : "1.5rem"};
          font-weight: 600;
          color: white;
          margin: 0;
          text-align: center;
        }

        .participacion-text {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2rem;
          font-size: ${isMobile ? "1rem" : "1.1rem"};
          line-height: 1.6;
        }

        .participacion-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f9b91d;
          color: white;
          padding: ${isMobile ? "16px 28px" : "16px 32px"};
          border-radius: 50px;
          text-decoration: none;
          font-weight: 600;
          font-size: ${isMobile ? "1rem" : "1.1rem"};
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(249, 185, 29, 0.4);
          min-height: ${isMobile ? "48px" : "auto"};
          border: none;
          cursor: pointer;
        }

        .participacion-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 12px 30px rgba(249, 185, 29, 0.5);
        }

        .participacion-disclaimer {
          color: rgba(255, 255, 255, 0.6);
          font-size: ${isMobile ? "0.8rem" : "0.9rem"};
          margin-top: 1.5rem;
          margin-bottom: 0;
        }

        /* Footer */
        .footer {
          background: linear-gradient(135deg, #24354b 0%, #24354b 100%);
          color: white;
          padding: ${isMobile ? "2rem 0 1rem" : "2.5rem 0 1.5rem"};
          width: 100%;
          position: relative;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: ${isMobile
            ? "1fr"
            : "repeat(auto-fit, minmax(250px, 1fr))"};
          gap: ${isMobile ? "1.5rem" : "2rem"};
          margin-bottom: 2rem;
        }

        .footer-title {
          font-size: ${isMobile ? "1rem" : "1.1rem"};
          font-weight: 600;
          margin-bottom: 1rem;
          color: #f9b91d;
          line-height: 1.3;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: ${isMobile ? "0.8rem" : "0.9rem"};
        }

        .footer-social {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .footer-social-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-decoration: none;
        }

        .footer-social-icon:hover {
          background: var(--social-color);
          transform: translateY(-2px);
        }

        .footer-legal-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: ${isMobile ? "0.8rem" : "0.9rem"};
        }

        .footer-legal-link:hover {
          color: #f9b91d;
        }

        .footer-copyright {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.7);
        }

        .footer-copyright p {
          font-size: ${isMobile ? "0.75rem" : "0.85rem"};
          margin: 0;
        }

        .footer-highlight {
          color: #f9b91d;
        }

        .footer-flag {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(
            90deg,
            #ffcd00 0%,
            #ffcd00 50%,
            #003087 50%,
            #003087 75%,
            #ce1126 75%,
            #ce1126 100%
          );
        }

        /* Animations */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-3px) rotate(0.5deg);
          }
        }

        /* Media Queries específicas para Android */
        @media screen and (max-width: 480px) {
          .hero-section {
            min-height: 65vh;
            max-height: 75vh;
          }

          .hero-content {
            padding: 1.5rem 12px;
          }

          .hero-title-image {
            width: 300px;
          }

          .hero-image-container {
            width: 260px;
            height: 320px;
          }
        }

        @media screen and (max-width: 360px) {
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .hero-button {
            width: 100%;
            max-width: 280px;
            justify-content: center;
          }

          .hero-title-image {
            width: 260px;
          }

          .hero-image-container {
            width: 240px;
            height: 300px;
          }
        }

        @media screen and (orientation: landscape) and (max-height: 500px) {
          .hero-section {
            min-height: 90vh;
          }
        }

        /* Mejoras de accesibilidad para móviles */
        @media (hover: none) and (pointer: coarse) {
          .hero-button:hover,
          .social-icon:hover,
          .bandera-card:hover,
          .achievement-card:hover,
          .video-card:hover {
            transform: none;
          }

          .hero-button:active,
          .social-icon:active {
            transform: scale(0.95);
          }
        }

        /* Corrección específica para móviles */
        @media screen and (max-width: 768px) {
          .inicio-container {
            overflow-x: hidden;
            width: 100vw;
          }

          .container {
            padding-left: 16px;
            padding-right: 16px;
            margin-left: auto;
            margin-right: auto;
          }

          .section-header {
            text-align: center;
            margin-bottom: 2rem;
            padding: 0;
          }

          .banderas-section,
          .achievements-section,
          .social-section,
          .videos-section,
          .participacion-section {
            width: 100%;
            overflow-x: hidden;
          }

          .hero-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            text-align: center;
          }

          .hero-left {
            align-items: center;
          }
        }

        @media screen and (max-width: 480px) {
          .container {
            padding-left: 12px;
            padding-right: 12px;
          }
        }

        @media screen and (max-width: 360px) {
          .container {
            padding-left: 8px;
            padding-right: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default Inicio;
