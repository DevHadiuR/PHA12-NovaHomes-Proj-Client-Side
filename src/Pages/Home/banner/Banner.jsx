// import the banner images
import img1 from "../../../assets/titleLogo1.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mt-28">
      <Swiper
        loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: `url(${img1})` }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl mt-28 md:mt-0">
                <h1 className="mb-5 text-white text-4xl font-dm md:text-6xl font-bold">
                  Exploring the Frontier of Technology
                </h1>
                <p className="mb-5 font-serif">
                  Join us at TechTrove as we delve into the latest innovations
                  and trends in technology. From AI breakthroughs to the newest
                  in mobile and software development, stay ahead of the curve
                  with in-depth articles, expert insights, and exclusive updates
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
