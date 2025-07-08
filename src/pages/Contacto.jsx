"use client";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  User,
  Building,
  FileText,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    ciudad: "",
    tema: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const temaOptions = [
    { value: "", label: "Selecciona un tema" },
    { value: "propuesta", label: "Propuesta" },
    { value: "queja", label: "Queja" },
    { value: "pregunta", label: "Pregunta" },
    { value: "otro", label: "Otro" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({
        nombre: "",
        correo: "",
        telefono: "",
        ciudad: "",
        tema: "",
        mensaje: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.nombre && formData.correo && formData.mensaje && formData.tema;

  return (
    <div className="contacto-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Participa / Contáctanos</h1>
            <p className="hero-subtitle">
              Tu voz es importante. Comparte tus ideas, propuestas o inquietudes
              para fortalecer nuestro trabajo político.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="main-section">
        <div className="container">
          <div className="content-grid">
            {/* Contact Form */}
            <div className="form-section">
              <div className="form-header">
                <MessageSquare size={32} className="form-icon" />
                <h2 className="form-title">Envíanos tu mensaje</h2>
                <p className="form-description">
                  Completa el formulario y nos pondremos en contacto contigo lo
                  antes posible.
                </p>
              </div>

              {submitStatus === "success" && (
                <div className="alert alert-success">
                  <CheckCircle size={20} />
                  <span>
                    ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="alert alert-error">
                  <AlertCircle size={20} />
                  <span>
                    Hubo un error al enviar el mensaje. Por favor, inténtalo de
                    nuevo.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre" className="form-label">
                      <User size={16} />
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="correo" className="form-label">
                      <Mail size={16} />
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      value={formData.correo}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="telefono" className="form-label">
                      <Phone size={16} />
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ciudad" className="form-label">
                      <Building size={16} />
                      Ciudad / Comunidad
                    </label>
                    <input
                      type="text"
                      id="ciudad"
                      name="ciudad"
                      value={formData.ciudad}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Tu ciudad o comunidad"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="tema" className="form-label">
                    <FileText size={16} />
                    Tema de tu mensaje *
                  </label>
                  <select
                    id="tema"
                    name="tema"
                    value={formData.tema}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    {temaOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje" className="form-label">
                    <MessageSquare size={16} />
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    className="form-textarea"
                    placeholder="Escribe tu mensaje aquí..."
                    rows={6}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Enviar mensaje
                    </>
                  )}
                </button>

                <p className="form-disclaimer">
                  * Campos obligatorios. Tu información será tratada
                  confidencialmente de acuerdo con nuestra política de
                  privacidad.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="info-section">
              <div className="info-card">
                <h3 className="info-title">Información de contacto</h3>
                <p className="info-description">
                  También puedes contactarnos directamente a través de estos
                  medios:
                </p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">
                      <Mail size={24} />
                    </div>
                    <div className="method-content">
                      <h4 className="method-title">Correo electrónico</h4>
                      <p className="method-text">
                        contacto@dorinahernandez.com
                      </p>
                      <p className="method-text">info@dorinahernandez.com</p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <Phone size={24} />
                    </div>
                    <div className="method-content">
                      <h4 className="method-title">Teléfono</h4>
                      <p className="method-text">+57 (5) 123-4567</p>
                      <p className="method-text">
                        Lunes a Viernes: 8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <MapPin size={24} />
                    </div>
                    <div className="method-content">
                      <h4 className="method-title">Ubicación</h4>
                      <p className="method-text">Bogotá, Colombia</p>
                      <p className="method-text">Bolívar, Colombia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="participation-card">
                <h3 className="participation-title">¿Cómo participar?</h3>
                <div className="participation-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4 className="step-title">Comparte tu idea</h4>
                      <p className="step-text">
                        Envíanos tus propuestas para mejorar nuestras
                        comunidades
                      </p>
                    </div>
                  </div>

                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4 className="step-title">Revisamos tu propuesta</h4>
                      <p className="step-text">
                        Nuestro equipo analiza cada mensaje recibido
                      </p>
                    </div>
                  </div>

                  <div className="step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4 className="step-title">Te contactamos</h4>
                      <p className="step-text">
                        Nos ponemos en contacto para dar seguimiento
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

        .contacto-container {
          width: 100vw;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          padding-top: 80px;
          overflow-x: hidden;
          position: relative;
          font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          box-sizing: border-box;
          background: linear-gradient(135deg, #e6f3ff 0%, #f0f9ff 100%);
        }

        * {
          box-sizing: border-box;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          width: 100%;
          box-sizing: border-box;
        }

        /* Hero Section */
        .hero-section {
          background: linear-gradient(135deg, #103a99 0%, #0dc1d3 100%);
          padding: 4rem 0;
          position: relative;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.1);
          z-index: 0;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 700;
          color: white;
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.6;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        /* Main Section */
        .main-section {
          padding: 4rem 0;
          background: linear-gradient(135deg, #e6f3ff 0%, #f0f9ff 100%);
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        /* Form Section */
        .form-section {
          background: white;
          border-radius: 24px;
          padding: 3rem;
          box-shadow: 0 20px 40px rgba(16, 58, 153, 0.15);
          border: 2px solid rgba(13, 193, 211, 0.85);
          position: relative;
          overflow: hidden;
        }

        .form-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(
            135deg,
            rgba(16, 58, 153, 0.9) 0%,
            rgba(13, 193, 211, 0.9) 100%
          );
        }

        .form-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .form-icon {
          color: #0dc1d3;
          margin-bottom: 1rem;
          filter: drop-shadow(0 4px 8px rgba(13, 193, 211, 0.3));
        }

        .form-title {
          font-size: 2rem;
          font-weight: 700;
          color: rgba(16, 58, 153, 0.85);
          margin-bottom: 0.75rem;
        }

        .form-description {
          color: #64748b;
          font-size: 1.1rem;
          line-height: 1.6;
          margin: 0;
        }

        /* Alerts */
        .alert {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 1.25rem 1.5rem;
          border-radius: 16px;
          margin-bottom: 2rem;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .alert-success {
          background: linear-gradient(
            135deg,
            rgba(86, 150, 56, 0.15) 0%,
            rgba(86, 150, 56, 0.05) 100%
          );
          color: #569638;
          border: 2px solid #569638;
        }

        .alert-error {
          background: linear-gradient(
            135deg,
            rgba(255, 31, 41, 0.15) 0%,
            rgba(255, 31, 41, 0.05) 100%
          );
          color: #ff1f29;
          border: 2px solid #ff1f29;
        }

        /* Form Styles */
        .contact-form {
          width: 100%;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
          color: rgba(16, 58, 153, 0.85);
          font-size: 1rem;
        }

        .form-input,
        .form-select,
        .form-textarea {
          padding: 16px 20px;
          border: 2px solid rgba(13, 193, 211, 0.6);
          border-radius: 12px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
          background: white;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: rgba(16, 58, 153, 0.8);
          box-shadow: 0 0 0 3px rgba(16, 58, 153, 0.15);
          transform: translateY(-2px);
        }

        .form-textarea {
          resize: vertical;
          min-height: 140px;
        }

        .submit-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(
            135deg,
            rgba(16, 58, 153, 0.9) 0%,
            rgba(13, 193, 211, 0.9) 100%
          );
          color: white;
          padding: 20px 40px;
          border: none;
          border-radius: 50px;
          font-size: 1.2rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 12px 30px rgba(16, 58, 153, 0.3);
          margin-top: 1rem;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px rgba(13, 193, 211, 0.5);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .form-disclaimer {
          font-size: 0.9rem;
          color: #64748b;
          text-align: center;
          line-height: 1.5;
          margin: 0;
        }

        /* Info Section */
        .info-section {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .info-card,
        .participation-card {
          background: white;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 15px 35px rgba(16, 58, 153, 0.12);
          border: 2px solid rgba(13, 193, 211, 0.85);
        }

        .info-title,
        .participation-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: rgba(16, 58, 153, 0.85);
          margin-bottom: 1.25rem;
        }

        .info-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          font-size: 1.05rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-method {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        .method-icon {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #0dc1d3 0%, #103a99 100%);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
          box-shadow: 0 8px 20px rgba(13, 193, 211, 0.3);
        }

        .method-content {
          flex: 1;
        }

        .method-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: rgba(16, 58, 153, 0.85);
          margin-bottom: 0.75rem;
        }

        .method-text {
          color: #64748b;
          margin: 0;
          line-height: 1.5;
          font-size: 1rem;
        }

        .method-text + .method-text {
          margin-top: 0.5rem;
        }

        /* Participation Steps */
        .participation-steps {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .step {
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
        }

        .step-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #0dc1d3 0%, #103a99 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 1.1rem;
          flex-shrink: 0;
          box-shadow: 0 6px 15px rgba(13, 193, 211, 0.4);
        }

        .step-content {
          flex: 1;
        }

        .step-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: rgba(16, 58, 153, 0.85);
          margin-bottom: 0.5rem;
        }

        .step-text {
          color: #64748b;
          font-size: 1rem;
          line-height: 1.5;
          margin: 0;
        }

        /* Mobile Responsive */
        @media screen and (max-width: 768px) {
          .contacto-container {
            padding-top: 70px;
          }

          .container {
            padding: 0 16px;
          }

          .hero-section {
            padding: 2.5rem 0;
          }

          .main-section {
            padding: 2.5rem 0;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .form-section {
            padding: 2rem;
            border-radius: 16px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            margin-bottom: 1.5rem;
          }

          .form-input,
          .form-select,
          .form-textarea {
            padding: 18px 16px;
            font-size: 16px;
          }

          .submit-button {
            padding: 22px 32px;
            font-size: 1.1rem;
            min-height: 56px;
          }

          .info-card,
          .participation-card {
            padding: 2rem;
            border-radius: 16px;
          }

          .method-icon {
            width: 48px;
            height: 48px;
          }

          .step-number {
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }
        }

        @media screen and (max-width: 480px) {
          .contacto-container {
            padding-top: 60px;
          }

          .container {
            padding: 0 12px;
          }

          .hero-section {
            padding: 2rem 0;
          }

          .form-section {
            padding: 1.5rem;
          }

          .form-header {
            margin-bottom: 2rem;
          }

          .form-title {
            font-size: 1.6rem;
          }

          .submit-button {
            padding: 20px 24px;
            font-size: 1rem;
            min-height: 52px;
          }

          .info-card,
          .participation-card {
            padding: 1.5rem;
          }
        }

        @media screen and (max-width: 360px) {
          .container {
            padding: 0 8px;
          }

          .form-section {
            padding: 1rem;
          }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .form-input,
          .form-select,
          .form-textarea {
            min-height: 48px;
          }

          .submit-button:hover {
            transform: none;
          }

          .submit-button:active {
            transform: scale(0.98);
          }
        }
      `}</style>
    </div>
  );
};

export default Contacto;
