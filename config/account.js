const accountRead = {
	schema: {
		description: 'Account data',
		tags: ['Account'],
		summary: 'Handles account data',
		response: {
			200: {
				description: 'Successful response',
				type: 'object',
				properties: {
					message: { type: 'string' },
					accounts: {
						type: 'array',
						items: {
							type: 'object',
							properties: {
								id: { type: 'number' },
								userId: { type: 'number' },
								accountType: { type: 'string' },
								balance: { type: 'number' },
								createdAt: { type: 'string' },
								updatedAt: { type: 'string' },
							},
						},
					},
				},
			},
			404: {
				description: 'No accounts found',
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

const accountCreate = {
	schema: {
		description: 'Create account',
		tags: ['Account'],
		summary: 'Handles account creation',
		body: {
			type: 'object',
			properties: {
				accountType: { type: 'string' },
				balance: { type: 'number' },
			},
		},
		response: {
			200: {
				description: 'Successful response',
				type: 'object',
				properties: {
					message: { type: 'string' },
					account: { type: 'number' },
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

module.exports = { accountRead, accountCreate };
