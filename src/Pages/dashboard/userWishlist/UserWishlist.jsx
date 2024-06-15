import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import PropertyCard from "../../../Shared/propertyCard/PropertyCard";
import useAllProperties from "../../../hook/useAllProperties";

const UserWishlist = () => {
  const { allProperties } = useAllProperties();

  return (
    <section>
      <>
        <DynamicTitleDesc
          title={"Your Preferred Properties"}
          subTitle={
            "Welcome to your Wishlist, where you can view and manage your favorite properties in one place. Easily access the homes that caught your eye and compare features to make informed decisions on your next dream home."
          }
        />
      </>

      {/* load here all the wishlist */}
      <div className="w-[95%] mx-auto">
        {allProperties.map((property, idx) => (
          <PropertyCard key={idx} property={property} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default UserWishlist;
