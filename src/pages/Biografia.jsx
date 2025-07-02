"use client";

import { useState, useEffect } from "react";
import {
  GraduationCap,
  Award,
  MapPin,
  Mail,
  Building,
  Calendar,
  Star,
  BookOpen,
  Globe,
  Heart,
  Phone,
} from "lucide-react";

const Biografia = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
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

  const formacionAcademica = [
    {
      year: "1992",
      title: "Licenciada en Administración Educativa",
      institution: "Universidad San Buenaventura, Cartagena",
      icon: GraduationCap,
      color: "#007C88",
    },
    {
      year: "2001",
      title: "Magíster en Educación Comunitaria",
      institution: "Universidad Pedagógica, Bogotá",
      icon: BookOpen,
      color: "#F89C1E",
    },
    {
      year: "2019",
      title: "Doctoranda en Ciencias de la Educación y Pedagogía Social",
      institution: "Universidad de Cartagena & Universidad de Granada (España)",
      icon: Globe,
      color: "#007C88",
    },
    {
      year: "2022",
      title: "8vo. Semestre en Historia y Patrimonio",
      institution: "Universidad del Magdalena",
      icon: BookOpen,
      color: "#F89C1E",
    },
  ];

  const trayectoriaProfesional = [
    {
      period: "1988",
      title: "Docente Líder en Recuperación de la Lengua",
      description: "Secretaría de Educación y Cultura de Bolívar",
      color: "#007C88",
    },
    {
      period: "1994-1998",
      title: "Coordinadora Nacional de Etnoeducación Afrocolombiana",
      description: "Ministerio de Educación Nacional de Colombia",
      color: "#F89C1E",
    },
    {
      period: "2001",
      title: "Directora de Cultura",
      description:
        "Gobernación de Bolívar - Reactivó el Concejo Departamental de Cultura",
      color: "#007C88",
    },
    {
      period: "2003-2004",
      title: "Ponente Declaratoria UNESCO",
      description:
        "San Basilio de Palenque como Patrimonio Inmaterial de la Humanidad",
      color: "#F89C1E",
    },
    {
      period: "2009",
      title: "Coordinadora Programa Especial de Etnoeducación",
      description:
        "Secretaría de Educación y Cultura de Bolívar + Docente Universidad de la Guajira",
      color: "#007C88",
    },
    {
      period: "2020",
      title: "Docente de Cátedra en Estudios Afrocolombianos",
      description:
        "Secretaría de Educación de Cartagena + Coordinadora Comité Patrimonio Inmaterial Champeta",
      color: "#F89C1E",
    },
  ];

  const distinciones = [
    {
      year: "2005",
      title: "Mujer del Año",
      entity:
        "Sociedad Bolivariana de Escritores Andinos y Cabildo Benkos Biohó",
      icon: Award,
    },
    {
      year: "2006",
      title: "Premio en Gestión Cultural",
      entity: "Ministerio de Cultura de Colombia",
      icon: Star,
    },
    {
      year: "2018",
      title: "Título Honorífico 'Cha Dorina'",
      entity:
        "XXXIII Festival de Tambores y Expresiones Culturales de Palenque",
      icon: Heart,
    },
    {
      year: "2019",
      title: "Premio Calidad Turística de Bolívar",
      entity: "Gobernación de Bolívar",
      icon: Globe,
    },
    {
      year: "2020",
      title: "Premio 'Comparte lo que somos'",
      entity: "Ministerio de Cultura de Colombia",
      icon: Award,
    },
    {
      year: "2020",
      title: "Mención de Honor Decenio Afrodescendiente",
      entity: "Ministerio de Cultura - Enriquecimiento cultura ancestral",
      icon: Star,
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
        fontFamily:
          "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Hero Section - Perfil Rápido */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #007C88 0%, #005A63 50%, #003D42 100%)",
          padding: window.innerWidth <= 768 ? "2rem 1rem" : "2.5rem 1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "400px",
            height: "400px",
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
            width: "300px",
            height: "300px",
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
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth <= 768
                  ? "1fr"
                  : "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* Foto de perfil */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                transform: isVisible ? "scale(1)" : "scale(0.8)",
                opacity: isVisible ? 1 : 0,
                transition: "all 1s ease-out",
              }}
            >
              <div
                style={{
                  width: window.innerWidth <= 768 ? "280px" : "550px",
                  height: window.innerWidth <= 768 ? "280px" : "550px",
                  borderRadius: "50%",
                  background: "#EAD9C5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "4px solid rgba(248, 156, 30, 0.3)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <img
                  src="media/dorina-principal.jpg"
                  alt="Dorina Hernández Palomino"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "70%",
                  }}
                />
                {/* Decorative ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-15px",
                    borderRadius: "50%",
                    background:
                      "linear-gradient(45deg, transparent, rgba(248, 156, 30, 0.2), transparent)",
                    animation: "rotate 10s linear infinite",
                  }}
                />
              </div>
            </div>

            {/* Información personal */}
            <div
              style={{
                color: "white",
                transform: isVisible ? "translateX(0)" : "translateX(50px)",
                opacity: isVisible ? 1 : 0,
                transition: "all 1s ease-out 0.3s",
                textAlign: "center",
              }}
            >
              {/* Modified Cha Dorina badge - more distinctive, less button-like */}
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    background:
                      "linear-gradient(135deg, #F89C1E 0%, #E8890B 100%)",
                    color: "white",
                    padding: "12px 28px",
                    borderRadius: "0",
                    fontSize: "16px",
                    fontWeight: "700",
                    textTransform: "uppercase",
                    letterSpacing: "3px",
                    clipPath:
                      "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                    boxShadow: "0 8px 25px rgba(248, 156, 30, 0.4)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background:
                        "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
                      animation: "shimmer 3s ease-in-out infinite",
                    }}
                  />
                  Cha Dorina
                </div>
                {/* Decorative elements */}
                <div
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "-5px",
                    right: "-5px",
                    bottom: "-5px",
                    border: "2px solid rgba(248, 156, 30, 0.3)",
                    clipPath:
                      "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)",
                    zIndex: -1,
                  }}
                />
              </div>

              <h1
                style={{
                  fontSize:
                    window.innerWidth <= 768
                      ? "2rem"
                      : "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: "700",
                  marginBottom: "1rem",
                  lineHeight: "1.1",
                }}
              >
                Dorina Hernández
                <br />
                <span
                  style={{
                    background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Palomino
                </span>
              </h1>

              <p
                style={{
                  fontSize: "1.2rem",
                  color: "rgba(255, 255, 255, 0.9)",
                  marginBottom: "2rem",
                  lineHeight: "1.6",
                }}
              >
                Representante a la Cámara por Bolívar
                <br />
                Primera mujer palenquera en el Congreso de Colombia
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <Calendar size={20} style={{ color: "#F89C1E" }} />
                  <span>Nacida el 22 de julio de 1966 en Cartagena</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <MapPin size={20} style={{ color: "#F89C1E" }} />
                  <span>San Basilio de Palenque, Bolívar</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <Mail size={20} style={{ color: "#F89C1E" }} />
                  <span>dorina.hernandez@camara.gov.co</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <Phone size={20} style={{ color: "#F89C1E" }} />
                  <span>+(57) (601) 8770720 Ext: 3336</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <Building size={20} style={{ color: "#F89C1E" }} />
                  <span>309B - 310B, Edificio Nuevo del Congreso</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formación Académica */}
      <section
        className="animate-section"
        style={{
          padding: window.innerWidth <= 768 ? "2rem 1rem" : "2.5rem 1.5rem",
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
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
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
              🎓 Formación Académica
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
              Excelencia en{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Educación
              </span>
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#64748b",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Una sólida formación académica que respalda su compromiso con la
              educación y la cultura afrocolombiana
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {formacionAcademica.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 124, 136, 0.1)",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-8px)";
                  e.target.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.08)";
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: `${item.color}15`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <item.icon size={24} style={{ color: item.color }} />
                  </div>
                  <div
                    style={{
                      background: item.color,
                      color: "white",
                      padding: "6px 16px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {item.year}
                  </div>
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#007C88",
                    marginBottom: "0.5rem",
                    lineHeight: "1.3",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  {item.institution}
                </p>
              </div>
            ))}
          </div>

          {/* Galería de fotos - Formación */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="media/imagen4.jpg"
                alt="Graduación Universidad San Buenaventura"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="media/imagen5.jpg"
                alt="Magíster en Educación"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="media/imagen6.jpeg"
                alt="Estudios internacionales"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trayectoria Profesional */}
      <section
        className="animate-section"
        style={{
          padding: window.innerWidth <= 768 ? "2rem 1rem" : "2.5rem 1.5rem",
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
            width: "500px",
            height: "500px",
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
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
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
              🏛 Trayectoria Profesional
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
              Décadas de{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Servicio
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
              Una carrera dedicada a la educación, la cultura y el desarrollo de
              las comunidades afrocolombianas
            </p>
          </div>

          <div style={{ position: "relative" }}>
            {/* Timeline line */}
            <div
              style={{
                position: "absolute",
                left: window.innerWidth <= 768 ? "0" : "50%",
                top: 0,
                bottom: 0,
                width: "2px",
                background: "linear-gradient(to bottom, #F89C1E, #007C88)",
                transform:
                  window.innerWidth <= 768 ? "none" : "translateX(-50%)",
                zIndex: 1,
              }}
            />

            {trayectoriaProfesional.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: window.innerWidth <= 768 ? "column" : "row",
                  alignItems:
                    window.innerWidth <= 768 ? "flex-start" : "center",
                  marginBottom: "2rem",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                {window.innerWidth <= 768 ? (
                  // Mobile layout - single column
                  <div style={{ width: "100%" }}>
                    <div
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "16px",
                        padding: "1.5rem",
                        position: "relative",
                        marginLeft: "2rem",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: "-2rem",
                          top: "1rem",
                          width: "16px",
                          height: "16px",
                          borderRadius: "50%",
                          background: item.color,
                          border: "4px solid white",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          bottom: 0,
                          width: "4px",
                          background: item.color,
                          borderRadius: "16px 0 0 16px",
                        }}
                      />
                      <div
                        style={{
                          background: item.color,
                          color: "white",
                          padding: "6px 16px",
                          borderRadius: "20px",
                          fontSize: "14px",
                          fontWeight: "600",
                          display: "inline-block",
                          marginBottom: "1rem",
                        }}
                      >
                        {item.period}
                      </div>
                      <h3
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: "600",
                          color: "white",
                          marginBottom: "0.5rem",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: "0.9rem",
                          lineHeight: "1.5",
                          margin: 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ) : // Desktop layout - existing alternating layout
                index % 2 === 0 ? (
                  <>
                    <div
                      style={{
                        flex: 1,
                        paddingRight: "2rem",
                        textAlign: "right",
                      }}
                    >
                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "16px",
                          padding: "2rem",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: "4px",
                            background: item.color,
                            borderRadius: "0 16px 16px 0",
                          }}
                        />
                        <div
                          style={{
                            background: item.color,
                            color: "white",
                            padding: "6px 16px",
                            borderRadius: "20px",
                            fontSize: "14px",
                            fontWeight: "600",
                            display: "inline-block",
                            marginBottom: "1rem",
                          }}
                        >
                          {item.period}
                        </div>
                        <h3
                          style={{
                            fontSize: "1.3rem",
                            fontWeight: "600",
                            color: "white",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "0.95rem",
                            lineHeight: "1.5",
                            margin: 0,
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: item.color,
                        border: "4px solid white",
                        flexShrink: 0,
                        zIndex: 3,
                      }}
                    />
                    <div style={{ flex: 1 }} />
                  </>
                ) : (
                  <>
                    <div style={{ flex: 1 }} />
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: item.color,
                        border: "4px solid white",
                        flexShrink: 0,
                        zIndex: 3,
                      }}
                    />
                    <div style={{ flex: 1, paddingLeft: "2rem" }}>
                      <div
                        style={{
                          background: "rgba(255, 255, 255, 0.05)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.1)",
                          borderRadius: "16px",
                          padding: "2rem",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            width: "4px",
                            background: item.color,
                            borderRadius: "16px 0 0 16px",
                          }}
                        />
                        <div
                          style={{
                            background: item.color,
                            color: "white",
                            padding: "6px 16px",
                            borderRadius: "20px",
                            fontSize: "14px",
                            fontWeight: "600",
                            display: "inline-block",
                            marginBottom: "1rem",
                          }}
                        >
                          {item.period}
                        </div>
                        <h3
                          style={{
                            fontSize: "1.3rem",
                            fontWeight: "600",
                            color: "white",
                            marginBottom: "0.5rem",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            color: "rgba(255, 255, 255, 0.7)",
                            fontSize: "0.95rem",
                            lineHeight: "1.5",
                            margin: 0,
                          }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Distinciones y Reconocimientos */}
      <section
        className="animate-section"
        style={{
          padding: window.innerWidth <= 768 ? "2rem 1rem" : "2.5rem 1.5rem",
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
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
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
              🛡 Distinciones y Reconocimientos
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
              Reconocimiento a la{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Excelencia
              </span>
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#64748b",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Premios y reconocimientos que destacan su contribución a la
              cultura y educación colombiana
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {distinciones.map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "2.5rem",
                  textAlign: "center",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 124, 136, 0.1)",
                  transition: "all 0.4s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-10px) scale(1.02)";
                  e.target.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0) scale(1)";
                  e.target.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.08)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-50%",
                    left: "-50%",
                    width: "200%",
                    height: "200%",
                    background:
                      "linear-gradient(45deg, transparent, rgba(248, 156, 30, 0.03), transparent)",
                    animation: "rotate 15s linear infinite",
                  }}
                />
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                    boxShadow: "0 8px 20px rgba(248, 156, 30, 0.3)",
                  }}
                >
                  <item.icon size={32} style={{ color: "white" }} />
                </div>
                <div
                  style={{
                    background: "#007C88",
                    color: "white",
                    padding: "8px 20px",
                    borderRadius: "25px",
                    fontSize: "14px",
                    fontWeight: "600",
                    display: "inline-block",
                    marginBottom: "1rem",
                  }}
                >
                  {item.year}
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#007C88",
                    marginBottom: "0.5rem",
                    lineHeight: "1.3",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  {item.entity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carrera Política */}
      <section
        className="animate-section"
        style={{
          padding: window.innerWidth <= 768 ? "2rem 1rem" : "2.5rem 1.5rem",
          background: "linear-gradient(135deg, #007C88 0%, #006B75 100%)",
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
            top: "-20%",
            right: "-15%",
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
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
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
              🏛 Carrera Política
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
              Representación{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Histórica
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
              Primera mujer palenquera en llegar al Congreso de la República de
              Colombia
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {/* Congreso 2022 */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "2rem",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.08)";
                e.target.style.transform = "translateY(-4px)";
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
                  background: "linear-gradient(90deg, #F89C1E, #E8890B)",
                }}
              />
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  background: "rgba(248, 156, 30, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Building size={28} style={{ color: "#F89C1E" }} />
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "white",
                  marginBottom: "1rem",
                }}
              >
                Congreso de la República
              </h3>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                  marginBottom: "1rem",
                }}
              >
                Representante por Bolívar (2022-2026) con 2.771.485 votos en
                lista cerrada del Pacto Histórico. Comisión Sexta de Transportes
                y Comunicaciones.
              </p>
              <div
                style={{
                  background: "#F89C1E",
                  color: "white",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                2022-2026
              </div>
            </div>

            {/* Soy Porque Somos */}
            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "16px",
                padding: "2rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.08)";
                e.target.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.05)";
                e.target.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  background: "rgba(248, 156, 30, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                <Heart size={28} style={{ color: "#F89C1E" }} />
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "600",
                  color: "white",
                  marginBottom: "1rem",
                }}
              >
                Movimiento "Soy Porque Somos"
              </h3>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                  marginBottom: "1rem",
                }}
              >
                Presidenta desde diciembre de 2023. Respaldada por Polo
                Democrático Alternativo - Soy Porque Somos en su candidatura al
                Congreso.
              </p>
              <div
                style={{
                  background: "#F89C1E",
                  color: "white",
                  padding: "6px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "600",
                  display: "inline-block",
                }}
              >
                Desde 2023
              </div>
            </div>
          </div>

          {/* Comisiones actuales */}
          <div
            style={{
              marginTop: "3rem",
              textAlign: "center",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "20px",
              padding: "2.5rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "1.5rem",
              }}
            >
              Comisiones Actuales (2022-2025)
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: window.innerWidth <= 768 ? "1rem" : "2rem",
                flexWrap: "wrap",
                marginBottom: "2rem",
                flexDirection: window.innerWidth <= 640 ? "column" : "row",
                alignItems: window.innerWidth <= 640 ? "center" : "flex-start",
              }}
            >
              <div
                style={{
                  background: "rgba(248, 156, 30, 0.2)",
                  color: "#F89C1E",
                  padding: "12px 24px",
                  borderRadius: "25px",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "1px solid rgba(248, 156, 30, 0.3)",
                }}
              >
                Comisión Sexta de Transportes y Comunicaciones
              </div>
              <div
                style={{
                  background: "rgba(248, 156, 30, 0.2)",
                  color: "#F89C1E",
                  padding: "12px 24px",
                  borderRadius: "25px",
                  fontSize: "14px",
                  fontWeight: "600",
                  border: "1px solid rgba(248, 156, 30, 0.3)",
                }}
              >
                Comisión Legal Afrocolombiana
              </div>
            </div>
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Comisiones Accidentales
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  background: "rgba(234, 217, 197, 0.2)",
                  color: "#EAD9C5",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "500",
                  border: "1px solid rgba(234, 217, 197, 0.3)",
                }}
              >
                Seguimiento A-ire y Afinia
              </div>
              <div
                style={{
                  background: "rgba(234, 217, 197, 0.2)",
                  color: "#EAD9C5",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "500",
                  border: "1px solid rgba(234, 217, 197, 0.3)",
                }}
              >
                Sistema Nacional del Riesgo de Desastres
              </div>
              <div
                style={{
                  background: "rgba(234, 217, 197, 0.2)",
                  color: "#EAD9C5",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: "500",
                  border: "1px solid rgba(234, 217, 197, 0.3)",
                }}
              >
                Relaciones con Venezuela
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publicaciones - Modified to 2x2 grid */}
      <section
        className="animate-section"
        style={{
          padding: window.innerWidth <= 768 ? "2rem 1rem" : "2.5rem 1.5rem",
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
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
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
              📚 Publicaciones y Obras
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
              Contribuciones{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Académicas
              </span>
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#64748b",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Coautora de importantes obras sobre etnoeducación y cultura
              afrocolombiana
            </p>
          </div>

          {/* Changed to 2x2 grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                window.innerWidth <= 640 ? "1fr" : "repeat(2, 1fr)",
              gap: "2rem",
              maxWidth: "800px",
              margin: "0 auto",
            }}
          >
            {[
              {
                title: "Cartilla de la lengua palenquera",
                description:
                  "Coautora de esta importante obra para la preservación del idioma palenquero",
                icon: BookOpen,
              },
              {
                title:
                  "Lineamientos curriculares para la educación en comunidades negras",
                description:
                  "Contribución fundamental para la etnoeducación afrocolombiana",
                icon: GraduationCap,
              },
              {
                title:
                  "Enfoque y perspectiva de la Etnoeducación y Cátedra de Estudios Afrocolombianos",
                description:
                  "Obra clave para el desarrollo de la cátedra afrocolombiana",
                icon: Globe,
              },
              {
                title: "Léxico Palenquero",
                description:
                  "Miembro del equipo de investigación de este importante diccionario",
                icon: BookOpen,
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  borderRadius: "16px",
                  padding: "2rem",
                  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.08)",
                  border: "1px solid rgba(0, 124, 136, 0.1)",
                  transition: "all 0.3s ease",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-8px)";
                  e.target.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.08)";
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "12px",
                    background: "rgba(0, 124, 136, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <item.icon size={28} style={{ color: "#007C88" }} />
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "600",
                    color: "#007C88",
                    marginBottom: "1rem",
                    lineHeight: "1.3",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.95rem",
                    lineHeight: "1.5",
                    margin: 0,
                  }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
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
          .publications-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Biografia;
