module.exports = (app) => {
    const userController = require('../user/user.controller.js');
    app.get('/users', userController.getUsers);
}