import express from "express";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import "./config/redis.js";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

export default app;
