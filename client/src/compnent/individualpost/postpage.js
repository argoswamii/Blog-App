import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../Navbar/navigation";
import "./post.css";

const PostDetails = (props) => {
  const { state } = useLocation();
  const postId = state.post._id;

  const [comment, setComment] = useState("");
  const [post, setPost] = useState(null);
  const [refresh, setRefresh] = useState(false); // add state variable
  console.log(comment);

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:3000/blog/posts/${post._id}`,
        { comment }
      );
      console.log("Comment added:", response.data);
      setComment("");
      setRefresh(true); // update state variable
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:3000/blog/posts/${post._id}`
      );
      setPost(result.data);
    };
    if (refresh) {
      fetchData();
      setRefresh(false);
      console.log("hello");
    }
  }, [refresh]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:3000/blog/posts/${postId}`
      );
      setPost(result.data);
    };
    fetchData();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

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
