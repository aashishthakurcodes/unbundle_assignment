import "./Result.css";
import { resultsData } from "../../data/resultData";

const Results = () => {
  return (
    <section className="results-section">
      <div className="container">
        <h2 className="results-title">Results You'll Love</h2>

        <div className="results-grid">
          {resultsData.map((item) => (
            <div key={item.id} className="result-card">
              <img
                src={item.image}
                alt={item.concern}
                className="result-image"
              />

              <div className="result-info">
                <div className="info-row">
                  <span>Concern</span>
                  <span>{item.concern}</span>
                </div>

                <div className="info-row">
                  <span>Treatment Duration</span>
                  <span>{item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
