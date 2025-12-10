const styles = {
  header: {
    background:
      "linear-gradient(135deg, rgba(16, 58, 153, 0.9) 0%, rgba(13, 193, 211, 0.9) 100%)",
    padding: "4rem 0",
    position: "relative",
    overflow: "hidden",
  },
  headerOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0, 0, 0, 0.1)",
    zIndex: 0,
  },
  containerInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    width: "100%",
    boxSizing: "border-box",
  },
  headerContent: {
    position: "relative",
    zIndex: 1,
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontSize: "clamp(2.5rem, 5vw, 4rem)",
    fontWeight: 700,
    color: "white",
    marginBottom: "1.5rem",
    lineHeight: 1.2,
    margin: 0,
    textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
  },
  subtitle: {
    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
    color: "rgba(255, 255, 255, 0.95)",
    lineHeight: 1.6,
    margin: 0,
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
};

export default function InformesHeader() {
  return (
    <header style={styles.header}>
      <div style={styles.headerOverlay}></div>
      <div style={styles.containerInner}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>
            Informes Financieros y Declaraciones de Renta
          </h1>
          <p style={styles.subtitle}>
            Consulta aquí los informes financieros y declaraciones tributarias
            de la Representante Dorina Hernández, disponibles por año para libre
            acceso ciudadano.
          </p>
        </div>
      </div>
    </header>
  );
}
