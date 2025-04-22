/*
* 함수 호출 방법 2 - 메서드
  - this는 메서드를 정의한 객체
*/

// window,name = 'global'; // window, 브라우저가 가지고 있는 전역 객체
// global.name = 'global'; // global, Node.js가 가지고 있는 전역 객체
globalThis.name = "global"; // 브라우저는 window, Node.js는 global 객체

const getPingName = function () {
  return this.name; // this = window 객체
};

const baro = new Object();
baro.name = "바로핑";
baro.age = 9;
baro.getName = getPingName;

const rara = {
  name: "라라핑",
  age: 8,
  getName: getPingName,
};

// 함수 호출하는 방법 1 - 일반 함수로 호출
console.log(getPingName());

// 함수 호출하는 방법 2 - 메서드로 호출(this는 메서드를 정의한 객체)
console.log(baro.age, baro.getName()); // this = baro
console.log(rara.age, rara.getName()); // this = rara
