import React from "react";
import DocumentoCard from "./DocumentoCard";

export default function DocumentosGrid({
  documentos,
  filtroTipo,
  filtroEstado,
  busqueda,
}) {
  const getResultsText = () => {
    let text = `Mostrando ${documentos.length} ${
      documentos.length === 1 ? "documento" : "documentos"
    }`;
    if (filtroTipo !== "Todos") text += ` de tipo ${filtroTipo}`;
    if (filtroEstado !== "Todos") text += ` con estado ${filtroEstado}`;
    if (busqueda) text += ` para "${busqueda}"`;
    return text;
  };

  return (
    <main className="documentos-main">
      <div className="documentos-container-inner">
        <div className="documentos-results-text">
          <p>{getResultsText()}</p>
        </div>

        <div className="documentos-grid">
          {documentos.map((documento) => (
            <DocumentoCard key={documento.id} documento={documento} />
          ))}
        </div>

        {documentos.length === 0 && (
          <div className="documentos-empty-state">
            <div className="documentos-empty-icon">📋</div>
            <h3 className="documentos-empty-title">
              No se encontraron documentos
            </h3>
            <p className="documentos-empty-text">
              Intenta ajustar los filtros o términos de búsqueda
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
