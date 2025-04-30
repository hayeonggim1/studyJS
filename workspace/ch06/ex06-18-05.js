"use strict";
// 드롭다운 리스트 생성 - 제네릭 인터페이스와 함수
// ex06-18-04.ts 복사
(() => {
    const cityList = [
        { value: 'Seoul', selected: false },
        { value: 'busan' },
        { value: 'GwangJu', selected: true },
        // { value: 56789 },
    ];
    const zipcodeList = [
        { value: 12345, selected: false },
        { value: 34567, selected: true },
        { value: 56789 },
    ];
    function createDropdownList(list) {
        let value;
        let options = '';
        for (let item of list) {
            value = item.value;
            options += `<option selected="${item.selected ? 'selected' : ''}">${typeof value === 'string' ? value.toUpperCase() : value}</option>`;
            // 삼항연산자 => selected가 true면 'selected', false이면 ''
            // 삼항연산자 => value가 문자열인 경우, 대문자로 변환해라. 아닌 경우 그대로 리턴
        }
        return `<select>\n${options}\n</select>`;
    }
    console.log(createDropdownList(cityList));
    console.log(createDropdownList(zipcodeList));
})();
