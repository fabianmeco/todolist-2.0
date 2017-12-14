const express = require('express');
const app = express();
const cors = require('cors');
const body = require('body-parser');

const routes = require('./routes');

app.listen(3000, function(){console.log('App running on port 3000')});

app.use(cors());

app.use(body.json());

app.use(body.urlencoded({extended:false}));

app.use('/', routes);

module.exports = app;
