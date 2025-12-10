import { MapPin, Globe, Heart } from "lucide-react";

const PatrimonialContext = ({ data }) => {
  return (
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
          padding: "0 24px",
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
          {data.patrimonialContext.map((item, idx) => (
            <div
              key={idx}
              style={{
                background: "white",
                borderRadius: "20px",
                padding: "2.5rem",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
                border: "1px solid rgba(0, 124, 136, 0.1)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0, 0, 0, 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 0, 0, 0.08)";
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${item.bgColor}, ${item.bgColor}dd)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                {item.icon === "MapPin" && (
                  <MapPin size={32} style={{ color: "white" }} />
                )}
                {item.icon === "Globe" && (
                  <Globe size={32} style={{ color: "white" }} />
                )}
                {item.icon === "Heart" && (
                  <Heart size={32} style={{ color: "white" }} />
                )}
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "600",
                  color: "#007C88",
                  marginBottom: "1rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "#64748b",
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            marginTop: "3rem",
          }}
        >
          {data.patrimonialContext.slice(0, 2).map(
            (item, idx) =>
              item.image && (
                <div
                  key={idx}
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 35px rgba(0, 0, 0, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 25px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
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
                      {item.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "#64748b",
                        margin: 0,
                        lineHeight: "1.4",
                      }}
                    >
                      Monumento a Benkos Biohó - Homenaje al líder fundador del
                      palenque
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

export default PatrimonialContext;
