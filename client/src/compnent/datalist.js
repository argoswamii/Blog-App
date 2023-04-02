import React, { useState, useEffect } from "react";
import axios from "axios";
import "./datalist.css";
import Navigation from "./navigation";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blog/posts");
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
      <div className="post-list-container">
        {posts.map((post) => (
          <div className="post-card" key={post._id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>Tags: {post.tags.join(", ")}</small>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
