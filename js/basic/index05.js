//스프레드 연산자
const fruit = ['apple', 'orange', 'banana'];
console.log(fruit);
console.log(fruit[0], fruit[1], fruit[2]);
console.log(...fruit);


console.log('--------')

// obj(...fruit);

function obj(a,b,c) { 
    // return console.log(...a);
    // return console.log(a,b,c);

    // return { a: a, b: b, c: c}
    return { a, b, c };
}
console.log(obj(fruit))
console.log(obj(...fruit));



