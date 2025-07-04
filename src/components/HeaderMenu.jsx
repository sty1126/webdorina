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
  X,
} from "lucide-react";

const HeaderMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
    height: typeof window !== "undefined" ? window.innerHeight : 800,
  });
  const navigate = useNavigate();

  // Mejorar detección de dispositivos móviles
  const isMobile = screenSize.width < 768;
  const isTablet = screenSize.width >= 768 && screenSize.width < 1024;
  const isSmallMobile = screenSize.width < 480;

  // Detectar cambios de tamaño de pantalla con debounce
  useEffect(() => {
    let timeoutId = null;

    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 150);
    };

    // Detectar orientación en móviles
    const handleOrientationChange = () => {
      setTimeout(() => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 100);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleOrientationChange);
      clearTimeout(timeoutId);
    };
  }, []);

  // Cerrar menú móvil cuando se redimensiona a desktop
  useEffect(() => {
    if (!isMobile && isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
    }
  }, [isMobile, isMobileMenuOpen]);

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

  const handleMainNavigation = (item) => {
    if (item.href) {
      navigate(item.href);
      setIsMobileMenuOpen(false);
      setActiveDropdown(null);
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
      <header className="header-container">
        <div className="header-overlay"></div>

        <div className="header-content">
          {/* Logo */}
          <div className="logo-container">
            <img
              src="media/logo.png?height=60&width=180"
              alt="Logo Dorina Hernández"
              className="logo"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            {menuItems.map((item) => (
              <div
                key={item.key}
                className="nav-item"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  className="nav-button"
                  onClick={() => handleMainNavigation(item)}
                >
                  {item.icon && <item.icon size={20} />}
                  <span>{item.label}</span>
                  {item.submenu && (
                    <ChevronDown
                      size={16}
                      className={`chevron ${
                        activeDropdown === item.key ? "rotated" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div
                    className={`dropdown ${
                      activeDropdown === item.key ? "active" : ""
                    }`}
                  >
                    <div className="dropdown-content">
                      {item.submenu.map((subItem, index) => (
                        <button
                          key={subItem.key}
                          onClick={() => handleSubNavigation(subItem)}
                          className={`dropdown-item ${
                            index === 0 ? "first" : ""
                          } ${index === item.submenu.length - 1 ? "last" : ""}`}
                        >
                          {subItem.icon && <subItem.icon size={16} />}
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
          <button className="hamburger-button" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <div className="hamburger-lines">
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            )}
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="decorative-bar-1"></div>
        <div className="decorative-bar-2"></div>

        {/* Floating particles effect - OCULTOS EN MÓVIL */}
        <div className="particles-container">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {menuItems.map((item) => (
          <div key={item.key} className="mobile-menu-item">
            <button
              className="mobile-nav-button"
              onClick={() => {
                if (item.submenu) {
                  toggleMobileDropdown(item.key);
                } else {
                  handleMainNavigation(item);
                }
              }}
            >
              <div className="mobile-nav-content">
                {item.icon && <item.icon size={20} />}
                <span>{item.label}</span>
              </div>
              {item.submenu && (
                <ChevronDown
                  size={16}
                  className={`mobile-chevron ${
                    activeDropdown === item.key ? "rotated" : ""
                  }`}
                />
              )}
            </button>

            {/* Mobile Submenu - SIEMPRE ABIERTO EN MÓVIL */}
            {item.submenu && (
              <div className="mobile-submenu open">
                {item.submenu.map((subItem) => (
                  <button
                    key={subItem.key}
                    className="mobile-sub-item"
                    onClick={() => handleSubNavigation(subItem)}
                  >
                    {subItem.icon && <subItem.icon size={16} />}
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
        <div className="mobile-overlay" onClick={toggleMobileMenu} />
      )}

      <style jsx>{`
        .header-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: linear-gradient(
            135deg,
            #24354b 0%,
            #1a2635 50%,
            #0f1419 100%
          );
          box-shadow: 0 20px 25px -5px rgba(36, 53, 75, 0.2),
            0 10px 10px -5px rgba(36, 53, 75, 0.1);
          padding: 0;
          height: auto;
          min-height: ${isSmallMobile ? "60px" : isMobile ? "70px" : "80px"};
          z-index: 99999;
          width: 100%;
          overflow: visible;
        }

        .header-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(36, 53, 75, 0.1),
            transparent
          );
          pointer-events: none;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: ${isSmallMobile
            ? "8px 12px"
            : isMobile
            ? "12px 16px"
            : isTablet
            ? "14px 32px"
            : "16px 48px"};
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 10;
          min-height: ${isSmallMobile ? "44px" : isMobile ? "46px" : "48px"};
        }

        .logo-container {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }

        .logo {
          width: ${isSmallMobile
            ? "120px"
            : isMobile
            ? "140px"
            : isTablet
            ? "160px"
            : "180px"};
          height: ${isSmallMobile
            ? "38px"
            : isMobile
            ? "45px"
            : isTablet
            ? "52px"
            : "60px"};
          object-fit: contain;
          filter: brightness(0) invert(1);
          transition: all 0.3s ease;
          cursor: pointer;
          max-width: 100%;
        }

        .logo:hover {
          filter: brightness(0) invert(1)
            drop-shadow(0 0 10px rgba(13, 193, 211, 0.8));
          transform: scale(1.02);
        }

        .desktop-nav {
          display: ${isMobile ? "none" : "flex"};
          align-items: center;
          gap: ${isTablet ? "6px" : "8px"};
          flex-wrap: nowrap;
        }

        .nav-item {
          position: relative;
        }

        .nav-button {
          display: flex;
          align-items: center;
          gap: ${isTablet ? "6px" : "8px"};
          padding: ${isTablet ? "10px 18px" : "12px 24px"};
          border-radius: 16px;
          background: rgba(13, 193, 211, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(13, 193, 211, 0.3);
          color: #0dc1d3;
          font-size: ${isTablet ? "13px" : "14px"};
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .nav-button:hover {
          background: linear-gradient(135deg, #f9b91d, #e6a50a);
          color: #24354b;
          transform: scale(1.05);
          box-shadow: 0 10px 15px -3px rgba(249, 185, 29, 0.3);
        }

        .chevron {
          transition: transform 0.3s ease;
        }

        .chevron.rotated {
          transform: rotate(180deg);
        }

        .dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 8px;
          width: 256px;
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(36, 53, 75, 0.25);
          border: 1px solid rgba(36, 53, 75, 0.1);
          overflow: hidden;
          z-index: 99998;
          transition: all 0.3s ease;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-16px);
        }

        .dropdown.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-content {
          background: linear-gradient(135deg, #ffffff, #f8f9fa);
          padding: 4px;
        }

        .dropdown-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          text-align: left;
          color: #24354b;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          background: transparent;
          border-radius: 0;
        }

        .dropdown-item.first {
          border-radius: 12px 12px 0 0;
        }

        .dropdown-item.last {
          border-radius: 0 0 12px 12px;
        }

        .dropdown-item:hover {
          background: #569638;
          color: #ffffff;
          transform: scale(1.02);
          box-shadow: 0 4px 6px -1px rgba(86, 150, 56, 0.3);
        }

        .hamburger-button {
          display: ${isMobile ? "flex" : "none"};
          align-items: center;
          justify-content: center;
          width: ${isSmallMobile ? "40px" : "44px"};
          height: ${isSmallMobile ? "40px" : "44px"};
          background: linear-gradient(135deg, #f9b91d, #f9b91d);
          border: 1px solid rgba(249, 185, 29, 0.3);
          border-radius: 12px;
          color: #24354b;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .hamburger-button:hover {
          background: linear-gradient(135deg, #e6a50a, #d4940a);
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(249, 185, 29, 0.4);
          color: #24354b;
        }

        .mobile-menu {
          position: fixed;
          top: ${isSmallMobile ? "60px" : isMobile ? "70px" : "80px"};
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #24354b 0%, #1a2635 100%);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(13, 193, 211, 0.3);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 99997;
          max-height: calc(
            100vh - ${isSmallMobile ? "60px" : isMobile ? "70px" : "80px"}
          );
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-nav-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: ${isSmallMobile ? "14px 16px" : "16px 20px"};
          background: transparent;
          border: none;
          color: #0dc1d3;
          font-size: ${isSmallMobile ? "15px" : "16px"};
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          min-height: ${isSmallMobile ? "48px" : "52px"};
        }

        .mobile-nav-button:hover {
          background: rgba(13, 193, 211, 0.1);
          color: #f9b91d;
        }

        .mobile-nav-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mobile-chevron {
          transition: transform 0.3s ease;
          flex-shrink: 0;
          display: none; /* Ocultar chevron ya que los submenús están siempre abiertos */
        }

        .mobile-chevron.rotated {
          transform: rotate(180deg);
        }

        .mobile-submenu {
          background: rgba(0, 0, 0, 0.2);
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .mobile-submenu.open {
          max-height: 300px; /* Aumentar para que se vean todos los elementos */
        }

        .mobile-sub-item {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: ${isSmallMobile ? "10px 32px" : "12px 40px"};
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: ${isSmallMobile ? "13px" : "14px"};
          font-weight: 400;
          cursor: pointer;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          min-height: ${isSmallMobile ? "40px" : "44px"};
        }

        .mobile-sub-item:hover {
          background: rgba(86, 150, 56, 0.2);
          color: #f9b91d;
        }

        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 99996;
        }

        .decorative-bar-1 {
          position: absolute;
          top: 0;
          left: ${isSmallMobile ? "5%" : isMobile ? "10%" : "20%"};
          width: ${isSmallMobile ? "80px" : isMobile ? "100px" : "200px"};
          height: ${isSmallMobile ? "4px" : "6px"};
          background: linear-gradient(
            90deg,
            #ffbc11 0%,
            #ffbc11 50%,
            #074461 50%,
            #074461 75%,
            #ff3d00 75%,
            #ff3d00 100%
          );
          border-radius: 3px;
        }

        .decorative-bar-2 {
          position: absolute;
          bottom: 0;
          right: ${isSmallMobile ? "5%" : isMobile ? "10%" : "20%"};
          width: ${isSmallMobile ? "60px" : isMobile ? "80px" : "150px"};
          height: ${isSmallMobile ? "4px" : "6px"};
          background: linear-gradient(
            90deg,
            #ff3d00 0%,
            #ff3d00 14.28%,
            #ffbc11 14.28%,
            #ffbc11 28.56%,
            #0aa87e 28.56%,
            #0aa87e 42.84%,
            #ffffff 42.84%,
            #ffffff 57.12%,
            #0aa87e 57.12%,
            #0aa87e 71.4%,
            #ffbc11 71.4%,
            #ffbc11 85.68%,
            #ff3d00 85.68%,
            #ff3d00 100%
          );
          border-radius: 3px;
        }

        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;
          pointer-events: none;
          display: ${isMobile ? "none" : "block"};
        }

        .particle {
          position: absolute;
          border-radius: 50%;
        }

        .particle-1 {
          top: 16px;
          left: 33%;
          width: 8px;
          height: 8px;
          background: #f9b91d;
          opacity: 0.6;
          animation: pulse 2s infinite;
        }

        .particle-2 {
          top: 32px;
          right: 25%;
          width: 4px;
          height: 4px;
          background: #0dc1d3;
          opacity: 0.4;
          animation: ping 1s infinite;
        }

        .particle-3 {
          bottom: 24px;
          left: 50%;
          width: 6px;
          height: 6px;
          background: #569638;
          opacity: 0.5;
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

        /* Media queries adicionales para mejor compatibilidad */
        @media screen and (max-width: 480px) {
          .header-container {
            min-height: 60px;
          }

          .header-content {
            padding: 8px 12px;
          }

          .logo {
            width: 120px;
            height: 38px;
          }
        }

        @media screen and (max-width: 360px) {
          .logo {
            width: 100px;
            height: 32px;
          }

          .hamburger-button {
            width: 36px;
            height: 36px;
          }
        }

        @media screen and (orientation: landscape) and (max-height: 500px) {
          .mobile-menu {
            max-height: calc(100vh - 50px);
          }
        }

        /* Mejoras para dispositivos Android */
        @media screen and (-webkit-min-device-pixel-ratio: 1) {
          .header-container {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }

          .mobile-menu {
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
          }
        }

        /* Soporte para pantallas de alta densidad */
        @media screen and (-webkit-min-device-pixel-ratio: 2) {
          .decorative-bar-1,
          .decorative-bar-2 {
            height: 5px;
          }
        }

        .hamburger-lines {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 18px;
          height: 14px;
        }

        .line {
          width: 100%;
          height: 2px;
          background-color: #24354b;
          border-radius: 1px;
          transition: all 0.3s ease;
        }

        .hamburger-button:hover .line {
          background-color: #1a2635;
        }
      `}</style>
    </>
  );
};

export default HeaderMenu;
