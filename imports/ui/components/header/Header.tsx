import React from 'react';
import { RiHome5Fill, RiLoginBoxFill, RiSettingsFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header id="ma-header">
      <div className="ma-header-left">
        <Link to="/dashboard">
        </Link>
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
