import ServicesCard from "@/components/ServicesCard/ServicesCard";
import "./Search.css";
import { ServerCapabilities } from "mongodb";
import { MdTune } from "react-icons/md";

export default function Search() {
  const services = [
    {
      imageSrc:
        "https://img.pikbest.com/origin/10/04/79/388pIkbEsTzJx.jpg!w700wp   ",
      title: "Coiffure homme",
      description: "Lorem Ipsum is simply dummy text of the printing and ...",
      tags: ["SPA", "Salon de coiffure"],
    },
    {
      imageSrc:
        "https://thethrivewellness.com/storage/2023/11/Massage-by-Thrive-Wellness-in-Chattanooga-TN.jpeg",
      title: "Massage Therapy",
      description: "Relax and rejuvenate with our expert therapists.",
      tags: ["SPA", "Wellness"],
    },

    {
      imageSrc:
        "https://img.pikbest.com/origin/10/04/79/388pIkbEsTzJx.jpg!w700wp   ",
      title: "Coiffure homme",
      description: "Lorem Ipsum is simply dummy text of the printing and ...",
      tags: ["SPA", "Salon de coiffure"],
    },

    {
      imageSrc:
        "https://img.pikbest.com/origin/10/04/79/388pIkbEsTzJx.jpg!w700wp   ",
      title: "Coiffure homme",
      description: "Lorem Ipsum is simply dummy text of the printing and ...",
      tags: ["SPA", "Salon de coiffure"],
    },
    {
      imageSrc:
        "https://thethrivewellness.com/storage/2023/11/Massage-by-Thrive-Wellness-in-Chattanooga-TN.jpeg",
      title: "Massage Therapy",
      description: "Relax and rejuvenate with our expert therapists.",
      tags: ["SPA", "Wellness"],
    },

    {
      imageSrc:
        "https://img.pikbest.com/origin/10/04/79/388pIkbEsTzJx.jpg!w700wp   ",
      title: "Coiffure homme",
      description: "Lorem Ipsum is simply dummy text of the printing and ...",
      tags: ["SPA", "Salon de coiffure"],
    },
    {
      imageSrc:
        "https://img.pikbest.com/origin/10/04/79/388pIkbEsTzJx.jpg!w700wp   ",
      title: "Coiffure homme",
      description: "Lorem Ipsum is simply dummy text of the printing and ...",
      tags: ["SPA", "Salon de coiffure"],
    },
    {
      imageSrc:
        "https://thethrivewellness.com/storage/2023/11/Massage-by-Thrive-Wellness-in-Chattanooga-TN.jpeg",
      title: "Massage Therapy",
      description: "Relax and rejuvenate with our expert therapists.",
      tags: ["SPA", "Wellness"],
    },
    {
      imageSrc:
        "https://thethrivewellness.com/storage/2023/11/Massage-by-Thrive-Wellness-in-Chattanooga-TN.jpeg",
      title: "Massage Therapy",
      description: "Relax and rejuvenate with our expert therapists.",
      tags: ["SPA", "Wellness"],
    },
  ];
  return (
    <section className="search-page">
      <div className="search-page-filters">
        <h1>Trouvez le service qui vous convient le mieux</h1>
        <div className="search-page-filters-tags">
          <button className="search-page-filters-tag">
            <MdTune />
            Filters
          </button>
          <button className="search-page-filters-tag">SPA</button>
          <button className="search-page-filters-tag">Salon de coiffure</button>
          <button className="search-page-filters-tag">Wellness</button>
        </div>
      </div>
      <div className="search-page-results">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
            tags={service.tags}
          />
        ))}
      </div>
    </section>
  );
}
