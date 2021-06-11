

import React from 'react';
import Highlight from 'react-highlight';

const Decorator = () => {
  return (
    <>
    <h3 className="page-subtitle">
      Decorator
    </h3>

    <div className="page-card">
        <h4>Decorator 종류</h4>
        <p>
          Decorator는 JavaScript에 대한 2단계 제안이며 TypeScript의 실험적 기능으로 사용할 수 있다.
        </p>
        <p>
          <a href="https://github.com/tc39/proposals">TC39</a><br/>
          <a href="https://www.ecma-international.org/technical-committees/">ECMA TC</a>
        </p>
        <p>
            1. Class Decorator<br/>
            2. Method Decorator<br/>
            3. Property Decorator<br/>
            4. Parameter Decorator<br/>
        </p>
    </div>



    <div className="page-card">
        <h4>Class Decorator Advanced</h4>
        <h5>sample code</h5>
        <Highlight languages={"javascript"}>{`
function hello(constructFn: Function) {
  console.log(constructFn);
}

function helloFactory(show: boolean) { //팩토리스타일
  if (show) {
      return hello;
  } else {
      return null;
  }
}

// true면 정상적으로 출력된다.
@helloFactory(true)
class Person {
  constructor() {
      console.log('new Person()');
  }
}

new Person(); 
        `}</Highlight>

        <h5>함수 일괄 추가 예시</h5>
        <Highlight languages={"javascript"}>{`
function addHello(constructorFn: Function) {
  constructorFn.prototype.hello = function() {
    console.log('hello');
  }
}

// 런타임에 추가하는 느낌
// 데코레이션을 붙임으로써 함수를 일괄적으로 추가한다.
@addHello
class Person {
  constructor() {
    console.log('new Person()');
  }
}

const person = new Person();
//person.hello(); //작동은 하지만 타입헬퍼가 인지하지 못한다.
(<any>person).hello(); 
        `}</Highlight>
    </div>



    <div className="page-card">
        <h4>Method Decorator</h4>
        <p>
          Person 클래스의 메소드에 데코레이션을 붙인다.
        </p>
        <h5>sample code</h5>
        <Highlight languages={"javascript"}>{`
function editable(canBeEditable: boolean) {
  return function(target: any, propName: string, description: PropertyDescriptor) {
    console.log(target);
    console.log(propName);
    console.log(description);

    // function을 재 작성할 수 없게 한다.
    description.writable = canBeEditable;
  }
}

class Person {
  constructor() {
    console.log('new Person()');
  }

  @editable(true)
  hello() {
    console.log('hello');
  }
}

const person = new Person();
person.hello();

// editable(false) 일 경우 함수 재작성이 불가능하므로 오류가 출력된다.
// [ERR]: Cannot assign to read only property 'hello' of object
person.hello = function() {
  console.log('world');
}

person.hello();
        `}</Highlight>
    </div>



    <div className="page-card">
        <h4>Property Decorator</h4>
        <p>
          Person 클래스의 메소드에 데코레이션을 붙인다.
        </p>
        <h5>sample code</h5>
        <Highlight languages={"javascript"}>{`
function writable(canBeWrite: boolean) {
  return function(target: any, propName: string): any {
    console.log(canBeWrite);
    console.log(target);
    console.log(propName);
    return {
      writable: canBeWrite
    }
  }
}

class Person {
  @writable(true)
  name: string = 'Mark'; //작동

//   @writable(false) //[ERR]: Cannot assign to read only property 'name' of object '#' 
//   name: string = 'Mark'; 

  constructor() {
    console.log('new Person()');
  }
}

const person = new Person();
console.log(person.name);
        `}</Highlight>
    </div>



    <div className="page-card">
        <h4>Parameter Decorator</h4>
        <p>
          Person 클래스의 메소드에 데코레이션을 붙인다.
        </p>
        <h5>sample code</h5>
        <Highlight languages={"javascript"}>{`
function printInfo(target: any, methodName: string, paramIndex: number) {
  console.log(target);
  console.log(methodName);
  console.log(paramIndex);
}

class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, @printInfo age: number) {
    this._name = name;
    this._age = age;
  }

  hello(@printInfo message: string) {
    console.log(message);
  }
}
        `}</Highlight>
    </div>

    </>
  )
}

export default Decorator;