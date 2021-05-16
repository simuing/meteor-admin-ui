import React, { useEffect, useState } from 'react';

export const TypeScript = () => {
    const [page, setPage] = useState('1');

    useEffect(() => {
        console.log('[INFO] TypeScript page updated')
        return () => {
            console.log('[INFO] TypeScript page clear')
        }
    },[page])

    const onClickPage = (e) => {
        setPage(e.target.name);
    }

    const getPage = () => {
        let result = (<></>);
        switch (page) {
            case '1': result = <TS1/>; break;
            case '2': result = <TS2/>; break;
            case '3': result = <TS3/>; break;
            default: break;
        }
        return result;
    }

    return (
        <div>
            {/* <h1 className="page-title">타입스크립트</h1> */}

            <div className="page-content">
                <div>
                    <button type="button" name="1" className={"btn-default cm-w-100px"+(page==="1"?" btn-default-active":"")} onClick={onClickPage}>TypeScript</button>
                    <button type="button" name="2" className={"btn-default cm-w-100px"+(page==="2"?" btn-default-active":"")} onClick={onClickPage}>Type</button>
                    <button type="button" name="3" className={"btn-default cm-w-100px"+(page==="3"?" btn-default-active":"")} onClick={onClickPage}>3</button>
                </div>
                <div>
                    {getPage()}
                </div>
            </div>
        </div>
    )
}
// 1 - TypeScript 란?
const TS1 = () => {
    return (
        <>
            <h3 className="page-subtitle">
                TypeScript
            </h3>

            <div className="page-card">
                <h4>JavaScript의 슈퍼셋(superset) 언어</h4>
                <p>개발언어 중 하나로, 자바스크립트의 슈퍼셋 언어이다.</p>
                <p>
                    자바스크립트는 인터프리터 언어이고 타입스크립트는 Compiled Language 이다.<br/>
                    전통적인 방식과는 다른 점이 많아 Transpile이라는 용어를 사용하기도 한다.<br/>
                    바벨도 Transpile이다. 이러한 기술을 타입스크립트는 컴파일 후 자바스크립트보다 양이 많아진다는 단점이 있다.
                </p>
                <p>
                    Language	TypeScript	JavaScript
                    Type	정적 타입 언어	동적 타입 언어
                        Compiled 컴파일 언어	Interpreted 절차형 언어
                    컴파일 필요	O	X
                    컴파일러 필요	O	X
                    컴파일 시점	O	X
                    컴파일 결과물 실행	O	X 코드 자체를 실행
                    컴파일 결과물 실행 시점	컴파일 타임	X
                </p>
                <p>
                    Traditional Compiled Language
                </p>
                <ul>
                    <li>* 컴파일 언어라고 한다.</li>
                    <li>* 프로그래머가 작성한 소스코드를 기계어로 변환하는 과정을 컴파일이라고 한다.</li>
                    <li>* 컴파일하는 프로그램을 컴파일러라고 한다.</li>
                    <li>* 컴파일된 코드는 작은 크기에 최적화된다.</li>
                    <li>* 일반적으로 실행시 기계어로 바꾸는 방식(인터프리터 언어)보다 빠르다. 실행시 기계어로 바꿔주는 연산이 필요없기 때문이다.</li>
                </ul>
            </div>

            <div className="page-card">
                <h4>TypeScript 데이터 타입</h4>
                <p>
                    JavaScript 기본 자료형을 포함한다. (superset)<br/>
                    사용자가 만든 타입은 결국 이 기본 자료형으로 쪼개진다.
                </p>
                <p>
                    ECMAScript 표준에 따른 기본 자료형은 6가지이다.
                </p>
                <ul>
                    <li>Boolean</li>
                    <li>Number</li>
                    <li>String</li>
                    <li>Null</li>
                    <li>Undefined</li>
                    <li>Symbol</li>
                    <li>Array : object 형</li>
                </ul>
                <p>
                    프로그래밍을 도울 몇가지 타입이 더 제공된다.
                </p>
                <ul>
                    <li>Any</li>
                    <li>Void</li>
                    <li>Never</li>
                    <li>Enum</li>
                    <li>Tuple : object 형</li>
                </ul>
            </div>
        </>
    )
}
// 1 - TypeScript 란?
const TS2 = () => {
    return (
        <>
            <h3 className="page-subtitle">
                Type
            </h3>
            <div className="page-card">
                <div className="page-card-num">1</div>
                <h4>Primitive Type</h4>
                <p>오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형</p>
                <p>Primitive형의 내장 함수를 사용 가능한 것은 JavaScript 처리 방식 덕분</p>
                <pre>
                    let name = 'mark';
                    name.toString();
                </pre>
            </div>
            <div className="page-card">
                <div className="page-card-num">2</div>
                <h4>literal</h4>
                <p>
                    값 자체가 변하지 않는 값을 의미<br/>
                    상수는 가리키는 포인터가 고정이라는 것이고, 리터럴은 그 자체가 값이자 그릇이라는 차이가 있다.
                </p>
                <pre>
                    35; // number 리터럴은
                    'sz' // string 리터럴
                    true // boolean 리터럴

                    // object 리터럴
                    {`{
                        name: 'sz',
                        age: 20
                    }`}
                </pre>
            </div>
            <div className="page-card">
                <div className="page-card-num">3</div>
                <h4>Boolean / boolean</h4>
                <p>true or flase</p>
                <p>boolean - primitive type<br/>Boolean - reference type/object</p>
                <p>Null check가 필요 없는 경우 기본 자료형 boolean을 사용하는 것이 좋다.</p>
                <pre>
                    let isDone: boolean = false;

                    typeof isDone === 'boolean' // true

                    // Type 'boolean' is assignable to type 'Boolean'
                    let isOk: Boolean = true;

                    // Type 'Boolean' is not assignable to type 'boolean'
                    // 'boolean' is a primitive, but 'Boolean' is a wraper object.
                    // prefer using 'boolean' when possible.
                    let isNotOk: boolean = new Boolean(true);
                </pre>
            </div>
            <div className="page-card">
                <div className="page-card-num">4</div>
                <h4>Number / number</h4>
                <p>JavaScript 와 같이, TypeScript 의 모든 숫자는 부동 소수점 값이다.</p>
                <pre>
                    let decimal: number = 6; // 10진수 리터럴

                    let hex: number = 0xf00d; // 16진수 리터럴

                    let binary: number = 0b1010; // 2진수 리터럴

                    let octal: number = 0o744; // 8진수 리터럴
                </pre>
            </div>
            <div className="page-card">
                <div className="page-card-num">5</div>
                <h4>String / string</h4>
                <p>ES6에 들어가는 Template string을 주로 사용</p>
                <p>큰 따옴표 "" 나 작은 따옴표 '' 를 사용</p>
                <pre>
                    let name: string = "sz";

                    name = 'sz';
                </pre>

                <h4>Template String</h4>
                <p>
                    행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열<br/>
                    backtick(= backquote) 기호에 둘러쌓여 있다.
                </p>
                <pre>
                    let fullName: string = `Bob Bobbington`;
                    let age: number = 37;

                    let sentence: string = `Hello, my name is ${ `{ fullName }` }.
                    I'll be be ${ `{ age + 1 }` } years old next month.`;
                </pre>
            </div>
            <div className="page-card">
                <div className="page-card-num">6</div>
                <h4>undefined {`&`} null</h4>
                <p>둘 다 소문자만 존재</p>
                <pre>
                    let u: undefined = undefined;
                    let n: null = null;
                </pre>
            </div>
            <div className="page-card">
                <div className="page-card-num">7</div>
                <h4>void</h4>
                <p>타입이 없는 상태, `any`와 반대의 의미이다.</p>
                <pre>
                    function returnVoid(msg): void {`{
                        console.log(msg);
                    }`}
                    returnVoid('return void')
                </pre>
            </div>
            <div className="page-card">
                <div className="page-card-num">8</div>
                <h4>any</h4>
                <p>어떤 타입이어도 상관 없는 타입</p>
                <p>컴파일 시 타입 체크가 정상적으로 이뤄지지 않기 때문에 최대한 쓰지 않는 것을 권장한다.</p>
                <pre>
                    function returnAny(msg): any {`{
                        console.log(msg);
                    }`}
                    returnVoid('return any')
                </pre>
            </div>
            <div className="page-card">
                <div className="page-card-num">9</div>
                <h4>Never</h4>
                <p>리턴에 주로 사용된다.</p>
                <p>아래 3가지 정도의 경우가 대부분이다.</p>
                <pre>
                    function error(msg: string): never {`{
                        throw new Error(msg);
                    }`}

                    function fail() {`{
                        return error("Something failed");
                    }`}
                    
                    function infiniteLoop(): never {`{
                        while (true) {
                        }
                    }`}
                </pre>
            </div>
            <div className="page-card">
                <div className="page-card-num">10</div>
                <h4>Array</h4>
                <p>JavaScript 에서 Array는 객체이다.</p>
                <pre>
                {`
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
                `}
                </pre>
            </div>
            <div className="page-card">
                <div className="page-card-num">11</div>
                <h4>Tuple</h4>
                <p>배열인데 타입이 한가지가 아닌 경우, 사용시 주의가 필요</p>
                <pre>
                {`
                    // Declare a tuple type
                    let x: [string, number];
                    // Initialize it
                    x = ["hello", 10]; // OK
                    // Initialize it incorrectly
                    x = [10, "hello"]; // Error

                    x[3] = "world"; // OK, 'string' can be assigned to 'string | number'

                    console.log(x[5].toString()); // OK, 'string' and 'number' both have 'toString'

                    x[6] = true; // Error, 'boolean' isn't 'string | number'
                `}

                {/* {tupleTest()} */}
                </pre>
            </div>
            <div className="page-card">
                <div className="page-card-num">12</div>
                <h4>Enum</h4>
                <p>C의 enum과 같다.</p>
                <pre>
                {`
                    enum Color {Red, Green, Blue}
                    let c: Color = Color.Green;

                    enum Color {Red = 1, Green, Blue}
                    let c: Color = Color.Green;
                    
                    enum Color {Red = 1, Green = 2, Blue = 3}
                    let c: Color = Color.Green;

                    enum Color {Red = 1, Green, Blue}
                    let colorName: string = Color[2];
                `}
                </pre>
            </div>
        </>
    )
}

// const tupleTest = () => {
//     // Declare a tuple type
//     let x: [string, number];
//     // Initialize it
//     x = ["hello", 10]; // OK
//     // Initialize it incorrectly
//     // x = [10, "hello"]; // Error

//     x[3] = "world"; // OK, 'string' can be assigned to 'string | number'
//     console.log(x[3].toString()); // OK, 'string' and 'number' both have 'toString'
    
//     x[6] = true; // Error, 'boolean' isn't 'string | number' //==> 왜 되는지 확인필요
//     console.log(x[6].toString()); // OK, 'string' and 'number' both have 'toString'
// }

// 1 - TypeScript 란?
const TS3 = () => {
    return (
        <>
            <h3 className="page-subtitle">
                제 3장
            </h3>
        </>
    )
}
