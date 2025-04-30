"use strict";
// 인터페이스로 객체의 타입 선언
// ex06-07.ts 복사
(() => {
    (() => {
        // 인터페이스를 객체의 타입을 지정
        const u1 = {
            name: 'haru',
            age: 5
        };
        const u2 = {
            name: 'namu',
            age: 8
        };
        console.log(u1.age, u2.name.toUpperCase());
    })();
})();
