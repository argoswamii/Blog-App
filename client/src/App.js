import PostForm from "./compnent/postform";
import Datalist from "./compnent/datalist";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Datalist />} />
        <Route path="/blogs" exact element={<PostForm />} />
      </Routes>
    </div>
  );
}

export default App;
