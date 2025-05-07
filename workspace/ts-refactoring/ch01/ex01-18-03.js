const isLogin = true;
const isUser = false;
const isSeller = true;
const isAdmin = false;

if (isLogin) {
  console.log("로그인 상태");
  if (isUser) {
    console.log("사용자");
    console.log("사용자 로그인 상태");
  } else if (isSeller) {
    console.log("판매자");
    console.log("판매자 로그인 상태");
  } else {
    console.log("관리자");
    console.log("관리자 로그인 상태");
  }
} else {
  console.log("로그아웃 상태");
  if (isUser) {
    console.log("사용자");
  } else if (isSeller) {
    console.log("판매자");
  } else {
    console.log("관리자");
  }
}
