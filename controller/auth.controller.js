import bcrypt from "bcrypt";
import pkg from "jsonwebtoken";
const { sign } = pkg;
import { createUser, findUserByEmail } from "../models/auth.model.js";

export const authentification = async (req, res) => {
	const { username, email, password } = req.body;

	try {
		const hashesPassword = await bcrypt.hash(password, 10);
		const result = await createUser(username, email, hashesPassword);
		res.status(201).json({ message: "created successfully", result: result });
	} catch (err) {
		res.json(err);
	}
};

export const login = async (req, res) => {
	const { username, email, password } = req.body;
	try {
		const user = await findUserByEmail(email);
		if (!user) return res.status(400).json({ message: "Incorrect username" });

		const match = await bcrypt.compare(password, user.password);
		if (!match) return res.status(400).json({ message: "Incorrect password" });

		const token = sign(
			{
				id: user.id,
				username: user.username,
				email: user.email,
			},
			process.env.JWT_SECRET,
			{ expiresIn: "7d" },
		);
		res.status(200).json({ token });
	} catch (err) {
		res.json(err);
	}
};
