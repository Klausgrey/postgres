import express from "express";
import { newPost, getAll } from "../controller/post.controller.js";
import { verifyToken } from "../midddleware/verifyToken.js";
import { rate_limiter } from "../midddleware/rateLimit.js";
const router = express.Router();

router.post("/", verifyToken, newPost);
router.get("/", rate_limiter, getAll);

export default router;
