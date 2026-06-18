/**
 * Request comes in
 * Check how many times this IP has requested in the last minute
 * If under the limit — allow it and increment the counter
 * If over the limit — block it with 429 Too Many Requests
 *req.ip — the key
redis.get(req.ip) — get the count
redis.incr(req.ip) — increment the count (Redis has a built-in increment command)
redis.expire(req.ip, 60) — set expiry to 60 seconds
next() — allow the request
res.status(429).json(...) — block the request
 *
 */

import redis from "../config/redis.js";

export const rate_limiter = async (req, res, next) => {
	const LIMIT = 10;

	try {
		const request = await redis.get(req.ip);
		if (request < 10 || !request) {
			redis.incr(req.ip);
			redis.expire(req.ip, 60);
			next()
		} else {
			res.status(429).json({ message: "block the request" });
		}
	} catch (err) {
		res.json(err);
	}
};
