import React, { useState, useEffect } from 'react';

export const ErrorPage = (num: string) => {
    const [errorNum, setErrorNum] = useState(num)

    useEffect(()=>{
    },[]);
    
    return (
        <>
            <div id="ma-error">
                <div>
                    Error {errorNum} ~!
                </div>

                <div>
                    페이지 준비중입니다. ㅠㅠ
                </div>
            </div>
        </>
    )
}
