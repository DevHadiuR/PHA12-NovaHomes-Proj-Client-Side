import DynamicTitleDesc from "../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import PropertyCard from "../../Shared/propertyCard/PropertyCard";

const AllProperties = () => {
  return (
    <section>
      <div>
        <DynamicTitleDesc
          title={"Explore All Verified Properties"}
          subTitle={
            "Welcome to our comprehensive property listings page. Discover a diverse range of verified properties with detailed descriptions, high-resolution images, and transparent pricing. Use our advanced search filters to find the perfect property tailored to your needs. Start your search today and find your ideal home or investment."
          }
        />
      </div>
      <div>
        <PropertyCard></PropertyCard>
      </div>
    </section>
  );
};

export default AllProperties;
