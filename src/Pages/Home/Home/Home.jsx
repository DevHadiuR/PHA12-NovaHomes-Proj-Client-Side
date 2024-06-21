import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Advertisement from "../advertisement/Advertisement";
import LatestReviews from "../latestReviews/LatestReviews";
import Newslatter from "../newslatter/Newslatter";
import OurTeam from "../Home/ourTeam/OurTeam";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>NovaHomes | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
      <div className="md:w-[90%] mx-auto">
        <Advertisement></Advertisement>
      </div>
      <div className="md:w-[90%] mx-auto">
        <LatestReviews></LatestReviews>
      </div>
      <div className="">
        <OurTeam></OurTeam>
      </div>
      <div>
        <Newslatter></Newslatter>
      </div>
    </div>
  );
};

export default Home;
