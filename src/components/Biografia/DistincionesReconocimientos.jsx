import { Award, Star, Heart, Globe } from "lucide-react";

const iconMap = {
  Award,
  Star,
  Heart,
  Globe,
};

const DistincionesReconocimientos = ({ data }) => {
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
            Premios y reconocimientos que destacan su contribución a la cultura
            y educación colombiana
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
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
                  e.currentTarget.style.transform =
                    "translateY(-10px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(0, 0, 0, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 30px rgba(0, 0, 0, 0.08)";
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
                  <IconComponent size={32} style={{ color: "white" }} />
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DistincionesReconocimientos;
