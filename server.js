import { createServer } from "http";
import { Server } from "socket.io";
import app from "./app.js";

const httpServer = createServer(app);
const io = new Server(httpServer);

io.on("connection", (socket) => {
	console.log("a user connected:", socket.id);

	socket.on("message", (msg) => {
		io.emit("message", msg); // send to ALL connected users
	});

	socket.on("disconnect", () => {
		console.log("user disconnected:", socket.id);
	});
});

httpServer.listen(3000, () => {
	console.log("running");
});
