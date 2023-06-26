"use strict";

//모듈
const express = require('express');
const bodyParser = require('body-parser');
const app = express(); 

const home = require('./src/routes/home');

//앱 세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');

//현재위치의/src/public 안의 폴더를 정적 경로로 추가한다.
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//url을 통해 전달되는 데이터에 한글,공백 등과 같은 문자가 포함된 경우 제대로 인식되지 않는 문제점을 해결해주는 코드
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', home); //미들웨어를 등록 

module.exports = app;