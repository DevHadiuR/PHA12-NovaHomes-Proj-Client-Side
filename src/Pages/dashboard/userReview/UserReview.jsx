import { RiDeleteBin5Fill } from "react-icons/ri";
import DynamicTitleDesc from "../../../Shared/dynamicTitleDesc/DynamicTitleDesc";

const UserReview = () => {
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
        <div className="w-[80%] mx-auto border-2 border-[#39474F] bg-white p-3 rounded-2xl flex items-center flex-col md:flex-row gap-5">
          <div className="md:w-[90%] mx-auto">
            <p className="text-xl font-semibold  py-2 ">
              <span>Property Title : </span>
              <span className="opacity-85">
                {" "}
                Cozy Family Home in Suburban Area
              </span>
            </p>
            <p className="text-xl font-semibold  py-2 ">
              <span>Agent Name : </span>
              <span className="opacity-85">Hadiur Rahman</span>
            </p>
            <p className="text-xl font-semibold  py-2 ">
              <span>Review Time : </span>
              <span className="opacity-85">02 June , 2025</span>
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
    </div>
  );
};

export default UserReview;
