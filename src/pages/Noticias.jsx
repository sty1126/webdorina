"use client";

import React, { useState, useMemo, useEffect } from "react";
import { Search, Calendar, Eye, ArrowRight, ChevronDown } from "lucide-react";

// Estilos con paleta de colores vibrantes - Verde y Amarillo
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
    background: "linear-gradient(135deg, #f0f9f0 0%, #fffbf0 100%)",
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 20% 20%, rgba(86, 150, 56, 0.12) 0%, transparent 40%),
      radial-gradient(circle at 80% 80%, rgba(249, 185, 29, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(86, 150, 56, 0.06) 0%, transparent 40%)
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
      "linear-gradient(135deg, rgba(86, 150, 56, 0.9) 0%, rgba(249, 185, 29, 0.9) 100%)",
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
  searchInputFocus: {
    borderColor: "rgba(249, 185, 29, 0.85)",
    boxShadow: "0 0 0 4px rgba(249, 185, 29, 0.2)",
    transform: "translateY(-2px)",
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
  main: {
    padding: "4rem 0",
    background: "linear-gradient(135deg, #f0f9f0 0%, #fffbf0 100%)",
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
    border: "2px solid rgba(86, 150, 56, 0.85)",
    boxShadow: "0 8px 24px rgba(86, 150, 56, 0.15)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2rem",
  },
  card: {
    borderRadius: "20px",
    border: "2px solid rgba(86, 150, 56, 0.85)",
    backgroundColor: "white",
    color: "#111827",
    boxShadow: "0 8px 24px rgba(86, 150, 56, 0.15)",
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    position: "relative",
  },
  cardHover: {
    boxShadow: "0 20px 40px rgba(249, 185, 29, 0.3)",
    transform: "translateY(-8px)",
    borderColor: "rgba(249, 185, 29, 0.85)",
  },
  cardImage: {
    width: "100%",
    height: "12rem",
    objectFit: "cover",
    transition: "transform 0.3s ease",
  },
  cardImageHover: {
    transform: "scale(1.05)",
  },
  cardImageContainer: {
    position: "relative",
    overflow: "hidden",
  },
  badge: {
    position: "absolute",
    top: "1rem",
    left: "1rem",
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "50px",
    border: "2px solid",
    padding: "0.5rem 1rem",
    fontSize: "0.75rem",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  },
  cardContent: {
    padding: "2rem",
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
    color: "rgba(249, 185, 29, 0.85)",
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
    border: "2px solid rgba(86, 150, 56, 0.6)",
    background:
      "linear-gradient(135deg, rgba(86, 150, 56, 0.9) 0%, rgba(249, 185, 29, 0.9) 100%)",
    color: "white",
    boxShadow: "0 6px 20px rgba(86, 150, 56, 0.25)",
  },
  buttonHover: {
    transform: "translateY(-3px)",
    boxShadow: "0 12px 30px rgba(249, 185, 29, 0.4)",
    borderColor: "rgba(249, 185, 29, 0.85)",
  },
  emptyState: {
    textAlign: "center",
    padding: "4rem 0",
    backgroundColor: "white",
    borderRadius: "20px",
    border: "2px solid rgba(86, 150, 56, 0.85)",
    boxShadow: "0 8px 24px rgba(86, 150, 56, 0.15)",
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
        if (child?.props?.style === styles.cardImageContainer) {
          return React.cloneElement(child, {
            children: React.Children.map(child.props.children, (grandChild) => {
              if (grandChild?.type === "img") {
                return React.cloneElement(grandChild, {
                  style: {
                    ...styles.cardImage,
                    ...(isHovered ? styles.cardImageHover : {}),
                  },
                });
              }
              return grandChild;
            }),
          });
        }
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
      case "Legislativo":
        return {
          backgroundColor: "rgba(86, 150, 56, 0.85)",
          color: "white",
          borderColor: "rgba(86, 150, 56, 0.85)",
        };
      case "Evento":
        return {
          backgroundColor: "rgba(249, 185, 29, 0.85)",
          color: "#24354b",
          borderColor: "rgba(249, 185, 29, 0.85)",
        };
      case "Comunicado":
        return {
          backgroundColor: "#24354b",
          color: "white",
          borderColor: "#24354b",
        };
      case "Video":
        return {
          backgroundColor: "#ff1f29",
          color: "white",
          borderColor: "#ff1f29",
        };
      default:
        return {
          backgroundColor: "rgba(86, 150, 56, 0.85)",
          color: "white",
          borderColor: "rgba(86, 150, 56, 0.85)",
        };
    }
  };

  return (
    <div style={{ ...styles.badge, ...getBadgeStyle(type) }}>{children}</div>
  );
};

// Datos de ejemplo (sin cambios)
const noticias = [
  {
    id: 1,
    titulo: "Nueva Ley de Protección Ambiental aprobada en primer debate",
    descripcion:
      "La representante Dorina Hernández presenta proyecto de ley que busca fortalecer la protección de ecosistemas locales y promover el desarrollo sostenible en toda la región.",
    fecha: "2024-01-15",
    tipo: "Legislativo",
    imagen:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
    vistas: 1250,
  },
  {
    id: 2,
    titulo: "Inauguración del Centro Comunitario en el barrio San José",
    descripcion:
      "Con la presencia de más de 200 vecinos, se inauguró el nuevo centro comunitario que beneficiará a familias de la localidad con programas educativos y culturales.",
    fecha: "2024-01-12",
    tipo: "Evento",
    imagen:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=250&fit=crop",
    vistas: 890,
  },
  {
    id: 3,
    titulo: "Comunicado: Gestión de recursos para mejoramiento vial",
    descripcion:
      "La representante anuncia la gestión exitosa de recursos por valor de 2.5 millones para el mejoramiento de vías en sectores rurales del municipio.",
    fecha: "2024-01-10",
    tipo: "Comunicado",
    imagen:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=250&fit=crop",
    vistas: 650,
  },
  {
    id: 4,
    titulo: "Video: Sesión plenaria sobre educación rural",
    descripcion:
      "Intervención completa en el Congreso sobre la necesidad de fortalecer la educación en zonas rurales del departamento y garantizar acceso equitativo.",
    fecha: "2024-01-08",
    tipo: "Video",
    imagen:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=250&fit=crop",
    vistas: 2100,
  },
  {
    id: 5,
    titulo: "Reunión con líderes comunitarios de la zona norte",
    descripcion:
      "Espacio de diálogo y construcción colectiva para identificar las principales necesidades de la comunidad y establecer un plan de trabajo conjunto.",
    fecha: "2024-01-05",
    tipo: "Evento",
    imagen:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&h=250&fit=crop",
    vistas: 420,
  },
  {
    id: 6,
    titulo: "Proyecto de ley para el fortalecimiento de la salud pública",
    descripcion:
      "Nueva propuesta legislativa busca mejorar el acceso a servicios de salud en municipios rurales y garantizar atención médica de calidad.",
    fecha: "2024-01-03",
    tipo: "Legislativo",
    imagen:
      "https://images.unsplash.com/photo-1576091160399-112ba8d307ca884978?w=400&h=250&fit=crop",
    vistas: 980,
  },
];

export default function NoticiasPage() {
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [ordenamiento, setOrdenamiento] = useState("reciente");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const noticiasFiltradas = useMemo(() => {
    let resultado = noticias;

    if (filtroTipo !== "Todos") {
      resultado = resultado.filter((noticia) => noticia.tipo === filtroTipo);
    }

    if (busqueda) {
      resultado = resultado.filter(
        (noticia) =>
          noticia.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
          noticia.descripcion.toLowerCase().includes(busqueda.toLowerCase())
      );
    }

    resultado.sort((a, b) => {
      switch (ordenamiento) {
        case "reciente":
          return new Date(b.fecha).getTime() - new Date(a.fecha).getTime();
        case "antiguo":
          return new Date(a.fecha).getTime() - new Date(b.fecha).getTime();
        case "vistas":
          return b.vistas - a.vistas;
        default:
          return 0;
      }
    });

    return resultado;
  }, [filtroTipo, busqueda, ordenamiento]);

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
        ? "repeat(auto-fit, minmax(400px, 1fr))"
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
            <h1 style={styles.title}>Noticias y Comunicaciones</h1>
            <p style={styles.subtitle}>
              Aquí encuentras los comunicados, eventos, videos y novedades sobre
              el trabajo legislativo y comunitario de la representante Dorina
              Hernández.
            </p>
          </div>
        </div>
      </header>

      <section style={styles.filtersSection}>
        <div style={responsiveStyles.filtersContainer}>
          <div style={responsiveStyles.filtersRow}>
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

      <main style={styles.main}>
        <div style={styles.mainContainer}>
          <div style={styles.resultsText}>
            <p>
              Mostrando {noticiasFiltradas.length}{" "}
              {noticiasFiltradas.length === 1 ? "resultado" : "resultados"}
              {filtroTipo !== "Todos" && ` en ${filtroTipo}`}
              {busqueda && ` para "${busqueda}"`}
            </p>
          </div>

          <div style={responsiveStyles.grid}>
            {noticiasFiltradas.map((noticia) => (
              <Card key={noticia.id}>
                <div style={styles.cardImageContainer}>
                  <img
                    src={noticia.imagen || "/placeholder.svg"}
                    alt={noticia.titulo}
                    style={styles.cardImage}
                  />
                  <Badge type={noticia.tipo}>{noticia.tipo}</Badge>
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>{noticia.titulo}</h3>
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
                          color: "rgba(86, 150, 56, 0.85)",
                        }}
                      />
                      {formatearFecha(noticia.fecha)}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Eye
                        style={{
                          width: "1rem",
                          height: "1rem",
                          color: "rgba(86, 150, 56, 0.85)",
                        }}
                      />
                      {noticia.vistas.toLocaleString()}
                    </div>
                  </div>
                  <p style={styles.cardDescription}>{noticia.descripcion}</p>
                  <Button>
                    Ver más
                    <ArrowRight
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

          {noticiasFiltradas.length === 0 && (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>📰</div>
              <h3 style={styles.emptyTitle}>No se encontraron noticias</h3>
              <p style={styles.emptyText}>
                Intenta ajustar los filtros o términos de búsqueda
              </p>
            </div>
          )}
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
