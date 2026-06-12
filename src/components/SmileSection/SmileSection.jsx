import "./SmileSection.css";
import alignerImage from "../../assets/image 3.svg";

const DreamSmileSection = () => {
  return (
    <section className="dream-smile">
      <div className="dream-container">
        {/* Left Content */}
        <div className="dream-content">
          <h2>Dream smiles achieved secretly</h2>

          <p>
            Experience the superior quality of our Whistle Aligners crafted with
            3-layer PU material. With 450+ clinics nationwide, enjoy comfortable
            treatment by expert orthodontists at House of Clove.
          </p>

          <p>
            The pricing is different for every case. Cases with higher
            complexity requiring more aligners and additional time and effort
            from our dentists.
          </p>
        </div>

        {/* Right Card */}
        <div className="aligner-card">
          <div className="card-header">
            <h3>Whistle Aligners</h3>

            <img src={alignerImage} alt="Whistle Aligners" />
          </div>

          <div className="price-section">
            <p className="old-price">₹84,000</p>

            <p className="new-price">
              starting at <span>₹47,999</span>
            </p>

            <p className="tax-text">inc. of all taxes</p>
          </div>

          <div className="benefits">
            <div className="benefit">
              <span className="check">✓</span>
              Offer valid for a limited time
            </div>

            <div className="benefit">
              <span className="check">✓</span>
              Easy financing options
            </div>
          </div>

          <button className="learn-more-btn">Learn more →</button>
        </div>
      </div>
    </section>
  );
};

export default DreamSmileSection;
