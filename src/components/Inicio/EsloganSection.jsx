import content from "../../data/inicio-content.json";

export const EsloganSection = () => {
  const { eslogan } = content;

  return (
    <section className="eslogan-section">
      <div className="container">
        <h2 className="eslogan-title">{eslogan.title}</h2>
      </div>
    </section>
  );
};
