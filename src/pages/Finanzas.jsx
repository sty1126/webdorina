"use client";

import { useState, useEffect } from "react";
import {
  FileText,
  Receipt,
  Download,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Calendar,
  Eye,
} from "lucide-react";

// Estilos con paleta de colores vibrantes - Azul y Cian
const styles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    paddingTop: "80px",
    overflowX: "hidden",
    position: "relative",
    fontFamily:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    boxSizing: "border-box",
    background: "linear-gradient(135deg, #e6f3ff 0%, #f0fcff 100%)",
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(16, 58, 153, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 75% 75%, rgba(13, 193, 211, 0.12) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(16, 58, 153, 0.06) 0%, transparent 40%)
    `,
    pointerEvents: "none",
    zIndex: 0,
  },
  containerInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    width: "100%",
    boxSizing: "border-box",
  },
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
  main: {
    padding: "4rem 0",
    background: "linear-gradient(135deg, #e6f3ff 0%, #f0fcff 100%)",
  },
  mainContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    width: "100%",
    boxSizing: "border-box",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "rgba(16, 58, 153, 0.85)",
    marginBottom: "0.75rem",
    textAlign: "center",
  },
  sectionDescription: {
    color: "#6b7280",
    marginBottom: "3rem",
    fontSize: "1.1rem",
    textAlign: "center",
  },
  accordionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
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
  legalSection: {
    marginTop: "4rem",
    background:
      "linear-gradient(135deg, rgba(16, 58, 153, 0.05) 0%, rgba(13, 193, 211, 0.05) 100%)",
    border: "2px solid rgba(13, 193, 211, 0.3)",
    borderRadius: "20px",
    padding: "3rem",
    boxShadow: "0 8px 24px rgba(13, 193, 211, 0.1)",
  },
  legalHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1.5rem",
  },
  legalIcon: {
    width: "3rem",
    height: "3rem",
    background: "linear-gradient(135deg, #0dc1d3 0%, #103a99 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 6px 15px rgba(13, 193, 211, 0.3)",
  },
  legalContent: {
    flex: 1,
  },
  legalTitle: {
    fontWeight: "700",
    color: "rgba(16, 58, 153, 0.85)",
    marginBottom: "0.75rem",
    fontSize: "1.3rem",
  },
  legalText: {
    fontSize: "1rem",
    color: "rgba(16, 58, 153, 0.85)",
    lineHeight: "1.6",
  },
};

// Componentes UI actualizados
const Button = ({ children, onClick, style = {} }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      style={{
        ...styles.button,
        ...(isHovered ? styles.buttonHover : {}),
        ...style,
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

// Datos de ejemplo (sin cambios)
const informesPorAno = {
  2024: [
    {
      id: 1,
      titulo: "Declaración de Renta 2024",
      tipo: "Declaración Tributaria",
      fecha: "2024-03-15",
      descripcion:
        "Declaración anual de renta correspondiente al año gravable 2024",
      url: "#",
      icono: Receipt,
      tamano: "2.3 MB",
      descargas: 1250,
    },
    {
      id: 2,
      titulo: "Informe de Ingresos y Gastos Q4 2024",
      tipo: "Informe Financiero",
      fecha: "2024-12-31",
      descripcion: "Detalle de ingresos y gastos del cuarto trimestre 2024",
      url: "#",
      icono: FileText,
      tamano: "1.8 MB",
      descargas: 890,
    },
    {
      id: 3,
      titulo: "Declaración de Bienes y Rentas 2024",
      tipo: "Declaración Patrimonial",
      fecha: "2024-02-28",
      descripcion: "Declaración jurada de bienes y rentas actualizada",
      url: "#",
      icono: FileText,
      tamano: "3.1 MB",
      descargas: 2100,
    },
  ],
  2023: [
    {
      id: 4,
      titulo: "Declaración de Renta 2023",
      tipo: "Declaración Tributaria",
      fecha: "2023-03-15",
      descripcion:
        "Declaración anual de renta correspondiente al año gravable 2023",
      url: "#",
      icono: Receipt,
      tamano: "2.1 MB",
      descargas: 1850,
    },
    {
      id: 5,
      titulo: "Informe Anual de Gestión Financiera 2023",
      tipo: "Informe Anual",
      fecha: "2023-12-31",
      descripcion:
        "Resumen completo de la gestión financiera durante el año 2023",
      url: "#",
      icono: FileText,
      tamano: "4.2 MB",
      descargas: 3200,
    },
  ],
  2022: [
    {
      id: 8,
      titulo: "Declaración de Renta 2022",
      tipo: "Declaración Tributaria",
      fecha: "2022-03-15",
      descripcion:
        "Declaración anual de renta correspondiente al año gravable 2022",
      url: "#",
      icono: Receipt,
      tamano: "2.0 MB",
      descargas: 2100,
    },
  ],
};

export default function InformesFinancieros() {
  const [anosAbiertos, setAnosAbiertos] = useState(new Set(["2024"]));

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const toggleAno = (ano) => {
    const nuevosAnosAbiertos = new Set(anosAbiertos);
    if (nuevosAnosAbiertos.has(ano)) {
      nuevosAnosAbiertos.delete(ano);
    } else {
      nuevosAnosAbiertos.add(ano);
    }
    setAnosAbiertos(nuevosAnosAbiertos);
  };

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getTipoColor = (tipo) => {
    switch (tipo) {
      case "Declaración Tributaria":
        return {
          backgroundColor: "rgba(16, 58, 153, 0.85)",
          color: "white",
          borderColor: "rgba(16, 58, 153, 0.85)",
        };
      case "Informe Financiero":
      case "Informe Anual":
        return {
          backgroundColor: "rgba(13, 193, 211, 0.85)",
          color: "white",
          borderColor: "rgba(13, 193, 211, 0.85)",
        };
      case "Declaración Patrimonial":
        return {
          backgroundColor: "#24354b",
          color: "white",
          borderColor: "#24354b",
        };
      default:
        return {
          backgroundColor: "rgba(16, 58, 153, 0.85)",
          color: "white",
          borderColor: "rgba(16, 58, 153, 0.85)",
        };
    }
  };

  const anosOrdenados = Object.keys(informesPorAno).sort((a, b) => b - a);

  return (
    <div style={styles.container}>
      <div style={styles.backgroundOverlay}></div>

      <header style={styles.header}>
        <div style={styles.headerOverlay}></div>
        <div style={styles.containerInner}>
          <div style={styles.headerContent}>
            <h1 style={styles.title}>
              Informes Financieros y Declaraciones de Renta
            </h1>
            <p style={styles.subtitle}>
              Consulta aquí los informes financieros y declaraciones tributarias
              de la Representante Dorina Hernández, disponibles por año para
              libre acceso ciudadano.
            </p>
          </div>
        </div>
      </header>

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

      <main style={styles.main}>
        <div style={styles.mainContainer}>
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={styles.sectionTitle}>Documentos por Año</h2>
            <p style={styles.sectionDescription}>
              Selecciona un año para ver los documentos disponibles
            </p>
          </div>

          <div style={styles.accordionContainer}>
            {anosOrdenados.map((ano) => {
              const estaAbierto = anosAbiertos.has(ano);
              const documentos = informesPorAno[ano];
              const totalDescargas = documentos.reduce(
                (sum, doc) => sum + doc.descargas,
                0
              );

              return (
                <AccordionCard
                  key={ano}
                  ano={ano}
                  documentos={documentos}
                  totalDescargas={totalDescargas}
                  estaAbierto={estaAbierto}
                  onToggle={() => toggleAno(ano)}
                  formatearFecha={formatearFecha}
                  getTipoColor={getTipoColor}
                />
              );
            })}
          </div>

          <div style={styles.legalSection}>
            <div style={styles.legalHeader}>
              <div style={styles.legalIcon}>
                <FileText
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: "white",
                  }}
                />
              </div>
              <div style={styles.legalContent}>
                <h3 style={styles.legalTitle}>Información Legal</h3>
                <p style={styles.legalText}>
                  Todos los documentos aquí publicados cumplen con las
                  disposiciones legales de transparencia y acceso a la
                  información pública. Los informes financieros y declaraciones
                  tributarias están disponibles de acuerdo con la normatividad
                  vigente sobre rendición de cuentas de servidores públicos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        @media screen and (max-width: 768px) {
          .container {
            padding: 0 16px !important;
          }
        }

        @media screen and (max-width: 480px) {
          .container {
            padding: 0 12px !important;
          }
        }

        @media screen and (max-width: 360px) {
          .container {
            padding: 0 8px !important;
          }
        }
      `}</style>
    </div>
  );
}

// Componente AccordionCard actualizado
const AccordionCard = ({
  ano,
  documentos,
  totalDescargas,
  estaAbierto,
  onToggle,
  formatearFecha,
  getTipoColor,
}) => {
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
};

// Componente DocumentCard actualizado
const DocumentCard = ({ documento, formatearFecha, getTipoColor }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconoDocumento = documento.icono;

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
                flexShrink: 0,
                fontSize: "0.7rem",
                padding: "0.25rem 0.75rem",
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
          <Button onClick={() => window.open(documento.url, "_blank")}>
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
          </Button>
        </div>
      </div>
    </div>
  );
};
