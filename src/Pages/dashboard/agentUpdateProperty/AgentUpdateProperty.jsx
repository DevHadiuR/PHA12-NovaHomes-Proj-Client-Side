import { useParams } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useForm } from "react-hook-form";
import { Button, Input } from "@material-tailwind/react";
import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import Swal from "sweetalert2";
const imgBB_api =
  "https://api.imgbb.com/1/upload?key=667d80a3b99faf5238f607dc5cc13485";

const AgentUpdateProperty = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { displayName, email } = user || {};
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const { data: property = [] } = useQuery({
    queryKey: ["perPropertyById"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/propertiesById/${id}`);
      return res.data;
    },
  });

  const { propertyTitle, propertyLocation, maxPrice, minPrice } =
    property || {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { mutate } = useMutation({
    mutationFn: (updateData) => {
      axiosSecure
        .put(`/allProperties/${id}`, updateData)
        .then((value) => {
          const data = value.data;
          console.log(data);

          return data;
        })
        .catch((err) => console.log(err));
    },
    onSuccess: () => {
      Swal.fire({
        title: "Successfully Updated Data!",
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
      //   window.location.reload(true);
      reset();
    },
  });

  const onSubmit = async (data) => {
    const imgFile = {
      image: data.propertyImage[0],
    };
    const res = await axiosPublic.post(imgBB_api, imgFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    const updateData = {
      propertyTitle: data.propertyTitle,
      propertyLocation: data.propertyLocation,
      propertyImage: res.data.data.display_url,
      agentName: data.agentName,
      agentImage: data.agentImage,
      agentEmail: data.agentEmail,
      minPrice: parseFloat(data.minPrice),
      maxPrice: parseFloat(data.maxPrice),
    };

    mutate(updateData);
  };

  return (
    <section className="w-full">
      <div className="mx-4 my-14">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-normal text-[#FDB913]">
            Edit Property Listing
          </h1>
          <h1 className="text-base md:text-xl lg:text-2xl md:w-[60%] mt-3 font-normal text-[#39474F]">
            Update your property details quickly and easily. Modify the image,
            title, location, and price range. The form is pre-filled with
            existing values for your convenience. Submit to save changes to the
            database.
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
                  defaultValue={propertyTitle}
                  placeholder="Enter Your Property Title"
                  name="propertyTitle"
                  type="text"
                  size="md"
                  color="orange"
                  {...register("propertyTitle", { required: false })}
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
                  defaultValue={propertyLocation}
                  placeholder="Enter Your Property Location"
                  name="propertyLocation"
                  type="text"
                  size="md"
                  color="orange"
                  {...register("propertyLocation", { required: false })}
                  className="py-3 text-xl"
                />
                {errors.propertyLocation && (
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
                  {...register("agentName", { required: false })}
                  className="py-3 text-xl"
                />
                {errors.agentName && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              {/* Agent Image input */}
              <div className="mt-5 form-control">
                <label>
                  Agent Image <span className="text-red-400">*</span>{" "}
                </label>
                <Input
                  variant="standard"
                  placeholder="Enter Agent Image"
                  name="agentImage"
                  readOnly
                  defaultValue={user?.photoURL}
                  type="url"
                  size="md"
                  color="orange"
                  {...register("agentImage", { required: false })}
                  className="py-3 text-xl"
                />
                {errors.agentImage && (
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
                  {...register("agentEmail", { required: false })}
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
                    defaultValue={minPrice}
                    type="number"
                    {...register("minPrice", { required: false })}
                    className="py-3 text-xl border border-gray-300 rounded-l px-3 w-[50%] lg:w-full"
                  />
                  {errors.minPrice && (
                    <span className="text-red-600">
                      Minimum price is required
                    </span>
                  )}
                  <input
                    placeholder="Max"
                    name="maxPrice"
                    defaultValue={maxPrice}
                    type="number"
                    {...register("maxPrice", { required: false })}
                    className="py-3 text-xl border border-gray-300 rounded-r px-3 w-[50%] lg:w-full"
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
                  UPDATE PROPERTY
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

export default AgentUpdateProperty;
