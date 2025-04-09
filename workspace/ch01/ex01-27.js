/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
*/

const arr = [1, 2, 3, 4];

console.log("for");
for (let i = 0; i < arr.length; i++) {
  const elem = arr[i];
  console.log(i, elem);
}

// 배열 모든 요소의 합계, 홀수값의 합계, 짝수값의 합계 출력
let sum = 0;
let sum1 = 0;
let sum2 = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (arr[i] % 2 === 1) {
    sum1 += arr[i];
  }
  if (arr[i] % 2 === 0) {
    sum2 += arr[i];
  }
}

console.log("합계", sum);
console.log("홀수 합계", sum1);
console.log("짝수 합계", sum2);

// for-of

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum3 = {
  total: 0,
  even: 0,
  odd: 0,
};

// 인덱스는 사용하지 않고 배열 요소의 값만 꺼내서 사용할 때
for (const num of arr1) {
  sum3.total += num;
  num % 2 === 0 ? (sum3.even += num) : (sum3.odd += num);
}

console.log("총합:", sum3.total);
console.log("짝수 합:", sum3.even);
console.log("홀수 합:", sum3.odd);
