let fruit = {
    color: 'red',
    name: 'apple',
    price: 1000
}

let str = JSON.stringify(fruit); //Json으로

localStorage.setItem('fruit', str);

const num = localStorage.getItem('fruit');
console.log(num);
const str2 = JSON.parse(num);
console.log(str2);

document.write(
    `<dl>
        <dt>${str2.name}</dt>
        <dd>${str2.color}</dd>
        <dd>${str2.price}</dd>
    </dl>`

)

localStorage.removeItem('color');
localStorage.clear();