import { Button } from "@material-tailwind/react";
import Comments from "./Comments";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useRole from "../../hook/useRole";

const PropertyDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const { userRole } = useRole();

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

  const handleWishlistBtn = (wishInfo) => {
    const wishlistInfo = {
      propertyTitle: wishInfo.propertyTitle,
      propertyLocation: wishInfo.propertyLocation,
      maxPrice: wishInfo.maxPrice,
      minPrice: wishInfo.minPrice,
      propertyImage: wishInfo.propertyImage,
      verificationStatus: wishInfo.verificationStatus,
      propertyDescription: wishInfo.propertyDescription,
      propertyShortDescription: wishInfo.propertyShortDescription,
      agentName: wishInfo.agentName,
      agentEmail: wishInfo.agentEmail,
      agentImage: wishInfo.agentImage,
      propertyId: wishInfo._id,
      wishlistUserEmail: user?.email,
    };

    Swal.fire({
      title: "You want to add this to your Wishlist?",
      // text: "You want to add this to your Wishlist?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add to Wishlist!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic
          .post("/allWishlist", wishlistInfo)
          .then((res) => {
            const result = res.data;
            if (result.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully added to your Wishlist!",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          })
          .catch((err) => {
            if (err.response && err.response.status === 409) {
              Swal.fire({
                position: "top-end",
                icon: "info",
                title: err.response.data.message,
                showConfirmButton: false,
                timer: 2000,
              });
            } else {
              console.log(err);
              Swal.fire({
                position: "top-end",
                icon: "error",
                title: "An error occurred!",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          });
      }
    });
  };

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
          {!userRole.userRole ? (
            <Button
              onClick={() => handleWishlistBtn(property)}
              color="amber"
              size="sm"
              className="text-sm md:text-base"
            >
              Add TO Wishlist
            </Button>
          ) : (
            <Button
              disabled
              onClick={() => handleWishlistBtn(property)}
              color="amber"
              size="sm"
              className="text-sm md:text-base"
            >
              Add TO Wishlist
            </Button>
          )}
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
                      <img referrerPolicy="no-referrer" src={agentImage} />
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
          <Comments
            propertyId={id}
            userEmail={user?.email}
            agentEmail={agentEmail}
          ></Comments>
        </div>
      </div>
    </section>
  );
};

export default PropertyDetails;
