const { PrismaClient } = require('@prisma/client');
const { account } = new PrismaClient();

const readAccount = async (request, reply) => {
	const userId = request.user.id;

	try {
		const accountResult = await account.findMany({
			where: { userId },
		});

		if (!accountResult || accountResult.length === 0) {
			return reply.code(404).send({ message: 'No accounts found' });
		}

		return reply.code(200).send({
			message: 'Accounts found',
			accounts: accountResult,
		});
	} catch (error) {
		console.log(error);
		reply.code(500).send({ message: 'Internal server error' });
	}
};

const createAccount = async (request, reply) => {
	const { accountType, balance } = request.body;
	const userId = request.user.id;

	try {
		const accountResult = await account.create({
			data: {
				accountType,
				balance,
				userId,
			},
		});
		reply.code(200).send({
			message: 'Account created successfully',
			account: accountResult.id,
		});
	} catch (error) {
		console.log(error);
		reply.code(500).send({ message: 'Internal server error' });
	}
};

module.exports = { readAccount, createAccount };
