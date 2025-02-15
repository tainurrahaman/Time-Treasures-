import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import Banner from "../Components/Banner";
import Vision from "../Components/Vision";
import History from "../Components/History";
import MostLikedArtifact from "../Components/Pages/MostLikedArtifact";
import Subscribe from "../Components/Pages/Subscribe";

const Homelayout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto my-5 font-roboto font-normal">
        <Navbar></Navbar>
        <Banner></Banner>
        <History></History>
        <MostLikedArtifact></MostLikedArtifact>
        <Vision></Vision>
        <Subscribe></Subscribe>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Homelayout;
