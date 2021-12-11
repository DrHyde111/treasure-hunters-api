const express = require("express");
const bodyParser = require("body-parser")
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// parse requests of content-type - application/json
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});