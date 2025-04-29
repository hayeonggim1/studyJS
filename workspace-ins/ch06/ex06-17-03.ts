// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사

(()=>{
  function echo<T extends string | number>(msg: T): T {
    return msg;
  }

  console.log(echo<string>('hello'));
  console.log(echo<number>(100));
  // console.log(echo<boolean>(true)); // 타입 에러

  const str = echo<string>('hello');
  const num = echo<number>(123.456);

  console.log(str.toUpperCase(), num.toFixed(2));
})();
