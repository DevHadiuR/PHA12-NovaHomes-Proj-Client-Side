import React from "react";
import logo from "../../assets/titleLogo1.jpg";
import "./Header.css";

import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hook/useAuth";

const Header = () => {
  const { user } = useAuth();

  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" className="p-1 font-semibold">
        <NavLink
          to="/"
          className="transition-all  px-3 py-2  hover:bg-transparent border-animate"
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "2px solid #39474F" : "",
              backgroundColor: isActive ? "transparent" : "transparent",
              // color: isActive ? "white" : "white",
            };
          }}
        >
          Home
        </NavLink>
      </Typography>
      <Typography as="li" className="p-1 font-semibold">
        <NavLink
          to="/h"
          className="transition-all  px-3 py-2  hover:bg-transparent border-animate"
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "2px solid #39474F" : "",
              backgroundColor: isActive ? "transparent" : "transparent",
              // color: isActive ? "white" : "white",
            };
          }}
        >
          All Properties
        </NavLink>
      </Typography>
      <Typography as="li" className="p-1 font-semibold ">
        <NavLink
          to="/h"
          className="transition-all  px-3 py-2  hover:bg-transparent border-animate"
          style={({ isActive }) => {
            return {
              borderBottom: isActive ? "2px solid #39474F" : "",
              backgroundColor: isActive ? "transparent" : "transparent",
              // color: isActive ? "white" : "white",
            };
          }}
        >
          Dashboard
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="mb-28">
      <Navbar className="fixed  z-50 top-0 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center  text-[#39474F] justify-between">
          <Typography
            as="a"
            href="/"
            className="mr-4 w-24 md:w-32 cursor-pointer py-1.5 font-medium"
          >
            <img src={logo} alt="Website-log" />
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
          </div>
          <div className="">
            <div className="flex items-center gap-x-1">
              {user ? (
                <button>logout</button>
              ) : (
                <>
                  <Link to="/login">
                    <Button
                      variant="text"
                      size="sm"
                      className="hidden text-[#39474F]  text-base hover:bg-transparent lg:inline-block border-animate"
                    >
                      <span>Log In</span>
                    </Button>
                  </Link>
                  <span className="text-black text-3xl mr-3 hidden lg:inline-block">
                    /
                  </span>
                  <Link to="/register">
                    <Button
                      variant="gradient"
                      size="sm"
                      color="amber"
                      className="hidden text-[#39474F] text-base lg:inline-block"
                    >
                      <span>REGISTER</span>
                    </Button>
                  </Link>
                </>
              )}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav className="text-[#39474F]" open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1 ">
            <Link className="w-full" to="/login">
              <Button
                fullWidth
                variant="outlined"
                size="sm"
                className="border-[#39474F]"
              >
                <span>Log In</span>
              </Button>
            </Link>

            <Link to="/register" className="w-full">
              <Button fullWidth variant="gradient" color="amber" size="sm">
                <span>REGISTER</span>
              </Button>
            </Link>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Header;
