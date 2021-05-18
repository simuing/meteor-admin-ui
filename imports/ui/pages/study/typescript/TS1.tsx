import React from 'react';

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

export default TS1;