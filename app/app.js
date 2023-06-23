"use strict";

const express = require('express');
const app = express();

const home = require('./src/routes/home');

//앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');

//현재위치의/src/public 안의 폴더를 정적 경로로 추가한다.
app.use(express.static(`${__dirname}/src/public`));

app.use('/', home); //미들웨어를 등록 

module.exports = app;