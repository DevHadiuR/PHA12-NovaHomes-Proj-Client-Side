import { Typography } from "@material-tailwind/react";
import { CgProfile } from "react-icons/cg";
import { FaHouseUser, FaList, FaUsers } from "react-icons/fa";
import { GiFamilyHouse, GiHouse } from "react-icons/gi";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosHome } from "react-icons/io";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../../assets/logoWhite.jpg";
import { TbBrandCashapp } from "react-icons/tb";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content  bg-[#f6f6f6e3]">
        {/* Page content here */}

        <Outlet></Outlet>
      </div>
      {/* drawer button icon */}
      <div className="ml-2 mt-2 ">
        <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
          <HiMenuAlt2 className="text-4xl font-bold" />
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-auto  md:w-80 min-h-full text-lg font-semibold gap-1 bg-[#39474F] text-white">
          <li className="mb-2">
            <Typography
              as="a"
              href="/"
              className="mr-4 w-24 md:w-36 cursor-pointer py-1.5 font-medium"
            >
              <img src={logo} alt="Website-log" />
            </Typography>
          </li>
          <li className="text-white text-lg md:text-2xl font-semibold mb-6">
            NovaHome | Agency
          </li>

          {/* Sidebar content here . It will be conditional . */}

          {/* {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <IoIosHome className="text-2xl" /> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaUtensils className="text-2xl" /> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <TfiMenuAlt className="text-2xl" /> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageBookings">
                  <TbBrandBooking className="text-2xl" /> Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <PiUsersThreeFill className="text-2xl" /> All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <IoIosHome className="text-2xl" /> User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <SlCalender className="text-2xl" /> Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <MdOutlinePayment className="text-2xl" /> Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <IoCart className="text-2xl" /> My Cart ({carts.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <MdRateReview className="text-2xl" /> Add Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/booking">
                  <TbBrandBooking className="text-2xl" /> My Booking
                </NavLink>
              </li>
            </>
          )} */}

          {/* user route */}

          <>
            <li>
              <NavLink to="/dashboard/profile">
                <CgProfile className="text-lg md:text-2xl" /> My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/userWishlist">
                <FaList className="text-lg md:text-2xl" /> Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/userProperty">
                <GiFamilyHouse className="text-lg md:text-2xl" /> Property
                Bought
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/userReview">
                <MdOutlineReviews className="text-lg md:text-2xl" /> My Reviews
              </NavLink>
            </li>
          </>
          {/* Agent Route */}
          <>
            <li>
              <NavLink to="/dashboard/profile">
                <CgProfile className="text-lg md:text-2xl" /> Agent Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/agentAddProperty">
                <GiFamilyHouse className="text-lg md:text-2xl" /> Add Property
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/agentMyAddedProperty">
                <GiHouse className="text-lg md:text-2xl" /> My Added Property
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/agentMySoldProperty">
                <TbBrandCashapp className="text-lg md:text-2xl" /> My Sold
                Property
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/agentRequestedProperty">
                <FaHouseUser className="text-lg md:text-2xl" /> Requested
                Properties
              </NavLink>
            </li>
          </>
          {/* Admin Route */}
          <>
            <li>
              <NavLink to="/dashboard/profile">
                <CgProfile className="text-lg md:text-2xl" /> Admin Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/adminManageProperty">
                <GiFamilyHouse className="text-lg md:text-2xl" /> Manage
                Properties
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/adminManageUsers">
                <FaUsers className="text-lg md:text-2xl" /> Manage Users
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/adminManageReviews">
                <MdOutlineReviews className="text-lg md:text-2xl" /> Manage
                Reviews
              </NavLink>
            </li>
          </>

          {/* shared link are below here */}

          <div className="divider divider-warning"></div>
          <li>
            <NavLink to="/">
              <IoIosHome className="text-lg md:text-2xl" />
              Home
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/menu">
              <GiHamburgerMenu className="text-2xl" />
              Menu
            </NavLink>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
