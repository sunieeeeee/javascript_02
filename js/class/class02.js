class User { 
    constructor(first, last) { 
        this.first = first;
        this.last = last;
    }
    getCall() { 
        document.write(`<p>${this.first} : ${this.last}</p>`)
    }
}


//class 객체에 들어가는 데이터 만들기
const myName = [
    new User('red', 'lee'),
    new User('blue', 'kim'),
    new User('pin', 'park')
];

for (let i of myName) { 
    i.getCall();
}
