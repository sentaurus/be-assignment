const { userLogin, userRegister, userLogout } = require('../config/user');
const { loginUser, registerUser, logoutUser } = require('../controller/userController');

const userRoutes = (fastify, opts, done) => {
	fastify.post('/login', { ...userLogin }, loginUser);
	fastify.post('/logout', { ...userLogout }, logoutUser);
	fastify.post('/register', { ...userRegister }, registerUser);
	done();
};

module.exports = userRoutes;
