"use strict";

class UserStorage {
    static #users = {
        id: ["jinjinstar3", "woorime", "mrkim"],
        pass: ["1234", "1234", "123456"],
        name: ["이재진","이우림","미스터킴 "]
    };

    //데이터를 #을 통해서 은닉화 하고, 메서드를 통해서 불러와야 한다.
    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;