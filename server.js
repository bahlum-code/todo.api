const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const db = require("./models/index");

const PORT = process.env.PORT || 3006;
db.sequelize.sync();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(PORT, () => console.log( `Server running successfully on ${PORT}`))
