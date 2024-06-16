import { Button, Input } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";
// import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";
const imgBB_api =
  "https://api.imgbb.com/1/upload?key=667d80a3b99faf5238f607dc5cc13485";

const AgentAddProperty = () => {
  const { user } = useAuth();
  const { displayName, email } = user || {};
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imgFile = {
      image: data.propertyImage[0],
    };
    const res = await axiosPublic.post(imgBB_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    console.log(res);

    const propertyItem = {
      propertyTitle: data.propertyTitle,
      propertyLocation: data.propertyLocation,
      propertyImage: res.data.data.display_url,
      propertyDescription: data.propertyDescription,
      propertyShortDescription: data.propertyShortDescription,
      agentName: data.agentName,
      agentEmail: data.agentEmail,
      minPrice: parseFloat(data.minPrice),
      maxPrice: parseFloat(data.maxPrice),
    };

    if (res.data.data.display_url) {
      const propertyRes = await axiosSecure.post(
        "/allProperties",
        propertyItem
      );
      console.log(propertyRes.data);

      if (propertyRes.data.insertedId) {
        Swal.fire({
          title: "Your Property Successfully added!",
          showClass: {
            popup: `
              animate__animated
              animate__fadeInUp
              animate__faster
            `,
          },
          hideClass: {
            popup: `
              animate__animated
              animate__fadeOutDown
              animate__faster
            `,
          },
        });
        reset();
      }
    }
  };

  return (
    <section className="w-full">
      <div className="mx-4 my-14">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-normal text-[#FDB913]">
            List Your Real Estate
          </h1>
          <h1 className="text-base md:text-xl lg:text-2xl md:w-[60%] mt-3 font-normal text-[#39474F]">
            Fill out the form below to add a new property listing. Upload
            images, set the price range, and click Add Property to save your
            listing. Your name and email will be pre-filled based on your
            account information.
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-2/6"></div>
          <div className="w-full lg:w-4/6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="text-xl text-[#39474F] grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              {/* Property Title input */}
              <div className="mt-5 form-control">
                <label>
                  Property Title <span className="text-red-400">*</span>{" "}
                </label>
                <Input
                  variant="standard"
                  placeholder="Enter Your Property Title"
                  name="propertyTitle"
                  type="text"
                  size="md"
                  color="orange"
                  {...register("propertyTitle", { required: true })}
                  className="py-3 text-xl"
                />
                {errors.propertyTitle && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              {/* Property Image input */}
              <div className="mt-5 form-control">
                <label>
                  Property Image <span className="text-red-400">*</span>{" "}
                </label>
                <Input
                  variant="standard"
                  placeholder="Enter Your Property Image"
                  name="propertyImage"
                  type="file"
                  size="md"
                  color="orange"
                  {...register("propertyImage", { required: true })}
                  className="py-3 text-xl"
                />
                {errors.propertyImage && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              {/* Property Location input */}
              <div className="mt-5 form-control">
                <label>
                  Property Location <span className="text-red-400">*</span>{" "}
                </label>
                <Input
                  variant="standard"
                  placeholder="Enter Your Property Location"
                  name="propertyLocation"
                  type="text"
                  size="md"
                  color="orange"
                  {...register("propertyLocation", { required: true })}
                  className="py-3 text-xl"
                />
                {errors.propertyLocation && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              {/* Property Short Description input */}
              <div className="mt-5 form-control">
                <label>
                  Property Short Description{" "}
                  <span className="text-red-400">*</span>{" "}
                </label>
                <Input
                  variant="standard"
                  placeholder="Enter Your Property Short Description"
                  name="propertyShortDescription"
                  type="text"
                  size="md"
                  color="orange"
                  {...register("propertyShortDescription", { required: true })}
                  className="py-3 text-xl"
                />
                {errors.propertyShortDescription && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              {/* Property Long Description input */}
              <div className="mt-5 form-control">
                <label>
                  Property Long Description{" "}
                  <span className="text-red-400">*</span>{" "}
                </label>
                <Input
                  variant="standard"
                  placeholder="Enter Your Property Long Description"
                  name="propertyDescription"
                  type="text"
                  size="md"
                  color="orange"
                  {...register("propertyDescription", { required: true })}
                  className="py-3 text-xl"
                />
                {errors.propertyDescription && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              {/* Agent Name input */}
              <div className="mt-5 form-control">
                <label>
                  Agent Name <span className="text-red-400">*</span>{" "}
                </label>
                <Input
                  variant="standard"
                  placeholder="Enter Agent Name"
                  name="agentName"
                  readOnly
                  defaultValue={displayName}
                  type="text"
                  size="md"
                  color="orange"
                  {...register("agentName", { required: true })}
                  className="py-3 text-xl"
                />
                {errors.agentName && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              {/*Agent email input */}
              <div className="mt-5 form-control">
                <label>
                  Agent Email <span className="text-red-400">*</span>{" "}
                </label>
                <Input
                  variant="standard"
                  placeholder="Enter Agent Email Address"
                  name="agentEmail"
                  defaultValue={email}
                  readOnly
                  type="email"
                  size="md"
                  color="orange"
                  {...register("agentEmail", { required: true })}
                  className="py-3 text-xl"
                />
                {errors.agentEmail && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              {/*Property Price Range input */}

              <div className="mt-5">
                <label>
                  Price Range <span className="text-red-400">*</span>{" "}
                </label>
                <div className="flex gap-3 flex-row lg:flex-col form-control">
                  <input
                    placeholder="Min"
                    name="minPrice"
                    type="number"
                    {...register("minPrice", { required: true })}
                    className="py-3 text-xl border border-gray-300 rounded-l px-3"
                  />
                  {errors.minPrice && (
                    <span className="text-red-600">
                      Minimum price is required
                    </span>
                  )}
                  <input
                    placeholder="Max"
                    name="maxPrice"
                    type="number"
                    {...register("maxPrice", { required: true })}
                    className="py-3 text-xl border border-gray-300 rounded-r px-3"
                  />

                  {errors.maxPrice && (
                    <span className="text-red-600">
                      Maximum price is required
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-10">
                <Button
                  type="submit"
                  className="text-[#39474F] bg-[#FDB913] text-base rounded-full px-10"
                >
                  ADD PROPERTY
                </Button>
                {/* <ToastContainer /> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentAddProperty;
