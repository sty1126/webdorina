import React, { useState } from "react";
import NoticiasCard from "./NoticiasCard";

const NoticiasGrid = ({ noticias }) => {
  const [isDesktop, setIsDesktop] = React.useState(
    typeof window !== "undefined" && window.innerWidth >= 768
  );

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: isDesktop
        ? "repeat(auto-fit, minmax(400px, 1fr))"
        : "1fr",
      gap: "2rem",
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

  if (noticias.length === 0) {
    return (
      <div style={styles.emptyState}>
        <div style={styles.emptyIcon}>📰</div>
        <h3 style={styles.emptyTitle}>No se encontraron noticias</h3>
        <p style={styles.emptyText}>
          Intenta ajustar los filtros o términos de búsqueda
        </p>
      </div>
    );
  }

  return (
    <div style={styles.grid}>
      {noticias.map((noticia) => (
        <NoticiasCard key={noticia.id} noticia={noticia} />
      ))}
    </div>
  );
};

export default NoticiasGrid;
