/*
  함수 생성 1 (선언문)
*/

// 선언문 방식의 함수 선언
function add(x, y) {
  const result = x + y;
  return result;
}
console.log(add(10, 20)); // 30, this = window
console.log(add.call({}, 30, 40)); // 70, this = {}
console.log(add.apply([], [50, 60])); // 110, this = []
