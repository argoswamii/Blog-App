import { useLocation } from "react-router-dom";
import Navigation from "./navigation";

const PostDetails = (props) => {
  const { state } = useLocation();
  const post = state && state.post;

  return (
    <div>
      <Navigation />
      <h2>{post.title}</h2>
      <h5>{post.content}</h5>
      <h6>Tags: {post.tags && post.tags.join(", ")}</h6>
      <h6>Author: {post.author}</h6>
      <h6>Date: {post.createdAt}</h6>
    </div>
  );
};

export default PostDetails;
