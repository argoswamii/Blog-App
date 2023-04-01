const express = require("express");
const router = new express.Router();
const { getPosts, createPost } = require("../controller/gpsp");

router.get("/posts", getPosts);
router.post("/posts", createPost);

module.exports = router;
