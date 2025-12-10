import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const Select = ({ children, value, onValueChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const styles = {
    select: {
      display: "flex",
      height: "3rem",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      borderRadius: "12px",
      border: "2px solid rgba(86, 150, 56, 0.6)",
      backgroundColor: "white",
      padding: "0 1.5rem",
      fontSize: "1rem",
      cursor: "pointer",
      outline: "none",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 12px rgba(86, 150, 56, 0.15)",
      fontWeight: "500",
    },
    selectFocus: {
      borderColor: "rgba(249, 185, 29, 0.8)",
      boxShadow: "0 0 0 3px rgba(249, 185, 29, 0.15)",
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
      border: "2px solid rgba(86, 150, 56, 0.85)",
      borderRadius: "12px",
      boxShadow: "0 20px 40px rgba(86, 150, 56, 0.25)",
      maxHeight: "15rem",
      overflowY: "auto",
    },
    selectItem: {
      padding: "0.75rem 1.5rem",
      fontSize: "0.875rem",
      cursor: "pointer",
      borderBottom: "1px solid rgba(86, 150, 56, 0.1)",
      transition: "all 0.2s ease",
    },
  };

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
            color: "rgba(86, 150, 56, 0.85)",
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
  const styles = {
    selectItem: {
      padding: "0.75rem 1.5rem",
      fontSize: "0.875rem",
      cursor: "pointer",
      borderBottom: "1px solid rgba(86, 150, 56, 0.1)",
      transition: "all 0.2s ease",
    },
  };

  return (
    <div
      style={{
        ...styles.selectItem,
        backgroundColor: isHovered ? "rgba(86, 150, 56, 0.85)" : "white",
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

const NoticiasFilters = ({
  filtroTipo,
  setFiltroTipo,
  busqueda,
  setBusqueda,
  ordenamiento,
  setOrdenamiento,
}) => {
  const [isDesktop, setIsDesktop] = React.useState(
    typeof window !== "undefined" && window.innerWidth >= 768
  );

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    filtersSection: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(255, 255, 255, 0.98)",
      backdropFilter: "blur(20px)",
      borderBottom: "2px solid rgba(86, 150, 56, 0.85)",
      boxShadow: "0 8px 32px rgba(86, 150, 56, 0.2)",
      padding: "2rem 0",
    },
    filtersContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 24px",
      display: "flex",
      flexDirection: isDesktop ? "row" : "column",
      gap: "1.5rem",
      alignItems: "center",
      justifyContent: "space-between",
    },
    filtersRow: {
      display: "flex",
      flexDirection: isDesktop ? "row" : "column",
      gap: "1rem",
      width: isDesktop ? "auto" : "100%",
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
      border: "2px solid rgba(86, 150, 56, 0.85)",
      backgroundColor: "white",
      paddingLeft: "3rem",
      paddingRight: "1rem",
      fontSize: "1rem",
      outline: "none",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 12px rgba(86, 150, 56, 0.2)",
    },
    searchIcon: {
      position: "absolute",
      left: "1rem",
      top: "50%",
      transform: "translateY(-50%)",
      color: "rgba(86, 150, 56, 0.85)",
      width: "1.25rem",
      height: "1.25rem",
    },
  };

  return (
    <section style={styles.filtersSection}>
      <div style={styles.filtersContainer}>
        <div style={styles.filtersRow}>
          <div style={{ width: isDesktop ? "220px" : "100%" }}>
            <Select
              value={filtroTipo}
              onValueChange={setFiltroTipo}
              placeholder="Selecciona tipo de contenido"
            >
              <SelectItem value="Todos">Todos</SelectItem>
              <SelectItem value="Legislativo">Legislativo</SelectItem>
              <SelectItem value="Evento">Eventos</SelectItem>
              <SelectItem value="Comunicado">Comunicados</SelectItem>
              <SelectItem value="Video">Videos</SelectItem>
            </Select>
          </div>
          <div style={{ width: isDesktop ? "220px" : "100%" }}>
            <Select
              value={ordenamiento}
              onValueChange={setOrdenamiento}
              placeholder="Selecciona orden"
            >
              <SelectItem value="reciente">Más reciente</SelectItem>
              <SelectItem value="antiguo">Más antiguo</SelectItem>
              <SelectItem value="vistas">Más visto</SelectItem>
            </Select>
          </div>
        </div>
        <div style={styles.searchContainer}>
          <Search style={styles.searchIcon} />
          <input
            style={styles.searchInput}
            placeholder="Buscar noticias..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default NoticiasFilters;
