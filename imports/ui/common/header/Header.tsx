import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {

  return (
    <header id="sz-header">
      <div className="sz-header-left">
        LOGO
      </div>

      <div className="sz-header-center">
        <Link to="/dashboard">HOME</Link>
        <Link to="/chat">채팅방</Link>
        <Link to="/guestbook">방명록</Link>
      </div>

      <div className="sz-header-right">
        <a>Login</a>
        <a>MyPage</a>
      </div>
    </header>
  );
};
