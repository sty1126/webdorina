import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import DocumentCard from "./DocumentCard";

const styles = {
  accordionCard: {
    borderRadius: "20px",
    border: "2px solid rgba(13, 193, 211, 0.6)",
    backgroundColor: "white",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(13, 193, 211, 0.12)",
    transition: "all 0.3s ease",
  },
  accordionCardHover: {
    boxShadow: "0 20px 40px rgba(16, 58, 153, 0.2)",
    borderColor: "rgba(16, 58, 153, 0.85)",
    transform: "translateY(-4px)",
  },
  accordionButton: {
    width: "100%",
    padding: "2.5rem",
    textAlign: "left",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.3s ease",
  },
  accordionButtonHover: {
    background:
      "linear-gradient(135deg, rgba(13, 193, 211, 0.05) 0%, rgba(16, 58, 153, 0.05) 100%)",
  },
  accordionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accordionLeft: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  },
  yearBadge: {
    width: "4rem",
    height: "4rem",
    background:
      "linear-gradient(135deg, rgba(16, 58, 153, 0.85) 0%, rgba(13, 193, 211, 0.85) 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.2rem",
    boxShadow: "0 8px 20px rgba(13, 193, 211, 0.4)",
  },
  accordionInfo: {
    flex: 1,
  },
  accordionYear: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "rgba(16, 58, 153, 0.85)",
    marginBottom: "0.5rem",
  },
  accordionMeta: {
    fontSize: "1rem",
    color: "#6b7280",
  },
  accordionRight: {
    display: "flex",
    alignItems: "center",
    gap: "1.25rem",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "50px",
    border: "2px solid",
    padding: "0.5rem 1rem",
    fontSize: "0.8rem",
    fontWeight: "700",
    backgroundColor: "rgba(13, 193, 211, 0.85)",
    color: "white",
    borderColor: "rgba(13, 193, 211, 0.85)",
    boxShadow: "0 4px 12px rgba(13, 193, 211, 0.3)",
  },
  accordionContent: {
    borderTop: "2px solid rgba(13, 193, 211, 0.2)",
    background:
      "linear-gradient(135deg, rgba(13, 193, 211, 0.02) 0%, rgba(16, 58, 153, 0.02) 100%)",
  },
  documentsGrid: {
    padding: "2.5rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    maxWidth: "900px",
    margin: "0 auto",
    gap: "2rem",
  },
};

export default function AccordionCard({
  ano,
  documentos,
  totalDescargas,
  estaAbierto,
  onToggle,
  formatearFecha,
  getTipoColor,
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.accordionCard,
        ...(isHovered ? styles.accordionCardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={onToggle}
        style={{
          ...styles.accordionButton,
          ...(isHovered ? styles.accordionButtonHover : {}),
        }}
      >
        <div style={styles.accordionHeader}>
          <div style={styles.accordionLeft}>
            <div style={styles.yearBadge}>{ano.slice(-2)}</div>
            <div style={styles.accordionInfo}>
              <h3 style={styles.accordionYear}>Año {ano}</h3>
              <p style={styles.accordionMeta}>
                {documentos.length}{" "}
                {documentos.length === 1 ? "documento" : "documentos"} •{" "}
                {totalDescargas.toLocaleString()} descargas totales
              </p>
            </div>
          </div>
          <div style={styles.accordionRight}>
            <div style={styles.badge}>{documentos.length} docs</div>
            {estaAbierto ? (
              <ChevronDown
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: "#0dc1d3",
                }}
              />
            ) : (
              <ChevronRight
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  color: "#0dc1d3",
                }}
              />
            )}
          </div>
        </div>
      </button>

      {estaAbierto && (
        <div style={styles.accordionContent}>
          <div style={styles.documentsGrid}>
            {documentos.map((documento) => (
              <DocumentCard
                key={documento.id}
                documento={documento}
                formatearFecha={formatearFecha}
                getTipoColor={getTipoColor}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
