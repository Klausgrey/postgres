import express from "express";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

const app = express();
app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/post", postRouter);

export default app;
