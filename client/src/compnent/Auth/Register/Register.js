import { useState } from "react";
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
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
