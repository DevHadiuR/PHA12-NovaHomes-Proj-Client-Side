import Swal from "sweetalert2";
import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import PropertyCard from "../../../Shared/propertyCard/PropertyCard";

import useUserAllWishlistByEmail from "../../../hook/useUserAllWishlistByEmail";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const UserWishlist = () => {
  const { allUserWishlistByEmail, refetch } = useUserAllWishlistByEmail();
  const axiosSecure = useAxiosSecure();

  // handle delete btn on wishlist page
  const handleRemoveWishlist = (id, email) => {
    console.log(id, email);

    Swal.fire({
      title: "Are you sure?",
      text: "You want to Delete this Wishlist item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete It!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/allWishlist?id=${id}&email=${email}`)
        .then((res) => {
          const result = res.data;
          if (result.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "This Wishlist is now Deleted!",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      }
    });
  };

  return (
    <section>
       <Helmet>
        <title>NovaHomes | User Wishlist Page</title>
      </Helmet>
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
        {allUserWishlistByEmail.map((property, idx) => (
          <PropertyCard
            handleRemoveWishlist={handleRemoveWishlist}
            key={idx}
            property={property}
            idx={idx}
          />
        ))}
      </div>
    </section>
  );
};

export default UserWishlist;
