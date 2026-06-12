import "./whistle.css";
import { whyWhistleData } from "../../data/whistleData";

const WhyWhistle = () => {
  return (
    <section className="why-whistle-section">
      <div className="container">
        <h2 className="why-title">Why Whistle?</h2>

        <div className="why-grid">
          {whyWhistleData.map((item) => (
            <div key={item.id} className="why-card">
              <img src={item.image} alt={item.title} className="why-image" />

              <div className="why-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWhistle;
