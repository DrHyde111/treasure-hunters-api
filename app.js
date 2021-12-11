const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");
const db = require("./models/index");

const app = express();
const PORT = process.env.PORT || 8080;

// parse requests of content-type - application/json
app.use(bodyParser.json());
try {
    db.initConnection()
} catch (error) {
    console.log(error)
}

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});