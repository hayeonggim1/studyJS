/*
반복문 - break, continue
*/

// n ~ m까지의 정수 중에서 짝수를 찾아서 출력하세요.

const n = 1;
const m = 10;
let lowest = n;

for (let i = n; i <= m; i++) {
  if (i % 2 == 0) {
    lowest = i;
    break;
  }
}

console.log(lowest);
