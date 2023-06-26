"use strict";

const UserStorage = require('./UserStorage');

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const {id, pass} = UserStorage.getUserInfo(this.body.id);
        if(id) {
            if (id === this.body.id && pass === this.body.pass) {
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
        return {success: false, msg: "존재하지 않는 아이디입니다."};
    }
}

module.exports = User;