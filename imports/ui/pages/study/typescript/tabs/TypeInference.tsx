

import React from 'react';
import Highlight from 'react-highlight';

const TypeInference = () => {
  return (
    <>
    <h3 className="page-subtitle">
      Type Inference 타입 추론
    </h3>

    <div className="page-card">
        <h4>Class Decorator Advanced</h4>
        <p>
          기본적으로 타입을 명시적으로 쓰지 않을 때 추론하는 방법에 대한 규칙<br/>
          1. 명시적으로 쓰는 것은 타입 추론이 아니라 코드를 읽기 좋게 하는 지름길
        </p>
        <p>
          let 은 기본적으로 우리가 아는 기본 자료형으로 추론
        </p>
        <p>
          const 는 리터럴 타입으로 추론 <br/>
          1. 오브젝트 타입을 쓰지 않으면, 프로퍼티는 let처럼 추론<br/>
            * const person = {`{name: 'Mark', age: 29}`} 면<br/>
            * person = {`{name: string, age: number}`} 로 추론<br/>
        </p>
        <p>
          대부분은 추론이 쉽다.<br/>
          1. 단순 변수<br/>
          2. structuring, destructuring
        </p>
        <p>
          array, 함수의 리턴에서는 원하는대로 얻기가 힘들다.
        </p>

        <h5>배열 타입 추론</h5>
        <Highlight languages={"javascript"}>{`
const array1 = []; // const array1: any[]
const array2 = ['a', 'b', 'c']; // const array2: string[]
const array3 = ['a', 1, false]; // const array3: (string | number | boolean)[]

class Animal {
  name: string;
}

class Dog extends Animal {
  dog: string;
}

class Cat extends Animal {
  cat: string;
}

const array4 = [new Dog(), new Cat()]; //const array4: (Dog | Cat)[]
        `}</Highlight>

        <h5>리턴 타입 추론</h5>
        <Highlight languages={"javascript"}>{`
// function hello(message: string | number): "world" | 0
function hello(message: string | number) {
  if (message === 'world') {
    return 'world';
  } else {
    return 0;
  }
}
        `}</Highlight>

        <h5>유니온 타입과 타입 가드</h5>
        <span>
          대부분 유니온 타입으로 추론이 된다. 런타임에서 분류하면 사용 의미가 적으니 타입 가드 방식이 도입 되어 있다. 
          이 방식을 쓰면 
        </span>
        <Highlight languages={"javascript"}>{`
interface Person {
  name: string;
  age: number;
}

interface Car {
  brand: string;
  wheel: number;
}


// 타입 가드
// arg.name이 undefined가 아니면 
// 이 매개인자는 Person이라는 것을 검증하는 함수
function isPerson(arg: any): arg is Person {
  return arg.name !== undefined;
}

// 유니온 타입일 경우 타입 가드 함수를 사용하여 타입 추론이 되도록 한다.
function hello(arg: Person | Car) {
  if (isPerson(arg)) {
    // Person 타입 헬퍼가 출력된다.
    console.log(arg.name);
  } else {
    // Car 타입 헬퍼가 출력된다.
    console.log(arg.brand);
  }
}
        `}</Highlight>
    </div>
    </>
  )
}

export default TypeInference;