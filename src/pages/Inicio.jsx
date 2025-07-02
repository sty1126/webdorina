"use client";

import { useState, useEffect } from "react";
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
  Heart,
  Users,
  MessageSquare,
  Send,
} from "lucide-react";

const Inicio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const achievements = [
    {
      image: "media/imagen1.png?height=120&width=120",
      title: "Representando Palenque",
      description: "Defendiendo los derechos de la comunidad afrocolombiana",
      color: "#569638",
    },
    {
      image: "media/imagen2.jpeg?height=120&width=120",
      title: "Compromiso Social",
      description: "Trabajando por la equidad y la justicia social",
      color: "#f9b91d",
    },
    {
      image: "media/imagen3.jpeg?height=120&width=120",
      title: "Liderazgo",
      description: "Experiencia comprobada en gestión pública",
      color: "#129ba5",
    },
  ];

  const politicalFlags = [
    {
      icon: Scale,
      title: "Justicia Étnico-Racial",
      description:
        "Promoviendo la equidad y el reconocimiento de los derechos de las comunidades afrocolombianas.",
      color: "#24354b",
    },
    {
      icon: GraduationCap,
      title: "Educación de Calidad",
      description:
        "Garantizando acceso a educación superior y técnica para las comunidades rurales y étnicas.",
      color: "#0dc1d3",
    },
    {
      icon: Heart,
      title: "Salud Integral",
      description:
        "Fortaleciendo el sistema de salud con enfoque diferencial y territorial.",
      color: "#f9b91d",
    },
    {
      icon: Users,
      title: "Desarrollo Comunitario",
      description:
        "Impulsando proyectos productivos y de infraestructura en territorios ancestrales.",
      color: "#569638",
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
      {/* Hero Section - OPTIMIZADO PARA MÓVILES */}
      <section
        style={{
          background: `url('${
            isMobile ? "media/dorina-hero2.png" : "media/dorina-hero2.png"
          }')`,
          backgroundSize: isMobile ? "contain" : "cover",
          backgroundPosition: isMobile ? "center top" : "center center",
          backgroundRepeat: "no-repeat",
          minHeight: isMobile ? "80vh" : "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
          width: "100%",
          padding: isMobile ? "1rem 0" : "2rem 0",
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
            padding: isMobile ? "0 1rem" : "0 3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            position: "relative",
            zIndex: 2,
            minHeight: isMobile ? "75vh" : "65vh",
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
              justifyContent: "flex-end",
              maxWidth: isMobile ? "100%" : "480px",
              width: "100%",
              height: "100%",
              paddingBottom: isMobile ? "2rem" : "4rem",
            }}
          >
            {/* Espacio invisible para empujar todo hacia abajo */}
            <div
              style={{ height: isMobile ? "200px" : "320px", width: "100%" }}
            />

            <div
              style={{
                display: "flex",
                gap: isMobile ? "10px" : "15px",
                marginBottom: "20px",
                flexWrap: "wrap",
                justifyContent: isMobile ? "center" : "flex-start",
                width: "100%",
              }}
            >
              <a
                href="#sobre-mi"
                style={{
                  background: "linear-gradient(135deg, #f9b91d, #f9b91d)",
                  color: "white",
                  padding: isMobile ? "14px 20px" : "12px 24px",
                  borderRadius: "25px",
                  border: "none",
                  fontSize: isMobile ? "13px" : "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  boxShadow: "0 6px 20px rgba(249, 185, 29, 0.4)",
                  whiteSpace: "nowrap",
                  textDecoration: "none",
                  minHeight: isMobile ? "44px" : "auto",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-2px) scale(1.02)";
                  e.target.style.boxShadow =
                    "0 8px 25px rgba(249, 185, 29, 0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow =
                    "0 6px 20px rgba(249, 185, 29, 0.4)";
                }}
              >
                Conoce mi trabajo <ChevronRight size={16} />
              </a>

              <button
                style={{
                  background: "white",
                  color: "#24354b",
                  padding: isMobile ? "14px 20px" : "12px 24px",
                  borderRadius: "25px",
                  border: "2px solid #24354b",
                  fontSize: isMobile ? "13px" : "14px",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 15px rgba(36, 53, 75, 0.2)",
                  minHeight: isMobile ? "44px" : "auto",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#24354b";
                  e.target.style.color = "white";
                  e.target.style.transform = "translateY(-2px) scale(1.02)";
                  e.target.style.boxShadow = "0 6px 18px rgba(36, 53, 75, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "white";
                  e.target.style.color = "#24354b";
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow = "0 4px 15px rgba(36, 53, 75, 0.2)";
                }}
              >
                Ver propuestas
              </button>
            </div>

            {/* Social Media Icons */}
            <div
              style={{
                display: "flex",
                gap: isMobile ? "8px" : "10px",
                flexWrap: "wrap",
                justifyContent: isMobile ? "center" : "flex-start",
                width: "100%",
              }}
            >
              {[
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
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: isMobile ? "44px" : "40px",
                    height: isMobile ? "44px" : "40px",
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
                  <social.icon size={isMobile ? 20 : 18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Elementos decorativos sutiles - OCULTOS EN MÓVIL */}
        {!isMobile && (
          <>
            <div
              style={{
                position: "absolute",
                top: "20%",
                left: "8%",
                width: "60px",
                height: "60px",
                background: "linear-gradient(135deg, #f9b91d, #569638)",
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
                background: "linear-gradient(135deg, #129ba5, #24354b)",
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                opacity: 0.02,
                animation: "float 10s ease-in-out infinite reverse",
                zIndex: 1,
              }}
            />
          </>
        )}

        {/* Línea de la bandera de Colombia */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            height: "6px",
            background:
              "linear-gradient(90deg, #FFCD00 0%, #FFCD00 50%, #003087 50%, #003087 75%, #CE1126 75%, #CE1126 100%)",
          }}
        />
      </section>

      {/* ESLOGAN - OPTIMIZADO PARA MÓVILES */}
      <section
        style={{
          padding: isMobile ? "1.5rem 1rem" : "2rem",
          background: "linear-gradient(135deg, #f9b91d 0%, #f9b91d 100%)",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "1.5rem" : "clamp(1.5rem, 3vw, 2.5rem)",
              fontWeight: "700",
              color: "white",
              margin: 0,
              textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              fontFamily: "'Poppins', sans-serif",
              lineHeight: "1.3",
            }}
          >
            "Representando la voz de Palenque"
          </h2>
        </div>
      </section>

      {/* SOBRE LA REPRESENTANTE - OPTIMIZADO PARA MÓVILES */}
      <section
        id="sobre-mi"
        style={{
          padding: isMobile ? "2rem 1rem" : "4rem 2rem",
          background: "#f8fafc",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: isMobile
              ? "1fr"
              : "repeat(auto-fit, minmax(400px, 1fr))",
            gap: isMobile ? "2rem" : "3rem",
            alignItems: "center",
          }}
        >
          <div style={{ order: isMobile ? 2 : 1 }}>
            <div
              style={{
                display: "inline-block",
                background: "#0dc1d3",
                color: "white",
                padding: isMobile ? "6px 16px" : "8px 20px",
                borderRadius: "6px",
                fontSize: isMobile ? "11px" : "12px",
                fontWeight: "700",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Sobre la Representante
            </div>

            <h2
              style={{
                fontSize: isMobile ? "1.8rem" : "clamp(2rem, 4vw, 3rem)",
                fontWeight: "700",
                color: "#24354b",
                marginBottom: "1.5rem",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "1.2",
              }}
            >
              Dorina Hernández Palomino
            </h2>

            <p
              style={{
                fontSize: isMobile ? "1rem" : "1.1rem",
                color: "#4a5568",
                lineHeight: "1.7",
                marginBottom: "1.5rem",
              }}
            >
              Representante a la Cámara por Bolívar, líder palenquera
              comprometida con la defensa de los derechos étnicos y el
              desarrollo territorial. Con una trayectoria sólida en gestión
              pública y liderazgo comunitario.
            </p>

            <p
              style={{
                fontSize: isMobile ? "0.9rem" : "1rem",
                color: "#718096",
                lineHeight: "1.6",
                marginBottom: "2rem",
              }}
            >
              Trabajando incansablemente por la equidad, la justicia social y el
              reconocimiento de las comunidades afrocolombianas en el Congreso
              de la República.
            </p>

            <a
              href="/biografia"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#24354b",
                color: "white",
                padding: isMobile ? "14px 20px" : "12px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "600",
                transition: "all 0.3s ease",
                fontSize: isMobile ? "14px" : "16px",
                minHeight: isMobile ? "44px" : "auto",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow = "0 8px 25px rgba(36, 53, 75, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "none";
              }}
            >
              Ver biografía completa <ChevronRight size={16} />
            </a>
          </div>

          <div style={{ position: "relative", order: isMobile ? 1 : 2 }}>
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="media/dorina-hero2.png"
                alt="Dorina Hernández Palomino"
                style={{
                  width: "100%",
                  height: isMobile ? "300px" : "500px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* BANDERAS POLÍTICAS - OPTIMIZADO PARA MÓVILES */}
      <section
        style={{
          padding: isMobile ? "2rem 1rem" : "4rem 2rem",
          background: "#24354b",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: isMobile ? "2rem" : "3rem",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "#f9b91d",
                color: "white",
                padding: isMobile ? "6px 16px" : "8px 20px",
                borderRadius: "6px",
                fontSize: isMobile ? "11px" : "12px",
                fontWeight: "700",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Nuestras Banderas Políticas
            </div>

            <h2
              style={{
                fontSize: isMobile ? "1.8rem" : "clamp(2rem, 4vw, 3rem)",
                fontWeight: "700",
                color: "white",
                marginBottom: "1rem",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "1.2",
              }}
            >
              Ejes que guían el trabajo legislativo
            </h2>

            <p
              style={{
                fontSize: isMobile ? "1rem" : "1.2rem",
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              y social de Dorina Hernández
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(280px, 1fr))",
              gap: isMobile ? "1.5rem" : "2rem",
            }}
          >
            {politicalFlags.map((flag, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "12px",
                  padding: isMobile ? "1.5rem" : "2rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  transform: isVisible ? "translateY(0)" : "translateY(30px)",
                  opacity: isVisible ? 1 : 0,
                  transitionDelay: `${index * 0.1}s`,
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-8px)";
                  e.target.style.background = "rgba(255, 255, 255, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.background = "rgba(255, 255, 255, 0.05)";
                }}
              >
                <div
                  style={{
                    width: isMobile ? "56px" : "64px",
                    height: isMobile ? "56px" : "64px",
                    borderRadius: "50%",
                    background: flag.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <flag.icon size={isMobile ? 24 : 28} color="white" />
                </div>

                <h3
                  style={{
                    fontSize: isMobile ? "1.1rem" : "1.3rem",
                    fontWeight: "600",
                    color: "white",
                    marginBottom: "1rem",
                    fontFamily: "'Poppins', sans-serif",
                    lineHeight: "1.3",
                  }}
                >
                  {flag.title}
                </h3>

                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    lineHeight: "1.6",
                    marginBottom: "1.5rem",
                    fontSize: isMobile ? "0.9rem" : "1rem",
                  }}
                >
                  {flag.description}
                </p>

                <button
                  style={{
                    background: `${flag.color}20`,
                    color: flag.color,
                    border: `1px solid ${flag.color}40`,
                    padding: isMobile ? "10px 18px" : "8px 16px",
                    borderRadius: "6px",
                    fontSize: isMobile ? "13px" : "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    minHeight: isMobile ? "40px" : "auto",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = flag.color;
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = `${flag.color}20`;
                    e.target.style.color = flag.color;
                  }}
                >
                  Ver más
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section - OPTIMIZADO PARA MÓVILES */}
      <section
        style={{
          padding: isMobile ? "2rem 1rem" : "3rem 2rem",
          width: "100%",
          background:
            "linear-gradient(135deg, #24354b 0%, #24354b 50%, #24354b 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Elementos decorativos - OCULTOS EN MÓVIL */}
        {!isMobile && (
          <>
            <div
              style={{
                position: "absolute",
                top: "-50%",
                right: "-20%",
                width: "600px",
                height: "600px",
                background:
                  "radial-gradient(circle, rgba(86, 150, 56, 0.08) 0%, transparent 70%)",
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
                  "radial-gradient(circle, rgba(249, 185, 29, 0.05) 0%, transparent 70%)",
                borderRadius: "50%",
              }}
            />
          </>
        )}

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: isMobile ? "2rem" : "3.5rem",
            }}
          >
            <div
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #129ba5, #129ba5)",
                backdropFilter: "blur(10px)",
                color: "white",
                padding: isMobile ? "10px 24px" : "12px 32px",
                borderRadius: "8px",
                fontSize: isMobile ? "12px" : "14px",
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
                fontSize: isMobile ? "1.8rem" : "clamp(2rem, 4vw, 3rem)",
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
                  background: "linear-gradient(135deg, #f9b91d, #f9b91d)",
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
                fontSize: isMobile ? "1rem" : "clamp(1rem, 2vw, 1.2rem)",
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
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(320px, 1fr))",
              gap: isMobile ? "1rem" : "1.5rem",
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
                  padding: isMobile ? "1.5rem 1rem" : "2rem 1.5rem",
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
                    gap: isMobile ? "0.75rem" : "1rem",
                    flexDirection: isMobile ? "column" : "row",
                    textAlign: isMobile ? "center" : "left",
                  }}
                >
                  <div
                    style={{
                      width: isMobile ? "120px" : "150px",
                      height: isMobile ? "120px" : "150px",
                      borderRadius: "8px",
                      overflow: "hidden",
                      flexShrink: 0,
                      border: `2px solid ${achievement.color}30`,
                      margin: isMobile ? "0 auto 1rem" : "0",
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
                        fontSize: isMobile ? "1.1rem" : "1.2rem",
                        fontWeight: "600",
                        color: "white",
                        marginBottom: "0.5rem",
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: "1.3",
                      }}
                    >
                      {achievement.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255, 255, 255, 0.7)",
                        lineHeight: "1.5",
                        fontSize: isMobile ? "0.9rem" : "0.95rem",
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

      {/* Social Media Section - OPTIMIZADO PARA MÓVILES */}
      <section
        style={{
          background: "linear-gradient(135deg, #129ba5 0%, #129ba5 100%)",
          padding: isMobile ? "2rem 1rem" : "3rem 2rem",
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
          <div
            style={{
              textAlign: "center",
              marginBottom: isMobile ? "2rem" : "3rem",
            }}
          >
            <h2
              style={{
                fontSize: isMobile ? "1.6rem" : "clamp(1.8rem, 3vw, 2.2rem)",
                fontWeight: "600",
                color: "white",
                marginBottom: "0.5rem",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "1.3",
              }}
            >
              Sígueme en Redes Sociales
            </h2>
            <p
              style={{
                fontSize: isMobile ? "0.9rem" : "clamp(0.9rem, 1.6vw, 1rem)",
                color: "rgba(255,255,255,0.8)",
              }}
            >
              Mantente al día con mi trabajo y propuestas
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(300px, 1fr))",
              gap: isMobile ? "1.5rem" : "2rem",
              width: "100%",
            }}
          >
            {/* Facebook Embed */}
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                padding: isMobile ? "1rem" : "1.5rem",
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
                    color: "#129ba5",
                    margin: 0,
                    fontSize: isMobile ? "0.9rem" : "1rem",
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
                  height: isMobile ? "250px" : "300px",
                  border: "none",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
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
            <div
              style={{
                background: "white",
                borderRadius: "12px",
                padding: isMobile ? "1rem" : "1.5rem",
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
                    color: "#129ba5",
                    margin: 0,
                    fontSize: isMobile ? "0.9rem" : "1rem",
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
                  height: isMobile ? "250px" : "300px",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              >
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink="https://www.instagram.com/p/DLLedUUR1LJ/?utm_source=ig_embed&utm_campaign=loading"
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: 0,
                    borderRadius: "3px",
                    boxShadow:
                      "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: 0,
                    width: "99.375%",
                  }}
                >
                  {/* Instagram embed content - mantenido igual */}
                  <div style={{ padding: "16px" }}>
                    <a
                      href="https://www.instagram.com/p/DLLedUUR1LJ/?utm_source=ig_embed&utm_campaign=loading"
                      style={{
                        background: "#FFFFFF",
                        lineHeight: 0,
                        padding: "0 0",
                        textAlign: "center",
                        textDecoration: "none",
                        width: "100%",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#F4F4F4",
                            borderRadius: "50%",
                            flexGrow: 0,
                            height: "40px",
                            marginRight: "14px",
                            width: "40px",
                          }}
                        ></div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 1,
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "4px",
                              flexGrow: 0,
                              height: "14px",
                              marginBottom: "6px",
                              width: "100px",
                            }}
                          ></div>
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "4px",
                              flexGrow: 0,
                              height: "14px",
                              width: "60px",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div style={{ padding: "19% 0" }}></div>
                      <div
                        style={{
                          display: "block",
                          height: "50px",
                          margin: "0 auto 12px",
                          width: "50px",
                        }}
                      >
                        <svg
                          width="50px"
                          height="50px"
                          viewBox="0 0 60 60"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            stroke="none"
                            strokeWidth="1"
                            fill="none"
                            fillRule="evenodd"
                          >
                            <g
                              transform="translate(-511.000000, -20.000000)"
                              fill="#000000"
                            >
                              <g>
                                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div style={{ paddingTop: "8px" }}>
                        <div
                          style={{
                            color: "#3897f0",
                            fontFamily: "Arial,sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: "550",
                            lineHeight: "18px",
                          }}
                        >
                          Ver esta publicación en Instagram
                        </div>
                      </div>
                    </a>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section - OPTIMIZADO PARA MÓVILES */}
      <section
        style={{
          padding: isMobile ? "2rem 1rem" : "3rem 2rem",
          width: "100%",
          background: "linear-gradient(135deg, #24354b 0%, #24354b 100%)",
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
              textAlign: "center",
              marginBottom: isMobile ? "2rem" : "2.5rem",
            }}
          >
            <div
              style={{
                display: "inline-block",
                color: "white",
                background: "linear-gradient(135deg, #f9b91d, #f9b91d)",
                padding: isMobile ? "8px 20px" : "10px 24px",
                borderRadius: "6px",
                fontSize: isMobile ? "12px" : "14px",
                fontWeight: "700",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Videos Destacados
            </div>
            <h2
              style={{
                fontSize: isMobile ? "1.6rem" : "clamp(2rem, 3.5vw, 2.5rem)",
                fontWeight: "600",
                color: "white",
                marginBottom: "0.5rem",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "1.3",
              }}
            >
              Mi Trabajo en el Congreso
            </h2>
            <p
              style={{
                fontSize: isMobile ? "0.9rem" : "clamp(0.9rem, 1.6vw, 1rem)",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              Conoce más sobre mis propuestas y gestiones
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(300px, 1fr))",
              gap: isMobile ? "1rem" : "1.5rem",
              width: "100%",
            }}
          >
            {[
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
            ].map((video, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
                  border: "1px solid #e2e8f0",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-6px)";
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
                <div
                  style={{
                    padding: isMobile ? "0.75rem" : "1rem",
                    textAlign: "center",
                  }}
                >
                  <a
                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <h3
                      style={{
                        fontSize: isMobile ? "0.95rem" : "1.05rem",
                        fontWeight: "600",
                        color: "#f9b91d",
                        marginBottom: "0.75rem",
                        fontFamily: "'Poppins', sans-serif",
                        textAlign: "center",
                        lineHeight: "1.3",
                      }}
                    >
                      {video.title}
                    </h3>
                  </a>
                  <p
                    style={{
                      fontSize: isMobile ? "0.8rem" : "0.9rem",
                      color: "#64748b",
                      margin: 0,
                      lineHeight: "1.4",
                      textAlign: "center",
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

      {/* FORMULARIO DE PARTICIPACIÓN - OPTIMIZADO PARA MÓVILES */}
      <section
        style={{
          padding: isMobile ? "2rem 1rem" : "4rem 2rem",
          background: "#569638",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: isMobile ? "1.8rem" : "clamp(2rem, 4vw, 3rem)",
                fontWeight: "700",
                color: "white",
                marginBottom: "1rem",
                fontFamily: "'Poppins', sans-serif",
                lineHeight: "1.2",
              }}
            >
              Haz parte del proyecto político de Dorina
            </h2>
            <p
              style={{
                fontSize: isMobile ? "1rem" : "1.2rem",
                color: "rgba(255, 255, 255, 0.9)",
                marginBottom: "2rem",
                lineHeight: "1.6",
              }}
            >
              Comparte tus ideas y propuestas. Tu voz es importante para
              construir un futuro mejor para nuestras comunidades.
            </p>
          </div>

          <div
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              borderRadius: "16px",
              padding: isMobile ? "2rem 1.5rem" : "2.5rem",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                marginBottom: "1.5rem",
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <MessageSquare size={isMobile ? 28 : 32} color="white" />
              <h3
                style={{
                  fontSize: isMobile ? "1.3rem" : "1.5rem",
                  fontWeight: "600",
                  color: "white",
                  margin: 0,
                  fontFamily: "'Poppins', sans-serif",
                  textAlign: "center",
                }}
              >
                Tu participación cuenta
              </h3>
            </div>

            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                marginBottom: "2rem",
                fontSize: isMobile ? "1rem" : "1.1rem",
                lineHeight: "1.6",
              }}
            >
              Queremos escuchar tus propuestas, inquietudes y sugerencias.
              Juntos podemos trabajar por el desarrollo de nuestros territorios.
            </p>

            <a
              href="/contacto"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#f9b91d",
                color: "white",
                padding: isMobile ? "16px 28px" : "16px 32px",
                borderRadius: "50px",
                textDecoration: "none",
                fontWeight: "600",
                fontSize: isMobile ? "1rem" : "1.1rem",
                transition: "all 0.3s ease",
                boxShadow: "0 8px 25px rgba(249, 185, 29, 0.4)",
                minHeight: isMobile ? "48px" : "auto",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px) scale(1.05)";
                e.target.style.boxShadow =
                  "0 12px 30px rgba(249, 185, 29, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0) scale(1)";
                e.target.style.boxShadow = "0 8px 25px rgba(249, 185, 29, 0.4)";
              }}
            >
              <Send size={20} />
              Enviar propuesta
            </a>

            <p
              style={{
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: isMobile ? "0.8rem" : "0.9rem",
                marginTop: "1.5rem",
                margin: "1.5rem 0 0 0",
              }}
            >
              Tu información será tratada confidencialmente de acuerdo con
              nuestra política de privacidad.
            </p>
          </div>
        </div>
      </section>

      {/* Footer - OPTIMIZADO PARA MÓVILES */}
      <footer
        style={{
          background: "linear-gradient(135deg, #24354b 0%, #24354b 100%)",
          color: "white",
          padding: isMobile ? "2rem 1rem 1rem" : "2.5rem 2rem 1.5rem",
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
              gridTemplateColumns: isMobile
                ? "1fr"
                : "repeat(auto-fit, minmax(250px, 1fr))",
              gap: isMobile ? "1.5rem" : "2rem",
              marginBottom: "2rem",
            }}
          >
            {/* Contact Info */}
            <div>
              <h3
                style={{
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  color: "#f9b91d",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.3",
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
                  <Mail size={16} style={{ color: "#f9b91d" }} />
                  <span style={{ fontSize: isMobile ? "0.8rem" : "0.9rem" }}>
                    contacto@dorinahernandez.com
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <Phone size={16} style={{ color: "#f9b91d" }} />
                  <span style={{ fontSize: isMobile ? "0.8rem" : "0.9rem" }}>
                    +57 (5) 123-4567
                  </span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <MapPin size={16} style={{ color: "#f9b91d" }} />
                  <span style={{ fontSize: isMobile ? "0.8rem" : "0.9rem" }}>
                    San Basilio de Palenque, Bolívar
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3
                style={{
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  color: "#f9b91d",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.3",
                }}
              >
                Redes Sociales
              </h3>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                {[
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
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  fontSize: isMobile ? "1rem" : "1.1rem",
                  fontWeight: "600",
                  marginBottom: "1rem",
                  color: "#f9b91d",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.3",
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
                      fontSize: isMobile ? "0.8rem" : "0.9rem",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "#f9b91d";
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
            <p
              style={{ fontSize: isMobile ? "0.75rem" : "0.85rem", margin: 0 }}
            >
              © {new Date().getFullYear()} Dorina Hernández Palomino. Todos los
              derechos reservados.
              <br />
              <span style={{ color: "#f9b91d" }}>
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
              "linear-gradient(90deg, #FFCD00 0%, #FFCD00 50%, #003087 50%, #003087 75%, #CE1126 75%, #CE1126 100%)",
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

      {/* Instagram Embed Script */}
      <script async src="//www.instagram.com/embed.js"></script>
    </div>
  );
};

export default Inicio;
