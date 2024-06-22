import { RiDeleteBin5Fill } from "react-icons/ri";
import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";
import useAllReviews from "../../../hook/useAllReviews";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AdminManageReviews = () => {
  const { allReviews, refetch } = useAllReviews();
  const axiosSecure = useAxiosSecure();
  // handle users review delete
  const handleUsersReviewDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Delete this User Review?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/allReviews/${id}`).then((res) => {
          const result = res.data;
          if (result.deletedCount > 0) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "The Review is Deleted Successfully!",
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
        <title>NovaHomes | Admin Manage User Review , Page</title>
      </Helmet>
      <>
        <DynamicTitleDesc
          title={"Review Management Center"}
          subTitle={
            "Centralized control for managing user reviews across all properties. Reviewer details and feedback are presented on each card, facilitating insightful analysis. Admins can maintain content integrity by deleting reviews, ensuring quality and relevance across the platform."
          }
        />
      </>
      <div>
        {allReviews.map((review) => (
          <div
            key={review._id}
            className="w-[80%] mx-auto border-2 border-[#39474F] bg-white p-3 rounded-2xl flex items-center flex-col md:flex-row gap-5 mb-8"
          >
            <div className="md:w-[90%] mx-auto">
              <p className="text-xl font-semibold  py-2 flex items-center gap-3">
                <span>Reviewer Image : </span>
                <div className="avatar">
                  <div className="w-12 md:w-14 mask mask-squircle">
                    <img
                      referrerPolicy="no-referrer"
                      src={review.reviewerPhoto}
                    />
                  </div>
                </div>
              </p>
              <p className="text-xl font-semibold  py-2 ">
                <span>Reviewer Name : </span>
                <span className="opacity-85">{review.reviewerName}</span>
              </p>
              <p className="text-xl font-semibold  py-2 ">
                <span>Reviewer Email : </span>
                <span className="opacity-85">{review.reviewerEmail}</span>
              </p>
              <p className="text-xl font-semibold  py-2 md:w-[80%]">
                <span>Review Description : </span>
                <span className="opacity-85"> {review.reviewerReview}</span>
              </p>
            </div>
            <div
              onClick={() => handleUsersReviewDelete(review._id)}
              className="hover:scale-110 transition-all p-2 rounded-xl cursor-pointer mr-5 bg-red-400"
            >
              <RiDeleteBin5Fill className="text-2xl text-white" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdminManageReviews;
