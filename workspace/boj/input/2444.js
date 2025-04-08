/*
문제
예제를 보고 규칙을 유추한 뒤에 별을 찍어 보세요.

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 2×N-1번째 줄까지 차례대로 별을 출력한다.

예제 입력 1 
5
예제 출력 1 
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const num = parseInt(input[0]);

for (let i = 0; i < num; i++) {
  let stars = "*";
  let space = "";
  for (let j = 0; j < i; j++) {
    stars += "*";
    stars += "*";
  }
  for (let k = 0; k < num - i - 1; k++) {
    space += " ";
  }
  console.log(space + stars);
}

for (let i = 0; i < num - 1; i++) {
  let stars2 = "*";
  let space2 = " ";
  for (let j = 1; j <= num - i - 2; j++) {
    stars2 += "*";
    stars2 += "*";
  }
  for (let k = 0; k < i; k++) {
    space2 += " ";
  }
  console.log(space2 + stars2);
}
