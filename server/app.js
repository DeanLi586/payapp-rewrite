require('dotenv').config();
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const db = require('./db');

const userRoutes = require('./routes/api/users');
require('./config/passport');

const cors = require('cors');

const PORT = process.env.PORT || 3000;

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', userRoutes);


app.listen(PORT, () => {
    console.log(`Running on Port=${PORT}`);
})

// module.exports = app;
