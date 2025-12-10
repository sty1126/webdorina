import { useState, useEffect } from "react";
import InformesHeader from "../components/Finanzas/InformesHeader";
import InfoSection from "../components/Finanzas/InfoSection";
import AccordionCard from "../components/Finanzas/AccordionCard";
import { FileText } from "lucide-react";
import informesData from "../data/informes-financieros-content.json";
import "../styles/informes-financieros.css";

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
    background: "linear-gradient(135deg, #e6f3ff 0%, #f0fcff 100%)",
  },
  backgroundOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `
      radial-gradient(circle at 25% 25%, rgba(16, 58, 153, 0.08) 0%, transparent 40%),
      radial-gradient(circle at 75% 75%, rgba(13, 193, 211, 0.12) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(16, 58, 153, 0.06) 0%, transparent 40%)
    `,
    pointerEvents: "none",
    zIndex: 0,
  },
  main: {
    padding: "4rem 0",
    background: "linear-gradient(135deg, #e6f3ff 0%, #f0fcff 100%)",
  },
  mainContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 24px",
    width: "100%",
    boxSizing: "border-box",
  },
  sectionTitle: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "rgba(16, 58, 153, 0.85)",
    marginBottom: "0.75rem",
    textAlign: "center",
  },
  sectionDescription: {
    color: "#6b7280",
    marginBottom: "3rem",
    fontSize: "1.1rem",
    textAlign: "center",
  },
  accordionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  legalSection: {
    marginTop: "4rem",
    background:
      "linear-gradient(135deg, rgba(16, 58, 153, 0.05) 0%, rgba(13, 193, 211, 0.05) 100%)",
    border: "2px solid rgba(13, 193, 211, 0.3)",
    borderRadius: "20px",
    padding: "3rem",
    boxShadow: "0 8px 24px rgba(13, 193, 211, 0.1)",
  },
  legalHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1.5rem",
  },
  legalIcon: {
    width: "3rem",
    height: "3rem",
    background: "linear-gradient(135deg, #0dc1d3 0%, #103a99 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    boxShadow: "0 6px 15px rgba(13, 193, 211, 0.3)",
  },
  legalContent: {
    flex: 1,
  },
  legalTitle: {
    fontWeight: "700",
    color: "rgba(16, 58, 153, 0.85)",
    marginBottom: "0.75rem",
    fontSize: "1.3rem",
  },
  legalText: {
    fontSize: "1rem",
    color: "rgba(16, 58, 153, 0.85)",
    lineHeight: "1.6",
  },
};

export default function InformesFinancieros() {
  const [anosAbiertos, setAnosAbiertos] = useState(new Set(["2024"]));
  const [informesPorAno, setInformesPorAno] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);

    const agrupados = {};
    informesData.informes.forEach((informe) => {
      const ano = informe.ano.toString();
      if (!agrupados[ano]) {
        agrupados[ano] = [];
      }
      agrupados[ano].push(informe);
    });
    setInformesPorAno(agrupados);
  }, []);

  const toggleAno = (ano) => {
    const nuevosAnosAbiertos = new Set(anosAbiertos);
    if (nuevosAnosAbiertos.has(ano)) {
      nuevosAnosAbiertos.delete(ano);
    } else {
      nuevosAnosAbiertos.add(ano);
    }
    setAnosAbiertos(nuevosAnosAbiertos);
  };

  const formatearFecha = (fecha) => {
    return new Date(fecha).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getTipoColor = (tipo) => {
    switch (tipo) {
      case "Declaración Tributaria":
        return {
          backgroundColor: "rgba(16, 58, 153, 0.85)",
          color: "white",
          borderColor: "rgba(16, 58, 153, 0.85)",
        };
      case "Informe Financiero":
      case "Informe Anual":
        return {
          backgroundColor: "rgba(13, 193, 211, 0.85)",
          color: "white",
          borderColor: "rgba(13, 193, 211, 0.85)",
        };
      case "Declaración Patrimonial":
        return {
          backgroundColor: "#24354b",
          color: "white",
          borderColor: "#24354b",
        };
      default:
        return {
          backgroundColor: "rgba(16, 58, 153, 0.85)",
          color: "white",
          borderColor: "rgba(16, 58, 153, 0.85)",
        };
    }
  };

  const anosOrdenados = Object.keys(informesPorAno).sort((a, b) => b - a);

  return (
    <div style={styles.container}>
      <div style={styles.backgroundOverlay}></div>

      <InformesHeader />
      <InfoSection />

      <main style={styles.main}>
        <div style={styles.mainContainer}>
          <div style={{ marginBottom: "3rem" }}>
            <h2 style={styles.sectionTitle}>Documentos por Año</h2>
            <p style={styles.sectionDescription}>
              Selecciona un año para ver los documentos disponibles
            </p>
          </div>

          <div style={styles.accordionContainer}>
            {anosOrdenados.map((ano) => {
              const estaAbierto = anosAbiertos.has(ano);
              const documentos = informesPorAno[ano];
              const totalDescargas = documentos.reduce(
                (sum, doc) => sum + doc.descargas,
                0
              );

              return (
                <AccordionCard
                  key={ano}
                  ano={ano}
                  documentos={documentos}
                  totalDescargas={totalDescargas}
                  estaAbierto={estaAbierto}
                  onToggle={() => toggleAno(ano)}
                  formatearFecha={formatearFecha}
                  getTipoColor={getTipoColor}
                />
              );
            })}
          </div>

          <div style={styles.legalSection}>
            <div style={styles.legalHeader}>
              <div style={styles.legalIcon}>
                <FileText
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    color: "white",
                  }}
                />
              </div>
              <div style={styles.legalContent}>
                <h3 style={styles.legalTitle}>Información Legal</h3>
                <p style={styles.legalText}>
                  Todos los documentos aquí publicados cumplen con las
                  disposiciones legales de transparencia y acceso a la
                  información pública. Los informes financieros y declaraciones
                  tributarias están disponibles de acuerdo con la normatividad
                  vigente sobre rendición de cuentas de servidores públicos.
                </p>
              </div>
            </div>
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
