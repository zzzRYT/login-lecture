"use strict";

const fs = require('fs').promises;

class UserStorage {
    //컨벤션(암묵적으로 은닉된 메소드를 최상단으로 배치)
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, pass, name ]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});
        return userInfo;
    }

    //데이터를 #을 통해서 은닉화 하고, 메서드를 통해서 불러와야 한다.
    static getUsers(...fields) {
        // const users = this.#users; 
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        // const users = this.#users;
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
      .catch(console.error);
    }


    static save(userInfo) {
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pass.push(userInfo.pass);
        return {success: true};
    }
}   

module.exports = UserStorage;