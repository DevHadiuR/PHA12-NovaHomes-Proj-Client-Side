import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { Link } from "react-router-dom";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleShowPassword = () => {
    setShowPass(!showPass);
  };

  const onSubmit = (data) => {
    console.log(data);
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
