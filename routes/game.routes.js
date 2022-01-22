const point = require("../controllers/point.controller");
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
    router.post("/:id/points/", point.create);

    // Get all points for the game
    router.get("/:id/points/", point.findAll);

    // Find point by id
    router.get("/:id/points/:pointId", point.findOneById);

    // Update point by id and game id
    router.post("/:id/points/:pointId", point.update);

    // Delete point
    router.delete("/:id/points/:pointId", point.deleteById);

    // Deleta all point belonging to specific game
    router.delete("/:id/points/", point.deleteAll);


    app.use('/api/game', router);
};