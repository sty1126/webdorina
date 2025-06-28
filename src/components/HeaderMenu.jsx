"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Home,
  User,
  Users,
  FileSearch,
  MessageCircle,
  ChevronDown,
  BookOpen,
  MapPin,
  Building,
  Globe,
  FileText,
  DollarSign,
  Newspaper,
  Phone,
} from "lucide-react";

const HeaderMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

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
      key: "gestion",
      label: "Gestión Pública",
      icon: Users,
      submenu: [
        {
          key: "congreso",
          label: "En el Congreso",
          icon: Building,
          href: "/congreso",
        },
        {
          key: "territorio",
          label: "En el Territorio",
          icon: MapPin,
          href: "/territorio",
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
      "linear-gradient(135deg, #007C88 0%, #005A63 50%, #003D42 100%)",
    boxShadow:
      "0 20px 25px -5px rgba(0, 124, 136, 0.2), 0 10px 10px -5px rgba(0, 124, 136, 0.1)",
    padding: "0",
    height: "auto",
    minHeight: "80px",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "16px 48px",
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

  const navStyle = {
    display: "flex",
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
    background: "rgba(234, 217, 197, 0.15)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(234, 217, 197, 0.3)",
    color: "#EAD9C5",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.3s ease",
    whiteSpace: "nowrap",
  };

  const buttonHoverStyle = {
    background: "linear-gradient(135deg, #F89C1E, #E6890A)",
    color: "#007C88",
    transform: "scale(1.05)",
    boxShadow: "0 10px 15px -3px rgba(248, 156, 30, 0.3)",
  };

  const dropdownStyle = {
    position: "absolute",
    top: "100%",
    right: "0",
    marginTop: "8px",
    width: "256px",
    background: "#EAD9C5",
    borderRadius: "16px",
    boxShadow: "0 25px 50px -12px rgba(0, 124, 136, 0.25)",
    border: "1px solid rgba(0, 124, 136, 0.1)",
    overflow: "hidden",
    zIndex: 50,
    transition: "all 0.3s ease",
  };

  const dropdownInnerStyle = {
    background: "linear-gradient(135deg, #EAD9C5, #F4E6D3)",
    padding: "4px",
  };

  const subItemStyle = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "12px 16px",
    textAlign: "left",
    color: "#007C88",
    fontSize: "14px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
    border: "none",
    background: "transparent",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(135deg, rgba(0, 124, 136, 0.1), transparent)",
    pointerEvents: "none",
  };

  const colombianFlag1Style = {
    position: "absolute",
    top: 0,
    left: "20%",
    width: "200px",
    height: "6px",
    background:
      "linear-gradient(90deg, #FFBC11 0%, #FFBC11 50%, #074461 50%, #074461 75%, #FF3D00 75%, #FF3D00 100%)",
    borderRadius: "3px",
  };

  const cartagenaColors2Style = {
    position: "absolute",
    bottom: 0,
    right: "20%",
    width: "150px",
    height: "6px",
    background:
      "linear-gradient(90deg, #FF3D00 0%, #FF3D00 14.28%, #FFBC11 14.28%, #FFBC11 28.56%, #0AA87E 28.56%, #0AA87E 42.84%, #FFFFFF 42.84%, #FFFFFF 57.12%, #0AA87E 57.12%, #0AA87E 71.4%, #FFBC11 71.4%, #FFBC11 85.68%, #FF3D00 85.68%, #FF3D00 100%)",
    borderRadius: "3px",
  };

  const handleMainNavigation = (item) => {
    if (item.href) {
      navigate(item.href);
    }
  };

  const handleSubNavigation = (subItem) => {
    if (subItem.href) {
      navigate(subItem.href);
      setActiveDropdown(null);
    }
  };

  return (
    <header style={headerStyle}>
      <div style={overlayStyle}></div>

      <div style={containerStyle}>
        {/* Logo Space */}
        <div style={logoContainerStyle}>
          <img
            src="/media/logo.png"
            alt="Logo Dorina Hernández"
            style={{
              width: "180px",
              height: "60px",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
            onMouseEnter={(e) => {
              e.target.style.filter =
                "brightness(0) invert(1) drop-shadow(0 0 10px rgba(234,217,197,0.8))";
              e.target.style.transform = "scale(1.02)";
            }}
            onMouseLeave={(e) => {
              e.target.style.filter = "brightness(0) invert(1)";
              e.target.style.transform = "scale(1)";
            }}
          />
        </div>

        {/* Navigation Menu */}
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
                  e.target.style.background = "rgba(234, 217, 197, 0.15)";
                  e.target.style.color = "#EAD9C5";
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <item.icon
                  className="menu-icon"
                  size={20}
                  style={{ transition: "transform 0.3s ease" }}
                />
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

              {/* Dropdown Menu */}
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
                  <div style={dropdownInnerStyle}>
                    {item.submenu.map((subItem, index) => (
                      <button
                        key={subItem.key}
                        onClick={() => handleSubNavigation(subItem)}
                        style={{
                          ...subItemStyle,
                          borderRadius:
                            index === 0
                              ? "12px 12px 0 0"
                              : index === item.submenu.length - 1
                              ? "0 0 12px 12px"
                              : "0",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "#F89C1E";
                          e.target.style.color = "#EAD9C5";
                          e.target.style.transform = "scale(1.02)";
                          e.target.style.boxShadow =
                            "0 4px 6px -1px rgba(248, 156, 30, 0.3)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "transparent";
                          e.target.style.color = "#007C88";
                          e.target.style.transform = "scale(1)";
                          e.target.style.boxShadow = "none";
                        }}
                      >
                        <subItem.icon size={16} style={{ color: "inherit" }} />
                        <span>{subItem.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Decorative Elements */}
      <div style={colombianFlag1Style}></div>
      <div style={cartagenaColors2Style}></div>

      {/* Floating particles effect */}
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
          style={{
            position: "absolute",
            top: "16px",
            left: "33%",
            width: "8px",
            height: "8px",
            background: "#F89C1E",
            borderRadius: "50%",
            opacity: 0.6,
            animation: "pulse 2s infinite",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "32px",
            right: "25%",
            width: "4px",
            height: "4px",
            background: "#EAD9C5",
            borderRadius: "50%",
            opacity: 0.4,
            animation: "ping 1s infinite",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            bottom: "24px",
            left: "50%",
            width: "6px",
            height: "6px",
            background: "#007C88",
            borderRadius: "50%",
            opacity: 0.5,
            animation: "bounce 1s infinite",
          }}
        ></div>
      </div>

      <style jsx>{`
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
      `}</style>
    </header>
  );
};

export default HeaderMenu;
