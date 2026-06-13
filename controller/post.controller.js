import { createPost } from "../models/post.model.js";

export const newPost = async (req, res) => {
	const { title, body } = req.body;
	const userId = req.user.id;

	try {
		const result = await createPost(title, body, userId);
		res.status(201).json({ result });
	} catch (err) {
		res.json(err);
	}
};
