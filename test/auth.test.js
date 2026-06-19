import { describe, it, expect, vi } from "vitest";

vi.mock("../config/db.js", () => ({
	default: {
		query: vi.fn(),
	},
}));

import pool from "../config/db.js";
import { findUserByEmail } from "../models/auth.model.js";

describe("findUserByEmail", async () => {
	it("return a dummy row[0]", async () => {
		pool.query.mockResolvedValue({
			rows: [{ id: 1, email: "test@gmail.com", password: "hashed123" }],
		});

		const user = await findUserByEmail("test@gmail.com");
		expect(user).toEqual({
			id: 1,
			email: "test@gmail.com",
			password: "hashed123",
		});
	});
});
