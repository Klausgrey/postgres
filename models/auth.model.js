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

const createTable = async() => {
	try {
		await pool.query(queryText)
		console.log("User created");
	} catch (err) {
		console.error(err)
	} finally {
		await pool.end()
	}
}

createTable()