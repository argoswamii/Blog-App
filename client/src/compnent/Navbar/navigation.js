import React from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";

const Navigation = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <div className="container-nav">
      <button className="btn" onClick={() => navigate("/")}>
        Home
      </button>
      <button className="btn" onClick={() => navigate("/blogs")}>
        Create Post
      </button>
      <button
        // className={styles.white_btn}
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Navigation;
