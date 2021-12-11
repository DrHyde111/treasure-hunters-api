const mongoose = require("mongoose");
const User = new mongoose.Schema(
    {
        email: String,
        password: String,
        name: String,
        role: String
    },
    {timestamps: true}
)

module.exports = User

