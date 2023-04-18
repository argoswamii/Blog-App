import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./datalist.css";
import Navigation from "../Navbar/navigation";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

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

  let date;
  return (
    <>
      <Navigation />
      <div className="container">
        {posts.map((post) => (
          <div
            className="card"
            key={post._id}
            onClick={() => navigate(`/blogs/${post._id}`, { state: { post } })}
          >
            <div class="card__header">
              <img
                src="https://source.unsplash.com/600x400/?computer"
                alt="card__image"
                class="card__image"
                width="600"
              />
            </div>
            <div className="card__body">
              <span className="tag tag-blue">Tags : {post.tags}</span>
              <h4>{post.title}</h4>
              <p>{post.content}</p>
              <small>
                Comment : {post.comment && post.comment.join(" , ")}
              </small>
            </div>
            <div class="card__footer">
              <div class="user">
                <img
                  src="https://i.pravatar.cc/40?img=1"
                  alt="user__image"
                  class="user__image"
                />
                <div class="user__info">
                  <h5> {post.author}</h5>
                  <small>
                    {" "}
                    {((date = new Date(post.createdAt)), date.toLocaleString())}
                  </small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PostList;
