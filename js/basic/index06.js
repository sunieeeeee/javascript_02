// js파일은 확장자 안써줘도 됨
// index.08을 num이라는 이름으로 가져옴
import num from './index.08';  

// 이름을 바꿔주지 않은 원래 이름을 export 한것을 import 할 때는
// 구조분해로 가져와야함
// import { ram, color } from './index.07';
import * as main from './index.07';


num('welcome');

// 구조분해 할당 -> *
// ram('javascript');
// console.log(color.name)

console.log(main);
console.log(main.color.name);
console.log(main.default);
main.ram(10);