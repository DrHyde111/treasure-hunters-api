const dbConfig = require("../config/db.config.js");

const UserSchema = require("./user.model")
const GameSchema = require("./game.model")

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.connectionString;

db.user = mongoose.model("user", UserSchema);
db.game = mongoose.model("game", GameSchema)

db.initConnection = async () => {
    try {
        await mongoose.connect(db.url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Connected to the database!");
    } catch (error) {
        console.log("Cannot connect to the database!", error);
        process.exit();
    }
}

module.exports = db