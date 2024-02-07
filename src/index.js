const express = require('express');
const morgan = require('morgan');
var cors = require('cors');
const app = express();

const route = require('./routes');
//const db = require('./config/db');

const port = process.env.PORT || 5000;

app.use(morgan('combined'));
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

route(app);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, (req, res) => {
    console.log(`Server app listening at http://localhost:${port}`);
});
