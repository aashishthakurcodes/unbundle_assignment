import "./lead.css";

import doctorImg from "../../assets/results/Rectangle 3022.svg";
import demoImg from "../../assets/results/Frame 2609714.svg";
import happyImg from "../../assets/results/Whistle happymonials 1.svg";

const DoctorLedSection = () => {
  const stepsData = [
    {
      id: 1,
      title: "Scan",
      description:
        "We use an AI-powered scanner to take a detailed 3D image of your teeth.",
    },
    {
      id: 2,
      title: "Plan",
      description:
        "Our Orthodontists design your customised smile enhancement plan.",
    },
    {
      id: 3,
      title: "Fabricate",
      description:
        "We manufacture your custom aligners leveraging 3D printing technology.",
    },
    {
      id: 4,
      title: "Wear",
      description:
        "Your Whistle Aligners and expert team guide your progress across the journey.",
    },
  ];

  const doctorSectionData = {
    title: "We are Doctor-led, not direct-to-consumers",
    description:
      "We don't offer direct-to-consumer invisible aligners. We trust you in a Dental Clinic with an Orthodontist. Aligners are just the beginning; we ensure comprehensive treatment in over 450+ clinics nationwide.",
    buttonText: "Get a Callback",
    image: doctorImg,
  };

  return (
    <section className="doctor-section">
      <div className="container">
        {/* Steps Card */}

        <div className="steps-card">
          <div className="steps-content">
            <h2>
              Get your perfect smile in
              <br />
              four simple steps
            </h2>

            <div className="steps-grid">
              {stepsData.map((step) => (
                <div key={step.id} className="step-item">
                  <div className="step-number">{step.id}</div>

                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="video-box">
            <img src={demoImg} alt="Video Thumbnail" />

            <button className="play-btn">▶</button>
          </div>
        </div>

        {/* Doctor Section */}

        <div className="doctor-card">
          <div className="doctor-content">
            <h2>{doctorSectionData.title}</h2>

            <p>{doctorSectionData.description}</p>

            <button>{doctorSectionData.buttonText}</button>
          </div>

          <div className="doctor-image">
            <img src={doctorSectionData.image} alt="Doctor" />
          </div>
        </div>

        {/* { Happy Smiler} */}
        <div className="whistle-header">
          <div className="whistle-title">
            <h2>The Whistle Difference</h2>
          </div>

          <div className="whistle-image">
            <img src={happyImg} alt="Whistle Difference" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorLedSection;
