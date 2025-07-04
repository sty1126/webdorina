"use client";

import { useState } from "react";
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
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const navigate = useNavigate();

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

    // Simular envío del formulario
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
                      <p className="method-text">San Basilio de Palenque</p>
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
          background: linear-gradient(135deg, #24354b 0%, #129ba5 100%);
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
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.4rem);
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin: 0;
        }

        /* Main Section */
        .main-section {
          padding: 4rem 0;
          background: #f8fafc;
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
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
        }

        .form-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .form-icon {
          color: #f9b91d;
          margin-bottom: 1rem;
        }

        .form-title {
          font-size: 1.8rem;
          font-weight: 600;
          color: #24354b;
          margin-bottom: 0.5rem;
        }

        .form-description {
          color: #64748b;
          font-size: 1rem;
          line-height: 1.6;
          margin: 0;
        }

        /* Alerts */
        .alert {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 1rem 1.25rem;
          border-radius: 8px;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }

        .alert-success {
          background: rgba(86, 150, 56, 0.1);
          color: #569638;
          border: 1px solid rgba(86, 150, 56, 0.2);
        }

        .alert-error {
          background: rgba(239, 68, 68, 0.1);
          color: #dc2626;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        /* Form Styles */
        .contact-form {
          width: 100%;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 500;
          color: #24354b;
          font-size: 0.9rem;
        }

        .form-input,
        .form-select,
        .form-textarea {
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }

        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #129ba5;
          box-shadow: 0 0 0 3px rgba(18, 155, 165, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-button {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: linear-gradient(135deg, #f9b91d, #f9b91d);
          color: white;
          padding: 16px 32px;
          border: none;
          border-radius: 50px;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(249, 185, 29, 0.4);
          margin-bottom: 1rem;
        }

        .submit-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(249, 185, 29, 0.5);
        }

        .submit-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top: 2px solid white;
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
          font-size: 0.85rem;
          color: #64748b;
          text-align: center;
          line-height: 1.5;
          margin: 0;
        }

        /* Info Section */
        .info-section {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-card,
        .participation-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          border: 1px solid #e2e8f0;
        }

        .info-title,
        .participation-title {
          font-size: 1.4rem;
          font-weight: 600;
          color: #24354b;
          margin-bottom: 1rem;
        }

        .info-description {
          color: #64748b;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-method {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .method-icon {
          width: 48px;
          height: 48px;
          background: rgba(18, 155, 165, 0.1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #129ba5;
          flex-shrink: 0;
        }

        .method-content {
          flex: 1;
        }

        .method-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: #24354b;
          margin-bottom: 0.5rem;
        }

        .method-text {
          color: #64748b;
          margin: 0;
          line-height: 1.5;
        }

        .method-text + .method-text {
          margin-top: 0.25rem;
        }

        /* Participation Steps */
        .participation-steps {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .step {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: #f9b91d;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.9rem;
          flex-shrink: 0;
        }

        .step-content {
          flex: 1;
        }

        .step-title {
          font-size: 1rem;
          font-weight: 600;
          color: #24354b;
          margin-bottom: 0.25rem;
        }

        .step-text {
          color: #64748b;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
        }

        /* Mobile Responsive - Mejorado */
        @media screen and (max-width: 768px) {
          .contacto-container {
            padding-top: 70px;
          }

          .container {
            padding: 0 16px;
          }

          .hero-section {
            padding: 2rem 0;
          }

          .hero-title {
            font-size: clamp(1.8rem, 8vw, 2.5rem);
          }

          .hero-subtitle {
            font-size: clamp(1rem, 4vw, 1.2rem);
          }

          .main-section {
            padding: 2rem 0;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-section {
            padding: 1.5rem;
            border-radius: 12px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 1rem;
            margin-bottom: 1rem;
          }

          .form-input,
          .form-select,
          .form-textarea {
            padding: 14px 16px;
            font-size: 16px; /* Evita zoom en iOS */
          }

          .submit-button {
            padding: 18px 32px;
            font-size: 1rem;
            min-height: 48px; /* Mejor accesibilidad táctil */
          }

          .info-card,
          .participation-card {
            padding: 1.5rem;
          }

          .contact-method {
            flex-direction: row;
            align-items: flex-start;
          }

          .method-icon {
            width: 44px;
            height: 44px;
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
            padding: 1.5rem 0;
          }

          .hero-title {
            font-size: clamp(1.5rem, 7vw, 2rem);
            margin-bottom: 1rem;
          }

          .hero-subtitle {
            font-size: clamp(0.9rem, 4vw, 1.1rem);
          }

          .form-section {
            padding: 1rem;
            margin: 0;
          }

          .form-header {
            margin-bottom: 1.5rem;
          }

          .form-title {
            font-size: 1.4rem;
          }

          .form-icon {
            width: 28px;
            height: 28px;
          }

          .form-group {
            margin-bottom: 1rem;
          }

          .form-input,
          .form-select,
          .form-textarea {
            padding: 16px;
            font-size: 16px;
            border-radius: 6px;
          }

          .form-textarea {
            min-height: 100px;
          }

          .submit-button {
            padding: 20px 24px;
            font-size: 1rem;
            min-height: 52px;
            border-radius: 26px;
          }

          .info-card,
          .participation-card {
            padding: 1rem;
          }

          .contact-method {
            gap: 0.75rem;
          }

          .method-icon {
            width: 40px;
            height: 40px;
          }

          .method-title {
            font-size: 1rem;
          }

          .method-text {
            font-size: 0.9rem;
          }

          .step {
            gap: 0.75rem;
          }

          .step-number {
            width: 28px;
            height: 28px;
            font-size: 0.8rem;
          }
        }

        @media screen and (max-width: 360px) {
          .container {
            padding: 0 8px;
          }

          .form-section {
            padding: 0.75rem;
          }

          .hero-title {
            font-size: clamp(1.3rem, 6vw, 1.8rem);
          }

          .form-input,
          .form-select,
          .form-textarea {
            padding: 14px 12px;
          }

          .submit-button {
            padding: 18px 20px;
            font-size: 0.95rem;
          }

          .info-card,
          .participation-card {
            padding: 0.75rem;
          }
        }

        /* Mejoras específicas para dispositivos táctiles */
        @media (hover: none) and (pointer: coarse) {
          .form-input,
          .form-select,
          .form-textarea {
            min-height: 44px; /* Tamaño mínimo recomendado para táctil */
          }

          .submit-button:hover {
            transform: none; /* Desactivar hover en dispositivos táctiles */
          }

          .submit-button:active {
            transform: scale(0.98);
          }
        }

        /* Orientación landscape en móviles */
        @media screen and (max-width: 768px) and (orientation: landscape) {
          .hero-section {
            padding: 1rem 0;
          }

          .main-section {
            padding: 1.5rem 0;
          }
        }

        /* Mejoras para accesibilidad en móviles */
        @media screen and (max-width: 768px) {
          .form-label {
            font-size: 0.95rem;
            margin-bottom: 0.5rem;
          }

          .alert {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }

          .form-disclaimer {
            font-size: 0.8rem;
            padding: 0 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contacto;
