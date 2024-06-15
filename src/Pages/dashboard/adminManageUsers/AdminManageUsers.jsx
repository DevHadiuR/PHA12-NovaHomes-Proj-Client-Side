import { MdAdminPanelSettings, MdDeleteForever } from "react-icons/md";
import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import { Card, Typography } from "@material-tailwind/react";

import { RiUserAddFill } from "react-icons/ri";
import { FaExclamationCircle } from "react-icons/fa";
const TABLE_HEAD = [
  "User Name",
  "User Email",
  "Make Admin",
  "Make Agent",
  "Mark As Fraud",
  "Delete User",
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
];
const AdminManageUsers = () => {
  return (
    <section>
      <>
        <DynamicTitleDesc
          title={"User Management Hub"}
          subTitle={
            "Command center for user oversight with comprehensive functionalities. Administer user roles with precision: elevate to admin, designate as agent, or mark as fraudulent. Ensure platform integrity by deleting users and their associated properties when"
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
              {TABLE_ROWS.map(({ name, job }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name} className="hover:bg-amber-500 ">
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
                      <Typography color="blue" className="font-normal">
                        <MdAdminPanelSettings className="text-3xl md:text-4xl hover:scale-125 transition-all cursor-pointer" />
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography color="green" className="font-normal">
                        <RiUserAddFill className="text-3xl md:text-4xl hover:scale-125 transition-all cursor-pointer" />
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography color="red" className="font-normal">
                        <FaExclamationCircle className="text-3xl md:text-4xl hover:scale-125 transition-all cursor-pointer" />
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography color="red" className="font-normal">
                        <MdDeleteForever className="text-4xl md:text-4xl hover:scale-125 transition-all cursor-pointer" />
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

export default AdminManageUsers;
