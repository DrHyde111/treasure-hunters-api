module.exports = app => {
    const game = require("../controllers/game.controller");
    const point = require("../controllers/point.controller")

    let router = require("express").Router();

    // Create a new Game
    router.post("/", game.create);

    // Retrieve all Games
    router.get("/", game.findAll);

    // Retrieve a single Game with id
    router.get("/:id", game.findOneById);

    // Update a Game with id
    router.put("/:id", game.update);

    // Delete a Game with id
    router.delete("/:id", game.deleteById);

    // Delete all Games
    router.delete("/", game.deleteAll);

    // Add point to the game
    router.post("/:id/addPoint", point.create);

    app.use('/api/game', router);
};