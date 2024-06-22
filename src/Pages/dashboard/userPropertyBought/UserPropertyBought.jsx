import { Helmet } from "react-helmet-async";
import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import PropertyCard from "../../../Shared/propertyCard/PropertyCard";
import useAllOfferedPropertiesByEmail from "../../../hook/useAllOfferedPropertiesByEmail";

const UserPropertyBought = () => {
  const { allOfferedPropertiesByEmail, isLoading } =
    useAllOfferedPropertiesByEmail();

  if (isLoading) {
    return <p className="text-xl mt-20 text-center">loading....</p>;
  }

  return (
    <section>
       <Helmet>
        <title>NovaHomes | User Bought Property Showing Page</title>
      </Helmet>
      <>
        <DynamicTitleDesc
          title={"Properties You Have Offered On"}
          subTitle={
            "View and manage the properties you’ve made offers on. Track the status of each offer, complete payments, and keep all your transaction details in one place."
          }
        />
      </>

      {/* all the properties that the user had offered will show here */}
      <div>
        <div className="w-[95%] mx-auto">
          {allOfferedPropertiesByEmail.map((property, idx) => (
            <PropertyCard key={idx} property={property} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserPropertyBought;
