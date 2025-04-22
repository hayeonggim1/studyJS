/*
  함수 생성 3 (Function 생성자 함수)
*/

// Function 생성자 함수 이용
const add = new Function("x", "y", 'console.log("foo 호출.")');

console.log(add(10, 20));
