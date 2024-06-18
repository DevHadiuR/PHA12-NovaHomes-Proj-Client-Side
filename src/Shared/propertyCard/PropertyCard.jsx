import { Button } from "@material-tailwind/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const PropertyCard = ({ property, idx }) => {
  const locaiton = useLocation();
  const { user } = useAuth();

  const wishlistLocaiton = locaiton.pathname.includes(
    "/dashboard/userWishlist"
  );

  const userPropertyBoughtLocation = location.pathname.includes(
    "/dashboard/userPropertyBought"
  );

  const agentMyAddedPropertyLocation = location.pathname.includes(
    "/dashboard/agentMyAddedProperty"
  );

  const {
    propertyImage,
    propertyLocation,
    minPrice,
    maxPrice,
    verificationStatus,
    agentName,
    propertyShortDescription,
    propertyTitle,
    _id,
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
          <div className="flex justify-between gap-10">
            {/* {!userPropertyBoughtLocation && (
              <span
                className={`px-3 py-2 mb-5 rounded-full
                   text-green-600 bg-green-100/90 `}
              >
                {verificationStatus}
              </span>
            )} */}

            {userPropertyBoughtLocation && (
              <span
                className={`px-3 py-2 mb-5 rounded-full
                   text-green-600 bg-green-100/90 `}
              >
                Pending
              </span>
            )}
            {agentMyAddedPropertyLocation && (
              <span
                className={`px-3 py-2 mb-5 rounded-full
                   text-green-600 bg-green-100/90 `}
              >
                Pending
              </span>
            )}

            <p className="text-lg text-white  md:text-xl font-bold md:text-[#39474F]">
              <span>${minPrice}</span> - <span>${maxPrice}</span>
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
          {/* agent image */}
          <p className="flex-1 pb-2 text-white opacity-90 md:text-black md:opacity-100 flex items-center gap-2">
            <span className="text-lg font-bold ">Agent Image : </span>
            <div className="avatar">
              <div className="w-12 md:w-14 mask mask-squircle">
                <img src={user?.photoURL} />
              </div>
            </div>
          </p>

          <p className="flex-1 pb-2 text-white opacity-90 md:text-black md:opacity-100">
            <span className="text-lg font-bold ">Agent Name : </span>
            <span className="text-base">{agentName}</span>
          </p>

          {!wishlistLocaiton &&
            !userPropertyBoughtLocation &&
            !agentMyAddedPropertyLocation && (
              <div className="flex items-center gap-5 pt-4">
                <Link to="/propertyDetails">
                  <Button outline color="amber">
                    Details
                  </Button>
                </Link>
              </div>
            )}

          {wishlistLocaiton && (
            <div className="mt-4 flex justify-between flex-col gap-3 md:flex-row">
              <a className="relative inline-flex items-center justify-start md:py-3 md:pl-4 md:pr-12 py-2 pl-2 w-full md:w-auto overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#39474F] group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Make An Offer
                </span>
              </a>

              <a
                href="#_"
                className="relative rounded  md:px-8 md:py-4 px-3 py-2 overflow-hidden group bg-amber-500  hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative text-lg font-bold flex items-center gap-3 justify-between">
                  <span>Remove </span>
                  <span>
                    <RiDeleteBin5Line />
                  </span>
                </span>
              </a>
            </div>
          )}

          {userPropertyBoughtLocation && (
            <div className="mt-4 flex justify-end">
              <a
                href="#_"
                className="relative inline-flex items-center justify-center p-4 md:px-8 md:py-2 px-5 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group bg-purple-500 md:bg-transparent"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full md:text-purple-500 text-white transition-all duration-300 transform group-hover:translate-x-full ease text-lg font-bold ">
                  PAY
                </span>
                <span className="relative invisible">PAY</span>
              </a>
            </div>
          )}

          {agentMyAddedPropertyLocation && (
            <Link to={`/dashboard/agentUpdateProperty/${_id}`}>
              <div className="mt-4 flex justify-between flex-col gap-3 md:flex-row">
                <a className="relative inline-flex items-center justify-start md:py-3 md:pl-4 md:pr-12 py-2 pl-2 w-full md:w-auto overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                  <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#39474F] group-hover:h-full"></span>
                  <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>

                  <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                    UPDATE
                  </span>
                </a>

                <a
                  href="#_"
                  className="relative rounded  md:px-8 md:py-4 px-3 py-2 overflow-hidden group bg-amber-500  hover:bg-gradient-to-r hover:from-red-500 hover:to-red-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-red-400 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative text-lg font-bold flex items-center gap-3 justify-between">
                    <span>DELETE </span>
                    <span>
                      <RiDeleteBin5Line />
                    </span>
                  </span>
                </a>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
