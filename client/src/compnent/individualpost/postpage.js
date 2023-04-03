import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Navigation from "../Navbar/navigation";
import "./post.css";

const PostDetails = (props) => {
  const { state } = useLocation();
  const post = state.post;

  const [comment, setComment] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/blog/posts/${post._id}`,
        { comment: comment }
      );
      console.log("Comment added:", response.data);
      setComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div>
      <Navigation />

      <article className="post-container">
        <header>
          <h1>{post.title}</h1>
        </header>
        <p>{post.content}</p>
        <footer>
          <p>Tags: {post.tags && post.tags.join(", ")}</p>
          <p>Author: {post.author}</p>
          <p>
            Date: <time dateTime={post.createdAt}>{post.createdAt}</time>
          </p>
          <p>Comment: {post.comment}</p>
        </footer>
        <div>
          <form onSubmit={handlesubmit}>
            <label htmlFor="comment-input">Comment:</label>
            <input
              id="comment-input"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </article>
    </div>
  );
};

export default PostDetails;
