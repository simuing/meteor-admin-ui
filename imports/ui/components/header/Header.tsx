import React, { useEffect, useState } from 'react';
import { RiHome5Fill, RiLoginBoxFill, RiSettingsFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useMenuState } from '/imports/atoms/menuState';

export const Header = () => {
  const [menuState, setMenuState] = useMenuState();

  useEffect(() => {
  },[])
  
  return (
    <header id="ma-header">
      <div className="ma-header-left">
        <h1>{menuState.menunm}</h1>
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
