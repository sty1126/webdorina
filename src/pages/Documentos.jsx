"use client";

import React, { useState, useMemo } from "react";
import {
  FileText,
  Users,
  ExternalLink,
  Calendar,
  Search,
  ChevronDown,
  Send,
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
      radial-gradient(circle at 30% 30%, rgba(86, 150, 56, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 70% 70%, rgba(249, 185, 29, 0.06) 0%, transparent 40%),
      radial-gradient(circle at 50% 80%, rgba(18, 155, 165, 0.04) 0%, transparent 40%)
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
  filtersSection: {
    position: "sticky",
    top: 0,
    zIndex: 40,
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(15px)",
    borderBottom: "1px solid #e2e8f0",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    padding: "2rem 0",
  },
  filtersContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px", // Cambiar de 48px a 24px
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
    alignItems: "center",
    justifyContent: "space-between",
  },
  filtersRow: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "100%",
  },
  select: {
    display: "flex",
    height: "3rem",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "8px",
    border: "2px solid #e2e8f0",
    backgroundColor: "white",
    padding: "0 1.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    fontWeight: "500",
  },
  selectFocus: {
    borderColor: "#569638",
    boxShadow: "0 0 0 3px rgba(86, 150, 56, 0.1)",
  },
  selectDropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    zIndex: 50,
    width: "100%",
    marginTop: "0.5rem",
    backgroundColor: "white",
    border: "2px solid #e2e8f0",
    borderRadius: "8px",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.15)",
    maxHeight: "15rem",
    overflowY: "auto",
  },
  selectItem: {
    padding: "0.75rem 1.5rem",
    fontSize: "0.875rem",
    cursor: "pointer",
    borderBottom: "1px solid #f3f4f6",
    transition: "all 0.2s ease",
  },
  searchContainer: {
    position: "relative",
    width: "100%",
    maxWidth: "24rem",
  },
  searchInput: {
    display: "flex",
    height: "3rem",
    width: "100%",
    borderRadius: "8px",
    border: "2px solid #e2e8f0",
    backgroundColor: "white",
    paddingLeft: "3rem",
    paddingRight: "1rem",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  searchInputFocus: {
    borderColor: "#f9b91d",
    boxShadow: "0 0 0 3px rgba(249, 185, 29, 0.1)",
  },
  searchIcon: {
    position: "absolute",
    left: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#6b7280",
    width: "1.25rem",
    height: "1.25rem",
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
  resultsText: {
    marginBottom: "2rem",
    color: "#4b5563",
    fontSize: "1rem",
    fontWeight: "500",
    textAlign: "center",
    padding: "1rem 2rem",
    backgroundColor: "white",
    borderRadius: "8px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
  },
  card: {
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
    backgroundColor: "white",
    color: "#111827",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
    overflow: "hidden",
    transition: "all 0.3s ease",
    cursor: "pointer",
  },
  cardHover: {
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.1)",
    transform: "translateY(-4px)",
    borderColor: "#569638",
  },
  cardHeader: {
    padding: "2rem 2rem 1rem 2rem",
    borderBottom: "1px solid #e2e8f0",
    backgroundColor: "#f9fafb",
  },
  cardContent: {
    padding: "1.5rem 2rem 2rem 2rem",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    lineHeight: "1.4",
    marginBottom: "0.75rem",
    color: "#111827",
    transition: "color 0.3s ease",
  },
  cardTitleHover: {
    color: "#569638",
  },
  cardMeta: {
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
    fontSize: "0.875rem",
    color: "#6b7280",
    marginBottom: "1rem",
  },
  cardDescription: {
    fontSize: "0.875rem",
    lineHeight: "1.6",
    color: "#6b7280",
    marginBottom: "1.5rem",
    display: "-webkit-box",
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  badge: {
    position: "absolute",
    top: "1rem",
    right: "1rem",
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "9999px",
    border: "2px solid",
    padding: "0.375rem 0.875rem",
    fontSize: "0.75rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "9999px",
    border: "1px solid",
    padding: "0.25rem 0.75rem",
    fontSize: "0.75rem",
    fontWeight: "600",
    marginBottom: "0.75rem",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.5rem",
    fontSize: "0.875rem",
    fontWeight: "600",
    transition: "all 0.3s ease",
    cursor: "pointer",
    outline: "none",
    width: "100%",
    padding: "0.75rem 1.5rem",
    border: "2px solid #e5e7eb",
    backgroundColor: "white",
    color: "#374151",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  buttonHover: {
    backgroundColor: "#569638",
    color: "white",
    borderColor: "#569638",
    transform: "translateY(-1px)",
    boxShadow: "0 4px 6px rgba(86, 150, 56, 0.25)",
  },
  emptyState: {
    textAlign: "center",
    padding: "4rem 0",
    backgroundColor: "white",
    borderRadius: "16px",
    border: "1px solid #e2e8f0",
  },
  emptyIcon: {
    fontSize: "4rem",
    marginBottom: "1rem",
  },
  emptyTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
    color: "#111827",
  },
  emptyText: {
    color: "#6b7280",
    fontSize: "1rem",
  },
  citizenSection: {
    marginTop: "3rem",
    backgroundColor: "rgba(254, 243, 199, 0.8)",
    border: "1px solid rgba(251, 191, 36, 0.3)",
    borderRadius: "1rem",
    padding: "2rem",
    textAlign: "center",
  },
  citizenTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "0.75rem",
  },
  citizenText: {
    fontSize: "1rem",
    color: "#6b7280",
    lineHeight: "1.6",
    marginBottom: "1.5rem",
  },
  citizenButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.5rem",
    fontSize: "1rem",
    fontWeight: "600",
    transition: "all 0.3s ease",
    cursor: "pointer",
    outline: "none",
    padding: "0.875rem 2rem",
    backgroundColor: "#f9b91d",
    color: "#24354b",
    border: "2px solid #f9b91d",
    boxShadow: "0 4px 6px rgba(249, 185, 29, 0.25)",
  },
  citizenButtonHover: {
    backgroundColor: "#f59e0b",
    borderColor: "#f59e0b",
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(249, 185, 29, 0.4)",
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

const CitizenButton = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      style={{
        ...styles.citizenButton,
        ...(isHovered ? styles.citizenButtonHover : {}),
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

const Select = ({ children, value, onValueChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{ ...styles.select, ...(isFocused ? styles.selectFocus : {}) }}
        onClick={() => {
          setIsOpen(!isOpen);
          setIsFocused(!isOpen);
        }}
      >
        <span>{value || placeholder}</span>
        <ChevronDown
          style={{ width: "1.25rem", height: "1.25rem", opacity: 0.6 }}
        />
      </div>
      {isOpen && (
        <div style={styles.selectDropdown}>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              onClick: () => {
                onValueChange(child.props.value);
                setIsOpen(false);
                setIsFocused(false);
              },
            })
          )}
        </div>
      )}
    </div>
  );
};

const SelectItem = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{
        ...styles.selectItem,
        backgroundColor: isHovered ? "#569638" : "white",
        color: isHovered ? "white" : "#374151",
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

const Card = ({ children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{ ...styles.card, ...(isHovered ? styles.cardHover : {}) }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {React.Children.map(children, (child) => {
        if (child?.props?.style === styles.cardTitle) {
          return React.cloneElement(child, {
            style: {
              ...styles.cardTitle,
              ...(isHovered ? styles.cardTitleHover : {}),
            },
          });
        }
        return child;
      })}
    </div>
  );
};

const Badge = ({ children, type }) => {
  const getBadgeStyle = (type) => {
    switch (type) {
      case "Proyecto de Ley":
        return {
          backgroundColor: "#569638",
          color: "white",
          borderColor: "#569638",
        };
      case "Proposición":
        return {
          backgroundColor: "#f9b91d",
          color: "#24354b",
          borderColor: "#f9b91d",
        };
      case "Moción":
        return {
          backgroundColor: "#129ba5",
          color: "white",
          borderColor: "#129ba5",
        };
      case "Citación":
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

  return (
    <div style={{ ...styles.badge, ...getBadgeStyle(type) }}>{children}</div>
  );
};

const StatusBadge = ({ status }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Aprobado":
        return {
          backgroundColor: "rgba(34, 197, 94, 0.1)",
          color: "#16a34a",
          borderColor: "#16a34a",
        };
      case "En revisión":
        return {
          backgroundColor: "rgba(249, 185, 29, 0.1)",
          color: "#f59e0b",
          borderColor: "#f59e0b",
        };
      case "Presentado":
        return {
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          color: "#3b82f6",
          borderColor: "#3b82f6",
        };
      case "Archivado":
        return {
          backgroundColor: "rgba(107, 114, 128, 0.1)",
          color: "#6b7280",
          borderColor: "#6b7280",
        };
      default:
        return {
          backgroundColor: "#f3f4f6",
          color: "#374151",
          borderColor: "#d1d5db",
        };
    }
  };

  return (
    <div style={{ ...styles.statusBadge, ...getStatusStyle(status) }}>
      {status}
    </div>
  );
};

// Datos de ejemplo
const documentos = [
  {
    id: 1,
    titulo: "Proyecto de Ley 123 - Reconocimiento a Palenque",
    tipo: "Proyecto de Ley",
    estado: "En revisión",
    fecha: "2024-04-11",
    descripcion:
      "Proyecto de ley que busca el reconocimiento oficial del municipio de Palenque como patrimonio cultural de la humanidad y la implementación de políticas de preservación.",
    url: "#",
    autor: "Dorina Hernández",
    comision: "Comisión de Cultura",
  },
  {
    id: 2,
    titulo: "Proposición 045 - Fortalecimiento Educación Rural",
    tipo: "Proposición",
    estado: "Aprobado",
    fecha: "2024-03-28",
    descripcion:
      "Proposición para el fortalecimiento de la educación en zonas rurales mediante la implementación de programas de conectividad y dotación tecnológica.",
    url: "#",
    autor: "Dorina Hernández",
    comision: "Comisión de Educación",
  },
  {
    id: 3,
    titulo: "Moción 012 - Protección Ecosistemas Locales",
    tipo: "Moción",
    estado: "Presentado",
    fecha: "2024-03-15",
    descripcion:
      "Moción para la creación de un programa especial de protección de ecosistemas locales y promoción del ecoturismo sostenible en la región.",
    url: "#",
    autor: "Dorina Hernández",
    comision: "Comisión de Medio Ambiente",
  },
  {
    id: 4,
    titulo: "Citación 008 - Ministro de Salud",
    tipo: "Citación",
    estado: "En revisión",
    fecha: "2024-02-20",
    descripcion:
      "Citación al Ministro de Salud para explicar las deficiencias en la atención médica en municipios rurales y las medidas correctivas a implementar.",
    url: "#",
    autor: "Dorina Hernández",
    comision: "Comisión de Salud",
  },
  {
    id: 5,
    titulo: "Proyecto de Ley 089 - Desarrollo Económico Local",
    tipo: "Proyecto de Ley",
    estado: "Aprobado",
    fecha: "2024-01-30",
    descripcion:
      "Proyecto de ley para el fomento del desarrollo económico local mediante incentivos fiscales para pequeñas y medianas empresas rurales.",
    url: "#",
    autor: "Dorina Hernández",
    comision: "Comisión de Desarrollo Económico",
  },
  {
    id: 6,
    titulo: "Proposición 032 - Mejoramiento Vial Rural",
    tipo: "Proposición",
    estado: "En revisión",
    fecha: "2024-01-15",
    descripcion:
      "Proposición para la asignación de recursos especiales destinados al mejoramiento de la infraestructura vial en sectores rurales del departamento.",
    url: "#",
    autor: "Dorina Hernández",
    comision: "Comisión de Infraestructura",
  },
  {
    id: 7,
    titulo: "Moción 005 - Apoyo Mujeres Rurales",
    tipo: "Moción",
    estado: "Aprobado",
    fecha: "2023-12-10",
    descripcion:
      "Moción para la creación de programas de apoyo y empoderamiento económico dirigidos específicamente a mujeres en zonas rurales.",
    url: "#",
    autor: "Dorina Hernández",
    comision: "Comisión de Equidad de Género",
  },
  {
    id: 8,
    titulo: "Proyecto de Ley 067 - Seguridad Alimentaria",
    tipo: "Proyecto de Ley",
    estado: "Archivado",
    fecha: "2023-11-22",
    descripcion:
      "Proyecto de ley para garantizar la seguridad alimentaria en comunidades rurales mediante programas de agricultura sostenible y soberanía alimentaria.",
    url: "#",
    autor: "Dorina Hernández",
    comision: "Comisión de Agricultura",
  },
];

export default function DocumentosLegislativos() {
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [filtroEstado, setFiltroEstado] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [ordenamiento, setOrdenamiento] = useState("reciente");

  const documentosFiltrados = useMemo(() => {
    let resultado = documentos;

    if (filtroTipo !== "Todos") {
      resultado = resultado.filter((doc) => doc.tipo === filtroTipo);
    }

    if (filtroEstado !== "Todos") {
      resultado = resultado.filter((doc) => doc.estado === filtroEstado);
    }

    if (busqueda) {
      resultado = resultado.filter(
        (doc) =>
          doc.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
          doc.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    resultado.sort((a, b) => {
      switch (ordenamiento) {
        case "reciente":
          return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
        case "antiguo":
          return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
        case "alfabetico":
          return a.titulo.localeCompare(b.titulo);
        default:
          return 0;
      }
    });

    return resultado;
  }, [filtroTipo, filtroEstado, busqueda, ordenamiento]);

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const responsiveStyles = {
    ...styles,
    filtersContainer: {
      ...styles.filtersContainer,
      flexDirection: isDesktop ? "row" : "column",
    },
    filtersRow: {
      ...styles.filtersRow,
      flexDirection: isDesktop ? "row" : "column",
      width: isDesktop ? "auto" : "100%",
    },
    grid: {
      ...styles.grid,
      gridTemplateColumns: isDesktop
        ? "repeat(auto-fit, minmax(450px, 1fr))"
        : "1fr",
    },
  };

  return (
    <div style={responsiveStyles.container}>
      <div style={styles.backgroundOverlay}></div>

      <header style={styles.header}>
        <div style={styles.headerOverlay}></div>
        <div style={styles.containerInner}>
          <div style={styles.headerContent}>
            <h1 style={styles.title}>Documentos Legislativos y Propuestas</h1>
            <p style={styles.subtitle}>
              Consulta aquí los documentos legislativos, propuestas de reforma y
              proyectos presentados o respaldados por la Representante Dorina
              Hernández. Cada documento incluye acceso a la fuente oficial y
              contexto informativo.
            </p>
          </div>
        </div>
      </header>

      <section style={styles.filtersSection}>
        <div style={responsiveStyles.filtersContainer}>
          <div style={responsiveStyles.filtersRow}>
            <div style={{ width: isDesktop ? "200px" : "100%" }}>
              <Select
                value={filtroTipo}
                onValueChange={setFiltroTipo}
                placeholder="Tipo de documento"
              >
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="Proyecto de Ley">
                  Proyectos de Ley
                </SelectItem>
                <SelectItem value="Proposición">Proposiciones</SelectItem>
                <SelectItem value="Moción">Mociones</SelectItem>
                <SelectItem value="Citación">Citaciones</SelectItem>
              </Select>
            </div>
            <div style={{ width: isDesktop ? "200px" : "100%" }}>
              <Select
                value={filtroEstado}
                onValueChange={setFiltroEstado}
                placeholder="Estado"
              >
                <SelectItem value="Todos">Todos</SelectItem>
                <SelectItem value="Aprobado">Aprobado</SelectItem>
                <SelectItem value="En revisión">En revisión</SelectItem>
                <SelectItem value="Presentado">Presentado</SelectItem>
                <SelectItem value="Archivado">Archivado</SelectItem>
              </Select>
            </div>
            <div style={{ width: isDesktop ? "200px" : "100%" }}>
              <Select
                value={ordenamiento}
                onValueChange={setOrdenamiento}
                placeholder="Ordenar por"
              >
                <SelectItem value="reciente">Más reciente</SelectItem>
                <SelectItem value="antiguo">Más antiguo</SelectItem>
                <SelectItem value="alfabetico">Alfabético</SelectItem>
              </Select>
            </div>
          </div>
          <div style={styles.searchContainer}>
            <Search style={styles.searchIcon} />
            <input
              style={styles.searchInput}
              placeholder="Buscar documentos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>
      </section>

      <main style={styles.main}>
        <div style={styles.mainContainer}>
          <div style={styles.resultsText}>
            <p>
              Mostrando {documentosFiltrados.length}{" "}
              {documentosFiltrados.length === 1 ? "documento" : "documentos"}
              {filtroTipo !== "Todos" && ` de tipo ${filtroTipo}`}
              {filtroEstado !== "Todos" && ` con estado ${filtroEstado}`}
              {busqueda && ` para "${busqueda}"`}
            </p>
          </div>

          <div style={responsiveStyles.grid}>
            {documentosFiltrados.map((documento) => (
              <Card key={documento.id}>
                <div style={styles.cardHeader}>
                  <Badge type={documento.tipo}>{documento.tipo}</Badge>
                  <h3 style={styles.cardTitle}>{documento.titulo}</h3>
                  <StatusBadge status={documento.estado} />
                  <div style={styles.cardMeta}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Calendar style={{ width: "1rem", height: "1rem" }} />
                      {formatearFecha(documento.fecha)}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Users style={{ width: "1rem", height: "1rem" }} />
                      {documento.comision}
                    </div>
                  </div>
                </div>
                <div style={styles.cardContent}>
                  <p style={styles.cardDescription}>{documento.descripcion}</p>
                  <Button onClick={() => window.open(documento.url, "_blank")}>
                    <FileText
                      style={{
                        marginRight: "0.5rem",
                        width: "1rem",
                        height: "1rem",
                      }}
                    />
                    Ver documento completo
                    <ExternalLink
                      style={{
                        marginLeft: "0.5rem",
                        width: "1rem",
                        height: "1rem",
                      }}
                    />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {documentosFiltrados.length === 0 && (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>📋</div>
              <h3 style={styles.emptyTitle}>No se encontraron documentos</h3>
              <p style={styles.emptyText}>
                Intenta ajustar los filtros o términos de búsqueda
              </p>
            </div>
          )}

          <div style={styles.citizenSection}>
            <h2 style={styles.citizenTitle}>
              ¿Tienes una propuesta ciudadana?
            </h2>
            <p style={styles.citizenText}>
              Como representante del pueblo, estoy comprometida con escuchar y
              canalizar las propuestas de la ciudadanía. Si tienes una idea o
              propuesta que consideras importante para nuestra región, no dudes
              en contactarme.
            </p>
            <CitizenButton
              onClick={() =>
                window.open("mailto:contacto@dorinahernandez.gov.co", "_blank")
              }
            >
              <Send
                style={{ marginRight: "0.5rem", width: "1rem", height: "1rem" }}
              />
              Enviar propuesta ciudadana
            </CitizenButton>
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
