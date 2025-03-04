import SliderHome from "@/components/SliderHome/SliderHome";
import "./Home.css";
import ServiceSlider from "@/components/ServiceSlider/ServiceSlider";
import AnnonceComponents from "@/components/AnnonceComponents/AnnonceComponents";
import About from "@/components/About/About";
import ServicesTitle from "../../components/ServicesTitle/ServicesTitle";
import InfoBoard from "@/components/InfoBoard/InfoBoard";
import { getAllStores } from "@/services/stores";
import { useEffect, useState } from "react";
import { getAllServices } from "@/services/servics";
import { SliderCardType } from "@/utils/types";

export default function Home() {
  const [stores, setStores] = useState<SliderCardType[]>([]);
  const [services, setServices] = useState<SliderCardType[]>([]);

  useEffect(() => {
    getAllStores()
      .then((res) => {
        console.log(res.data.data);
        const curated: SliderCardType[] = res.data.data.map(
          (store: any): SliderCardType => {
            return {
              imageSrc: store.images.Image[0]?.url,
              title: store.name,
              description: store.description,
              tags: [],
            };
          }
        );
        console.log(curated);
        setStores(curated);
      })
      .catch((err) => {
        console.log(err);
      });
    getAllServices()
      .then((res) => {
        const curated: SliderCardType[] = res.data.map(
          (service: any): SliderCardType => {
            return {
              imageSrc: service.images[0]?.url,
              title: service.title,
              description: service.description,
              tags: service.subcategories,
              data: service
            };
          }
        );
        setServices(curated);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <ServiceSlider isServiceDetails={false} data={stores} />
        </section>
        <section id="service-section">
          <div className="title-home">
            <h2>Take a look at the services web propose :</h2>
          </div>
          <ServiceSlider isServiceDetails={false} data={services} />
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
