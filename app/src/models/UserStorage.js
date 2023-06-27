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

    static #getUsers(data, isAll,fields) {
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    //데이터를 #을 통해서 은닉화 하고, 메서드를 통해서 불러와야 한다.
    static getUsers(isAll ,...fields) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll,fields);
        })
        .catch(console.error);
    }

    static getUserInfo(id) {
        return fs
        .readFile("./src/databases/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
        })
      .catch(console.error);
    }


    static async save(userInfo) {
        //databasese에서 데이터를 불러온 다음 그 데이터에 붙여넣기
        const users = await this.getUsers(true);
        if(users.id.includes(userInfo.id)){
            throw '이미 존재하는 아이디입니다.';  
        } 
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pass.push(userInfo.pass); 
        fs.writeFile('./src/databases/users.json', JSON.stringify(users));
        return {success: true}; 
    }
}   

module.exports = UserStorage;   