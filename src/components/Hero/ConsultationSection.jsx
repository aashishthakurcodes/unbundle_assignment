import "./ConsultationSection.css";
import cloveLogo from "../../assets/clove logo.svg";

const ConsultationSection = () => {
  return (
    <>
      <section className="consultation">
        <div className="consultation-left">
          <h2>
            Book a Free 3D Teeth Scan and Orthodontist Consult in a Clove Dental
            Clinic near you.
          </h2>
        </div>

        <div className="consultation-right">
          <img src={cloveLogo} alt="Clove Dental" className="clove-logo" />

          <button className="clinic-btn">
            Find Clinic
            <span>⌄</span>
          </button>
        </div>
      </section>

      <div className="benefit-strip">
        <div className="benefit-track">
          <div className="benefit-item">
            <strong>Free teeth scan</strong>
            <span> worth ₹500</span>
          </div>

          <div className="benefit-item">
            <strong>Free orthodontic consultation</strong>
            <span> worth ₹1500</span>
          </div>

          <div className="benefit-item">Our inaugural launch benefit</div>

          <div className="benefit-item">
            <strong>Free teeth scan</strong>
            <span> worth ₹500</span>
          </div>

          {/* Duplicate items for seamless looping */}
          <div className="benefit-item">
            <strong>Free teeth scan</strong>
            <span> worth ₹500</span>
          </div>

          <div className="benefit-item">
            <strong>Free orthodontic consultation</strong>
            <span> worth ₹1500</span>
          </div>

          <div className="benefit-item">Our inaugural launch benefit</div>

          <div className="benefit-item">
            <strong>Free teeth scan</strong>
            <span> worth ₹500</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultationSection;
