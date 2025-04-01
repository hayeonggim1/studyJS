/*
if-else if문

if (조건식1) { // 필수
    조건식1이 참일 때 실행할 코드;
    조건식1이 참일 때 실행할 코드;
    ......
} else if (조건식2) { // 생략 가능
    조건식2이 참일 때 실행할 코드;
    조건식2이 참일 때 실행할 코드;
    ......
} else if (조건식3) { // 생략 가능
    조건식3이 참일 때 실행할 코드;
    조건식3이 참일 때 실행할 코드;
    ......
} else { // 생략 가능
    조건식이 거짓일 때 실행할 코드;
    조건식이 거짓일 때 실행할 코드;
    ......
}
*/

if (num > 0) {
  console.log("양수");
} else if (num < 0) {
  console.log("음수");
} else {
  console.log("0");
}

if (password == 1234) {
  console.log("로그인 성공!");
} else {
  console.log("로그인 실패!");
}

if (num2 % 2 == 0) {
  console.log("짝수");
} else {
  console.log("홀수");
}
