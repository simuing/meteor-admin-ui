import React from 'react';
import Highlight from 'react-highlight';


/**
 * @description Type Assertions, Type alias
 * @author silverzero
 * @create 2021.5.18
 */
const TypeAssertions = () => {
return (
<>
    <h3 className="page-subtitle">
        Type Assertions, Type alias
    </h3>


    <div className="page-card">
        <h4>Type Assertions</h4>
        <p>
            '타입이 이것이다'라고 컴파일러에게 알려주는 것을 의미한다. 형변환과는 다르다.<br/>
            compiler를 속이는 행위이기 때문에 주의가 필요하다.
            <br/><br/>
            주로 넒은 타입에서 좁은 타입으로 강제하는 경우가 많다.<br/>
            1. 변수 as 강제할 타입<br/>
            2. {`<강제할타입>`}변수
        </p>

        <h5>sample code</h5>
<Highlight languages={"javascript"}>{`
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;
`}</Highlight>
    </div>


    <div className="page-card">
        <h4>Type alias (별명)</h4>
        <p>
            Primitive, Union Type, Tuple<br/>
            직접 작성해야하는 타입을 다른 이름으로 지정할 수 있다.<br/>
            만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것이 아니다.
        </p>

        <h5>Aliasing Primitive</h5>
        <p>별 의미 없다.</p>
<Highlight languages={"javascript"}>{`
type MyStringType = string;

const str = 'world';

let myStr: MyStringType = 'hello';
myStr = str;
`}</Highlight>

        <h5>Aliasing Union Type</h5>
        <p>
            1. 유니온 타입은 A도 가능하고 B도 가능한 타입<br/>
            2. 짧게 쓰기 위함
        </p>
<Highlight languages={"javascript"}>{`
type StringOrNumber = string | number;
let b: StringOrNumber;

b = '스트링'; // OK
b = 0; // OK

function test(arg: StringOrNumber): StringOrNumber {
    return arg;
}
`}</Highlight>

        <h5>Aliasing Tuple</h5>
        <p>
            1. 튜플 타입에 별칭을 줘서 여러 곳에서 사용할 수 있게 한다.
            {/* Array에 다양한 타입을 담을 수 있는 것이 튜플 */}
        </p>
<Highlight languages={"javascript"}>{`
let person: [string, number] = ['sz', 20];

type PersonTuple = [string, number];

let another: PersonTuple = ['Hyo', 20];
`}</Highlight>
    </div>
 


    <div className="page-card">
        <h4>Interface 와의 차이점(1)</h4>
        <p>
            컴파일이 시도되었을때 타입에서 에러가 날 경우 타입으로 알려준다고 한다.
        </p>

        <h5>sample code</h5>
<Highlight languages={"javascript"}>{`
type Alias = { num: number } 

interface Interface {
    num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

/*

1. type alias 는 object literal type 으로
2. interface 는 interface 로

*/
`}</Highlight>
    </div>

    <div className="page-card">
        <h4>Interface 와의 차이점(2)</h4>
        <p>
          interface와 클래스에 상속받을 수 있지만 권장하는 방식이 아니다.
        </p>

        <h5>sample code</h5>
<Highlight languages={"javascript"}>{`
type PersonAlias = {
  name: string;
  age: number;
}

interface IPerson extends PersonAlias {

}

let ip: IPerson = {
  name: 'Mark',
  age: 35
};

class PersonImpl implements PersonAlias {
  name: string;
  age: number;

  hello() {
    console.log('안녕하세요.');
  }
}

let pi: PersonImpl = new PersonImpl();
pi.hello();

class PersonChild extends PersonAlias {

}
`}</Highlight>
    </div>
</>
)}

export default TypeAssertions;
