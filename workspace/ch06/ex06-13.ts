// 인터페이스 상속

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

  const todo1: TodoInfo = {
    title: '할일1',
    content: '내용1',
    id: 1,
    done: true
  };

})();