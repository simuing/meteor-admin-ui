import React from 'react';
import Highlight from 'react-highlight';

/**
 * @description Iterator
 * @author silverzero
 * @create 2021.5.18
 */
const Iterator = () => {
return (
<>
    <h3 className="page-subtitle">
        Iterator
    </h3>

    <a href="https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html" target="_blank">
      https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
    </a>

    <div className="page-card">
        <h4>for..of</h4>
        <p>
          배열을 돌 때 사용하는 javascript 문법
        </p>
        <p>
          ES3<br/>
          {`for (var i = 0; i < Array.length; i++)`}
        </p>
        <p>
          ES5<br/>
          array.forEach<br/>
          return 으로 순회를 탈출할 수 없다.
        </p>
        <p>
          ES6<br/>
          for (const item of array)<br/>
          배열에서만 사용이 가능
        </p>
    </div>

    <div className="page-card">
        <h4>for..in</h4>
        <p>배열을 순회할 때는 사용하지 않을 것</p>
        <ul>
          <li>index 가 number가 아니라 string 으로 나온다.</li>
          <li>배열의 프로퍼티를 순회할 수도 있다.</li>
          <li>prototype체인의 프로퍼티를 순회할 수도 있다.</li>
          <li>루프가 무작위로 순회할 수도 있다.</li>
          <li>for..of 를 쓸 것</li>
        </ul>

        <p>객체를 순회할 때</p>
        <ul>
          <li>
            for (const prop of Object.keys(obj)) 로 대신 사용할 수 있다.
          </li>
        </ul>
    </div>


    <div className="page-card">
        <h4>Symbol.iterator</h4>
        <ul>
          <li>프로퍼티이며, 함수가 구현되어있으면, iterable 이라고 한다.</li>
          <li>Array, Map, Set, String, Int32Array, Unit32Array, etc. 에는 내장된 구현체가 있으므로 이터러블하다.</li>
          <li>그냥 객체는 이터러블하지 않다.</li>
          <li>이터레이터를 통해 이터러블한 객체의 Symbol.iterator함수를 호출한다.</li>
        </ul>

        <p>객체를 순회할 때</p>
        <ul>
          <li>
            for (const prop of Object.keys(obj)) 로 대신 사용할 수 있다.
          </li>
        </ul>
    </div>
</>
)}

export default Iterator;
