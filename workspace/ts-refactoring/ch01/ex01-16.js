/*
if문
*/

// age가 20 이상이면 "성인" 출력

// age가 20 미만이면 "미성년자" 출력

// num이 양수이면 "양수" 출력

// num이 음수이면 "음수" 출력

// num이 0이면 "0" 출력

// password가 1234면 "로그인 성공!" 출력

// password가 1234가 아니면 "로그인 실패!" 출력

// num2가 짝수이면 "짝수" 출력

// num2가 홀수이면 "홀수" 출력

// num3가 3의 배수이면 "3의 배수" 출력

// num3가 3의 배수가 아니면 "3의 배수가 아님" 출력

const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const age = parseInt(fileData[0]);
const num = parseInt(fileData[1]);
const password = parseInt(fileData[2]);
const num2 = parseInt(fileData[3]);
const num3 = parseInt(fileData[4]);

if (age >= 20) {
  console.log("성인");
} else {
  console.log("미성년자");
}
