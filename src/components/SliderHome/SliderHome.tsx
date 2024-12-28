// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import slider from "../../assets/slider.jpeg"
import './SliderHome.css';
// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
export default function SliderHome() {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider} alt="slider" /> <div className="bas">
            <div className="titleSlide">
              <h3>BRING BACK HANDSOME</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
            </div>
            <div className="button-slider">
              <Link to={'/'} target="_blank">
                {" "}
                <button className="btn-home">Book a reservation </button>
              </Link>
              <Link to={'/'} target="_blank">
                {" "}
                <button className="btn-home-white"> Check all products </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  )
}