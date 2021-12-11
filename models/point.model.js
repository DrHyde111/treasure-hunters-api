const mongoose = require("mongoose");
const ChallengeSchema = require("./challenge.model");
const PointSchema = new mongoose.Schema(
    {
        description: String,
        points: String,
        creator: String,
        challenge: ChallengeSchema,
        index: Number
    },
    {timestamps: true}
)

module.exports = PointSchema

