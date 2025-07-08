"use client";

import React, { useState, useMemo, useEffect } from "react";
import {
  FileText,
  Users,
  ExternalLink,
  Calendar,
  Search,
  ChevronDown,
  Send,
} from "lucide-react";

// Estilos con nueva paleta de colores vibrantes
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
    background: "linear-gradient(135deg, #f8fafc 0%, #fff1e6 100%)",
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 30% 30%, rgba(247, 147, 30, 0.12) 0%, transparent 40%),
      radial-gradient(circle at 70% 70%, rgba(249, 185, 29, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 50% 80%, rgba(255, 31, 41, 0.06) 0%, transparent 40%)
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
      "linear-gradient(135deg, rgba(247, 147, 30, 0.9) 0%, rgba(255, 31, 41, 0.9) 100%)",
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
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  subtitle: {
    fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
    color: "rgba(255, 255, 255, 0.95)",
    lineHeight: 1.6,
    margin: 0,
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
  },
  filtersSection: {
    position: "sticky",
    top: 0,
    zIndex: 40,
    background: "rgba(255, 255, 255, 0.98)",
    backdropFilter: "blur(20px)",
    borderBottom: "2px solid rgba(247, 147, 30, 0.6)",
    boxShadow: "0 8px 32px rgba(247, 147, 30, 0.15)",
    padding: "2rem 0",
  },
  filtersContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
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
    borderRadius: "12px",
    border: "2px solid rgba(247, 147, 30, 0.6)",
    backgroundColor: "white",
    padding: "0 1.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(247, 147, 30, 0.15)",
    fontWeight: "500",
  },
  selectFocus: {
    borderColor: "rgba(255, 31, 41, 0.7)",
    boxShadow: "0 0 0 3px rgba(255, 31, 41, 0.15)",
    transform: "translateY(-2px)",
  },
  selectDropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    zIndex: 50,
    width: "100%",
    marginTop: "0.5rem",
    backgroundColor: "white",
    border: "2px solid rgba(247, 147, 30, 0.6)",
    borderRadius: "12px",
    boxShadow: "0 20px 40px rgba(247, 147, 30, 0.25)",
    maxHeight: "15rem",
    overflowY: "auto",
  },
  selectItem: {
    padding: "0.75rem 1.5rem",
    fontSize: "0.875rem",
    cursor: "pointer",
    borderBottom: "1px solid rgba(247, 147, 30, 0.1)",
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
    borderRadius: "12px",
    border: "2px solid rgba(247, 147, 30, 0.6)",
    backgroundColor: "white",
    paddingLeft: "3rem",
    paddingRight: "1rem",
    fontSize: "1rem",
    outline: "none",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(247, 147, 30, 0.2)",
  },
  searchInputFocus: {
    borderColor: "#ff1f29",
    boxShadow: "0 0 0 4px rgba(255, 31, 41, 0.2)",
    transform: "translateY(-2px)",
  },
  searchIcon: {
    position: "absolute",
    left: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
    color: "rgba(247, 147, 30, 0.8)",
    width: "1.25rem",
    height: "1.25rem",
  },
  main: {
    padding: "4rem 0",
    background: "linear-gradient(135deg, #fff1e6 0%, #f8fafc 100%)",
  },
  mainContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    width: "100%",
    boxSizing: "border-box",
  },
  resultsText: {
    marginBottom: "2rem",
    color: "#24354b",
    fontSize: "1rem",
    fontWeight: "600",
    textAlign: "center",
    padding: "1.5rem 2rem",
    backgroundColor: "white",
    borderRadius: "16px",
    border: "2px solid rgba(247, 147, 30, 0.6)",
    boxShadow: "0 8px 24px rgba(247, 147, 30, 0.15)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
  },
  card: {
    borderRadius: "20px",
    border: "2px solid rgba(247, 147, 30, 0.6)",
    backgroundColor: "white",
    color: "#111827",
    boxShadow: "0 8px 24px rgba(247, 147, 30, 0.15)",
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    position: "relative",
  },
  cardHover: {
    boxShadow: "0 20px 40px rgba(255, 31, 41, 0.25)",
    transform: "translateY(-8px)",
    borderColor: "#ff1f29",
  },
  cardHeader: {
    padding: "2rem 2rem 1rem 2rem",
    borderBottom: "2px solid rgba(247, 147, 30, 0.2)",
    background:
      "linear-gradient(135deg, rgba(247, 147, 30, 0.05) 0%, rgba(255, 31, 41, 0.05) 100%)",
  },
  cardContent: {
    padding: "1.5rem 2rem 2rem 2rem",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "700",
    lineHeight: "1.4",
    marginBottom: "0.75rem",
    color: "#24354b",
    transition: "color 0.3s ease",
  },
  cardTitleHover: {
    color: "#ff1f29",
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
    borderRadius: "50px",
    border: "2px solid",
    padding: "0.5rem 1rem",
    fontSize: "0.75rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },
  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "50px",
    border: "2px solid",
    padding: "0.375rem 1rem",
    fontSize: "0.75rem",
    fontWeight: "700",
    marginBottom: "0.75rem",
  },
  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "12px",
    fontSize: "0.875rem",
    fontWeight: "700",
    transition: "all 0.3s ease",
    cursor: "pointer",
    outline: "none",
    width: "100%",
    padding: "1rem 1.5rem",
    border: "2px solid rgba(247, 147, 30, 0.6)",
    background:
      "linear-gradient(135deg, rgba(247, 147, 30, 0.9) 0%, rgba(255, 31, 41, 0.9) 100%)",
    color: "white",
    boxShadow: "0 6px 20px rgba(247, 147, 30, 0.25)",
  },
  buttonHover: {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 30px rgba(255, 31, 41, 0.4)",
    borderColor: "#ff1f29",
  },
  emptyState: {
    textAlign: "center",
    padding: "4rem 0",
    backgroundColor: "white",
    borderRadius: "20px",
    border: "2px solid rgba(247, 147, 30, 0.6)",
    boxShadow: "0 8px 24px rgba(247, 147, 30, 0.15)",
  },
  emptyIcon: {
    fontSize: "4rem",
    marginBottom: "1rem",
  },
  emptyTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "0.5rem",
    color: "#24354b",
  },
  emptyText: {
    color: "#6b7280",
    fontSize: "1rem",
  },
  citizenSection: {
    marginTop: "3rem",
    background:
      "linear-gradient(135deg, rgba(247, 147, 30, 0.9) 0%, rgba(255, 31, 41, 0.9) 100%)",
    borderRadius: "20px",
    padding: "3rem 2rem",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(247, 147, 30, 0.3)",
  },
  citizenTitle: {
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "white",
    marginBottom: "1rem",
    textShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
  citizenText: {
    fontSize: "1.1rem",
    color: "rgba(255, 255, 255, 0.95)",
    lineHeight: "1.6",
    marginBottom: "2rem",
    textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
  },
  citizenButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    fontSize: "1.1rem",
    fontWeight: "700",
    transition: "all 0.3s ease",
    cursor: "pointer",
    outline: "none",
    padding: "1.25rem 2.5rem",
    backgroundColor: "white",
    color: "rgba(247, 147, 30, 0.8)",
    border: "3px solid white",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
  },
  citizenButtonHover: {
    transform: "translateY(-4px) scale(1.05)",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.3)",
    backgroundColor: "#fff1e6",
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
          style={{
            width: "1.25rem",
            height: "1.25rem",
            opacity: 0.7,
            color: "rgba(247, 147, 30, 0.8)",
          }}
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
        backgroundColor: isHovered ? "rgba(247, 147, 30, 0.8)" : "white",
        color: isHovered ? "white" : "#24354b",
        fontWeight: isHovered ? "600" : "400",
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
          backgroundColor: "rgba(247, 147, 30, 0.8)",
          color: "white",
          borderColor: "rgba(247, 147, 30, 0.8)",
        };
      case "Proposición":
        return {
          backgroundColor: "rgba(255, 31, 41, 0.8)",
          color: "white",
          borderColor: "rgba(255, 31, 41, 0.8)",
        };
      case "Moción":
        return {
          backgroundColor: "#f9b91d",
          color: "#24354b",
          borderColor: "#f9b91d",
        };
      case "Citación":
        return {
          backgroundColor: "#24354b",
          color: "white",
          borderColor: "#24354b",
        };
      default:
        return {
          backgroundColor: "rgba(247, 147, 30, 0.8)",
          color: "white",
          borderColor: "rgba(247, 147, 30, 0.8)",
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
          backgroundColor: "#569638",
          color: "white",
          borderColor: "#569638",
        };
      case "En revisión":
        return {
          backgroundColor: "#f9b91d",
          color: "#24354b",
          borderColor: "#f9b91d",
        };
      case "Presentado":
        return {
          backgroundColor: "rgba(247, 147, 30, 0.8)",
          color: "white",
          borderColor: "rgba(247, 147, 30, 0.8)",
        };
      case "Archivado":
        return {
          backgroundColor: "#6b7280",
          color: "white",
          borderColor: "#6b7280",
        };
      default:
        return {
          backgroundColor: "rgba(247, 147, 30, 0.8)",
          color: "white",
          borderColor: "rgba(247, 147, 30, 0.8)",
        };
    }
  };

  return (
    <div style={{ ...styles.statusBadge, ...getStatusStyle(status) }}>
      {status}
    </div>
  );
};

// Datos de ejemplo (sin cambios)
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

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

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
                placeholder="Selecciona tipo de documento"
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
                placeholder="Selecciona estado"
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
                placeholder="Selecciona orden"
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
                      <Calendar
                        style={{
                          width: "1rem",
                          height: "1rem",
                          color: "rgba(247, 147, 30, 0.8)",
                        }}
                      />
                      {formatearFecha(documento.fecha)}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Users
                        style={{
                          width: "1rem",
                          height: "1rem",
                          color: "rgba(247, 147, 30, 0.8)",
                        }}
                      />
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
