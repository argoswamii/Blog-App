import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle signup logic here
    const user = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/blog/singup",
        user
      );
      console.log(response.data);
      setEmail("");
      setName("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sing in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              className={styles.input}
              placeholder="Name"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              placeholder="Email"
              className={styles.input}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              placeholder="Password"
              className={styles.input}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className={styles.green_btn} type="submit">
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
