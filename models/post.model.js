import pool from "../config/db.js";

export const createPostsTable = async () => {
	try {
		await pool.query(
			`
			CREATE TABLE IF NOT EXISTS posts (
			id SERIAL PRIMARY KEY,
			title VARCHAR(255),
			body VARCHAR(255),
			user_id INT REFERENCES users(id) ON DELETE CASCADE,
			created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
			)
			`,
		);
		console.log("Post table ready");
	} catch (err) {
		console.error(err);
	}
};
createPostsTable();

export const createPost = async (title, body, user_id) => {
	try {
		const result = await pool.query(
			`
			INSERT INTO posts (title, body, user_id) VALUES ($1, $2, $3) RETURNING *
			`,
			[title, body, user_id],
		);
		return result.rows[0];
	} catch (err) {
		console.error(err);
	}
};
