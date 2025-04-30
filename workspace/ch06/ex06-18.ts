// // 제네릭 사용처

(()=>{
  // FIXME 타입 오류가 발생하지 않도록 필요한 곳에 타입을 지정하세요.
  // add 메서드로 item을 순차적으로 저장해 두었다가 getAll 메서드로 모두 조회하는 함수
  class List<T> {
    // private (클래스 내부에서만 접근 가능)
    private items: T[] = []; // T 타입을 요소로 갖는 배열 [] 생성
    add(item: T) { // 파라미터로 T 타입의 데이터를 받음
      this.items.push(item); // items 배열에 push()해서 추가
    }
    getAll(): T[] { // 리턴타입 = T[] 
      return this.items; // 지금까지 저장된 모든 아이템을 배열로 리턴
    }
  }

  const numList = new List<number>();
  numList.add(123.456);
  numList.add(789.123);
  console.log(numList.getAll());
  console.log(numList.getAll()[0].toFixed(2));

  const strList = new List<string>();
  strList.add('hello');
  strList.add('world');
  console.log(strList.getAll());
  console.log(strList.getAll()[1].toUpperCase());
})();