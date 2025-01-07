
import SliderHome from "@/components/SliderHome/SliderHome";
import "./Home.css"
import ServiceSlider from "@/components/ServiceSlider/ServiceSlider";
import AnnonceComponents from "@/components/AnnonceComponents/AnnonceComponents";
import About from "@/components/About/About";
import Platform from "@/components/Platform/Platform";
export default function Home() {


  return (
    <>
      <div className="container">
        <section id="slider-home">
          <SliderHome />
        </section>
        <section id="store-section">
          <div className="title-home">
            <h2>Check nearby stores :</h2>
          </div>
          <ServiceSlider />
        </section>
        <section id="service-section">
          <div className="title-home">
            <h2>Take a look at the services web propose :</h2>
          </div>
          <ServiceSlider />
        </section>
        <section id="annonce-section">
          <AnnonceComponents />
        </section>
        <section id="about-section">
          <About />
        </section>
        <section id="platfrom-section">
          <div className="title-platfrom">
            <h2>THE PERFECT BOOKING PLATFORMS</h2>
            <p>Tested and approved</p>
          </div>
          <Platform />
        </section>

      </div>
    </>
  );
}
