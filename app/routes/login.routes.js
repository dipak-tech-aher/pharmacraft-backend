module.exports = (app) => {
    const loginController = require('../login/login.controller.js');
    app.post('/login', loginController.Login);
    app.post('/forgot-password', loginController.getEmail);
    app.put('/reset-password', loginController.resetPass);
    app.post('/send-mail', loginController.sendMail);
   
}