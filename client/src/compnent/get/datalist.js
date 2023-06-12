import React, { useState, useEffect } from "react";
import axios from "axios";
import "./datalist.css";
import Navigation from "../Navbar/navigation";
import Singlepost from "./Post";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://argoswami-blog.onrender.com/blog/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Navigation />
      <div className="container">
        {posts.map((post) => (
          <Singlepost key={post._id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
