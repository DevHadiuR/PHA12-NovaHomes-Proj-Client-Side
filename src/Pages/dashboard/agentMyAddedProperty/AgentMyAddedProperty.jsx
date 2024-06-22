import Swal from "sweetalert2";
import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import PropertyCard from "../../../Shared/propertyCard/PropertyCard";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import usePropertyByEmail from "../../../hook/usePropertyByEmail";
import { Helmet } from "react-helmet-async";

const AgentMyAddedProperty = () => {
  const { allPropertiesByEmail, refetch } = usePropertyByEmail();
  const axiosSecure = useAxiosSecure();

  const handlePropertyDelete = async (id) => {
    // const res = await axiosSecure.delete(`allProperties/${id}`)

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/allProperties/${id}`).then((data) => {
          const value = data.data;

          if (value.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Property has been deleted.",
              icon: "success",
            });
          }
          console.log(value);
        });
      }
    });
  };

  return (
    <section>
       <Helmet>
        <title>NovaHomes | Agent Added Property Showing Page</title>
      </Helmet>
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
          <PropertyCard
            key={idx}
            property={property}
            idx={idx}
            handlePropertyDelete={handlePropertyDelete}
          />
        ))}
      </div>
    </section>
  );
};

export default AgentMyAddedProperty;
