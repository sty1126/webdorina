import { FileText, Download, Calendar } from "lucide-react";

const styles = {
  infoSection: {
    background: "white",
    borderBottom: "2px solid rgba(13, 193, 211, 0.85)",
    position: "relative",
    zIndex: 1,
    padding: "3rem 0",
    boxShadow: "0 8px 32px rgba(13, 193, 211, 0.15)",
  },
  infoContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2.5rem",
    textAlign: "center",
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1.25rem",
  },
  infoIcon: {
    width: "4rem",
    height: "4rem",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
  },
  infoText: {
    textAlign: "left",
  },
  infoTitle: {
    fontWeight: "700",
    color: "rgba(16, 58, 153, 0.85)",
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  infoDescription: {
    fontSize: "1rem",
    color: "#6b7280",
  },
};

export default function InfoSection() {
  return (
    <section style={styles.infoSection}>
      <div style={styles.infoContainer}>
        <div style={styles.infoItem}>
          <div
            style={{
              ...styles.infoIcon,
              background: "linear-gradient(135deg, #0dc1d3 0%, #103a99 100%)",
            }}
          >
            <FileText
              style={{ width: "1.75rem", height: "1.75rem", color: "white" }}
            />
          </div>
          <div style={styles.infoText}>
            <h3 style={styles.infoTitle}>Transparencia Total</h3>
            <p style={styles.infoDescription}>
              Acceso libre a todos los documentos
            </p>
          </div>
        </div>
        <div style={styles.infoItem}>
          <div
            style={{
              ...styles.infoIcon,
              background: "linear-gradient(135deg, #103a99 0%, #0dc1d3 100%)",
            }}
          >
            <Download
              style={{ width: "1.75rem", height: "1.75rem", color: "white" }}
            />
          </div>
          <div style={styles.infoText}>
            <h3 style={styles.infoTitle}>Descarga Directa</h3>
            <p style={styles.infoDescription}>Documentos en formato PDF</p>
          </div>
        </div>
        <div style={styles.infoItem}>
          <div
            style={{
              ...styles.infoIcon,
              background: "linear-gradient(135deg, #0dc1d3 0%, #103a99 100%)",
            }}
          >
            <Calendar
              style={{ width: "1.75rem", height: "1.75rem", color: "white" }}
            />
          </div>
          <div style={styles.infoText}>
            <h3 style={styles.infoTitle}>Actualizado</h3>
            <p style={styles.infoDescription}>Informes anuales disponibles</p>
          </div>
        </div>
      </div>
    </section>
  );
}
