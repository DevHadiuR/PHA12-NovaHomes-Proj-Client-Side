import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";

// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import useAllReviews from "../../../hook/useAllReviews";

const LatestReviews = () => {
  const { allReviews } = useAllReviews();

  console.log(allReviews);

  return (
    <div>
      <div className="pb-10">
        <DynamicTitleDesc
          title={" Latest User Reviews"}
          subTitle={
            "Discover what our users have to say about their experiences with our properties. Read the latest reviews from satisfied homeowners and agents who have found their perfect match through our platform."
          }
        />
      </div>
      <div className="">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {allReviews.slice(0, 5).map((review, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-[80%] mx-auto">
                <div className="flex flex-col justify-center items-center">
                  <div className="avatar">
                    <div className="w-20 mask mask-hexagon">
                      <img
                        referrerPolicy="no-referrer"
                        src={review.reviewerPhoto}
                      />
                    </div>
                  </div>

                  <h1 className="text-3xl font-semibold text-[#cd9003] text-center">
                    {review.reviewerName}
                  </h1>
                </div>

                <p className="text-xl font-semibold  py-3 text-center">
                  {review.propertyShortDescription}
                </p>

                <p className="text-xl font-serif py-5 text-center">
                  &quot; {review.reviewerReview} &quot;
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LatestReviews;
