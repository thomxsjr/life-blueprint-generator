import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeaturesSection"
import AboutUsSection from "../components/AboutUsSection"
import Footer from "../components/Footer"

const Welcome = () => {
  return (
    <>
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="about-us">
        <AboutUsSection />
      </div>
      <div id="future-updates">
        <FeaturesSection />
      </div>
      <Footer />
    </>
  )
}

export default Welcome;
