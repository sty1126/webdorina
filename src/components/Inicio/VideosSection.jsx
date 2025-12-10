import content from "../../data/inicio-content.json";

export const VideosSection = () => {
  const { videos } = content;

  return (
    <section className="videos-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Videos Destacados</div>
          <h2 className="section-title white">Mi Trabajo en el Congreso</h2>
          <p className="section-subtitle">
            Conoce más sobre mis propuestas y gestiones
          </p>
        </div>

        <div className="videos-grid">
          {videos.map((video, index) => (
            <div key={index} className="video-card">
              <div className="video-embed">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="video-info">
                <a
                  href={`https://www.youtube.com/watch?v=${video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="video-link"
                >
                  <h3 className="video-title">{video.title}</h3>
                </a>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
