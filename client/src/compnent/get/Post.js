import React from "react";
import "./datalist.css";
import { useNavigate } from "react-router-dom";

const Singlepost = ({ post }) => {
  const navigate = useNavigate();
  let date;
  return (
    <>
      <div
        className="card"
        key={post._id}
        onClick={() => navigate(`/blogs/${post._id}`, { state: { post } })}
      >
        <div className="card__body">
          <h4>{post.title}</h4>
          <span className="tag tag-blue">Tags : {post.tags}</span>
          <p>{post.content}</p>
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
    </>
  );
};

export default Singlepost;
