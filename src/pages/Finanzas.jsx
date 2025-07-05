"use client";

import { useState } from "react";
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

// Estilos corregidos para ocupar toda la pantalla
const styles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    paddingTop: "80px", // Agregar esta línea
    overflowX: "hidden",
    position: "relative",
    fontFamily:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    boxSizing: "border-box",
    background: "#f8fafc",
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(18, 155, 165, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 75% 75%, rgba(249, 185, 29, 0.06) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(86, 150, 56, 0.04) 0%, transparent 40%)
    `,
    pointerEvents: "none",
    zIndex: 0,
  },
  containerInner: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px", // Cambiar de 48px a 24px
    width: "100%",
    boxSizing: "border-box",
  },
  header: {
    background: "linear-gradient(135deg, #24354b 0%, #129ba5 100%)",
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
  },
  subtitle: {
    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
    color: "rgba(255, 255, 255, 0.9)",
    lineHeight: 1.6,
    margin: 0,
  },
  infoSection: {
    background: "white",
    borderBottom: "1px solid #e2e8f0",
    position: "relative",
    zIndex: 1,
    padding: "3rem 0",
  },
  infoContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px", // Cambiar de 48px a 24px
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    textAlign: "center",
  },
  infoItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
  },
  infoIcon: {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  infoText: {
    textAlign: "left",
  },
  infoTitle: {
    fontWeight: "700",
    color: "#111827",
    fontSize: "1.1rem",
    marginBottom: "0.25rem",
  },
  infoDescription: {
    fontSize: "0.875rem",
    color: "#6b7280",
  },
  main: {
    padding: "4rem 0",
    background: "#f8fafc",
  },
  mainContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px", // Cambiar de 48px a 24px
    width: "100%",
    boxSizing: "border-box",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#111827",
    marginBottom: "0.5rem",
    textAlign: "center",
  },
  sectionDescription: {
    color: "#6b7280",
    marginBottom: "2rem",
    fontSize: "1rem",
    textAlign: "center",
  },
  accordionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  accordionCard: {
    borderRadius: "1rem",
    border: "1px solid #e2e8f0",
    backgroundColor: "white",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s ease",
  },
  accordionCardHover: {
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
    borderColor: "#129ba5",
  },
  accordionButton: {
    width: "100%",
    padding: "2rem",
    textAlign: "left",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.3s ease",
  },
  accordionButtonHover: {
    backgroundColor: "rgba(18, 155, 165, 0.05)",
  },
  accordionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accordionLeft: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
  yearBadge: {
    width: "3.5rem",
    height: "3.5rem",
    background: "linear-gradient(135deg, #129ba5 0%, #0891b2 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: "1.1rem",
    boxShadow: "0 4px 6px rgba(18, 155, 165, 0.25)",
  },
  accordionInfo: {
    flex: 1,
  },
  accordionYear: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "0.25rem",
  },
  accordionMeta: {
    fontSize: "0.875rem",
    color: "#6b7280",
  },
  accordionRight: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "9999px",
    border: "1px solid",
    padding: "0.25rem 0.75rem",
    fontSize: "0.75rem",
    fontWeight: "600",
    backgroundColor: "#dbeafe",
    color: "#1e40af",
    borderColor: "#bfdbfe",
  },
  accordionContent: {
    borderTop: "1px solid #e2e8f0",
    backgroundColor: "#f9fafb",
  },
  documentsGrid: {
    padding: "2rem",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.5rem",
  },
  documentCard: {
    backgroundColor: "white",
    borderRadius: "0.75rem",
    border: "1px solid #e2e8f0",
    padding: "1.5rem",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  documentCardHover: {
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
    borderColor: "#129ba5",
    transform: "translateY(-2px)",
  },
  documentHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    marginBottom: "1rem",
  },
  documentIcon: {
    width: "3rem",
    height: "3rem",
    backgroundColor: "#f3f4f6",
    borderRadius: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  documentInfo: {
    flex: 1,
    minWidth: 0,
  },
  documentTitle: {
    fontWeight: "700",
    color: "#111827",
    fontSize: "0.875rem",
    lineHeight: "1.4",
    marginBottom: "0.5rem",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  documentDescription: {
    fontSize: "0.75rem",
    color: "#6b7280",
    marginBottom: "0.75rem",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  documentMeta: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "0.75rem",
    color: "#6b7280",
    marginBottom: "1rem",
  },
  documentMetaLeft: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  documentMetaItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.25rem",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.5rem",
    fontSize: "0.75rem",
    fontWeight: "600",
    transition: "all 0.3s ease",
    cursor: "pointer",
    outline: "none",
    width: "100%",
    padding: "0.5rem 1rem",
    backgroundColor: "#129ba5",
    color: "white",
    border: "2px solid #129ba5",
  },
  buttonHover: {
    backgroundColor: "#0891b2",
    borderColor: "#0891b2",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 6px rgba(18, 155, 165, 0.25)",
  },
  legalSection: {
    marginTop: "3rem",
    backgroundColor: "rgba(239, 246, 255, 0.8)",
    border: "1px solid rgba(147, 197, 253, 0.5)",
    borderRadius: "1rem",
    padding: "2rem",
  },
  legalHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
  },
  legalIcon: {
    width: "2.5rem",
    height: "2.5rem",
    backgroundColor: "rgba(147, 197, 253, 0.2)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  legalContent: {
    flex: 1,
  },
  legalTitle: {
    fontWeight: "700",
    color: "#1e40af",
    marginBottom: "0.5rem",
    fontSize: "1.1rem",
  },
  legalText: {
    fontSize: "0.875rem",
    color: "#1e40af",
    lineHeight: "1.6",
  },
};

// Componentes UI
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

// Datos de ejemplo
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
          backgroundColor: "#f9b91d",
          color: "#24354b",
          borderColor: "#f9b91d",
        };
      case "Informe Financiero":
      case "Informe Anual":
        return {
          backgroundColor: "#129ba5",
          color: "white",
          borderColor: "#129ba5",
        };
      case "Declaración Patrimonial":
        return {
          backgroundColor: "#24354b",
          color: "white",
          borderColor: "#24354b",
        };
      default:
        return {
          backgroundColor: "#f3f4f6",
          color: "#374151",
          borderColor: "#d1d5db",
        };
    }
  };

  const anosOrdenados = Object.keys(informesPorAno).sort((a, b) => b - a);
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

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
                backgroundColor: "rgba(249, 185, 29, 0.1)",
              }}
            >
              <FileText
                style={{ width: "1.5rem", height: "1.5rem", color: "#f59e0b" }}
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
                backgroundColor: "rgba(18, 155, 165, 0.1)",
              }}
            >
              <Download
                style={{ width: "1.5rem", height: "1.5rem", color: "#129ba5" }}
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
                backgroundColor: "rgba(86, 150, 56, 0.1)",
              }}
            >
              <Calendar
                style={{ width: "1.5rem", height: "1.5rem", color: "#569638" }}
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
          <div style={{ marginBottom: "2rem" }}>
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
                  style={{ width: "1rem", height: "1rem", color: "#3b82f6" }}
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

// Componente AccordionCard
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
                  width: "1.25rem",
                  height: "1.25rem",
                  color: "#6b7280",
                }}
              />
            ) : (
              <ChevronRight
                style={{
                  width: "1.25rem",
                  height: "1.25rem",
                  color: "#6b7280",
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

// Componente DocumentCard
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
            style={{ width: "1.5rem", height: "1.5rem", color: "#6b7280" }}
          />
        </div>
        <div style={styles.documentInfo}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <h4 style={styles.documentTitle}>{documento.titulo}</h4>
            <div
              style={{
                ...styles.badge,
                ...getTipoColor(documento.tipo),
                flexShrink: 0,
                fontSize: "0.625rem",
                padding: "0.125rem 0.5rem",
              }}
            >
              {documento.tipo}
            </div>
          </div>
          <p style={styles.documentDescription}>{documento.descripcion}</p>
          <div style={styles.documentMeta}>
            <div style={styles.documentMetaLeft}>
              <div style={styles.documentMetaItem}>
                <Calendar style={{ width: "0.75rem", height: "0.75rem" }} />
                {formatearFecha(documento.fecha)}
              </div>
              <div style={styles.documentMetaItem}>
                <Eye style={{ width: "0.75rem", height: "0.75rem" }} />
                {documento.descargas.toLocaleString()}
              </div>
            </div>
            <span style={{ fontWeight: "600" }}>{documento.tamano}</span>
          </div>
          <Button onClick={() => window.open(documento.url, "_blank")}>
            <Download
              style={{
                width: "0.75rem",
                height: "0.75rem",
                marginRight: "0.5rem",
              }}
            />
            Descargar PDF
            <ExternalLink
              style={{
                width: "0.75rem",
                height: "0.75rem",
                marginLeft: "0.5rem",
              }}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};
