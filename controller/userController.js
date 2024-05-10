const { PrismaClient } = require('@prisma/client');
const { user } = new PrismaClient();
const { sign } = require('jsonwebtoken');
const { compare, hash } = require('bcrypt');
const { auth } = require('../connection');

const loginUser = async (request, reply) => {
	const { email, password } = request.body;
	const secret = process.env.JWT_SECRET;

	try {
		const { error } = await auth.signInWithPassword({
			email,
			password,
		});

		const userResult = await user.findUnique({
			where: { email },
		});

		const isPasswordValid = await compare(password, userResult.password);

		if (error || !isPasswordValid) {
			console.log(error);
			return reply.code(401).send({ message: 'Invalid email or password' });
		}

		if (!userResult) {
			return reply.code(404).send({ message: 'User not found' });
		}

		const token = sign({ id: userResult.id, email: userResult.email }, secret);

		await user.update({
			where: { id: userResult.id },
			data: {
				token: token,
			},
		});

		return reply.code(200).send({
			message: 'Login successful',
			data: {
				token: token,
			},
		});
	} catch (error) {
		console.log(error);
		reply.code(500).send({ message: 'Internal server error' });
	}
};

const registerUser = async (request, reply) => {
	const { email, password } = request.body;
	const secret = process.env.JWT_SECRET;
	const hashedPassword = await hash(password, 10);

	try {
		const { error } = await auth.signUp({
			email,
			password,
		});

		if (error) {
			console.log(error);
			return reply.code(500).send({ message: error.message });
		}

		const userResult = await user.create({
			data: {
				email,
				token: '-',
				password: hashedPassword,
			},
		});

		const token = sign({ id: userResult.id, email: userResult.email }, secret);

		await user.update({
			where: { id: userResult.id },
			data: {
				token: token,
			},
		});

		reply.code(200).send({
			message: 'User created successfully',
			data: {
				token: token,
			},
		});
	} catch (error) {
		console.log(error);
		reply.code(500).send({ message: 'Internal Server Error' });
	}
};

const logoutUser = async (request, reply) => {
	const { id } = request.user;
	const token = null;

	try {
		const { error } = await auth.signOut();

		if (error) {
			return reply.code(500).send({ error: 'Internal Server Error' });
		}

		await user.update({
			where: { id },
			data: {
				token,
			},
		});
		reply.code(200).send({ message: 'Logout successful' });
	} catch (error) {
		console.log(error);
		reply.code(500).send({ message: 'Internal Server Error' });
	}
};

module.exports = { loginUser, logoutUser, registerUser };
