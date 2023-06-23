"use strict";

const express = require('express');
const app = express();

//라우팅
const home = require('./router/home');

//앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', home);

module.exports = app;