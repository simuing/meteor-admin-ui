import React from 'react';
import Highlight from 'react-highlight';

/**
 * @description Indexable Types
 * @author silverzero
 */
const TS5 = () => {
  return (
  <>
    <h3 className="page-subtitle">
        Class
    </h3>

    <div className="page-card">
        <h4>클래스 만들기</h4>
        <p>
            1. 생성자 함수가 없으면, 디폴트 생성자가 불린다.<br/>
            2. 클래스의 프로퍼티 혹은 멤버 변수가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다.<br/>
                ㄴ 오브젝트에 프로퍼티가 아예 존재하지 않는다.<br/>
            3. 접근 제어자 (Access Modifier) 는 public 이 디폴트이다.
        </p>

        <h5>sample code</h5>
        <Highlight languages={"javascript"}>{`
class Person {
    name: string;
    age: number;
}

const person: Person = new Person();
console.log(person); // Person {}
person.age = 25;
console.log(person.name); // undefined
        `}</Highlight>
    </div>


    <div className="page-card">
        <h4>클래스와 property</h4>
        <p>
        </p>

        <h5>sample code</h5>
        <Highlight languages={"javascript"}>{`
class Person {
    name: string;
    age: number;

    constructor() {
        console.log(this.name === null); // false
        console.log(this.name === undefined); // true
    }
}

const person: Person = new Person();
person.name = 'jane';
person.age = 25;
console.log(person); // Person {name: 'jane', age: 25}
        `}</Highlight>

        <h5>property 할당</h5>
        <Highlight languages={"javascript"}>{`
class Person {
    name: string = 'kang';
    age: number = 25;

    constructor(name: string) {
        this.name = name;
    }
}

const person: Person = new Person('jane');

console.log(person); // Person {name: 'jane', age: 25}
        `}</Highlight>
    </div>


    <div className="page-card">
        <h4>클래스와 접근제어자</h4>
        <p>
            1. private 으로 설정된 프로퍼티는 dot 으로 접근할 수 없다.<br/>
            2. 클래스 내부에서는 private 프로퍼티를 사용할 수 있다.<br/>
            3. private 이 붙은 변수나 함수는 _를 이름 앞에 붙이는 경우가 있는데, 이는 문법이 아니라 널리 쓰이는 코딩 컨벤션이다.
        </p>

        <h5>sample code</h5>
        <Highlight languages={"javascript"}>{`
class Person {
    public _name: string;
    private _age: number;
    protected _phone: number;

    constructor(age: number) {
        this._age = age;
    }
}

const person: Person = new Person(25);
person.name = 'Mark';
//person._age (X)
//person._phone (X)
console.log(person); // Person {name: 'Mark', age: 25}


// 접근제어자 protected는 상속 받은 자식 컴포넌트 내부에선 사용이 가능하다.
class Child extends Person {
    constructor(phone: number) {
        super();

        // this._age = 10; // (X)
        this._phone = phone; // (O)
    }
    getName() {
        return this._name;
    }
}
        `}</Highlight>
    </div>


    <div className="page-card">
        <h4>클래스와 상속</h4>
        <p>
            1. 생성자를 정의하고, this를 사용하려면, super를 통해 부모의 생성자를 호출해줘야 한다.<br/>
            2. super 를 호출할 때는 부모 생성자의 입력 타입이 같아야 한다.<br/>
            3. super 를 호출하는 것은 클래스 외부에서 호출하는 것과 같다.<br/>
            4. protected 함수를 호출해서 그 안의 private 를 출력하는 것에 주의한다.
        </p>

        <h5>sample code</h5>
        <Highlight languages={"javascript"}>{`
class Parent {
    constructor(protected _name: string, protected _age: number) { }

    print(): void {
        console.log('이름은' + this._name + '이고, 나이는 ' + this._age + '살 입니다.');
    }

    printName = (): void => {
        console.log('이름은' + this._name + '입니다.');
    }

    private printAge(): void {
        console.log('나이는 ' + this._age + '살 입니다.');
    }
}

class Child extends Parent {
    _name = 'Mark Jr.'
}

// const p: Child = new Child(); // (X)
const p: Child = new Child('', 5);
p.print(); // 이름은 Son 이고, 나이는 5살 입니다.
        `}</Highlight>
    </div>


    <div className="page-card">
        <h4>클래스와 getter, setter</h4>
        <p>
        </p>

        <h5>getter setter 사용 예시 1</h5>
        <Highlight languages={"javascript"}>{`
class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    set name(name: string) {
        this._name = name;
    }
}

const person: Person = new Person('jang', 25);

console.log(person.name); // jang
person.name = 'Won';
console.log(person.name); // Won
        `}</Highlight>

        <h5>getter setter 사용 예시 2</h5>
        <Highlight languages={"javascript"}>{`
interface IPerson {
    getName();
}

class Person implements IPerson {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    getName() {
        return this._name;
    }

    setName(name: string) {
        this._name = name;
    }
}

const person: IPerson = new Person('jang', 25);
// person.name = 'Won';
        `}</Highlight>
    </div>

    
    <div className="page-card">
        <h4>클래스와 static 프로퍼티 {`=>`} 클래스 멤버 변수</h4>
        <p>
            1. static 키워드가 붙은 프로퍼티는 클래스 프로퍼티로 사용한다.<br/>
            2. static 프로퍼티에 private, protected 를 붙히면 똑같이 동작한다.<br/>
        </p>

        <h5>sample code</h5>
        <Highlight languages={"javascript"}>{`
class Person {
    public static CITY = "";
    private static lastName: string = 'Lee';
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    public print() {
        console.log(this.name, Person.lastName, Person.CITY)
    }
}

const person: Person = new Person('Mark', 25);
Person.CITY = 'Seoul';
person.print(); // [LOG]: "Mark",  "Lee",  "Seoul" 
        `}</Highlight>
    </div>

    
    <div className="page-card">
        <h4>모듈에서 private static 프로퍼티 혹은 메서드</h4>
        <p>
            1. static 키워드가 붙은 프로퍼티는 클래스 프로퍼티로 사용한다.<br/>
            2. static 프로퍼티에 private, protected 를 붙히면 똑같이 동작한다.<br/>
        </p>

        <h5>sample code</h5>
        <Highlight languages={"javascript"}>{`
class Person {
    private static PROPERTY = '프라이빗 프로퍼티';
    private static METHOD() {
        console.log('프라이빗 메서드');
    }

    constructor() {
        console.log(Person.PROPERTY);
        Person.METHOD();
    }
}

// 위 코드와 사용처가 똑같다. 어떤 부분이 유리한지는...모른다.
const PROPERTY = '모듈 내 변수';
function METHOD() {
    console.log('모듈 내 함수');
}

export class Person {
    constructor() {
        console.log(PROPERTY);
        METHOD();
    }
}
        `}</Highlight>
    </div>

    
    <div className="page-card">
        <h4>모듈에서 private static 프로퍼티 혹은 메서드</h4>
        <p>
            1. static 키워드가 붙은 프로퍼티는 클래스 프로퍼티로 사용한다.<br/>
            2. static 프로퍼티에 private, protected 를 붙히면 똑같이 동작한다.<br/>
        </p>

        <h5>sample code</h5>
        <Highlight languages={"javascript"}>{`
class Person {
    private static PROPERTY = '프라이빗 프로퍼티';
    private static METHOD() {
        console.log('프라이빗 메서드');
    }

    constructor() {
        console.log(Person.PROPERTY);
        Person.METHOD();
    }
}

// 위 코드와 사용처가 똑같다. 어떤 부분이 유리한지는...모른다.
const PROPERTY = '모듈 내 변수';
function METHOD() {
    console.log('모듈 내 함수');
}

export class Person {
    constructor() {
        console.log(PROPERTY);
        METHOD();
    }
}
        `}</Highlight>
    </div>
  </>
  )
}

export default TS5;