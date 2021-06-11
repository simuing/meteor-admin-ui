
import React from 'react';
import Highlight from 'react-highlight';

const Generic = () => {
  return (
    <>
    <h3 className="page-subtitle">
      Generic
    </h3>

    <div className="page-card">
        <h4>Basic Generic</h4>
        <p>
            1. c++의 템플릿 라이브러리처럼 타입에 변수를 주고 싶을 때 사용된다.<br/>
            2. Generic을 쓰면 코드 작성시 타입 오류를 방지할 수 있다.<br/>
        </p>
        <Highlight languages={"javascript"}>{`
// 매개변수와 반환하는 값의 타입이 같을 경우 - string/number
function helloString(message: string): string {
  return message;
}
function helloNumber(message: number): number {
  return message;
}
// 더 많이 반복된 함수들...

function hello(message: any): any {
  return message;
}

//가상의 타입을 T로 넣엇을 때 매개변수와 반환 타입이 같다.
function helloGeneric<T>(message: T): T {
  return message;
}

// 반환된 값이 같은 타입인지 타입 헬퍼로 확인할 수 있다.
console.log(hello(10).length);        // 결과 예측 불가
console.log(helloGeneric(20).length); // 반환값의 타입 오류를 미리 확인

// Generic 을 적용한 후 타입 헬퍼로 매개변수 타입을 체크한다.
console.log(helloGeneric<number>(30).toString()); // 올바르게 작성됨
console.log(helloGeneric<string>(30).toString()); // 매개변수 타입이 다름
        `}</Highlight>

        <h5>sample code</h5>
        <Highlight languages={"javascript"}>{`
function helloGeneric<T>(message: T): T {
  return message;
}

console.log(helloGeneric<string>('Hello'));
let age = helloGeneric(35);
helloGeneric<number>('35');

/*
1. Generic 타입을 쓰지 않으면, T 로 추론
2. Generic 타입을 쓰면, T 를 확인
*/
        `}</Highlight>
    </div>


    <div className="page-card">
        <h4>Generic Array</h4>
        <p>
            1. 두 구문은 동일한 구문이다.<br/>
            2. 두번째 구문은 내부적으로 Generic을 사용한 구문이다.<br/>
        </p>
        <Highlight languages={"javascript"}>{`
const a: string[] = [];
const b: Array<string> = [];
        `}</Highlight>

        <p>
          Generic 타입을 Array형식으로 선언할 수 있다.<br/>
        </p>
        <Highlight languages={"javascript"}>{`
function hello<T>(messages: T[]): T {
  return messages[0];
}
        `}</Highlight>
    </div>

    <div className="page-card">
        <h4>Generic Class</h4>
        <p>
            1. 구현체에 return T 를 설정하지 않아도, return false 시 오류가 나지 않는다?<br/>
            때에 따라서 별로일 수 있는 방식이다. function에 인터페이스를 지정해도 실제로 어떤 function이 들어가도 타입을 제대로 비교하지 못했었는데,
            그 것과 똑같은 형태로 나타난다.
        </p>
        <Highlight languages={"javascript"}>{`
class Person<T> {
  private _name: T;
  private _age: number;

  constructor(name: T) {
    this._name = name;
  }
}

new Person('Mark');
// new Person<string>(35);

/*
명시적으로 제네릭 타입을 설정하면 오류
*/
        `}</Highlight>
    </div>



    <div className="page-card">
        <h4>Generic with extends</h4>
        <p>
            T 가 string 또는 number를 상속받기 때문에 boolean은 안된다.
        </p>
        <Highlight languages={"javascript"}>{`
class Person<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new Person('Mark');
new Person(35);
// new Person<string>(true); //Argument of type 'boolean' is not assignable to parameter of type 'string'.
        `}</Highlight>
        
        <h4>타입을 멀티로 받는 방식</h4>
        <Highlight languages={"javascript"}>{`
class Person<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}
new Person('Mark', 28); 
        `}</Highlight>
    </div>



    <div className="page-card">
        <h4>type lookup system</h4>
        <Highlight languages={"javascript"}>{`
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'Jang',
  age: 28
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}

console.log(getProperty(person, 'name'));
// console.log(getProperty(person, fullname));
setProperty(person, 'name', 'Anna');
console.log(getProperty(person, 'name'));
// setProperty(person, 'name', 24);
        `}</Highlight>
    </div>
    
    
    <div className="page-card">
        <h4>Keyof Type Operator</h4>
        <Highlight languages={"javascript"}>{`
type Point = { x: number; y: number };
type P = keyof Point; //type P = keyof Point

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish; //type A = number

// this is because JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"].
type Mapish = { [k: string]: boolean };
type M = keyof Mapish; //type M = string | number
        `}</Highlight>
    </div>

    </>
  )
}

export default Generic;