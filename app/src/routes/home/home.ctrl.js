"use strict";

//model을 불러온다.
const UserStorage = require('../../models/UserStorage');

const output = {
    home: (req, res) => {
        res.render('home/index')
    },
    login: (req, res) => {
        res.render('home/login')
    }
};


const process = {
    login: (req, res) => {
        const id = req.body.id;
        const pass = req.body.pass;
        const users = UserStorage.getUsers("id", "pass");

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pass[idx] === pass) {
                return res.json({
                    success: true,  //로그인이 성공하게 되면 success와 msg를 json으로 묶어서 res(front단 으로)응답을 하게 된다.
                    msg: '로그인 성공!',
                });
            }
        }
        return res.json( {  //동일하게 json으로 묶어서 res로 응답해줌
            success: false,
            msg: '로그인 실패!',
        });
    },
}

module.exports = {
    output,
    process,
};