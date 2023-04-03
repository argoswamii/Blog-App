import React, { useState } from "react";
import axios from "axios";
import "./postform.css";
import Navigation from "../Navbar/navigation";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [Author, setauthor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title: title,
      content: content,
      author: Author,
      tags: tags,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/blog/posts",
        post
      );
      console.log(response.data);
      setTitle("");
      setContent("");
      setTags("");
      setauthor("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <Navigation />
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />

        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <br />

        <label htmlFor="tags">Tags:</label>
        <input
          type="text"
          id="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
        />
        <br />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="tags"
          value={Author}
          onChange={(e) => setauthor(e.target.value)}
          required
        />

        <button type="submit">Create Post</button>
      </form>
    </>
  );
};

export default PostForm;
