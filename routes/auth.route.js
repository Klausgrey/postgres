import express from "express";
import { authentification, login } from "../controller/auth.controller.js";
import { verifyToken } from "../midddleware/verifyToken.js";
const router = express.Router();

router.post("/register", authentification);
router.post("/login", login);
// router.get('/profile', verifyToken, login)

export default router;
