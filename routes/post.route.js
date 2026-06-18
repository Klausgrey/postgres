import express from "express";
import { newPost, getAll } from "../controller/post.controller.js";
import { verifyToken } from "../midddleware/verifyToken.js";
import { rateLimiter } from "../midddleware/rateLimit.js";
const router = express.Router();

router.post("/", verifyToken, newPost);
router.get("/", rateLimiter, getAll);

export default router;
