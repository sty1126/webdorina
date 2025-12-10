import { useState } from "react";
import {
  Download,
  ExternalLink,
  Calendar,
  Eye,
  Receipt,
  FileText,
} from "lucide-react";

const styles = {
  documentCard: {
    backgroundColor: "white",
    borderRadius: "16px",
    border: "2px solid rgba(13, 193, 211, 0.6)",
    padding: "2.5rem",
    transition: "all 0.3s ease",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(13, 193, 211, 0.08)",
  },
  documentCardHover: {
    boxShadow: "0 15px 35px rgba(16, 58, 153, 0.2)",
    borderColor: "rgba(16, 58, 153, 0.85)",
    transform: "translateY(-4px)",
  },
  documentHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1.25rem",
    marginBottom: "1.5rem",
  },
  documentIcon: {
    width: "3.5rem",
    height: "3.5rem",
    background: "linear-gradient(135deg, #0dc1d3 0%, #103a99 100%)",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 6px 15px rgba(13, 193, 211, 0.3)",
  },
  documentInfo: {
    flex: 1,
    minWidth: 0,
  },
  documentTitle: {
    fontWeight: "700",
    color: "rgba(16, 58, 153, 0.85)",
    fontSize: "1rem",
    lineHeight: "1.4",
    marginBottom: "0.75rem",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  documentDescription: {
    fontSize: "0.85rem",
    color: "#6b7280",
    marginBottom: "1rem",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  documentMeta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "0.8rem",
    color: "#6b7280",
    marginBottom: "2rem",
  },
  documentMetaLeft: {
    display: "flex",
    alignItems: "center",
    gap: "2rem",
  },
  documentMetaItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.375rem",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    fontSize: "0.85rem",
    fontWeight: "700",
    transition: "all 0.3s ease",
    cursor: "pointer",
    outline: "none",
    width: "100%",
    padding: "0.875rem 1.25rem",
    background:
      "linear-gradient(135deg, rgba(16, 58, 153, 0.9) 0%, rgba(13, 193, 211, 0.9) 100%)",
    color: "white",
    border: "2px solid rgba(16, 58, 153, 0.6)",
    boxShadow: "0 6px 20px rgba(16, 58, 153, 0.25)",
  },
  buttonHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 12px 30px rgba(13, 193, 211, 0.4)",
    borderColor: "rgba(13, 193, 211, 0.85)",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "50px",
    border: "2px solid",
    padding: "0.5rem 1rem",
    fontSize: "0.7rem",
    fontWeight: "700",
    flexShrink: 0,
  },
};

const getIconComponent = (iconName) => {
  const iconMap = {
    FileText: FileText,
    Receipt: Receipt,
  };
  return iconMap[iconName] || FileText;
};

export default function DocumentCard({
  documento,
  formatearFecha,
  getTipoColor,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const IconoDocumento = getIconComponent(documento.icono);

  return (
    <div
      style={{
        ...styles.documentCard,
        ...(isHovered ? styles.documentCardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.documentHeader}>
        <div style={styles.documentIcon}>
          <IconoDocumento
            style={{ width: "1.75rem", height: "1.75rem", color: "white" }}
          />
        </div>
        <div style={styles.documentInfo}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "0.75rem",
              marginBottom: "0.75rem",
            }}
          >
            <h4 style={styles.documentTitle}>{documento.titulo}</h4>
            <div
              style={{
                ...styles.badge,
                ...getTipoColor(documento.tipo),
              }}
            >
              {documento.tipo}
            </div>
          </div>
          <p style={styles.documentDescription}>{documento.descripcion}</p>
          <div style={styles.documentMeta}>
            <div style={styles.documentMetaLeft}>
              <div style={styles.documentMetaItem}>
                <Calendar
                  style={{
                    width: "0.875rem",
                    height: "0.875rem",
                    color: "#0dc1d3",
                  }}
                />
                {formatearFecha(documento.fecha)}
              </div>
              <div style={styles.documentMetaItem}>
                <Eye
                  style={{
                    width: "0.875rem",
                    height: "0.875rem",
                    color: "#0dc1d3",
                  }}
                />
                {documento.descargas.toLocaleString()}
              </div>
            </div>
            <span
              style={{ fontWeight: "700", color: "rgba(16, 58, 153, 0.85)" }}
            >
              {documento.tamano}
            </span>
          </div>
          <button
            style={{
              ...styles.button,
              ...(isHovered ? styles.buttonHover : {}),
            }}
            onClick={() => window.open(documento.url, "_blank")}
          >
            <Download
              style={{
                width: "0.875rem",
                height: "0.875rem",
                marginRight: "0.75rem",
              }}
            />
            Descargar PDF
            <ExternalLink
              style={{
                width: "0.875rem",
                height: "0.875rem",
                marginLeft: "0.75rem",
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
