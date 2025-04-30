// 인터페이스 상속 - 계층 구조
// ex06-13.ts 복사

(()=>{
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist {
    // title: string;
    // content: string;
    id: number;
    done: boolean;
  }

  interface TodoInfoWithTime extends TodoInfo {
    createAt: Date;
    updateAt: Date;
  }

  const todo1: TodoInfoWithTime = {
    title: '할일1',
    content: '내용1',
    id: 1,
    done: true,
    createAt: new Date(),
    updateAt: new Date()
  };

  console.log(todo1);
})();