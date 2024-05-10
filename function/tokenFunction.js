const jwt = require('jsonwebtoken');

const verifyToken = (request, reply, done) => {
	const secret = process.env.JWT_SECRET;
	const authHeader = request.headers['authorization'];

	if (!authHeader || !authHeader.startsWith('Bearer ')) {
		reply.code(401).send({ message: 'Unauthorized' });
		return;
	}

	const token = authHeader.split(' ')[1];

	try {
		const decoded = jwt.verify(token, secret);
		request.user = decoded;
		done();
	} catch (error) {
		reply.code(401).send({ message: 'Invalid token' });
	}
};

module.exports = { verifyToken };
