"use strict";

//컨트롤러 분리
const index = (req, res) => {
    res.render('home/index')
};

const login = (req, res) => {
    res.render('home/login')
};

module.exports = {
    index,
    login
}