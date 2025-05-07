"use strict";
// 에러 핸들링 - 에러가 발생하는 경우
// ex08-01.ts 복사
(() => {
    function f1() {
        const err = new Error('에러 발생!!!');
        console.log(err.name);
        console.log(err.message);
        console.log(err.stack);
    }
    function f2() {
        f1();
    }
    f2();
})();
