"use strict";
//DOM : doucument object model
//일종의 인터페이스 : js의 값을 가져와 서버에서 사용할 수 있다.

const id =document.querySelector('#id');
const pass = document.querySelector('#pass');
const loginBtn = document.querySelector('button');

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        pass: pass.value
    }
    // console.log(req);
}