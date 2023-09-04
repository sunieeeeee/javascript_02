// 구조분해

const num = {
    a1: 10,
    a2: 20,
    a3: 30
}
console.log(num);

const { a1, a2, a3 } = num;
console.log(a2);
//console.log(a2 = 'b1'); //구조분해한 변수에 다른 값을 넣을 수 없음(오류남)
//console.log(a2);


const num2 = {
    b1: 10,
    b2: 20,
    b3: 30
}

const { b1, b2, b3 } = num2;
console.log(b3);


const no = {
    a01: [0,1,2,3,4,5],
    a02: [2,3,4,5],
    a03: [0,2,3,4],
    a04: [0,1,3,4,5],
    a05: [0,1,3,4]
}

const { a01, a04 } = no
console.log(a01, a04)











