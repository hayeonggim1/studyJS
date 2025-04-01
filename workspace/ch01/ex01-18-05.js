// 3. 과목당 40점 이상, 전과목 평균 60점 이상이면 합격입니다.
// 합격 여부를 추가로 출력하세요.
// 출력 결과:
// 총점: 303
// 평균: 60.6
// 최고점: 80
// 최저점: 48
// 축하합니다. 합격입니다.

// 4. 만약 불합격일 경우 불합격 사유를 추가로 출력하세요.
// 출력 결과 1: softwareDesign = 40일 경우
// 총점: 295
// 평균: 59
// 최고점: 80
// 최저점: 40
// 아쉽지만 불합격입니다. 사유: 평균 60점 미달

// 출력 결과 2: softwareDesign = 30일 경우;
// 총점: 285
// 평균: 57
// 최고점: 80
// 최저점: 30
// 아쉽지만 불합격입니다. 사유: 평균 60점 미달(57점)
// 아쉽지만 불합격입니다. 사유: 과락 40점 미달(30점)

const softwareDesign = 30; // 1. 소프트웨어 설계
const softwareDevelopment = 80; // 2. 소프트웨어 개발
const databaseSetup = 50; // 3. 데이터베이스 구축
const programmingUsage = 70; // 4. 프로그래밍 언어 활용
const systemManagement = 55; // 5. 정보 시스템 구축 관리

const total =
  softwareDesign +
  softwareDevelopment +
  databaseSetup +
  programmingUsage +
  systemManagement; // 총점

console.log("총점: ", total);

const average = total / 5;
console.log("평균: ", average);

let highest = softwareDesign;
let lowest = softwareDesign;
let score;

score = softwareDevelopment;
highest = score > highest ? score : highest;
lowest = score < lowest ? score : lowest;

score = databaseSetup;
highest = score > highest ? score : highest;
lowest = score < lowest ? score : lowest;

score = programmingUsage;
highest = score > highest ? score : highest;
lowest = score < lowest ? score : lowest;

score = systemManagement;
highest = score > highest ? score : highest;
lowest = score < lowest ? score : lowest;

console.log("최고점:", highest, "최저점:", lowest);

if (
  average >= 60 &&
  softwareDesign >= 40 &&
  softwareDevelopment >= 40 &&
  databaseSetup >= 40 &&
  programmingUsage >= 40 &&
  systemManagement >= 40
) {
  console.log("축하합니다. 합격입니다.");
} else if (average < 60) {
  console.log("아쉽지만 불합격입니다. 사유: 평균 60점 미달(", average, "점)");
}
if (
  softwareDesign < 40 ||
  softwareDevelopment < 40 ||
  databaseSetup < 40 ||
  programmingUsage < 40 ||
  systemManagement < 40
) {
  console.log("아쉽지만 불합격입니다. 사유: 과락 40점 미달(", lowest, "점)");
}
