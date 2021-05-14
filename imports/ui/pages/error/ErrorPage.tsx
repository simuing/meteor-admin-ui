import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = (num: string) => {
    const [errorNum, setErrorNum] = useState(num)

    useEffect(()=>{
    },[]);

    return (
        <>
            <div id="ma-error">
                <div className="error-code">
                    <p>{errorNum}</p> <span>Error</span>
                </div>
                <div className="error-description">
                    <span>페이지가 존재하지 않거나 준비 중 입니다.</span>
                </div>
                <div className="error-btn">
                    <Link to="/dashboard">Back to Home</Link>
                </div>
            </div>
        </>
    )
}
