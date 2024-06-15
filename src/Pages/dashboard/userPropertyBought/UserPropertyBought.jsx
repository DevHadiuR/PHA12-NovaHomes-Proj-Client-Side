import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import PropertyCard from "../../../Shared/propertyCard/PropertyCard";
import useAllProperties from "../../../hook/useAllProperties";

const UserPropertyBought = () => {
  const { allProperties } = useAllProperties();
  return (
    <section>
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
          {allProperties.map((property, idx) => (
            <PropertyCard key={idx} property={property} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserPropertyBought;
