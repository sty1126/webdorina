const TrayectoriaProfesional = ({ data }) => {
  return (
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
              transform: window.innerWidth <= 768 ? "none" : "translateX(-50%)",
              zIndex: 1,
            }}
          />

          {data.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: window.innerWidth <= 768 ? "column" : "row",
                alignItems: window.innerWidth <= 768 ? "flex-start" : "center",
                marginBottom: "2rem",
                position: "relative",
                zIndex: 2,
              }}
            >
              {window.innerWidth <= 768 ? (
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
              ) : index % 2 === 0 ? (
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
  );
};

export default TrayectoriaProfesional;
