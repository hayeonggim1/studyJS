const isLogin = true;
const isUser = true;
const isSeller = false;
const isAdmin = false;

if (isLogin === true) {
  console.log("로그인 상태");
}
if (isLogin === false) {
  console.log("로그아웃 상태");
}

if (isUser === true) {
  console.log("사용자");
}
if (isSeller === true) {
  console.log("판매자");
}
if (isAdmin === true) {
  console.log("관리자");
}

if (isLogin && isUser) {
  console.log("사용자 로그인 상태");
}
if (isLogin && isSeller) {
  console.log("판매자 로그인 상태");
}
if (isLogin && isAdmin) {
  console.log("관리자 로그인 상태");
}
