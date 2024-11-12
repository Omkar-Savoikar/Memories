import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const auth = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const decodedToken = jwt.verify(token, JWT_SECRET);
		console.log(decodedToken);
		req.userId = decodedToken.id;
		next();
	} catch (error) {
		console.log(error);
	}
};

export default auth;
