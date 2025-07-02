"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  User,
  FileSearch,
  MessageCircle,
  ChevronDown,
  BookOpen,
  Globe,
  FileText,
  DollarSign,
  Newspaper,
  Phone,
  Menu,
  X,
} from "lucide-react";

const HeaderMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  // Detectar si es móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // Cerrar menú móvil cuando se redimensiona a desktop
  useEffect(() => {
    if (!isMobile) {
      setIsMobileMenuOpen(false);
    }
  }, [isMobile]);

  const menuItems = [
    {
      key: "inicio",
      label: "Inicio",
      icon: Home,
      href: "/",
    },
    {
      key: "sobremi",
      label: "Sobre mí",
      icon: User,
      submenu: [
        {
          key: "biografia",
          label: "Biografía",
          icon: BookOpen,
          href: "/biografia",
        },
        {
          key: "cultura",
          label: "Tierra y Cultura",
          icon: Globe,
          href: "/cultura",
        },
      ],
    },
    {
      key: "transparencia",
      label: "Transparencia",
      icon: FileSearch,
      submenu: [
        {
          key: "documentos",
          label: "Documentos",
          icon: FileText,
          href: "/documentos",
        },
        {
          key: "finanzas",
          label: "Informes Financieros",
          icon: DollarSign,
          href: "/finanzas",
        },
      ],
    },
    {
      key: "participacion",
      label: "Participación",
      icon: MessageCircle,
      submenu: [
        {
          key: "noticias",
          label: "Noticias y Comunicaciones",
          icon: Newspaper,
          href: "/noticias",
        },
        {
          key: "contacto",
          label: "Participa / Contacto",
          icon: Phone,
          href: "/contacto",
        },
      ],
    },
  ];

  const headerStyle = {
    position: "relative",
    background:
      "linear-gradient(135deg, #24354b 0%, #1a2635 50%, #0f1419 100%)",
    boxShadow:
      "0 20px 25px -5px rgba(36, 53, 75, 0.2), 0 10px 10px -5px rgba(36, 53, 75, 0.1)",
    padding: "0",
    height: "auto",
    minHeight: isMobile ? "70px" : "80px",
    zIndex: 1000,
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: isMobile ? "12px 16px" : "16px 48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
    zIndex: 10,
  };

  const logoContainerStyle = {
    display: "flex",
    alignItems: "center",
  };

  const logoStyle = {
    width: isMobile ? "140px" : "180px",
    height: isMobile ? "45px" : "60px",
    objectFit: "contain",
    filter: "brightness(0) invert(1)",
    transition: "all 0.3s ease",
    cursor: "pointer",
  };

  // Estilos para navegación desktop
  const navStyle = {
    display: isMobile ? "none" : "flex",
    alignItems: "center",
    gap: "8px",
  };

  const menuItemStyle = {
    position: "relative",
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "12px 24px",
    borderRadius: "16px",
    background: "rgba(13, 193, 211, 0.15)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(13, 193, 211, 0.3)",
    color: "#0dc1d3",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
  };

  const buttonHoverStyle = {
    background: "linear-gradient(135deg, #f9b91d, #e6a50a)",
    color: "#24354b",
    transform: "scale(1.05)",
    boxShadow: "0 10px 15px -3px rgba(249, 185, 29, 0.3)",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    right: "0",
    marginTop: "8px",
    width: "256px",
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 25px 50px -12px rgba(36, 53, 75, 0.25)",
    border: "1px solid rgba(36, 53, 75, 0.1)",
    overflow: "hidden",
    zIndex: 50,
    transition: "all 0.3s ease",
  };

  // Estilos para menú hamburguesa
  const hamburgerButtonStyle = {
    display: isMobile ? "flex" : "none",
    alignItems: "center",
    justifyContent: "center",
    width: "44px",
    height: "44px",
    background: "rgba(13, 193, 211, 0.15)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(13, 193, 211, 0.3)",
    borderRadius: "12px",
    color: "#0dc1d3",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  // Estilos para menú móvil
  const mobileMenuStyle = {
    position: "fixed",
    top: isMobile ? "70px" : "80px",
    left: 0,
    right: 0,
    background: "linear-gradient(135deg, #24354b 0%, #1a2635 100%)",
    backdropFilter: "blur(20px)",
    borderTop: "1px solid rgba(13, 193, 211, 0.3)",
    transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
    opacity: isMobileMenuOpen ? 1 : 0,
    visibility: isMobileMenuOpen ? "visible" : "hidden",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    zIndex: 999,
    maxHeight: "calc(100vh - 70px)",
    overflowY: "auto",
  };

  const mobileMenuItemStyle = {
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const mobileButtonStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 20px",
    background: "transparent",
    border: "none",
    color: "#0dc1d3",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const mobileSubMenuStyle = {
    background: "rgba(0, 0, 0, 0.2)",
    maxHeight: activeDropdown ? "200px" : "0",
    overflow: "hidden",
    transition: "all 0.3s ease",
  };

  const mobileSubItemStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 40px",
    background: "transparent",
    border: "none",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "14px",
    fontWeight: "400",
    cursor: "pointer",
    transition: "all 0.3s ease",
    borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(36, 53, 75, 0.1), transparent)",
    pointerEvents: "none",
  };

  const decorativeBar1Style = {
    position: "absolute",
    top: 0,
    left: isMobile ? "10%" : "20%",
    width: isMobile ? "100px" : "200px",
    height: "6px",
    background:
      "linear-gradient(90deg, #FFBC11 0%, #FFBC11 50%, #074461 50%, #074461 75%, #FF3D00 75%, #FF3D00 100%)",
    borderRadius: "3px",
  };

  const decorativeBar2Style = {
    position: "absolute",
    bottom: 0,
    right: isMobile ? "10%" : "20%",
    width: isMobile ? "80px" : "150px",
    height: "6px",
    background:
      "linear-gradient(90deg, #FF3D00 0%, #FF3D00 14.28%, #FFBC11 14.28%, #FFBC11 28.56%, #0AA87E 28.56%, #0AA87E 42.84%, #FFFFFF 42.84%, #FFFFFF 57.12%, #0AA87E 57.12%, #0AA87E 71.4%, #FFBC11 71.4%, #FFBC11 85.68%, #FF3D00 85.68%, #FF3D00 100%)",
    borderRadius: "3px",
  };

  const handleMainNavigation = (item) => {
    if (item.href) {
      navigate(item.href);
      setIsMobileMenuOpen(false);
    }
  };

  const handleSubNavigation = (subItem) => {
    if (subItem.href) {
      navigate(subItem.href);
      setActiveDropdown(null);
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
  };

  const toggleMobileDropdown = (itemKey) => {
    setActiveDropdown(activeDropdown === itemKey ? null : itemKey);
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={overlayStyle}></div>

        <div style={containerStyle}>
          {/* Logo */}
          <div style={logoContainerStyle}>
            <img
              src="media/logo.png?height=60&width=180"
              alt="Logo Dorina Hernández"
              style={logoStyle}
              onClick={() => navigate("/")}
              onMouseEnter={(e) => {
                e.target.style.filter =
                  "brightness(0) invert(1) drop-shadow(0 0 10px rgba(13,193,211,0.8))";
                e.target.style.transform = "scale(1.02)";
              }}
              onMouseLeave={(e) => {
                e.target.style.filter = "brightness(0) invert(1)";
                e.target.style.transform = "scale(1)";
              }}
            />
          </div>

          {/* Desktop Navigation */}
          <nav style={navStyle}>
            {menuItems.map((item) => (
              <div
                key={item.key}
                style={menuItemStyle}
                onMouseEnter={() => item.submenu && setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  style={buttonStyle}
                  onClick={() => handleMainNavigation(item)}
                  onMouseEnter={(e) => {
                    Object.assign(e.target.style, buttonHoverStyle);
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(13, 193, 211, 0.15)";
                    e.target.style.color = "#0dc1d3";
                    e.target.style.transform = "scale(1)";
                    e.target.style.boxShadow = "none";
                  }}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      style={{
                        transition: "transform 0.3s ease",
                        transform:
                          activeDropdown === item.key
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                      }}
                    />
                  )}
                </button>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div
                    style={{
                      ...dropdownStyle,
                      opacity: activeDropdown === item.key ? 1 : 0,
                      visibility:
                        activeDropdown === item.key ? "visible" : "hidden",
                      transform:
                        activeDropdown === item.key
                          ? "translateY(0)"
                          : "translateY(-16px)",
                    }}
                  >
                    <div
                      style={{
                        background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
                        padding: "4px",
                      }}
                    >
                      {item.submenu.map((subItem, index) => (
                        <button
                          key={subItem.key}
                          onClick={() => handleSubNavigation(subItem)}
                          style={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            padding: "12px 16px",
                            textAlign: "left",
                            color: "#24354b",
                            fontSize: "14px",
                            fontWeight: "500",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            border: "none",
                            background: "transparent",
                            borderRadius:
                              index === 0
                                ? "12px 12px 0 0"
                                : index === item.submenu.length - 1
                                ? "0 0 12px 12px"
                                : "0",
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.background = "#569638";
                            e.target.style.color = "#ffffff";
                            e.target.style.transform = "scale(1.02)";
                            e.target.style.boxShadow =
                              "0 4px 6px -1px rgba(86, 150, 56, 0.3)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.background = "transparent";
                            e.target.style.color = "#24354b";
                            e.target.style.transform = "scale(1)";
                            e.target.style.boxShadow = "none";
                          }}
                        >
                          <subItem.icon size={16} />
                          <span>{subItem.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            style={hamburgerButtonStyle}
            onClick={toggleMobileMenu}
            onMouseEnter={(e) => {
              e.target.style.background =
                "linear-gradient(135deg, #f9b91d, #e6a50a)";
              e.target.style.color = "#24354b";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(13, 193, 211, 0.15)";
              e.target.style.color = "#0dc1d3";
              e.target.style.transform = "scale(1)";
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Decorative Elements */}
        <div style={decorativeBar1Style}></div>
        <div style={decorativeBar2Style}></div>

        {/* Floating particles effect - OCULTOS EN MÓVIL */}
        {!isMobile && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              overflow: "hidden",
              pointerEvents: "none",
            }}
          >
            <div
              className="particle-1"
              style={{
                position: "absolute",
                top: "16px",
                left: "33%",
                width: "8px",
                height: "8px",
                background: "#f9b91d",
                borderRadius: "50%",
                opacity: 0.6,
              }}
            ></div>
            <div
              className="particle-2"
              style={{
                position: "absolute",
                top: "32px",
                right: "25%",
                width: "4px",
                height: "4px",
                background: "#0dc1d3",
                borderRadius: "50%",
                opacity: 0.4,
              }}
            ></div>
            <div
              className="particle-3"
              style={{
                position: "absolute",
                bottom: "24px",
                left: "50%",
                width: "6px",
                height: "6px",
                background: "#569638",
                borderRadius: "50%",
                opacity: 0.5,
              }}
            ></div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      <div style={mobileMenuStyle}>
        {menuItems.map((item) => (
          <div key={item.key} style={mobileMenuItemStyle}>
            <button
              style={mobileButtonStyle}
              onClick={() => {
                if (item.submenu) {
                  toggleMobileDropdown(item.key);
                } else {
                  handleMainNavigation(item);
                }
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(13, 193, 211, 0.1)";
                e.target.style.color = "#f9b91d";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#0dc1d3";
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </div>
              {item.submenu && (
                <ChevronDown
                  size={16}
                  style={{
                    transition: "transform 0.3s ease",
                    transform:
                      activeDropdown === item.key
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                />
              )}
            </button>

            {/* Mobile Submenu */}
            {item.submenu && (
              <div style={mobileSubMenuStyle}>
                {item.submenu.map((subItem) => (
                  <button
                    key={subItem.key}
                    style={mobileSubItemStyle}
                    onClick={() => handleSubNavigation(subItem)}
                    onMouseEnter={(e) => {
                      e.target.style.background = "rgba(86, 150, 56, 0.2)";
                      e.target.style.color = "#f9b91d";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.background = "transparent";
                      e.target.style.color = "rgba(255, 255, 255, 0.8)";
                    }}
                  >
                    <subItem.icon size={16} />
                    <span>{subItem.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 998,
          }}
          onClick={toggleMobileMenu}
        />
      )}

      <style jsx>{`
        .particle-1 {
          animation: pulse 2s infinite;
        }
        .particle-2 {
          animation: ping 1s infinite;
        }
        .particle-3 {
          animation: bounce 1s infinite;
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.3;
          }
        }
        @keyframes ping {
          75%,
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-25%);
          }
        }

        /* Estilos adicionales para móvil */
        @media (max-width: 768px) {
          body {
            overflow-x: hidden;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderMenu;
