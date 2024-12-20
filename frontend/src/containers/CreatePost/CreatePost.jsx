import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill"; // Rich text editor
import "react-quill/dist/quill.snow.css"; // Quill's default styling
import "./CreatePost.scss";
import Header from "../Header/Header";
import Button from "../../components/UI/Button/Button";
import axios from "axios";
import { RESOURCE_URL } from "../../config";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !content) {
      return;
    }

    sendPost({
      title: title,
      body: content,
      creationTime: new Date().toISOString().replace("Z", ""),
      author: "Emily"
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
    <>
      <div className="create-post">
        <Header isHomePage={false} />
        <h2>Create a New Blog Post</h2>
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
          <Button
            name={"Post"}
            shape="oval"
            className="center pointerCursor full-width"
            disabled={false}
            onClick={handleSubmit}
          />
        </form>
      </div>
    </>
  );
};

export default CreatePost;