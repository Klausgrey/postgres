import express from "express";
import { newPost } from "../controller/post.controller.js";
import { verifyToken } from "../midddleware/verifyToken.js";
const router = express.Router();

router.post("/", verifyToken, newPost);

export default router;
