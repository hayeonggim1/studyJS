/*
JSON 표기법 - 리터럴 방식으로 객체 생성
*/

// 객체로 만들기

const score = {
  userName: "차차핑",
  kor: 100,
  eng: 90,
  math: 85,
  sum: function () {
    // 총점을 반환한다.
    // TODO this (=score)
    // 객체의 메서드가 자신의 속성을 접근할 때 this 사용
    return this.kor + this.eng + this.math;
  },
  avg: function () {
    // 평균을 반환한다.
    return this.sum() / 3;
  },
};

console.log(score.kor, score.eng, score["math"]);
console.log("총점", score.sum());
console.log("평균", score.avg());
