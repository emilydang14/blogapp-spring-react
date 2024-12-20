import { useNavigate } from "react-router-dom";
import { formatDateTime } from "../../../utils";
import "./PostItem.scss";
//
import PropTypes from "prop-types";
import Button from "../../../components/UI/Button/Button";
//

const PostItem = ({ post }) => {
  const {id, author, img, creationTime, body, title} = post;
  const navigate = useNavigate();

  const truncateHTML = (html, maxLength = 500) => {
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;

    let text = tempDiv.textContent || tempDiv.innerText || "";
    if (text.length <= maxLength) return html;

    return text.slice(0, maxLength) + "...";
  };

  return (
    <div id={id} className="post_item">
      <div className={"post_item_info"}>
        <p>{author}</p>
        <p>{formatDateTime(creationTime)}</p>
      </div>
      <div className="post_item_title">
        <p>{title}</p>
      </div>
      <div className={"post_item_img_container"}>
        {img &&  <img src={img} />}
      </div>
      <p className="body" dangerouslySetInnerHTML={{__html: truncateHTML(body, 500)}}></p>
      <div className="post_item_action_buttons">
        <Button
          name={"Read more"}
          shape="oval"
          className="center pointerCursor no-bg"
          disabled={false}
          onClick={() => navigate("/post/" + id)}
        />
      </div>
    </div>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostItem;
