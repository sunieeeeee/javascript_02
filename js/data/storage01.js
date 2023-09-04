localStorage.setItem('book', 'javascript');
                    // key       value

const color = {
    title: 'red',
    sample: 'apple',
    no: ['no01', 'no02']
}

    //color를 로컬스토리지에 넣기
    //(로컬스토리지에 넣고싶으면 먼저 객체를 json화 시켜야 함)
//localStorage.setItem('color', color)

const str = JSON.stringify(color);
console.log(str);
localStorage.setItem('color', str);

//get
const obj = localStorage.getItem('book');
console.log(obj);

const obj2 = localStorage.getItem('color');
// console.log(obj2);
// console.log(obj2.sample);
const obj3 = JSON.parse(obj2);
console.log(obj3.sample);



// localStorage.clear();
// let book = localStorage.getItem('book');
// console.log(book);

// let sample = localStorage.getItem('color');
// console.log(JSON.parse(sample));


