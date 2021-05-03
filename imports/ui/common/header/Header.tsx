import React, { useState } from 'react';

export const Header = () => {

  return (
    <header id="sz-header">
      <div className="sz-header-left">
        LOGO
      </div>

      <div className="sz-header-center">
        <a>HOME</a>
        <a>GuestBook</a>
      </div>

      <div className="sz-header-right">
        <a>Login</a>
        <a>MyPage</a>
      </div>
    </header>
  );
};
