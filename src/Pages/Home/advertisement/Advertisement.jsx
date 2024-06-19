import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

import useAllVerifiedProperties from "../../../hook/useAllVerifiedProperties";

const Advertisement = () => {
  const { allAdminVerifiedProperites } = useAllVerifiedProperties();

  return (
    <div>
      <div>
        <DynamicTitleDesc
          title={"Featured Properties"}
          subTitle={
            "Discover our top real estate listings, verified for quality and accuracy. Find your ideal home or investment with detailed information and transparent pricing. Click 'Details' for more insights."
          }
        />
      </div>

      {/* 6 advertisement cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* card */}
        {allAdminVerifiedProperites.slice(0, 6).map((property, idx) => (
          <Card key={idx} className="mt-10 ">
            <CardHeader color="blue-gray" className="relative overflow-hidden">
              <img
                className="h-96 w-full object-cover transition duration-300 ease-in-out transform hover:brightness-75 cursor-pointer"
                src={property.propertyImage}
                alt="card-image"
              />
              <p className="absolute bottom-5 left-8 text-xl font-semibold ">
                {property.priceRange}
              </p>
              <p className="absolute top-3 right-5 bg-amber-800 py-1 px-2 rounded-lg  text-lg font-bold">
                {property.verificationStatus}
              </p>
            </CardHeader>
            <CardBody>
              <Typography variant="h4" className="mb-2 text-[#39474F]">
                {property.propertyLocation}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to="/propertyDetails">
                <Button color="amber" className="text-sm md:text-base">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
