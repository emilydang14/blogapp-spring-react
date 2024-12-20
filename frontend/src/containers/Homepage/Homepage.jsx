import "./Homepage.scss";
//
import Header from "../Header/Header";
import Posts from "../Posts/Posts";
import Banner from "../../components/UI/Banner/Banner";

const Homepage = () => {
  return (
    <div className={"homepage"}>
      <Header isHomePage={true} />
      <Banner />
      <p className={"quote"}>
        {`"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment"`}
      </p>
      <Posts />
    </div>
  );
};

export default Homepage;
