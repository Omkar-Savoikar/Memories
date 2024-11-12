import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

import User from "../models/models.users.js";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;
const BCRYPT_SALT = process.env.BCRYPT_SALT;

export const signUp = async (req, res) => {
	const { firstName, lastName, email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (user) {
			return res.status(404).json({ message: "User already exist" });
		}
		const hashedPassword = await bcrypt.hash(password, Number(BCRYPT_SALT));
		const result = await User.create({
			email,
			password: hashedPassword,
			name: `${firstName} ${lastName}`,
		});
		const token = jwt.sign({ email, id: result._id }, JWT_SECRET, {
			expiresIn: "1h",
		});
		return res.status(200).json({ user: result, token });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Something went wrong", error });
	}
};

export const signIn = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ message: "Invalid credentials" });
		}
		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		if (!isPasswordCorrect) {
			return res.status(404).json({ message: "Invalid credentials" });
		}
		const token = jwt.sign({ email, id: user._id }, JWT_SECRET, {
			expiresIn: "1h",
		});
		return res.status(200).json({ user, token });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Something went wrong", error });
	}
};
