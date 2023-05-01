import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../Navbar/navigation";
import "./post.css";

const PostDetails = () => {
  const { state } = useLocation();
  const [post, setPost] = useState(state.post);
  const [comment, setComment] = useState("");
  const [refresh, setRefresh] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `https://argoswami-blog.onrender.com/blog/posts/${post._id}`,
        { comment }
      );
      console.log("Comment added:", response.data);
      setComment("");
      setPost(response.data);
      setRefresh(true);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  useEffect(() => {
    if (refresh) {
      setRefresh(false);
    }
  }, [refresh, post]);

  if (!post) {
    return <div>Loading...</div>;
  }
  let date;
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
            Date : {((date = new Date(post.createdAt)), date.toLocaleString())}
          </p>
          <p>Comment: {post.comment && post.comment.join(" , ")}</p>
        </footer>
        <div>
          <form onSubmit={handleSubmit}>
            <strong className="cmt-label" htmlFor="comment-input">
              Comment :
            </strong>
            {"  "}
            <input
              id="comment-input"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <button className="cmt" type="submit">
              Submit
            </button>
          </form>
        </div>
      </article>
    </div>
  );
};

export default PostDetails;
