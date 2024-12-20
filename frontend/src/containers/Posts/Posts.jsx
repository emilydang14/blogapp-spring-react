import { useEffect, useState, useRef } from "react";
import "./Posts.scss";

//
import PostItem from "./PostItem/PostItem";
import axios from "axios";
import Spinner from "../../components/UI/Spinner/Spinner";
import { RESOURCE_URL } from "../../config";

//
const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const hasFetched = useRef(false);
  
  const fetchPosts = async () => {
    if (hasFetched.current) return; // Prevent duplicate fetches
    hasFetched.current = true;
    const url = RESOURCE_URL + "/post";
    setLoading(true);

    await axios.get(url).then(({ data }) => {
      setPosts(data);
      setLoading(false);
    }).catch((error) => {
      console.error("Error fetching data:", error);
      setLoading(false);
    })
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  
  return loading ? <Spinner/> : posts.length >= 1 ? (
    <div className={"posts"}>
      {posts.map((post) => {
        return (
          <PostItem key={post.id} post={post}/>
        );
      })}
    </div>
  ) : (
    <div style={{ margin: "30px 0" }}>
      <h2 style={{ textAlign: "center" }}>No post to show</h2>
    </div>
  );
};

export default Posts;
