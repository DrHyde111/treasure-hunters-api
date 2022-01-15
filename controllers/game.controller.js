const db = require("../models")
const Game = db.game

// Create and Save a new Game
exports.create = async (req, res) => {
    try {
        const game = new Game({
            description: req.body.description,
            creator: req.body.creator,
        })
        await Game.create(game, function (err, game) {
            if (err) {
                return res.status(500).send({message: "Error during creation of game", game: null})
            }
            return res.status(200).send({message: "game was created", game: game})
        })
    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Retrieve all games from the database.
exports.findAll = async (req, res) => {
    try {
        let games = await Game.find({});
        return res.status(200).send({message: "Found", games})

    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Find a single game with an id
exports.findOneById = async (req, res) => {
    try {
        let game = await Game.findOne({_id: req.params.id})
        return res.status(200).send({message: "Found", game: game})
    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Update a Game by the id in the request
exports.update = async (req, res) => {
    try {
        let game = await Game.findByIdAndUpdate({_id: req.params.id}, req.body);
        return res.status(200).send({message: "Game updated", game: game})
    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Delete a Game with the specified id in the request
exports.deleteById = async (req, res) => {
    try {
        let result = await Game.deleteOne({_id: req.params.id});
        return res.status(200).send({message: "Game was deleted"})

    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};

// Delete all games
exports.deleteAll = async (req, res) => {
    try {
        let result = await Game.remove({})
        return res.status(200).send({message: "Games were deleted"})

    } catch (error) {
        return res.status(500).send({message: "Something went wrong."})
    }
};
