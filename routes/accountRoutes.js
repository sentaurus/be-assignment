const { accountRead, accountCreate } = require('../config/account');
const { readAccount, createAccount } = require('../controller/accountController');
const { verifyToken } = require('../function/tokenFunction');

const accountRoutes = (fastify, opts, done) => {
	fastify.get('/read', { ...accountRead, preHandler: verifyToken }, readAccount);
	fastify.post('/create', { ...accountCreate, preHandler: verifyToken }, createAccount);
	done();
};

module.exports = accountRoutes;
