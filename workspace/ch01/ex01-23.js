/*
new Object() - 생성자 함수로 객체 생성
*/

// 몰라핑 회원의 속성(객체, Object)
// const user1 = new Object();
// user1.userName = "김하영";
// user1.userNo = 13;
// user1.userGender = "female";
// user1.userLevel = "diamond";
// user1.userPassword = "1234";
// user1.userAge = 23;
// user1.userEmail = "hayeonggim1@gmail.com";

// console.log(user1);

/*
TODO Object 생성자 함수
new Object() - 생성자 함수로 객체 생성
*/

const foo = new Object();
console.log(foo);

foo.name = "함수핑";
foo["age"] = 6;
foo.job = "마법사";
foo["married"] = false;

// 함수핑 6 마법사 false
console.log(foo["name"], foo["age"], foo.job, foo.married);
// object { name: '함수핑', age: 6, job: '마법사', married: false }
console.log(typeof foo, foo);
