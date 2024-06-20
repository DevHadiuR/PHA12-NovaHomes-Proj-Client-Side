import { FaCheckSquare } from "react-icons/fa";
import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";

import { Card, Typography } from "@material-tailwind/react";
import { IoIosCloseCircle } from "react-icons/io";
import useAllOfferedProperties from "../../../hook/useAllOfferedProperties";

const TABLE_HEAD = [
  "Property Title",
  "Property Location",
  "Buyer Email",
  "Buyer Name",
  "Buying Date",
  "Offered Price",
  "Accept",
  "Reject",
];

const AgentRequestedProperty = () => {
  const { allOfferedProperties } = useAllOfferedProperties();

  return (
    <section>
      <>
        <DynamicTitleDesc
          title={"Manage Property Offers"}
          subTitle={
            "View and manage all the offers made by users on your listed properties. Accept or reject offers, and track their status in real-time. Ensure smooth transactions by keeping up with pending, accepted, and rejected offers."
          }
        />
      </>
      <div className="w-[90%] mx-auto mb-10">
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-[#39474F] bg-[#39474F] p-4"
                  >
                    <Typography
                      variant="small"
                      color="white"
                      className="font-bold text-lg leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {allOfferedProperties.map(
                (
                  {
                    _id,
                    propertyTitle,
                    propertyLocation,
                    buyerName,
                    buyerEmail,
                    buyingDate,
                    minOfferPrice,
                    maxOfferPrice,
                  },
                  index
                ) => {
                  const isLast = index === allOfferedProperties.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id} className="hover:bg-amber-500">
                      <td className={classes}>
                        <Typography
                          variant="paragraph"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {propertyTitle}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="paragraph"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {propertyLocation}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="paragraph"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {buyerEmail}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="paragraph"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {buyerName}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="paragraph"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {buyingDate}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="paragraph"
                          color="blue-gray"
                          className="font-normal"
                        >
                          <span>${minOfferPrice}</span>
                          <span> - </span>
                          <span>${maxOfferPrice}</span>
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          color="green"
                          className="font-normal flex justify-center"
                        >
                          <FaCheckSquare className="text-2xl md:text-3xl hover:scale-125 transition-all cursor-pointer" />
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          color="red"
                          className="font-normal flex justify-center"
                        >
                          <IoIosCloseCircle className="text-3xl md:text-4xl hover:scale-125 transition-all cursor-pointer" />
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
};

export default AgentRequestedProperty;
