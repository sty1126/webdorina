import React, { useState } from "react";
import { Send } from "lucide-react";

export default function CitizenSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="documentos-citizen-section">
      <h2 className="documentos-citizen-title">
        ¿Tienes una propuesta ciudadana?
      </h2>
      <p className="documentos-citizen-text">
        Como representante del pueblo, estoy comprometida con escuchar y
        canalizar las propuestas de la ciudadanía. Si tienes una idea o
        propuesta que consideras importante para nuestra región, no dudes en
        contactarme.
      </p>
      <button
        className={`documentos-citizen-button ${
          isHovered ? "documentos-citizen-button-hovered" : ""
        }`}
        onClick={() =>
          window.open("mailto:contacto@dorinahernandez.gov.co", "_blank")
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Send className="documentos-citizen-button-icon-left" />
        Enviar propuesta ciudadana
      </button>
    </div>
  );
}
