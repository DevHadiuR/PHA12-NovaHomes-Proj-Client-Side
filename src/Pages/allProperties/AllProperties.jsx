import { useState } from "react";
import DynamicTitleDesc from "../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import PropertyCard from "../../Shared/propertyCard/PropertyCard";

import useAllVerifiedProperties from "../../hook/useAllVerifiedProperties";
import { Dropdown } from "flowbite-react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { Helmet } from "react-helmet-async";

const AllProperties = () => {
  const { allAdminVerifiedProperites } = useAllVerifiedProperties();
  // const [search, setSearch] = useState("");
  // const [searchText, setSearchText] = useState("");
  // const axiosPublic = useAxiosPublic();

  // // fetch property by locaiton search
  // const { data: allAdminVerifiedProperites = [], isLoading } = useQuery({
  //   queryFn: () => getData(),
  //   queryKey: ["allAdminVerifiedProperites", search],
  // });

  // const getData = async () => {
  //   const { data } = await axiosPublic(
  //     `/allAdminVerifiedProperitesBySearch?&search=${search}`
  //   );
  //   setSearchText("");

  //   return data;
  // };

  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   // const value = e.target.searchTitle.value;
  //   setSearch(searchText);
  // };

  // if (isLoading) {
  //   return <p>loading...</p>;
  // }

  return (
    <section>
       <Helmet>
        <title>NovaHomes | All Properties Page</title>
      </Helmet>
      <div className="md:pt-1 md:pb-10 w-[98%] mx-auto">
        <DynamicTitleDesc
          title={"Explore Verified Properties"}
          subTitle={
            "Welcome to our comprehensive property listings page. Discover a diverse range of verified properties with detailed descriptions, high-resolution images, and transparent pricing. Use our advanced search filters to find the perfect property tailored to your needs. Start your search today and find your ideal home or investment."
          }
        />
      </div>

      {/* search and dropdown menu div */}
      {/* <div className="mt-24 flex flex-col-reverse md:flex-row justify-end items-start md:items-center w-[90%] mx-auto ">
        <div className="mt-3 md:mt-0  w-full md:w-auto flex md:block justify-end md:justify-start">
          <Dropdown
            gradientDuoTone="redToYellow"
            label="SORT"
            dismissOnClick={false}
            size="md"
            className="rounded-xl bg-amber-500 p-2"
          >
            <Dropdown.Item
              // onClick={() => handleDropDownCategory("Latest Trends")}
              className="text-md text-white hover:text-black rounded-xl"
            >
              Latest Trends
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-3">
          <span className="text-2xl font-bold">Search Property</span>
          <form onSubmit={handleSearch}>
            <label className="input input-warning input-bordered flex items-center gap-2">
              <input
                name="searchTitle"
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                className="border-none input input-bordered "
                placeholder="Search By Location"
              />
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-5 h-5  opacity-70 cursor-pointer hover:text-primary hover:scale-125 transition-all"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </label>
          </form>
        </div>
      </div> */}

      <div className="w-[95%] md:w-full mx-auto">
        {allAdminVerifiedProperites.map((property, idx) => (
          <PropertyCard property={property} key={idx} idx={idx}></PropertyCard>
        ))}
      </div>
    </section>
  );
};

export default AllProperties;
