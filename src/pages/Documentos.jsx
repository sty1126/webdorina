import React, { useState, useMemo, useEffect } from "react";
import documentosData from "../data/documentos-legislativos-content.json";
import DocumentosHeader from "../components/Documentos/DocumentosHeader";
import DocumentosFilters from "../components/Documentos/DocumentosFilters";
import DocumentosGrid from "../components/Documentos/DocumentosGrid";
import CitizenSection from "../components/Documentos/CitizenSection";
import "../styles/documentos-legislativos.css";

export default function DocumentosLegislativos() {
  const [filtroTipo, setFiltroTipo] = useState("Todos");
  const [filtroEstado, setFiltroEstado] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");
  const [ordenamiento, setOrdenamiento] = useState("reciente");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const documentosFiltrados = useMemo(() => {
    let resultado = [...documentosData.documentos];

    // Ordenar por fecha descendente por defecto
    resultado.sort(
      (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
    );

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

    // Aplicar ordenamiento adicional
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

  return (
    <div className="documentos-container">
      <DocumentosHeader />
      <DocumentosFilters
        filtroTipo={filtroTipo}
        setFiltroTipo={setFiltroTipo}
        filtroEstado={filtroEstado}
        setFiltroEstado={setFiltroEstado}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
        ordenamiento={ordenamiento}
        setOrdenamiento={setOrdenamiento}
        totalResultados={documentosFiltrados.length}
      />
      <DocumentosGrid
        documentos={documentosFiltrados}
        filtroTipo={filtroTipo}
        filtroEstado={filtroEstado}
        busqueda={busqueda}
      />
      <CitizenSection />
    </div>
  );
}
