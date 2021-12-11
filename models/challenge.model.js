const mongoose = require("mongoose");
const ChallengeSchema = new mongoose.Schema(
    {
        question: String,
        correctAnswer: String,
        answers: [String],
    },
    {timestamps: true}
)

module.exports = ChallengeSchema

