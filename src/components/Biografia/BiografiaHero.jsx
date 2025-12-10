import { Calendar, MapPin, Mail, Building, Phone } from "lucide-react";
import { useState, useEffect } from "react";

const BiografiaHero = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      style={{
        background:
          "linear-gradient(135deg, #007C88 0%, #005A63 50%, #003D42 100%)",
        padding: window.innerWidth <= 768 ? "2rem 1rem" : "2.5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
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
          padding: "0 24px",
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
                src={data.fotoPrincipal || "/placeholder.svg"}
                alt={`${data.nombre} ${data.apellido}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "70%",
                }}
              />
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
                {data.titulo}
              </div>
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
              {data.nombre}
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #F89C1E, #E8890B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {data.apellido}
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
              {data.cargo}
              <br />
              {data.descripcion}
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
                <span>
                  Nacida el {data.fechaNacimiento} en {data.lugarNacimiento}
                </span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <MapPin size={20} style={{ color: "#F89C1E" }} />
                <span>{data.residencia}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Mail size={20} style={{ color: "#F89C1E" }} />
                <span>{data.email}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Phone size={20} style={{ color: "#F89C1E" }} />
                <span>{data.telefono}</span>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <Building size={20} style={{ color: "#F89C1E" }} />
                <span>{data.oficina}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BiografiaHero;
