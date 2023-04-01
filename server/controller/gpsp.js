const express = require("express");
const Post = require("../models/Blog.js");

//get post
exports.getPosts = async (req, res) => {
  try {
    const postblog = await Post.find();

    res.status(200).json(postblog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/// creat a post
exports.createPost = async (req, res) => {
  const { title, content, createdAt, author, tags } = req.body;

  const newPost = new Post({
    title,
    content,
    createdAt,
    author,
    tags,
  });
  console.log(`${newPost.title}`);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
