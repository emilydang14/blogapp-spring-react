import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RESOURCE_URL } from "../../config";
import axios from "axios";

const usePost = ({ id }) => {
    const [post, setPost] = useState(null)
    const [editing, setEditting] = useState(false)
    const [loading, setLoading] = useState(false)

    const hasFetched = useRef(false);

    const navigate = useNavigate();

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

    const deletePost = async () => {
        const url = RESOURCE_URL + "/post/" + id;
        setLoading(true);
  
        await axios.delete(url).then((res) => {
          setLoading(false);
          navigate("/")
        }).catch((error) => {
          setLoading(false);
        })
    }

    const editPost = async () => {
        navigate("/post/" + id + "/edit")
    }
    
    return {
        post, 
        loading,
        editing,
        setEditting,
        deletePost,
        editPost,
        setPost,
    }
}

export default usePost;

