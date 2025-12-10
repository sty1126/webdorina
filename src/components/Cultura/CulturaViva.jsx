import { BookOpen, Music, Utensils, Users } from "lucide-react";

const CulturaViva = ({ data }) => {
  const getIcon = (iconName) => {
    const icons = {
      BookOpen: <BookOpen size={36} />,
      Music: <Music size={36} />,
      Utensils: <Utensils size={36} />,
      Users: <Users size={36} />,
    };
    return icons[iconName];
  };

  return (
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
          padding: "0 24px",
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
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {data.culturaViva.map((item, idx) => (
            <div
              key={idx}
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
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.transform = "translateY(0)";
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
                  color: item.color,
                }}
              >
                {getIcon(item.icon)}
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

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {data.culturaGallery.map((item, idx) => (
            <div
              key={idx}
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 15px 40px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0, 0, 0, 0.3)";
              }}
            >
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
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
                  {item.title}
                </h4>
                <p style={{ fontSize: "0.85rem", opacity: 0.9, margin: 0 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CulturaViva;
