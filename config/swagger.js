const swaggerConfig = {
	swagger: {
		info: {
			title: 'Test swagger',
			description: 'Testing the Fastify swagger API',
			version: '0.1.0',
		},
		externalDocs: {
			url: 'https://swagger.io',
			description: 'Find more info here',
		},
		host: 'localhost',
		schemes: ['http'],
		consumes: ['application/json'],
		produces: ['application/json'],
		tags: [
			{ name: 'User', description: 'User related end-points' },
			{ name: 'Account', description: 'Account related end-points' },
			{ name: 'Transaction', description: 'Transaction related end-points' },
		],
		securityDefinitions: {
			bearerAuth: {
				type: 'apiKey',
				name: 'authorization',
				in: 'header',
			},
		},
		security: [
			{
				bearerAuth: [],
			},
		],
	},
	exposeRoute: true,
};

const swaggerView = {
	routePrefix: '/docs',
	uiConfig: {
		docExpansion: 'full',
		deepLinking: false,
	},
	uiHooks: {
		onRequest: function (request, reply, next) {
			next();
		},
		preHandler: function (request, reply, next) {
			next();
		},
	},
	staticCSP: true,
	transformStaticCSP: (header) => header,
	transformSpecification: (swaggerObject, request, reply) => {
		return swaggerObject;
	},
	transformSpecificationClone: true,
};

module.exports = { swaggerConfig, swaggerView };
