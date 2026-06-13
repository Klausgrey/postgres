import pool from "../config/db.js";

const queryText = `
CREATE TABLE IF NOT EXISTS users (
id SERIAL PRIMARY KEY,
username VARCHAR(50) UNIQUE NOT NULL,
email VARCHAR(255) UNIQUE NOT NULL,
password VARCHAR(255) NOT NULL,
created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
)
`;

export const createTable = async () => {
	try {
		await pool.query(queryText);
		console.log("Table created");
	} catch (err) {
		console.error(err);
		// } finally {
		// 	await pool.end()
	}
};
createTable();

export const createUser = async (username, email, password) => {
	const result = await pool.query(
		`INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
		[username, email, password],
	);
	return result.rows[0];
};

export const findUserByEmail = async (email) => {
	const result = await pool.query(`SELECT * FROM users WHERE email = $1`, [
		email,
	]);
	return result.rows[0];
};

export const updateUser = async (id, username) => {
	const result = await pool.query(
		`UPDATE users SET username = $1 WHERE id = $2 RETURNING *`,
		[username, id],
	);
	return result.rows[0];
};

export const deleteUser = async (id) => {
	const result = await pool.query(
		`DELETE FROM user WHERE id = $1 RETURNING *`,
		[id],
	);
	return result.rows[0];
};
