import PostForm from "./compnent/post/postform";
import Datalist from "./compnent/get/datalist";
import Postpage from "./compnent/individualpost/postpage";
import Login from "./compnent/Auth/Login/Login";
import Register from "./compnent/Auth/Register/Register";
// import Test from "./compnent/test";
import { Route, Routes } from "react-router-dom";
import "./App.css";

//Auth
// import Home from "./compnent/Auth/Home/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Datalist />} />
        <Route path="/blogs" exact element={<PostForm />} />
        <Route path="/blogs/:id" exact element={<Postpage />} />
        {/* <Route path="/" exact element={<Test />} /> */}
        {/* Auth */}
        <Route path="/register" exact element={<Register />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
      {/* <Routes> */}
      {/* <Route path="/" exact element={<Home />} /> */}

      {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
