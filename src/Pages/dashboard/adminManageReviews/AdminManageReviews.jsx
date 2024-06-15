import { RiDeleteBin5Fill } from "react-icons/ri";
import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";

const AdminManageReviews = () => {
  return (
    <section>
      <>
        <DynamicTitleDesc
          title={"Review Management Center"}
          subTitle={
            "Centralized control for managing user reviews across all properties. Reviewer details and feedback are presented on each card, facilitating insightful analysis. Admins can maintain content integrity by deleting reviews, ensuring quality and relevance across the platform."
          }
        />
      </>
      <div>
        <div className="w-[80%] mx-auto border-2 border-[#39474F] bg-white p-3 rounded-2xl flex items-center flex-col md:flex-row gap-5">
          <div className="md:w-[90%] mx-auto">
            <p className="text-xl font-semibold  py-2 flex items-center gap-3">
              <span>Reviewer Image : </span>
              <div className="avatar">
                <div className="w-12 md:w-14 mask mask-squircle">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </p>
            <p className="text-xl font-semibold  py-2 ">
              <span>Reviewer Name : </span>
              <span className="opacity-85">Kala Miah</span>
            </p>
            <p className="text-xl font-semibold  py-2 ">
              <span>Reviewer Email : </span>
              <span className="opacity-85">kala@dola.com</span>
            </p>
            <p className="text-xl font-semibold  py-2 md:w-[80%]">
              <span>Review Description : </span>
              <span className="opacity-85">
                {" "}
                I recently purchased a beautiful home through this platform, and
                I couldnt be happier! The process was smooth, and the agent was
                incredibly helpful. Highly recommend!
              </span>
            </p>
          </div>
          <div className="hover:scale-110 transition-all p-2 rounded-xl cursor-pointer mr-5 bg-red-400">
            <RiDeleteBin5Fill className="text-2xl text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminManageReviews;
