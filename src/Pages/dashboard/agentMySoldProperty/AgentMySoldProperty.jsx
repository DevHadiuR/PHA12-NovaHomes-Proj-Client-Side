import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";

import { Card, Typography } from "@material-tailwind/react";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hook/useAuth";

const TABLE_HEAD = [
  "Property Title",
  "Property Location",
  "Buyer Email",
  "Buyer Name",
  "Sold Price",
];

const AgentMySoldProperty = () => {
  const axiosSecure = useAxiosSecure();
  const { user, loader } = useAuth();

  const { data: allPaymentsByEmail = [], refetch } = useQuery({
    enabled: !loader && !!user?.email,
    queryKey: ["allPaymentsByEmail"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allPayments/${user?.email}`);
      return res.data;
    },
  });

  console.log(allPaymentsByEmail);

  return (
    <section>
      <>
        <DynamicTitleDesc
          title={"Properties You've Sold"}
          subTitle={
            "Explore the properties you've successfully sold. This table lists each property along with its title, location, buyer details, and final sale price. Keep track of your successful transactions with ease."
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
              {allPaymentsByEmail.map(
                (
                  {
                    propertyTitle,
                    propertyLocation,
                    buyerEmail,
                    buyerName,
                    soldPrice,
                    _id,
                  },
                  index
                ) => {
                  const isLast = index === allPaymentsByEmail.length - 1;
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
                          className="font-normal flex justify-center"
                        >
                          {soldPrice}
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

export default AgentMySoldProperty;
