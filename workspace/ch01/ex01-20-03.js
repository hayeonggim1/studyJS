/*
첫날에 쌀을 한톨 받습니다.
둘째날 쌀을 두톨 받습니다.
세째날 쌀을 네톨 받습니다.
매일 전날의 두배가 되는 쌀알을 받아서 모으면 몇일을 모아야 쌀알을 천만개 모을수 있을까?
*/

let day = 1;
let count = 1;
let sum = 0;

while (sum < 1000_0000) {
  sum += count;
  count *= 2;
  if (sum < 1000_0000) {
    day++;
  }
}

// 하루 초과했기 때문에
console.log(
  day,
  "일 동안 받았더니 쌀알이",
  sum,
  "개 되었다. 내일은",
  count,
  "개 받을 수 있다."
);

//  30일 동안 몇개의 쌀알을 모을 수 있는가?
