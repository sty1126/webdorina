import React, { useState, useMemo, useEffect } from "react";
import NoticiasHeader from "../components/Noticias/NoticiasHeader";
import NoticiasFilters from "../components/Noticias/NoticiasFilters";
import NoticiasGrid from "../components/Noticias/NoticiasGrid";
import noticiasData from "../data/noticias-content.json";
import "../styles/noticias.css";

const styles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    margin: 0,
    padding: 0,
    paddingTop: "80px",
    overflow: "hidden",
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
};

export default function Noticias() {
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [ordenamiento, setOrdenamiento] = useState("reciente");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const noticiasFiltradas = useMemo(() => {
    let resultado = [...noticiasData.noticias].sort(
      (a, b) => new Date(b.fecha) - new Date(a.fecha)
    );

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

  return (
    <div style={styles.container}>
      <div style={styles.backgroundOverlay}></div>

      <NoticiasHeader />

      <NoticiasFilters
        filtroTipo={filtroTipo}
        setFiltroTipo={setFiltroTipo}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        ordenamiento={ordenamiento}
        setOrdenamiento={setOrdenamiento}
      />

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

          <NoticiasGrid noticias={noticiasFiltradas} />
        </div>
      </main>
    </div>
  );
}
