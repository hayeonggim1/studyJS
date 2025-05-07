/*
반복문 - while문
*/

// 1부터 10까지 홀수의 합계 출력. 25
var sum1 = 0;
var i = 1;

while (i <= 10) {
  if (i % 2 === 1) {
    sum1 += i;
  }
  i++;
}

console.log(sum1);

// 1부터 10까지 짝수의 합계 출력. 30

var sum2 = 0;
var i = 1;

while (i <= 10) {
  if (i % 2 === 0) {
    sum2 += i;
  }
  i++;
}

console.log(sum2);
