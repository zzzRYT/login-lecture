"use strict";

const POST = 3000;

const app = require('../app');

//서버연결
app.listen(POST, () => {
    console.log('login-lecture 서버 가동');
});