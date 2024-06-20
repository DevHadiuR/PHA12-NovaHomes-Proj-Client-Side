<section className="w-full">
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
              //   onSubmit={handleSubmit(onSubmit)}
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
              {/* Property short description input */}
              <div className="mt-5 form-control">
                <label>
                  Property Short Description{" "}
                  <span className="text-red-400">*</span>{" "}
                </label>
                <Input
                  variant="standard"
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
                  //   defaultValue={email}
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

              {/*Offered Price Range input */}

              <div className="mt-5">
                <label>
                  Price Range <span className="text-red-400">*</span>{" "}
                </label>
                <div className="flex gap-3 flex-row lg:flex-col form-control">
                  <input
                    placeholder="Min"
                    name="minPrice"
                    defaultValue={property?.minPrice}
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
                    defaultValue={property?.maxPrice}
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