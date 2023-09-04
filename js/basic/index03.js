//구조분해 이름바꾸기
const book = {
    title: 'javascript',
    type: 'it'
}

//level=0 -> 없는것 추가 가능 (있는것을 이렇게 쓰면 기존거가 우선순위가 높음)
const { title, level=0 } = book;    
console.log(title);
console.log(level);

//키의 변경
const str = title;
console.log(str);
console.log(title);

//변수명 바꾸고 싶을때
const graphic = {
    no: 'painkt',
    title2: 'photoshop'
}
const { no:art, title2 } = graphic; //no:art -> no라는변수명 안쓰고 변수명 바꾸고 싶을때
console.log(art);
// console.log(no);







