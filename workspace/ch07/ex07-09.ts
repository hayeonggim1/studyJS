// 내장 객체 - Date

(()=>{
  // 오늘 날짜
  const today = new Date();
  console.log(today);

  console.log(today.getFullYear()); // 2025
  console.log(today.getMonth()+1); // 3+1=4 (0부터 시작함)
  console.log(today.getDate()); // 30
  console.log(today.getDay()); // 3 (0: 일요일, 1: 월요일, ... , 6: 토요일)
  console.log(today.getHours()); // 14
  console.log(today.getMinutes()); // 35
  console.log(today.getSeconds()); // 6
})();