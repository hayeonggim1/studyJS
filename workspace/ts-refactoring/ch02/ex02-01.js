/*
* 자바스크립트의 함수는 일급 객체이다.
  - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
  - 함수의 인자로 전달될 수 있다.
  - 함수의 결과 값으로 반환될 수 있다.
  - 리터럴로 생성될 수 있다.
  - 동적으로 생성된 프로퍼티를 가질 수 있다.
*/

var num = 100; // number
var str = "hello"; // string
var obj = {}; // object
var arr = [num, str]; // object(array)

// 함수를 변수에 할당
const foo = function foo() {
  return "I am foo.";
}; // function -> 객체이기 때문에 '참조형'

// 함수를 배열의 요소로 할당
arr.push(obj); // 객체 --> 배열
arr.push(foo); // 함수 --> 배열 [100, 'hello', {}, function(){}]

// 함수를 객체의 속성으로 할당(메서드)
obj.bar = foo; // bar(속성) 추가, foo 할당
obj.baz = function () {
  return "I am baz";
};
console.log(foo(), arr[3](), obj.bar(), arr[2].bar(), obj.baz());
// arr[3] -> 함수이기 때문에 '()' 추가
// obj.bar = foo => foo는 함수가 할당된 변수 => '()' 추가
// '()'를 붙이지 않을 경우 함수 객체인 사실만을 반환
