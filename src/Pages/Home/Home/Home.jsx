import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Advertisement from "../advertisement/Advertisement";

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
    </div>
  );
};

export default Home;
