import { Building, Heart } from "lucide-react";

const CarreraPolitica = ({ data }) => {
  return (
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
          padding: "0 24px",
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
          {/* Congreso */}
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
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.transform = "translateY(-4px)";
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
              {data.congreso.titulo}
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.95rem",
                lineHeight: "1.5",
                marginBottom: "1rem",
              }}
            >
              {data.congreso.descripcion}
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
              {data.congreso.periodo}
            </div>
          </div>

          {/* Movimiento */}
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
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.transform = "translateY(0)";
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
              {data.movimiento.titulo}
            </h3>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "0.95rem",
                lineHeight: "1.5",
                marginBottom: "1rem",
              }}
            >
              {data.movimiento.descripcion}
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
              {data.movimiento.periodo}
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
            Comisiones Actuales ({data.comisiones.periodo})
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
            {data.comisiones.principales.map((comision, index) => (
              <div
                key={index}
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
                {comision}
              </div>
            ))}
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
            {data.comisiones.accidentales.map((comision, index) => (
              <div
                key={index}
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
                {comision}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarreraPolitica;
