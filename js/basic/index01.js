const all = {
    type: 'it',
    title: 'javascript',
    'all-time': 300,
    num: [0, 1, 2],
    str: {
        a: 'mo01',
        b: 'no02',
    }
}

console.log(all.type); //점표기법
console.log(all['title']);  //대괄호표기법
console.log(all['all-time']);
console.log(all.num);
console.log(all.num[1]);
console.log(all.str.a);
console.log(all['str'].a);
console.log(all['str']['a']);



