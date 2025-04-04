/*
switch문을 사용하여 학점을 구하시오
*/

const score = 78;

if (score >= 90 && score <= 100) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
