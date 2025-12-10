import { GraduationCap, BookOpen, Globe } from "lucide-react";

const iconMap = {
  GraduationCap,
  BookOpen,
  Globe,
};

const FormacionAcademica = ({ data, galeria }) => {
  return (
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
          padding: "0 24px",
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
          {data.map((item, index) => {
            const IconComponent = iconMap[item.icon];
            return (
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
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 35px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(0, 0, 0, 0.08)";
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
                    <IconComponent size={24} style={{ color: item.color }} />
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
            );
          })}
        </div>

        {/* Galería de fotos */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          {galeria.map((foto, index) => (
            <div
              key={index}
              style={{
                width: "100%",
                height: "200px",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={foto.src || "/placeholder.svg"}
                alt={foto.alt}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FormacionAcademica;
