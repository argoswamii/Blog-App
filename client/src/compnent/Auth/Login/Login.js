import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/blog/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={data.email}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={data.password}
          required
        />
        {error && <div>{error}</div>}
        <button type="submit">Login</button>
      </form>
      <div>
        <h1>New Here ?</h1>
        <Link to="/register">
          <button type="button">Sing Up</button>
        </Link>
      </div>
    </>
  );
};

export default LoginForm;
