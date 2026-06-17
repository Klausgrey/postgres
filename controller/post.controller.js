import { createPost, getAllPost } from "../models/post.model.js";
import redis from "../config/redis.js";

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

export const getAll = async (req, res) => {
	try {
		const cached = await redis.get("posts");
		if (cached) {
			res.status(200).json({ result: JSON.parse(cached) });
		} else {
			const result = await getAllPost();
			redis.set("posts", JSON.stringify(result));
			res.status(200).json({ result });
		}
	} catch (err) {
		console.error(err);
	}
};
