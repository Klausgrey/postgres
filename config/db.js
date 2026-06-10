import { Pool } from "pg";
import dotenv from "dotenv";

export const pool = new Pool({
	connectionString: process.env.DATABASE_URI,
});
