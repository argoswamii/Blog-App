import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Loginstatus } from "../../../Context";
import styles from "./styles.module.css";

const LoginForm = () => {
  const { Setstatus } = useContext(Loginstatus);
  const navigate = useNavigate();

  console.log(useContext(Loginstatus));
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/blog/login";
      const response = await axios.post(url, data);
      const token = response.data;
      localStorage.setItem("token", token);
      // window.location = "/";
      navigate("/");
      Setstatus(true);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
      Setstatus(false);
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button className={styles.green_btn} type="submit">
              Login
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
          <Link to="/register">
            <button className={styles.white_btn} type="button">
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
