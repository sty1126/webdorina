import React, { useState } from "react";
import { FileText, Users, ExternalLink, Calendar } from "lucide-react";

const Badge = ({ children, type }) => {
  const getBadgeClass = (type) => {
    switch (type) {
      case "Proyecto de Ley":
        return "badge-proyecto";
      case "Proposición":
        return "badge-proposicion";
      case "Moción":
        return "badge-mocion";
      case "Citación":
        return "badge-citacion";
      default:
        return "badge-default";
    }
  };

  return (
    <div className={`documento-badge ${getBadgeClass(type)}`}>{children}</div>
  );
};

const StatusBadge = ({ status }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Aprobado":
        return "status-aprobado";
      case "En revisión":
        return "status-revision";
      case "Presentado":
        return "status-presentado";
      case "Archivado":
        return "status-archivado";
      default:
        return "status-default";
    }
  };

  return (
    <div className={`documento-status-badge ${getStatusClass(status)}`}>
      {status}
    </div>
  );
};

const Button = ({ onClick, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      className={`documento-button ${
        isHovered ? "documento-button-hovered" : ""
      }`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default function DocumentoCard({ documento }) {
  const [isHovered, setIsHovered] = useState(false);

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      className={`documento-card ${isHovered ? "documento-card-hovered" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="documento-card-header">
        <Badge type={documento.tipo}>{documento.tipo}</Badge>
        <h3
          className={`documento-card-title ${
            isHovered ? "documento-card-title-hovered" : ""
          }`}
        >
          {documento.titulo}
        </h3>
        <StatusBadge status={documento.estado} />
        <div className="documento-card-meta">
          <div className="documento-meta-item">
            <Calendar className="documento-meta-icon" />
            {formatearFecha(documento.fecha)}
          </div>
          <div className="documento-meta-item">
            <Users className="documento-meta-icon" />
            {documento.comision}
          </div>
        </div>
      </div>
      <div className="documento-card-content">
        <p className="documento-card-description">{documento.descripcion}</p>
        <Button onClick={() => window.open(documento.url, "_blank")}>
          <FileText className="documento-button-icon-left" />
          Ver documento completo
          <ExternalLink className="documento-button-icon-right" />
        </Button>
      </div>
    </div>
  );
}
