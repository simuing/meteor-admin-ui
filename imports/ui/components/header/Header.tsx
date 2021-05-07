import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <header id="sz-header">
      <div className="sz-header-left">
        <Link to="/dashboard">LOGO</Link>
      </div>

      <div className="sz-header-center">
        
        <Link to="/guestbook">방명록</Link>
      </div>

      <div className="sz-header-right">
        <Link to="/dashboard">HOME</Link>
        <Link to="/login">로그인</Link>
        <Link to="/mypage">마이페이지</Link>
      </div>
    </header>
  );
};
