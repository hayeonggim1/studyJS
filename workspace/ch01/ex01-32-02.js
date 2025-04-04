// 10 +100 의 결과를 출력하는 함수.
function add() {
  console.log(10 + 100);
}
add();

// 전달받은 숫자와 100의 합계를 출력하는 함수 add100

function add100(e) {
  console.log(100 + e);
}

// 전달받은 두 숫자의 합계를 출력하는 함수 sum

function sum(e, i) {
  console.log(e + i);
}

// --------------------
add(); // 110
add(); // 110
add100(10); // 110
add100(20); // 120
sum(10, 20); // 30
sum(30, 40); // 70
