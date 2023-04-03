import React from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <button className="btn" onClick={() => navigate("/")}>
        Home
      </button>
      <button className="btn" onClick={() => navigate("/blogs")}>
        Create Post
      </button>
    </div>
  );
};

export default Navigation;
