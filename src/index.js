const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);

const jwtCheck = require('./middleware/jwtCheck.js')

//app.use(jwtCheck);

mongoose.connect(
    'mongodb://financebase:financebase10@ds237955.mlab.com:37955/financeapp',
    {
        useNewUrlParser: true
    }
);

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(5000, () => {});