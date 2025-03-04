import "./SeviceDetails.css";
import ServiceSlider from "@/components/ServiceSlider/ServiceSlider";
import localisation from "../../assets/localisation.png";
import img1 from "../../assets/service3.png";
import img2 from "../../assets/service2.png";
import img3 from "../../assets/service.png";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getServicesById } from "@/services/servics";

const fakeService = {
  title: "Coiffure Homme",
  salon: "HMR Studio",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  price: "500 DZD",
  images: [img1, img2, img3, img1],
  openingHours: {
    Dimanche: "9:00 - 22:00",
    Lundi: "9:00 - 22:00",
    Mardi: "9:00 - 22:00",
    Mercredi: "9:00 - 22:00",
    Jeudi: "9:00 - 22:00",
    Vendredi: "Fermé",
    Samedi: "Fermé",
  },
}


export default function SeviceDetails() {
  const { id } = useParams()
  const [service, setService] = useState({})
  useEffect(() => {
    getServicesById(id).then((res) => {
      setService(res.data)

    }).catch((err) => {
      console.log(err);

    })
  }, [id])


  return (
    <section id="service-details">
      <div className="service-titles">
        <h1>{fakeService.title}</h1>
        <h2>
          Chez : <span>{fakeService.salon}</span>
        </h2>
      </div>

      <div>
        <div className="service-details">
          <div className="service-details-left">
            <img
              src={service.images?.Image[0].url}
              alt="Service Banner"
              className="img-service-banner"
            />
            <div className="service-details-imgs">
              {service.images?.Image.map((img, index) => (
                <img key={index} src={img.url} alt={`Service ${index}`} />
              ))}
            </div>
            <div className="localisation-service">
              <h2>Localisation :</h2>
              <img src={localisation} alt="Localisation" />
            </div>
          </div>

          <div className="service-details-right">
            <div className="info-hours-container">
              <div className="info-box">
                <h3>Information générale</h3>
                <p>
                  <strong>Description :</strong>
                </p>
                <p>{service.description}</p>
                <p>
                  <strong>Prix :</strong>
                </p>
                <p className="price">{service.price}</p>
                <Link to={`/Reservation/${service.ownerId}/${service.id}`}>
                  <button>Réservez votre place</button>
                </Link>


              </div>

              <div className="hours-box">
                <h3>Horaires d’ouverture</h3>
                <ul>
                  {Object.entries(fakeService.openingHours).map(
                    ([day, hours]) => (
                      <li
                        key={day}
                        className={hours === "Fermé" ? "closed" : ""}
                      >
                        <strong>{day}</strong> <span>{hours}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="localisation-service loccc">
          <h2>Nos services :</h2>
          <div className="loccc2">
            <ServiceSlider isServiceDetails={true} />
          </div>
        </div>
      </div>
    </section>
  );
}
