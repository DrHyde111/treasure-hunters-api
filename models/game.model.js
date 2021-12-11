const mongoose = require("mongoose");
const PointSchema = require("./point.model");
const GameSchema = new mongoose.Schema(
    {
        description: String,
        points: [PointSchema],
        creator: String,
    },
    {timestamps: true}
)

module.exports = GameSchema

