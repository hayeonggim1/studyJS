// 랜덤 고양이 이미지 가져오기 - Fetch API 사용
// ex05-12.ts 복사
import { appendImages } from "./utils.js";
const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector('button');
btn?.addEventListener('click', getImages);
async function getImages() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            appendImages(data);
        }
        else {
            console.log(response.status, '에러 발생'); // status (응답 상태 코드)
        }
    }
    catch (err) {
        console.log('에러 발생', err);
    }
}
;
