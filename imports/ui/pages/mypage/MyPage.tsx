import React, { useEffect, useState } from 'react';

export const MyPage = () => {
    const [nickName, setNickName] = useState('');

    useEffect(() => {
        setNickName(localStorage.getItem('nickname'))
    },[])
    
    return (
        <div id="mypage-area">
            <h1 className="page-title">마이페이지</h1>

            <h3 className="page-subtitle">내 정보</h3>
            <div>
                <span>닉네임:</span>
                <span>{nickName}</span>
            </div>
        </div>
    )
}
