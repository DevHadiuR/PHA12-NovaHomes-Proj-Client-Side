import { Button, Dialog } from "@material-tailwind/react";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import useAxiosSecure from "../../hook/useAxiosSecure";
import useAuth from "../../hook/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
// import { toast } from "react-toastify";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";

const Comments = ({ userEmail, agentEmail, propertyId }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { displayName, photoURL, email } = user || {};

  //   using tanstack for post data
  const { mutate } = useMutation({
    mutationFn: async (reviewData) => {
      try {
        const value = await axiosSecure.post("/allReviews", reviewData);
        const data = value.data;
        console.log(data);
        return data; //
      } catch (err) {
        console.log(err);
        throw err;
      }
    },
    onSuccess: () => {
      toast.success("Thank You So Much For Your Review!");
      refetch();
    },
    onError: (error) => {
      toast.error("An error occurred while submitting your review!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const reviewerReview = e.target.review.value;

    const reviewData = {
      reviewerReview,
      reviewerEmail: email,
      reviewerPhoto: photoURL,
      reviewerName: displayName,
      agentEmail,
      propertyId,
    };

    mutate(reviewData);
    e.target.reset();
  };

  // get all the review for this specific property
  const { data: allReviews = [], refetch } = useQuery({
    queryFn: () => getReviews(),
    queryKey: ["getReviewsByID"],
  });

  const getReviews = async () => {
    const { data } = await axiosSecure(`/allReviews/${propertyId}
  `);
    return data;
  };

  // handle delete review
  const handleReviewDelete = (id, reviewerEmail) => {
    console.log(id, reviewerEmail);

    if (reviewerEmail !== email) {
      toast.error("Cannot Delete Others Comment!");
      return;
    }

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
        axiosSecure.delete(`/allReviews/${id}`).then((data) => {
          const value = data.data;

          if (value.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Review has been deleted.",
              icon: "success",
            });
          }
          console.log(value);
        });
      }
    });
  };

  return (
    <div className="mt-40">
      {/* comment section */}
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div className="w-[95%] mx-auto">
          {/* 1st part */}
          <div className="flex  justify-between items-center">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                ({allReviews.length}) Reviews
              </h2>
            </div>

            <div className="my-6">
              {userEmail === agentEmail ? (
                <Button
                  disabled
                  color="amber"
                  className="select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#39474F] shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                  data-dialog-target="animated-dialog"
                  onClick={handleOpen}
                >
                  Leave a Review
                </Button>
              ) : (
                <Button
                  color="amber"
                  className="select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#39474F] shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="true"
                  data-dialog-target="animated-dialog"
                  onClick={handleOpen}
                >
                  Leave a Review
                </Button>
              )}

              <div
                data-dialog-backdrop="animated-dialog"
                data-dialog-backdrop-close="true"
                className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center   opacity-0 backdrop-blur-sm transition-opacity duration-300"
              >
                <Dialog
                  handler={handleOpen}
                  open={open}
                  data-dialog="animated-dialog"
                  data-dialog-mount="opacity-100 translate-y-0 scale-100"
                  data-dialog-unmount="opacity-0 -translate-y-28 scale-90 pointer-events-none"
                  data-dialog-transition="transition-all duration-300"
                  className="relative m-4  rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl p-8"
                >
                  {/* 3rd part */}
                  <form onSubmit={handleSubmit}>
                    <div className="">
                      <div className="avatar ring-2 p-1 rounded-full ring-amber-500 mb-4">
                        <div className="w-14 rounded-full">
                          {/* <img src={photoURL} referrerPolicy="no-referrer" /> */}
                          <img src={photoURL} referrerPolicy="no-referrer" />
                        </div>
                      </div>

                      {/* <form  className="mb-6"> */}
                      <div className="mb-6 form-control">
                        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
                          <textarea
                            id="comment"
                            rows="6"
                            name="review"
                            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                            placeholder="Write a comment..."
                            required
                          ></textarea>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500 gap-3">
                      <button
                        onClick={handleOpen}
                        data-ripple-dark="true"
                        data-dialog-close="true"
                        className="px-6 py-3 mr-1 font-sans text-xs font-bold text-red-500 uppercase transition-all rounded-lg middle none center hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        data-ripple-light="true"
                        data-dialog-close="true"
                        className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                      >
                        Submit
                      </button>
                      <Toaster position="top-right" />
                    </div>
                  </form>
                </Dialog>
              </div>
            </div>
          </div>

          {/* 2nd part */}
          <div>
            {/* user comments */}

            {allReviews.map((review) => (
              <article
                key={review._id}
                className="p-6 mb-3 mt-8 text-base bg-white border-t border-gray-300 dark:border-gray-700 dark:bg-gray-900"
              >
                <footer className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <p className="inline-flex items-center mr-3 text-sm md:text-base text-gray-900 dark:text-white font-semibold">
                      <img
                        referrerPolicy="no-referrer"
                        className="mr-2 w-10 h-10 rounded-full"
                        src={review.reviewerPhoto}
                        alt="Bonnie Green"
                      />
                      {review.reviewerName}
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      handleReviewDelete(review._id, review.reviewerEmail)
                    }
                    className="hover:bg-red-400 p-1 px-2
                  pt-2 hover:text-white rounded-lg transition-all cursor-pointer "
                  >
                    <button>
                      <RiDeleteBin6Line className="text-2xl" />
                    </button>
                  </div>
                </footer>
                <p className="text-gray-500 dark:text-gray-400 break-all md:text-lg">
                  {review.reviewerReview}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comments;
