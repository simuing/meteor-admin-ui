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
            <h1 className="page-title">타입스크립트란?</h1>

            <div className="page-content">
                <div>
                    <button type="button" name="1" className="btn-default cm-w-100px" onClick={onClickPage}>1</button>
                    <button type="button" name="2" className="btn-default cm-w-100px" onClick={onClickPage}>2</button>
                    <button type="button" name="3" className="btn-default cm-w-100px" onClick={onClickPage}>3</button>
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
                제 1장
            </h3>
            <p>
                개발언어 중 하나로, 자바스크립트의 슈퍼셋 언어이다.
                자바스크립트는 인터프리터 언어이고 타입스크립트는 Compiled Language 이다. 전통적인 방식과는 다른 점이 많아 Transpile이라는 용어를 사용하기도 한다. 바벨도 Transpile이다. 이러한 기술을 

                타입스크립트는 컴파일 후 자바스크립트보다 양이 많아진다는 단점이 있다.
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
                * 컴파일 언어라고 한다.
                * 프로그래머가 작성한 소스코드를 기계어로 변환하는 과정을 컴파일이라고 한다.
                * 컴파일하는 프로그램을 컴파일러라고 한다.
                * 컴파일된 코드는 작은 크기에 최적화된다.
                * 일반적으로 실행시 기계어로 바꾸는 방식(인터프리터 언어)보다 빠르다. 실행시 기계어로 바꿔주는 연산이 필요없기 때문이다.
            </p>
        </>
    )
}
// 1 - TypeScript 란?
const TS2 = () => {
    return (
        <>
            <h3 className="page-subtitle">
                제 2장
            </h3>
        </>
    )
}
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
