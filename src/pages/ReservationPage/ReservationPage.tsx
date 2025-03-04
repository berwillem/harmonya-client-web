import Agenda from "@/components/Agenda/Agenda";
import NavTop from "@/components/NavTop/NavTop";
import "./ReservationPage.css"
const fakeService = {
  title: "Coiffure Homme",
  salon: "HMR Studio",
};
export default function ReservationPage() {

  return (
    <div className="reservation-page">
      <NavTop />
      <div className="service-titles">
        <h1>{fakeService.title}</h1>
        <h2>
          Chez : <span>{fakeService.salon}</span>
        </h2>
      </div>
      <Agenda />
    </div>
  )
}
