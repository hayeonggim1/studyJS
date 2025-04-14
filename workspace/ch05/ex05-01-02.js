/*
첫 번째 구매 항목 출력(두부)하고 그 값을 양파로 수정
document.getElementById(id): id 속성으로 요소 선택
텍스트 노드의 nodeValue: 문자열 값
*/

// DOM에서 요소를 선택하는 두 가지 방법
// 1. getElementById: id 속성으로 요소 선택
// const shoppingList = document.getElementById('purchases'); // ul 요소 선택

// 2. getElementsByClassName: class 속성으로 요소 선택 (배열 형태로 반환되므로 인덱스 지정 필요)
const shoppingList = document.getElementsByClassName("list")[0]; // ul 요소 선택

// nodeValue를 사용하여 텍스트 내용 수정
firstTextNode.nodeValue = "양파";
