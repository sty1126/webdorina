const ContactoHeader = ({ data }) => {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{data.title}</h1>
          <p className="hero-subtitle">{data.subtitle}</p>
        </div>
      </div>
    </section>
  );
};

export default ContactoHeader;
