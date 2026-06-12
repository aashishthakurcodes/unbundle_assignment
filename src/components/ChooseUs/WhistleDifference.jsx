import "./ChooseUs.css";
import differenceImg from "../../assets/whistle/Frame 2609664.svg";
import {
  differenceFeatures,
  comparisonData,
} from "../../data/whistleDifferenceData";

const WhistleDifference = () => {
  return (
    <section className="difference-section">
      <div className="container">
        {/* Top Card */}
        <div className="difference-card">
          <div className="difference-content">
            <h2>The Whistle Difference</h2>

            {differenceFeatures.map((item) => (
              <div key={item.id} className="feature-item">
                <img src={item.icon} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="difference-image">
            <img src={differenceImg} alt="Whistle Aligners" />
          </div>
        </div>

        {/* Comparison Table */}
        <div className="comparison-wrapper">
          <h2>What sets Whistle apart?</h2>

          <div className="comparison-table">
            <div className="table-header">
              <div>Features</div>
              <div className="whistle-column">Whistle</div>
              <div>Other Brands</div>
            </div>

            {comparisonData.map((item, index) => (
              <div key={index} className="table-row">
                <div>{item.feature}</div>
                <div className="whistle-column">
                  {typeof item.whistle === "boolean"
                    ? item.whistle
                      ? "✔"
                      : "✘"
                    : item.whistle}
                </div>
                <div>
                  {typeof item.other === "boolean"
                    ? item.other
                      ? "✔"
                      : item.other === false
                        ? "No, only nickel to modernize"
                        : ""
                    : item.other}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhistleDifference;
