import bcrypt from "bcrypt";
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
