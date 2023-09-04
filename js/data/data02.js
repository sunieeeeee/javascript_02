const color = {
    title: 'red',
    sample: 'apple',
    no: 123
}
console.log(color)

// JSON.stringify();
// JSON.parse();

//JSON.stringify() : 일반적인 객체를 json형태로 내보내기
const str = JSON.stringify(color);
console.log(str);
console.log(str.sample) //str은 json 이기때문에 undefined 나옴


//JSON.parse() : json을 객체로 바꿔서 가져오기
const obj = JSON.parse(str);
console.log(obj);
console.log(obj.sample); //obj는 객체이기 때문에 점표기법이 먹음






