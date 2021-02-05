const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const http = require('http');
const app = express();
const PORT = process.env.PORT || 3006;
const taskRoute = require('./routes/taskRouter');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', taskRoute)

const server = http.createServer(app);
server.listen(PORT, () => {
    console.log(`The server running in ${PORT}` )
});


