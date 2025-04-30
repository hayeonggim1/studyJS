"use strict";
// 타입 별칭으로 객체의 타입 선언
(() => {
    const u1 = {
        name: 'haru',
        age: 5
    };
    const u2 = {
        name: 'namu',
        age: 8
    };
    const ping1 = { name: '유저핑', age: 30 };
    console.log(ping1.age, ping1.name.toUpperCase());
})();
