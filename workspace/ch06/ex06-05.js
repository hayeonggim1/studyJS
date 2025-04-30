"use strict";
// 유니언 타입(union type)
(() => {
    // 문자열을 받아서 콘솔에 출력하는 함수
    function logString(msg) {
        console.log(msg);
    }
    // 숫자를 받아서 콘솔에 출력하는 함수
    function logNumber(msg) {
        console.log(msg);
    }
    logString('hello');
    logNumber(123);
    // 유니언 타입
    function log(msg) {
        console.log(msg);
    }
    log('hello');
    log(123);
    log(false);
})();
