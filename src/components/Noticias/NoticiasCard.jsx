"use client";

import { useState } from "react";
import { Calendar, Eye, ArrowRight } from "lucide-react";

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

  const styles = {
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
  };

  return (
    <div style={{ ...styles.badge, ...getBadgeStyle(type) }}>{children}</div>
  );
};

const NoticiasCard = ({ noticia }) => {
  const [isHovered, setIsHovered] = useState(false);

  const styles = {
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
      transform: isHovered ? "translateY(-8px)" : "translateY(0)",
      borderColor: isHovered
        ? "rgba(249, 185, 29, 0.85)"
        : "rgba(86, 150, 56, 0.85)",
      boxShadow: isHovered
        ? "0 20px 40px rgba(249, 185, 29, 0.3)"
        : "0 8px 24px rgba(86, 150, 56, 0.15)",
    },
    cardImageContainer: {
      position: "relative",
      overflow: "hidden",
    },
    cardImage: {
      width: "100%",
      height: "12rem",
      objectFit: "cover",
      transition: "transform 0.3s ease",
      transform: isHovered ? "scale(1.05)" : "scale(1)",
    },
    cardContent: {
      padding: "2rem",
    },
    cardTitle: {
      fontSize: "1.25rem",
      fontWeight: "700",
      lineHeight: "1.4",
      marginBottom: "0.75rem",
      color: isHovered ? "rgba(249, 185, 29, 0.85)" : "#24354b",
      transition: "color 0.3s ease",
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
  };

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <Calendar
              style={{
                width: "1rem",
                height: "1rem",
                color: "rgba(86, 150, 56, 0.85)",
              }}
            />
            {formatearFecha(noticia.fecha)}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
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
        <button
          style={styles.button}
          onClick={() => {
            if (noticia.link) {
              window.open(noticia.link, "_blank");
            }
          }}
        >
          Ver más
          <ArrowRight
            style={{ marginLeft: "0.5rem", width: "1rem", height: "1rem" }}
          />
        </button>
      </div>
    </div>
  );
};

export default NoticiasCard;
