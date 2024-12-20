import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill"; // Rich text editor
import "react-quill/dist/quill.snow.css"; // Quill's default styling
import "../CreatePost/CreatePost.scss";
import Header from "../Header/Header";
import Button from "../../components/UI/Button/Button";
import axios from "axios";
import { RESOURCE_URL } from "../../config";

const EditPost = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const hasFetched = useRef();

  const [post, setPost] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (post) {
      const {body, title} = post; 

      setTitle(title);
      setContent(body);
    }
  }, [post])

  useEffect(() => {
    if (id) {
        if (hasFetched.current) return; // Prevent duplicate fetches
        hasFetched.current = true;
        fetchPost();
  }}, [id])

  const fetchPost = async () => {
      const url = RESOURCE_URL + "/post/" + id;
      setLoading(true);

      await axios.get(url).then(({ data }) => {
        setPost(data);
        setLoading(false);
      }).catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      })
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!post) {
      return;
    }

    sendPost({
      id: post.id,
      title: title,
      body: content,
      creationTime: post.creationTime,
      author: post.author
    });
  };

  const sendPost = async (data) => {
    if (loading) {
      return;
    }
    const url = RESOURCE_URL + "/post";
    
    setLoading(true);
    await axios.post(url, data).then(({ data }) => {
      setLoading(false);
      navigate("/post/" + data.id);
    }).catch(() => {
      setLoading(false);
    })
  }

  return (
    <div className="create-post">
        <Header isHomePage={false} />
        <h2>Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the post title"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <ReactQuill
              theme="snow"
              value={content}
              onChange={setContent}
              placeholder="Write your content here..."
            />
          </div>
          <div className="edit_post_action_buttons">
            <Button
              name={"Cancel"}
              shape="oval"
              className="center pointerCursor min-width80 no-bg"
              disabled={false}
              onClick={() => navigate("/post/" + post.id)}
            />
            <Button
              name={"Post"}
              shape="oval"
              className="center pointerCursor min-width80"
              disabled={false}
              onClick={handleSubmit}
            />
          </div>
        </form>
    </div>
  );
};

export default EditPost;