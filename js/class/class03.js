//클래스 객체 본부
class Book { 
    //1. 생성자만들기
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    //2. 메서드 만들기
    getBook() { 
        document.write(`<p>${this.name} - ${this.type}</p>`)
    }
}

//3. 클래스객체 본부의 의 데이터 만들기
const myBook = [
    new Book('book1', 'all'),
    new Book('book2', 'all'),
    new Book('book3', 'all'),
]

// 자식을 빼와서 자식을 객체로 재지정
class It extends Book { 
    constructor(name, type, level) { 
        super(name, type);
        this.level = level;
    }
    //자식의 메소드 만들기
    getCall() {
        document.write(`<p>${this.name} = ${this.type} - ${this.level}</p>`)
    }
} 

//IT 데이터
const myIt = [
    new It('html', '인터넷', 1),
    new It('javascript', '개발', 2),
    new It('react', '앱', 3),
]

for (let i in myBook) {
    myBook[i].getBook();
    console.log(myBook[i])
}

for (let i in myIt) { 
    myIt[i].getCall();
}


