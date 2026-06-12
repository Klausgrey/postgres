import express from "express"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"

const app = express()
app.use(express.json())
app.use("/auth", authRouter)
app.use("/user", userRouter)

export default app;