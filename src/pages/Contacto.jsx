import { useEffect } from "react";
import ContactoHeader from "../components/Contacto/ContactoHeader";
import ContactInfo from "../components/Contacto/ContactInfo";
import ParticipationSection from "../components/Contacto/ParticipationSection";
import contactData from "../data/contacto-content.json";
import "../styles/contacto.css";

const Contacto = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contacto-container">
      <ContactoHeader data={contactData.page} />
      <section className="main-section">
        <div className="container">
          <div className="content-grid">
            <ContactInfo contactMethods={contactData.contactMethods} />
            <ParticipationSection steps={contactData.participationSteps} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
