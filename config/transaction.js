const transactionRead = {
	schema: {
		description: 'Transaction data',
		tags: ['Transaction'],
		summary: 'Handles transaction data',
		response: {
			200: {
				description: 'Successful response',
				type: 'object',
				properties: {
					message: { type: 'string' },
					transactions: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: { type: 'number' },
								accountId: { type: 'number' },
								amount: { type: 'number' },
								description: { type: 'string' },
								toAddress: { type: 'number' },
								timestamp: { type: 'string' },
								status: { type: 'string' },
							},
						},
					},
				},
			},
			404: {
				description: 'No transactions found',
				type: 'object',
				properties: {
					message: { type: 'string' },
				},
			},
			500: {
				description: 'Internal server error',
				type: 'object',
				properties: {
					message: { type: 'string' },
				},
			},
		},
		security: [
			{
				bearerAuth: [],
			},
		],
	},
};

const transactionSend = {
	schema: {
		description: 'Transaction send',
		tags: ['Transaction'],
		summary: 'Handles transaction send',
		body: {
			type: 'object',
			properties: {
				amount: { type: 'number' },
				toAddress: { type: 'number' },
				accountId: { type: 'number' },
			},
		},
		response: {
			200: {
				description: 'Successful response',
				type: 'object',
				properties: {
					message: { type: 'string' },
					transaction: {
						type: 'object',
						properties: {
							id: { type: 'number' },
							accountId: { type: 'number' },
							amount: { type: 'number' },
							description: { type: 'string' },
							toAddress: { type: 'number' },
							timestamp: { type: 'string' },
							status: { type: 'string' },
						},
					},
				},
			},
			500: {
				description: 'Internal server error',
				type: 'object',
				properties: {
					message: { type: 'string' },
				},
			},
		},
		security: [
			{
				bearerAuth: [],
			},
		],
	},
};

const transactionWithdraw = {
	schema: {
		description: 'Transaction withdraw',
		tags: ['Transaction'],
		summary: 'Handles transaction withdraw',
		body: {
			type: 'object',
			properties: {
				amount: { type: 'number' },
				accountId: { type: 'number' },
			},
		},
		response: {
			200: {
				description: 'Successful response',
				type: 'object',
				properties: {
					message: { type: 'string' },
					transaction: {
						type: 'object',
						properties: {
							id: { type: 'number' },
							accountId: { type: 'number' },
							amount: { type: 'number' },
							description: { type: 'string' },
							toAddress: { type: 'number' },
							timestamp: { type: 'string' },
							status: { type: 'string' },
						},
					},
				},
			},
			500: {
				description: 'Internal server error',
				type: 'object',
				properties: {
					message: { type: 'string' },
				},
			},
		},
		security: [
			{
				bearerAuth: [],
			},
		],
	},
};

module.exports = { transactionRead, transactionSend, transactionWithdraw };
