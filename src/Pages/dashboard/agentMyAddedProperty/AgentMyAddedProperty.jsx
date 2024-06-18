
import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import PropertyCard from "../../../Shared/propertyCard/PropertyCard";
import usePropertyByEmail from "../../../hook/usePropertyByEmail";


const AgentMyAddedProperty = () => {
const {allPropertiesByEmail} = usePropertyByEmail();

  return (
    <section>
      <>
        <DynamicTitleDesc
          title={"My Added Properties"}
          subTitle={
            "View and manage all properties you have listed. Each property card includes details such as the property image, title, location, and your agent information. Track the verification status, update property details, and delete listings as needed."
          }
        />
      </>
      <div className="w-[95%] mx-auto">
        {allPropertiesByEmail.map((property, idx) => (
          <PropertyCard key={idx} property={property} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default AgentMyAddedProperty;
