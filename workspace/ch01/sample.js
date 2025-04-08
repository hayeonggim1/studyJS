/* 한 줄에 두 값 입력받기 */

/*
1. main() 호출
2. getData() 실행 -> 사용자 입력 읽기
3. { a: ..., b: ... } 형태로 결과 반환
4. main()에서 data.a, data.b로 활용 가능
*/

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data.a + data.b);
}
main();

function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split(" ");

  const result = new Object();

  result.a = parseInt(fileData[0]);
  result.b = parseInt(fileData[1]);

  return result;
}
