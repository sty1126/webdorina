import { useState, useEffect } from "react";
import { Heart, ChevronRight } from "lucide-react";
import content from "../../data/inicio-content.json";

export const SurveyModal = () => {
  const [showSurveyModal, setShowSurveyModal] = useState(false);

  useEffect(() => {
    const modalTimer = setTimeout(() => {
      setShowSurveyModal(true);
    }, 1500);

    return () => clearTimeout(modalTimer);
  }, []);

  const { modal } = content;

  if (!showSurveyModal) return null;

  return (
    <div className="modal-overlay" onClick={() => setShowSurveyModal(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-icon">
          <Heart size={48} color="white" fill="white" />
        </div>

        <h2 className="modal-title">{modal.title}</h2>
        <p className="modal-description">{modal.description}</p>

        <a
          href={modal.buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="modal-button"
        >
          {modal.buttonText}
          <ChevronRight size={20} />
        </a>

        <button
          className="modal-skip"
          onClick={() => setShowSurveyModal(false)}
        >
          {modal.skipText}
        </button>
      </div>
    </div>
  );
};
