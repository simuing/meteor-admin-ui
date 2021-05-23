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
        <h4>Interface</h4>
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
<Highlight languages={"typescript"}>{`
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
<Highlight languages={"typescript"}>{`
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
  </>
)
}

export default TS4;