/*
매개변수를 가진 함수 - 도어락
*/

function boorLock(password) {
  const pwd = "1234";
  const subPassword = password.slice(-pwd.length);
  if (subPassword === pwd) {
    console.log("문이 열렸습니다");
  } else {
    console.log("🔥 비밀번호가 다릅니다 다시 시도해주세요 🔥 ");
  }
}

boorLock("1234");
boorLock("12354564789456451234");
boorLock("1116");
