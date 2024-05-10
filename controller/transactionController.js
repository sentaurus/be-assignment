const { PrismaClient } = require('@prisma/client');
const { processTransaction } = require('../function/paymentFunction');
const { transaction, account } = new PrismaClient();

const readTransaction = async (request, reply) => {
	const userId = request.user.id;
	try {
		const transactionResult = await transaction.findMany({
			where: {
				account: {
					userId: { equals: userId },
				},
			},
		});

		if (!transactionResult || transactionResult.length === 0) {
			return reply.code(404).send({ message: 'No transactions found' });
		}

		return reply.code(200).send({
			message: 'Transactions found',
			transactions: transactionResult,
		});
	} catch (error) {
		console.log(error);
		reply.code(500).send({ message: 'Internal server error' });
	}
};

const sendTransaction = async (request, reply) => {
	const { amount, toAddress, accountId } = request.body;

	const transactionResult = await transaction.create({
		data: {
			accountId: accountId,
			amount,
			toAddress,
			description: 'Sent money to ' + toAddress,
		},
	});

	await account.update({
		where: { id: toAddress },
		data: { balance: { increment: amount } },
	});

	await account.update({
		where: { id: accountId },
		data: { balance: { decrement: amount } },
	});

	try {
		const processedTransaction = await processTransaction(transactionResult);
		reply.code(200).send({
			message: 'Transaction processed successfully',
			transaction: processedTransaction,
		});
	} catch (error) {
		console.log(error);
		reply.code(500).send({ message: 'Transaction processing failed' });
	}
};

const withdrawTransaction = async (request, reply) => {
	const { amount, accountId } = request.body;

	const transactionResult = await transaction.create({
		data: {
			accountId: accountId,
			amount: amount,
			toAddress: accountId,
			description: 'Withdrawn ' + amount,
		},
	});

	await account.update({
		where: { id: accountId },
		data: { balance: { decrement: amount } },
	});

	try {
		const processedTransaction = await processTransaction(transactionResult);
		reply.code(200).send({
			message: 'Transaction processed successfully',
			transaction: processedTransaction,
		});
	} catch (error) {
		console.log(error);
		reply.code(500).send({ message: 'Transaction processing failed' });
	}
};

module.exports = { readTransaction, sendTransaction, withdrawTransaction };
