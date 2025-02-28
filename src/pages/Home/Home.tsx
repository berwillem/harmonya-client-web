import SliderHome from "@/components/SliderHome/SliderHome";
import "./Home.css";
import ServiceSlider from "@/components/ServiceSlider/ServiceSlider";
import AnnonceComponents from "@/components/AnnonceComponents/AnnonceComponents";
import About from "@/components/About/About";
import Platform from "@/components/Platform/Platform";
import InfoBoard from "@/components/InfoBoard/InfoBoard";
import ServicesTitle from "@/components/ServicesTitle/servicesTitle";
export default function Home() {
  return (
    <>
      <div className="container">
        <section id="slider-home">
          <SliderHome />
        </section>

        <section id="service-section">
          <div className="title-home">
            <h2>Les service proposés sur Harmonya</h2>
          </div>
          <ServicesTitle />
        </section>
        <section id="store-section">
          <div className="title-home">
            <h2>Check nearby stores :</h2>
          </div>
          <ServiceSlider isServiceDetails={false} />
        </section>
        <section id="service-section">
          <div className="title-home">
            <h2>Take a look at the services web propose :</h2>
          </div>
          <ServiceSlider isServiceDetails={false} />
        </section>
        <section id="annonce-section">
          <AnnonceComponents />
        </section>
        <section id="about-section">
          <About />
        </section>

        <section id="stats-section">
          <InfoBoard />
        </section>
      </div>
    </>
  );
}
