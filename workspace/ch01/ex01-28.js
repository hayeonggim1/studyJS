/*
유사 배열 객체
*/

/**
 * 전달받은 배열의 모든 요소를 인덱스와 함께 출력한다.
 * @param {any[]} arr - 배열 (any = 어떤 타입이든 상관없다)
 */

function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

const colorArr = ["orange", "yelow", "green"];
colorArr.push("black");
printArr(colorArr);

const arr = {
  length: 3,
  0: "orange",
  1: "yellow",
  2: "green",
  /**
   * 맨 끝에 지정한 elem을 추가한다.
   * @param {*} elem - 추가할 요소
   */
  push: function (elem) {
    arr[arr.length] = elem;
    arr.length++;
  },
}; // 객체
arr.push("black");
arr.push("white");
printArr(arr);

// 문자열도 유사 배열 객체의 일종
