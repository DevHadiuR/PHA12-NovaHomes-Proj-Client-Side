import { Button } from "@material-tailwind/react";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PropertyDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();

  const { data: property = [], isLoading } = useQuery({
    queryKey: ["perPropertyById"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/propertiesById/${id}`);
      return res.data;
    },
  });

  const {
    propertyTitle,
    propertyLocation,
    maxPrice,
    minPrice,
    propertyImage,
    verificationStatus,
    propertyDescription,
    agentName,
    agentEmail,
    agentImage,
  } = property || {};

  if (isLoading) {
    return <p className="text-xl text-center mt-20">Loading..</p>;
  }
  return (
    <section className="bg-[#F7F7F7] text-[#39474F]">
      {/* main div */}
      <div className="md:pt-14 w-[90%] mx-auto ">
        <div className="hidden lg:block">
          <div className="flex justify-between items-center ">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-amber-600">
              {propertyTitle}
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
              <span>${minPrice}</span> - <span>${maxPrice}</span>
            </h1>
          </div>
          <Button color="green" className="mt-3 rounded-full">
            {verificationStatus}
          </Button>
        </div>

        {/* image */}
        <div className="mt-5">
          <img
            className="h-screen w-full rounded-2xl"
            src={propertyImage}
            alt=""
          />
        </div>

        <div className="flex justify-end my-14">
          <Button color="amber" size="sm" className="text-sm md:text-base">
            Add TO Wishlist
          </Button>
        </div>

        <div className="mt-5 lg:hidden">
          <div className="flex justify-between items-center ">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-amber-600">
              {propertyTitle}
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
              <span>${minPrice}</span> - <span>${maxPrice}</span>
            </h1>
          </div>
          <Button color="green" className="mt-3 rounded-full">
            {verificationStatus}
          </Button>
        </div>

        {/* description div */}
        <div className="bg-white mt-10 py-5">
          <div className="w-[90%] mx-auto">
            <h1 className="text-xl font-semibold border-b border-gray-400 py-10">
              Description
            </h1>

            <p className="text-lg my-8 pb-8 opacity-90">
              {propertyDescription}
            </p>
          </div>
        </div>

        {/* details div */}
        <div className="bg-white mt-10 pb-16">
          <div className="w-[90%] mx-auto">
            <h1 className="text-xl font-semibold border-b border-gray-400 py-10">
              Details
            </h1>

            <div className="bg-[#F7F7F7] border-2 mt-8">
              <div className="w-[90%] mx-auto py-10">
                <p className="flex justify-between items-center border-b-2  border-gray-300 pb-8 mb-8  gap-2">
                  <span className="text-xl font-semibold">Property Name</span>
                  <span className="text-3xl">:</span>
                  <span className="text-lg font-medium">{propertyTitle}</span>
                </p>
                <p className="flex justify-between items-center border-b-2  border-gray-300 pb-8 mb-8  gap-2">
                  <span className="text-xl font-semibold">
                    Property Location
                  </span>
                  <span className="text-3xl">:</span>
                  <span className="text-lg font-medium">
                    {propertyLocation}
                  </span>
                </p>
                <p className="flex justify-between items-center border-b-2  border-gray-300 pb-8 mb-8  gap-2">
                  <span className="text-xl font-semibold">
                    Verification Status
                  </span>
                  <span className="text-3xl">:</span>
                  <span className="text-lg font-medium">
                    {verificationStatus}
                  </span>
                </p>
                <p className="flex justify-between items-center border-b-2  border-gray-300 pb-8 mb-8  gap-2">
                  <span className="text-xl font-semibold">Price Range</span>
                  <span className="text-3xl">:</span>
                  <span className="text-lg font-medium">
                    <span>${minPrice}</span> - <span>${maxPrice}</span>
                  </span>
                </p>
                <p className="flex justify-between items-center border-b-2  border-gray-300 pb-8 mb-8  gap-2">
                  <span className="text-xl font-semibold">Agent Image</span>
                  <span className="text-3xl">:</span>
                  <div className="avatar">
                    <div className="w-12 md:w-14 mask mask-squircle">
                      <img src={agentImage} />
                    </div>
                  </div>
                </p>
                <p className="flex justify-between items-center border-b-2  border-gray-300 pb-8 mb-8  gap-2">
                  <span className="text-xl font-semibold">Agent Name</span>
                  <span className="text-3xl">:</span>
                  <span className="text-lg font-medium">{agentName}</span>
                </p>
                <p className="flex justify-between items-center border-b-2  border-gray-300 pb-8 mb-8  gap-2">
                  <span className="text-xl font-semibold">Agent Email</span>
                  <span className="text-3xl">:</span>
                  <span className="text-lg font-medium">{agentEmail}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* users comments div */}
        <div>
          <Comments></Comments>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
