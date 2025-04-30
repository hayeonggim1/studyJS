// 인터페이스 선언 병합
// ex06-15.ts 복사

(()=>{
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  interface TodoRegist {
    id: number;
    title: string; // 타입이 같다면 동일한 속성도 상관 X
    done: boolean;
    create: Date;
  }

  const todo1: TodoRegist = {
    id: 1,
    title: '할일1',
    content: '내용1',
    done: false,
    create: new Date()
  };

  console.log(todo1);

})();