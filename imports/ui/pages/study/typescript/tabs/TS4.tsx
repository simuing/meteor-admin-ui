import React from 'react';
import Highlight from 'react-highlight';


/**
 * @description Interface
 * @author silverzero
 */
const TS4 = () => {
  return (
  <>
    <h3 className="page-subtitle">
        Interface
    </h3>

    <div className="page-card">
        <h4>Interface - basic</h4>
        <p>
        </p>

<h5>type만 지정하여 선언한 예시</h5>
<Highlight languages={"javascript"}>{`
function hello(person: { name: string; age: number; }): void {
  console.log(person.name + ' 입니다');
}

const p: { name: string; age: number; } = { 
  name: 'Ann',
  age: 35
};
`}</Highlight>

<h5>interface를 적용한 예시</h5>
<Highlight languages={"javascript"}>{`
interface Person {
  name: string;
  age: number;
}

function hello(person: Person): void {
  console.log(person.name + ' 입니다');
}

const p: Person = {
  name: 'Ann',
  age: 35
};
var Person {
  name: 'Ann',
  age: 35
}
`}</Highlight>

<h5>컴파일 결과</h5>
<Highlight languages={"javascript"}>{`
var Person {
  name: 'Ann',
  age: 35
}
`}</Highlight>
    </div>


    <div className="page-card">
      <h4>interface - optional property(1)</h4>
      <p>
        interface와 클래스에 상속받을 수 있지만 권장하는 방식이 아니다.
      </p>

      <h5>sample code</h5>
<Highlight languages={"javascript"}>{`
interface Person {
  name: string;
  age?: number;
}

function hello(person: Person): void {
  console.log(person.name + '입니다')
}
`}</Highlight>
    </div>

    <div className="page-card">
      <h4>ineterface - optional property(2)</h4>
      <p>
      
      </p>

      <h5>sample code</h5>
<Highlight languages={"javascript"}>{`
interface Person {
  name: string;
  age?: number;
}

function hello(p: Person): void {
  console.log(person.name + '입니다')
}

const p1: Person = {
  name: 'Mark',
  age: 34,
};

const p2: Person = {
  name: 'Anna',
  systers: [
    'Sung',
    'Chan'
  ]
};

const p3: Person = {
  name: 'jang',
  father: p1,
  mother: p2
}
`}</Highlight>

<Highlight languages={"javascript"}>{`
interface Person {
  name: string;
  [index: string]: string;
}

const person: Person = {
  name: 'Mark'
};

person.anybody = "Anna";

function hello(p: Person): void {
  console.log(p.name + ' 입니다.');
}
`}</Highlight>
    </div>
    <div className="page-card">
      <h4>ineterface - function in interface</h4>
      <p>
      </p>

      <h5>sample code</h5>
<Highlight languages={"javascript"}>{`
interface Person {
  name: string;
  hello1(): void;
  hello2(): void;
  hello3(): string;
  hello4?(): string;
}

const person: Person = {
  name: 'Mark',
  hello1: function () {
  },
  hello2: () => {
  },
  hello3: (): string => {
    return '';
  }
}
`}</Highlight>
    </div>


    <div className="page-card">
      <h4>class implements interface</h4>
      <p>
      </p>

      <h5>sample code</h5>
<Highlight languages={"javascript"}>{`
interface IPerson {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  hello(): void {
    console.log(this.name + ' 입니다.');
  }
  
  public hi(): void {
    console.log(this.name + ' 임.');
  }
}

// name, hello, hi
const person = new Person('Mark');

// name, hello
const per: IPerson = new Person('Anna');
`}</Highlight>
    </div>


    <div className="page-card">
      <h4>function interface</h4>
      <p>
        함수의 타입 체크는 할당할 때가 아니라 사용할 때 한다.
      </p>

      <h5>sample code</h5>
<Highlight languages={"javascript"}>{`
interface HelloPerson {
  // (name: string, age: number): void;
  (name: string, age?: number): void;
}

let helloPerson: HelloPerson = function (name: string) {
  console.log(name + ' 입니다.');
}

helloPerson('jang'); // jang 입니다.
`}</Highlight>
    </div>


  </>
  )
}

export default TS4;