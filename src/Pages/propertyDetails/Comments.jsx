import { Button, Dialog } from "@material-tailwind/react";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Comments = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="mt-40">
      {/* comment section */}
      <section className="bg-white dark:bg-gray-900 py-8 lg:py-16 antialiased">
        <div className="w-[95%] mx-auto">
          {/* 1st part */}
          <div className="flex  justify-between items-center">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
                {/* Comments ({comments.length}) */}
                (13) Reviews
              </h2>
            </div>
            {/* {bloggerEmail !== email && (
              <div className="flex justify-end my-6">
                <Button type="submit" gradientDuoTone="purpleToBlue" pill>
                  Comment
                </Button>
              </div>
            )} */}
            <div className="my-6">
              <Button
                color="amber"
                className="select-none rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-[#39474F] shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="true"
                data-dialog-target="animated-dialog"
                onClick={handleOpen}
              >
                Leave a Review
              </Button>
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
                  <div className="">
                    <div className="avatar ring-2 p-1 rounded-full ring-amber-500 mb-4">
                      <div className="w-14 rounded-full">
                        {/* <img src={photoURL} referrerPolicy="no-referrer" /> */}
                        <img
                          src="https://i.ibb.co/dc6DXV9/5.jpg"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>

                    {/* <form onSubmit={handleSubmit} className="mb-6"> */}
                    <form className="mb-6">
                      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
                        {/* {email === bloggerEmail ? (
                <input
                  type="text"
                  placeholder="Can not comment on own blog"
                  className="input input-bordered w-full max-w-sm text-xl "
                  disabled
                />
              ) : (
                <textarea
                  id="comment"
                  rows="6"
                  name="comment"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              )} */}
                        <textarea
                          id="comment"
                          rows="6"
                          name="comment"
                          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                          placeholder="Write a comment..."
                          required
                        ></textarea>
                      </div>
                    </form>
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
                      data-ripple-light="true"
                      data-dialog-close="true"
                      className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Submit
                    </button>
                  </div>
                </Dialog>
              </div>
            </div>
          </div>

          {/* 2nd part */}
          <div>
            {/* user comments */}
            {/* {comments.map((comment) => (
            <article
              key={comment._id}
              className="p-6 mb-3 text-base bg-white border-t border-gray-300 dark:border-gray-700 dark:bg-gray-900"
            >
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      referrerPolicy="no-referrer"
                      className="mr-2 w-10 h-10 rounded-full"
                      src={comment.photoURL}
                      alt="Bonnie Green"
                    />
                    {comment.displayName}
                  </p>
                </div>
                <div>
                  <button
                    onClick={() =>
                      handleCommentDelete(comment._id, comment.commenterEmail)
                    }
                  >
                    <RiDeleteBin6Line className="text-2xl" />
                  </button>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400 break-all">
                {comment.userComment}
              </p>
            </article>
          ))} */}
            <article className="p-6 mb-3 mt-8 text-base bg-white border-t border-gray-300 dark:border-gray-700 dark:bg-gray-900">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <img
                      referrerPolicy="no-referrer"
                      className="mr-2 w-10 h-10 rounded-full"
                      src="https://i.ibb.co/dc6DXV9/5.jpg"
                      alt="Bonnie Green"
                    />
                    Hadiur Rahman
                  </p>
                </div>
                <div>
                  <button>
                    <RiDeleteBin6Line className="text-2xl" />
                  </button>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400 break-all">
                Very Very Good
              </p>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comments;
