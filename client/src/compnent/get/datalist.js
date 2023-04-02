import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./datalist.css";
import Navigation from "../navigation";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  // const [Comment, setcomment] = useState("");
  const navigate = useNavigate();

  // const addComment = async () => {
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:3000/blog/posts/${postId}/comments`,
  //       {
  //         comment: Comment,
  //       }
  //     );
  //     console.log("Comment added:", response.data);
  //     setPosts(
  //       posts.map((post) => (post._id === postId ? response.data : post))
  //     );
  //     setcomment("");
  //   } catch (error) {
  //     console.error("Error adding comment:", error);
  //   }
  // };

  // const postcomm = (e) => {
  //   e.preventDefault();
  //   addComment();
  // };

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
          <div
            className="post-card"
            key={post._id}
            onClick={() => navigate(`/blogs/${post._id}`, { state: { post } })}
          >
            <h2>{post.title}</h2>
            <h5>{post.content}</h5>
            <h6>Tags: {post.tags.join(", ")}</h6>
            <h6>Author: {post.author}</h6>
            <h6>Date: {post.createdAt}</h6>
            <h6>Comment: {post.comment}</h6>
            <br />
            {/* <div>
              <label htmlFor="Comment">Comment:</label>
              <input
                type="text"
                id="tags"
                value={Comment}
                onChange={(e) => setcomment(e.target.value)}
              />
              <button onClick={postcomm}>comment</button>
            </div> */}
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
