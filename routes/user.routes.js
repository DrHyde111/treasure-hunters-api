const user = require("../controllers/user.controller");
module.exports = app => {
    const user = require("../controllers/user.controller");

    let router = require("express").Router();

    // Create a new User
    router.post("/", user.create);

    // Retrieve all Users
    router.get("/", user.findAll);

    // Retrieve a single User with id
    router.get("/:id", user.findOneById);

    // Update a User with id
    router.put("/:id", user.update);

    // Delete a User with id
    router.delete("/:id", user.deleteById);

    // Delete all Users
    router.delete("/", user.deleteAll);

    app.use('/api/user', router);
};