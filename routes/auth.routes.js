module.exports = app => {
    const auth = require("../controllers/auth.controller")
    let router = require("express").Router();

    // User attemps to login
    router.post("/login", auth.login);

    // User attemps to register
    router.get("/register", auth.register);

    app.use('/api/auth', router);
};