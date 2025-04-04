/*
for문
*/

// 2단부터 9단까지 출력

for (let j = 1; j <= 9; j++) {
  let line = "";
  for (let i = 1; i <= 9; i++) {
    const sum = i * j;
    line += `${i} x ${j} = ${sum}`.padEnd(12);
  }
  console.log(line);
}
