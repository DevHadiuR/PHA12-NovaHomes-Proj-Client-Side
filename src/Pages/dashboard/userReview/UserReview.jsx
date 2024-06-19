import { RiDeleteBin5Fill } from "react-icons/ri";
import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import useAuth from "../../../hook/useAuth";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";

const UserReview = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: allReviewsByEmail = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["allReviewsByEmail", user?.emal],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allReviewsByEmail/${user?.email}`);
      return res.data;
    },
  });

  if (isPending) {
    <p className="text-xl text-center mt-20">loading...</p>;
  }

  const handleMyReviewDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Delete this Review?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/allMyReviews/${id}`).then((res) => {
          const result = res.data;
          if (result.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "This Review is now Deleted!",
              showConfirmButton: false,
              timer: 2000,
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <>
        <DynamicTitleDesc
          title={"Feedback on Properties"}
          subTitle={
            "See all your reviews for properties you've interacted with. Manage and delete your feedback as needed, ensuring your reviews are always up to date."
          }
        />
      </>

      <div>
        {allReviewsByEmail.map((review) => (
          <div
            key={review._id}
            className="w-[80%] mx-auto border-2 border-[#39474F] bg-white p-3 rounded-2xl flex items-center flex-col md:flex-row gap-5 mb-10"
          >
            <div className="md:w-[90%] mx-auto">
              <p className="text-xl font-semibold  py-2 ">
                <span>Property Title : </span>
                <span className="opacity-85"> {review.propertyTitle}</span>
              </p>
              <p className="text-xl font-semibold  py-2 ">
                <span>Agent Email : </span>
                <span className="opacity-85">{review.agentEmail}</span>
              </p>
              <p className="text-xl font-semibold  py-2 ">
                <span>Review Time : </span>
                <span className="opacity-85">{review.reviewTime}</span>
              </p>
              <p className="text-xl font-semibold  py-2 md:w-[80%]">
                <span>Review Description : </span>
                <span className="opacity-85">{review.reviewerReview}</span>
              </p>
            </div>
            <div
              onClick={() => handleMyReviewDelete(review._id)}
              className="hover:scale-110 transition-all p-2 rounded-xl cursor-pointer mr-5 bg-red-400"
            >
              <RiDeleteBin5Fill className="text-2xl text-white" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
