import DynamicTitleDesc from "../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import PropertyCard from "../../Shared/propertyCard/PropertyCard";

import useAllVerifiedProperties from "../../hook/useAllVerifiedProperties";

const AllProperties = () => {
  const { allAdminVerifiedProperites } = useAllVerifiedProperties();

  return (
    <section>
      <div className="md:pt-1 md:pb-10 w-[98%] mx-auto">
        <DynamicTitleDesc
          title={"Explore Verified Properties"}
          subTitle={
            "Welcome to our comprehensive property listings page. Discover a diverse range of verified properties with detailed descriptions, high-resolution images, and transparent pricing. Use our advanced search filters to find the perfect property tailored to your needs. Start your search today and find your ideal home or investment."
          }
        />
      </div>
      <div className="w-[95%] md:w-full mx-auto">
        {allAdminVerifiedProperites.map((property, idx) => (
          <PropertyCard property={property} key={idx} idx={idx}></PropertyCard>
        ))}
      </div>
    </section>
  );
};

export default AllProperties;
