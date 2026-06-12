import express from "express";
import { authentification, login } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/register", authentification);
router.post("/login", login);

export default router;
