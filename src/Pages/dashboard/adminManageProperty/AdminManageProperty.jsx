import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";

import { FaCheckSquare } from "react-icons/fa";

import { Card, Typography } from "@material-tailwind/react";
import { IoIosCloseCircle } from "react-icons/io";

const TABLE_HEAD = [
  "Property Title",
  "Property Location",
  "Agent Name",
  "Agent Email",
  "Price Range",
  "Verify",
  "Reject",
];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

const AdminManageProperty = () => {
  return (
    <section>
      <>
        <DynamicTitleDesc
          title={"Property Verification Control Center"}
          subTitle={
            "Empower administrative control over agent-added properties with advanced verification tools. Review, verify, or reject properties with precision. Enhance platform integrity by ensuring only verified properties are showcased, providing users with trusted listings."
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
              {TABLE_ROWS.map(({ name, job, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name} className="hover:bg-amber-500">
                    <td className={classes}>
                      <Typography
                        variant="paragraph"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="paragraph"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {job}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="paragraph"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="paragraph"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="paragraph"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography color="green" className="font-normal">
                        <FaCheckSquare className="text-2xl md:text-3xl hover:scale-125 transition-all cursor-pointer" />
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography color="red" className="font-normal">
                        <IoIosCloseCircle className="text-3xl md:text-4xl hover:scale-125 transition-all cursor-pointer" />
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
};

export default AdminManageProperty;
