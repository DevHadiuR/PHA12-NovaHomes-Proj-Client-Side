import { Helmet } from "react-helmet-async";
import Banner from "../banner/Banner";
import Testing from "../../../components/Testing";

const Home = () => {
  return (
    <div >
      <Helmet>
        <title>NovaHomes | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <Testing></Testing>
      </div>
      <div>
        <Testing></Testing>
      </div>
    </div>
  );
};

export default Home;
