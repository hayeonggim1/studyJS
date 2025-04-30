"use strict";
// 인터페이스 사용 - 변수, 함수의 매개변수, 리턴타입
// ex06-09.ts 복사
(() => {
    // 인터페이스를 객체의 타입을 지정
    // User라는 인터페이스를 가진 객체는, 인터페이스의 조건을 따라야 한다.
    const u1 = {
        name: 'haru',
        age: 5
    };
    const u2 = {
        name: 'namu',
        age: 8
    };
    console.log(u1.age, u2.name.toUpperCase());
    // 함수의 리턴 타입으로 인터페이스 지정
    // createUser 함수 = User 타입 객체를 만들어서 리턴
    // : User = 이 함수가 리턴할 결과는 반드시 User 모양임
    const createUser = function (name, age) {
        return { name, age }; // 입력받은 name과 age를 그대로 담아서 객체를 리턴
    };
    const u3 = createUser('유저핑', 9);
    console.log(u3.name);
    // 함수의 매개변수의 타입으로 인터페이스 지정
    // getAge = User 타입 객체를 받아서 그 안의 age만 꺼내서 반환하는 함수
    function getAge(user) {
        return user.age;
    }
    console.log(getAge(u1));
    console.log(getAge(u2));
})();
