import pkg from "jsonwebtoken";
const { verify } = pkg;

export const verifyToken = async (req, res, next) => {
	const auth = req.headers.authorization;
	if (!auth) return res.status(401).json({ message: "no token provided" });

	const result = auth.split(" ")[1];
	if (!result) return res.status(401).json({ message: "invalid token" });

	try {
		const decoded = verify(result, process.env.JWT_SECRET);
		req.user = decoded
		next();
	} catch (err) {
		res.json(err);
	}
};
