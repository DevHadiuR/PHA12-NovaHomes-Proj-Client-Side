import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./teamCard.css";
import { EffectCards } from "swiper/modules";

import img1 from "../../../../assets/ourTeam/1.jpg";
import img2 from "../../../../assets/ourTeam/2.jpg";
import img3 from "../../../../assets/ourTeam/3.jpg";
import img4 from "../../../../assets/ourTeam/4.jpg";

import { useState } from "react";
import DynamicTitleDesc from "../../../../Shared/dynamicTitleDesc/DynamicTitleDesc";

const teamMembers = [
  {
    name: "Hadiur Rahman",
    position: "CEO",
    img: img1,
    description:
      "Hadiur Rahman is the visionary leader of our team, guiding us with a commitment to innovation and strategic dedication.",
  },
  {
    name: "Badhan Pagla",
    position: "Assistant",
    img: img2,
    description:
      "Badhan Pagla ensures our operations run smoothly, with a meticulous attention to detail and proactive approach.",
  },
  {
    name: "Ataur Box",
    position: "Marketing Head",
    img: img3,
    description:
      "Ataur Box drives growth with innovative strategies and a deep understanding of market trends.",
  },
  {
    name: "Samad Fokir",
    position: "Designing Head",
    img: img4,
    description:
      "Samad Fokir brings a unique artistic vision to our projects, ensuring a visually stunning and intuitive user experience.",
  },
];

const OurTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mt-24 container mx-auto">
      <>
        <DynamicTitleDesc
          title={"Our Team"}
          subTitle={
            "Meet the dedicated professionals behind our success! Our team is committed to providing you with exceptional service and expertise to help you find your dream home. With years of experience in the real estate industry, our agents bring local knowledge, market insights, and a client-first approach to ensure a seamless and enjoyable property buying or selling experience."
          }
        />
      </>
      <div className="flex flex-col md:flex-row items-center mt-14">
        <div className="w-full md:w-1/2  ">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper-team"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {teamMembers.map((member, index) => (
              <SwiperSlide
                key={index}
                className=""
                style={{ backgroundImage: `url(${member.img})` }}
              >
                <div className="md:hidden swiper-slide-content flex flex-col justify-center gap-5">
                  <h2 className="text-xl font-semibold">- {member.name}</h2>
                  <h3 className="text-lg font-semibold">- {member.position}</h3>
                  <p className="text-base font-semibold">
                    - {member.description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="hidden md:flex md:w-1/2 p-8 lg:p-12 bg-amber-600 rounded-2xl ml-10 mr-10">
          <div className="flex flex-col gap-10">
            <h2 className="text-3xl font-semibold">
              - {teamMembers[activeIndex].name}
            </h2>
            <h3 className="text-2xl font-semibold">
              - {teamMembers[activeIndex].position}
            </h3>
            <p className="text-xl font-semibold">
              - {teamMembers[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
