"use strict";
// 내장 객체 - JSON
(() => {
    const haru = { name: '하루', age: 5 };
    console.log(typeof haru, haru); // object { name: '하루', age: 5 }
    const jsonString = JSON.stringify(haru); // 객체를 JSON 문자열로 변환
    console.log(typeof jsonString, jsonString);
    const objHaru = JSON.parse(jsonString);
    console.log(typeof objHaru, objHaru);
})();
