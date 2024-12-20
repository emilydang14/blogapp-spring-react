import "./Header.scss";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
//
import logo from "../../assets/content_imgs/logo.png";
//
import Button from "../../components/UI/Button/Button";

const Header = ({ isHomePage }) => {
  const navigate = useNavigate();

  return (
    <div className={"Header"}>
      <div className={"Header_left"}>
        <img
          className={"Header_logo_img"}
          src={logo}
          alt="sweeter-tweeter-logo"
          onClick={() => navigate("/")}
        />
      </div>
      <div className={"Header_right"}>
          <Button
            name={!isHomePage ? "Back To HomePage" : "Create Post"}
            shape="oval"
            className="pointerCursor"
            disabled={false}
            onClick={() => !isHomePage ? navigate("/") : navigate("/create")}
          />
      </div>
    </div>
  );
};

Header.propTypes = {
  isHomePage: PropTypes.bool.isRequired,
}

export default Header;
