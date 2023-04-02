const express = require("express");
const router = new express.Router();
const { getPosts, createPost, getPostById } = require("../controller/gpsp");

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.get("/posts/:id", getPostById);

module.exports = router;
