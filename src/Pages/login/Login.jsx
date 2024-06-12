import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const { loginUser, googleProvider, gitHubProvider, twitterProvider } =
    useAuth();

  // use hook form
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  //    email & password verification
  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Hurray !!!",
          text: "You Have Successfully Loged In!",
          icon: "success",
        });

        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found !",
        });
      });
  };

  // login with gooogle --
  const handleGoogleLogin = () => {
    googleProvider()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Hurray !!!",
          text: "You Have Successfully Loged In!",
          icon: "success",
        });

        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found !",
        });
      });
  };
  // login with github --
  const handleGithubLogin = () => {
    gitHubProvider()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Hurray !!!",
          text: "You Have Successfully Loged In!",
          icon: "success",
        });

        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found !",
        });
      });
  };
  // login with twitter --
  const handleTwitterLogin = () => {
    twitterProvider()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "Hurray !!!",
          text: "You Have Successfully Loged In!",
          icon: "success",
        });

        navigate("/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "User Not Found !",
        });
      });
  };

  return (
    <div className="mx-4 my-14 md:container lg:max-w-6xl lg:mx-auto">
      <div>
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-normal text-[#FDB913]">
          YOUR LOG IN
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
            className="text-xl text-[#39474F] grid grid-cols-1  gap-10"
          >
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

            <div className="mt-10 flex justify-center">
              <Button
                type="submit"
                className="text-[#39474F] bg-[#FDB913] text-base rounded-full px-10"
              >
                SUBMIT
              </Button>
            </div>
          </form>
          {/* -------------------------- */}
          <p className="text-[#39474F] text-xl text-center font-semibold mt-14">
            OR
          </p>
          <div className="text-[#39474F] border-t border-[#39474F] pt-10 mt-6">
            <div className="flex justify-center items-center mb-5 gap-6">
              <span
                onClick={handleGoogleLogin}
                className="border-2 p-2 border-[#39474F] rounded-full"
              >
                <FcGoogle className="text-2xl cursor-pointer hover:scale-125 transition-all" />
              </span>
              <span
                onClick={handleGithubLogin}
                className="border-2 p-2 border-[#39474F] rounded-full"
              >
                <FaGithub className="text-2xl cursor-pointer hover:scale-125 transition-all" />
              </span>
              <span
                onClick={handleTwitterLogin}
                className="border-2 p-2 border-[#39474F] rounded-full"
              >
                <FaTwitter className="text-2xl cursor-pointer hover:scale-125 transition-all text-blue-500" />
              </span>
            </div>
          </div>

          <div className="mt-10 ">
            <h1 className="text-[#39474F] text-xl">
              New To This Website ? Please{" "}
              <Link className="text-blue-500 underline" to="/register">
                REGISTER
              </Link>{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
