
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

/**
 * @description Indexable Types
 * @author silverzero
 */
const TS5 = () => {
  return (
  <>
    <h3 className="page-subtitle">
        Indexable Types
    </h3>

    <div className="page-card">
        <h4>string OR number</h4>
        <p>
            Indexable Types에선 string 혹은 number만 사용 가능하다.
        </p>

        <h5>sample code</h5>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
interface StringArray {
    [index: number]: string;
}

const sa: StringArray = {}; // 옵셔널하다
sa[100] = '백';

interface StringDictionary {
    [index: string]: string;
}

const sd: StringDictionary = {}; // 옵셔널하다
sd.hundred = '백';

interface StringArrayDictionary {
    [index: number]: string;
    [index: string]: string;
}

const sad: StringArrayDictionary = {};
//당연히 옵셔널하다.
sad[100] = '백';
sad.hundred = '백';
`}</SyntaxHighlighter>
    </div>


    <div className="page-card">
        <h4>string index = optional property</h4>
        <p>
            name은 필수, 옵션은 옵셔널
        </p>

        <h5>sample code</h5>
<SyntaxHighlighter languages={"javascript"} style={docco}>{`
interface StringDictionary {
    [index: string]: string;
    name: string;
}

const sd: StringDictionary = {
    name: '이름' // 필수
};

sd.any = 'any'; // 어떤 프로퍼티도 가능

///////////////////////////////////

interface StringDictionaryNo {
    [index: string]: string;
    // name: number; // (X) 인덱서블 타입이 string 값을 가지기 때문에 number를 필수로 끌어오면 에러
}
`}</SyntaxHighlighter>
    </div>

  </>
  )
}

export default TS5;