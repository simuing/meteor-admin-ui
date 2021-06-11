

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
        <h5>sample code</h5>
        <Highlight languages={"javascript"}>{`

        `}</Highlight>
    </div>
    </>
  )
}

export default TypeInference;