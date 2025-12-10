import React, { useState } from "react";
import { Search, ChevronDown } from "lucide-react";

const Select = ({ children, value, onValueChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="select-wrapper">
      <div
        className={`select-trigger ${
          isFocused ? "select-trigger-focused" : ""
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
          setIsFocused(!isOpen);
        }}
      >
        <span>{value || placeholder}</span>
        <ChevronDown className="select-icon" />
      </div>
      {isOpen && (
        <div className="select-dropdown">
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
      className={`select-item ${isHovered ? "select-item-hovered" : ""}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

export default function DocumentosFilters({
  filtroTipo,
  setFiltroTipo,
  filtroEstado,
  setFiltroEstado,
  busqueda,
  setBusqueda,
  ordenamiento,
  setOrdenamiento,
  totalResultados,
}) {
  return (
    <section className="documentos-filters-section">
      <div className="documentos-filters-container">
        <div className="documentos-filters-row">
          <div className="documentos-filter-group">
            <Select
              value={filtroTipo}
              onValueChange={setFiltroTipo}
              placeholder="Selecciona tipo de documento"
            >
              <SelectItem value="Todos">Todos</SelectItem>
              <SelectItem value="Proyecto de Ley">Proyectos de Ley</SelectItem>
              <SelectItem value="Proposición">Proposiciones</SelectItem>
              <SelectItem value="Moción">Mociones</SelectItem>
              <SelectItem value="Citación">Citaciones</SelectItem>
            </Select>
          </div>
          <div className="documentos-filter-group">
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
          <div className="documentos-filter-group">
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
        <div className="documentos-search-container">
          <Search className="documentos-search-icon" />
          <input
            className="documentos-search-input"
            placeholder="Buscar documentos..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
