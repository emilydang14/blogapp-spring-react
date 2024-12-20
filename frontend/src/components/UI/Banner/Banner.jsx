import Button from "../Button/Button";
import "./Banner.scss"
import homepage from "../../../assets/content_imgs/homepage.png";

const Banner = () => {
    return <div className={"homepage-banner-container"}>
            <img className={"homepage-header-img"} src={homepage} alt="" />
            <Button
                name="by Emily Dang"
                shape="oval"
                className="banner-label cursor-none"
                disabled={true}
            />
    </div>
}

export default Banner;