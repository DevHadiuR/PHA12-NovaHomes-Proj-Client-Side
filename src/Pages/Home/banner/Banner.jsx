// import the banner images
import img1 from "../../../assets/bannerImages/img1.jpg";
import img2 from "../../../assets/bannerImages/img2.jpg";
import img3 from "../../../assets/bannerImages/img3.jpg";
import img4 from "../../../assets/bannerImages/img4.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mt-28 mb-24">
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl mt-28 md:mt-0">
                <h4 className="mb-5 text-white text-xl md:text-2xl lg:text-5xl font-bold">
                  Discover Your Dream Home
                </h4>
                <p className="mb-5 text-sm md:text-base lg:text-lg">
                  Join NovaHomes to explore an extensive collection of premium
                  properties. From cozy apartments to luxurious villas, find the
                  perfect home that matches your lifestyle and budget. Stay
                  informed with expert insights and the latest trends in real
                  estate.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${img2})` }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl mt-28 md:mt-0">
                <h4 className="mb-5 text-white text-xl md:text-2xl lg:text-5xl font-bold">
                  Trusted Agents at Your Service
                </h4>
                <p className="mb-5 text-sm md:text-base lg:text-lg">
                  Connect with our network of experienced real estate agents at
                  NovaHomes. Whether youre buying or selling, our agents provide
                  personalized assistance and professional advice to ensure a
                  smooth and successful transaction. Trust us to make your real
                  estate journey seamless.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${img3})` }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl mt-28 md:mt-0">
                <h4 className="mb-5 text-white text-xl md:text-2xl lg:text-5xl font-bold">
                  Verified Properties for Peace of Mind
                </h4>
                <p className="mb-5 text-sm md:text-base lg:text-lg">
                  At NovaHomes, we prioritize your safety and satisfaction.
                  Browse through a selection of verified properties,
                  meticulously reviewed by our team to guarantee authenticity
                  and reliability. Invest with confidence, knowing every listing
                  is thoroughly vetted for your peace of mind.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${img4})` }}
          >
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl mt-28 md:mt-0">
                <h4 className="mb-5 text-white text-xl md:text-2xl lg:text-5xl font-bold">
                  Your Gateway to Smart Investments
                </h4>
                <p className="mb-5 text-sm md:text-base lg:text-lg">
                  Unlock the potential of real estate investment with NovaHomes.
                  Discover lucrative opportunities and valuable insights to make
                  informed decisions. Whether youre a first-time investor or
                  expanding your portfolio, find the right property that aligns
                  with your financial goals.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Custom navigation buttons */}
      <button className="custom-prev absolute -bottom-40 transform left-10 md:left-24 bg-transparent text-white  border-2 border-gray-300 shadow-lg cursor-pointer btn w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full flex items-center justify-center transition duration-300 ease-in-out z-10 hover:bg-black hover:bg-opacity-30">
        <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
      </button>
      <button className="custom-next absolute -bottom-40 transform left-28  md:left-56 bg-transparent text-white  border-2 border-gray-300 shadow-lg cursor-pointer  w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full flex items-center btn justify-center transition duration-300 ease-in-out z-10 hover:bg-black hover:bg-opacity-30">
        <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
      </button>
    </div>
  );
};

export default Banner;
