const userLogin = {
	schema: {
		description: 'User login',
		tags: ['User'],
		summary: 'Handles user login',
		body: {
			type: 'object',
			properties: {
				email: { type: 'string' },
				password: {
					type: 'string',
				},
			},
		},
		response: {
			200: {
				description: 'Successful response',
				type: 'object',
				properties: {
					message: { type: 'string' },
					data: {
						type: 'object',
						properties: {
							token: { type: 'string' },
						},
					},
				},
			},
			401: {
				description: 'Invalid email or password',
				type: 'object',
				properties: {
					message: { type: 'string' },
				},
			},
			404: {
				description: 'User not found',
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
	},
};

const userRegister = {
	schema: {
		description: 'User registration',
		tags: ['User'],
		summary: 'Handles user registration',
		body: {
			type: 'object',
			properties: {
				email: {
					type: 'string',
				},
				password: {
					type: 'string',
				},
			},
		},
		response: {
			200: {
				description: 'Successful response',
				type: 'object',
				properties: {
					message: { type: 'string' },
					data: {
						type: 'object',
						properties: {
							token: { type: 'string' },
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
	},
};
const userLogout = {
	schema: {
		description: 'User logout',
		tags: ['User'],
		summary: 'Handles user logout',
		response: {
			200: {
				description: 'Successful response',
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

module.exports = { userLogin, userRegister, userLogout };
