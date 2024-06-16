import { MdAdminPanelSettings, MdDeleteForever } from "react-icons/md";
import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import { Card, Typography } from "@material-tailwind/react";

import { RiUserAddFill } from "react-icons/ri";
import { FaExclamationCircle } from "react-icons/fa";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
const TABLE_HEAD = [
  "User Name",
  "User Email",
  "Make Admin",
  "Make Agent",
  "Mark As Fraud",
  "Delete User",
];

const AdminManageUsers = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUsers");
      return res.data;
    },
  });

  //   Handle Make Admin from here
  const handleMakeAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user Admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make him Admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/allUsers/admin/${id}`).then((res) => {
          const result = res.data;
          if (result.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "This user is now an Admin!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
      }
    });
  };

//   Handle Make Agent From here
const handleMakeAgent = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to make this user Agent?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make him Agent!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/allUsers/admin/${id}`).then((res) => {
          const result = res.data;
          if (result.modifiedCount) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "This user is now an Admin!",
              showConfirmButton: false,
              timer: 1500,
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
              {allUsers.map(({ name, email, _id, role }, index) => {
                const isLast = index === allUsers.length - 1;
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
                        {email}
                      </Typography>
                    </td>

                    <td className={classes}>
                      {role === "admin" ? (
                        <p className="text-base font-bold text-blue-600 bg-blue-100/90 text-center rounded-full">
                          ADMIN
                        </p>
                      ) : (
                        <Typography
                          color="blue"
                          className="font-normal flex justify-center"
                        >
                          <MdAdminPanelSettings
                            onClick={() => handleMakeAdmin(_id)}
                            className="text-3xl md:text-4xl hover:scale-125 transition-all cursor-pointer "
                          />
                        </Typography>
                      )}
                    </td>
                    <td className={classes}>
                      <Typography
                        color="green"
                        className="font-normal flex justify-center"
                      >
                        <RiUserAddFill
                        onClick={() => handleMakeAgent(_id)}
                        className="text-3xl md:text-4xl hover:scale-125 transition-all cursor-pointer" />
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        color="red"
                        className="font-normal flex justify-center"
                      >
                        <FaExclamationCircle className="text-3xl md:text-4xl hover:scale-125 transition-all cursor-pointer" />
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        color="red"
                        className="font-normal flex justify-center"
                      >
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
