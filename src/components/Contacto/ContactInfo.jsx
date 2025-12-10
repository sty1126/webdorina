import { Mail, Phone, MessageCircle, MapPin } from "lucide-react";

const iconMap = {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
};

const ContactInfo = ({ contactMethods }) => {
  // Agrupar métodos de contacto por tipo
  const groupedMethods = contactMethods.reduce((acc, method) => {
    if (!acc[method.type]) {
      acc[method.type] = [];
    }
    acc[method.type].push(method);
    return acc;
  }, {});

  const getContactLink = (method) => {
    switch (method.type) {
      case "email":
        return `mailto:${method.data}`;
      case "phone":
        return `tel:${method.data}`;
      case "whatsapp":
        return `https://wa.me/${method.data}?text=Hola,%20me%20gustaría%20comunicarme%20contigo`;
      case "location":
        return `https://maps.google.com/?q=${encodeURIComponent(method.data)}`;
      default:
        return "#";
    }
  };

  const groupOrder = ["email", "phone", "whatsapp", "location"];

  return (
    <div className="contact-section">
      <div className="contact-card">
        <h2 className="contact-title">Información de contacto</h2>
        <p className="contact-description">
          Puedes contactarnos a través de estos medios:
        </p>

        <div className="contact-methods">
          {groupOrder.map((type) => {
            if (!groupedMethods[type]) return null;

            // Obtener el primer elemento para icono y título
            const firstMethod = groupedMethods[type][0];
            const IconComponent = iconMap[firstMethod.icon];

            return (
              <div key={type} className="contact-method-group">
                <div className="method-icon">
                  {IconComponent && <IconComponent size={24} />}
                </div>
                <div className="method-content">
                  {firstMethod.title && (
                    <h3 className="method-title">{firstMethod.title}</h3>
                  )}
                  <div className="method-items">
                    {groupedMethods[type].map((method) => (
                      <a
                        key={method.id}
                        href={getContactLink(method)}
                        target={
                          method.type === "whatsapp" ? "_blank" : undefined
                        }
                        rel={
                          method.type === "whatsapp"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="method-link"
                      >
                        {method.label}
                      </a>
                    ))}
                  </div>
                  {firstMethod.hours && (
                    <p className="method-hours">{firstMethod.hours}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="contact-note">
          <p>
            <strong>Nota:</strong> Al hacer clic en cualquier opción, se abrirá
            tu cliente de correo, teléfono o WhatsApp según corresponda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
