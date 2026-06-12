import express from "express";
import { getProfile, update } from "../controller/user.controller.js";
import { verifyToken } from "../midddleware/verifyToken.js";
const router = express.Router();

router.get("/profile", verifyToken, getProfile);
router.put("/profile", verifyToken, update)

export default router;
