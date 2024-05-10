const accountRoutes = require('./accountRoutes');
const transactionRoutes = require('./transactionRoutes');
const userRoutes = require('./userRoutes');

const routes = (fastify, opts, done) => {
	fastify.register(userRoutes, { prefix: '/user' });
	fastify.register(accountRoutes, { prefix: '/account' });
	fastify.register(transactionRoutes, { prefix: '/transaction' });
	done();
};

module.exports = routes;
