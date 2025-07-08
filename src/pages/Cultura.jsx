"use client";

import { useState, useEffect } from "react";
import {
  MapPin,
  Globe,
  BookOpen,
  Music,
  Users,
  Award,
  Heart,
  Utensils,
  GraduationCap,
  Calendar,
  Building,
  Shield,
  Eye,
} from "lucide-react";

const Cultura = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    // Scroll to top when component mounts
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

  const culturaViva = [
    {
      title: "Lengua Palenquera",
      description:
        "Única lengua criolla de las Américas que combina base léxica española con características gramaticales de leng uas bantúes",
      icon: BookOpen,
      color: "#007C88",
    },
    {
      title: "Música y Danza",
      description:
        "Mapalé, Son palenquero, Lumbalú, champeta y bullerengue - expresiones musicales con raíces africanas",
      icon: Music,
      color: "#F89C1E",
    },
    {
      title: "Gastronomía Ancestral",
      description:
        "Dulces tradicionales como cocadas, bolas de maní y enyucado, comercializados por mujeres palenqueras",
      icon: Utensils,
      color: "#007C88",
    },
    {
      title: "Organización Social",
      description:
        "Estructura comunitaria única que preserva tradiciones africanas y fortalece la cohesión social",
      icon: Users,
      color: "#F89C1E",
    },
  ];

  const logrosDorina = [
    {
      year: "1988",
      title: "Docente Líder en Recuperación de la Lengua",
      description: "Secretaría de Educación y Cultura de Bolívar",
      icon: GraduationCap,
    },
    {
      year: "2003-2004",
      title: "Ponente Declaratoria UNESCO",
      description:
        "San Basilio de Palenque como Patrimonio Inmaterial de la Humanidad",
      icon: Globe,
    },
    {
      year: "2018",
      title: "Título Honorífico 'Cha Dorina'",
      description:
        "XXXIII Festival de Tambores y Expresiones Culturales de Palenque",
      icon: Award,
    },
    {
      year: "2020",
      title: "Coordinadora Comité Patrimonio Inmaterial Champeta",
      description:
        "Preservación y promoción de manifestaciones culturales afrocolombianas",
      icon: Music,
    },
  ];

  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        paddingTop: "80px", // Agregar padding para compensar header fijo
        overflowX: "hidden",
        fontFamily:
          "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Hero Section - Banner */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #007C88 0%, #005A63 50%, #003D42 100%)",
          padding: "4rem 1.5rem",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(248, 156, 30, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            left: "-5%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(234, 217, 197, 0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            padding: "0 24px", // Mejorar padding para móviles
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: "rgba(248, 156, 30, 0.2)",
              color: "#F89C1E",
              padding: "12px 32px",
              borderRadius: "25px",
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "2rem",
              border: "1px solid rgba(248, 156, 30, 0.3)",
            }}
          >
            Patrimonio Cultural de la Humanidad
          </div>

          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              fontWeight: "700",
              color: "white",
              marginBottom: "1.5rem",
              lineHeight: "1.1",
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 1s ease-out",
            }}
          >
            San Basilio de Palenque
          </h1>

          <p
            style={{
              fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)",
              color: "rgba(255, 255, 255, 0.9)",
              marginBottom: "2rem",
              lineHeight: "1.4",
              maxWidth: "800px",
              margin: "0 auto 2rem",
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 1s ease-out 0.3s",
            }}
          >
            "La primera comunidad afrocolombiana libre,{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: "600",
              }}
            >
              corazón de resistencia cultural"
            </span>
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
              marginTop: "2rem",
              transform: isVisible ? "translateY(0)" : "translateY(30px)",
              opacity: isVisible ? 1 : 0,
              transition: "all 1s ease-out 0.6s",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "white",
              }}
            >
              <MapPin size={24} style={{ color: "#F89C1E" }} />
              <span style={{ fontSize: "1.1rem" }}>50 km de Cartagena</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "white",
              }}
            >
              <Users size={24} style={{ color: "#F89C1E" }} />
              <span style={{ fontSize: "1.1rem" }}>≈ 4,200 habitantes</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "white",
              }}
            >
              <Calendar size={24} style={{ color: "#F89C1E" }} />
              <span style={{ fontSize: "1.1rem" }}>UNESCO 2005</span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            width: "60px",
            height: "60px",
            background: "linear-gradient(135deg, #F89C1E, #E8890B)",
            borderRadius: "50%",
            opacity: 0.1,
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "30%",
            right: "15%",
            width: "40px",
            height: "40px",
            background: "linear-gradient(135deg, #EAD9C5, #F4E6D3)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            opacity: 0.1,
            animation: "float 10s ease-in-out infinite reverse",
          }}
        />
      </section>

      {/* Contexto Histórico y Patrimonial */}
      <section
        className="animate-section"
        style={{
          padding: "4rem 1.5rem",
          background: "linear-gradient(135deg, #EAD9C5 0%, #E0CDB0 100%)",
          opacity: 0,
          transform: "translateY(50px)",
          transition: "all 0.8s ease-out",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px", // Mejorar padding para móviles
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #007C88, #006B75)",
                color: "white",
                padding: "12px 32px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              🏛 Contexto Histórico
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "700",
                color: "#007C88",
                marginBottom: "1rem",
                lineHeight: "1.2",
              }}
            >
              Patrimonio{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Inmaterial
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "2.5rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0, 124, 136, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-8px)";
                e.target.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #007C88, #006B75)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <MapPin size={32} style={{ color: "white" }} />
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "#007C88",
                  marginBottom: "1rem",
                }}
              >
                Ubicación Estratégica
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Centro poblado del departamento de Bolívar, bajo jurisdicción
                del municipio de Mahates. Ubicado cerca del Canal del Dique, a
                50 km de Cartagena de Indias.
              </p>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "2.5rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0, 124, 136, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-8px)";
                e.target.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Globe size={32} style={{ color: "white" }} />
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "#007C88",
                  marginBottom: "1rem",
                }}
              >
                Reconocimiento UNESCO
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Declarado en 2005 como Patrimonio Cultural e Inmaterial de la
                Humanidad por preservar lengua, música, rituales, medicina
                tradicional y organización social única.
              </p>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "2.5rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0, 124, 136, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-8px)";
                e.target.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #007C88, #006B75)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <Heart size={32} style={{ color: "white" }} />
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "#007C88",
                  marginBottom: "1rem",
                }}
              >
                Primera Comunidad Libre
              </h3>
              <p
                style={{
                  color: "#64748b",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Reconocido como el primer pueblo libre de la América colonial,
                conservando tradiciones como el lenguaje, comida, baile y
                cultura propia de los africanos.
              </p>
            </div>
          </div>

          {/* Galería adicional de contexto histórico */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
              marginTop: "3rem",
            }}
          >
            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src="media/benkos.avif?height=250&width=400"
                alt="Monumento a Benkos Biohó"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "1rem", background: "white" }}>
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#007C88",
                    margin: "0 0 0.5rem 0",
                  }}
                >
                  Monumento a Benkos Biohó
                </h4>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#64748b",
                    margin: 0,
                    lineHeight: "1.4",
                  }}
                >
                  Homenaje al líder fundador del palenque
                </p>
              </div>
            </div>

            <div
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-5px)";
                e.target.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.1)";
              }}
            >
              <img
                src="media/mural.jpg?height=250&width=400"
                alt="Murales históricos"
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "1rem", background: "white" }}>
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                    color: "#007C88",
                    margin: "0 0 0.5rem 0",
                  }}
                >
                  Arte Mural
                </h4>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "#64748b",
                    margin: 0,
                    lineHeight: "1.4",
                  }}
                >
                  Murales que narran la historia del pueblo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultura Viva Palenquera */}
      <section
        className="animate-section"
        style={{
          padding: "4rem 1.5rem",
          background:
            "linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)",
          opacity: 0,
          transform: "translateY(50px)",
          transition: "all 0.8s ease-out",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-30%",
            left: "-20%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(248, 156, 30, 0.05) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            padding: "0 24px", // Mejorar padding para móviles
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                color: "white",
                padding: "12px 32px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "1rem",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              🎭 Cultura Viva
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "700",
                color: "white",
                marginBottom: "1rem",
                lineHeight: "1.2",
              }}
            >
              Tradiciones{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Ancestrales
              </span>
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Expresiones culturales únicas que mantienen viva la herencia
              africana en América
            </p>
          </div>

          <div
            className="cultura-viva-grid"
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth <= 480
                  ? "1fr"
                  : window.innerWidth <= 768
                  ? "repeat(2, 1fr)"
                  : "repeat(4, 1fr)",
              gap: "2rem",
              marginBottom: "3rem",
            }}
          >
            {culturaViva.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.08)";
                  e.target.style.transform = "translateY(-8px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "rgba(255, 255, 255, 0.05)";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: item.color,
                  }}
                />
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: `${item.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <item.icon size={36} style={{ color: item.color }} />
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "white",
                    marginBottom: "1rem",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "1rem",
                    lineHeight: "1.6",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Galería de Cultura Viva */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-8px)";
                e.target.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
              }}
            >
              <img
                src="media/danzas.jpg?height=300&width=400"
                alt="Danza tradicional palenquera"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(transparent, rgba(0, 0, 0, 0.9))",
                  color: "white",
                  padding: "1.5rem",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  Danzas Ancestrales
                </h4>
                <p style={{ fontSize: "0.85rem", opacity: 0.9, margin: 0 }}>
                  Mapalé y bullerengue en las festividades
                </p>
              </div>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-8px)";
                e.target.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
              }}
            >
              <img
                src="media/dulces.jpg?height=300&width=400"
                alt="Personas palenqueras"
                style={{
                  width: "100%",
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(transparent, rgba(0, 0, 0, 0.9))",
                  color: "white",
                  padding: "1.5rem",
                }}
              >
                <h4
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  Dulces Tradicionales
                </h4>
                <p style={{ fontSize: "0.85rem", opacity: 0.9, margin: 0 }}>
                  Cocadas y enyucados hechos por mujeres palenqueras
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva Sección: Tierra y Cultura - Representación Histórica */}
      <section
        className="animate-section"
        style={{
          padding: "4rem 1.5rem",
          background:
            "linear-gradient(135deg, #1a2332 0%, #2d3748 50%, #4a5568 100%)",
          opacity: 0,
          transform: "translateY(50px)",
          transition: "all 0.8s ease-out",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-20%",
            left: "-10%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, rgba(248, 156, 30, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-15%",
            right: "-10%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(0, 124, 136, 0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            position: "relative",
            zIndex: 2,
            padding: "0 24px", // Mejorar padding para móviles
          }}
        >
          {/* Header Section */}
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                color: "white",
                padding: "12px 32px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "700",
                marginBottom: "2rem",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              🌿 Tierra y Cultura
            </div>

            <h2
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: "700",
                color: "white",
                marginBottom: "2rem",
                lineHeight: "1.1",
                maxWidth: "900px",
                margin: "0 auto 2rem",
              }}
            >
              "Nuestra historia no solo se cuenta:{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                se representa en el Congreso"
              </span>
            </h2>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "20px",
                padding: "2rem",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              <img
                src="media/congreso.png?height=300&width=600"
                alt="Dorina en sesión del Congreso"
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  marginBottom: "1rem",
                }}
              />
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  margin: 0,
                }}
              >
                Dorina Hernández en sesión del Congreso de la República
              </p>
            </div>
          </div>

          {/* Why it's Important Section */}
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "24px",
              padding: "3rem",
              marginBottom: "4rem",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: "600",
                color: "white",
                marginBottom: "2rem",
              }}
            >
              ¿Por qué es importante?
            </h3>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "2rem",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#F89C1E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Building size={20} style={{ color: "white" }} />
                </div>
                <div>
                  <h4
                    style={{
                      color: "#F89C1E",
                      fontSize: "1rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Primera Mujer Palenquera
                  </h4>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.9rem",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    En ocupar una curul en el Congreso de la República de
                    Colombia
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#007C88",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Users size={20} style={{ color: "white" }} />
                </div>
                <div>
                  <h4
                    style={{
                      color: "#007C88",
                      fontSize: "1rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Líder Afrodescendiente
                  </h4>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.9rem",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    Símbolo de representación histórica y dignidad cultural
                  </p>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "#F89C1E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Globe size={20} style={{ color: "white" }} />
                </div>
                <div>
                  <h4
                    style={{
                      color: "#F89C1E",
                      fontSize: "1rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Gestora UNESCO
                  </h4>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.9rem",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    Principal artífice de la declaratoria de Palenque como
                    Patrimonio de la Humanidad (2005)
                  </p>
                </div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(248, 156, 30, 0.1)",
                border: "1px solid rgba(248, 156, 30, 0.3)",
                borderRadius: "16px",
                padding: "2rem",
                marginTop: "2rem",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "1.1rem",
                  lineHeight: "1.6",
                  margin: 0,
                  fontStyle: "italic",
                }}
              >
                "Su presencia en el Congreso es un hecho sin precedentes: por
                primera vez, la voz de Palenque y del pueblo afrocolombiano se
                hace oír desde el hemiciclo legislativo."
              </p>
            </div>
          </div>

          {/* Legislative Cultural Achievements */}
          <div>
            <h3
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: "700",
                color: "white",
                textAlign: "center",
                marginBottom: "3rem",
              }}
            >
              Logros Culturales{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Legislativos
              </span>
            </h3>

            <div
              className="legislative-grid"
              style={{
                display: "grid",
                gridTemplateColumns:
                  window.innerWidth <= 640 ? "1fr" : "repeat(2, 1fr)",
                gap: "2rem",
                maxWidth: "900px",
                margin: "0 auto 3rem",
              }}
            >
              {[
                {
                  area: "Patrimonio",
                  icon: Shield,
                  color: "#007C88",
                  actions:
                    "Impulsó políticas de salvaguarda de la lengua palenquera",
                  bgColor: "rgba(0, 124, 136, 0.1)",
                },
                {
                  area: "Cultura",
                  icon: Music,
                  color: "#F89C1E",
                  actions:
                    "Apoyo a colectivos de música, trenzado y oralidad tradicional",
                  bgColor: "rgba(248, 156, 30, 0.1)",
                },
                {
                  area: "Educación",
                  icon: GraduationCap,
                  color: "#007C88",
                  actions:
                    "Promotora del enfoque étnico en la política pública educativa",
                  bgColor: "rgba(0, 124, 136, 0.1)",
                },
                {
                  area: "Visibilidad",
                  icon: Eye,
                  color: "#F89C1E",
                  actions:
                    "Denunció el racismo estructural y defendió la consulta previa",
                  bgColor: "rgba(248, 156, 30, 0.1)",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    padding: "2.5rem",
                    textAlign: "center",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
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
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: item.color,
                    }}
                  />

                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      background: item.bgColor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                      border: `2px solid ${item.color}`,
                    }}
                  >
                    <item.icon size={36} style={{ color: item.color }} />
                  </div>

                  <div
                    style={{
                      background: item.color,
                      color: "white",
                      padding: "8px 20px",
                      borderRadius: "25px",
                      fontSize: "14px",
                      fontWeight: "600",
                      display: "inline-block",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {item.area}
                  </div>

                  <h4
                    style={{
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "1rem",
                    }}
                  >
                    Acciones Destacadas
                  </h4>

                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "1rem",
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {item.actions}
                  </p>
                </div>
              ))}
            </div>

            {/* Galería de Dorina en acción */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-8px)";
                  e.target.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
                }}
              >
                <img
                  src="media/comunidad.jpeg?height=300&width=400"
                  alt="Dorina con comunidades palenqueras"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      "linear-gradient(transparent, rgba(0, 0, 0, 0.9))",
                    color: "white",
                    padding: "1.5rem",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Trabajo Comunitario
                  </h4>
                  <p style={{ fontSize: "0.85rem", opacity: 0.9, margin: 0 }}>
                    Dorina con líderes de la comunidad palenquera
                  </p>
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-8px)";
                  e.target.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
                }}
              >
                <img
                  src="media/eventos-culturales.jpeg?height=300&width=400"
                  alt="Dorina en eventos culturales"
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background:
                      "linear-gradient(transparent, rgba(0, 0, 0, 0.9))",
                    color: "white",
                    padding: "1.5rem",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Eventos Culturales
                  </h4>
                  <p style={{ fontSize: "0.85rem", opacity: 0.9, margin: 0 }}>
                    Participación en festivales y celebraciones palenqueras
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Statement */}
          <div
            style={{
              marginTop: "4rem",
              textAlign: "center",
              background: "rgba(248, 156, 30, 0.1)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(248, 156, 30, 0.3)",
              borderRadius: "24px",
              padding: "3rem",
            }}
          >
            <div
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 2rem",
                boxShadow: "0 10px 30px rgba(248, 156, 30, 0.4)",
              }}
            >
              <Heart size={40} style={{ color: "white" }} />
            </div>

            <h3
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: "700",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              Representación que Trasciende
            </h3>

            <p
              style={{
                fontSize: "1.2rem",
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: "1.6",
                maxWidth: "700px",
                margin: "0 auto",
              }}
            >
              Dorina no solo representa a Bolívar en el Congreso; representa la
              dignidad, la resistencia y la riqueza cultural de todo un pueblo
              que durante siglos ha preservado su identidad ancestral. Su voz es
              la voz de Palenque resonando en los pasillos del poder.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .timeline-item {
            flex-direction: column !important;
            text-align: center !important;
          }
          .timeline-item > div:first-child,
          .timeline-item > div:last-child {
            flex: none !important;
            padding: 0 !important;
            margin-bottom: 1rem;
          }
        }

        @media (max-width: 640px) {
          .legislative-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 768px) {
          .cultura-viva-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 480px) {
          .cultura-viva-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Cultura;
