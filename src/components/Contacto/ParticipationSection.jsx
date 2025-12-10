const ParticipationSection = ({ steps }) => {
  return (
    <div className="participation-section">
      <div className="participation-card">
        <h2 className="participation-title">¿Cómo participar?</h2>
        <div className="participation-steps">
          {steps.map((step) => (
            <div key={step.number} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-text">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParticipationSection;
