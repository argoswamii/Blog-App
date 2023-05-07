import PostForm from "./compnent/post/postform";
import Datalist from "./compnent/get/datalist";
import Postpage from "./compnent/individualpost/postpage";
// import Test from "./compnent/test";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";

//Auth
import Home from "./compnent/Auth/Home/Home";
import Login from "./compnent/Auth/Login/Login";
import Register from "./compnent/Auth/Register/Register";
import { useState } from "react";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Datalist />} />
        <Route path="/blogs" exact element={<PostForm />} />
        <Route path="/blogs/:id" exact element={<Postpage />} />
        {/* <Route path="/" exact element={<Test />} /> */}
      </Routes>
      {/* Auth */}
      <Routes>
        {/* <Route path="/" exact element={<Home />} /> */}
        <Route path="/signup" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
        {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
