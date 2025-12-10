import { Facebook, Instagram } from "lucide-react";
import content from "../../data/inicio-content.json";

export const SocialSection = () => {
  const { socialMedia } = content;

  return (
    <section className="social-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title white">Sígueme en Redes Sociales</h2>
          <p className="section-subtitle">
            Mantente al día con mi trabajo y propuestas
          </p>
        </div>

        <div className="social-grid">
          {/* Facebook Embed */}
          <div className="social-card">
            <div className="social-header">
              <Facebook size={20} style={{ color: "#1877F2" }} />
              <h3 className="social-title">Facebook</h3>
            </div>
            <div className="social-embed">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fweb.facebook.com%2Fphoto.php%3Ffbid%3D10021079351332977%26set%3Da.2588583361249317%26type%3D3&show_text=true&width=500"
                width="100%"
                height="100%"
                style={{
                  border: "none",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>

          {/* Instagram Embed */}
          <div className="social-card">
            <div className="social-header">
              <Instagram size={20} style={{ color: "#E4405F" }} />
              <h3 className="social-title">Instagram</h3>
            </div>
            <div className="social-embed">
              <div className="instagram-placeholder">
                <div className="instagram-content">
                  <div className="instagram-header">
                    <div className="instagram-avatar" />
                    <div className="instagram-info">
                      <div className="instagram-username" />
                      <div className="instagram-location" />
                    </div>
                  </div>
                  <div className="instagram-image" />
                  <div className="instagram-actions">
                    <Instagram size={24} style={{ color: "#E4405F" }} />
                    <span>Ver en Instagram</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
