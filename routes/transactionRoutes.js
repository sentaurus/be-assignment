const { transactionRead, transactionSend, transactionWithdraw } = require('../config/transaction');
const { readTransaction, sendTransaction, withdrawTransaction } = require('../controller/transactionController');
const { verifyToken } = require('../function/tokenFunction');

const transactionRoutes = (fastify, opts, done) => {
	fastify.get('/read', { ...transactionRead, preHandler: verifyToken }, readTransaction);
	fastify.post('/send', { ...transactionSend, preHandler: verifyToken }, sendTransaction);
	fastify.post('/withdraw', { ...transactionWithdraw, preHandler: verifyToken }, withdrawTransaction);
	done();
};

module.exports = transactionRoutes;
