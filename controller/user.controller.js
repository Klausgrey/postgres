import { updateUser, deleteUser } from "../models/auth.model.js";

export const getProfile = async (req, res) => {
	const { id, username, email } = req.user;
	res.json({
		id: id,
		username: username,
		email: email,
	});
};

export const update = async (req, res) => {
	const username = req.body.username;
	const userId = req.user.id;
	try {
		await updateUser(userId, username);
		res.status(200).json({ message: "updated successfully" });
	} catch (err) {
		res.json(err);
	}
};

export const deleteId = async (req, res) => {
	const userId = req.user.id;
	try {
		const result = await deleteUser(userId);
		res.status(200).json({ message: "deleted successfully" });
	} catch (err) {
		res.json(err);
	}
};
