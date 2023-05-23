import ServicesFour from "../Components/Services/ServicesFour";
import ServicesTwo from "../Components/Services/ServicesTwo";
import Exchanges from "../Components/Exchanges";
import Timeline from "../Components/Timeline";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero";
import Footer from "../Components/Footer";
import FunFact from "../Components/FunFact";
import About from "../Components/About";

const Home = () => {
  return (
    <div className='font-oswald'>
      <Header />
      <Hero />
      <Exchanges />
      <FunFact />
      <About />
      <Timeline />
      <ServicesFour />
      <ServicesTwo />
      <Footer />
    </div>
  );
};

export default Home;
