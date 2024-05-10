const fastify = require('fastify')({ logger: true });
const swagger = require('@fastify/swagger');
const swaggerUi = require('@fastify/swagger-ui');
require('dotenv').config();
const { swaggerConfig, swaggerView } = require('./config/swagger');
const routes = require('./routes');

fastify.register(swagger, swaggerConfig);

fastify.register(swaggerUi, swaggerView);

fastify.register(routes);

const start = async () => {
	try {
		await fastify.ready();
		fastify.swagger();
		await fastify.listen({ port: 3000 });
		console.log('Server listening on http://localhost:3000');
	} catch (error) {
		console.error('Error starting server:', error);
		process.exit(1);
	}
};

start();
