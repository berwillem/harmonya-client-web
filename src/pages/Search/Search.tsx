import ServicesCard from "@/components/ServicesCard/ServicesCard";
import "./Search.css";

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
  ];
  return (
    <>
      {services.map((service, index) => (
        <ServicesCard
          key={index}
          imageSrc={service.imageSrc}
          title={service.title}
          description={service.description}
          tags={service.tags}
        />
      ))}{" "}
    </>
  );
}
