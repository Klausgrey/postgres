import express from "express";
import { authentification } from "../controller/auth.controller.js";
const router = express.Router();

router.post("/register", authentification);

export default router;
