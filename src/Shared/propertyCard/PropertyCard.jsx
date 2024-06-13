import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property, idx }) => {
  const {
    propertyImage,
    propertyLocation,
    priceRange,
    verificationStatus,
    agentName,
    propertyShortDescription,
    propertyTitle,
  } = property;

  const imageFirst = idx % 2 === 0;

  return (
    <div className="mt-14 text-[#39474F]">
      <div className="container grid grid-cols-12 mx-auto bg-[#F1F3F4] rounded-xl">
        <div
          className={`bg-no-repeat bg-gray-500 md:bg-transparent bg-cover col-span-full md:col-span-5 row-span-full ${
            imageFirst ? "md:order-first" : "md:order-last"
          }`}
          style={{
            backgroundImage: `url(${propertyImage})`,

            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex flex-col p-6 col-span-full row-span-full md:col-span-7 lg:p-10 ml-0 md:ml-8">
          <div className="flex justify-between">
            <span
              className={`px-3 py-2 mb-5 rounded-full
                   text-green-600 bg-green-100/90 `}
            >
              {verificationStatus}
            </span>
            <p className="text-lg text-white  md:text-xl font-bold md:text-[#39474F]">
              {priceRange}
            </p>
          </div>
          <h1 className="text-3xl text-white opacity-90 md:text-black md:opacity-100 font-semibold ">
            {propertyTitle}
          </h1>
          <p className="flex-1 pt-2 text-white opacity-95 md:text-black md:opacity-100">
            {propertyShortDescription}
          </p>
          <a
            rel="noopener noreferrer"
            href="#"
            className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-violet-400 text-white  md:text-black "
          >
            <Link to="/propertyDetails">
              <span className="text-white opacity-90 md:text-black md:opacity-100">
                Read more
              </span>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>

          <p className="flex-1 pb-2 text-white opacity-90 md:text-black md:opacity-100">
            <span className="text-lg font-bold ">Location : </span>
            <span className="text-base">{propertyLocation}</span>
          </p>
          <p className="flex-1 pb-2 text-white opacity-90 md:text-black md:opacity-100">
            <span className="text-lg font-bold ">Agent Name : </span>
            <span className="text-base">{agentName}</span>
          </p>

          <div className="flex items-center gap-5 pt-4">
            <Link to="/propertyDetails">
              <Button outline color="amber">
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
