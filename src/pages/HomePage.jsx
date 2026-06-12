import Hero from "../components/Hero/Hero";

import ConsultationSection from "../components/Hero/ConsultationSection";
import DreamSmileSection from "../components/SmileSection/SmileSection";
import Results from "../components/Results/Results";
import WhyWhistle from "../components/Whistle/WhyWhistle";
import WhistleDifference from "../components/ChooseUs/WhistleDifference";
import DoctorLedSection from "../components/DoctorLeadSection/Doctorlead";
import FaqFooter from "../components/footer/footer";

const Home = () => {
  return (
    <>
      <Hero />
      <ConsultationSection />
      <DreamSmileSection />
      <Results />
      <WhyWhistle />
      <WhistleDifference />
      <DoctorLedSection />
      <FaqFooter />
    </>
  );
};

export default Home;
