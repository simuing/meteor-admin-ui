
import React from 'react';
import Highlight from 'react-highlight';


/**
 * @description Indexable Types
 * @author silverzero
 */
const IndexableTypes = () => {
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
<Highlight languages={"javascript"}>{`
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
`}</Highlight>
    </div>


    <div className="page-card">
        <h4>string index = optional property</h4>
        <p>
            name은 필수, 옵션은 옵셔널
        </p>

        <h5>sample code</h5>
<Highlight languages={"javascript"}>{`
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
`}</Highlight>
    </div>

  </>
  )
}

export default IndexableTypes;