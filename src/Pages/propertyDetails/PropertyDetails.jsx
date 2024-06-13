import { Button } from "@material-tailwind/react";
import Comments from "./Comments";

const PropertyDetails = () => {
  return (
    <section className="bg-[#F7F7F7] text-[#39474F]">
      {/* main div */}
      <div className="md:pt-14 w-[90%] mx-auto ">
        <div className="hidden lg:block">
          <div className="flex justify-between items-center ">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold text-amber-600">
              Luxury Apartment Bay View
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
              $987,000
            </h1>
          </div>
          <Button color="green" className="mt-3 rounded-full">
            Verified
          </Button>
        </div>

        {/* image */}
        <div className="mt-5">
          <img
            className="h-screen w-full rounded-2xl"
            src="https://i.ibb.co/dc6DXV9/5.jpg"
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
              Luxury Apartment Bay View
            </h1>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold">
              $987,000
            </h1>
          </div>
          <Button color="green" className="mt-3 rounded-full">
            Verified
          </Button>
        </div>

        {/* description div */}
        <div className="bg-white mt-10 py-5">
          <div className="w-[90%] mx-auto">
            <h1 className="text-xl font-semibold border-b border-gray-400 py-10">
              Description
            </h1>

            <p className="text-lg my-8 pb-8 opacity-90">
              This exquisite property on Birch Road in North Haverbrook is the
              epitome of luxury living. With five spacious bedrooms, four
              bathrooms, and a grand open-plan living area, this home is perfect
              for large families or those who love to entertain. The gourmet
              kitchen features high-end appliances, custom cabinetry, and a
              large island with seating. The master suite is a private oasis,
              complete with a walk-in closet, a spa-like bathroom with a soaking
              tub, and a private balcony overlooking the landscaped backyard.
              The outdoor space includes a large patio, a swimming pool, and a
              lush garden, providing the perfect setting for outdoor gatherings.
              Located in a prestigious neighborhood, this home is close to
              top-rated schools, fine dining, and exclusive shopping venues.
              This property offers the perfect blend of elegance, comfort, and
              convenience.
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
                  <span className="text-lg font-medium">
                    Luxury Apartment Bay View
                  </span>
                </p>
                <p className="flex justify-between items-center border-b-2  border-gray-300 pb-8 mb-8  gap-2">
                  <span className="text-xl font-semibold">
                    Property Location
                  </span>
                  <span className="text-3xl">:</span>
                  <span className="text-lg font-medium">
                    Luxury Apartment Bay View
                  </span>
                </p>
                <p className="flex justify-between items-center border-b-2  border-gray-300 pb-8 mb-8  gap-2">
                  <span className="text-xl font-semibold">
                    Verification Status
                  </span>
                  <span className="text-3xl">:</span>
                  <span className="text-lg font-medium">
                    Luxury Apartment Bay View
                  </span>
                </p>
                <p className="flex justify-between items-center border-b-2  border-gray-300 pb-8 mb-8  gap-2">
                  <span className="text-xl font-semibold">Price Range</span>
                  <span className="text-3xl">:</span>
                  <span className="text-lg font-medium">
                    Luxury Apartment Bay View
                  </span>
                </p>
                <p className="flex justify-between items-center border-b-2  border-gray-300 pb-8 mb-8  gap-2">
                  <span className="text-xl font-semibold">Agent Name</span>
                  <span className="text-3xl">:</span>
                  <span className="text-lg font-medium">
                    Luxury Apartment Bay View
                  </span>
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
