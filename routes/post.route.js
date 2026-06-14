import express from "express";
import { newPost, getAll } from "../controller/post.controller.js";
import { verifyToken } from "../midddleware/verifyToken.js";
const router = express.Router();

router.post("/", verifyToken, newPost);
router.get("/", getAll);

export default router;
