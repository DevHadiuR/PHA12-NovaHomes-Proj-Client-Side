import useAuth from "../../hook/useAuth";
import useRole from "../../hook/useRole";

const Profile = () => {
  const { userRole } = useRole();
  const runningUserRole = userRole.userRole;
  console.log(runningUserRole);
  const { user } = useAuth();
  const { email, displayName, photoURL } = user || {};

  return (
    <section>
      <div className="bg-[#FDB913] h-24 md:h-36  lg:h-44 w-full relative"></div>
      <div className="avatar absolute top-14 md:top-16 lg:top-24 right-1/4 md:right-1/3 border-2 p-1 shadow-xl rounded-full bg-white">
        <div className=" w-24 md:w-40 rounded-full ">
          <img src={photoURL} />
        </div>
      </div>
      {/* user name with animated btn */}
      <div className="mt-20 md:mt-24 flex justify-center ">
        <a
          href="#_"
          className="relative inline-flex items-center justify-start px-10 md:px-16 py-2 md:py-3 overflow-hidden font-medium transition-all bg-red-500 rounded-xl group "
        >
          <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-red-700 rounded group-hover:-mr-4 group-hover:-mt-4">
            <span className="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
          </span>
          <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-red-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white text-xl md:text-2xl font-bold">
            {displayName}
          </span>
        </a>
      </div>

      <div className="flex flex-col md:flex-row gap-5 lg:gap-0 justify-between w-[95%] md:w-[90%] mx-auto mt-10 shadow-lg bg-white py-10 px-5 md:px-10 rounded-3xl md:rounded-full">
        <div className="bg-primary text-white text-2xl font-bold px-8 py-2 rounded-full">
          <span>Email : </span>
          <span>{email}</span>
        </div>
        <div className="bg-secondary text-white text-2xl font-bold px-8 py-2 rounded-full">
          <span>Contact :</span>
          <span>019999999</span>
        </div>

        {/* {runningUserRole === "admin" ||
          (runningUserRole === "agent" && (
            <div className="bg-accent text-white text-2xl font-bold px-8 py-2 rounded-full">
              <span>Role :</span>
              <span>{runningUserRole}</span>
            </div>
          ))} */}

        {runningUserRole !== undefined && (
          <div className="bg-accent text-white text-2xl font-bold px-8 py-2 rounded-full">
            <span>Role :</span>
            <span>{runningUserRole}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
