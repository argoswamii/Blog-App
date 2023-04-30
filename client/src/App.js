import PostForm from "./compnent/post/postform";
import Datalist from "./compnent/get/datalist";
import Postpage from "./compnent/individualpost/postpage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Datalist />} />
        <Route path="/blogs" exact element={<PostForm />} />
        <Route path="/blogs/:id" exact element={<Postpage />} />
      </Routes>
    </div>
  );
}

export default App;
