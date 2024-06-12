import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import useAuth from "../../hook/useAuth";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const { createUser, setUser } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleError = (er) => {
    toast.error(er, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    const { name, email, password, photo } = data;

    if (!/@.*\.com$/.test(email)) {
      handleError("Email must contain with '.com' at the end!");
      return;
    } else if (!password.length > 6) {
      handleError("Password must be at least 6 characters long!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      handleError("Password must contain at least one uppercase letter!");
      return;
    } else if (!/[a-z]/.test(password)) {
      handleError("Password must contain at least one lowercase letter!");
      return;
    } else if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      handleError("Password must contain at least one special character!");
      return;
    } else if (!/\d.*\d/.test(password)) {
      handleError("Password must contain at least 2 digit numbers!");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        Swal.fire({
          title: "Congratulation!",
          text: "You Have Successfully Registered!",
          icon: "success",
        });
        updateProfile(user, {
          displayName: name,
          photoURL: photo,
        });

        setUser({
          ...user,
          photoURL: photo,
          displayName: name,
        });

        navigate("/");

        reset();
      })
      .catch((error) => {
        const err = error.message
          .split("/")
          .pop()
          .replace(/^\w/, (c) => c.toUpperCase());
        Swal.fire({
          icon: "error",
          title: "Sorry...",
          text: err,
        });
      });
  };

  return (
    <div className="mx-4 my-14 md:container lg:max-w-6xl lg:mx-auto">
      <div>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-normal text-[#FDB913]">
          REGISTRATION
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-normal text-[#39474F]">
          FORM
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-2/6"></div>
        <div className="w-full lg:w-4/6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="text-xl text-[#39474F] grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            {/* name input */}
            <div className="mt-5 form-control">
              <label>
                NAME <span className="text-red-400">*</span>{" "}
              </label>
              <Input
                variant="standard"
                placeholder="Enter Your Name"
                name="name"
                type="text"
                size="md"
                color="orange"
                {...register("name", { required: true })}
                className="py-3 text-xl"
              />
              {errors.name && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            {/* photo input */}
            <div className="mt-5 form-control">
              <label>
                PHOTO <span className="text-red-400">*</span>{" "}
              </label>
              <Input
                variant="standard"
                placeholder="Enter Your Photo Url"
                name="photo"
                type="url"
                size="md"
                color="orange"
                {...register("photo", { required: true })}
                className="py-3 text-xl"
              />
              {errors.photo && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            {/* email input */}
            <div className="mt-5 form-control">
              <label>
                EMAIL <span className="text-red-400">*</span>{" "}
              </label>
              <Input
                variant="standard"
                placeholder="Enter Your Email Address"
                name="email"
                type="email"
                size="md"
                color="orange"
                {...register("email", { required: true })}
                className="py-3 text-xl"
              />
              {errors.email && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>
            {/* password input */}
            <div className="mt-5 form-control relative">
              <label>
                PASSWORD <span className="text-red-400">*</span>{" "}
              </label>
              <Input
                variant="standard"
                placeholder="Enter Your Password"
                name="password"
                type={showPass ? "text" : "password"}
                size="md"
                color="orange"
                {...register("password", { required: true })}
                className="py-3 text-xl"
              />
              <span
                onClick={handleShowPassword}
                className="absolute bottom-3 right-5 text-2xl cursor-pointer"
              >
                {showPass ? (
                  <IoEye className="text-black" />
                ) : (
                  <IoMdEyeOff className="text-black" />
                )}
              </span>
              {errors.password && (
                <span className="text-red-600">This field is required</span>
              )}
            </div>

            <div className="mt-10">
              <Button
                type="submit"
                className="text-[#39474F] bg-[#FDB913] text-base rounded-full px-10"
              >
                SUBMIT
              </Button>
              <ToastContainer />
            </div>
          </form>
          <div className="mt-10 ">
            <h1 className="text-[#39474F] text-xl">
              Already Have An Account ? Please{" "}
              <Link className="text-blue-500 underline" to="/login">
                Login
              </Link>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
