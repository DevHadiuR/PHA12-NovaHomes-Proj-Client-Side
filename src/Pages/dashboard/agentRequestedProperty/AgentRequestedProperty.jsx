import { FaCheckSquare } from "react-icons/fa";
import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";

import { Card, Typography } from "@material-tailwind/react";
import { IoIosCloseCircle } from "react-icons/io";
import useAllOfferedProperties from "../../../hook/useAllOfferedProperties";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";

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
  const { allOfferedProperties, refetch } = useAllOfferedProperties();
  const axiosSecure = useAxiosSecure();
  // handle property offer acceptence
  const handleOfferAccepted = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Accept this Offer?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Accept It!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/allOfferedProperties/accepted/${id}`)
          .then((res) => {
            const result = res.data;
            if (result.modifiedCount) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "This Offer is Successfully Accepted!",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          });
      }
    });
  };

  // handle property offer rejection
  const handleOfferRejected = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Reject this Offer?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Reject It!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/allOfferedProperties/rejected/${id}`)
          .then((res) => {
            const result = res.data;
            if (result.modifiedCount) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "This Offer is Successfully Rejected!",
                showConfirmButton: false,
                timer: 2000,
              });
            }
          });
      }
    });
  };

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
                    offerPropertyVerificationStatus,
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
                        {offerPropertyVerificationStatus === "Rejected" ? (
                          <p className="text-base font-bold text-red-600 bg-red-100/90 text-center rounded-full px-2">
                            REJECTED
                          </p>
                        ) : (
                          <>
                            {offerPropertyVerificationStatus === "Accepted" ? (
                              <p className="text-base font-bold text-green-600 bg-green-100/90 text-center rounded-full px-2">
                                ACCEPTED
                              </p>
                            ) : (
                              <Typography
                                color="green"
                                className="font-normal flex justify-center"
                              >
                                <FaCheckSquare
                                  onClick={() => handleOfferAccepted(_id)}
                                  className="text-2xl md:text-3xl hover:scale-125 transition-all cursor-pointer"
                                />
                              </Typography>
                            )}
                          </>
                        )}
                      </td>
                      <td className={classes}>
                        {offerPropertyVerificationStatus === "Accepted" ? (
                          <p className="text-base font-bold text-green-600 bg-green-100/90 text-center rounded-full px-2">
                            ACCEPTED
                          </p>
                        ) : (
                          <>
                            {offerPropertyVerificationStatus === "Rejected" ? (
                              <p className="text-base font-bold text-red-600 bg-red-100/90 text-center rounded-full px-2">
                                REJECTED
                              </p>
                            ) : (
                              <Typography
                                color="red"
                                className="font-normal flex justify-center"
                              >
                                <IoIosCloseCircle
                                  onClick={() => handleOfferRejected(_id)}
                                  className="text-3xl md:text-4xl hover:scale-125 transition-all cursor-pointer"
                                />
                              </Typography>
                            )}
                          </>
                        )}
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
