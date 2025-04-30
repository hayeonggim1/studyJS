"use strict";
// 기본 타입
(() => {
    let userName2 = "TSping";
    userName2 = 540;
    if (typeof userName2 == 'string') { // 타입 가드
        console.log(userName2.toUpperCase());
    }
})();
