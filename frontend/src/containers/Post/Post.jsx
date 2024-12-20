import { useParams } from "react-router-dom";
import { formatDateTime } from "../../utils";
import "../Posts/PostItem/PostItem.scss";
import "./Post.scss";
//
import Button from "../../components/UI/Button/Button";
import Header from "../Header/Header";
import Banner from "../../components/UI/Banner/Banner";
import Spinner from "../../components/UI/Spinner/Spinner";
import PropTypes from "prop-types";
import usePost from "./usePost";
import { useState } from "react";
import DeleteModal from "./DeleteModal/DeleteModal";

const Post = () => {
    const { id } = useParams()
    const { post, loading, deletePost, editPost } = usePost({ id })

    if (!post) {
        return  <div className="post">
            <Header isHomePage={false} />
            <Banner />
            <h3>Post not found</h3>
        </div>
    } else if (loading) {
        return <div className="post">
            <Spinner/>
        </div>
    } else {
        return <div className="post">
            <Header isHomePage={false} />
            <PostBody post={post} deletePost={deletePost} editPost={editPost} />
        </div>
    }
};

const PostBody = ({ post, deletePost, editPost }) => {
    const {id, author, img, creationTime, body, title} = post; 
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <>
          <DeleteModal showModal={showDeleteModal} setShowModal={setShowDeleteModal} deletePost={deletePost}/>

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
              <p className="body" dangerouslySetInnerHTML={{__html: body}}></p>
              <div className="post_item_action_buttons">
                <Button
                  name={"Edit"}
                  shape="oval"
                  className="center pointerCursor min-width80 no-bg boder-solid"
                  disabled={false}
                  onClick={editPost}
                />
                <Button
                  name={"Delete"}
                  shape="oval"
                  className="center pointerCursor min-width80"
                  disabled={false}
                  onClick={() => setShowDeleteModal(true)}
                />
              </div>
          </div>
        </>
    )
}

PostBody.propTypes = {
  post: PropTypes.object.isRequired, 
  deletePost: PropTypes.func.isRequired,
  editPost: PropTypes.func.isRequired
}

export default Post;
