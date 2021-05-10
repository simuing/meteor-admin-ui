import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [nickName, setNickName] = useState(localStorage.getItem('nickname'));

  useEffect(() => {
    // setNickName(localStorage.getItem('nickname'))
  },[])

  return (
    <header id="ma-header">
      <div className="ma-header-left">
        {nickName && <Link to="/dashboard">{nickName} 님 안녕하세요!</Link> }
      </div>

      <div className="ma-header-center">
      </div>

      <div className="ma-header-right">
        <Link to="/dashboard">HOME</Link>
        <Link to="/login">로그인</Link>
        <Link to="/mypage">마이페이지</Link>
      </div>
    </header>
  );
};
