import { CgProfile } from "react-icons/cg";
import { FaList } from "react-icons/fa";
import { GiFamilyHouse } from "react-icons/gi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosHome } from "react-icons/io";
import { MdOutlineReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-row-reverse justify-center bg-[#f6f6f6e3]">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className=" drawer-button lg:hidden mt-3">
          <HiMenuAlt3 className="text-4xl font-bold" />
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-auto  md:w-80 min-h-full text-base-content text-lg font-semibold gap-1 bg-[#D1A054]">
          <li className="mb-6">
            <h1 className="text-3xl font-bold">
              Bistro Boss <br />
              Restaurant
            </h1>
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

          <>
            <li>
              <NavLink to="/dashboard/userProfile">
                <CgProfile className="text-2xl" /> My Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/userWishlist">
                <FaList className="text-2xl" /> Wishlist
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/userProperty">
                <GiFamilyHouse className="text-2xl" /> Property Bought
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/userReview">
                <MdOutlineReviews className="text-2xl" /> My Reviews
              </NavLink>
            </li>
          </>

          {/* shared link are below here */}

          <div className="divider divider-primary"></div>
          <li>
            <NavLink to="/">
              <IoIosHome className="text-2xl" />
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
