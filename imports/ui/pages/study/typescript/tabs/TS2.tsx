import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

/**
 * @description Type
 * @author silverzero
 * @create 2021.5
 */
const TS2 = () => {
    return (
        <>
            <h3 className="page-subtitle">
                Basic Types
            </h3>
            <div className="page-card">
                <div className="page-card-num">1</div>
                <h4>Primitive Type</h4>
                <p>오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형</p>
                <p>Primitive형의 내장 함수를 사용 가능한 것은 JavaScript 처리 방식 덕분</p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    let name = 'mark';
    name.toString();
`}</SyntaxHighlighter>
            </div>
            <div className="page-card">
                <div className="page-card-num">2</div>
                <h4>literal</h4>
                <p>
                    값 자체가 변하지 않는 값을 의미<br/>
                    상수는 가리키는 포인터가 고정이라는 것이고, 리터럴은 그 자체가 값이자 그릇이라는 차이가 있다.
                </p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    35; // number 리터럴은
    'sz' // string 리터럴
    true // boolean 리터럴

    // object 리터럴
    {
        name: 'sz',
        age: 20
    }
`}</SyntaxHighlighter>
            </div>
            <div className="page-card">
                <div className="page-card-num">3</div>
                <h4>Boolean / boolean</h4>
                <p>true or flase</p>
                <p>boolean - primitive type<br/>Boolean - reference type/object</p>
                <p>Null check가 필요 없는 경우 기본 자료형 boolean을 사용하는 것이 좋다.</p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    let isDone: boolean = false;

    typeof isDone === 'boolean' // true

    // Type 'boolean' is assignable to type 'Boolean'
    let isOk: Boolean = true;

    // Type 'Boolean' is not assignable to type 'boolean'
    // 'boolean' is a primitive, but 'Boolean' is a wraper object.
    // prefer using 'boolean' when possible.
    let isNotOk: boolean = new Boolean(true);
`}</SyntaxHighlighter>
            </div>
            <div className="page-card">
                <div className="page-card-num">4</div>
                <h4>Number / number</h4>
                <p>JavaScript 와 같이, TypeScript 의 모든 숫자는 부동 소수점 값이다.</p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    let decimal: number = 6; // 10진수 리터럴

    let hex: number = 0xf00d; // 16진수 리터럴

    let binary: number = 0b1010; // 2진수 리터럴

    let octal: number = 0o744; // 8진수 리터럴
`}</SyntaxHighlighter>
            </div>
            <div className="page-card">
                <div className="page-card-num">5</div>
                <h4>String / string</h4>
                <p>ES6에 들어가는 Template string을 주로 사용</p>
                <p>큰 따옴표 "" 나 작은 따옴표 '' 를 사용</p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    let name: string = "sz";

    name = 'sz';
`}</SyntaxHighlighter>

                <h4>Template String</h4>
                <p>
                    행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열<br/>
                    backtick(= backquote) 기호에 둘러쌓여 있다.
                </p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    let fullName: string = &#96;Bob Bobbington&#96;;
    let age: number = 37;

    let sentence: string =&#96;Hello, my name is ${ `{ fullName }` }.
    I'll be be ${ `{ age + 1 }` } years old next month.&#96;;
`}</SyntaxHighlighter>
            </div>
            <div className="page-card">
                <div className="page-card-num">6</div>
                <h4>undefined {`&`} null</h4>
                <p>둘 다 소문자만 존재</p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    let u: undefined = undefined;
    let n: null = null;
`}</SyntaxHighlighter>
            </div>
            <div className="page-card">
                <div className="page-card-num">7</div>
                <h4>void</h4>
                <p>타입이 없는 상태, `any`와 반대의 의미이다.</p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    function returnVoid(msg): void {
        console.log(msg);
    }
    returnVoid('return void')
`}</SyntaxHighlighter>
            </div>
            <div className="page-card">
                <div className="page-card-num">8</div>
                <h4>any</h4>
                <p>어떤 타입이어도 상관 없는 타입</p>
                <p>컴파일 시 타입 체크가 정상적으로 이뤄지지 않기 때문에 최대한 쓰지 않는 것을 권장한다.</p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    function returnAny(msg): any {
        console.log(msg);
    }
    returnVoid('return any')
`}</SyntaxHighlighter>
            </div>
            <div className="page-card">
                <div className="page-card-num">9</div>
                <h4>Never</h4>
                <p>리턴에 주로 사용된다.</p>
                <p>아래 3가지 정도의 경우가 대부분이다.</p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    function error(msg: string): never {
        throw new Error(msg);
    }

    function fail() {
        return error("Something failed");
    }
    
    function infiniteLoop(): never {
        while (true) {
        }
    }
`}</SyntaxHighlighter>
            </div>
            <div className="page-card">
                <div className="page-card-num">10</div>
                <h4>Array</h4>
                <p>JavaScript 에서 Array는 객체이다.</p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    interface Person {
        name: string;
        age: number;
    }

    const p: Person {
        name: 'sz',
        age: 20
    }

    Person[] // (1)
    Array<Person> // (2)
`}</SyntaxHighlighter>
            </div>
            <div className="page-card">
                <div className="page-card-num">11</div>
                <h4>Tuple</h4>
                <p>배열인데 타입이 한가지가 아닌 경우, 사용시 주의가 필요</p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    // Declare a tuple type
    let x: [string, number];
    // Initialize it
    x = ["hello", 10]; // OK
    // Initialize it incorrectly
    x = [10, "hello"]; // Error

    x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

    console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'

    x[6] = true; // Error, 'boolean' isn't 'string | number'
`}</SyntaxHighlighter>
            </div>
            <div className="page-card">
                <div className="page-card-num">12</div>
                <h4>Enum</h4>
                <p>C의 enum과 같다.</p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    enum Color {Red, Green, Blue}
    let c: Color = Color.Green;

    enum Color {Red = 1, Green, Blue}
    let c: Color = Color.Green;
    
    enum Color {Red = 1, Green = 2, Blue = 3}
    let c: Color = Color.Green;

    enum Color {Red = 1, Green, Blue}
    let colorName: string = Color[2];
`}</SyntaxHighlighter>
            </div>
            <div className="page-card">
                <div className="page-card-num">13</div>
                <h4>Symbol</h4>
                <p>ECMAScript 2015의 Symbol</p>
                <p>Primitive Type의 값을 담아서 사용, 고유하고 수정 불가능한 값으로 만들어준다.</p>
                <p>접근제어자 private를 흉내내기 위해 사용되기도 했다.</p>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
    let sym = Symbol();

    let obj = {
        [sym]: "value"
    };

    console.log(obj[sym]); // "value"
`}</SyntaxHighlighter>
            </div>
        </>
    )
}

export default TS2;