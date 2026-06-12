import "./Hero.css";
import logo from "../../assets/image 1.svg";
import heroImg from "../../assets/AI-Expand-Pranav (9) 2.svg";

const Hero = () => {
  return (
    <>
      {/* Header */}
      <header className="header">
        <img src={logo} alt="Whistle Logo" className="logo" />

        <button className="call-btn">📞</button>
      </header>

      {/* Offer Bar */}
      <div className="offer-bar">
        <p>
          Starting at <span className="strike">Rs 69,999</span> Rs 47,999.
          Hurry! Offer ends soon.
        </p>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Invisible Aligners for a dream smile</h1>

          <p>
            Book a Scan and avail a free
            <br />
            Orthodontist Consult
            <span> worth ₹1500</span>
          </p>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Smile Model" />
        </div>
      </section>
    </>
  );
};

export default Hero;
