import {
  Building,
  Users,
  Globe,
  Heart,
  Shield,
  Music,
  GraduationCap,
  Eye,
} from "lucide-react";

const TierraYCultura = ({ data }) => {
  const getIcon = (iconName) => {
    const icons = {
      Building: <Building size={20} />,
      Users: <Users size={20} />,
      Globe: <Globe size={20} />,
      Heart: <Heart size={40} />,
      Shield: <Shield size={36} />,
      Music: <Music size={36} />,
      GraduationCap: <GraduationCap size={36} />,
      Eye: <Eye size={36} />,
    };
    return icons[iconName];
  };

  return (
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
          padding: "0 24px",
        }}
      >
        {/* Header */}
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
              src={data.legislativeSection.image || "/placeholder.svg"}
              alt={data.legislativeSection.imageCaption}
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
              {data.legislativeSection.imageCaption}
            </p>
          </div>
        </div>

        {/* Why Important */}
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
            {data.whyImportant.map((item, idx) => (
              <div
                key={idx}
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
                    background: item.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    color: "white",
                  }}
                >
                  {getIcon(item.icon)}
                </div>
                <div>
                  <h4
                    style={{
                      color: item.color,
                      fontSize: "1rem",
                      fontWeight: "600",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h4>
                  <p
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "0.9rem",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
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

        {/* Legislative Achievements */}
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
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              maxWidth: "900px",
              margin: "0 auto 3rem",
            }}
          >
            {data.legislativeAchievements.map((item, idx) => (
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
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background =
                    "rgba(255, 255, 255, 0.05)";
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
                    color: item.color,
                  }}
                >
                  {getIcon(item.icon)}
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

          {/* Gallery */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem",
            }}
          >
            {data.dorinaGallery.map((item, idx) => (
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
              color: "white",
            }}
          >
            {getIcon("Heart")}
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
            {data.impactStatement}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TierraYCultura;
