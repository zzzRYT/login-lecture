"use strict";

const users = {
    id: ["jinjinstar3", "woorime", "mrkim"],
    pass: ["1234", "1234", "123456"],
};

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

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pass[idx] === pass) {
                return res.json({
                    success: true,
                });
            }
        }
        return res.json( {
            success: false,
            msg: '로그인 실패!',
        });
    },
}

module.exports = {
    output,
    process,
};