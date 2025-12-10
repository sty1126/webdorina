import { BookOpen, GraduationCap, Globe } from "lucide-react";

const iconMap = {
  BookOpen,
  GraduationCap,
  Globe,
};

const Publicaciones = ({ data }) => {
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
                  <IconComponent size={28} style={{ color: "#007C88" }} />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Publicaciones;
