import { Button, Input } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const UserMakeAnOfferBtn = () => {
  const { id } = useParams();
  const { user, loader } = useAuth();
  const { displayName, email } = user || {};
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const now = new Date();
  const options = {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  const formatter = new Intl.DateTimeFormat("en-US", options);
  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
    ,
    { value: hour },
    ,
    { value: minute },
    ,
    { value: second },
    ,
    { value: dayPeriod },
  ] = formatter.formatToParts(now);
  const buyingTime = `${month} ${day}, ${year}, ${hour}:${minute}:${second} ${dayPeriod}`;

  const { data: propertyById = [], isLoading } = useQuery({
    queryKey: ["makeAnOfferWishlistItem", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/makeAnOfferWishlistItem/${id}`);
      return res.data;
    },
  });

  const {
    propertyTitle,
    propertyLocation,
    maxPrice,
    minPrice,
    propertyImage,
    propertyShortDescription,
    agentName,
    agentEmail,
    agentImage,
    _id,
  } = propertyById || {};

  if (isLoading || loader) {
    return <p className="text-xl text-center mt-20">Loading....</p>;
  }

  const onSubmit = (data) => {
    if (data.offerPrice < minPrice) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `The Min Offered Amount Cannot Be Less Then : $${minPrice} `,
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    } else if (data.offerPrice > maxPrice) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: `The Max Offered Amount Cannot Be More Then : $${maxPrice} `,
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    // else if (data.offerPrice > maxPrice) {
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "error",
    //     title: `Minimum Offer price cannot be greater than maximum price`,
    //     showConfirmButton: false,
    //     timer: 2000,
    //   });
    //   return;
    // }
    // else if (data.offerPrice < minPrice) {
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "error",
    //     title: `Maximum Offer price cannot be less than minimum price.`,
    //     showConfirmButton: false,
    //     timer: 2000,
    //   });
    //   return;
    // }
    // else if (data.minOfferPrice > data.maxOfferPrice) {
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "error",
    //     title: `Minimum Offer price cannot be greater than maximum offer price.`,
    //     showConfirmButton: false,
    //     timer: 2000,
    //   });
    //   return;
    // }

    const offerData = {
      ...data,
      propertyId: _id,
    };

    console.log(offerData);

    Swal.fire({
      title: "Are you sure?",
      text: "You want to Offer on this Property?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make an Offer!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/allOfferedProperties", offerData).then((res) => {
          const result = res.data;
          if (result.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "You Have Successfully Offerd To This Property!",
              showConfirmButton: false,
              timer: 2000,
            });
            reset();
          }
        });
      }
    });

    console.log(data);
  };

  return (
    <section className="w-full">
       <Helmet>
        <title>NovaHomes | User Offer Making Page</title>
      </Helmet>
      <div className="mx-4 my-14">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-normal text-[#FDB913]">
            Submit Your Property Offer
          </h1>
          <h1 className="text-base md:text-xl lg:text-2xl md:w-[60%] mt-3 font-normal text-[#39474F]">
            Fill in your offer details and submit to the agent. Ensure your
            offer is within the specified price range. Your offer will be saved
            and marked as pending.
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
                  readOnly
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
                  defaultValue={propertyImage}
                  placeholder="Enter Your Property Image"
                  name="propertyImage"
                  readOnly
                  type=""
                  size="md"
                  color="orange"
                  {...register("propertyImage", { required: false })}
                  className="py-3 text-xl"
                />
                {errors.propertyImage && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              {/* Property short description input */}
              <div className="mt-5 form-control">
                <label>
                  Property Short Description{" "}
                  <span className="text-red-400">*</span>{" "}
                </label>
                <Input
                  variant="standard"
                  readOnly
                  defaultValue={propertyShortDescription}
                  placeholder="Enter Your Property Title"
                  name="propertyShortDescription"
                  type="text"
                  size="md"
                  color="orange"
                  {...register("propertyShortDescription", { required: false })}
                  className="py-3 text-xl"
                />
                {errors.propertyShortDescription && (
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
                  readOnly
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
                  defaultValue={agentName}
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
                  defaultValue={agentImage}
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
                  defaultValue={agentEmail}
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
              {/*Buyer email input */}
              <div className="mt-5 form-control">
                <label>
                  Buyer Email <span className="text-red-400">*</span>{" "}
                </label>
                <Input
                  variant="standard"
                  placeholder="Enter Buyer Email Address"
                  name="buyerEmail"
                  defaultValue={user?.email}
                  readOnly
                  type="email"
                  size="md"
                  color="orange"
                  {...register("buyerEmail", { required: false })}
                  className="py-3 text-xl"
                />
                {errors.buyerEmail && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              {/*Buyer Name input */}
              <div className="mt-5 form-control">
                <label>
                  Buyer Name <span className="text-red-400">*</span>{" "}
                </label>
                <Input
                  variant="standard"
                  placeholder="Enter Buyer Name Address"
                  name="buyerName"
                  defaultValue={user?.displayName}
                  readOnly
                  type="email"
                  size="md"
                  color="orange"
                  {...register("buyerName", { required: false })}
                  className="py-3 text-xl"
                />
                {errors.buyerName && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>
              {/*Buying Date input */}
              <div className="mt-5 form-control">
                <label>
                  Buying Date <span className="text-red-400">*</span>{" "}
                </label>
                <Input
                  variant="standard"
                  placeholder="Enter Agent Email Address"
                  name="buyingDate"
                  defaultValue={buyingTime}
                  readOnly
                  type=""
                  size="md"
                  color="orange"
                  {...register("buyingDate", { required: false })}
                  className="py-3 text-xl"
                />
                {errors.buyingDate && (
                  <span className="text-red-600">This field is required</span>
                )}
              </div>

              {/*Offered Amount Range input */}

              <div className="mt-5">
                <label>
                  Offer Price Range <span className="text-red-400">*</span>{" "}
                </label>
                <div className="flex gap-3 flex-row lg:flex-col form-control">
                  <input
                    placeholder={[minPrice, "-", maxPrice]}
                    name="offerPrice"
                    // defaultValue={[minPrice, "-", maxPrice]}
                    type="number"
                    {...register("offerPrice", { required: true })}
                    className="py-3 text-xl border border-gray-300 rounded-l px-3 w-[50%] lg:w-full"
                  />
                  {errors.offerPrice && (
                    <span className="text-red-600">
                      Offer price is required
                    </span>
                  )}
                  {/* <input
                    placeholder="Max Offer Price"
                    name="maxOfferPrice"
                    defaultValue={maxPrice}
                    type="number"
                    {...register("maxOfferPrice", { required: true })}
                    className="py-3 text-xl border border-gray-300 rounded-r px-3 w-[50%] lg:w-full"
                  />

                  {errors.maxOfferPrice && (
                    <span className="text-red-600">
                      Maximum price is required
                    </span>
                  )} */}
                </div>
              </div>

              <div className="mt-10">
                <Button
                  type="submit"
                  className="text-[#39474F] bg-[#FDB913] text-base rounded-full px-10"
                >
                  OFFER PROPERTY
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

export default UserMakeAnOfferBtn;
