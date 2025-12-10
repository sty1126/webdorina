import { Mail, Phone, MapPin } from "lucide-react";
import { getSocialIcons } from "../../utils/iconUtils";
import content from "../../data/inicio-content.json";

export const Footer = () => {
  const { footer, socialMedia } = content;
  const socialIcons = getSocialIcons();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">{footer.contact.title}</h3>
            <div className="footer-links">
              <div className="footer-link">
                <Mail size={16} style={{ color: "#f9b91d" }} />
                <span>{footer.contact.email}</span>
              </div>
              <div className="footer-link">
                <Phone size={16} style={{ color: "#f9b91d" }} />
                <span>{footer.contact.phone}</span>
              </div>
              <div className="footer-link">
                <MapPin size={16} style={{ color: "#f9b91d" }} />
                <span>{footer.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3 className="footer-title">Redes Sociales</h3>
            <div className="footer-social">
              {socialMedia.map((social, index) => {
                const IconComponent = socialIcons[social.icon];
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-icon"
                    style={{ "--social-color": social.color }}
                  >
                    <IconComponent size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h3 className="footer-title">Legal</h3>
            <div className="footer-links">
              {footer.legal.map((item, index) => (
                <a key={index} href="#" className="footer-legal-link">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} {footer.copyright}
            <br />
            <span className="footer-highlight">{footer.highlight}</span>
          </p>
        </div>
      </div>

      <div className="footer-flag" />
    </footer>
  );
};
