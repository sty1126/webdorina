import { MapPin, Users, Calendar } from "lucide-react";

const CulturaHero = ({ isVisible, data }) => {
  return (
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
      {/* Decorative elements */}
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
          padding: "0 24px",
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
          {data.pageTitle}
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
            corazón de resistencia cultural
          </span>
          "
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
          {data.heroStats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "white",
              }}
            >
              {stat.icon === "MapPin" && (
                <MapPin size={24} style={{ color: "#F89C1E" }} />
              )}
              {stat.icon === "Users" && (
                <Users size={24} style={{ color: "#F89C1E" }} />
              )}
              {stat.icon === "Calendar" && (
                <Calendar size={24} style={{ color: "#F89C1E" }} />
              )}
              <span style={{ fontSize: "1.1rem" }}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative floating elements */}
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
  );
};

export default CulturaHero;
