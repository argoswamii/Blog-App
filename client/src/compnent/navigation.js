import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Home</button>
      <br />
      <br />
      <button onClick={() => navigate("/blogs")}>Create Post</button>
    </div>
  );
};

export default Navigation;
