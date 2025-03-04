import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import "./ServiceSlider.css";

// import required modules

import { Autoplay } from "swiper/modules";
import ServicesCard from "../ServicesCard/ServicesCard";
export default function ServiceSlider({ isServiceDetails, data }) {
  // const services = [
  //   {
  //     imageSrc:
  //       "https://img.pikbest.com/origin/10/04/79/388pIkbEsTzJx.jpg!w700wp   ",
  //     title: "Coiffure homme",
  //     description: "Lorem Ipsum is simply dummy text of the printing and ...",
  //     tags: ["SPA", "Salon de coiffure"],
  //   },
  //   {
  //     imageSrc:
  //       "https://img.pikbest.com/origin/10/04/79/388pIkbEsTzJx.jpg!w700wp   ",
  //     title: "Coiffure homme",
  //     description: "Lorem Ipsum is simply dummy text of the printing and ...",
  //     tags: ["SPA", "Salon de coiffure"],
  //   },
  //   {
  //     imageSrc:
  //       "https://img.pikbest.com/origin/10/04/79/388pIkbEsTzJx.jpg!w700wp   ",
  //     title: "Coiffure homme",
  //     description: "Lorem Ipsum is simply dummy text of the printing and ...",
  //     tags: ["SPA", "Salon de coiffure"],
  //   },
  //   {
  //     imageSrc:
  //       "https://img.pikbest.com/origin/10/04/79/388pIkbEsTzJx.jpg!w700wp   ",
  //     title: "Coiffure homme",
  //     description: "Lorem Ipsum is simply dummy text of the printing and ...",
  //     tags: ["SPA", "Salon de coiffure"],
  //   },
  //   {
  //     imageSrc:
  //       "https://img.pikbest.com/origin/10/04/79/388pIkbEsTzJx.jpg!w700wp   ",
  //     title: "Coiffure homme",
  //     description: "Lorem Ipsum is simply dummy text of the printing and ...",
  //     tags: ["SPA", "Salon de coiffure"],
  //   },
  //   {
  //     imageSrc:
  //       "https://img.pikbest.com/origin/10/04/79/388pIkbEsTzJx.jpg!w700wp   ",
  //     title: "Coiffure homme",
  //     description: "Lorem Ipsum is simply dummy text of the printing and ...",
  //     tags: ["SPA", "Salon de coiffure"],
  //   },
  //   {
  //     imageSrc:
  //       "https://thethrivewellness.com/storage/2023/11/Massage-by-Thrive-Wellness-in-Chattanooga-TN.jpeg",
  //     title: "Massage Therapy",
  //     description: "Relax and rejuvenate with our expert therapists.",
  //     tags: ["SPA", "Wellness"],
  //   },
  // ];

  // const services = data
  const services = data;
  return (
    <>
      <Swiper
        initialSlide={0}
        loop={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        // slidesPerView={3}
        breakpoints={
          isServiceDetails
            ? {
                640: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                968: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },

                1290: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }
            : {
                640: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1290: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }
        }
        className="mySwiper"
      >
        {services?.map((service, index) => (
          <SwiperSlide key={index}>
            <ServicesCard
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
              tags={service.tags}
              data={service.data}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
