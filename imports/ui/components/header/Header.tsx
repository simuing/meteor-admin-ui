import React, { useEffect, useState } from 'react';
import { RiHome5Fill, RiLoginBoxFill, RiSettingsFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const Header = () => {
  const [menunm, setMenunm] = useState('');

  useEffect(() => {
    setMenunm(localStorage.getItem('menunm'))
  },[])
  
  return (
    <header id="ma-header">
      <div className="ma-header-left">
        <h1>{menunm}</h1>
      </div>

      <div className="ma-header-center">
      </div>

      <div className="ma-header-right">
        <Link to="/dashboard">
          <RiHome5Fill />
        </Link>
        <Link to="/login">
          <RiLoginBoxFill />
        </Link>
        <Link to="/mypage">
          <RiSettingsFill />
        </Link>
      </div>
    </header>
  );
};
