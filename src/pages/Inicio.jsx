"use client";

import { useState, useEffect } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";

const Inicio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Aquí puedes cambiar la URL del video
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Cambia por tu video

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const achievements = [
    {
      image: "media/imagen1.png?height=120&width=120",
      title: "Representando Palenque",
      description: "Defendiendo los derechos de la comunidad afrocolombiana",
      color: "#22C55E",
    },
    {
      image: "media/imagen2.jpeg?height=120&width=120",
      title: "Compromiso Social",
      description: "Trabajando por la equidad y la justicia social",
      color: "#FF8C00",
    },
    {
      image: "media/imagen3.jpeg?height=120&width=120",
      title: "Liderazgo",
      description: "Experiencia comprobada en gestión pública",
      color: "#EF4444",
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        overflowX: "hidden",
        position: "relative",
      }}
    >
      {/* Hero Section - Sin badge */}
      <section
        style={{
          background: `url('media/dorina-hero2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
          width: "100%",
          padding: "2rem 0",
          margin: "0",
          fontFamily:
            "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.1)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            width: "100%",
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "0 3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            position: "relative",
            zIndex: 2,
            minHeight: "65vh",
          }}
        >
          <div
            style={{
              transform: isVisible ? "translateX(0)" : "translateX(-50px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 1s ease-out",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-end", // Cambio clave: elementos al final
              maxWidth: "480px",
              width: "100%",
              height: "100%",
              paddingBottom: "4rem", // Espacio desde abajo
            }}
          >
            {/* Espacio invisible para empujar todo hacia abajo */}
            <div style={{ height: "320px", width: "100%" }} />

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginBottom: "20px",
                flexWrap: "wrap",
                justifyContent: "flex-start",
              }}
            >
              <button
                style={{
                  background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "25px",
                  border: "none",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 6px 20px rgba(248, 156, 30, 0.4)",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px) scale(1.02)";
                  e.target.style.boxShadow =
                    "0 8px 25px rgba(248, 156, 30, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow =
                    "0 6px 20px rgba(248, 156, 30, 0.4)";
                }}
              >
                Conoce mi trabajo <ChevronRight size={16} />
              </button>

              <button
                style={{
                  background: "white",
                  color: "#007C88",
                  padding: "12px 24px",
                  borderRadius: "25px",
                  border: "2px solid #007C88",
                  fontSize: "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 15px rgba(0, 124, 136, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#007C88";
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-2px) scale(1.02)";
                  e.target.style.boxShadow =
                    "0 6px 18px rgba(0, 124, 136, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "white";
                  e.target.style.color = "#007C88";
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow =
                    "0 4px 15px rgba(0, 124, 136, 0.2)";
                }}
              >
                Ver propuestas
              </button>
            </div>

            {/* Social Media Icons */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {[
                { icon: Facebook, color: "#1877F2", url: "#" },
                { icon: Twitter, color: "#1DA1F2", url: "#" },
                { icon: Instagram, color: "#E4405F", url: "#" },
                { icon: Youtube, color: "#FF0000", url: "#" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  style={{
                    width: "40px",
                    height: "40px",
                    background: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748b",
                    transition: "all 0.3s ease",
                    border: "1px solid rgba(0,0,0,0.1)",
                    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = social.color;
                    e.target.style.color = "white";
                    e.target.style.transform = "translateY(-2px) scale(1.05)";
                    e.target.style.boxShadow = `0 6px 20px ${social.color}40`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "white";
                    e.target.style.color = "#64748b";
                    e.target.style.transform = "translateY(0) scale(1)";
                    e.target.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";
                  }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Elementos decorativos sutiles */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "8%",
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, #FF8C00, #22C55E)",
            borderRadius: "50%",
            opacity: 0.03,
            animation: "float 8s ease-in-out infinite",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "30%",
            right: "12%",
            width: "40px",
            height: "40px",
            background: "linear-gradient(135deg, #EF4444, #1E3A8A)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            opacity: 0.02,
            animation: "float 10s ease-in-out infinite reverse",
            zIndex: 1,
          }}
        />

        {/* Línea de la bandera de Colombia */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "6px",
            background:
              "linear-gradient(90deg, #FF8C00 0%, #FF8C00 50%, #1E3A8A 50%, #1E3A8A 75%, #EF4444 75%, #EF4444 100%)",
          }}
        />
      </section>

      {/* Achievements Section */}
      <section
        style={{
          padding: "3rem 2rem",
          width: "100%",
          background:
            "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "-10%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(255, 140, 0, 0.05) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            {/* Badge Mi Compromiso - Serio y sobrio */}
            <div
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #007C88, #006B75)",
                backdropFilter: "blur(10px)",
                color: "white",
                padding: "12px 32px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "2px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
              }}
            >
              Mi Compromiso
            </div>

            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "700",
                color: "white",
                marginBottom: "1rem",
                lineHeight: "1.2",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Compromiso con{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Palenque y Colombia
              </span>
            </h2>
            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.2rem)",
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
                fontWeight: "400",
              }}
            >
              Representando con orgullo las raíces afrocolombianas
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
              width: "100%",
            }}
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  padding: "2rem 1.5rem",
                  textAlign: "left",
                  transition: "all 0.3s ease",
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${index * 0.1}s`,
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-4px)";
                  e.target.style.background = "rgba(255, 255, 255, 0.08)";
                  e.target.style.borderColor = achievement.color + "30";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.background = "rgba(255, 255, 255, 0.05)";
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: `2px solid ${achievement.color}30`,
                    }}
                  >
                    <img
                      src={achievement.image || "/placeholder.svg"}
                      alt={achievement.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: "600",
                        color: "white",
                        marginBottom: "0.5rem",
                        fontFamily: "'Poppins', sans-serif",
                      }}
                    >
                      {achievement.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        lineHeight: "1.5",
                        fontSize: "0.95rem",
                        margin: 0,
                      }}
                    >
                      {achievement.description}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: achievement.color,
                    opacity: 0.6,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #007C88 0%, #006B75 100%)",
          padding: "3rem 2rem",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
                fontWeight: "600",
                color: "white",
                marginBottom: "0.5rem",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Sígueme en Redes Sociales
            </h2>
            <p
              style={{
                fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Mantente al día con mi trabajo y propuestas
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              width: "100%",
            }}
          >
            {/* Facebook Embed */}
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "1.5rem",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "1rem",
                }}
              >
                <Facebook size={20} style={{ color: "#1877F2" }} />
                <h3
                  style={{
                    color: "#007C88",
                    margin: 0,
                    fontSize: "1rem",
                    fontWeight: "600",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Facebook
                </h3>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  border: "none",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook&tabs=timeline&width=300&height=300&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="100%"
                  height="300"
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
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "1.5rem",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                border: "1px solid #e2e8f0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "1rem",
                }}
              >
                <Instagram size={20} style={{ color: "#E4405F" }} />
                <h3
                  style={{
                    color: "#007C88",
                    margin: 0,
                    fontSize: "1rem",
                    fontWeight: "600",
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  Instagram
                </h3>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  background: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div style={{ textAlign: "center", color: "#64748b" }}>
                  <Instagram
                    size={32}
                    style={{ color: "#E4405F", marginBottom: "8px" }}
                  />
                  <p style={{ margin: 0, fontSize: "0.9rem" }}>
                    Agrega tu código embed de Instagram aquí
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section
        style={{
          padding: "3rem 2rem",
          width: "100%",
          background: "linear-gradient(135deg, #EAD9C5 0%, #E0CDB0 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                color: "white",
                padding: "8px 20px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: "600",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Videos Destacados
            </div>
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
                fontWeight: "600",
                color: "#007C88",
                marginBottom: "0.5rem",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Mi Trabajo en el Congreso
            </h2>
            <p
              style={{
                fontSize: "clamp(0.9rem, 1.6vw, 1rem)",
                color: "#64748b",
              }}
            >
              Conoce más sobre mis propuestas y gestiones
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
              width: "100%",
            }}
          >
            {[
              {
                title: "Derechos Afrocolombianos",
                description: "Defendiendo nuestra comunidad",
                videoId: "dQw4w9WgXcQ", // Cambia por IDs reales
              },
              {
                title: "Propuestas Sociales",
                description: "Trabajando por la equidad",
                videoId: "dQw4w9WgXcQ", // Cambia por IDs reales
              },
              {
                title: "Gestión Parlamentaria",
                description: "Resultados concretos",
                videoId: "dQw4w9WgXcQ", // Cambia por IDs reales
              },
              {
                title: "Palenque en el Congreso",
                description: "Representando nuestras raíces",
                videoId: "dQw4w9WgXcQ", // Cambia por IDs reales
              },
              {
                title: "Educación y Cultura",
                description: "Preservando nuestras tradiciones",
                videoId: "dQw4w9WgXcQ", // Cambia por IDs reales
              },
              {
                title: "Desarrollo Comunitario",
                description: "Proyectos para el progreso",
                videoId: "dQw4w9WgXcQ", // Cambia por IDs reales
              },
            ].map((video, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-4px)";
                  e.target.style.boxShadow = "0 8px 25px rgba(0,0,0,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
                }}
              >
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16/9",
                    background: "#000",
                  }}
                >
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
                <div style={{ padding: "1rem" }}>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#007C88",
                      marginBottom: "0.5rem",
                      fontFamily: "'Poppins', sans-serif",
                    }}
                  >
                    {video.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "#64748b",
                      margin: 0,
                      lineHeight: "1.4",
                    }}
                  >
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          color: "white",
          padding: "2.5rem 2rem 1.5rem",
          width: "100%",
          position: "relative",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              marginBottom: "2rem",
            }}
          >
            {/* Contact Info */}
            <div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  color: "#F89C1E",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Contacto
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Mail size={16} style={{ color: "#F89C1E" }} />
                  <span style={{ fontSize: "0.9rem" }}>
                    contacto@dorinahernandez.com
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Phone size={16} style={{ color: "#F89C1E" }} />
                  <span style={{ fontSize: "0.9rem" }}>+57 (5) 123-4567</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <MapPin size={16} style={{ color: "#F89C1E" }} />
                  <span style={{ fontSize: "0.9rem" }}>
                    San Basilio de Palenque, Bolívar
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  color: "#F89C1E",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Redes Sociales
              </h3>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {[
                  { icon: Facebook, color: "#1877F2", url: "#" },
                  { icon: Twitter, color: "#1DA1F2", url: "#" },
                  { icon: Instagram, color: "#E4405F", url: "#" },
                  { icon: Youtube, color: "#FF0000", url: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    style={{
                      width: "40px",
                      height: "40px",
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      transition: "all 0.3s ease",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.background = social.color;
                      e.target.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "rgba(255,255,255,0.1)";
                      e.target.style.transform = "translateY(0)";
                    }}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3
                style={{
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  color: "#F89C1E",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Legal
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                {[
                  "Aviso Legal",
                  "Política de Privacidad",
                  "Términos y Condiciones",
                ].map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                      fontSize: "0.9rem",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#F89C1E";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "rgba(255,255,255,0.8)";
                    }}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.1)",
              paddingTop: "1.5rem",
              textAlign: "center",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <p style={{ fontSize: "0.85rem", margin: 0 }}>
              © {new Date().getFullYear()} Dorina Hernández Palomino. Todos los
              derechos reservados.
              <br />
              <span style={{ color: "#F89C1E" }}>
                Representando con orgullo a San Basilio de Palenque 🇨🇴
              </span>
            </p>
          </div>
        </div>

        {/* Bandera de Colombia */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background:
              "linear-gradient(90deg, #FF8C00 0%, #FF8C00 50%, #1E3A8A 50%, #1E3A8A 75%, #EF4444 75%, #EF4444 100%)",
          }}
        />
      </footer>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-3px) rotate(0.5deg);
          }
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Inicio;
