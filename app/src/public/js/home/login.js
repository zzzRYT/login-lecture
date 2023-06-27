"use strict";
//DOM : doucument object model
//일종의 인터페이스 : js의 값을 가져와 서버에서 사용할 수 있다.

const id =document.querySelector('#id');
const pass = document.querySelector('#pass');
const loginBtn = document.querySelector('#button');

loginBtn.addEventListener("click", login);


function login() {
    if(!id.value) return alert('아이디를 입력해 주십시오.');
    
    const req = {
        id: id.value,
        pass: pass.value
    };
    // console.log(req);

    //fetch로 서버에 값을 보낸다.
    fetch('/login', {
        method: "POST", //rest의 전달 기능  
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
    //then으로 서버에서 데이터를 가져올 수 있다.
    .then((res) => res.json()) //res.json json으로 묶인 res를 Promiss 형태로불러온다.
    .then((res) => {   //Promise값을 받기 위해서 then을 한 번 더 사용해 줘야 한다.
        if(res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error('로그인 중 에러 발생')); 
    });
}