import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>NovaHomes | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
    </div>
  );
};

export default Home;
