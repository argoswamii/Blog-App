import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./nav.css";
import { Loginstatus } from "../../Context";

const Navigation = () => {
  const { status, Setstatus } = useContext(Loginstatus);

  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Before token removal:", localStorage.getItem("token"));
    localStorage.removeItem("token");
    console.log("After token removal:", localStorage.getItem("token"));
    Setstatus(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      Setstatus(true);
    } else {
      Setstatus(false);
    }
  }, [Setstatus]);

  return (
    <div className="container-nav">
      <button className="btn" onClick={() => navigate("/")}>
        Home
      </button>
      {status ? (
        <>
          <button className="btn" onClick={() => navigate("/blogs")}>
            Create Post
          </button>
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <button className="btn" onClick={() => navigate("/login")}>
          Login
        </button>
      )}
    </div>
  );
};

export default Navigation;
