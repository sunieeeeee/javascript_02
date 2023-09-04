//배열의 구조분해 할당

const color = ['red', 'yellow', 'green'];
const [a, b] = color;
console.log(a);
console.log(b);


const color1 = ['red', 'blue', 'green', 'gray', 'pink'];
// const [a1, a2, a3, a4, a5] = color1;
const [a1, , a3] = color1;  //위에처럼 안하고 걍 건너뛰면 됨
console.log(a1, a3)


const color2 = ['red', 'blue', 'green', 'gray', 'pink'];
// const [a1, a2, a3, a4, a5] = color1;
const [, b3, ,b4] = color2;  //위에처럼 안하고 걍 건너뛰면 됨
console.log(b3, b4);

const all = ['a1', 'a2', 'a3'];
const [i, c, d, e = "data"] = all;      //e = "data"-> 없는거 추가
console.log(i);
console.log(c);
console.log(d);
console.log(e);