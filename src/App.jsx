import ButtonGradient from "./assets/svg/ButtonGradient";
import AboutUs from "./components/aboutus";
// import AboutUs from "./components/aboutus";
import Benefits from "./components/Benefits";
import ContactForm from "./components/contactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Testimonials from "./components/testimonials";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <HeroSection/>
        <Hero />
        <Benefits />
        <AboutUs/>
        <Testimonials/>
        <Projects/>
        <ContactForm/>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
